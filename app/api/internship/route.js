// /app/api/internship/route.js

import { sendMail } from "@/lib/mailer";

const MAX_RESUME_BYTES = 5 * 1024 * 1024; 

export async function POST(request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const track = formData.get("track")?.toString().trim();
    const message = formData.get("message")?.toString().trim();
    const resume = formData.get("resume"); // File | null

    if (!name || !email || !phone || !message) {
      return Response.json(
        { error: "Please fill all the required fields." },
        { status: 400 }
      );
    }

    if (!resume || typeof resume === "string") {
      return Response.json(
        { error: "Resume (PDF) is required." },
        { status: 400 }
      );
    }

    if (resume.size > MAX_RESUME_BYTES) {
      return Response.json(
        { error: "Resume file is too large. Max 5MB allowed." },
        { status: 400 }
      );
    }

    if (resume.type !== "application/pdf") {
      return Response.json(
        { error: "Resume must be a PDF file." },
        { status: 400 }
      );
    }

    // Convert the uploaded File -> Buffer for the email attachment
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    await sendMail({
      from: email,
      subject: `New internship application from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nTrack: ${track || "-"}\n\nMessage:\n${message}`,
      attachments: [
        {
          filename: resume.name || "resume.pdf",
          content: resumeBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    return Response.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
