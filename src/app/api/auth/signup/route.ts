import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import nodemailer from "nodemailer";
import connectToDatabase from "@/lib/mongoose";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, password, address, mobileNumber } = await req.json();

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await connectToDatabase();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 });
    }

    // Force role to admin for the open signup route (Hidden Route)
    const role = "admin";
    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString("hex");

    const user = new User({
      firstName,
      lastName,
      email,
      address,
      mobileNumber,
      role,
      password: hashedPassword,
      verificationToken
    });

    await user.save();

    // Verification Email
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // We assume the origin is the incoming request origin for simplicity, or hardcode your prod URL
    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const verifyUrl = `${origin}/api/auth/verify?token=${verificationToken}`;

    await transporter.sendMail({
      from: `"PSV Forge HQ" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Verify Your HQ Identity",
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>Security Verification</h2>
          <p>Hi ${firstName},</p>
          <p>You have attempted to register a Master Admin account for the PSV Forge HQ.</p>
          <p>Please click the secure link below to verify your identity and gain portal access:</p>
          <a href="${verifyUrl}" style="background-color: #FF8C00; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Verify Clearance</a>
        </div>
      `
    });

    return NextResponse.json({ success: true, message: "Verification email sent. Please check your inbox." });
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
