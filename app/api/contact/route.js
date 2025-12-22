import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.TO_EMAIL,
      subject: "New Contact Message — SyntaxPrime",
      html: `
        <h2>New Message Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p style="margin-top: 10px;">${message}</p>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    return NextResponse.json({ message: "Error sending message." });
  }
}
