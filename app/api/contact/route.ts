import { Resend } from "resend";
import { NextResponse } from "next/server";

const RECIPIENTS = ["info@hikade.cz", "tomas@hikade.cz"];

type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  projectType?: string;
  applicationArea?: string;
  description: string;
  environment?: string;
  constraints?: string;
  timeline?: string;
  notes?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value?: string) {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px 6px 0;color:#666;font-size:13px;vertical-align:top;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:6px 0;font-size:13px;">${escapeHtml(value).replace(/\n/g, "<br/>")}</td></tr>`;
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, company, email, phone, projectType, applicationArea, description, environment, constraints, timeline, notes } = payload;

  if (!name || !email || !description) {
    return NextResponse.json({ error: "Name, email and description are required." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const html = `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="font-size:18px;margin-bottom:16px;">New technical inquiry — Hikade website</h2>
      <table style="border-collapse:collapse;width:100%;">
        ${row("Name", name)}
        ${row("Company", company)}
        ${row("Email", email)}
        ${row("Phone", phone)}
        ${row("Project type", projectType)}
        ${row("Application area", applicationArea)}
        ${row("Description", description)}
        ${row("Target environment", environment)}
        ${row("Key constraints", constraints)}
        ${row("Required timeline", timeline)}
        ${row("Additional notes", notes)}
      </table>
    </div>
  `;

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Hikade Website <website@hikade.cz>",
    to: RECIPIENTS,
    replyTo: email,
    subject: `New inquiry from ${name}${company ? ` (${company})` : ""}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
