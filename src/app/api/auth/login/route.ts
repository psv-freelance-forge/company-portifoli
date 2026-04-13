import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectToDatabase from "@/lib/mongoose";
import User from "@/models/User";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "fallback_super_secret_for_hq";

export async function POST(req: Request) {
  try {
    console.log("DEBUG: Incoming login request...");
    const { email, password } = await req.json();

    if (!email || !password) {
      console.warn("DEBUG: Missing email or password in request body");
      return NextResponse.json({ error: "Missing email or password" }, { status: 400 });
    }

    console.log(`DEBUG: Attempting to connect to DB for user: ${email}`);
    await connectToDatabase();

    const user = await User.findOne({ email });
    if (!user) {
      console.warn(`DEBUG: User not found: ${email}`);
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    console.log(`DEBUG: User found, checking verification and status for: ${email}`);
    if (!user.verified) {
      console.warn(`DEBUG: User not verified: ${email}`);
      return NextResponse.json({ error: "Please verify your email first" }, { status: 403 });
    }

    if (user.disabled) {
      console.warn(`DEBUG: User account deactivated: ${email}`);
      return NextResponse.json({ error: "Your account has been deactivated by an administrator." }, { status: 403 });
    }

    if (!user.password) {
      console.error(`DEBUG: User found but has NO password set: ${email}`);
      return NextResponse.json({ error: "Account configuration error. Please contact support." }, { status: 401 });
    }

    console.log(`DEBUG: Comparing password for user: ${email}`);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.warn(`DEBUG: Password mismatch for user: ${email}`);
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    console.log(`DEBUG: Password match, creating JWT for: ${email}`);
    // Create JWT - ensure userId is a string
    const token = jwt.sign(
      { userId: user._id.toString(), role: user.role, email: user.email }, 
      JWT_SECRET, 
      { expiresIn: "1d" }
    );

    console.log(`DEBUG: Setting auth cookie for: ${email}`);
    // Set Cookie
    const cookieStore = await cookies();
    cookieStore.set("hq_auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 // 1 day
    });

    console.log(`DEBUG: Login successful for: ${email}`);
    return NextResponse.json({ success: true, role: user.role });
  } catch (error: any) {
    console.error("CRITICAL: Login Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name
    });
    return NextResponse.json({ 
      error: "Internal Server Error", 
      debug: error.message // Sending minimal debug info back temporarily
    }, { status: 500 });
  }
}
