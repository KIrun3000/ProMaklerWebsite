export interface FeatureGroup {
  category: string;
  items: string[];
}

export interface PricingTier {
  id: string;
  name: string;
  priceRange: string;
  description: string;
  targetAudience: string;
  coreFeatures: string[];
  includedPackage: string;
  detailedFeatures: FeatureGroup[];
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
    priceRange: "1.900 €",
    description: "Perfekt für den Einstieg oder als Einzelmakler",
    targetAudience: "Online gehen + Basisbrand",
    coreFeatures: [
      "One-Page-Website mit Responsive Design",
      "DSGVO-konforme Einrichtung inkl. SSL",
      "Kontaktformular mit E-Mail-Benachrichtigung",
      "1 Monat Support nach Launch",
      "Branding-Paket & Vertriebsunterlagen inklusive",
    ],
    includedPackage: "Branding-Paket & Unterlagen inklusive",
    detailedFeatures: [
      {
        category: "Branding-Paket",
        items: [
          "Briefpapier-Vorlage",
          "E-Mail-Signatur-Vorlage",
          "Visitenkarte (1 Variante)",
          "Social-Media-Kit (Basis)",
        ],
      },
      {
        category: "Vertriebsunterlagen",
        items: [
          "Exposé-Vorlage",
          "Rechnungs-Vorlage (Text & Struktur)",
          "Angebots-Template (Nutzung)",
          "Bewertungs-Onepager (Vorlage)",
        ],
      },
      {
        category: "Operations",
        items: [
          "Portal-Ready-Checkliste (ImmoScout, Immowelt)",
          "Akquise-Anschreiben Eigentümer",
          "Dokumenten-Übersicht (/documents)",
          "Ops-Tile \"Makler Offer Stack\" (/ops)",
        ],
      },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    priceRange: "2.900 €",
    description: "Für etablierte Makler mit Wachstumsambitionen",
    targetAudience: "Wachsen + CRM + Marketing",
    coreFeatures: [
      "Multi-Page Website (5-7 Seiten)",
      "CRM-Integration (onOffice, FlowFact, Pipedrive)",
      "Immobilien-Galerie mit Exposé-System",
      "SEO-Optimierung + Google Analytics",
      "Vollständiges Branding- & Marketing-Paket",
    ],
    includedPackage: "Premium Branding & Marketing-Kit inklusive",
    detailedFeatures: [
      {
        category: "Website-Features",
        items: [
          "Multi-Page Website (5-7 Seiten)",
          "CRM-Integration (onOffice, FlowFact, Pipedrive)",
          "Immobilien-Expose-Galerie",
          "Kontaktformular mit CRM-Anbindung",
          "SEO-Grundoptimierung",
          "Google Analytics Einrichtung",
          "3 Monate Support nach Launch",
        ],
      },
      {
        category: "Branding-Paket Pro",
        items: [
          "Briefpapier-Vorlage",
          "E-Mail-Signatur-Vorlage",
          "Visitenkarten (2 Varianten)",
          "Exposé-Vorlage inkl. 2 Layout-Varianten",
          "Rechnungs-Vorlage (Text & Struktur)",
        ],
      },
      {
        category: "Marketing & Vertrieb",
        items: [
          "Social-Media-Kit (vollständig)",
          "Akquise-Anschreiben + 2 Betreff-Varianten",
          "Bewertungs-Onepager (Vorlage)",
          "Angebots-Template (Anpassung)",
        ],
      },
      {
        category: "Operations",
        items: [
          "Portal-Ready-Checkliste (ImmoScout, Immowelt)",
          "Dokumenten-Übersicht (/documents)",
          "Ops-Tile „Makler Offer Stack" (/ops)",
        ],
      },
    ],
    highlighted: true,
    badge: "Beliebteste Wahl",
  },
  {
    id: "premium",
    name: "Premium",
    priceRange: "5.400 €",
    description: "Maßgeschneiderte Lösungen für große Büros",
    targetAudience: "Individuelles Projekt + Enterprise",
    coreFeatures: [
      "Individuelle Seitenanzahl nach Bedarf",
      "API-Integrationen (ImmoScout24, Immowelt)",
      "Investoren-/Off-Market-Bereich mit Login",
      "Blog-System + Mehrsprachigkeit (DE/EN)",
      "Laufende SEO-Betreuung + 6 Monate Priority-Support",
    ],
    includedPackage: "Enterprise Branding & Marketing-Suite inklusive",
    detailedFeatures: [
      {
        category: "Enterprise Website",
        items: [
          "Individuelle Seitenanzahl nach Bedarf",
          "API-Integrationen (ImmoScout24, Immowelt, etc.)",
          "Investoren-/Off-Market-Bereich mit Login",
          "Blog-/News-System",
          "Mehrsprachigkeit (DE/EN)",
          "Laufende SEO-Betreuung",
          "6 Monate Priority-Support",
        ],
      },
      {
        category: "Branding-Paket Enterprise",
        items: [
          "Briefpapier-Vorlage",
          "E-Mail-Signatur-Vorlage",
          "Visitenkarten (3+ Varianten inkl. Team-Set)",
          "Exposé-Vorlage + 2 Layout-Varianten",
          "Rechnungs-Vorlage (Text & Struktur)",
        ],
      },
      {
        category: "Marketing-Suite",
        items: [
          "Social-Media-Kit voll + Team-Playbook",
          "Akquise-Anschreiben (5 Varianten/Segmente)",
          "Bewertungs-Onepager + 2 Varianten",
          "Angebots-Template (Anpassung + Varianten)",
        ],
      },
      {
        category: "Operations & Support",
        items: [
          "Portal-Ready-Checkliste (ImmoScout, Immowelt)",
          "Dokumenten-Übersicht (/documents)",
          "Ops-Tile „Makler Offer Stack" (/ops)",
          "6 Monate Priority-Support",
        ],
      },
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
