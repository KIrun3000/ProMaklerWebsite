import { Resend } from "resend";

let _resend: Resend | null = null;
function getResend(): Resend {
  if (!_resend) {
    _resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");
  }
  return _resend;
}

export interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  attachments?: Array<{
    filename: string;
    content: Buffer | string;
  }>;
}

export class EmailService {
  async send(options: EmailOptions) {
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured, email not sent");
      return { success: false, error: "Email service not configured" };
    }

    try {
      const result = await getResend().emails.send({
        from: "ProMakler Digital <noreply@makler-websites.immo>",
        to: options.to,
        subject: options.subject,
        html: options.html,
        attachments: options.attachments,
      });

      return { success: true, id: result.data?.id };
    } catch (error) {
      console.error("Email send error:", error);
      return { success: false, error };
    }
  }

  generateAuditEmail(
    result: {
      url: string;
      scores: {
        performance: number;
        accessibility: number;
        bestPractices: number;
        seo: number;
      };
      opportunities: Array<{ title: string; savings: string }>;
      screenshot?: string;
    },
    recipientName?: string
  ): string {
    const avgScore = Math.round(
      (result.scores.performance +
        result.scores.accessibility +
        result.scores.bestPractices +
        result.scores.seo) /
        4
    );

    const greeting = recipientName ? `Hallo ${recipientName}` : "Hallo";

    return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ihre Website-Analyse</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #0A1628; color: #F8F6F1;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0A1628;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1A2942; border: 1px solid rgba(201, 169, 98, 0.2);">
          <!-- Header -->
          <tr>
            <td style="padding: 40px; text-align: center; background: linear-gradient(135deg, #0F1E37 0%, #0A1628 100%);">
              <h1 style="margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 32px; color: #C9A962; font-weight: 600;">ProMakler Digital</h1>
              <p style="margin: 10px 0 0; color: rgba(248, 246, 241, 0.7); font-size: 14px;">Ihre Website-Analyse</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6;">${greeting},</p>
              
              <p style="margin: 0 0 30px; font-size: 16px; line-height: 1.6;">
                vielen Dank für Ihr Interesse! Wir haben Ihre Website <strong style="color: #C9A962;">${result.url}</strong> analysiert.
              </p>

              <!-- Overall Score -->
              <div style="background: rgba(201, 169, 98, 0.1); border: 1px solid rgba(201, 169, 98, 0.3); padding: 25px; margin-bottom: 30px; text-align: center;">
                <div style="font-size: 48px; font-weight: bold; color: ${avgScore >= 75 ? "#2ecc71" : avgScore >= 50 ? "#f39c12" : "#e74c3c"}; margin-bottom: 10px;">
                  ${avgScore}<span style="font-size: 24px;">/100</span>
                </div>
                <div style="font-size: 14px; color: rgba(248, 246, 241, 0.7); text-transform: uppercase; letter-spacing: 0.1em;">
                  Gesamtbewertung
                </div>
              </div>

              <!-- Scores Grid -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td width="50%" style="padding: 15px; background: rgba(248, 246, 241, 0.03); border: 1px solid rgba(248, 246, 241, 0.1);">
                    <div style="font-size: 28px; font-weight: bold; color: #C9A962; margin-bottom: 5px;">${result.scores.performance}</div>
                    <div style="font-size: 12px; color: rgba(248, 246, 241, 0.7);">Performance</div>
                  </td>
                  <td width="50%" style="padding: 15px; background: rgba(248, 246, 241, 0.03); border: 1px solid rgba(248, 246, 241, 0.1);">
                    <div style="font-size: 28px; font-weight: bold; color: #C9A962; margin-bottom: 5px;">${result.scores.accessibility}</div>
                    <div style="font-size: 12px; color: rgba(248, 246, 241, 0.7);">Barrierefreiheit</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px; background: rgba(248, 246, 241, 0.03); border: 1px solid rgba(248, 246, 241, 0.1);">
                    <div style="font-size: 28px; font-weight: bold; color: #C9A962; margin-bottom: 5px;">${result.scores.bestPractices}</div>
                    <div style="font-size: 12px; color: rgba(248, 246, 241, 0.7);">Best Practices</div>
                  </td>
                  <td style="padding: 15px; background: rgba(248, 246, 241, 0.03); border: 1px solid rgba(248, 246, 241, 0.1);">
                    <div style="font-size: 28px; font-weight: bold; color: #C9A962; margin-bottom: 5px;">${result.scores.seo}</div>
                    <div style="font-size: 12px; color: rgba(248, 246, 241, 0.7);">SEO</div>
                  </td>
                </tr>
              </table>

              <!-- Top Opportunities -->
              <h2 style="font-family: 'Cormorant Garamond', serif; font-size: 24px; color: #C9A962; margin: 0 0 20px;">Größte Verbesserungspotenziale</h2>
              ${result.opportunities
                .slice(0, 3)
                .map(
                  (opp, i) => `
                <div style="padding: 15px; background: rgba(248, 246, 241, 0.03); border-left: 3px solid #C9A962; margin-bottom: 15px;">
                  <div style="font-weight: 600; margin-bottom: 5px; color: #F8F6F1;">${i + 1}. ${opp.title}</div>
                  <div style="font-size: 14px; color: rgba(248, 246, 241, 0.6);">Mögliche Einsparung: ${opp.savings}</div>
                </div>
              `
                )
                .join("")}

              <!-- Screenshot -->
              ${
                result.screenshot
                  ? `
              <h2 style="font-family: 'Cormorant Garamond', serif; font-size: 24px; color: #C9A962; margin: 30px 0 20px;">Website-Vorschau</h2>
              <img src="data:image/jpeg;base64,${result.screenshot}" alt="Website Screenshot" style="width: 100%; border: 1px solid rgba(248, 246, 241, 0.1);">
              `
                  : ""
              }

              <!-- CTA -->
              <div style="margin-top: 40px; padding: 30px; background: rgba(201, 169, 98, 0.1); border: 1px solid rgba(201, 169, 98, 0.3); text-align: center;">
                <h3 style="margin: 0 0 15px; font-family: 'Cormorant Garamond', serif; font-size: 22px; color: #C9A962;">Die Rendite-Rechnung</h3>
                <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.6;">
                  Wenn Sie durch Ihre neue Website nur <strong>einen</strong> zusätzlichen Auftrag erhalten – ist Ihre digitale Immobilie bereits mit <strong style="color: #C9A962;">Faktor 10</strong> rentiert.
                </p>
                <a href="https://makler-websites.immo/#kontakt" style="display: inline-block; padding: 15px 35px; background: #C9A962; color: #0A1628; text-decoration: none; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; font-size: 14px;">
                  Jetzt kostenloses Beratungsgespräch buchen
                </a>
              </div>

              <p style="margin: 30px 0 0; font-size: 14px; line-height: 1.6; color: rgba(248, 246, 241, 0.7);">
                Bei Fragen stehen wir Ihnen gerne zur Verfügung.
              </p>

              <p style="margin: 20px 0 0; font-size: 14px; color: rgba(248, 246, 241, 0.7);">
                Mit freundlichen Grüßen,<br>
                <strong style="color: #F8F6F1;">Ihr ProMakler Digital Team</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px; text-align: center; background: rgba(10, 22, 40, 0.5); border-top: 1px solid rgba(248, 246, 241, 0.1);">
              <p style="margin: 0 0 10px; font-size: 12px; color: rgba(248, 246, 241, 0.5);">
                ProMakler Digital – ING Bleek GmbH<br>
                Rosa-Luxemburg-Straße 17, 10178 Berlin
              </p>
              <p style="margin: 10px 0 0; font-size: 12px;">
                <a href="tel:+4917672953996" style="color: #C9A962; text-decoration: none;">+49 176 729 539 96</a> | 
                <a href="mailto:hi@makler-websites.immo" style="color: #C9A962; text-decoration: none;">hi@makler-websites.immo</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;
  }

  generateAuditConfirmation(url: string): string {
    return `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0A1628;color:#F8F6F1;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center" style="padding:40px 20px;">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#1A2942;border:1px solid rgba(201,169,98,0.2);">
        <tr>
          <td style="padding:40px;text-align:center;background:linear-gradient(135deg,#0F1E37 0%,#0A1628 100%);">
            <h1 style="margin:0;font-family:Georgia,serif;font-size:28px;color:#C9A962;">ProMakler Digital</h1>
            <p style="margin:8px 0 0;color:rgba(248,246,241,0.6);font-size:13px;">Digitale Projektentwicklung für Immobilienmakler</p>
          </td>
        </tr>
        <tr>
          <td style="padding:40px;">
            <p style="margin:0 0 20px;font-size:16px;line-height:1.7;">Vielen Dank für Ihre Anfrage!</p>
            <p style="margin:0 0 25px;font-size:16px;line-height:1.7;">
              Wir haben Ihre Anfrage für <strong style="color:#C9A962;">${url}</strong> erhalten und analysieren Ihre Website persönlich.
            </p>
            <div style="background:rgba(201,169,98,0.08);border-left:3px solid #C9A962;padding:20px;margin-bottom:30px;">
              <p style="margin:0;font-size:15px;line-height:1.7;">
                <strong>Was als nächstes passiert:</strong><br>
                Innerhalb von <strong>24 Stunden</strong> erhalten Sie einen individuellen Relaunch-Entwurf für Ihre Website – kostenlos und unverbindlich.
              </p>
            </div>
            <p style="margin:0 0 10px;font-size:14px;color:rgba(248,246,241,0.7);">Bei Rückfragen erreichen Sie uns direkt:</p>
            <p style="margin:0;font-size:14px;">
              <a href="tel:+4917672953996" style="color:#C9A962;text-decoration:none;">+49 176 729 539 96</a> &nbsp;|&nbsp;
              <a href="mailto:hi@makler-websites.immo" style="color:#C9A962;text-decoration:none;">hi@makler-websites.immo</a>
            </p>
            <p style="margin:30px 0 0;font-size:14px;color:rgba(248,246,241,0.7);">
              Mit freundlichen Grüßen,<br>
              <strong style="color:#F8F6F1;">Luca Ingenbleek</strong><br>
              ProMakler Digital · ING Bleek GmbH
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:20px 40px;text-align:center;background:rgba(10,22,40,0.5);border-top:1px solid rgba(248,246,241,0.08);">
            <p style="margin:0;font-size:11px;color:rgba(248,246,241,0.4);">
              ING Bleek GmbH · Rosa-Luxemburg-Straße 17 · 10178 Berlin<br>
              <a href="https://makler-websites.immo/impressum" style="color:rgba(248,246,241,0.4);">Impressum</a> &nbsp;|&nbsp;
              <a href="https://makler-websites.immo/datenschutz" style="color:rgba(248,246,241,0.4);">Datenschutz</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
  }

  generateInternalNotification(url: string, email: string): string {
    const now = new Date().toLocaleString("de-DE", { timeZone: "Europe/Berlin" });
    return `
<!DOCTYPE html>
<html lang="de">
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr><td align="center" style="padding:40px 20px;">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1);">
        <tr>
          <td style="padding:24px 32px;background:#1A2942;">
            <p style="margin:0;font-size:13px;color:#C9A962;letter-spacing:0.1em;text-transform:uppercase;">ProMakler · Neue Anfrage</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <h2 style="margin:0 0 24px;font-size:22px;color:#1a1a1a;">🔔 Neue Website-Analyse angefordert</h2>
            <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding:12px 16px;background:#f8f8f8;border-bottom:1px solid #eee;font-size:13px;color:#666;width:130px;">Zeitpunkt</td>
                <td style="padding:12px 16px;background:#f8f8f8;border-bottom:1px solid #eee;font-size:14px;color:#1a1a1a;">${now}</td>
              </tr>
              <tr>
                <td style="padding:12px 16px;border-bottom:1px solid #eee;font-size:13px;color:#666;">Website</td>
                <td style="padding:12px 16px;border-bottom:1px solid #eee;font-size:14px;">
                  <a href="${url}" style="color:#C9A962;">${url}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 16px;font-size:13px;color:#666;">E-Mail</td>
                <td style="padding:12px 16px;font-size:14px;">
                  <a href="mailto:${email}" style="color:#1A2942;">${email}</a>
                </td>
              </tr>
            </table>
            <div style="margin-top:24px;padding:16px;background:#fffbf0;border-left:3px solid #C9A962;">
              <p style="margin:0;font-size:14px;color:#666;">
                <strong>Next Action:</strong> Website manuell analysieren und Entwurf innerhalb von 24h an <a href="mailto:${email}">${email}</a> senden.
              </p>
            </div>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
  }

  generateContactConfirmation(data: {
    name: string;
    email: string;
    message: string;
  }): string {
    return `
<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #0A1628; color: #F8F6F1;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0A1628;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #1A2942; border: 1px solid rgba(201, 169, 98, 0.2);">
          <tr>
            <td style="padding: 40px; text-align: center; background: linear-gradient(135deg, #0F1E37 0%, #0A1628 100%);">
              <h1 style="margin: 0; font-family: 'Cormorant Garamond', serif; font-size: 32px; color: #C9A962;">ProMakler Digital</h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 20px; font-size: 16px;">Hallo ${data.name},</p>
              <p style="margin: 0 0 30px; font-size: 16px; line-height: 1.6;">
                vielen Dank für Ihre Nachricht! Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
              <p style="margin: 0; font-size: 14px; color: rgba(248, 246, 241, 0.7);">
                Mit freundlichen Grüßen,<br>
                <strong style="color: #F8F6F1;">Ihr ProMakler Digital Team</strong>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;
  }
}

export const emailService = new EmailService();
