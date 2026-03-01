import { NextResponse } from "next/server";
import { emailService } from "@/lib/services/email.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, website, message } = body;

    // Validierung
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Pflichtfelder fehlen" },
        { status: 400 }
      );
    }

    // E-Mail-Format validieren
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse" },
        { status: 400 }
      );
    }

    console.log("Neue Kontaktanfrage:", {
      name,
      email,
      phone,
      company,
      website,
      timestamp: new Date().toISOString(),
    });

    // Bestätigungs-E-Mail an Kunden senden
    try {
      const confirmationHtml = emailService.generateContactConfirmation({
        name,
        email,
        message,
      });

      await emailService.send({
        to: email,
        subject: "Ihre Anfrage bei ProMakler Digital",
        html: confirmationHtml,
      });

      console.log("Confirmation email sent to:", email);
    } catch (emailError) {
      console.error("Confirmation email error:", emailError);
      // Weiter fortfahren, auch wenn Bestätigung fehlschlägt
    }

    // Interne Benachrichtigung an ProMakler-Team
    try {
      // HTML-Sonderzeichen escapen gegen XSS
      const esc = (s: string) =>
        s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

      const internalNotification = `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>E-Mail:</strong> ${esc(email)}</p>
        ${phone ? `<p><strong>Telefon:</strong> ${esc(phone)}</p>` : ""}
        ${company ? `<p><strong>Unternehmen:</strong> ${esc(company)}</p>` : ""}
        ${website ? `<p><strong>Website:</strong> ${esc(website)}</p>` : ""}
        <p><strong>Nachricht:</strong></p>
        <p>${esc(message)}</p>
        <hr>
        <p><small>Eingegangen am: ${new Date().toLocaleString("de-DE")}</small></p>
      `;

      await emailService.send({
        to: "hi@makler-websites.immo",
        subject: `Neue Kontaktanfrage von ${name}`,
        html: internalNotification,
      });

      console.log("Internal notification sent");
    } catch (internalError) {
      console.error("Internal notification error:", internalError);
      // Weiter fortfahren
    }

    // Erfolgsantwort
    return NextResponse.json(
      {
        success: true,
        message: "Anfrage erfolgreich gesendet",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Interner Server-Fehler" },
      { status: 500 }
    );
  }
}
