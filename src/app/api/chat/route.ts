import { NextResponse } from "next/server";

const CLIQ_WEBHOOK = "https://cliq.zoho.in/api/v2/bots/supportbot/incoming";
const TOKEN = "1001.2050c451e22fe42dcd19bfff76d79872.e8e28e8839828111f0aa0ffb7624c7ca";

export async function POST(req: Request) {
  try {
    const { text, url } = await req.json();

    // Server-side logging for monitoring
    console.log(`[CHATBOT] New Message: "${text}" | Page: ${url}`);

    // Zoho Cliq Incoming Webhook
    const response = await fetch(`${CLIQ_WEBHOOK}?zapikey=${TOKEN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: `New Portfolio Message: ${text}\n\n[Inquiry Page URL](${url || 'N/A'})`,
        card: {
          title: "Forge Assistant Inquiry",
          theme: "modern-inline",
        },
        slides: [
          {
            type: "label",
            title: "Inquiry Details",
            data: [
              {
                label: "User Message",
                value: text
              },
              {
                label: "Current Page",
                value: `[View Page](${url || 'N/A'})`
              }
            ]
          }
        ]
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Zoho Cliq Error:", errorText);
      return NextResponse.json({ error: "Failed to reach Zoho Cliq" }, { status: response.status });
    }

    // Zoho Cliq webhooks are often one-way (Incoming), 
    // but we return success to the UI.
    return NextResponse.json({ success: true, message: "Message sent to support" });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
