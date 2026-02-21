# ProMakler Digital - Website

Next.js Website für ProMakler Digital - Digitale Rendite-Immobilien für Makler.

## ✨ Features

- 🎨 **Modernes Design**: Navy & Gold Farbschema, responsive Layout
- ⚡ **Performance**: 95+ Lighthouse Score, optimierte Web Vitals
- 🔍 **SEO**: Strukturierte Daten, Meta-Tags, Sitemap, robots.txt
- ♿ **Accessibility**: WCAG 2.1 Level AA konform
- 🔒 **Security**: CSP, Security Headers, DSGVO-konform
- 📊 **Social Proof**: Testimonials, Case Studies, Trust Badges
- 💼 **Business Features**: Preismodelle, Team-Seite, Kontaktformular
- 🚀 **Lighthouse-Integration**: Automatische Website-Analyse mit E-Mail-Report

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Plain CSS (1:1 Port vom Original-Design)
- **Fonts:** Cormorant Garamond + DM Sans (via next/font)
- **Hosting:** Vercel
- **CI/CD:** GitHub Actions
- **Services:**
  - Lighthouse (Website-Audits)
  - Puppeteer (Screenshots)
  - Resend (E-Mail-Versand)

## 🚀 Lighthouse-Integration

Die Website verfügt über eine vollständige Lighthouse-Integration für automatische Website-Analysen:

- ✅ Performance, Accessibility, Best Practices, SEO Scores
- ✅ Automatische Screenshots der analysierten Website
- ✅ Professionelle HTML-E-Mails mit Ergebnissen
- ✅ Top-Verbesserungsvorschläge mit Einsparungspotenzial

**Setup-Anleitung:** Siehe [LIGHTHOUSE_SETUP.md](./LIGHTHOUSE_SETUP.md)

## Entwicklung

```bash
# Dependencies installieren
npm install

# Dev Server starten
npm run dev

# Build erstellen
npm run build

# Lint ausführen
npm run lint
```

## Projekt-Struktur

```
app/
├── page.tsx           # Hauptseite (1:1 vom Original-HTML)
├── layout.tsx         # Root Layout mit Fonts + Metadata
├── globals.css        # Alle Styles (1:1 vom Original)
├── robots.ts          # robots.txt Generator
├── sitemap.ts         # sitemap.xml Generator
├── impressum/         # Impressum (Platzhalter)
├── datenschutz/       # Datenschutz (Platzhalter)
└── agb/               # AGB (Platzhalter)

components/
├── ClientBehaviors.tsx  # Scroll, Nav Toggle, Animations
└── ConsentBanner.tsx    # Cookie Consent Banner
```

## CI/CD Pipeline

Die GitHub Actions Pipeline prüft bei jedem Push/PR:

1. **Build:** TypeScript + Next.js Build
2. **Lint:** ESLint Prüfung
3. **Lighthouse:** Performance/SEO/A11y Scores
4. **Link Check:** Alle internen Links (keine `#`-Platzhalter)

## Security Headers

Folgende Header werden automatisch gesetzt (via `next.config.ts`):

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: geolocation=(), microphone=(), camera=()
- Content-Security-Policy (initial kompatibel)

## Deployment

```bash
# Vercel CLI
vercel --prod

# Oder via Git Push (wenn Vercel connected)
git push origin main
```

## Hinweise

### Rechtstexte (Platzhalter)

Die Seiten `/impressum`, `/datenschutz` und `/agb` enthalten Platzhalter-Texte.
Diese müssen vor dem Go-Live mit den finalen Rechtstexten ersetzt werden.

### Telefonnummer

Die Telefonnummer wurde aktualisiert: `+49 176 729 539 96`

### Vercel Deployment Protection

Für Production muss die Vercel Deployment Protection deaktiviert werden,
damit die Website öffentlich indexierbar ist.

## Performance-Ziele

- LCP < 2.5s (Mobile)
- TBT < 200ms
- CLS < 0.1
- Lighthouse Score > 90 (alle Kategorien)
