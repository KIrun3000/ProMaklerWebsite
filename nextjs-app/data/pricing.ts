export interface PricingTier {
  id: string;
  name: string;
  priceRange: string;
  monthlyPrice?: string;
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
    name: "ProMakler Start",
    priceRange: "1.990 €",
    monthlyPrice: "+ 69 €/Monat",
    description: "Für Makler, die sofort mehr Anfragen wollen – ohne Risiko.",
    features: [
      "Kompletter Website-Relaunch (Neubau-Standard)",
      "Responsive Design – Mobile, Tablet, Desktop",
      "CRM-Anbindung (onOffice, FlowFact, Propstack)",
      "SEO-Grundoptimierung für Ihren Standort",
      "DSGVO-konforme Einrichtung",
      "SSL-Verschlüsselung & schnelles Hosting",
      "Branded Dokument-Suite (6 Dokumente)",
      "Exposé-Vorlage, Briefpapier, Visitenkarte",
      "Rechnungsvorlage, E-Mail-Signatur, Angebots-Mappe",
      "Abnahme & Go-Live in 48 Stunden",
      "Laufende Betreuung & Updates inklusive",
    ],
    highlighted: true,
    badge: "Empfehlung",
  },
  {
    id: "professional",
    name: "ProMakler Pro",
    priceRange: "2.490 €",
    monthlyPrice: "+ 89 €/Monat",
    description: "Für Makler mit höherem Volumen und Wachstumsambitionen.",
    features: [
      "Alles aus ProMakler Start",
      "Mehrseitige Website (bis 7 Unterseiten)",
      "Immobilien-Expose-Galerie (automatisch befüllt)",
      "Bewertungs-Tool: Lead-Generierung auf Autopilot",
      "Off-Market-Login-Bereich für Stammkunden",
      "Blog/News-System für lokale SEO",
      "Google Analytics & Search Console Einrichtung",
      "Erweiterte Dokument-Suite (10+ Dokumente)",
      "3 Monate Priority-Support",
    ],
    highlighted: false,
  },
  {
    id: "premium",
    name: "ProMakler Premium",
    priceRange: "Auf Anfrage",
    description: "Für Büros mit mehreren Standorten oder speziellen Anforderungen.",
    features: [
      "Alles aus ProMakler Pro",
      "Mehrere Standortseiten",
      "Individuelle API-Integrationen",
      "Mehrsprachigkeit (DE/EN)",
      "ImmoScout24 & Immowelt Live-Sync",
      "Recruiting-Funnel für Makler-Akquise",
      "Laufende SEO-Betreuung (monatlich)",
      "Persönlicher Ansprechpartner",
    ],
  },
];

export const pricingFAQs: PricingFAQ[] = [
  {
    frage: "Was bedeutet die monatliche Pauschale?",
    antwort:
      "Die monatliche Pauschale (ab 69 €/Monat) deckt Hosting, SSL-Zertifikat, DSGVO-Updates, technische Wartung und kleinere Anpassungen. Sie ist kein klassisches Abo – sondern Ihr digitaler Hausmeister. Keine versteckten Kosten.",
  },
  {
    frage: "Wann zahle ich?",
    antwort:
      "Sie zahlen erst, wenn Ihre neue Website live ist und Sie sie abgenommen haben. Kein Risiko, keine Vorauszahlung. Der Einmalbetrag wird nach Go-Live fällig.",
  },
  {
    frage: "Was sind die 6 Dokumente der Branded Suite?",
    antwort:
      "Zum Launch erhalten Sie: ein professionelles Briefpapier (DIN A4), eine Visitenkarte (Vorder- & Rückseite), eine Exposé-Vorlage, eine Rechnungsvorlage (§14 UStG-konform), eine E-Mail-Signatur und eine Angebotsmappe. Alle im Design Ihrer neuen Website.",
  },
  {
    frage: "In wie vielen Tagen ist die Website fertig?",
    antwort:
      "Sie sehen Ihre neue Website als Vorschau innerhalb von 48 Stunden. Nach Ihrer Freigabe ist sie in weiteren 24 Stunden live. Von Erstkontakt bis Go-Live: maximal 72 Stunden.",
  },
  {
    frage: "Kann ich später upgraden?",
    antwort:
      "Ja – unsere modulare Struktur erlaubt es, Features wie das Bewertungs-Tool, den Off-Market-Bereich oder den Blog jederzeit nachzurüsten. Sie zahlen nur, was Sie wirklich brauchen.",
  },
];
