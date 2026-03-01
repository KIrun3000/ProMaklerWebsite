import Link from "next/link";
import TestimonialCarousel from "./TestimonialCarousel";

export default function SiteFooter() {
  return (
    <>
      {/* Testimonials Section - appears on all pages above footer */}
      <TestimonialCarousel />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
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
              <p>
                Digitale Projektentwicklung für Immobilienmakler. Wir bauen
                Websites, die verkaufen.
              </p>
            </div>

            <div className="footer-column">
              <h4>Leistungen</h4>
              <ul>
                <li>
                  <a href="#angebot">Website-Relaunch</a>
                </li>
                <li>
                  <a href="#angebot">CRM-Integration</a>
                </li>
                <li>
                  <a href="#angebot">Bewertungs-Tool</a>
                </li>
                <li>
                  <Link href="/preise">Preise</Link>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Unternehmen</h4>
              <ul>
                <li>
                  <Link href="/team">Über uns</Link>
                </li>
                <li>
                  <a href="#prozess">Prozess</a>
                </li>
                <li>
                  <a href="#kontakt">Kontakt</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Kontakt</h4>
              <ul>
                <li>
                  <a href="mailto:hi@makler-websites.immo">hi@makler-websites.immo</a>
                </li>
                <li>
                  <a href="tel:+4917672953996">+49 176 729 539 96</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 ProMakler Digital. Alle Rechte vorbehalten.</span>
            <div className="footer-legal">
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
              <Link href="/agb">AGB</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
