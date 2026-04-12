import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import ChatSession from "@/models/ChatSession";

export async function POST(req: Request) {
  try {
    const { text, url, sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json({ error: "No session ID" }, { status: 400 });
    }

    await connectToDatabase();
    
    // Find or create chat session
    let session = await ChatSession.findOne({ sessionId });
    if (!session) {
      session = new ChatSession({
        sessionId,
        status: 'active',
        messages: []
      });
    }

    session.messages.push({
      role: 'user',
      content: text,
      timestamp: new Date()
    });

    await session.save();

    return NextResponse.json({ success: true, message: "Message logged to MongoDB" });
  } catch (error) {
    console.error("Chat API DB Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
