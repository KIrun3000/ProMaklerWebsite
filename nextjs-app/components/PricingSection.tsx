import { pricingTiers, pricingFAQs } from "@/data/pricing";
import Link from "next/link";

interface PricingSectionProps {
  showFAQ?: boolean;
  compact?: boolean;
}

export default function PricingSection({
  showFAQ = true,
  compact = false,
}: PricingSectionProps) {
  return (
    <section className="pricing-section" id="preise">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Transparente Preise</span>
          <h2>Investition in Ihre digitale Zukunft</h2>
          <p className="section-intro">
            Keine versteckten Kosten, keine Überraschungen. Wählen Sie das
            Paket, das zu Ihrem Geschäft passt.
          </p>
        </div>

        <div className="pricing-grid">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`pricing-card ${tier.highlighted ? "highlighted" : ""}`}
            >
              {tier.badge && <span className="pricing-badge">{tier.badge}</span>}
              <h3 className="pricing-name">{tier.name}</h3>
              <div className="pricing-price">{tier.priceRange}</div>
              <p className="pricing-description">{tier.description}</p>

              <ul className="pricing-features">
                {tier.features.map((feature, index) => (
                  <li key={index} className="pricing-feature">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/#kontakt" className="pricing-cta">
                {tier.highlighted ? "Jetzt anfragen" : "Mehr erfahren"}
              </Link>
            </div>
          ))}
        </div>

        {showFAQ && !compact && (
          <div className="pricing-faq">
            <h3>Häufige Fragen zu unseren Preisen</h3>
            {pricingFAQs.map((faq, index) => (
              <details key={index} className="faq-item">
                <summary>{faq.frage}</summary>
                <div className="faq-answer">{faq.antwort}</div>
              </details>
            ))}
          </div>
        )}

        {compact && (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/preise" className="btn-secondary">
              <span>Alle Details & FAQ</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
