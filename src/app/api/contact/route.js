import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.TO_EMAIL,
      subject: "New Portfolio Message",
      html: `<p>Name: <strong>${name}</strong></p>
      <p>Email: ${email}</p>
      <p>Message:</p>
      <div>${message}</div>`
    });

    return NextResponse.json({ success: true, message: "Message sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}
