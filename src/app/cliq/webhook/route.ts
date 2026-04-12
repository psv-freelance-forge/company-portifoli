import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Read raw body first since Zoho Deluge `toString()` stringifies a map but might not set application/json content-type
    const rawBody = await req.text();
    
    let data: any = {};
    try {
      data = JSON.parse(rawBody);
    } catch (e) {
      // Fallback if not valid JSON
      data = { text: rawBody };
    }

    const { text, userName, userEmail } = data;

    console.log(`[CLIQ WEBHOOK] Received: "${text}" from ${userName || 'Support Agent'} (${userEmail || 'N/A'})`);

    // The custom Next.js server attached socket.io to the global object
    const io = (global as any).io;
    if (io) {
      io.emit("support-reply", {
        user: userName || "Support",
        message: text || "System: Empty message received"
      });
      return NextResponse.json({ success: true, message: "Broadcasted to sockets" });
    } else {
      console.warn("[CLIQ WEBHOOK] Socket.io not found on global object. Using dev server?");
      return NextResponse.json({ error: "Sockets not initialized" }, { status: 500 });
    }
  } catch (error) {
    console.error("[CLIQ WEBHOOK] Critical Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
