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
    id: "starter",
    name: "Starter",
    priceRange: "1.500 – 2.500 €",
    description: "Perfekt für den Einstieg oder als Einzelmakler",
    features: [
      "One-Page-Website",
      "Responsive Design (Mobile + Desktop)",
      "Kontaktformular mit E-Mail-Benachrichtigung",
      "SSL-Verschlüsselung",
      "DSGVO-konforme Einrichtung",
      "1 Monat Support nach Launch",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    priceRange: "3.000 – 5.000 €",
    description: "Für etablierte Makler mit Wachstumsambitionen",
    features: [
      "Multi-Page Website (5-7 Seiten)",
      "CRM-Integration (onOffice, FlowFact, Pipedrive)",
      "Immobilien-Expose-Galerie",
      "SEO-Grundoptimierung",
      "Google Analytics Einrichtung",
      "Kontaktformular mit CRM-Anbindung",
      "3 Monate Support nach Launch",
    ],
    highlighted: true,
    badge: "Beliebteste Wahl",
  },
  {
    id: "premium",
    name: "Premium",
    priceRange: "ab 6.000 €",
    description: "Maßgeschneiderte Lösungen für große Büros",
    features: [
      "Individuelle Seitenanzahl nach Bedarf",
      "API-Integrationen (ImmoScout24, Immowelt, etc.)",
      "Investoren-/Off-Market-Bereich mit Login",
      "Blog-/News-System",
      "Mehrsprachigkeit (DE/EN)",
      "Laufende SEO-Betreuung",
      "6 Monate Priority-Support",
    ],
  },
];

export const pricingFAQs: PricingFAQ[] = [
  {
    frage: "Was ist in den Preisen enthalten?",
    antwort:
      "Alle Preise beinhalten Konzeption, Design, Entwicklung, Responsive-Optimierung, eine Feedbackrunde und die technische Einrichtung. Hosting und Domain sind nicht enthalten (ca. 10-30 €/Monat).",
  },
  {
    frage: "Gibt es laufende Kosten?",
    antwort:
      "Die Website-Erstellung ist ein Einmalpreis. Laufende Kosten entstehen nur für Hosting (ca. 10-30 €/Monat) und optionale Services wie SEO-Betreuung oder erweiterten Support.",
  },
  {
    frage: "Wie lange dauert die Umsetzung?",
    antwort:
      "Starter-Projekte sind in 1-2 Wochen fertig, Professional in 2-3 Wochen und Premium-Projekte je nach Umfang in 4-6 Wochen.",
  },
  {
    frage: "Kann ich später upgraden?",
    antwort:
      "Ja! Unsere modulare Struktur erlaubt es, Features wie CRM-Integration, Blog oder Investoren-Bereich jederzeit nachzurüsten.",
  },
  {
    frage: "Was ist, wenn ich spezielle Anforderungen habe?",
    antwort:
      "Kein Problem – wir erstellen gerne ein individuelles Angebot. Vereinbaren Sie einfach ein kostenloses Beratungsgespräch.",
  },
];
