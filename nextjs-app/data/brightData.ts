/**
 * Bright Data / Real-Time: Stats, Problem-Lösung, Ökosystem, Code-Snippet
 */
export const BRIGHT_DATA_STATS = {
  ips: "150M+",
  countries: "195+",
  customers: "20.000+",
  datasets: "120+",
} as const;

export const BRIGHT_DATA_INTRO =
  "Für Sie als Makler bedeutet das: Kein manuelles Pflegen veralteter Portaldaten. Ihre Website kann Marktdaten, Preistrends und Verfügbarkeiten aus validierten Quellen beziehen — aktuell, DSGVO-konform und ohne Block oder Captcha.";

export const BRIGHT_DATA_PROBLEM_SOLUTION = [
  {
    problem: "Portal sperrt Scraping",
    solution: "MCP navigiert wie ein echter Browser",
  },
  {
    problem: "Daten veraltet oder lückenhaft",
    solution: "Live-Refresh aus 120+ validierten Quellen",
  },
  {
    problem: "Regionaler Markt unklar",
    solution: "Geo-gezielter Datenzugriff aus 195 Ländern",
  },
] as const;

export const BRIGHT_DATA_ECOSYSTEM = [
  { name: "ImmobilienScout24", label: "Live" },
  { name: "Immowelt", label: "Live" },
  { name: "Regionale Portale", label: "täglich" },
  { name: "Historische Marktdaten", label: "historisch" },
  { name: "Standort-Intelligence", label: "Live" },
  { name: "Preis-Trends", label: "täglich" },
] as const;

export const BRIGHT_DATA_TRUST_STRIP =
  "Dieselbe Infrastruktur wie 20.000+ Enterprise-Kunden · Petabyte-skaliert · GDPR-ready.";

export const BRIGHT_DATA_CODE_SNIPPET = `{
  "objectId": "obj-123",
  "title": "3-Zimmer-Wohnung Berlin-Mitte",
  "price": 420000,
  "livingArea": 78,
  "rooms": 3,
  "address": { "city": "Berlin", "district": "Mitte" },
  "images": ["https://..."],
  "lastUpdated": "2025-02-24T10:00:00Z"
}`;
