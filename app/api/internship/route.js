// /app/api/internship/route.js

import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, phone, track, message } = await request.json();

    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ error: "Please fill all the required fields." }),
        { status: 400 }
      );
    }

    // Setup transporter (Gmail example) — reuses the same env vars as /api/contact
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,       // apna gmail id environment variable me rakho
        pass: process.env.GMAIL_PASS,       // app password environment variable me
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `New internship application from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nTrack: ${track}\n\nMessage:\n${message || "-"}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Application submitted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to submit application" }),
      { status: 500 }
    );
  }
}
