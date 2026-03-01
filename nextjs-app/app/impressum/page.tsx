import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Impressum | ProMakler Digital",
  description: "Impressum und Anbieterkennzeichnung gemäß § 5 DDG",
  robots: {
    index: true,
    follow: true,
  },
};

const h2Style = {
  fontFamily: "var(--font-display)",
  fontSize: "1.5rem",
  color: "var(--cream)",
  marginTop: "2rem",
  marginBottom: "1rem",
} as const;

export default function Impressum() {
  return (
    <>
      <div className="blueprint-bg"></div>

      {/* Navigation */}
      <nav className="nav scrolled" id="nav">
        <Link href="/" className="logo">
          <div className="logo-icon">
            <svg
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2" y="2" width="40" height="40" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <rect x="8" y="8" width="28" height="28" stroke="#c9a962" strokeWidth="1" fill="none" />
              <line x1="22" y1="8" x2="22" y2="36" stroke="#c9a962" strokeWidth="0.75" />
              <line x1="8" y1="22" x2="36" y2="22" stroke="#c9a962" strokeWidth="0.75" />
              <rect x="14" y="14" width="16" height="16" fill="#c9a962" fillOpacity="0.2" />
            </svg>
          </div>
          <span className="logo-text">
            Pro<span>Makler</span>
          </span>
        </Link>

        <Link href="/" className="nav-cta">
          Zurück zur Startseite
        </Link>
      </nav>

      {/* Content */}
      <main
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
          minHeight: "60vh",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              background: "var(--navy)",
              padding: "3rem",
              border: "1px solid rgba(201, 169, 98, 0.3)",
            }}
          >
            <span className="section-tag">Rechtliches</span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                marginBottom: "2rem",
                color: "var(--cream)",
              }}
            >
              Impressum
            </h1>

            <div
              style={{
                color: "rgba(248, 246, 241, 0.8)",
                lineHeight: 1.8,
              }}
            >
              <h2 style={h2Style}>Angaben gemäß § 5 DDG</h2>
              <p>
                ING Bleek GmbH
                <br />
                Rosa-Luxemburg-Straße 17
                <br />
                10178 Berlin
              </p>

              <h2 style={h2Style}>Unternehmensform</h2>
              <p>
                Einzelunternehmen
              </p>

              <h2 style={h2Style}>Vertreten durch</h2>
              <p>Luca Ingenbleek</p>

              <h2 style={h2Style}>Kontakt</h2>
              <p>
                Telefon: +49 176 729 539 96
                <br />
                E-Mail: hi@makler-websites.immo
              </p>

              <h2 style={h2Style}>Umsatzsteuer-ID</h2>
              <p>
                Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
              </p>

              <h2 style={h2Style}>
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>
                Luca Ingenbleek
                <br />
                Rosa-Luxemburg-Straße 17
                <br />
                10178 Berlin
              </p>

              <h2 style={h2Style}>EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--gold)" }}
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>

              <h2 style={h2Style}>
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>

              <h2 style={h2Style}>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>

              <h2 style={h2Style}>Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>

              <h2 style={h2Style}>Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
