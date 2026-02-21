import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import TeamSection from "@/components/TeamSection";
import { IS_SOLO, soloProfile } from "@/data/team";

export const metadata: Metadata = {
  title: IS_SOLO
    ? `${soloProfile.name} | ProMakler Digital`
    : "Unser Team | ProMakler Digital",
  description: IS_SOLO
    ? `${soloProfile.erfahrung}. Lernen Sie den Gründer von ProMakler Digital kennen.`
    : "Lernen Sie das Team hinter ProMakler Digital kennen. Experten für Makler-Websites und digitale Lösungen.",
  openGraph: {
    title: IS_SOLO
      ? `Über ${soloProfile.name} | ProMakler Digital`
      : "Unser Team | ProMakler Digital",
    description: IS_SOLO
      ? soloProfile.erfahrung
      : "Lernen Sie das Team hinter ProMakler Digital kennen.",
  },
};

export default function TeamPage() {
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
            Kontakt aufnehmen
          </Link>
        </div>
      </nav>

      {/* Hero */}
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
          <div style={{ maxWidth: "700px" }}>
            <span className="section-tag">{IS_SOLO ? "Über mich" : "Team"}</span>
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
              {IS_SOLO
                ? "Der Mensch hinter ProMakler"
                : "Lernen Sie unser Team kennen"}
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.8,
                color: "rgba(248, 246, 241, 0.75)",
              }}
            >
              {IS_SOLO
                ? "Ich verbinde Immobilienwissen mit technischer Expertise – für Websites, die Ihr Geschäft verstehen."
                : "Experten für digitale Lösungen in der Immobilienbranche."}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection compact={false} />

      {/* Values Section */}
      <section
        style={{
          padding: "5rem 0",
          background: "var(--cream-dark)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Werte</span>
            <h2>Wofür wir stehen</h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                padding: "2rem",
                background: "var(--white)",
                borderLeft: "3px solid var(--gold)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "var(--navy)",
                  marginBottom: "0.75rem",
                }}
              >
                Qualität vor Quantität
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--anthrazit)",
                  lineHeight: 1.7,
                }}
              >
                Lieber wenige Projekte exzellent umsetzen als viele
                mittelmäßig. Jede Website bekommt die Aufmerksamkeit, die sie
                verdient.
              </p>
            </div>
            <div
              style={{
                padding: "2rem",
                background: "var(--white)",
                borderLeft: "3px solid var(--gold)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "var(--navy)",
                  marginBottom: "0.75rem",
                }}
              >
                Ehrliche Kommunikation
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--anthrazit)",
                  lineHeight: 1.7,
                }}
              >
                Keine Agentur-Floskeln, keine leeren Versprechen. Wir sagen
                Ihnen, was funktioniert – und was nicht.
              </p>
            </div>
            <div
              style={{
                padding: "2rem",
                background: "var(--white)",
                borderLeft: "3px solid var(--gold)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.25rem",
                  color: "var(--navy)",
                  marginBottom: "0.75rem",
                }}
              >
                Langfristige Partnerschaft
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--anthrazit)",
                  lineHeight: 1.7,
                }}
              >
                Wir denken nicht in Projekten, sondern in Beziehungen. Ihr
                Erfolg ist unser Erfolg – auch nach dem Launch.
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
            Lassen Sie uns sprechen
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
            Ich freue mich darauf, Sie und Ihr Geschäft kennenzulernen.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/#kontakt" className="btn-primary">
              <span>Erstgespräch vereinbaren</span>
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
            <a href="mailto:kontakt@promakler.de" className="btn-secondary">
              <span>E-Mail schreiben</span>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
