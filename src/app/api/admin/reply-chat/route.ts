import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongoose";
import ChatSession from "@/models/ChatSession";

export async function POST(req: Request) {
  try {
    const { sessionId, message } = await req.json();

    if (!sessionId || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await connectToDatabase();
    
    // Save to DB
    const session = await ChatSession.findOne({ sessionId });
    if (!session) {
      return NextResponse.json({ error: "Session not found" }, { status: 404 });
    }

    session.messages.push({
      role: 'support',
      content: message,
      timestamp: new Date()
    });

    await session.save();

    // Broadcast to the specific user via global socket mapping
    const io = (global as any).io;
    if (io) {
      // In socket.io, socket.id is joined to a room of its own id by default
      io.to(sessionId).emit("support-reply", {
        user: "Support Engineer",
        message: message
      });
    }

    return NextResponse.json({ success: true, message: "Reply sent successfully" });
  } catch (error) {
    console.error("Failed to send chat reply:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
