export interface PricingTier {
  id: string;
  name: string;
  priceRange: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}

export interface PricingFAQ {
  frage: string;
  antwort: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "start",
    name: "Start",
    priceRange: "1.900 €",
    description: "Der perfekte Einstieg für moderne Einzelmakler.",
    features: [
      "High-End One-Page Website",
      "AstroWind-Technologie (Extrem schnell)",
      "Rechtssicheres Impressum & Datenschutz",
      "Kontaktformular + WhatsApp-Button",
      "Mobile First Design",
      "SEO-Basis-Setup (Google Business)",
      "1 Monat Support inklusive",
      "Hosting-Einrichtung (Vercel/Netlify)",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    priceRange: "2.900 €",
    description: "Die Komplettlösung für wachsende Immobilienbüros.",
    features: [
      "Multi-Page Website (bis 7 Unterseiten)",
      "Objekt-Integration (OpenImmo/FlowFact)",
      "Team-Seite & Karriere-Bereich",
      "Blog / Ratgeber-Sektion",
      "Erweitertes SEO-Setup (Local SEO)",
      "Google Analytics & Search Console",
      "Lead-Magnet (z.B. Wertermittlung)",
      "3 Monate Support inklusive",
      "Premium Design-Anpassungen",
    ],
    highlighted: true,
    badge: "Bestseller",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceRange: "Auf Anfrage",
    description: "Maßgeschneidert für Filialisten & Bauträger.",
    features: [
      "Unbegrenzte Unterseiten",
      "Individuelle Schnittstellen-Entwicklung",
      "Headless CMS Anbindung",
      "Intranet / Makler-Login Bereiche",
      "Mehrsprachigkeit (i18n)",
      "High-Performance Server Setup",
      "SLA & 24/7 Priority Support",
      "Custom Design System",
      "White-Label Lösungen",
    ],
  },
];

export const pricingFAQs: PricingFAQ[] = [
  {
    frage: "Warum sind Ihre Websites so viel schneller?",
    antwort:
      "Wir nutzen AstroWind – eine moderne Technologie, die unnötigen Ballast entfernt. Das sorgt für Ladezeiten unter 1 Sekunde und besseres Google-Ranking.",
  },
  {
    frage: "Kann ich meine Immobilien-Software anbinden?",
    antwort:
      "Ja, im Premium-Paket binden wir gängige Makler-Software (onOffice, FlowFact, etc.) via OpenImmo oder API an.",
  },
  {
    frage: "Wie lange dauert die Umsetzung?",
    antwort:
      "Start-Projekte sind oft in 5-10 Werktagen live. Premium-Projekte dauern je nach Umfang ca. 2-3 Wochen.",
  },
  {
    frage: "Gehört die Website mir?",
    antwort:
      "Zu 100%. Keine Mietmodelle, kein Vendor-Lock-in. Sie erhalten den vollen Quellcode und alle Rechte.",
  },
  {
    frage: "Was passiert nach dem Launch?",
    antwort:
      "Wir lassen Sie nicht allein. Support ist im Paket enthalten. Danach bieten wir optionale Wartungspakete an, oder Sie pflegen Inhalte selbst.",
  },
];
