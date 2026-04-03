import { NextResponse } from "next/server";
import { z } from "zod";
import { escapeHtml, getServerConfig } from "../_lib";

export const runtime = "nodejs";

const allowedLocales = ["en", "vi"] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.email().trim().max(254),
  message: z.string().trim().min(20).max(5000),
  subject: z.string().trim().max(120).optional().default(""),
  company: z.string().trim().max(120).optional().default(""),
  locale: z.enum(allowedLocales).optional().default("en"),
  turnstileToken: z.string().trim().max(4096).optional().default(""),
  honeypot: z.string().trim().max(0).optional().default(""),
});

type ContactPayload = z.infer<typeof contactSchema>;

async function readBody(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return request.json();
  }

  if (
    contentType.includes("multipart/form-data") ||
    contentType.includes("application/x-www-form-urlencoded")
  ) {
    const formData = await request.formData();
    return Object.fromEntries(formData.entries());
  }

  const text = await request.text();

  if (!text.trim()) {
    return {};
  }

  try {
    return JSON.parse(text);
  } catch {
    return {};
  }
}

async function verifyTurnstile(token: string) {
  const config = getServerConfig();
  const secret = config.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return { enabled: false, verified: true };
  }

  if (!token) {
    return { enabled: true, verified: false, reason: "missing-token" as const };
  }

  const formData = new URLSearchParams();
  formData.set("secret", secret);
  formData.set("response", token);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    return { enabled: true, verified: false, reason: "verification-unreachable" as const };
  }

  const data = (await response.json()) as {
    success?: boolean;
    "error-codes"?: string[];
  };

  return {
    enabled: true,
    verified: Boolean(data.success),
    reason: data.success ? undefined : "verification-failed",
  };
}

function buildEmailSubject(payload: ContactPayload) {
  const subject = payload.subject || "New portfolio inquiry";
  return `${subject} - ${payload.name}`.slice(0, 180);
}

function buildEmailText(payload: ContactPayload) {
  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "-"}`,
    `Locale: ${payload.locale}`,
    "",
    "Message:",
    payload.message,
  ];

  return lines.join("\n");
}

function buildEmailHtml(payload: ContactPayload) {
  const subject = escapeHtml(buildEmailSubject(payload));

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      <h1 style="font-size: 20px; margin: 0 0 16px;">${subject}</h1>
      <p style="margin: 0 0 8px;"><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
      <p style="margin: 0 0 8px;"><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
      <p style="margin: 0 0 8px;"><strong>Company:</strong> ${escapeHtml(payload.company || "-")}</p>
      <p style="margin: 0 0 8px;"><strong>Locale:</strong> ${escapeHtml(payload.locale)}</p>
      <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
      <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(payload.message)}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  let rawBody: unknown;

  try {
    rawBody = await readBody(request);
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "invalid_request_body",
      },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(rawBody);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "validation_failed",
        issues: parsed.error.flatten(),
      },
      { status: 400 },
    );
  }

  const payload = parsed.data;

  if (payload.honeypot) {
    return NextResponse.json(
      {
        ok: true,
        delivered: false,
        status: "accepted",
      },
      { status: 202 },
    );
  }

  const turnstile = await verifyTurnstile(payload.turnstileToken);

  if (turnstile.enabled && !turnstile.verified) {
    return NextResponse.json(
      {
        ok: false,
        error: turnstile.reason ?? "turnstile_failed",
      },
      { status: 403 },
    );
  }

  const config = getServerConfig();
  const { RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL } = config;

  if (!RESEND_API_KEY || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    return NextResponse.json(
      {
        ok: true,
        delivered: false,
        status: "accepted",
        message: "contact_email_not_configured",
      },
      { status: 202 },
    );
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(RESEND_API_KEY);

    await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      subject: buildEmailSubject(payload),
      text: buildEmailText(payload),
      html: buildEmailHtml(payload),
      replyTo: payload.email,
    });

    return NextResponse.json(
      {
        ok: true,
        delivered: true,
        status: "sent",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        ok: true,
        delivered: false,
        status: "accepted",
        message: "delivery_failed_softly",
      },
      { status: 202 },
    );
  }
}

export function GET() {
  return NextResponse.json(
    {
      ok: false,
      error: "method_not_allowed",
    },
    { status: 405 },
  );
}
