"use client";

export default function CrmIntegrationSection() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap');

        .section-integration {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          padding: 120px 40px;
          background: #F8FAFB;
        }

        .section-integration::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(to right, #E3E8EE 1px, transparent 1px),
            linear-gradient(to bottom, #E3E8EE 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.3;
          pointer-events: none;
          z-index: 0;
        }

        .section-integration > * {
          position: relative;
          z-index: 1;
        }

        .integration-header {
          max-width: 800px;
          margin: 0 auto 80px;
          text-align: center;
        }

        .section-integration .section-label {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #00D4AA;
          background: rgba(0, 212, 170, 0.1);
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 24px;
          font-weight: 600;
          font-family: 'IBM Plex Mono', monospace;
        }

        .integration-title {
          font-family: 'Instrument Serif', serif;
          font-size: 56px;
          line-height: 1.1;
          color: #0A2540;
          margin-bottom: 24px;
          font-weight: 400;
          font-style: italic;
        }

        .integration-intro {
          font-size: 16px;
          color: #697386;
          line-height: 1.8;
          max-width: 680px;
          margin: 0 auto;
          font-family: 'IBM Plex Mono', monospace;
        }

        .data-flow {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin: 80px 0;
          position: relative;
        }

        .data-flow::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, transparent, #00D4AA 15%, #00D4AA 85%, transparent);
          transform: translateY(-50%);
          opacity: 0.3;
          pointer-events: none;
          z-index: 0;
        }

        .flow-card {
          background: #FFFFFF;
          border: 2px solid #E3E8EE;
          border-radius: 12px;
          padding: 40px 32px;
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .flow-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #00D4AA, #635BFF);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .flow-card:hover {
          border-color: #00D4AA;
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(10, 37, 64, 0.1);
        }

        .flow-card:hover::before {
          transform: scaleX(1);
        }

        .flow-step {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          background: #00D4AA;
          color: #FFFFFF;
          border-radius: 50%;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 20px;
          font-family: 'IBM Plex Mono', monospace;
        }

        .flow-card:nth-child(2) .flow-step {
          background: #635BFF;
        }

        .flow-card:nth-child(3) .flow-step {
          background: #0A2540;
        }

        .flow-headline {
          font-family: 'Instrument Serif', serif;
          font-size: 24px;
          line-height: 1.3;
          color: #0A2540;
          margin-bottom: 16px;
          font-style: italic;
        }

        .flow-text {
          font-size: 14px;
          color: #697386;
          line-height: 1.7;
          margin-bottom: 24px;
          font-family: 'IBM Plex Mono', monospace;
        }

        .flow-features {
          list-style: none;
          margin-top: 24px;
        }

        .flow-features li {
          font-size: 13px;
          color: #1A1F36;
          padding-left: 24px;
          position: relative;
          margin-bottom: 12px;
          line-height: 1.6;
          font-family: 'IBM Plex Mono', monospace;
        }

        .flow-features li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: #00D4AA;
          font-weight: 600;
        }

        .system-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
        }

        .system-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 500;
          padding: 6px 12px;
          background: #F8FAFB;
          border: 1px solid #E3E8EE;
          border-radius: 6px;
          color: #697386;
          font-family: 'IBM Plex Mono', monospace;
        }

        .compatibility-matrix {
          background: #FFFFFF;
          border: 2px solid #E3E8EE;
          border-radius: 12px;
          padding: 48px;
          margin-top: 60px;
          overflow-x: auto;
        }

        .matrix-header {
          margin-bottom: 32px;
        }

        .matrix-title {
          font-family: 'Instrument Serif', serif;
          font-size: 28px;
          color: #0A2540;
          margin-bottom: 12px;
          font-style: italic;
        }

        .matrix-subtitle {
          font-size: 14px;
          color: #697386;
          font-family: 'IBM Plex Mono', monospace;
        }

        .matrix-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          font-size: 13px;
          font-family: 'IBM Plex Mono', monospace;
        }

        .matrix-table thead th {
          background: #0A2540;
          color: #FFFFFF;
          padding: 16px 20px;
          text-align: left;
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          border-bottom: 2px solid #00D4AA;
        }

        .matrix-table thead th:first-child {
          border-radius: 8px 0 0 0;
        }

        .matrix-table thead th:last-child {
          border-radius: 0 8px 0 0;
        }

        .matrix-table tbody tr {
          transition: background-color 0.2s;
        }

        .matrix-table tbody tr:hover {
          background: #F8FAFB;
        }

        .matrix-table tbody td {
          padding: 16px 20px;
          border-bottom: 1px solid #E3E8EE;
        }

        .matrix-table tbody tr:last-child td:first-child {
          border-radius: 0 0 0 8px;
        }

        .matrix-table tbody tr:last-child td:last-child {
          border-radius: 0 0 8px 0;
        }

        .crm-name {
          font-weight: 600;
          color: #0A2540;
        }

        .support-indicator {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
        }

        .support-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .support-full .support-dot {
          background: #00D4AA;
          box-shadow: 0 0 0 3px rgba(0, 212, 170, 0.2);
        }

        .support-partial .support-dot {
          background: #FFB020;
          box-shadow: 0 0 0 3px rgba(255, 176, 32, 0.2);
        }

        .support-planned .support-dot {
          background: #E3E8EE;
        }

        @media (max-width: 1024px) {
          .data-flow {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .data-flow::after {
            display: none;
          }

          .integration-title {
            font-size: 42px;
          }

          .compatibility-matrix {
            padding: 32px 24px;
          }

          .matrix-table {
            font-size: 12px;
          }
        }

        @media (max-width: 768px) {
          .section-integration {
            padding: 80px 24px;
          }

          .integration-title {
            font-size: 36px;
          }

          .flow-card {
            padding: 32px 24px;
          }

          .matrix-table thead th,
          .matrix-table tbody td {
            padding: 12px 16px;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .flow-card {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
        }

        .flow-card:nth-child(1) {
          animation-delay: 0.1s;
        }

        .flow-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .flow-card:nth-child(3) {
          animation-delay: 0.3s;
        }

        .compatibility-matrix {
          animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
          animation-delay: 0.4s;
        }
      `}</style>

      <section className="section-integration">
        <div className="integration-header">
          <span className="section-label">CRM-Integration</span>
          <h2 className="integration-title">Ein Datenfluss: Von Ihrem CRM zur Website</h2>
          <p className="integration-intro">
            Sie pflegen Ihre Objekte wie gewohnt in Ihrem CRM-System. Wir sorgen dafür, dass alle Daten, Bilder und Exposés automatisch und systemgenau auf Ihrer Website erscheinen – ohne zusätzlichen Pflegeaufwand, mit voller Datensouveränität und zukunftssicher aufgesetzt.
          </p>
        </div>

        <div className="data-flow">
          <div className="flow-card">
            <div className="flow-step">1</div>
            <h3 className="flow-headline">Ihr Bestand bleibt, die Technik wird besser</h3>
            <p className="flow-text">
              Wir binden gängige CRM-Systeme wie onOffice, FlowFact, Propstack sowie weitere Plattformen an – auch über standardisierte Exporte wie OpenImmo XML oder CSV. Ihre bestehende Systemlandschaft bleibt erhalten, die Datenhoheit liegt bei Ihnen.
            </p>
            <div className="system-logos">
              <span className="system-badge">onOffice</span>
              <span className="system-badge">FlowFact</span>
              <span className="system-badge">Propstack</span>
              <span className="system-badge">OpenImmo XML</span>
              <span className="system-badge">+ weitere</span>
            </div>
          </div>

          <div className="flow-card">
            <div className="flow-step">2</div>
            <h3 className="flow-headline">Ihre Daten fließen automatisch</h3>
            <p className="flow-text">
              Objekte werden zyklisch synchronisiert, Bilder für schnelle Ladezeiten optimiert und alle Änderungen in Echtzeit übertragen. Keine manuelle Doppelpflege, keine veralteten Exposés – alles läuft automatisch im Hintergrund.
            </p>
            <ul className="flow-features">
              <li>Regelmäßige Objektsynchronisierung aus Ihrem CRM</li>
              <li>Automatische Bildoptimierung für schnelle Ladezeiten</li>
              <li>Standardisierte Schnittstellen (OpenImmo, REST-API)</li>
            </ul>
          </div>

          <div className="flow-card">
            <div className="flow-step">3</div>
            <h3 className="flow-headline">Kompatibel mit Ihrer Systemlandschaft</h3>
            <p className="flow-text">
              Je nach CRM-System werden unterschiedliche Features unterstützt – von Objektsynchronisierung über Mediensync bis hin zu Exposé-PDFs und Webhooks. Die Kompatibilitätsmatrix zeigt Ihnen transparent, was möglich ist. Weitere Systeme prüfen und integrieren wir gerne auf Anfrage.
            </p>
          </div>
        </div>

        <div className="compatibility-matrix">
          <div className="matrix-header">
            <h3 className="matrix-title">Funktions- & Kompatibilitätsmatrix</h3>
            <p className="matrix-subtitle">
              Transparente Übersicht: Welches System unterstützt welche Integration. Weitere Systeme auf Anfrage.
            </p>
          </div>

          <table className="matrix-table">
            <thead>
              <tr>
                <th>CRM-System</th>
                <th>Objektsync</th>
                <th>Mediensync</th>
                <th>Exposé-PDF</th>
                <th>Webhooks</th>
                <th>API-Zugriff</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="crm-name">onOffice</td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>REST-API</span></td>
              </tr>
              <tr>
                <td className="crm-name">FlowFact</td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-partial"><span className="support-dot"></span>Teilweise</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>REST-API</span></td>
              </tr>
              <tr>
                <td className="crm-name">Propstack</td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-partial"><span className="support-dot"></span>Teilweise</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>GraphQL</span></td>
              </tr>
              <tr>
                <td className="crm-name">immocloud24</td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-planned"><span className="support-dot"></span>Geplant</span></td>
                <td><span className="support-indicator support-planned"><span className="support-dot"></span>Geplant</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>REST-API</span></td>
              </tr>
              <tr>
                <td className="crm-name">OpenImmo XML</td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>Vollständig</span></td>
                <td><span className="support-indicator support-planned"><span className="support-dot"></span>Nicht verfügbar</span></td>
                <td><span className="support-indicator support-full"><span className="support-dot"></span>FTP/SFTP</span></td>
              </tr>
              <tr>
                <td className="crm-name">Weitere Systeme</td>
                <td colSpan={5} style={{ color: '#697386', fontStyle: 'italic' }}>
                  Auf Anfrage prüfen und integrieren wir gerne Ihr spezifisches CRM-System
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
