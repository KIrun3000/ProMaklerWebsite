import Link from "next/link";

const DOCS = [
  {
    label: "Briefpapier & Visitenkarte",
    description: "Einheitliches Design für alle Korrespondenz",
    image: "/images/documents/doc-preview-briefpapier.png",
  },
  {
    label: "Angebotsmappe",
    description: "Professionelle Angebotsunterlagen im Markenlook",
    image: "/images/documents/doc-preview-angebot.png",
  },
  {
    label: "Exposé A4",
    description: "Exposé, Verträge – alles aus einem Guss",
    image: "/images/documents/doc-preview-expose.png",
  },
];

interface BrandedDocsSectionProps {
  variant?: "default" | "agrar";
}

export default function BrandedDocsSection({ variant = "default" }: BrandedDocsSectionProps) {
  const headline = variant === "agrar"
    ? "Branded Dokumente für Agrarmakler"
    : "Branded Dokumente in Ihrem Look";
  const subline = variant === "agrar"
    ? "Exposé, Angebot, Briefpapier, Social-Templates – automatisch aus Ihrem Agrar-Branding"
    : "Exposé, Angebot, Briefpapier, Social-Templates – automatisch aus Ihrem Branding";

  return (
    <section className="branded-docs-section section-dark" id="dokumente">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Design-System</span>
          <h2>{headline}</h2>
          <p className="section-intro">{subline}</p>
        </div>

        <div className="docs-grid">
          {DOCS.map((doc, i) => (
            <div key={i} className="doc-card">
              <div className="doc-card-image">
                <img
                  src={doc.image}
                  alt={doc.label}
                  loading="lazy"
                  width={320}
                  height={320}
                />
              </div>
              <div className="doc-card-body">
                <h3>{doc.label}</h3>
                <p>{doc.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="docs-cta">
          <Link href="#kontakt" className="btn-primary">
            <span>Beispiel ansehen</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
