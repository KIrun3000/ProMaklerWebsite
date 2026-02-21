import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import CaseStudies from "@/components/CaseStudies";

export const metadata: Metadata = {
  title: "Referenzen & Case Studies | ProMakler Digital",
  description:
    "Erfolgsgeschichten unserer Kunden. Sehen Sie, wie wir Immobilienmaklern zu mehr Anfragen und besserer Online-Präsenz verhelfen.",
  openGraph: {
    title: "Referenzen & Case Studies | ProMakler Digital",
    description:
      "Erfolgsgeschichten unserer Kunden. Sehen Sie, wie wir Immobilienmaklern zu mehr Anfragen und besserer Online-Präsenz verhelfen.",
  },
};

export default function ReferenzenPage() {
  return (
    <>
      <div className="blueprint-bg"></div>

      {/* Navigation */}
      <nav className="nav scrolled" id="nav">
        <Link href="/" className="logo">
          <div className="logo-icon">
            <svg
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="40"
                height="40"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <rect
                x="8"
                y="8"
                width="28"
                height="28"
                stroke="#c9a962"
                strokeWidth="1"
                fill="none"
              />
              <line
                x1="22"
                y1="8"
                x2="22"
                y2="36"
                stroke="#c9a962"
                strokeWidth="0.75"
              />
              <line
                x1="8"
                y1="22"
                x2="36"
                y2="22"
                stroke="#c9a962"
                strokeWidth="0.75"
              />
              <rect
                x="14"
                y="14"
                width="16"
                height="16"
                fill="#c9a962"
                fillOpacity="0.2"
              />
            </svg>
          </div>
          <span className="logo-text">
            Pro<span>Makler</span>
          </span>
        </Link>

        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <Link
            href="/"
            style={{
              color: "var(--cream)",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            Startseite
          </Link>
          <Link href="/#kontakt" className="nav-cta">
            Projekt anfragen
          </Link>
        </div>
      </nav>

      {/* Hero Section for Referenzen */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "4rem",
          background:
            "linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "700px" }}>
            <span className="section-tag">Referenzen</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: 600,
                lineHeight: 1.15,
                marginBottom: "1.5rem",
                color: "var(--cream)",
              }}
            >
              Unsere Erfolgsgeschichten
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.8,
                color: "rgba(248, 246, 241, 0.75)",
              }}
            >
              Sehen Sie, wie wir Immobilienmaklern dabei helfen, ihre digitale
              Präsenz zu transformieren und messbare Ergebnisse zu erzielen.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <CaseStudies showHeader={false} showCTA={false} />

      {/* CTA Section */}
      <section
        style={{
          padding: "5rem 0",
          background: "var(--navy)",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "2rem",
              color: "var(--cream)",
              marginBottom: "1rem",
            }}
          >
            Bereit für Ihre Erfolgsgeschichte?
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(248, 246, 241, 0.7)",
              marginBottom: "2rem",
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Lassen Sie uns gemeinsam Ihr Projekt besprechen – kostenlos und
            unverbindlich.
          </p>
          <Link href="/#kontakt" className="btn-primary">
            <span>Kostenloses Erstgespräch</span>
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
      </section>

      <SiteFooter />
    </>
  );
}
