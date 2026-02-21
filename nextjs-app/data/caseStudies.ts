export interface CaseStudy {
  slug: string;
  kunde: string;
  location: string;
  ausgangssituation: string;
  loesung: string[];
  ergebnisse: {
    label: string;
    value: string;
  }[];
  testimonial: {
    zitat: string;
    autor: string;
    rolle: string;
  };
  image: string;
  imageAlt: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "makler-berlin-mitte",
    kunde: "Immobilienmakler",
    location: "Berlin-Mitte",
    ausgangssituation:
      "Die bestehende Website war über 8 Jahre alt, nicht mobiloptimiert und hatte keine Anbindung an das CRM-System. Leads mussten manuell übertragen werden, was zu Verzögerungen und verlorenen Anfragen führte.",
    loesung: [
      "Kompletter Relaunch mit modernem, responsivem Design",
      "Integration mit onOffice CRM für automatischen Lead-Import",
      "Immobilien-Expose-Galerie mit Filterfunktion",
      "SEO-Optimierung für lokale Suchanfragen",
    ],
    ergebnisse: [
      { label: "Mehr Anfragen", value: "+47%" },
      { label: "Weniger Admin-Arbeit", value: "-60%" },
      { label: "Bessere Google-Position", value: "Top 3" },
    ],
    testimonial: {
      zitat:
        "Endlich eine Website, die zu meinem Anspruch passt. Die automatische CRM-Anbindung spart mir jeden Tag Zeit.",
      autor: "M. Schmidt",
      rolle: "Inhaber",
    },
    image: "/images/case-study-placeholder.jpg",
    imageAlt: "Makler-Website Berlin-Mitte Vorschau",
  },
  {
    slug: "maklerin-hamburg-eppendorf",
    kunde: "Immobilienmaklerin",
    location: "Hamburg-Eppendorf",
    ausgangssituation:
      "Als Einzelmaklerin fehlte es an einer professionellen Online-Präsenz. Die Konkurrenz mit großen Maklerbüros war schwierig, da potenzielle Verkäufer die Professionalität anhand der Website beurteilten.",
    loesung: [
      "Premium-One-Page-Website mit persönlichem Branding",
      "Integriertes Bewertungstool für Eigentümer-Akquise",
      "Professionelle Fotografie-Integration",
      "Google My Business Optimierung",
    ],
    ergebnisse: [
      { label: "Neue Eigentümer-Leads/Monat", value: "12+" },
      { label: "Conversion-Rate", value: "8.5%" },
      { label: "Markenwahrnehmung", value: "Premium" },
    ],
    testimonial: {
      zitat:
        "Meine Website hebt mich jetzt von den großen Ketten ab. Eigentümer rufen an und sagen, sie haben mich wegen der Website ausgewählt.",
      autor: "S. Petersen",
      rolle: "Inhaberin",
    },
    image: "/images/case-study-placeholder.jpg",
    imageAlt: "Maklerin-Website Hamburg Vorschau",
  },
  {
    slug: "maklerbuero-muenchen",
    kunde: "Maklerbüro",
    location: "München-Schwabing",
    ausgangssituation:
      "Ein Team von 5 Maklern arbeitete mit einer veralteten WordPress-Seite. Die Ladezeiten waren schlecht, das Design inkonsistent und es gab keine Möglichkeit, Objekte automatisch aus FlowFact zu synchronisieren.",
    loesung: [
      "Komplette Neuentwicklung mit Next.js für optimale Performance",
      "FlowFact API-Integration für Echtzeit-Objektsynchronisation",
      "Team-Profilseiten mit individuellen Landingpages",
      "Blog-System für SEO-Content-Marketing",
    ],
    ergebnisse: [
      { label: "Ladezeit", value: "0.8s" },
      { label: "Organischer Traffic", value: "+120%" },
      { label: "Objekt-Anfragen", value: "+35%" },
    ],
    testimonial: {
      zitat:
        "Die neue Website ist schnell, sieht professionell aus und unsere Objekte sind automatisch immer aktuell. Genau das, was wir gebraucht haben.",
      autor: "T. Weber",
      rolle: "Geschäftsführer",
    },
    image: "/images/case-study-placeholder.jpg",
    imageAlt: "Maklerbüro-Website München Vorschau",
  },
  {
    slug: "gewerbe-makler-frankfurt",
    kunde: "Gewerbemakler",
    location: "Frankfurt am Main",
    ausgangssituation:
      "Spezialisiert auf Gewerbeimmobilien fehlte eine professionelle Präsentation des Portfolios. Internationale Investoren erwarteten eine mehrsprachige Website mit detaillierten Objektinformationen.",
    loesung: [
      "Mehrsprachige Website (DE/EN)",
      "Detaillierte Gewerbe-Expose-Seiten mit Kennzahlen",
      "Investoren-Bereich mit Login für Off-Market-Objekte",
      "Automatisierte Reporting-Funktion",
    ],
    ergebnisse: [
      { label: "Internationale Anfragen", value: "+80%" },
      { label: "Deal-Volumen", value: "+2.5M €" },
      { label: "Off-Market-Registrierungen", value: "45+" },
    ],
    testimonial: {
      zitat:
        "Der Investoren-Bereich war ein Game-Changer. Unsere internationalen Kunden schätzen die professionelle Präsentation sehr.",
      autor: "Dr. K. Hoffmann",
      rolle: "Managing Partner",
    },
    image: "/images/case-study-placeholder.jpg",
    imageAlt: "Gewerbemakler-Website Frankfurt Vorschau",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
