import Link from "next/link";

export default function NotFound() {
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

      <main
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            {/* Blueprint-style 404 illustration */}
            <svg
              width="280"
              height="160"
              viewBox="0 0 280 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: "0 auto 2rem", display: "block", opacity: 0.6 }}
              aria-hidden="true"
            >
              {/* Grid lines */}
              <line x1="0" y1="80" x2="280" y2="80" stroke="rgba(201,169,98,0.15)" strokeWidth="0.5" />
              <line x1="140" y1="0" x2="140" y2="160" stroke="rgba(201,169,98,0.15)" strokeWidth="0.5" />
              <line x1="0" y1="40" x2="280" y2="40" stroke="rgba(201,169,98,0.08)" strokeWidth="0.5" />
              <line x1="0" y1="120" x2="280" y2="120" stroke="rgba(201,169,98,0.08)" strokeWidth="0.5" />
              <line x1="70" y1="0" x2="70" y2="160" stroke="rgba(201,169,98,0.08)" strokeWidth="0.5" />
              <line x1="210" y1="0" x2="210" y2="160" stroke="rgba(201,169,98,0.08)" strokeWidth="0.5" />

              {/* "404" text as blueprint annotation */}
              <text x="140" y="90" textAnchor="middle" fontFamily="var(--font-display)" fontSize="64" fill="#c9a962" opacity="0.4">404</text>

              {/* Dimension lines */}
              <line x1="30" y1="130" x2="250" y2="130" stroke="rgba(201,169,98,0.3)" strokeWidth="0.75" strokeDasharray="4 2" />
              <line x1="30" y1="125" x2="30" y2="135" stroke="rgba(201,169,98,0.3)" strokeWidth="0.75" />
              <line x1="250" y1="125" x2="250" y2="135" stroke="rgba(201,169,98,0.3)" strokeWidth="0.75" />
              <text x="140" y="145" textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="rgba(201,169,98,0.35)">Seite nicht gefunden</text>
            </svg>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--cream)",
                marginBottom: "1rem",
                lineHeight: 1.2,
              }}
            >
              Diese Seite existiert{" "}
              <span style={{ color: "var(--gold)" }}>nicht</span>
            </h1>

            <p
              style={{
                color: "rgba(248, 246, 241, 0.7)",
                fontSize: "1.125rem",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
                maxWidth: "500px",
                margin: "0 auto 2.5rem",
              }}
            >
              Die angeforderte Seite konnte leider nicht gefunden werden.
              Vielleicht wurde sie verschoben oder der Link ist nicht mehr aktuell.
            </p>

            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/" className="btn-primary">
                <span>Zur Startseite</span>
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
              <Link href="/#kontakt" className="btn-secondary">
                <span>Kontakt aufnehmen</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
