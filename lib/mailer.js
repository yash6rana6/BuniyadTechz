// /lib/mailer.js
import nodemailer from "nodemailer";

let cachedTransporter = null;
export function getTransporter() {
  if (cachedTransporter) return cachedTransporter;

  cachedTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS,
    },
  });

  return cachedTransporter;
}

/**
 * Small helper so routes don't repeat mailOptions + sendMail boilerplate.
 * @param {import('nodemailer').SendMailOptions} mailOptions
 */
export async function sendMail(mailOptions) {
  const transporter = getTransporter();
  return transporter.sendMail({
    to: process.env.GMAIL_USER,
    ...mailOptions,
  });
}