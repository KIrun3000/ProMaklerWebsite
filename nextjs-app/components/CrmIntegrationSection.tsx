"use client";

export default function CrmIntegrationSection() {
  return (
    <>
      <style jsx global>{`
        .crm-integration-section {
          position: relative;
          padding: 8rem 0;
          background: var(--cream);
          color: var(--navy-dark);
          overflow: hidden;
        }

        .crm-integration-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(to right, rgba(201, 169, 98, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(201, 169, 98, 0.08) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.4;
          pointer-events: none;
          z-index: 0;
        }

        .crm-integration-section > * {
          position: relative;
          z-index: 1;
        }

        .crm-integration-header {
          max-width: 800px;
          margin: 0 auto 5rem;
          text-align: center;
        }

        .crm-integration-header .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-dark);
          margin-bottom: 1.5rem;
        }

        .crm-integration-header .section-tag::before,
        .crm-integration-header .section-tag::after {
          content: '';
          width: 30px;
          height: 1px;
          background: var(--gold-dark);
        }

        .crm-integration-title {
          font-family: var(--font-display);
          font-size: clamp(2rem, 3.5vw, 2.75rem);
          line-height: 1.2;
          color: var(--navy);
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .crm-integration-intro {
          font-size: 1.1rem;
          color: var(--anthrazit);
          line-height: 1.8;
          opacity: 0.8;
          max-width: 680px;
          margin: 0 auto;
        }

        .crm-data-flow {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin: 0 auto 5rem;
          max-width: 1280px;
          padding: 0 2rem;
          position: relative;
        }

        .crm-data-flow::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 10%;
          right: 10%;
          height: 2px;
          background: linear-gradient(to right, transparent, var(--gold) 20%, var(--gold) 80%, transparent);
          transform: translateY(-50%);
          opacity: 0.3;
          pointer-events: none;
          z-index: 0;
        }

        .crm-flow-card {
          background: var(--white);
          border: 1px solid rgba(201, 169, 98, 0.2);
          padding: 2.5rem 2rem;
          position: relative;
          transition: all 0.4s var(--ease-out-expo);
          z-index: 1;
        }

        .crm-flow-card::before {
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

        .crm-flow-card:hover {
          border-color: var(--gold);
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(26, 39, 68, 0.12);
        }

        .crm-flow-card:hover::before {
          transform: scaleX(1);
        }

        .crm-flow-step {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: var(--gold);
          color: var(--navy-dark);
          border-radius: 50%;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        .crm-flow-headline {
          font-family: var(--font-display);
          font-size: 1.35rem;
          line-height: 1.3;
          color: var(--navy);
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .crm-flow-text {
          font-size: 0.95rem;
          color: var(--anthrazit);
          line-height: 1.7;
          margin-bottom: 1.5rem;
          opacity: 0.85;
        }

        .crm-flow-features {
          list-style: none;
          margin-top: 1.5rem;
        }

        .crm-flow-features li {
          font-size: 0.9rem;
          color: var(--navy);
          padding-left: 1.5rem;
          position: relative;
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }

        .crm-flow-features li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--gold);
          font-weight: 600;
        }

        .crm-system-logos {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .crm-system-badge {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.4rem 0.85rem;
          background: rgba(201, 169, 98, 0.1);
          border: 1px solid rgba(201, 169, 98, 0.25);
          color: var(--gold-dark);
          letter-spacing: 0.02em;
        }

        .crm-compatibility-matrix {
          background: var(--white);
          border: 1px solid rgba(201, 169, 98, 0.2);
          padding: 3rem;
          margin: 0 auto;
          max-width: 1280px;
          margin-left: 2rem;
          margin-right: 2rem;
          overflow-x: auto;
        }

        .crm-matrix-header {
          margin-bottom: 2.5rem;
        }

        .crm-matrix-title {
          font-family: var(--font-display);
          font-size: 1.75rem;
          color: var(--navy);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .crm-matrix-subtitle {
          font-size: 0.95rem;
          color: var(--anthrazit);
          opacity: 0.8;
        }

        .crm-matrix-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          font-size: 0.9rem;
        }

        .crm-matrix-table thead th {
          background: var(--navy);
          color: var(--cream);
          padding: 1rem 1.25rem;
          text-align: left;
          font-weight: 600;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-bottom: 2px solid var(--gold);
        }

        .crm-matrix-table thead th:first-child {
          border-radius: 2px 0 0 0;
        }

        .crm-matrix-table thead th:last-child {
          border-radius: 0 2px 0 0;
        }

        .crm-matrix-table tbody tr {
          transition: background-color 0.2s;
        }

        .crm-matrix-table tbody tr:hover {
          background: rgba(201, 169, 98, 0.05);
        }

        .crm-matrix-table tbody td {
          padding: 1rem 1.25rem;
          border-bottom: 1px solid rgba(201, 169, 98, 0.15);
        }

        .crm-matrix-table tbody tr:last-child td:first-child {
          border-radius: 0 0 0 2px;
        }

        .crm-matrix-table tbody tr:last-child td:last-child {
          border-radius: 0 0 2px 0;
        }

        .crm-name {
          font-weight: 600;
          color: var(--navy);
        }

        .crm-support-indicator {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
        }

        .crm-support-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .crm-support-full .crm-support-dot {
          background: var(--gold);
          box-shadow: 0 0 0 3px rgba(201, 169, 98, 0.2);
        }

        .crm-support-partial .crm-support-dot {
          background: #e67e22;
          box-shadow: 0 0 0 3px rgba(230, 126, 34, 0.2);
        }

        .crm-support-planned .crm-support-dot {
          background: var(--anthrazit-light);
        }

        @media (max-width: 1024px) {
          .crm-data-flow {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .crm-data-flow::after {
            display: none;
          }

          .crm-compatibility-matrix {
            padding: 2rem 1.5rem;
          }

          .crm-matrix-table {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 768px) {
          .crm-integration-section {
            padding: 5rem 0;
          }

          .crm-flow-card {
            padding: 2rem 1.5rem;
          }

          .crm-matrix-table thead th,
          .crm-matrix-table tbody td {
            padding: 0.75rem 1rem;
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

      <section className="crm-integration-section">
        <div className="container">
          <div className="crm-integration-header fade-in">
            <span className="section-tag">CRM-Integration</span>
            <h2 className="crm-integration-title">Ein Datenfluss: Von Ihrem CRM zur Website</h2>
            <p className="crm-integration-intro">
              Sie pflegen Ihre Objekte wie gewohnt in Ihrem CRM-System. Wir sorgen dafür, dass alle Daten, Bilder und Exposés automatisch und systemgenau auf Ihrer Website erscheinen – ohne zusätzlichen Pflegeaufwand, mit voller Datensouveränität und zukunftssicher aufgesetzt.
            </p>
          </div>

          <div className="crm-data-flow">
            <div className="crm-flow-card fade-in">
              <div className="crm-flow-step">1</div>
              <h3 className="crm-flow-headline">Ihr Bestand bleibt, die Technik wird besser</h3>
              <p className="crm-flow-text">
                Wir binden gängige CRM-Systeme wie onOffice, FlowFact, Propstack sowie weitere Plattformen an – auch über standardisierte Exporte wie OpenImmo XML oder CSV. Ihre bestehende Systemlandschaft bleibt erhalten, die Datenhoheit liegt bei Ihnen.
              </p>
              <div className="crm-system-logos">
                <span className="crm-system-badge">onOffice</span>
                <span className="crm-system-badge">FlowFact</span>
                <span className="crm-system-badge">Propstack</span>
                <span className="crm-system-badge">OpenImmo XML</span>
                <span className="crm-system-badge">+ weitere</span>
              </div>
            </div>

            <div className="crm-flow-card fade-in">
              <div className="crm-flow-step">2</div>
              <h3 className="crm-flow-headline">Ihre Daten fließen automatisch</h3>
              <p className="crm-flow-text">
                Objekte werden zyklisch synchronisiert, Bilder für schnelle Ladezeiten optimiert und alle Änderungen in Echtzeit übertragen. Keine manuelle Doppelpflege, keine veralteten Exposés – alles läuft automatisch im Hintergrund.
              </p>
              <ul className="crm-flow-features">
                <li>Regelmäßige Objektsynchronisierung aus Ihrem CRM</li>
                <li>Automatische Bildoptimierung für schnelle Ladezeiten</li>
                <li>Standardisierte Schnittstellen (OpenImmo, REST-API)</li>
              </ul>
            </div>

            <div className="crm-flow-card fade-in">
              <div className="crm-flow-step">3</div>
              <h3 className="crm-flow-headline">Kompatibel mit Ihrer Systemlandschaft</h3>
              <p className="crm-flow-text">
                Je nach CRM-System werden unterschiedliche Features unterstützt – von Objektsynchronisierung über Mediensync bis hin zu Exposé-PDFs und Webhooks. Die Kompatibilitätsmatrix zeigt Ihnen transparent, was möglich ist. Weitere Systeme prüfen und integrieren wir gerne auf Anfrage.
              </p>
            </div>
          </div>

          <div className="crm-compatibility-matrix fade-in">
            <div className="crm-matrix-header">
              <h3 className="crm-matrix-title">Funktions- & Kompatibilitätsmatrix</h3>
              <p className="crm-matrix-subtitle">
                Transparente Übersicht: Welches System unterstützt welche Integration. Weitere Systeme auf Anfrage.
              </p>
            </div>

            <table className="crm-matrix-table">
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
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>REST-API</span></td>
                </tr>
                <tr>
                  <td className="crm-name">FlowFact</td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-partial"><span className="crm-support-dot"></span>Teilweise</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>REST-API</span></td>
                </tr>
                <tr>
                  <td className="crm-name">Propstack</td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-partial"><span className="crm-support-dot"></span>Teilweise</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>GraphQL</span></td>
                </tr>
                <tr>
                  <td className="crm-name">immocloud24</td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-planned"><span className="crm-support-dot"></span>Geplant</span></td>
                  <td><span className="crm-support-indicator crm-support-planned"><span className="crm-support-dot"></span>Geplant</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>REST-API</span></td>
                </tr>
                <tr>
                  <td className="crm-name">OpenImmo XML</td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>Vollständig</span></td>
                  <td><span className="crm-support-indicator crm-support-planned"><span className="crm-support-dot"></span>N/A</span></td>
                  <td><span className="crm-support-indicator crm-support-full"><span className="crm-support-dot"></span>FTP/SFTP</span></td>
                </tr>
                <tr>
                  <td className="crm-name">Weitere Systeme</td>
                  <td colSpan={5} style={{ color: 'var(--anthrazit)', fontStyle: 'italic', opacity: 0.8 }}>
                    Auf Anfrage prüfen und integrieren wir gerne Ihr spezifisches CRM-System
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
