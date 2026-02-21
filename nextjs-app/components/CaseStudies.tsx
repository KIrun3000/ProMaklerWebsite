import { caseStudies } from "@/data/caseStudies";
import { IS_PLACEHOLDER_CONTENT } from "@/data/testimonials";
import CaseStudyCard from "./CaseStudyCard";
import Link from "next/link";

interface CaseStudiesProps {
  limit?: number;
  showHeader?: boolean;
  showCTA?: boolean;
}

export default function CaseStudies({
  limit,
  showHeader = true,
  showCTA = true,
}: CaseStudiesProps) {
  const displayedStudies = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section className="case-studies-section section-light" id="referenzen">
      <div className="container">
        {showHeader && (
          <div className="section-header">
            <span className="section-tag">Erfolgsgeschichten</span>
            <h2>Was wir für unsere Kunden erreicht haben</h2>
            <p className="section-intro">
              Konkrete Ergebnisse statt leerer Versprechen. Sehen Sie, wie wir
              Maklern dabei helfen, digital erfolgreicher zu werden.
            </p>
            {IS_PLACEHOLDER_CONTENT && (
              <p className="placeholder-disclaimer">
                * Beispielhafte Darstellung – echte Case Studies folgen in Kürze
              </p>
            )}
          </div>
        )}

        <div className="case-studies-grid">
          {displayedStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>

        {showCTA && limit && caseStudies.length > limit && (
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/referenzen" className="btn-primary">
              <span>Alle Referenzen ansehen</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
