import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import connectToDatabase from "@/lib/mongoose";
import Contact from "@/models/Contact";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_super_secret_for_hq";

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("hq_auth_token")?.value;
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    if (decoded.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const { contactId, replyText } = await req.json();

    await connectToDatabase();
    const contact = await Contact.findById(contactId);

    if (!contact) {
      return NextResponse.json({ error: "Contact inquiry not found" }, { status: 404 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the reply to the user and BCC the support email
    await transporter.sendMail({
      from: `"PSV Forge Support" <${process.env.SMTP_USER}>`,
      to: contact.email,
      bcc: "support@psvfreelanceforge.in", // Support mail logging as requested
      subject: `Re: ${contact.project}`,
      text: replyText,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <p>Hi ${contact.name.split(' ')[0]},</p>
          <div style="white-space: pre-wrap; margin: 20px 0;">${replyText}</div>
          <hr/>
          <p style="color: #666; font-size: 12px;">On ${new Date(contact.createdAt).toLocaleDateString()}, you wrote:</p>
          <blockquote style="color: #666; border-left: 2px solid #ccc; padding-left: 10px;">${contact.message}</blockquote>
        </div>
      `
    });

    contact.replied = true;
    if (!contact.responses) contact.responses = [];
    contact.responses.push({
      text: replyText,
      senderDetails: decoded.email || "Admin",
      sentAt: new Date()
    });
    await contact.save();

    return NextResponse.json({ success: true, message: "Reply dispatched." });
  } catch (error) {
    console.error("Reply Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
