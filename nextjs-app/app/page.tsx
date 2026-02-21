import ClientBehaviors from "@/components/ClientBehaviors";
import SiteFooter from "@/components/SiteFooter";
import TrustBadges from "@/components/TrustBadges";
import CaseStudies from "@/components/CaseStudies";
import PricingSection from "@/components/PricingSection";
import TeamSection from "@/components/TeamSection";
import HeroAudit from "@/components/HeroAudit";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <ClientBehaviors />
      <div className="blueprint-bg"></div>

      {/* Navigation */}
      <nav className="nav" id="nav">
        <Link href="#" className="logo">
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

        <ul className="nav-links">
          <li>
            <a href="#problem">Analyse</a>
          </li>
          <li>
            <a href="#angebot">Leistungen</a>
          </li>
          <li>
            <a href="#roi">Rendite</a>
          </li>
          <li>
            <a href="#about">Über uns</a>
          </li>
          <li>
            <a href="#prozess">Prozess</a>
          </li>
        </ul>

        <a href="#kontakt" className="nav-cta">
          Exposé anfordern
        </a>

        <button className="nav-toggle" aria-label="Menü öffnen">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-blueprint">
          <div className="blueprint-drawing">
            <svg
              viewBox="0 0 400 350"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main Building Outline */}
              <rect
                x="50"
                y="80"
                width="300"
                height="220"
                stroke="white"
                strokeWidth="1"
                fill="none"
                strokeDasharray="4 2"
              />

              {/* Rooms */}
              <rect
                x="50"
                y="80"
                width="150"
                height="110"
                stroke="white"
                strokeWidth="0.75"
                fill="none"
              />
              <rect
                x="200"
                y="80"
                width="150"
                height="110"
                stroke="white"
                strokeWidth="0.75"
                fill="none"
              />
              <rect
                x="50"
                y="190"
                width="100"
                height="110"
                stroke="white"
                strokeWidth="0.75"
                fill="none"
              />
              <rect
                x="150"
                y="190"
                width="100"
                height="110"
                stroke="white"
                strokeWidth="0.75"
                fill="none"
              />
              <rect
                x="250"
                y="190"
                width="100"
                height="110"
                stroke="white"
                strokeWidth="0.75"
                fill="none"
              />

              {/* Doors */}
              <path
                d="M120 190 L120 210 A20 20 0 0 1 140 190"
                stroke="#c9a962"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M220 190 L220 210 A20 20 0 0 0 200 190"
                stroke="#c9a962"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M300 190 L300 210 A20 20 0 0 1 320 190"
                stroke="#c9a962"
                strokeWidth="1"
                fill="none"
              />

              {/* Windows */}
              <line
                x1="75"
                y1="80"
                x2="75"
                y2="65"
                stroke="#c9a962"
                strokeWidth="1"
              />
              <line
                x1="65"
                y1="65"
                x2="85"
                y2="65"
                stroke="#c9a962"
                strokeWidth="1"
              />
              <line
                x1="175"
                y1="80"
                x2="175"
                y2="65"
                stroke="#c9a962"
                strokeWidth="1"
              />
              <line
                x1="165"
                y1="65"
                x2="185"
                y2="65"
                stroke="#c9a962"
                strokeWidth="1"
              />
              <line
                x1="275"
                y1="80"
                x2="275"
                y2="65"
                stroke="#c9a962"
                strokeWidth="1"
              />
              <line
                x1="265"
                y1="65"
                x2="285"
                y2="65"
                stroke="#c9a962"
                strokeWidth="1"
              />

              {/* Dimension Lines */}
              <line
                x1="50"
                y1="320"
                x2="350"
                y2="320"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.5"
              />
              <line
                x1="50"
                y1="315"
                x2="50"
                y2="325"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.5"
              />
              <line
                x1="350"
                y1="315"
                x2="350"
                y2="325"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.5"
              />
              <text
                x="200"
                y="335"
                fill="rgba(255,255,255,0.5)"
                fontSize="10"
                textAnchor="middle"
                fontFamily="var(--font-dm-sans)"
              >
                12.500 mm
              </text>

              <line
                x1="30"
                y1="80"
                x2="30"
                y2="300"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.5"
              />
              <line
                x1="25"
                y1="80"
                x2="35"
                y2="80"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.5"
              />
              <line
                x1="25"
                y1="300"
                x2="35"
                y2="300"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="0.5"
              />

              {/* Labels */}
              <text
                x="125"
                y="140"
                fill="rgba(255,255,255,0.6)"
                fontSize="9"
                textAnchor="middle"
                fontFamily="var(--font-dm-sans)"
              >
                HERO
              </text>
              <text
                x="275"
                y="140"
                fill="rgba(255,255,255,0.6)"
                fontSize="9"
                textAnchor="middle"
                fontFamily="var(--font-dm-sans)"
              >
                ABOUT
              </text>
              <text
                x="100"
                y="250"
                fill="rgba(255,255,255,0.6)"
                fontSize="9"
                textAnchor="middle"
                fontFamily="var(--font-dm-sans)"
              >
                CTA
              </text>
              <text
                x="200"
                y="250"
                fill="rgba(255,255,255,0.6)"
                fontSize="9"
                textAnchor="middle"
                fontFamily="var(--font-dm-sans)"
              >
                SERVICES
              </text>
              <text
                x="300"
                y="250"
                fill="rgba(255,255,255,0.6)"
                fontSize="9"
                textAnchor="middle"
                fontFamily="var(--font-dm-sans)"
              >
                ROI
              </text>

              {/* Corner Markers */}
              <circle cx="50" cy="80" r="3" fill="#c9a962" />
              <circle cx="350" cy="80" r="3" fill="#c9a962" />
              <circle cx="50" cy="300" r="3" fill="#c9a962" />
              <circle cx="350" cy="300" r="3" fill="#c9a962" />

              {/* Title Block */}
              <rect
                x="250"
                y="10"
                width="140"
                height="50"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="0.5"
                fill="rgba(30,58,95,0.8)"
              />
              <text
                x="320"
                y="30"
                fill="white"
                fontSize="8"
                textAnchor="middle"
                fontFamily="var(--font-dm-sans)"
                fontWeight="600"
              >
                DIGITALER GRUNDRISS
              </text>
              <text
                x="320"
                y="45"
                fill="#c9a962"
                fontSize="7"
                textAnchor="middle"
                fontFamily="var(--font-dm-sans)"
              >
                PROMAKLER WEBSITE v2.0
              </text>
            </svg>
          </div>
          <span className="blueprint-label top-left">PLANUNG</span>
          <span className="blueprint-label bottom-right">M 1:100</span>
        </div>

        <div className="hero-content">
          <span className="hero-tag">Projektentwicklung für Makler</span>
          <h1>
            Wir entwickeln Ihre{" "}
            <span className="highlight">digitale Rendite-Immobilie.</span>
            <br />
            Egal ob sanierter Altbau oder Neubau-Erstbezug.
          </h1>
          <p className="hero-subtitle">
            Die meisten Makler-Websites sind wie unsanierte Bestandsbauten: Hohe
            Betriebskosten, schlechte Energiebilanz und Grundrisse, die nicht
            mehr funktionieren. Wir agieren wie Projektentwickler: Wir prüfen
            die Substanz, übernehmen den &bdquo;Umzug&ldquo; Ihrer Inhalte und übergeben
            Ihnen den Schlüssel zu einer Top-Lage bei Google.
          </p>

          <div className="hero-cta-group">
            <a href="#kontakt" className="btn-primary">
              <span>Kostenloses Exposé anfordern</span>
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
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#angebot" className="btn-secondary">
              <span>Leistungen entdecken</span>
            </a>
          </div>

          <div className="hero-trust">
            <div className="trust-badge">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Bezugsfertig in 14 Tagen</span>
            </div>
            <div className="trust-badge">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>100% onOffice &amp; FlowFact kompatibel</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges - Social Proof directly under Hero */}
      <TrustBadges />

      {/* Hero Audit - Alternative CTA with URL input */}
      <HeroAudit />

      {/* Problem Section */}
      <section className="problem-section section-light" id="problem">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Bausubstanz-Analyse</span>
            <h2>
              Warum digitale &bdquo;Bruchbuden&ldquo; Sie den Alleinauftrag kosten
            </h2>
            <p className="section-intro">
              Viele Makler verlieren Mandate nicht im persönlichen Gespräch,
              sondern davor. Eigentümer prüfen Sie online. Wenn Ihre digitale
              Fassade bröckelt, rufen sie gar nicht erst an.
            </p>
          </div>

          <div className="problem-grid">
            {/* Row 1 */}
            <div className="problem-row fade-in">
              <div className="problem-card">
                <div className="card-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <span className="card-label">Das Problem</span>
                <h3 className="card-title">&bdquo;Mobile Sackgasse&ldquo;</h3>
                <p className="card-description">
                  Interessenten müssen auf dem Smartphone zoomen. Navigation ist
                  unklar. Der Lead springt ab.
                </p>
              </div>

              <div className="arrow-connector">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="4"
                    y1="16"
                    x2="24"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="18 10 24 16 18 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                    <line x1="6" y1="1" x2="6" y2="4"></line>
                    <line x1="10" y1="1" x2="10" y2="4"></line>
                    <line x1="14" y1="1" x2="14" y2="4"></line>
                  </svg>
                </div>
                <span className="card-label">Unsere Lösung</span>
                <h3 className="card-title">&bdquo;Barrierefreier Zugang&ldquo;</h3>
                <p className="card-description">
                  Mobile First Architektur. Daumenfreundliche Navigation und
                  Ladezeiten unter 0,8 Sekunden (Energieeffizienz A+).
                </p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="problem-row fade-in">
              <div className="problem-card">
                <div className="card-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <span className="card-label">Das Problem</span>
                <h3 className="card-title">&bdquo;Insel-Lösung&ldquo;</h3>
                <p className="card-description">
                  Website und Software (onOffice) sind getrennt. Sie tippen
                  Daten händisch ab. Zeitverschwendung.
                </p>
              </div>

              <div className="arrow-connector">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="4"
                    y1="16"
                    x2="24"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="18 10 24 16 18 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
                <span className="card-label">Unsere Lösung</span>
                <h3 className="card-title">&bdquo;Der Wanddurchbruch&ldquo;</h3>
                <p className="card-description">
                  Wir verbinden Website &amp; CRM via API. Leads fließen
                  automatisch in Ihre Software. Kein Abtippen, kein
                  Datenverlust.
                </p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="problem-row fade-in">
              <div className="problem-card">
                <div className="card-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <span className="card-label">Das Problem</span>
                <h3 className="card-title">&bdquo;Design-Ruine&ldquo;</h3>
                <p className="card-description">
                  Veraltete Optik signalisiert Stillstand. Eigentümer fragen
                  sich: &bdquo;Kann der mein Haus modern vermarkten?&ldquo;
                </p>
              </div>

              <div className="arrow-connector">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="4"
                    y1="16"
                    x2="24"
                    y2="16"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="18 10 24 16 18 22"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="solution-card">
                <div className="card-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <span className="card-label">Unsere Lösung</span>
                <h3 className="card-title">&bdquo;Penthouse-Standard&ldquo;</h3>
                <p className="card-description">
                  Hochwertiges Design, das Kompetenz ausstrahlt.
                  Vertrauensbildende Elemente (Siegel, Bewertungen) an der
                  richtigen Stelle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Angebot Section */}
      <section className="angebot-section section-dark" id="angebot">
        <div className="container">
          <div className="angebot-intro">
            <span className="section-tag">Das Digitale Mehrfamilienhaus</span>
            <h2>
              Kaufen Sie nicht das ganze Haus, wenn Sie nur eine Wohnung
              brauchen.
            </h2>
            <p className="section-intro">
              Andere Agenturen verkaufen Ihnen starre Einfamilienhäuser. Wir
              setzen auf das Prinzip Wohnungseigentum (WEG). Unsere Plattform
              ist modular.
            </p>
          </div>

          <div className="angebot-visual">
            <div className="building-illustration">
              <svg
                className="building-svg"
                viewBox="0 0 240 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Building Base */}
                <rect
                  x="20"
                  y="50"
                  width="200"
                  height="330"
                  stroke="#c9a962"
                  strokeWidth="1"
                  fill="none"
                />

                {/* Floors */}
                <line
                  x1="20"
                  y1="130"
                  x2="220"
                  y2="130"
                  stroke="#c9a962"
                  strokeWidth="0.5"
                  strokeDasharray="4 2"
                />
                <line
                  x1="20"
                  y1="210"
                  x2="220"
                  y2="210"
                  stroke="#c9a962"
                  strokeWidth="0.5"
                  strokeDasharray="4 2"
                />
                <line
                  x1="20"
                  y1="290"
                  x2="220"
                  y2="290"
                  stroke="#c9a962"
                  strokeWidth="0.5"
                  strokeDasharray="4 2"
                />

                {/* Windows Floor 1 (Add-ons) */}
                <rect
                  x="40"
                  y="70"
                  width="35"
                  height="40"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="0.75"
                  fill="rgba(201,169,98,0.1)"
                />
                <rect
                  x="102"
                  y="70"
                  width="35"
                  height="40"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="0.75"
                  fill="rgba(201,169,98,0.1)"
                />
                <rect
                  x="165"
                  y="70"
                  width="35"
                  height="40"
                  stroke="rgba(255,255,255,0.5)"
                  strokeWidth="0.75"
                  fill="rgba(201,169,98,0.1)"
                />

                {/* Windows Floor 2 */}
                <rect
                  x="40"
                  y="150"
                  width="35"
                  height="40"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.75"
                  fill="none"
                />
                <rect
                  x="102"
                  y="150"
                  width="35"
                  height="40"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.75"
                  fill="none"
                />
                <rect
                  x="165"
                  y="150"
                  width="35"
                  height="40"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.75"
                  fill="none"
                />

                {/* Windows Floor 3 */}
                <rect
                  x="40"
                  y="230"
                  width="35"
                  height="40"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.75"
                  fill="none"
                />
                <rect
                  x="102"
                  y="230"
                  width="35"
                  height="40"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.75"
                  fill="none"
                />
                <rect
                  x="165"
                  y="230"
                  width="35"
                  height="40"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="0.75"
                  fill="none"
                />

                {/* Base/Foundation (highlighted) */}
                <rect
                  x="20"
                  y="290"
                  width="200"
                  height="90"
                  stroke="#c9a962"
                  strokeWidth="2"
                  fill="rgba(201,169,98,0.08)"
                />
                <rect
                  x="90"
                  y="320"
                  width="60"
                  height="60"
                  stroke="#c9a962"
                  strokeWidth="1"
                  fill="none"
                />
                <line
                  x1="120"
                  y1="320"
                  x2="120"
                  y2="380"
                  stroke="#c9a962"
                  strokeWidth="0.5"
                />

                {/* Roof */}
                <polygon
                  points="120,15 20,50 220,50"
                  stroke="#c9a962"
                  strokeWidth="1"
                  fill="none"
                />

                {/* Labels */}
                <text
                  x="120"
                  y="100"
                  fill="#c9a962"
                  fontSize="8"
                  textAnchor="middle"
                  fontFamily="var(--font-dm-sans)"
                >
                  ADD-ONS
                </text>
                <text
                  x="120"
                  y="340"
                  fill="#c9a962"
                  fontSize="8"
                  textAnchor="middle"
                  fontFamily="var(--font-dm-sans)"
                >
                  BASIS
                </text>
              </svg>
            </div>

            <div className="modules-container">
              <div className="module-base fade-in">
                <h3>Die Basis-Website</h3>
                <p>
                  Das Fundament. Stabil, sicher, SEO-optimiert. Hier wohnen Ihre
                  &bdquo;Möbel&ldquo; (Ihre Marke &amp; Inhalte), die wir bereits für Sie
                  umgezogen haben.
                </p>
                <div className="base-features">
                  <div className="base-feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Responsive Design</span>
                  </div>
                  <div className="base-feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>SEO-Grundoptimierung</span>
                  </div>
                  <div className="base-feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>SSL-Verschlüsselung</span>
                  </div>
                  <div className="base-feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>CRM-Anbindung</span>
                  </div>
                  <div className="base-feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Immobilien-Export</span>
                  </div>
                  <div className="base-feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>DSGVO-konform</span>
                  </div>
                </div>
              </div>

              <div className="modules-addons fade-in">
                <h4>Das Sondereigentum (Add-ons)</h4>
                <div className="addon-cards">
                  <div className="addon-card">
                    <span className="addon-number">01</span>
                    <h5>Das Bewertungs-Tool</h5>
                    <p>
                      Eigentümer-Akquise auf Autopilot. Generieren Sie
                      qualifizierte Leads durch kostenlose Immobilienbewertungen.
                    </p>
                  </div>
                  <div className="addon-card">
                    <span className="addon-number">02</span>
                    <h5>Der Recruiting-Funnel</h5>
                    <p>
                      Mitarbeiter-Gewinnung systematisiert. Präsentieren Sie Ihre
                      Karriereseite wie ein A-Objekt.
                    </p>
                  </div>
                  <div className="addon-card">
                    <span className="addon-number">03</span>
                    <h5>Das Off-Market-Login</h5>
                    <p>
                      Diskret-Vermarktung für Premium-Kunden. Exklusive Objekte
                      für registrierte Käufer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="angebot-benefit fade-in">
                <p>
                  <strong>Ihr Vorteil:</strong> Maximale Flexibilität bei voller
                  Kostenkontrolle. Keine Leerstands-Kosten für Tools, die Sie
                  nicht nutzen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="roi-section section-light" id="roi">
        <div className="container">
          <div className="roi-content">
            <div className="roi-text fade-in">
              <span className="section-tag">Der Ertragswert</span>
              <h2>Die Rendite-Rechnung für &bdquo;Thomas&ldquo;</h2>
              <p className="section-intro">
                &bdquo;Was kostet mich das?&ldquo; ist die falsche Frage. Die richtige Frage
                eines Kaufmanns lautet: &bdquo;Wann ist der ROI erreicht?&ldquo;
              </p>

              <div className="roi-bonus">
                <p>
                  Dazu kommt die <strong>Zeitersparnis</strong>: Unsere
                  Schnittstellen-Automatisierung spart Ihnen ca.{" "}
                  <strong>4 Stunden Admin-Arbeit pro Monat</strong>. Bei Ihrem
                  Stundensatz ist die Website damit quasi &bdquo;mietfrei&ldquo;.
                </p>
              </div>
            </div>

            <div className="roi-calculator fade-in">
              <div className="calc-header">Beispielrechnung (Markt 2026)</div>

              <div className="calc-row">
                <span className="calc-label">Verkauf Einfamilienhaus</span>
                <span className="calc-value">420.000 €</span>
              </div>

              <div className="calc-row">
                <span className="calc-label">Ihre Courtage (3,57%)</span>
                <span className="calc-value">~15.000 €</span>
              </div>

              <div className="calc-row">
              <span className="calc-label">Kompletter Relaunch</span>
              <span className="calc-value">&lt; &frac12; Courtage</span>
              </div>

              <div className="calc-highlight">
                <div
                  className="calc-row"
                  style={{ border: "none", paddingBottom: 0 }}
                >
                  <span className="calc-label">Eigenkapitalrendite</span>
                  <span className="calc-value">&gt; 200%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section-dark" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image fade-in">
              <div className="about-image-frame">
                <div className="about-image-inner">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </div>
                <span className="about-credentials">
                  Immobilien­projekt­entwicklung M.Sc.
                </span>
              </div>
            </div>

            <div className="about-text fade-in">
              <span className="section-tag">Der Developer-Pitch</span>
              <h2>
                Warum Ihr Webdesigner den Unterschied zwischen{" "}
                <span className="highlight">&bdquo;Teilungserklärung&ldquo;</span> und
                &bdquo;Trennwand&ldquo; kennen sollte.
              </h2>

              <blockquote className="about-quote">
                &bdquo;Ich bin kein klassischer Werber. Ich habe
                Immobilienprojektentwicklung studiert. Wenn Sie von
                &apos;Farming&apos;, &apos;Off-Market&apos; oder
                &apos;Sondereigentum&apos; sprechen, muss ich nicht googeln.&ldquo;
              </blockquote>

              <p className="about-body">
                Ich stamme aus einer Familie von Architekten und Entwicklern. Ich
                bin mit Bebauungsplänen und Baustellen aufgewachsen. Ich verstehe
                Ihr Geschäft, weil es meine DNA ist. Ich übertrage die Prinzipien
                der Projektentwicklung auf das Webdesign.
              </p>

              <div className="about-principles">
                <div className="principle">
                  <h4>Solide Bausubstanz</h4>
                  <p>Sauberer Code statt billiger Baukästen.</p>
                </div>
                <div className="principle">
                  <h4>Lage, Lage, Lage</h4>
                  <p>Maximale Sichtbarkeit bei Google.</p>
                </div>
                <div className="principle">
                  <h4>Nachhaltigkeit</h4>
                  <p>Systeme, die mit Ihrem Büro wachsen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phygital Section */}
      <section className="phygital-section section-light">
        <div className="container">
          <div className="phygital-content">
            <div className="phygital-text fade-in">
              <span className="section-tag">Der Hybrid-Brief</span>
              <h2>Wir holen Ihre Kunden vom Briefkasten ins Internet.</h2>
              <p>
                In einer Welt voller E-Mails ist Papier der neue Luxus. Wir
                integrieren auf Wunsch automatisierte Print-Schnittstellen.
              </p>

              <div className="phygital-flow">
                <div className="flow-step">
                  <span className="flow-step-number">1</span>
                  <p>
                    Ein Eigentümer bewertet seine Immobilie auf Ihrer Website
                  </p>
                </div>
                <div className="flow-step">
                  <span className="flow-step-number">2</span>
                  <p>
                    Unser System sendet ihm automatisch 24h später einen
                    hochwertigen, gedruckten Brief
                  </p>
                </div>
                <div className="flow-step">
                  <span className="flow-step-number">3</span>
                  <p>
                    Sie landen physisch auf dem Küchentisch, während die
                    Konkurrenz im Spam-Ordner landet
                  </p>
                </div>
              </div>
            </div>

            <div className="phygital-visual fade-in">
              <svg
                className="envelope-illustration"
                viewBox="0 0 300 250"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Envelope Back */}
                <rect
                  x="30"
                  y="80"
                  width="240"
                  height="150"
                  fill="#f8f6f1"
                  stroke="#1a2744"
                  strokeWidth="1.5"
                />

                {/* Envelope Flap */}
                <polygon
                  points="30,80 150,160 270,80"
                  fill="#e8e4db"
                  stroke="#1a2744"
                  strokeWidth="1.5"
                />

                {/* Letter */}
                <rect
                  x="60"
                  y="50"
                  width="180"
                  height="120"
                  fill="white"
                  stroke="#c9a962"
                  strokeWidth="1"
                />

                {/* Letter Content Lines */}
                <line
                  x1="80"
                  y1="80"
                  x2="220"
                  y2="80"
                  stroke="#1a2744"
                  strokeWidth="0.75"
                  opacity="0.3"
                />
                <line
                  x1="80"
                  y1="95"
                  x2="200"
                  y2="95"
                  stroke="#1a2744"
                  strokeWidth="0.75"
                  opacity="0.3"
                />
                <line
                  x1="80"
                  y1="110"
                  x2="180"
                  y2="110"
                  stroke="#1a2744"
                  strokeWidth="0.75"
                  opacity="0.3"
                />
                <line
                  x1="80"
                  y1="125"
                  x2="160"
                  y2="125"
                  stroke="#1a2744"
                  strokeWidth="0.75"
                  opacity="0.3"
                />

                {/* Gold Seal */}
                <circle cx="200" cy="140" r="18" fill="#c9a962" />
                <circle
                  cx="200"
                  cy="140"
                  r="12"
                  fill="none"
                  stroke="#1a2744"
                  strokeWidth="0.5"
                />
                <text
                  x="200"
                  y="144"
                  fill="#1a2744"
                  fontSize="8"
                  textAnchor="middle"
                  fontFamily="var(--font-cormorant)"
                  fontWeight="600"
                >
                  PM
                </text>

                {/* Decorative Elements */}
                <circle cx="45" cy="215" r="3" fill="#c9a962" opacity="0.5" />
                <circle cx="255" cy="215" r="3" fill="#c9a962" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Teaser */}
      <CaseStudies limit={2} showHeader={true} showCTA={true} />

      {/* Pricing Section Teaser */}
      <PricingSection showFAQ={false} compact={true} />

      {/* Team Section Teaser */}
      <TeamSection compact={true} />

      {/* Process Section */}
      <section className="process-section section-dark" id="prozess">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Die Schlüsselübergabe</span>
            <h2>Vom Audit bis zum Go-Live</h2>
            <p className="section-intro">
              Unser Prozess folgt den bewährten Phasen der Projektentwicklung –
              nur deutlich schneller.
            </p>
          </div>

          <div className="process-steps">
            <div className="process-step fade-in">
              <span className="step-number">01</span>
              <h3 className="step-title">Die Bauvoranfrage</h3>
              <span className="step-subtitle">Audit</span>
              <p className="step-description">
                Wir prüfen Ihren Status Quo: Technik, Design, SEO, Schnittstellen.
                Sie erhalten eine ehrliche Bestandsaufnahme – kostenlos und
                unverbindlich.
              </p>
            </div>

            <div className="process-step fade-in">
              <span className="step-number">02</span>
              <h3 className="step-title">Der Entwurf</h3>
              <span className="step-subtitle">Risiko-Frei</span>
              <p className="step-description">
                Wir bauen Ihre Startseite basierend auf Ihren echten Daten vor.
                Sie sehen das fertige &bdquo;Haus&ldquo;, bevor Sie den Kaufvertrag
                unterschreiben.
              </p>
            </div>

            <div className="process-step fade-in">
              <span className="step-number">03</span>
              <h3 className="step-title">Der Notartermin</h3>
              <span className="step-subtitle">Go-Live</span>
              <p className="step-description">
                Gefällt Ihnen der Entwurf? Wir ziehen Ihre Inhalte um, richten die
                Weiterleitungen ein (Erhalt der SEO-Link-Power) und übergeben die
                Schlüssel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="cta-section" id="kontakt">
        <div className="container">
          <div className="cta-content fade-in">
            <span className="section-tag">Jetzt starten</span>
            <h2>Ist Ihre Website ein Sanierungsfall?</h2>
            <p>
              Fordern Sie jetzt Ihren kostenlosen Entwurf an. Wir kümmern uns um
              den Umzug – Sie behalten den Fokus auf Ihre Kunden.
            </p>

            <div className="cta-buttons">
              <a href="mailto:kontakt@promakler.de" className="btn-primary">
                <span>Kostenloses Exposé anfordern</span>
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
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="tel:+4917672953996" className="btn-secondary">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>Direkt anrufen</span>
              </a>
            </div>

            <p className="cta-note">
              Ideal für Nutzer von onOffice, FlowFact und JustImmo
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <SiteFooter />
    </>
  );
}
