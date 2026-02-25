"use client";

import { Server, Database, BarChart3 } from 'lucide-react';

export default function DataInfrastructureSection() {
  return (
    <>
      <style jsx global>{`
        .data-infrastructure-section {
          position: relative;
          padding: 8rem 0;
          background: var(--navy);
          color: var(--cream);
          overflow: hidden;
        }

        .data-infrastructure-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(to right, rgba(201, 169, 98, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(201, 169, 98, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
          opacity: 0.6;
        }

        .data-infrastructure-section > * {
          position: relative;
          z-index: 1;
        }

        .data-infrastructure-header {
          max-width: 900px;
          margin: 0 auto 5rem;
          text-align: center;
        }

        .data-infrastructure-header .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.5rem;
        }

        .data-infrastructure-header .section-tag::before,
        .data-infrastructure-header .section-tag::after {
          content: '';
          width: 30px;
          height: 1px;
          background: var(--gold);
        }

        .data-infrastructure-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          line-height: 1.2;
          color: var(--cream);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .data-infrastructure-intro {
          font-size: 1.1rem;
          color: rgba(248, 246, 241, 0.75);
          line-height: 1.8;
          opacity: 0.8;
          max-width: 720px;
          margin: 0 auto;
        }

        .data-infrastructure-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin: 0 auto 4rem;
          max-width: 1280px;
          padding: 0 2rem;
        }

        .data-infrastructure-card {
          background: rgba(248, 246, 241, 0.03);
          border: 1px solid rgba(201, 169, 98, 0.2);
          padding: 2.5rem 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s var(--ease-out-expo);
        }

        .data-infrastructure-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s var(--ease-out-expo);
        }

        .data-infrastructure-card:hover::before {
          transform: scaleX(1);
        }

        .data-infrastructure-card:hover {
          border-color: var(--gold);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          background: rgba(248, 246, 241, 0.05);
        }

        .data-card-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(201, 169, 98, 0.15);
          border: 1px solid rgba(201, 169, 98, 0.3);
          margin-bottom: 1.5rem;
        }

        .data-card-icon svg {
          width: 24px;
          height: 24px;
          color: var(--gold);
          stroke-width: 1.5;
        }

        .data-card-headline {
          font-family: var(--font-display);
          font-size: 1.35rem;
          line-height: 1.3;
          color: var(--cream);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .data-card-text {
          font-size: 0.95rem;
          color: rgba(248, 246, 241, 0.7);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .data-card-metrics {
          list-style: none;
          margin-top: 1.5rem;
        }

        .data-card-metrics li {
          font-size: 0.9rem;
          color: rgba(248, 246, 241, 0.7);
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(201, 169, 98, 0.15);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .data-card-metrics li:last-child {
          border-bottom: none;
        }

        .data-metric-icon {
          width: 6px;
          height: 6px;
          background: var(--gold);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .data-card-metrics li strong {
          color: var(--cream);
          font-weight: 600;
        }

        .data-sources-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .data-source-badge {
          background: rgba(248, 246, 241, 0.05);
          border: 1px solid rgba(201, 169, 98, 0.2);
          padding: 0.75rem 1rem;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
        }

        .data-source-badge:hover {
          border-color: var(--gold);
          background: rgba(201, 169, 98, 0.08);
        }

        .data-source-name {
          color: var(--cream);
          font-weight: 500;
        }

        .data-source-frequency {
          font-size: 0.7rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 0.2rem 0.6rem;
          font-weight: 600;
        }

        .data-freq-live {
          background: rgba(201, 169, 98, 0.2);
          color: var(--gold);
        }

        .data-freq-daily {
          background: rgba(201, 169, 98, 0.15);
          color: var(--gold-light);
        }

        .data-freq-historical {
          background: rgba(248, 246, 241, 0.1);
          color: rgba(248, 246, 241, 0.6);
        }

        .data-use-cases {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .data-use-case {
          background: rgba(248, 246, 241, 0.05);
          border: 1px solid rgba(201, 169, 98, 0.15);
          padding: 1.25rem;
          font-size: 0.9rem;
          color: rgba(248, 246, 241, 0.7);
          transition: all 0.3s ease;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .data-use-case:hover {
          border-color: var(--gold);
          background: rgba(201, 169, 98, 0.08);
        }

        .data-use-case-icon {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(201, 169, 98, 0.15);
          font-size: 16px;
        }

        .data-code-example {
          background: rgba(248, 246, 241, 0.03);
          border: 1px solid rgba(201, 169, 98, 0.2);
          padding: 2rem;
          margin: 0 auto;
          max-width: 1280px;
          margin-left: 2rem;
          margin-right: 2rem;
          position: relative;
          overflow: hidden;
        }

        .data-code-example::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
        }

        .data-code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(201, 169, 98, 0.15);
        }

        .data-code-title {
          font-size: 0.85rem;
          color: rgba(248, 246, 241, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .data-code-lang {
          font-size: 0.75rem;
          color: var(--gold);
          background: rgba(201, 169, 98, 0.15);
          padding: 0.25rem 0.75rem;
        }

        .data-code-block {
          font-family: ui-monospace, monospace;
          font-size: 0.9rem;
          line-height: 1.7;
          color: rgba(248, 246, 241, 0.7);
          overflow-x: auto;
        }

        .data-code-block .key {
          color: var(--gold-light);
        }

        .data-code-block .string {
          color: var(--gold);
        }

        .data-code-block .number {
          color: var(--cream);
        }

        .data-code-block .bracket {
          color: var(--cream);
        }

        @media (max-width: 1200px) {
          .data-infrastructure-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .data-infrastructure-section {
            padding: 5rem 0;
          }

          .data-infrastructure-card {
            padding: 2rem 1.5rem;
          }

          .data-use-cases {
            grid-template-columns: 1fr;
          }

          .data-code-example {
            padding: 1.5rem;
          }

          .data-code-block {
            font-size: 0.8rem;
          }
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s var(--ease-out-expo), transform 0.8s var(--ease-out-expo);
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section className="data-infrastructure-section">
        <div className="container">
          <div className="data-infrastructure-header fade-in">
            <span className="section-tag">Daten-Infrastruktur</span>
            <h2 className="data-infrastructure-title">Ihre Marktdaten-Engine im Hintergrund</h2>
            <p className="data-infrastructure-intro">
              Im Hintergrund läuft eine skalierbare Enterprise-Infrastruktur mit geprüften IPs, weltweiter Länderabdeckung und millionenfach genutzten Datensätzen. Damit beziehen Sie Marktdaten, Preis-Trends und Verfügbarkeiten in Echtzeit oder regelmäßigen Intervallen – ohne manuelle Exporte, DSGVO-konform, ohne Captcha-Probleme und ohne Blockierung durch Portale.
            </p>
          </div>

          <div className="data-infrastructure-grid">
            <div className="data-infrastructure-card fade-in">
              <div className="data-card-icon">
                <Server />
              </div>
              <h3 className="data-card-headline">Enterprise-Power für Ihr Maklerbüro</h3>
              <p className="data-card-text">
                Die Daten-Infrastruktur, die Ihre Website mit Live-Marktdaten versorgt, läuft auf derselben Enterprise-Basis wie bei 20.000+ Kunden weltweit. Stabil, skalierbar und für Immobilienmärkte optimiert – von lokalen bis internationalen Projekten.
              </p>
              <ul className="data-card-metrics">
                <li>
                  <span className="data-metric-icon"></span>
                  <span><strong>150M+ IPs</strong> für geo-genaue Datenzugriffe</span>
                </li>
                <li>
                  <span className="data-metric-icon"></span>
                  <span><strong>195+ Länder</strong> Abdeckung für internationale Märkte</span>
                </li>
                <li>
                  <span className="data-metric-icon"></span>
                  <span><strong>Enterprise-Infra</strong> wie bei 20.000+ Kunden im Einsatz</span>
                </li>
              </ul>
            </div>

            <div className="data-infrastructure-card fade-in">
              <div className="data-card-icon">
                <Database />
              </div>
              <h3 className="data-card-headline">Alle relevanten Quellen, ein sauberes System</h3>
              <p className="data-card-text">
                Portale wie ImmobilienScout24, Immowelt und regionale Plattformen, kombiniert mit historischen Marktdaten, Standort-Intelligence und Preis-Trends – alles orchestriert in einem sauberen Daten-Ökosystem, das Ihre Website kontinuierlich mit aktuellen Kennzahlen versorgt.
              </p>
              <div className="data-sources-grid">
                <div className="data-source-badge">
                  <span className="data-source-name">ImmobilienScout24</span>
                  <span className="data-source-frequency data-freq-live">Live</span>
                </div>
                <div className="data-source-badge">
                  <span className="data-source-name">Immowelt</span>
                  <span className="data-source-frequency data-freq-live">Live</span>
                </div>
                <div className="data-source-badge">
                  <span className="data-source-name">Regionale Portale</span>
                  <span className="data-source-frequency data-freq-daily">Täglich</span>
                </div>
                <div className="data-source-badge">
                  <span className="data-source-name">Marktdaten</span>
                  <span className="data-source-frequency data-freq-historical">Historisch</span>
                </div>
                <div className="data-source-badge">
                  <span className="data-source-name">Standort-Intelligence</span>
                  <span className="data-source-frequency data-freq-live">Live</span>
                </div>
                <div className="data-source-badge">
                  <span className="data-source-name">Preis-Trends</span>
                  <span className="data-source-frequency data-freq-daily">Täglich</span>
                </div>
              </div>
            </div>

            <div className="data-infrastructure-card fade-in">
              <div className="data-card-icon">
                <BarChart3 />
              </div>
              <h3 className="data-card-headline">Ihre Website wird zum Markt-Dashboard</h3>
              <p className="data-card-text">
                Diese Infrastruktur und das Ökosystem machen Ihre Website zu einem echten Markt-Dashboard: Marktberichte, Preis-Spannen nach Stadtteil, Angebots-/Nachfrage-Heatmaps und automatisch aktualisierte Kennzahlen. Perfekt für Eigentümer-Ansprache und fundierte Beratungsgespräche.
              </p>
              <div className="data-use-cases">
                <div className="data-use-case">
                  <div className="data-use-case-icon">📈</div>
                  <div>
                    <strong>Marktberichte</strong><br />
                    Aktuelle Zahlen statt Bauchgefühl
                  </div>
                </div>
                <div className="data-use-case">
                  <div className="data-use-case-icon">🎯</div>
                  <div>
                    <strong>Preis-Spannen</strong><br />
                    Stadtteil-genau, live aktualisiert
                  </div>
                </div>
                <div className="data-use-case">
                  <div className="data-use-case-icon">🗺️</div>
                  <div>
                    <strong>Heatmaps</strong><br />
                    Angebot/Nachfrage visualisiert
                  </div>
                </div>
                <div className="data-use-case">
                  <div className="data-use-case-icon">💼</div>
                  <div>
                    <strong>Akquise-Tool</strong><br />
                    Bessere Argumentation im Gespräch
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="data-code-example fade-in">
            <div className="data-code-header">
              <span className="data-code-title">Live-Datenstruktur Beispiel</span>
              <span className="data-code-lang">JSON</span>
            </div>
            <pre className="data-code-block"><span className="bracket">{'{'}</span>
  <span className="key">&quot;objectId&quot;</span>: <span className="string">&quot;12345678&quot;</span>,
  <span className="key">&quot;preis&quot;</span>: <span className="number">450000</span>,
  <span className="key">&quot;flaeche&quot;</span>: <span className="number">85</span>,
  <span className="key">&quot;stadtteil&quot;</span>: <span className="string">&quot;Mitte&quot;</span>,
  <span className="key">&quot;marktpreis_durchschnitt&quot;</span>: <span className="number">5294</span>,
  <span className="key">&quot;lastUpdated&quot;</span>: <span className="string">&quot;2026-02-25T14:32:00Z&quot;</span>
<span className="bracket">{'}'}</span></pre>
          </div>
        </div>
      </section>
    </>
  );
}
