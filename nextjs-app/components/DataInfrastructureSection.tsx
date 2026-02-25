"use client";

export default function DataInfrastructureSection() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,600;1,600&display=swap');

        .section-data {
          position: relative;
          max-width: 1600px;
          margin: 0 auto;
          padding: 100px 40px;
          background: #0D1117;
          color: #E6EDF3;
        }

        .section-data::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(to right, rgba(0, 255, 179, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 179, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
          animation: gridPulse 4s ease-in-out infinite;
        }

        @keyframes gridPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        .data-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00FFB3;
          border-radius: 50%;
          animation: float 15s linear infinite;
          opacity: 0.3;
        }

        .particle:nth-child(2) { left: 20%; animation-delay: -5s; background: #00D9FF; }
        .particle:nth-child(3) { left: 40%; animation-delay: -10s; background: #B388FF; }
        .particle:nth-child(4) { left: 60%; animation-delay: -2s; }
        .particle:nth-child(5) { left: 80%; animation-delay: -8s; background: #00D9FF; }

        @keyframes float {
          0% { 
            transform: translateY(100vh) translateX(0); 
            opacity: 0;
          }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { 
            transform: translateY(-100px) translateX(100px); 
            opacity: 0;
          }
        }

        .section-data > * {
          position: relative;
          z-index: 1;
        }

        .data-header {
          max-width: 900px;
          margin: 0 auto 80px;
          text-align: center;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #00FFB3;
          background: rgba(0, 255, 179, 0.1);
          border: 1px solid rgba(0, 255, 179, 0.3);
          padding: 8px 16px;
          border-radius: 20px;
          margin-bottom: 32px;
          font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
        }

        .status-indicator {
          width: 8px;
          height: 8px;
          background: #00FFB3;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { 
            box-shadow: 0 0 0 0 rgba(0, 255, 179, 0.7);
          }
          50% { 
            box-shadow: 0 0 0 10px rgba(0, 255, 179, 0);
          }
        }

        .data-title {
          font-family: 'Playfair Display', serif;
          font-size: 64px;
          line-height: 1.1;
          color: #E6EDF3;
          margin-bottom: 24px;
          font-weight: 600;
          font-style: italic;
          background: linear-gradient(135deg, #00FFB3, #00D9FF);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .data-intro {
          font-size: 15px;
          color: #8B949E;
          line-height: 1.8;
          max-width: 720px;
          margin: 0 auto;
          font-family: 'JetBrains Mono', monospace;
        }

        .data-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin: 80px 0;
        }

        .data-card {
          background: #1C2128;
          border: 1px solid #30363D;
          border-radius: 16px;
          padding: 40px 32px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .data-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #00FFB3, transparent);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }

        .data-card:hover::before {
          transform: translateX(100%);
        }

        .data-card:hover {
          border-color: #00FFB3;
          transform: translateY(-8px);
          box-shadow: 
            0 0 0 1px rgba(0, 255, 179, 0.1),
            0 20px 60px rgba(0, 0, 0, 0.5);
        }

        .card-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 255, 179, 0.1);
          border: 1px solid rgba(0, 255, 179, 0.3);
          border-radius: 12px;
          font-size: 24px;
          margin-bottom: 24px;
        }

        .data-card:nth-child(2) .card-icon {
          background: rgba(0, 217, 255, 0.1);
          border-color: rgba(0, 217, 255, 0.3);
        }

        .data-card:nth-child(3) .card-icon {
          background: rgba(179, 136, 255, 0.1);
          border-color: rgba(179, 136, 255, 0.3);
        }

        .card-headline {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          line-height: 1.3;
          color: #E6EDF3;
          margin-bottom: 16px;
          font-weight: 600;
        }

        .card-text {
          font-size: 14px;
          color: #8B949E;
          line-height: 1.7;
          margin-bottom: 28px;
          font-family: 'JetBrains Mono', monospace;
        }

        .card-metrics {
          list-style: none;
          margin-top: 24px;
        }

        .card-metrics li {
          font-size: 13px;
          color: #8B949E;
          padding: 12px 0;
          border-bottom: 1px solid #30363D;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'JetBrains Mono', monospace;
        }

        .card-metrics li:last-child {
          border-bottom: none;
        }

        .metric-icon {
          width: 6px;
          height: 6px;
          background: #00FFB3;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .card-metrics li strong {
          color: #E6EDF3;
          font-weight: 600;
        }

        .data-sources {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .source-badge {
          background: #161B22;
          border: 1px solid #30363D;
          border-radius: 8px;
          padding: 12px 16px;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
          font-family: 'JetBrains Mono', monospace;
        }

        .source-badge:hover {
          border-color: #00FFB3;
          background: rgba(0, 255, 179, 0.05);
        }

        .source-name {
          color: #E6EDF3;
          font-weight: 500;
        }

        .source-frequency {
          font-size: 9px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 4px;
          font-weight: 600;
        }

        .freq-live {
          background: rgba(63, 185, 80, 0.2);
          color: #3FB950;
        }

        .freq-daily {
          background: rgba(88, 166, 255, 0.2);
          color: #58A6FF;
        }

        .freq-historical {
          background: rgba(139, 148, 158, 0.2);
          color: #8B949E;
        }

        .code-example {
          background: #161B22;
          border: 1px solid #30363D;
          border-radius: 12px;
          padding: 32px;
          margin-top: 60px;
          position: relative;
          overflow: hidden;
        }

        .code-example::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00D9FF, transparent);
        }

        .code-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .code-title {
          font-size: 13px;
          color: #8B949E;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: 'JetBrains Mono', monospace;
        }

        .code-lang {
          font-size: 11px;
          color: #00D9FF;
          background: rgba(0, 217, 255, 0.1);
          padding: 4px 10px;
          border-radius: 4px;
          font-family: 'JetBrains Mono', monospace;
        }

        .code-block {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          line-height: 1.8;
          color: #8B949E;
          overflow-x: auto;
        }

        .code-block .key {
          color: #00D9FF;
        }

        .code-block .string {
          color: #00FFB3;
        }

        .code-block .number {
          color: #B388FF;
        }

        .code-block .bracket {
          color: #E6EDF3;
        }

        .use-cases {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 24px;
        }

        .use-case {
          background: #161B22;
          border: 1px solid #30363D;
          border-radius: 8px;
          padding: 20px 24px;
          font-size: 13px;
          color: #8B949E;
          transition: all 0.3s ease;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-family: 'JetBrains Mono', monospace;
        }

        .use-case:hover {
          border-color: #B388FF;
          background: rgba(179, 136, 255, 0.05);
        }

        .use-case-icon {
          width: 32px;
          height: 32px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(179, 136, 255, 0.1);
          border-radius: 6px;
          font-size: 16px;
        }

        @media (max-width: 1200px) {
          .data-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .data-title {
            font-size: 48px;
          }
        }

        @media (max-width: 768px) {
          .section-data {
            padding: 80px 24px;
          }

          .data-title {
            font-size: 36px;
          }

          .data-card {
            padding: 32px 24px;
          }

          .use-cases {
            grid-template-columns: 1fr;
          }

          .code-example {
            padding: 24px 20px;
          }

          .code-block {
            font-size: 12px;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .data-card {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
        }

        .data-card:nth-child(1) {
          animation-delay: 0.1s;
        }

        .data-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .data-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        .code-example {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
          animation-delay: 0.4s;
        }
      `}</style>

      <section className="section-data">
        <div className="data-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="data-header">
          <span className="status-badge">
            <span className="status-indicator"></span>
            Enterprise-Infrastruktur
          </span>
          <h2 className="data-title">Ihre Marktdaten-Engine im Hintergrund</h2>
          <p className="data-intro">
            Im Hintergrund läuft eine skalierbare Enterprise-Infrastruktur mit geprüften IPs, weltweiter Länderabdeckung und millionenfach genutzten Datensätzen. Damit beziehen Sie Marktdaten, Preis-Trends und Verfügbarkeiten in Echtzeit oder regelmäßigen Intervallen – ohne manuelle Exporte, DSGVO-konform, ohne Captcha-Probleme und ohne Blockierung durch Portale.
          </p>
        </div>

        <div className="data-grid">
          <div className="data-card">
            <div className="card-icon">⚡</div>
            <h3 className="card-headline">Enterprise-Power für Ihr Maklerbüro</h3>
            <p className="card-text">
              Die Daten-Infrastruktur, die Ihre Website mit Live-Marktdaten versorgt, läuft auf derselben Enterprise-Basis wie bei 20.000+ Kunden weltweit. Stabil, skalierbar und für Immobilienmärkte optimiert – von lokalen bis internationalen Projekten.
            </p>
            <ul className="card-metrics">
              <li>
                <span className="metric-icon"></span>
                <span><strong>150M+ IPs</strong> für geo-genaue Datenzugriffe</span>
              </li>
              <li>
                <span className="metric-icon"></span>
                <span><strong>195+ Länder</strong> Abdeckung für internationale Märkte</span>
              </li>
              <li>
                <span className="metric-icon"></span>
                <span><strong>Enterprise-Infra</strong> wie bei 20.000+ Kunden im Einsatz</span>
              </li>
            </ul>
          </div>

          <div className="data-card">
            <div className="card-icon">🔄</div>
            <h3 className="card-headline">Alle relevanten Quellen, ein sauberes System</h3>
            <p className="card-text">
              Portale wie ImmobilienScout24, Immowelt und regionale Plattformen, kombiniert mit historischen Marktdaten, Standort-Intelligence und Preis-Trends – alles orchestriert in einem sauberen Daten-Ökosystem, das Ihre Website kontinuierlich mit aktuellen Kennzahlen versorgt.
            </p>
            <div className="data-sources">
              <div className="source-badge">
                <span className="source-name">ImmobilienScout24</span>
                <span className="source-frequency freq-live">Live</span>
              </div>
              <div className="source-badge">
                <span className="source-name">Immowelt</span>
                <span className="source-frequency freq-live">Live</span>
              </div>
              <div className="source-badge">
                <span className="source-name">Regionale Portale</span>
                <span className="source-frequency freq-daily">Täglich</span>
              </div>
              <div className="source-badge">
                <span className="source-name">Marktdaten</span>
                <span className="source-frequency freq-historical">Historisch</span>
              </div>
              <div className="source-badge">
                <span className="source-name">Standort-Intelligence</span>
                <span className="source-frequency freq-live">Live</span>
              </div>
              <div className="source-badge">
                <span className="source-name">Preis-Trends</span>
                <span className="source-frequency freq-daily">Täglich</span>
              </div>
            </div>
          </div>

          <div className="data-card">
            <div className="card-icon">📊</div>
            <h3 className="card-headline">Ihre Website wird zum Markt-Dashboard</h3>
            <p className="card-text">
              Diese Infrastruktur und das Ökosystem machen Ihre Website zu einem echten Markt-Dashboard: Marktberichte, Preis-Spannen nach Stadtteil, Angebots-/Nachfrage-Heatmaps und automatisch aktualisierte Kennzahlen. Perfekt für Eigentümer-Ansprache und fundierte Beratungsgespräche.
            </p>
            <div className="use-cases">
              <div className="use-case">
                <div className="use-case-icon">📈</div>
                <div>
                  <strong>Marktberichte</strong><br />
                  Aktuelle Zahlen statt Bauchgefühl
                </div>
              </div>
              <div className="use-case">
                <div className="use-case-icon">🎯</div>
                <div>
                  <strong>Preis-Spannen</strong><br />
                  Stadtteil-genau, live aktualisiert
                </div>
              </div>
              <div className="use-case">
                <div className="use-case-icon">🗺️</div>
                <div>
                  <strong>Heatmaps</strong><br />
                  Angebot/Nachfrage visualisiert
                </div>
              </div>
              <div className="use-case">
                <div className="use-case-icon">💼</div>
                <div>
                  <strong>Akquise-Tool</strong><br />
                  Bessere Argumentation im Gespräch
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="code-example">
          <div className="code-header">
            <span className="code-title">Live-Datenstruktur Beispiel</span>
            <span className="code-lang">JSON</span>
          </div>
          <pre className="code-block"><span className="bracket">{'{'}</span>
  <span className="key">&quot;objectId&quot;</span>: <span className="string">&quot;12345678&quot;</span>,
  <span className="key">&quot;preis&quot;</span>: <span className="number">450000</span>,
  <span className="key">&quot;flaeche&quot;</span>: <span className="number">85</span>,
  <span className="key">&quot;stadtteil&quot;</span>: <span className="string">&quot;Mitte&quot;</span>,
  <span className="key">&quot;marktpreis_durchschnitt&quot;</span>: <span className="number">5294</span>,
  <span className="key">&quot;lastUpdated&quot;</span>: <span className="string">&quot;2026-02-25T14:32:00Z&quot;</span>
<span className="bracket">{'}'}</span></pre>
        </div>
      </section>
    </>
  );
}
