import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import User from "@/models/User";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json({ error: "Missing verification token" }, { status: 400 });
    }

    await connectToDatabase();

    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
    }

    user.verified = true;
    user.verificationToken = undefined; // clear the token
    await user.save();

    // Redirect to login page on success
    const origin = req.headers.get("origin") || process.env.NEXT_PUBLIC_APP_URL || (new URL(req.url)).origin;
    return NextResponse.redirect(`${origin}/login?verified=true`);
  } catch (error) {
    console.error("Verification Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
