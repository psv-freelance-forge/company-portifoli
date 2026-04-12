import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import Contact from "@/models/Contact";

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    // Fetch all contacts sorted by newest first
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return NextResponse.json({ contacts });
  } catch (error) {
    console.error("Failed to fetch contacts:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
