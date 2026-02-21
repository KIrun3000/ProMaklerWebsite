export interface TeamMember {
  id: string;
  name: string;
  rolle: string;
  bio: string;
  expertise: string[];
  linkedIn?: string;
  image: string;
}

export interface SoloProfile {
  name: string;
  titel: string;
  story: string;
  qualifikationen: string[];
  erfahrung: string;
  image: string;
}

// Set to true for solo founder profile, false for team display
export const IS_SOLO = true;

export const soloProfile: SoloProfile = {
  name: "Luca Ingenbleek",
  titel: "Gründer & Entwickler",
  story: `Ich habe Immobilienprojektentwicklung studiert und stamme aus einer Familie von Architekten 
und Entwicklern. Ich bin mit Bebauungsplänen und Baustellen aufgewachsen.

Deshalb verstehe ich Ihr Geschäft – weil es meine DNA ist. Wenn Sie von "Farming", "Off-Market" 
oder "Sondereigentum" sprechen, muss ich nicht googeln.

Ich übertrage die Prinzipien der Projektentwicklung auf das Webdesign: Solide Bausubstanz 
(sauberer Code), beste Lage (Top-Positionen bei Google) und Nachhaltigkeit (Systeme, die wachsen).`,
  qualifikationen: [
    "M.Sc. Immobilienprojektentwicklung",
    "Zertifizierter Web Developer",
    "Google Analytics & SEO Spezialist",
    "CRM-Integrations-Experte (onOffice, FlowFact)",
  ],
  erfahrung:
    "Über 5 Jahre Erfahrung in der Entwicklung von Websites für die Immobilienbranche",
  image: "/images/team-placeholder.jpg",
};

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Luca Ingenbleek",
    rolle: "Gründer & Lead Developer",
    bio: "Immobilienprojektentwickler mit Leidenschaft für digitale Lösungen. Verbindet Branchenwissen mit technischer Expertise.",
    expertise: ["Next.js", "CRM-Integrationen", "SEO"],
    linkedIn: "https://linkedin.com/in/lucaingenbleek",
    image: "/images/team-placeholder.jpg",
  },
  {
    id: "2",
    name: "Anna Weber",
    rolle: "Design & UX",
    bio: "Kreative Köpfin mit Fokus auf nutzerfreundliche Designs, die konvertieren. Spezialisiert auf die Immobilienbranche.",
    expertise: ["UI/UX Design", "Branding", "Conversion-Optimierung"],
    image: "/images/team-placeholder.jpg",
  },
];
