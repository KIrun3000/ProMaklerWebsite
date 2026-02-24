/**
 * Kompatibilitäts-Matrix: System × Feature für CompatibilityTable
 */
export type FeatureValue = true | false | "optional";

export const COMPAT_SYSTEMS = [
  { id: "onoffice", name: "onOffice" },
  { id: "flowfact", name: "FLOWFACT" },
  { id: "propstack", name: "Propstack" },
  { id: "immoware24", name: "Immoware24" },
  { id: "csv", name: "CSV / eigene Quelle" },
] as const;

export const COMPAT_FEATURES = [
  { id: "realtime", label: "Echtzeit-Sync" },
  { id: "images", label: "Automatische Bilder" },
  { id: "expose", label: "Exposé-PDFs" },
  { id: "webhook", label: "Webhook-Support" },
  { id: "setup", label: "Einrichtungszeit" },
] as const;

export type SystemId = (typeof COMPAT_SYSTEMS)[number]["id"];
export type FeatureId = (typeof COMPAT_FEATURES)[number]["id"];

export const COMPAT_MATRIX: Record<SystemId, Record<FeatureId, FeatureValue>> = {
  onoffice: {
    realtime: true,
    images: true,
    expose: true,
    webhook: "optional",
    setup: true,
  },
  flowfact: {
    realtime: true,
    images: true,
    expose: true,
    webhook: "optional",
    setup: true,
  },
  propstack: {
    realtime: true,
    images: true,
    expose: true,
    webhook: true,
    setup: true,
  },
  immoware24: {
    realtime: "optional",
    images: true,
    expose: true,
    webhook: false,
    setup: true,
  },
  csv: {
    realtime: false,
    images: "optional",
    expose: "optional",
    webhook: false,
    setup: true,
  },
};

export const COMPAT_FOOTER =
  "Ihr System nicht dabei? Wir schauen uns das gerne an.";
