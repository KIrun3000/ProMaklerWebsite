import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Referenzen | ProMakler Digital",
  description:
    "Unsere Kundenprojekte – Immobilienmakler, die mit ProMakler ihre digitale Präsenz transformiert haben.",
  robots: {
    index: false,
    follow: false,
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
            <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <rect x="8" y="8" width="28" height="28" stroke="#c9a962" strokeWidth="1" fill="none" />
              <line x1="22" y1="8" x2="22" y2="36" stroke="#c9a962" strokeWidth="0.75" />
              <line x1="8" y1="22" x2="36" y2="22" stroke="#c9a962" strokeWidth="0.75" />
              <rect x="14" y="14" width="16" height="16" fill="#c9a962" fillOpacity="0.2" />
            </svg>
          </div>
          <span className="logo-text">Pro<span>Makler</span></span>
        </Link>
        <Link href="/" className="nav-cta">Zurück zur Startseite</Link>
      </nav>

      <main style={{ paddingTop: "10rem", paddingBottom: "6rem", minHeight: "70vh" }}>
        <div className="container">
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
            <span className="section-tag">Referenzen</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 4vw, 3rem)", marginBottom: "1.5rem", color: "var(--cream)", lineHeight: 1.2 }}>
              Unsere Erfolgsgeschichten
            </h1>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "rgba(248, 246, 241, 0.7)", marginBottom: "3rem" }}>
              Wir dokumentieren gerade die ersten abgeschlossenen Projekte. 
              Sprechen Sie uns gerne direkt an – wir zeigen Ihnen Beispiele im persönlichen Gespräch.
            </p>
            <Link href="/#kontakt" className="btn-primary">
              <span>Beispiele im Gespräch ansehen</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
