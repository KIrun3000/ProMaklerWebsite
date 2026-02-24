"use client";

import {
  BRIGHT_DATA_STATS,
  BRIGHT_DATA_INTRO,
  BRIGHT_DATA_CODE_SNIPPET,
} from "@/data/brightData";

export default function BrightDataStatsSection() {
  return (
    <section className="bright-stats-section section-dark" id="bright-stats">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Daten-Infrastruktur</span>
          <h2>
            Immobilienmärkte in Echtzeit — powered by Enterprise-Infrastruktur
          </h2>
        </div>

        <div className="bright-stats-row">
          <div className="bright-stat">
            <span className="bright-stat-value">{BRIGHT_DATA_STATS.ips}</span>
            <span className="bright-stat-label">IPs</span>
          </div>
          <div className="bright-stat">
            <span className="bright-stat-value">{BRIGHT_DATA_STATS.countries}</span>
            <span className="bright-stat-label">Länder</span>
          </div>
          <div className="bright-stat">
            <span className="bright-stat-value">{BRIGHT_DATA_STATS.customers}</span>
            <span className="bright-stat-label">Kunden</span>
          </div>
          <div className="bright-stat">
            <span className="bright-stat-value">{BRIGHT_DATA_STATS.datasets}</span>
            <span className="bright-stat-label">Datensätze</span>
          </div>
        </div>

        <div className="bright-stats-content">
          <div className="bright-stats-text fade-in">
            <p>{BRIGHT_DATA_INTRO}</p>
          </div>
          <div className="bright-stats-code fade-in">
            <div className="bright-code-card">
              <pre className="bright-code-pre">
                <code>{BRIGHT_DATA_CODE_SNIPPET}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
