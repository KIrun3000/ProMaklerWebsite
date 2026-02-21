import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="case-study-card">
      <div className="case-study-image">
        {/* Placeholder SVG - replace with next/image when real images available */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      </div>
      <div className="case-study-content">
        <span className="case-study-location">{caseStudy.location}</span>
        <h3 className="case-study-title">{caseStudy.kunde}</h3>
        <p className="case-study-excerpt">
          {caseStudy.ausgangssituation.substring(0, 120)}...
        </p>

        <div className="case-study-results">
          {caseStudy.ergebnisse.slice(0, 3).map((result, index) => (
            <div key={index} className="case-study-result">
              <span className="case-study-result-value">{result.value}</span>
              <span className="case-study-result-label">{result.label}</span>
            </div>
          ))}
        </div>

        <Link href={`/referenzen/${caseStudy.slug}`} className="case-study-cta">
          Case Study lesen
          <svg
            width="16"
            height="16"
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
    </div>
  );
}
