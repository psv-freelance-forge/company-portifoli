import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import ChatSession from "@/models/ChatSession";

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    // Fetch active chats sorted by most recent
    const chats = await ChatSession.find({ status: 'active' }).sort({ updatedAt: -1 });
    return NextResponse.json({ chats });
  } catch (error) {
    console.error("Failed to fetch chats:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
