import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import connectToDatabase from "@/lib/mongoose";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import nodemailer from "nodemailer";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_super_secret_for_hq";

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("hq_auth_token")?.value;
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    if (decoded.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const { userId } = await req.json();

    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    await connectToDatabase();
    
    const targetUser = await User.findById(userId);
    if (!targetUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Generate intense random 12-char passcode
    const tempPassword = crypto.randomBytes(6).toString("hex");
    const hashedPassword = await bcrypt.hash(tempPassword, 10);

    targetUser.password = hashedPassword;
    await targetUser.save();

    // Dispatch NodeMailer email to target user
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"PSV Forge HQ" <${process.env.SMTP_USER}>`,
      to: targetUser.email,
      subject: "HQ Security: Administrator Password Override",
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Security Alert</h2>
          <p>Hi ${targetUser.firstName},</p>
          <p>An administrator has forcibly reset your account passcode.</p>
          <p>Your new temporary passcode is:</p>
          <h1 style="color: #FF8C00; letter-spacing: 2px;">${tempPassword}</h1>
          <p>Please log closely using this code and navigate to your My Profile tab to change your password immediately.</p>
        </div>
      `
    });

    return NextResponse.json({ success: true, message: "Password reverted and dispatched to user's email." });
  } catch (error) {
    console.error("Admin Password Reset Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
