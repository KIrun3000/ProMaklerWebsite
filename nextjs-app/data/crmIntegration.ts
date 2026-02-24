/**
 * CRM-Integration: Daten für Flow-Diagramm und „Ihr CRM, Ihre Regeln“
 */
export interface CrmItem {
  id: string;
  name: string;
  logoPath?: string;
  copySatz: string;
}

export const CRMS: CrmItem[] = [
  {
    id: "onoffice",
    name: "onOffice",
    logoPath: "/images/crm/onoffice.svg",
    copySatz: "Sie pflegen Objekte in onOffice → Ihre Website zeigt sie automatisch.",
  },
  {
    id: "flowfact",
    name: "FLOWFACT",
    logoPath: "/images/crm/flowfact.svg",
    copySatz: "Sie pflegen Objekte in FLOWFACT → Ihre Website zeigt sie automatisch.",
  },
  {
    id: "propstack",
    name: "Propstack",
    logoPath: "/images/crm/propstack.svg",
    copySatz: "Sie pflegen Objekte in Propstack → Ihre Website zeigt sie automatisch.",
  },
  {
    id: "immoware24",
    name: "Immoware24",
    logoPath: "/images/crm/immoware24.svg",
    copySatz: "Sie pflegen Objekte in Immoware24 → Ihre Website zeigt sie automatisch.",
  },
];

export const FLOW_LABELS = {
  apiLabel: "OpenImmo XML / REST API",
  syncInterval: "alle 4 Stunden",
  benefits: [
    "Kein manuelles Hochladen",
    "Bilder automatisch optimiert",
    "DSGVO-konform",
  ],
} as const;
