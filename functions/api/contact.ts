// Cloudflare Pages Function — POST /api/contact
//
// Receives submissions from the Contact form, "Get a Quote" and
// "Free Endpoint Assessment" forms and emails them to info@enduraq.in over SMTP.
//
// Required secret (Cloudflare Pages > Settings > Variables and Secrets):
//   SMTP_PASS   password of the info@enduraq.in mailbox
//
// Optional overrides (defaults shown):
//   SMTP_HOST = smtpout.secureserver.net
//   SMTP_PORT = 465            (SSL/TLS; port 25 is blocked on Cloudflare)
//   SMTP_USER = info@enduraq.in
//   MAIL_TO   = info@enduraq.in
//
// Requires the "nodejs_compat" compatibility flag (set in wrangler.toml).

import { WorkerMailer } from "worker-mailer";

interface Env {
  SMTP_PASS?: string;
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_USER?: string;
  MAIL_TO?: string;
}

type FormType = "contact" | "quote" | "assessment";

const FORM_META: Record<FormType, { label: string; fields: [string, string][] }> = {
  contact: {
    label: "Contact Form",
    fields: [
      ["name", "Full Name"],
      ["email", "Work Email"],
      ["phone", "Phone Number"],
      ["company", "Company Name"],
      ["size", "Company Size"],
      ["service", "Service Interested In"],
      ["message", "Message"],
    ],
  },
  quote: {
    label: "Get a Quote",
    fields: [
      ["name", "Full Name"],
      ["email", "Work Email"],
      ["company", "Company Name"],
      ["size", "Company Size"],
      ["message", "What do you need help with?"],
    ],
  },
  assessment: {
    label: "Free Endpoint Assessment",
    fields: [
      ["name", "Full Name"],
      ["email", "Work Email"],
      ["company", "Company Name"],
    ],
  },
};

const MAX_LEN = 5000;
const EMAIL_RE = /^[^\s@<>"',;:]+@[^\s@<>"',;:]+\.[^\s@<>"',;:]+$/;

function json(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Strip CR/LF so user input can never inject extra mail headers.
function singleLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export const onRequestPost = async (context: { request: Request; env: Env }): Promise<Response> => {
  const { request, env } = context;

  // Basic cross-site protection: if the browser sends an Origin, it must be our own host.
  const origin = request.headers.get("Origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return json({ ok: false, error: "Forbidden." }, 403);
      }
    } catch {
      return json({ ok: false, error: "Forbidden." }, 403);
    }
  }

  let payload: Record<string, unknown>;
  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  // Honeypot: real users never see or fill this field. Pretend success for bots.
  if (typeof payload.hp === "string" && payload.hp.trim() !== "") {
    return json({ ok: true });
  }

  const formType = payload.formType as FormType;
  const meta = FORM_META[formType];
  if (!meta) {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  const values: Record<string, string> = {};
  for (const [key] of meta.fields) {
    const raw = payload[key];
    values[key] = typeof raw === "string" ? raw.trim().slice(0, MAX_LEN) : "";
  }

  if (!values.name) {
    return json({ ok: false, error: "Please enter your name." }, 400);
  }
  if (!EMAIL_RE.test(values.email)) {
    return json({ ok: false, error: "Please enter a valid email address." }, 400);
  }
  if (!values.company) {
    return json({ ok: false, error: "Please enter your company name." }, 400);
  }
  if (formType === "contact" && !values.message) {
    return json({ ok: false, error: "Please enter a message." }, 400);
  }

  if (!env.SMTP_PASS) {
    console.error("SMTP_PASS secret is not configured.");
    return json({ ok: false, error: "Email service is not configured." }, 500);
  }

  const smtpUser = env.SMTP_USER || "info@enduraq.in";
  const mailTo = env.MAIL_TO || "info@enduraq.in";
  const subject = `[Enduraq Website] ${meta.label} — ${singleLine(values.name)}${
    values.company ? ` (${singleLine(values.company)})` : ""
  }`;

  const submittedAt = new Date().toUTCString();

  const textBody =
    `New ${meta.label} submission from the Enduraq website\n\n` +
    meta.fields
      .filter(([key]) => values[key])
      .map(([key, label]) => `${label}: ${values[key]}`)
      .join("\n") +
    `\n\nSubmitted: ${submittedAt}\n`;

  const rows = meta.fields
    .filter(([key]) => values[key])
    .map(
      ([key, label]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;vertical-align:top;white-space:nowrap">${escapeHtml(
          label,
        )}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;white-space:pre-wrap">${escapeHtml(
          values[key],
        )}</td></tr>`,
    )
    .join("");

  const htmlBody =
    `<div style="font-family:Segoe UI,Arial,sans-serif;color:#111827;font-size:14px">` +
    `<h2 style="margin:0 0 12px;font-size:18px">New ${escapeHtml(meta.label)} submission</h2>` +
    `<table style="border-collapse:collapse;min-width:320px">${rows}</table>` +
    `<p style="margin-top:16px;color:#6b7280;font-size:12px">Submitted ${escapeHtml(
      submittedAt,
    )} via the Enduraq website. Reply to this email to respond to the sender.</p></div>`;

  try {
    await WorkerMailer.send(
      {
        host: env.SMTP_HOST || "smtpout.secureserver.net",
        port: Number(env.SMTP_PORT) || 465,
        secure: true,
        credentials: { username: smtpUser, password: env.SMTP_PASS },
        authType: "plain",
      },
      {
        from: { name: "Enduraq Website", email: smtpUser },
        to: mailTo,
        reply: { name: singleLine(values.name), email: values.email },
        subject,
        text: textBody,
        html: htmlBody,
      },
    );
  } catch (err) {
    console.error("SMTP send failed:", err);
    return json(
      { ok: false, error: "We couldn't send your message right now. Please email us directly." },
      502,
    );
  }

  return json({ ok: true });
};

// Anything other than POST is not allowed.
export const onRequest = async (): Promise<Response> =>
  new Response(JSON.stringify({ ok: false, error: "Method not allowed." }), {
    status: 405,
    headers: { "Content-Type": "application/json", Allow: "POST" },
  });
