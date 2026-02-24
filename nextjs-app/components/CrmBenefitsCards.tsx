"use client";

import { CRMS } from "@/data/crmIntegration";

const BENEFITS_BAR =
  "Neue Objekte online in unter 4 Stunden · Änderungen sofort übernommen · Nichts doppelt eingeben.";

export default function CrmBenefitsCards() {
  return (
    <section className="crm-benefits-section section-light" id="crm-benefits">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">CRM-Anbindung</span>
          <h2>
            Arbeiten Sie weiter wie bisher — Ihre Website holt sich alles selbst
          </h2>
        </div>

        <div className="crm-benefits-grid">
          {CRMS.map((crm) => (
            <div key={crm.id} className="crm-benefits-card fade-in">
              <div className="crm-benefits-card-logo">
                {crm.logoPath ? (
                  <img
                    src={crm.logoPath}
                    alt={crm.name}
                    width={120}
                    height={40}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove("hidden");
                    }}
                  />
                ) : null}
                <span className={crm.logoPath ? "hidden" : ""}>{crm.name}</span>
              </div>
              <p className="crm-benefits-card-copy">{crm.copySatz}</p>
            </div>
          ))}
        </div>

        <div className="crm-benefits-bar">
          <span>{BENEFITS_BAR}</span>
        </div>
      </div>
    </section>
  );
}
