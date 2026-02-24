import { NextResponse } from "next/server";
import { lighthouseService } from "@/lib/services/lighthouse.service";
import { emailService } from "@/lib/services/email.service";

export const maxDuration = 60; // Vercel Function timeout auf 60s setzen

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url, email } = body;

    // Validierung
    if (!url || !email) {
      return NextResponse.json(
        { error: "URL und E-Mail sind erforderlich" },
        { status: 400 }
      );
    }

    // URL normalisieren: ohne Protokoll → https:// ergänzen
    const raw = String(url).trim();
    const withProtocol =
      /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;

    let validUrl: string;
    try {
      const parsedUrl = new URL(withProtocol);
      validUrl = parsedUrl.toString();
    } catch {
      return NextResponse.json(
        { error: "Ungültige URL. Bitte z.B. www.ihre-website.de oder https://ihre-website.de eingeben." },
        { status: 400 }
      );
    }

    console.log("Starting Lighthouse audit for:", validUrl);

    // Lighthouse-Audit ausführen (asynchron, kann bis zu 60s dauern)
    let auditResult;
    try {
      auditResult = await lighthouseService.runAudit(validUrl);
      console.log("Lighthouse audit completed successfully");
    } catch (error) {
      console.error("Lighthouse audit failed:", error);
      return NextResponse.json(
        {
          error:
            "Website-Analyse fehlgeschlagen. Bitte stellen Sie sicher, dass die Website öffentlich erreichbar ist.",
        },
        { status: 500 }
      );
    }

    // E-Mail mit Audit-Ergebnissen senden
    try {
      const emailHtml = emailService.generateAuditEmail(auditResult);
      const emailResult = await emailService.send({
        to: email,
        subject: `Ihre Website-Analyse: ${validUrl}`,
        html: emailHtml,
      });

      if (!emailResult.success) {
        console.error("Email send failed:", emailResult.error);
        // Trotzdem Success zurückgeben, da Audit erfolgreich war
      } else {
        console.log("Email sent successfully:", emailResult.id);
      }
    } catch (emailError) {
      console.error("Email error:", emailError);
      // Weiter fortfahren, auch wenn E-Mail fehlschlägt
    }

    // Erfolgreich - Ergebnisse zurückgeben
    return NextResponse.json(
      {
        success: true,
        message: "Website-Analyse erfolgreich abgeschlossen",
        data: {
          url: validUrl,
          scores: auditResult.scores,
          summary: lighthouseService.generateSummary(auditResult),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Audit request error:", error);
    return NextResponse.json(
      {
        error:
          "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 }
    );
  }
}
