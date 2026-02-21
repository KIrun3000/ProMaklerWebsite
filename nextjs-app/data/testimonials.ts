export interface Testimonial {
  id: string;
  zitat: string;
  autor: string;
  firma: string;
  location: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    zitat:
      "Die beste Investition in mein Geschäft seit Jahren. Die Website arbeitet für mich, nicht andersherum.",
    autor: "Michael S.",
    firma: "Immobilien S.",
    location: "Berlin",
    rating: 5,
  },
  {
    id: "2",
    zitat:
      "Endlich jemand, der versteht, was Makler brauchen. Keine Agentur-Floskeln, sondern echte Lösungen.",
    autor: "Sandra P.",
    firma: "SP Immobilien",
    location: "Hamburg",
    rating: 5,
  },
  {
    id: "3",
    zitat:
      "Von der Beratung bis zur Umsetzung: Professionell, schnell und immer erreichbar. So muss das sein.",
    autor: "Thomas W.",
    firma: "Weber & Partner",
    location: "München",
    rating: 5,
  },
  {
    id: "4",
    zitat:
      "Die CRM-Integration hat mir den Alltag so viel einfacher gemacht. Kein manuelles Abtippen mehr!",
    autor: "Kristina H.",
    firma: "Hoffmann Immobilien",
    location: "Frankfurt",
    rating: 5,
  },
  {
    id: "5",
    zitat:
      "Ich bekomme regelmäßig Komplimente für meine Website. Das ist der erste Eindruck, der zählt.",
    autor: "Andreas M.",
    firma: "Müller Immobilienvermittlung",
    location: "Köln",
    rating: 5,
  },
  {
    id: "6",
    zitat:
      "Nach dem Relaunch haben sich meine Anfragen verdoppelt. Die Investition hat sich in 2 Monaten rentiert.",
    autor: "Julia B.",
    firma: "Bauer Maklerservice",
    location: "Stuttgart",
    rating: 5,
  },
  {
    id: "7",
    zitat:
      "Schnelle Umsetzung, faire Preise und ein Ergebnis, das überzeugt. Absolute Empfehlung!",
    autor: "Robert K.",
    firma: "Kluge Immobilien",
    location: "Düsseldorf",
    rating: 5,
  },
];

// Placeholder disclaimer flag
export const IS_PLACEHOLDER_CONTENT =
  process.env.NEXT_PUBLIC_PLACEHOLDER_CONTENT === "1";
