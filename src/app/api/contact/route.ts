import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, project, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Internal Notification (To Support)
    const supportMailOptions = {
      from: `"PSV Forge Lead" <${process.env.SMTP_USER}>`,
      to: "support@psvfreelanceforge.in", 
      replyTo: email,
      subject: `New Inquiry: ${project}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${project}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; background: #f9f9f9; border: 1px solid #ddd;">
          <h2 style="color: #FF8C00;">New Project Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Inquiry Subject:</strong> ${project}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #fff; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
    };

    // 2. Automated Confirmation (To User)
    const userMailOptions = {
      from: `"PSV Freelance Forge" <${process.env.SMTP_USER}>`,
      to: email, 
      subject: `Received: ${project}`,
      text: `Hi ${name.split(' ')[0]},\n\nThank you for reaching out to PSV Freelance Forge. We have received your inquiry regarding "${project}" and our team is currently reviewing your details.\n\nYou can expect a response from one of our experts within 24 hours.\n\nBest regards,\nThe PSV Forge Team`,
      html: `
        <div style="font-family: sans-serif; padding: 30px; color: #1a1a1a; max-width: 600px; margin: auto; background: #ffffff; border: 1px solid #eee; border-radius: 12px;">
          <h1 style="color: #FF8C00; font-size: 24px;">Connection Initiated</h1>
          <p>Hi <strong>${name.split(' ')[0]}</strong>,</p>
          <p>Thank you for reaching out to <strong>PSV Freelance Forge</strong>.</p>
          <p>We have successfully received your inquiry regarding: <strong style="color: #FF8C00;">${project}</strong></p>
          <div style="background: #fdf2e9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #666;"><strong>Next Steps:</strong></p>
            <p style="margin: 10px 0 0 0; font-weight: bold; color: #c2410c;">Our team is reviewing your requirements and will contact you within 24 hours.</p>
          </div>
          <p>We look forward to forging something impactful together.</p>
          <div style="margin-top: 30px; padding: 20px; border-top: 2px solid #fdf2e9; background: #fafafa; border-radius: 8px;">
            <p style="margin: 0 0 10px 0; font-size: 12px; color: #999; text-transform: uppercase; letter-spacing: 1px; font-weight: bold;">Copy of your message:</p>
            <p style="margin: 0; font-style: italic; color: #444; font-size: 14px; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 12px; color: #999;">This is an automated response. Please do not reply directly to this email.</p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(supportMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error: any) {
    console.error("SMTP Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
