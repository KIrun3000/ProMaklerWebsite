import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | ProMakler Digital",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO",
  robots: {
    index: true,
    follow: true,
  },
};

const h2Style = {
  fontFamily: "var(--font-display)",
  fontSize: "1.5rem",
  color: "var(--cream)",
  marginTop: "2.5rem",
  marginBottom: "1rem",
} as const;

const h3Style = {
  fontFamily: "var(--font-display)",
  fontSize: "1.15rem",
  color: "var(--gold)",
  marginTop: "1.5rem",
  marginBottom: "0.5rem",
} as const;

export default function Datenschutz() {
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
                marginBottom: "0.5rem",
                color: "var(--cream)",
              }}
            >
              Datenschutzerklärung
            </h1>
            <p style={{ color: "rgba(248,246,241,0.5)", marginBottom: "2rem" }}>
              Stand: Februar 2026
            </p>

            <div
              style={{
                color: "rgba(248, 246, 241, 0.8)",
                lineHeight: 1.8,
              }}
            >
              {/* 1. Verantwortlicher */}
              <h2 style={h2Style}>1. Verantwortlicher</h2>
              <p>
                Verantwortlicher im Sinne der Datenschutz-Grundverordnung
                (DSGVO) ist:
              </p>
              <p>
                ING Bleek GmbH
                <br />
                Rosa-Luxemburg-Straße 17
                <br />
                10178 Berlin
                <br />
                Telefon: +49 176 729 539 96
                <br />
                E-Mail:{" "}
                <a href="mailto:hi@makler-websites.immo" style={{ color: "var(--gold)" }}>
                  hi@makler-websites.immo
                </a>
              </p>
              <p>Vertreten durch: Luca Ingenbleek (Geschäftsführer)</p>

              {/* 2. Überblick */}
              <h2 style={h2Style}>
                2. Überblick der Verarbeitungen
              </h2>
              <p>
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten
                Daten und die Zwecke ihrer Verarbeitung zusammen und verweist
                auf die betroffenen Personen.
              </p>
              <h3 style={h3Style}>Arten der verarbeiteten Daten</h3>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>Bestandsdaten (z.&thinsp;B. Namen, Adressen)</li>
                <li>Kontaktdaten (z.&thinsp;B. E-Mail, Telefonnummern)</li>
                <li>Inhaltsdaten (z.&thinsp;B. Eingaben in Formularen)</li>
                <li>Nutzungsdaten (z.&thinsp;B. besuchte Seiten, Zugriffszeit)</li>
                <li>
                  Meta-/Kommunikationsdaten (z.&thinsp;B. IP-Adressen,
                  Browserinformationen)
                </li>
              </ul>
              <h3 style={h3Style}>Kategorien betroffener Personen</h3>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>Kommunikationspartner</li>
                <li>Nutzer (z.&thinsp;B. Website-Besucher, Interessenten)</li>
              </ul>

              {/* 3. Rechtsgrundlagen */}
              <h2 style={h2Style}>3. Maßgebliche Rechtsgrundlagen</h2>
              <p>
                Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen
                der DSGVO, auf deren Basis wir personenbezogene Daten
                verarbeiten:
              </p>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>
                  <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong> –
                  Die betroffene Person hat ihre Einwilligung in die Verarbeitung
                  gegeben.
                </li>
                <li>
                  <strong>
                    Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs.
                    1 S. 1 lit. b DSGVO)
                  </strong>{" "}
                  – Die Verarbeitung ist für die Erfüllung eines Vertrags oder
                  zur Durchführung vorvertraglicher Maßnahmen erforderlich.
                </li>
                <li>
                  <strong>
                    Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)
                  </strong>{" "}
                  – Die Verarbeitung ist zur Wahrung der berechtigten Interessen
                  des Verantwortlichen oder eines Dritten erforderlich.
                </li>
              </ul>

              {/* 4. Sicherheitsmaßnahmen */}
              <h2 style={h2Style}>4. Sicherheitsmaßnahmen</h2>
              <p>
                Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
                Berücksichtigung des Stands der Technik, der
                Implementierungskosten und der Art, des Umfangs, der Umstände
                und der Zwecke der Verarbeitung sowie der unterschiedlichen
                Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung
                der Rechte und Freiheiten natürlicher Personen geeignete
                technische und organisatorische Maßnahmen, um ein dem Risiko
                angemessenes Schutzniveau zu gewährleisten.
              </p>
              <p>
                Zu den Maßnahmen gehören insbesondere die Sicherung der
                Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch
                Kontrolle des physischen und elektronischen Zugangs zu den
                Daten. Die Übertragung von Daten zwischen Ihrem Browser und
                unserem Server erfolgt stets verschlüsselt über HTTPS/TLS.
              </p>

              {/* 5. Server-Log-Files */}
              <h2 style={h2Style}>
                5. Bereitstellung des Onlineangebots und Server-Logging
              </h2>
              <p>
                Beim Aufrufen unserer Website werden automatisch Informationen
                allgemeiner Natur erfasst und in Server-Log-Files gespeichert.
                Hierzu gehören:
              </p>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>Browsertyp und -version</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL (zuvor besuchte Seite)</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit der Serveranfrage</li>
              </ul>
              <p>
                Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
                Zusammenführung dieser Daten mit anderen Datenquellen wird
                nicht vorgenommen. Wir behalten uns vor, diese Daten
                nachträglich zu prüfen, wenn uns konkrete Anhaltspunkte für
                eine rechtswidrige Nutzung bekannt werden.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Berechtigte Interessen (Art. 6
                Abs. 1 S. 1 lit. f DSGVO). Unser berechtigtes Interesse liegt
                in der Bereitstellung, Sicherheit und Optimierung unseres
                Onlineangebots.
              </p>
              <p>
                <strong>Löschung:</strong> Log-File-Informationen werden
                maximal 30 Tage gespeichert und danach gelöscht. Daten, deren
                weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind
                bis zur endgültigen Klärung des jeweiligen Vorfalls von der
                Löschung ausgenommen.
              </p>

              {/* 6. Kontaktformular */}
              <h2 style={h2Style}>6. Kontaktaufnahme</h2>
              <h3 style={h3Style}>Kontaktformular</h3>
              <p>
                Wenn Sie uns über unser Kontaktformular Anfragen zukommen
                lassen, werden die von Ihnen im Formular angegebenen Daten
                (Name, E-Mail-Adresse, Telefonnummer, Unternehmen, Website-URL,
                Nachricht) zur Bearbeitung Ihrer Anfrage bei uns gespeichert.
              </p>
              <p>
                Nach Absenden des Formulars erhalten Sie eine automatische
                Bestätigungs-E-Mail an die angegebene E-Mail-Adresse. Ihre
                Anfrage wird zusätzlich per E-Mail an unser internes Team
                weitergeleitet.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Vorvertragliche Maßnahmen
                (Art. 6 Abs. 1 S. 1 lit. b DSGVO) bzw. berechtigte Interessen
                (Art. 6 Abs. 1 S. 1 lit. f DSGVO) an der Bearbeitung von
                Anfragen.
              </p>
              <p>
                <strong>Löschung:</strong> Die Daten werden gelöscht, sobald
                sie für die Erreichung des Zwecks ihrer Erhebung nicht mehr
                erforderlich sind. Für personenbezogene Daten aus der
                Kontaktanfrage ist dies dann der Fall, wenn die jeweilige
                Konversation beendet ist und keine gesetzlichen
                Aufbewahrungspflichten entgegenstehen.
              </p>

              <h3 style={h3Style}>Website-Audit-Anfrage</h3>
              <p>
                Über unser Website-Audit-Formular können Sie eine kostenlose
                Analyse Ihrer Website anfordern. Hierbei werden Ihre
                E-Mail-Adresse und die zu analysierende URL erfasst. Die
                technische Analyse wird automatisiert durchgeführt und die
                Ergebnisse per E-Mail an Sie versendet.
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1
                S. 1 lit. a DSGVO) durch aktives Absenden des Formulars.
              </p>

              <h3 style={h3Style}>Kontakt per E-Mail oder Telefon</h3>
              <p>
                Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre
                Angaben zur Bearbeitung der Anfrage und für den Fall von
                Anschlussfragen bei uns gespeichert.
              </p>

              {/* 7. E-Mail-Versand */}
              <h2 style={h2Style}>7. E-Mail-Versand (Resend)</h2>
              <p>
                Für den Versand von transaktionalen E-Mails (z.&thinsp;B.
                Bestätigungen von Kontaktanfragen, Audit-Ergebnisse) nutzen wir
                den Dienst Resend (Resend, Inc., 2261 Market Street #5039,
                San Francisco, CA 94114, USA).
              </p>
              <p>
                Bei der Nutzung werden die für den E-Mail-Versand
                erforderlichen Daten (E-Mail-Adresse, Inhalt der Nachricht) an
                die Server von Resend übermittelt. Resend verarbeitet diese
                Daten in unserem Auftrag auf Grundlage eines
                Auftragsverarbeitungsvertrags (AVV).
              </p>
              <p>
                <strong>Datenübermittlung in Drittländer:</strong> Resend hat
                seinen Sitz in den USA. Die Datenübermittlung erfolgt auf
                Grundlage von Standardvertragsklauseln (Art. 46 Abs. 2 lit. c
                DSGVO).
              </p>
              <p>
                <strong>Rechtsgrundlage:</strong> Berechtigte Interessen (Art. 6
                Abs. 1 S. 1 lit. f DSGVO) an einem zuverlässigen E-Mail-Versand
                bzw. Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b DSGVO).
              </p>

              {/* 8. Hosting */}
              <h2 style={h2Style}>8. Hosting</h2>
              <p>
                Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133,
                Walnut, CA 91789, USA) gehostet. Beim Besuch unserer Website
                werden die oben genannten Server-Log-Daten an Server von Vercel
                übermittelt.
              </p>
              <p>
                Die Nutzung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1
                S. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an
                einer zuverlässigen und performanten Darstellung unserer
                Website. Ein Auftragsverarbeitungsvertrag (AVV) mit Vercel
                wurde abgeschlossen.
              </p>
              <p>
                <strong>Datenübermittlung in Drittländer:</strong> Vercel
                betreibt ein globales Edge-Network. Die Datenverarbeitung kann
                in der EU oder in Drittländern erfolgen. Die Übermittlung
                erfolgt auf Grundlage von Standardvertragsklauseln (Art. 46
                Abs. 2 lit. c DSGVO).
              </p>

              {/* 9. Cookies */}
              <h2 style={h2Style}>9. Cookies</h2>
              <p>
                Unsere Website verwendet ausschließlich technisch notwendige
                Cookies bzw. lokale Speichermechanismen (localStorage). Diese
                dienen dazu, Ihre Cookie-Einwilligung zu speichern und
                grundlegende Website-Funktionen bereitzustellen.
              </p>
              <p>
                Es werden keine Tracking-Cookies, Werbe-Cookies oder Cookies
                von Drittanbietern eingesetzt, sofern Sie nicht ausdrücklich
                in optionale Cookies einwilligen.
              </p>
              <h3 style={h3Style}>Eingesetzte Cookies / Storage</h3>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>
                  <strong>promakler-consent</strong> (localStorage) –
                  Speichert Ihre Cookie-Einwilligung. Wird nicht automatisch
                  gelöscht und kann jederzeit über die Browsereinstellungen
                  entfernt werden.
                </li>
              </ul>
              <p>
                <strong>Rechtsgrundlage:</strong> Berechtigte Interessen (Art. 6
                Abs. 1 S. 1 lit. f DSGVO). Technisch notwendige Cookies
                erfordern nach § 25 Abs. 2 TDDDG keine Einwilligung.
              </p>

              {/* 10. Rechte */}
              <h2 style={h2Style}>
                10. Rechte der betroffenen Personen
              </h2>
              <p>
                Ihnen stehen als betroffene Person nach der DSGVO verschiedene
                Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO
                ergeben:
              </p>
              <h3 style={h3Style}>Widerspruchsrecht (Art. 21 DSGVO)</h3>
              <p>
                <strong>
                  Sie haben das Recht, aus Gründen, die sich aus Ihrer
                  besonderen Situation ergeben, jederzeit gegen die Verarbeitung
                  der Sie betreffenden personenbezogenen Daten, die aufgrund von
                  Art. 6 Abs. 1 S. 1 lit. f DSGVO erfolgt, Widerspruch
                  einzulegen.
                </strong>
              </p>
              <h3 style={h3Style}>Widerrufsrecht (Art. 7 Abs. 3 DSGVO)</h3>
              <p>
                Sie haben das Recht, erteilte Einwilligungen jederzeit zu
                widerrufen. Der Widerruf der Einwilligung berührt nicht die
                Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf
                erfolgten Verarbeitung.
              </p>
              <h3 style={h3Style}>Auskunftsrecht (Art. 15 DSGVO)</h3>
              <p>
                Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob
                betreffende Daten verarbeitet werden, und auf Auskunft über
                diese Daten sowie auf weitere Informationen und Kopie der Daten.
              </p>
              <h3 style={h3Style}>Recht auf Berichtigung (Art. 16 DSGVO)</h3>
              <p>
                Sie haben das Recht, die Vervollständigung der Sie betreffenden
                Daten oder die Berichtigung der Sie betreffenden unrichtigen
                Daten zu verlangen.
              </p>
              <h3 style={h3Style}>
                Recht auf Löschung und Einschränkung (Art. 17, 18 DSGVO)
              </h3>
              <p>
                Sie haben das Recht, zu verlangen, dass die Sie betreffenden
                Daten unverzüglich gelöscht werden, bzw. alternativ die
                Einschränkung der Verarbeitung der Daten zu verlangen.
              </p>
              <h3 style={h3Style}>
                Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
              </h3>
              <p>
                Sie haben das Recht, die Sie betreffenden Daten, die Sie uns
                bereitgestellt haben, in einem strukturierten, gängigen und
                maschinenlesbaren Format zu erhalten oder deren Übermittlung
                an einen anderen Verantwortlichen zu fordern.
              </p>
              <h3 style={h3Style}>
                Beschwerderecht bei einer Aufsichtsbehörde
              </h3>
              <p>
                Sie haben das Recht, sich bei einer Aufsichtsbehörde zu
                beschweren. Die für uns zuständige Aufsichtsbehörde ist:
              </p>
              <p>
                Berliner Beauftragte für Datenschutz und Informationsfreiheit
                <br />
                Friedrichstr. 219
                <br />
                10969 Berlin
                <br />
                Telefon: +49 30 13889-0
                <br />
                E-Mail: mailbox@datenschutz-berlin.de
              </p>

              {/* 11. Änderungen */}
              <h2 style={h2Style}>11. Änderung dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                damit sie stets den aktuellen rechtlichen Anforderungen
                entspricht oder um Änderungen unserer Leistungen in der
                Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt
                dann die neue Datenschutzerklärung.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
