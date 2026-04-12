import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectToDatabase from "@/lib/mongoose";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    const { token, firstName, lastName, address, mobileNumber, password } = await req.json();

    if (!token || !password || !firstName || !lastName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await connectToDatabase();

    const user = await User.findOne({ inviteToken: token });

    if (!user) {
      return NextResponse.json({ error: "Invalid or expired invitation token" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.firstName = firstName;
    user.lastName = lastName;
    user.address = address || "";
    user.mobileNumber = mobileNumber || "";
    user.password = hashedPassword;
    user.verified = true;
    user.inviteToken = undefined;

    await user.save();

    return NextResponse.json({ success: true, message: "Profile configured successfully! You can now log in." });
  } catch (error) {
    console.error("Accept Invite Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
