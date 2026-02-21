# Lighthouse-Integration Setup

Diese Dokumentation beschreibt die automatische Website-Analyse mit Lighthouse und E-Mail-Versand.

## Features

✅ **Automatische Lighthouse-Audits** bei Website-Anfragen
✅ **Screenshot-Erstellung** der analysierten Website
✅ **Professionelle HTML-E-Mails** mit Ergebnissen
✅ **Performance-Metriken**: FCP, LCP, TTI, TBT, CLS
✅ **Scores für**: Performance, Accessibility, Best Practices, SEO
✅ **Top-Verbesserungsvorschläge** mit Einsparungs-Potenzial

## Installation

### 1. Dependencies installieren

```bash
cd nextjs-app
npm install
```

Die folgenden Packages werden automatisch installiert:
- `lighthouse` - Google Lighthouse für Website-Audits
- `chrome-launcher` - Chrome-Browser-Steuerung
- `puppeteer-core` - Screenshot-Erstellung
- `resend` - E-Mail-Versand

### 2. Environment Variables konfigurieren

Kopieren Sie `.env.example` zu `.env.local`:

```bash
cp .env.example .env.local
```

Fügen Sie Ihren Resend API-Key hinzu:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Resend API-Key erhalten:**
1. Registrieren Sie sich bei [resend.com](https://resend.com)
2. Verifizieren Sie Ihre Domain `promakler.de` (für Production)
3. Erstellen Sie einen API-Key im Dashboard

### 3. Chrome/Chromium installieren (für Production)

**macOS:**
```bash
brew install --cask chromium
```

**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install -y chromium-browser
```

**Docker (Vercel/Production):**
Die Lighthouse-Integration verwendet automatisch das Chrome-Binary, das in der Serverless-Umgebung verfügbar ist. Für Vercel wird empfohlen, Puppeteer mit `@sparticuz/chromium` zu verwenden (optional für bessere Performance).

## API-Endpoints

### POST `/api/audit-request`

Startet eine Lighthouse-Analyse für eine Website.

**Request:**
```json
{
  "url": "https://example.com",
  "email": "kunde@example.com"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Website-Analyse erfolgreich abgeschlossen",
  "data": {
    "url": "https://example.com",
    "scores": {
      "performance": 85,
      "accessibility": 92,
      "bestPractices": 88,
      "seo": 95
    },
    "summary": "Ihre Website hat einen Durchschnittswert von 90/100 (hervorragend)..."
  }
}
```

**Timeout:** Max. 60 Sekunden (konfiguriert mit `maxDuration = 60`)

### POST `/api/contact`

Verarbeitet Kontaktformular-Anfragen.

**Request:**
```json
{
  "name": "Max Mustermann",
  "email": "max@example.com",
  "phone": "+49 123 456 789",
  "company": "Mustermann Immobilien",
  "website": "https://mustermann-immo.de",
  "message": "Ich interessiere mich für..."
}
```

## E-Mail-Templates

Die E-Mails werden mit dem ProMakler-Branding versendet:

### Audit-Report E-Mail
- **Header**: ProMakler Logo & Gradient-Hintergrund
- **Gesamtscore**: Große visuelle Anzeige mit Farb-Coding
- **Score-Grid**: Performance, Accessibility, Best Practices, SEO
- **Top 3 Verbesserungsvorschläge** mit Einsparungspotenzial
- **Screenshot** der analysierten Website
- **CTA**: "Faktor 10"-Rendite-Rechnung mit Buchungs-Link
- **Footer**: Kontaktdaten & rechtliche Informationen

### Kontaktbestätigung
- Einfache Dankesnachricht
- Bestätigung der 24h-Reaktionszeit
- ProMakler-Branding

## Lighthouse-Service

### Verwendung

```typescript
import { lighthouseService } from "@/lib/services/lighthouse.service";

// Audit ausführen
const result = await lighthouseService.runAudit("https://example.com");

// Ergebnis-Struktur
interface LighthouseResult {
  url: string;
  scores: {
    performance: number;      // 0-100
    accessibility: number;    // 0-100
    bestPractices: number;    // 0-100
    seo: number;             // 0-100
  };
  metrics: {
    firstContentfulPaint: number;      // ms
    speedIndex: number;                // ms
    largestContentfulPaint: number;    // ms
    timeToInteractive: number;         // ms
    totalBlockingTime: number;         // ms
    cumulativeLayoutShift: number;     // score
  };
  opportunities: Array<{
    title: string;
    description: string;
    savings: string;  // "1.2 s" oder "800 ms"
  }>;
  screenshot?: string;  // Base64-encoded JPEG
  timestamp: string;
}

// Zusammenfassung generieren
const summary = lighthouseService.generateSummary(result);
```

## E-Mail-Service

### Verwendung

```typescript
import { emailService } from "@/lib/services/email.service";

// Audit-E-Mail senden
const html = emailService.generateAuditEmail(auditResult);
await emailService.send({
  to: "kunde@example.com",
  subject: "Ihre Website-Analyse",
  html,
});

// Kontaktbestätigung senden
const confirmHtml = emailService.generateContactConfirmation({
  name: "Max Mustermann",
  email: "max@example.com",
  message: "..."
});
await emailService.send({
  to: "max@example.com",
  subject: "Ihre Anfrage bei ProMakler Digital",
  html: confirmHtml,
});
```

## Deployment

### Vercel

1. **Environment Variables** in Vercel Dashboard setzen:
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SITE_URL`

2. **Function Timeout erhöhen** (optional):
   ```json
   // vercel.json
   {
     "functions": {
       "app/api/audit-request/route.ts": {
         "maxDuration": 60
       }
     }
   }
   ```

3. **Deployment**:
   ```bash
   vercel deploy --prod
   ```

### Domain-Verifizierung bei Resend

Für Production müssen Sie Ihre Domain bei Resend verifizieren:

1. Gehen Sie zu [resend.com/domains](https://resend.com/domains)
2. Fügen Sie `promakler.de` hinzu
3. Fügen Sie die DNS-Records hinzu:
   - SPF Record
   - DKIM Record
   - DMARC Record (optional)
4. Warten Sie auf die Verifizierung (kann 24-48h dauern)

**Während der Entwicklung:**
Sie können E-Mails von `onboarding@resend.dev` versenden (keine Domain-Verifizierung nötig).

## Troubleshooting

### Chrome nicht gefunden

**Fehler:** `Error: Could not find Chrome executable`

**Lösung (lokal):**
```bash
# macOS
brew install --cask chromium

# Linux
sudo apt-get install chromium-browser
```

**Lösung (Vercel):**
Verwenden Sie `@sparticuz/chromium`:
```bash
npm install @sparticuz/chromium
```

### Lighthouse-Timeout

**Fehler:** Lighthouse-Audit schlägt nach 60s fehl

**Ursachen:**
- Website ist sehr langsam oder nicht erreichbar
- Zu viele Ressourcen laden
- Server-Timeouts

**Lösung:**
- Erhöhen Sie `maxDuration` in der API-Route
- Implementieren Sie Retry-Logik
- Prüfen Sie die Website-Erreichbarkeit vorher

### E-Mail wird nicht versendet

**Fehler:** `Email service not configured`

**Lösung:**
1. Prüfen Sie, ob `RESEND_API_KEY` gesetzt ist
2. Verifizieren Sie die Domain bei Resend
3. Prüfen Sie die Logs auf Fehler

**Test-E-Mail senden:**
```bash
curl -X POST https://promakler.de/api/audit-request \
  -H "Content-Type: application/json" \
  -d '{"url":"https://google.com","email":"ihre@email.de"}'
```

## Performance-Optimierung

### Screenshot-Größe reduzieren

```typescript
// In lighthouse.service.ts
const screenshotBuffer = await page.screenshot({
  type: "jpeg",
  quality: 70,  // Von 85 auf 70 reduzieren
  fullPage: false,
});
```

### Lighthouse-Kategorien einschränken

```typescript
// Nur Performance-Audit
const runnerResult = await lighthouse(url, {
  onlyCategories: ["performance"],  // Statt alle 4
  // ...
});
```

### Parallele Verarbeitung

Für mehrere Audits gleichzeitig können Sie Queue-Systeme verwenden:
- **Vercel**: Edge Functions oder Background Jobs
- **Alternative**: Bull Queue, BullMQ, Inngest

## Kosten

### Resend (E-Mail)
- **Free Tier**: 3.000 E-Mails/Monat kostenlos
- **Pro**: $20/Monat für 50.000 E-Mails

### Vercel (Serverless Functions)
- **Hobby**: 100 GB-Stunden/Monat kostenlos
- **Pro**: $20/Monat mit erweiterten Limits

### Schätzung:
- **1 Lighthouse-Audit**: ~10-30 Sekunden Laufzeit
- **100 Audits/Monat**: ~30 Minuten = 0.5 GB-Stunden
- **E-Mails**: 200/Monat (100 Audits + 100 Kontaktformulare)

**→ Komplett im Free Tier möglich!**

## Support

Bei Fragen oder Problemen:
- **Resend-Docs**: https://resend.com/docs
- **Lighthouse-Docs**: https://developer.chrome.com/docs/lighthouse
- **Vercel-Docs**: https://vercel.com/docs
