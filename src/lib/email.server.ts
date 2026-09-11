import { Resend } from "resend";
import type { Enquiry } from "./enquiry-schema";

function getResend() {
  const apiKey = process.env["RESEND_API_KEY"];

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  return new Resend(apiKey);
}

function getEmailConfig() {
  const from = process.env["EMAIL_FROM"];
  const to = process.env["EMAIL_TO"];

  if (!from || !to) {
    throw new Error("EMAIL_FROM and EMAIL_TO must be configured.");
  }

  return { from, to };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function enquiryHtml(enquiry: Enquiry) {
  if (enquiry.type === "contact") {
    return `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #171717;">
        <h2>New Website Contact Enquiry</h2>

        <p><strong>Name:</strong> ${escapeHtml(enquiry.name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(enquiry.phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(enquiry.email || "Not provided")}</p>

        <h3>Message</h3>
        <p>${escapeHtml(enquiry.message).replaceAll("\n", "<br />")}</p>
      </div>
    `;
  }

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #171717;">
      <h2>New Website Quote Request</h2>

      <p><strong>Service:</strong> ${escapeHtml(enquiry.service)}</p>
      <p><strong>Location:</strong> ${escapeHtml(enquiry.location)}</p>
      <p><strong>Project stage:</strong> ${escapeHtml(enquiry.stage)}</p>

      <h3>Project details</h3>
      <p>${escapeHtml(enquiry.details).replaceAll("\n", "<br />")}</p>

      <h3>Client details</h3>
      <p><strong>Name:</strong> ${escapeHtml(enquiry.name)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(enquiry.phone)}</p>
      <p><strong>Email:</strong> ${escapeHtml(enquiry.email || "Not provided")}</p>
    </div>
  `;
}

function enquirySubject(enquiry: Enquiry) {
  if (enquiry.type === "contact") {
    return `Website enquiry — ${enquiry.name}`;
  }

  return `Quote request — ${enquiry.service} — ${enquiry.name}`;
}

export async function sendEnquiryEmail(enquiry: Enquiry) {
  const resend = getResend();
  const { from, to } = getEmailConfig();

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    subject: enquirySubject(enquiry),
    html: enquiryHtml(enquiry),
  });

  if (error) {
    console.error("Resend email error:", error);
    throw new Error("Unable to send enquiry email.");
  }

  return data;
}
