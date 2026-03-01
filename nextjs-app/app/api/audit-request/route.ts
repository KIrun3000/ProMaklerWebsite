import { NextResponse } from "next/server";
import { emailService } from "@/lib/services/email.service";

export const maxDuration = 30;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url, email } = body;

    if (!url || !email) {
      return NextResponse.json(
        { error: "URL und E-Mail sind erforderlich" },
        { status: 400 }
      );
    }

    const raw = String(url).trim();
    const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;

    let validUrl: string;
    try {
      validUrl = new URL(withProtocol).toString();
    } catch {
      return NextResponse.json(
        { error: "Ungültige URL. Bitte z.B. www.ihre-website.de eingeben." },
        { status: 400 }
      );
    }

    // 1. Bestätigung an Interessenten
    await emailService.send({
      to: email,
      subject: "Wir analysieren Ihre Website – Entwurf folgt in 24h",
      html: emailService.generateAuditConfirmation(validUrl),
    });

    // 2. Interne Benachrichtigung
    await emailService.send({
      to: "hi@makler-websites.immo",
      subject: `🔔 Neue Audit-Anfrage: ${validUrl}`,
      html: emailService.generateInternalNotification(validUrl, email),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Audit request error:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}
