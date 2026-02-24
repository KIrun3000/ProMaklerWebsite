"use client";

import { CRMS, FLOW_LABELS } from "@/data/crmIntegration";

export default function CrmFlowDiagram() {
  return (
    <section className="crm-flow-section section-dark" id="crm-flow">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Integration</span>
          <h2>Ihre Daten fließen — automatisch</h2>
        </div>

        <div className="crm-flow-pipeline">
          <div className="crm-flow-crms">
            {CRMS.map((crm) => (
              <div key={crm.id} className="crm-flow-crm-item">
                {crm.logoPath ? (
                  <img
                    src={crm.logoPath}
                    alt={crm.name}
                    width={80}
                    height={28}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                ) : null}
                <span className={crm.logoPath ? "hidden" : ""}>{crm.name}</span>
              </div>
            ))}
          </div>

          <div className="crm-flow-arrow">
            <svg viewBox="0 0 48 24" fill="none" aria-hidden>
              <line x1="4" y1="12" x2="38" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M34 6l8 6-8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <span className="crm-flow-arrow-label">{FLOW_LABELS.apiLabel}</span>
          </div>

          <div className="crm-flow-sync">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{FLOW_LABELS.syncInterval}</span>
          </div>

          <div className="crm-flow-arrow crm-flow-arrow--small">
            <svg viewBox="0 0 32 24" fill="none" aria-hidden>
              <line x1="4" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="2" />
              <path d="M20 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>

          <div className="crm-flow-astro">Astro</div>

          <div className="crm-flow-arrow crm-flow-arrow--small">
            <svg viewBox="0 0 32 24" fill="none" aria-hidden>
              <line x1="4" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="2" />
              <path d="M20 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>

          <div className="crm-flow-website">
            <div className="crm-flow-website-mock">
              <div className="crm-flow-website-bar">
                <span className="crm-flow-website-dots">
                  <span /><span /><span />
                </span>
                <span className="crm-flow-website-url">ihre-website.de</span>
              </div>
              <div className="crm-flow-website-content">
                <div className="crm-flow-website-placeholder">Live-Website</div>
              </div>
            </div>
          </div>
        </div>

        <ul className="crm-flow-benefits">
          {FLOW_LABELS.benefits.map((benefit) => (
            <li key={benefit}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
