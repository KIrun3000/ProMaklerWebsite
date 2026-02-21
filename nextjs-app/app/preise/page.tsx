import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import PricingSection from "@/components/PricingSection";

export const metadata: Metadata = {
  title: "Preise & Pakete | ProMakler Digital",
  description:
    "Transparente Preise für Makler-Websites. Von One-Page bis Premium-Lösung mit CRM-Integration. Finden Sie das passende Paket.",
  openGraph: {
    title: "Preise & Pakete | ProMakler Digital",
    description:
      "Transparente Preise für Makler-Websites. Von One-Page bis Premium-Lösung mit CRM-Integration.",
  },
};

export default function PreisePage() {
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
            Kostenlos beraten
          </Link>
        </div>
      </nav>

      {/* Hero Section for Preise */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "2rem",
          background:
            "linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "700px", textAlign: "center", margin: "0 auto" }}>
            <span className="section-tag">Preise</span>
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
              Transparente Preise, faire Konditionen
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.8,
                color: "rgba(248, 246, 241, 0.75)",
              }}
            >
              Alle Preise sind Einmalzahlungen. Keine versteckten Kosten, keine
              langfristigen Verträge. Sie zahlen nur, was Sie brauchen.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection showFAQ={true} compact={false} />

      {/* Additional Info */}
      <section
        style={{
          padding: "4rem 0",
          background: "var(--navy-dark)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                padding: "2rem",
                background: "rgba(248, 246, 241, 0.03)",
                border: "1px solid rgba(248, 246, 241, 0.1)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                }}
              >
                Keine Folgekosten
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(248, 246, 241, 0.7)",
                  lineHeight: 1.7,
                }}
              >
                Die Website gehört Ihnen. Wir übergeben Ihnen alle Zugangsdaten.
                Hosting kostet ca. 10-30 €/Monat – unabhängig von uns.
              </p>
            </div>
            <div
              style={{
                padding: "2rem",
                background: "rgba(248, 246, 241, 0.03)",
                border: "1px solid rgba(248, 246, 241, 0.1)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                }}
              >
                Zufriedenheitsgarantie
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(248, 246, 241, 0.7)",
                  lineHeight: 1.7,
                }}
              >
                Sie sehen den Entwurf, bevor Sie bezahlen. Gefällt er Ihnen
                nicht? Dann zahlen Sie nichts. So einfach ist das.
              </p>
            </div>
            <div
              style={{
                padding: "2rem",
                background: "rgba(248, 246, 241, 0.03)",
                border: "1px solid rgba(248, 246, 241, 0.1)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                }}
              >
                Flexible Zahlung
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "rgba(248, 246, 241, 0.7)",
                  lineHeight: 1.7,
                }}
              >
                50% bei Projektstart, 50% nach Go-Live. Auf Wunsch auch
                Ratenzahlung möglich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Nicht sicher, welches Paket passt?
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
            In einem kostenlosen 15-Minuten-Gespräch finden wir gemeinsam
            heraus, was Sie wirklich brauchen.
          </p>
          <Link href="/#kontakt" className="btn-primary">
            <span>Kostenloses Beratungsgespräch</span>
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
