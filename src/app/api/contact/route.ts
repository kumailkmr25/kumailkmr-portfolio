import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "fallback_key_for_build");

export async function POST(req: Request) {
 try {
 const body = (await req.json()) as Record<string, string>;
 await resend.emails.send({
 from: "Portfolio Contact <onboarding@resend.dev>",
 to: process.env.CONTACT_EMAIL ?? "kumailkmr.dev@gmail.com",
 subject: `New portfolio message from ${body.name}`,
 text: `
Name: ${body.name}
Email: ${body.email}
Phone: ${body.phone ?? "-"}
Budget: ${body.budget ?? "-"}
Project Type: ${body.projectType ?? "-"}
Timeline: ${body.timeline ?? "-"}
Source: ${body.source ?? "-"}

Details:
${body.details ?? ""}
 `.trim(),
 });
 return NextResponse.json({ ok: true });
 } catch {
 return NextResponse.json({ ok: false }, { status: 500 });
 }
}
