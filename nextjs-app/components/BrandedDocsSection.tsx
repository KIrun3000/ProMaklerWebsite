import Link from "next/link";

interface DocConcept {
  label: string;
  description: string;
  pages: string[];       // normal (blau) variant
  pagesAgrar: string[];  // agrar (grün) variant
}

const CONCEPTS: DocConcept[] = [
  {
    label: "Premium-Deckblatt",
    description: "Ihr erster Eindruck – hochwertig und markenkonform",
    pages: [
      "/images/documents/konzept-c-p1.webp",
      "/images/documents/konzept-c-p2.webp",
      "/images/documents/konzept-c-p3.webp",
    ],
    pagesAgrar: [
      "/images/documents/konzept-c-agrar-p1.webp",
      "/images/documents/konzept-c-agrar-p2.webp",
      "/images/documents/konzept-c-agrar-p3.webp",
    ],
  },
  {
    label: "Detailliertes Angebot",
    description: "Transparente Kalkulation mit allen Leistungen",
    pages: [
      "/images/documents/konzept-b-p1.webp",
      "/images/documents/konzept-b-p2.webp",
    ],
    pagesAgrar: [
      "/images/documents/konzept-b-agrar-p1.webp",
      "/images/documents/konzept-b-agrar-p2.webp",
    ],
  },
  {
    label: "Projektkonzept",
    description: "Dreiseitiges Konzept – Strategie, Umfang, Timeline",
    pages: [
      "/images/documents/konzept-a-p1.webp",
      "/images/documents/konzept-a-p2.webp",
      "/images/documents/konzept-a-p3.webp",
    ],
    pagesAgrar: [
      "/images/documents/konzept-a-agrar-p1.webp",
      "/images/documents/konzept-a-agrar-p2.webp",
      "/images/documents/konzept-a-agrar-p3.webp",
    ],
  },
];

interface BrandedDocsSectionProps {
  variant?: "default" | "agrar";
}

export default function BrandedDocsSection({ variant = "default" }: BrandedDocsSectionProps) {
  const isAgrar = variant === "agrar";
  const headline = isAgrar
    ? "Branded Dokumente für Agrarmakler"
    : "Branded Dokumente in Ihrem Look";
  const subline = isAgrar
    ? "Angebot, Konzept, Deckblatt – automatisch in Ihrem Agrar-Branding"
    : "Angebot, Konzept, Deckblatt – automatisch aus Ihrem Branding";

  return (
    <section className="branded-docs-section section-dark" id="dokumente">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Design-System</span>
          <h2>{headline}</h2>
          <p className="section-intro">{subline}</p>
        </div>

        <div className="docs-fan-grid">
          {CONCEPTS.map((concept, i) => {
            const pages = isAgrar ? concept.pagesAgrar : concept.pages;
            return (
              <div key={i} className="doc-fan-card">
                <div className="doc-fan-stack" data-pages={pages.length}>
                  {/* Render pages in reverse so first page is on top */}
                  {[...pages].reverse().map((src, j) => {
                    const pageIndex = pages.length - 1 - j;
                    return (
                      <div
                        key={j}
                        className="doc-fan-page"
                        style={{
                          "--fan-index": pageIndex,
                          "--fan-total": pages.length,
                        } as React.CSSProperties}
                      >
                        <img
                          src={src}
                          alt={`${concept.label} – Seite ${pageIndex + 1}`}
                          loading="lazy"
                          width={400}
                          height={566}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="doc-fan-label">
                  <h3>{concept.label}</h3>
                  <p>{concept.description}</p>
                  <span className="doc-page-count">{pages.length} Seiten</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="docs-cta">
          <Link href="#kontakt" className="btn-primary">
            <span>Beispiel anfordern</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
