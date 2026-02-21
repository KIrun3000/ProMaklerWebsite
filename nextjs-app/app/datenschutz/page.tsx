import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | ProMakler Digital",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO",
  robots: {
    index: true,
    follow: true,
  },
};

export default function Datenschutz() {
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

        <Link href="/" className="nav-cta">
          Zurück zur Startseite
        </Link>
      </nav>

      {/* Content */}
      <main
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
          minHeight: "60vh",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              background: "var(--navy)",
              padding: "3rem",
              border: "1px solid rgba(201, 169, 98, 0.3)",
            }}
          >
            <span className="section-tag">Rechtliches</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                marginBottom: "2rem",
                color: "var(--cream)",
              }}
            >
              Datenschutzerklärung
            </h1>

            {/* PLACEHOLDER NOTICE */}
            <div
              style={{
                background: "rgba(201, 169, 98, 0.15)",
                border: "2px dashed var(--gold)",
                padding: "1.5rem",
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  color: "var(--gold)",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                PLATZHALTER – IN VORBEREITUNG
              </p>
              <p
                style={{
                  color: "rgba(248, 246, 241, 0.7)",
                  fontSize: "0.9rem",
                  marginTop: "0.5rem",
                  marginBottom: 0,
                }}
              >
                Die finalen Rechtstexte werden in Kürze ergänzt.
              </p>
            </div>

            <div
              style={{
                color: "rgba(248, 246, 241, 0.8)",
                lineHeight: 1.8,
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "var(--cream)",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                }}
              >
                1. Verantwortlicher
              </h2>
              <p>
                ING Bleek GmbH
                <br />
                Rosa-Luxemburg-Straße 17
                <br />
                10178 Berlin
                <br />
                Telefon: +49 176 729 539 96
                <br />
                E-Mail: kontakt@promakler.de
              </p>

              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "var(--cream)",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                }}
              >
                2. Erhebung und Speicherung personenbezogener Daten
              </h2>
              <p>
                Beim Besuch unserer Website werden automatisch Informationen
                allgemeiner Natur erfasst. Diese Daten werden in den Server-Log
                Files gespeichert.
              </p>

              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "var(--cream)",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                }}
              >
                3. Ihre Rechte
              </h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung, Datenübertragbarkeit und
                Widerspruch gemäß Art. 15-21 DSGVO.
              </p>

              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "var(--cream)",
                  marginTop: "2rem",
                  marginBottom: "1rem",
                }}
              >
                4. Hosting
              </h2>
              <p>
                Diese Website wird bei Vercel Inc. gehostet. Weitere
                Informationen finden Sie in der Datenschutzerklärung von Vercel.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
