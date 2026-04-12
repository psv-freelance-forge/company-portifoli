import { NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";
import connectToDatabase from "@/lib/mongoose";
import User from "@/models/User";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_super_secret_for_hq";

export async function POST(req: Request) {
  try {
    // Only logged in Admins can invite
    const cookieStore = await cookies();
    const token = cookieStore.get("hq_auth_token")?.value;
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const decoded = jwt.verify(token, JWT_SECRET) as any;
    if (decoded.role !== "admin") return NextResponse.json({ error: "Forbidden" }, { status: 403 });

    const { email, role } = await req.json();

    if (!email || !role) {
      return NextResponse.json({ error: "Missing email or role" }, { status: 400 });
    }

    await connectToDatabase();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists with this email" }, { status: 409 });
    }

    const inviteToken = crypto.randomBytes(32).toString("hex");

    const user = new User({
      firstName: "Invited",
      lastName: "User",
      email,
      role,
      verified: false,
      inviteToken
    });

    await user.save();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const inviteUrl = `${origin}/accept-invite?token=${inviteToken}`;

    await transporter.sendMail({
      from: `"PSV Forge HQ" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "You've been invited to PSV Headquarters",
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Headquarters Access Granted</h2>
          <p>You have been formally invited to join the platform as a <strong>${role.toUpperCase()}</strong>.</p>
          <p>Please click the button below to configure your profile and set your secure password:</p>
          <br/>
          <a href="${inviteUrl}" style="background-color: #FF8C00; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Accept Invitation</a>
        </div>
      `
    });

    return NextResponse.json({ success: true, message: "Invitation dispatched successfully." });
  } catch (error) {
    console.error("Invite Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
