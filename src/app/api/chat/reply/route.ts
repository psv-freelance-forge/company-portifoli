import { NextResponse } from "next/server";
import { getIO } from "@/server/socket";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("[ZOHO REPLY] Received:", body);

    // Zoho Cliq Incoming Webhook/Bot reply format vary, 
    // but assuming standard { text: "...", userName: "..." }
    const message = body.text;
    const user = body.userName || "Support";

    // Send to frontend via socket
    const io = getIO();
    if (io) {
      console.log("[SOCKET] Emitting support-reply");
      io.emit("support-reply", {
        user,
        message,
      });
    } else {
      console.warn("[SOCKET] IO instance not found during reply");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[ZOHO REPLY ERROR]", err);
    return NextResponse.json({ error: "Failed to process reply" }, { status: 500 });
  }
}
