import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen | ProMakler Digital",
  description:
    "Allgemeine Geschäftsbedingungen für die Nutzung unserer Dienste",
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

export default function AGB() {
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
              Allgemeine Geschäftsbedingungen
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
              {/* § 1 */}
              <h2 style={h2Style}>§ 1 Geltungsbereich</h2>
              <p>
                (1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend
                &ldquo;AGB&rdquo;) gelten für alle Verträge, die zwischen der
                ING Bleek GmbH, Rosa-Luxemburg-Straße 17, 10178 Berlin
                (nachfolgend &ldquo;ProMakler Digital&rdquo; oder
                &ldquo;Auftragnehmer&rdquo;) und dem Kunden (nachfolgend
                &ldquo;Auftraggeber&rdquo;) über die Erstellung und Betreuung
                von Websites sowie damit verbundener digitaler
                Dienstleistungen geschlossen werden.
              </p>
              <p>
                (2) Abweichende, entgegenstehende oder ergänzende Allgemeine
                Geschäftsbedingungen des Auftraggebers werden nur dann
                Vertragsbestandteil, wenn und soweit ProMakler Digital ihrer
                Geltung ausdrücklich schriftlich zugestimmt hat.
              </p>
              <p>
                (3) Diese AGB gelten ausschließlich gegenüber Unternehmern im
                Sinne von § 14 BGB.
              </p>

              {/* § 2 */}
              <h2 style={h2Style}>§ 2 Vertragsschluss</h2>
              <p>
                (1) Darstellungen der Leistungen auf der Website von ProMakler
                Digital stellen kein bindendes Angebot dar, sondern eine
                Aufforderung zur Abgabe eines Angebots.
              </p>
              <p>
                (2) Der Vertrag kommt durch die schriftliche Auftragsbestätigung
                von ProMakler Digital oder durch Beginn der Leistungserbringung
                zustande.
              </p>
              <p>
                (3) ProMakler Digital erstellt auf Basis der
                Kundenbesprechung ein individuelles Angebot. Dieses ist
                14 Tage gültig, sofern nicht anders angegeben.
              </p>

              {/* § 3 */}
              <h2 style={h2Style}>§ 3 Leistungsumfang</h2>
              <p>
                (1) Der Umfang der Leistungen ergibt sich aus dem jeweiligen
                Angebot und der darin enthaltenen Leistungsbeschreibung.
              </p>
              <p>
                (2) Zu den typischen Leistungen von ProMakler Digital gehören:
              </p>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>Konzeption, Design und Entwicklung von Websites</li>
                <li>Integration von CRM-Systemen (z.&thinsp;B. onOffice, FlowFact)</li>
                <li>Suchmaschinenoptimierung (SEO)</li>
                <li>Content-Erstellung und Pflege</li>
                <li>Hosting-Betreuung und technischer Support</li>
                <li>Erstellung von digitalen Exposés und Druckmaterialien</li>
              </ul>
              <p>
                (3) Änderungen oder Erweiterungen des Leistungsumfangs
                bedürfen einer gesonderten schriftlichen Vereinbarung.
                ProMakler Digital erstellt bei Änderungswünschen ein
                ergänzendes Angebot.
              </p>

              {/* § 4 */}
              <h2 style={h2Style}>§ 4 Mitwirkungspflichten des Auftraggebers</h2>
              <p>
                (1) Der Auftraggeber stellt alle für die Durchführung des
                Projekts erforderlichen Inhalte, Materialien und Informationen
                rechtzeitig und in geeignetem Format zur Verfügung.
              </p>
              <p>
                (2) Der Auftraggeber benennt einen Ansprechpartner, der zur
                Entscheidung in allen projektrelevanten Fragen befugt ist.
              </p>
              <p>
                (3) Verzögerungen, die durch fehlende oder verspätete
                Mitwirkung des Auftraggebers entstehen, gehen nicht zulasten
                von ProMakler Digital. Vereinbarte Termine verschieben sich
                entsprechend.
              </p>

              {/* § 5 */}
              <h2 style={h2Style}>§ 5 Vergütung und Zahlung</h2>
              <p>
                (1) Die Vergütung richtet sich nach dem vereinbarten Angebot.
                Alle Preise verstehen sich zuzüglich der gesetzlichen
                Mehrwertsteuer.
              </p>
              <p>
                (2) Die Zahlung erfolgt, soweit nicht anders vereinbart, in
                folgenden Raten:
              </p>
              <ul style={{ paddingLeft: "1.5rem" }}>
                <li>50 % bei Auftragserteilung</li>
                <li>50 % bei Fertigstellung und Übergabe</li>
              </ul>
              <p>
                (3) Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung
                ohne Abzug zahlbar.
              </p>
              <p>
                (4) Bei laufenden Dienstleistungen (z.&thinsp;B. Hosting,
                Wartung) werden die vereinbarten Beträge monatlich oder
                jährlich im Voraus in Rechnung gestellt.
              </p>

              {/* § 6 */}
              <h2 style={h2Style}>§ 6 Abnahme</h2>
              <p>
                (1) Nach Fertigstellung des Projekts wird der Auftraggeber zur
                Abnahme aufgefordert. Die Abnahme hat innerhalb von 14 Tagen
                nach Bereitstellung zu erfolgen.
              </p>
              <p>
                (2) Sofern der Auftraggeber innerhalb der Frist keine
                Beanstandungen mitteilt, gilt das Werk als abgenommen.
              </p>
              <p>
                (3) Unwesentliche Mängel berechtigen nicht zur Verweigerung
                der Abnahme.
              </p>

              {/* § 7 */}
              <h2 style={h2Style}>§ 7 Gewährleistung</h2>
              <p>
                (1) ProMakler Digital gewährleistet, dass die erstellten
                Leistungen dem vereinbarten Leistungsumfang entsprechen.
              </p>
              <p>
                (2) Mängel sind unverzüglich nach Entdeckung schriftlich
                anzuzeigen. ProMakler Digital wird gemeldete Mängel innerhalb
                einer angemessenen Frist nachbessern.
              </p>
              <p>
                (3) Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme.
              </p>
              <p>
                (4) Für Mängel, die durch nachträgliche Änderungen des
                Auftraggebers oder Dritter verursacht werden, übernimmt
                ProMakler Digital keine Gewährleistung.
              </p>

              {/* § 8 */}
              <h2 style={h2Style}>§ 8 Haftung</h2>
              <p>
                (1) ProMakler Digital haftet unbeschränkt für Schäden aus der
                Verletzung des Lebens, des Körpers oder der Gesundheit sowie
                für Vorsatz und grobe Fahrlässigkeit.
              </p>
              <p>
                (2) Bei leichter Fahrlässigkeit haftet ProMakler Digital nur
                bei Verletzung wesentlicher Vertragspflichten
                (Kardinalpflichten). Die Haftung ist in diesem Fall auf den
                vorhersehbaren, vertragstypischen Schaden begrenzt.
              </p>
              <p>
                (3) Die Haftung für mittelbare Schäden, insbesondere
                entgangenen Gewinn, ist bei leichter Fahrlässigkeit
                ausgeschlossen.
              </p>
              <p>
                (4) Die vorstehenden Haftungsbeschränkungen gelten nicht für
                Ansprüche nach dem Produkthaftungsgesetz sowie bei Übernahme
                einer Garantie.
              </p>

              {/* § 9 */}
              <h2 style={h2Style}>§ 9 Urheberrecht und Nutzungsrechte</h2>
              <p>
                (1) ProMakler Digital räumt dem Auftraggeber nach
                vollständiger Bezahlung ein einfaches, zeitlich unbegrenztes
                Nutzungsrecht an den erstellten Werken für den vertraglich
                vereinbarten Zweck ein.
              </p>
              <p>
                (2) Das Urheberrecht verbleibt bei ProMakler Digital bzw.
                den jeweiligen Urhebern. Eine Weitergabe an Dritte oder die
                Nutzung für andere als die vereinbarten Zwecke bedarf der
                vorherigen schriftlichen Zustimmung.
              </p>
              <p>
                (3) ProMakler Digital ist berechtigt, die erstellten Werke
                als Referenz in eigenen Präsentationen, auf der eigenen
                Website und in sozialen Medien zu verwenden, sofern der
                Auftraggeber dem nicht ausdrücklich widerspricht.
              </p>

              {/* § 10 */}
              <h2 style={h2Style}>§ 10 Vertraulichkeit</h2>
              <p>
                Beide Parteien verpflichten sich, alle ihnen im Rahmen der
                Zusammenarbeit bekannt gewordenen vertraulichen Informationen
                der jeweils anderen Partei vertraulich zu behandeln und nicht
                an Dritte weiterzugeben. Diese Verpflichtung besteht auch nach
                Beendigung des Vertragsverhältnisses fort.
              </p>

              {/* § 11 */}
              <h2 style={h2Style}>§ 11 Vertragsdauer und Kündigung</h2>
              <p>
                (1) Projektverträge enden mit der Abnahme des Werks und
                vollständiger Bezahlung.
              </p>
              <p>
                (2) Laufende Verträge (z.&thinsp;B. Hosting, Wartung) haben
                eine Mindestlaufzeit von 12 Monaten und verlängern sich
                automatisch um jeweils 12 Monate, sofern sie nicht mit einer
                Frist von 3 Monaten zum Ende der jeweiligen Vertragslaufzeit
                gekündigt werden.
              </p>
              <p>
                (3) Das Recht zur außerordentlichen Kündigung aus wichtigem
                Grund bleibt unberührt.
              </p>
              <p>
                (4) Kündigungen bedürfen der Textform (E-Mail genügt).
              </p>

              {/* § 12 */}
              <h2 style={h2Style}>§ 12 Datenschutz</h2>
              <p>
                Die Parteien verpflichten sich, die jeweils geltenden
                datenschutzrechtlichen Bestimmungen, insbesondere die DSGVO
                und das BDSG, einzuhalten. Soweit ProMakler Digital im Rahmen
                der Leistungserbringung personenbezogene Daten des
                Auftraggebers verarbeitet, wird ein gesonderter
                Auftragsverarbeitungsvertrag geschlossen.
              </p>

              {/* § 13 */}
              <h2 style={h2Style}>§ 13 Schlussbestimmungen</h2>
              <p>
                (1) Es gilt das Recht der Bundesrepublik Deutschland unter
                Ausschluss des UN-Kaufrechts.
              </p>
              <p>
                (2) Gerichtsstand für alle Streitigkeiten aus dem
                Vertragsverhältnis ist Berlin, sofern der Auftraggeber
                Kaufmann, juristische Person des öffentlichen Rechts oder
                öffentlich-rechtliches Sondervermögen ist.
              </p>
              <p>
                (3) Sollten einzelne Bestimmungen dieses Vertrages unwirksam
                oder undurchführbar sein oder werden, so wird dadurch die
                Wirksamkeit des Vertrages im Übrigen nicht berührt. Die
                Parteien verpflichten sich, anstelle der unwirksamen oder
                undurchführbaren Bestimmung eine wirksame und durchführbare
                Regelung zu treffen, die dem wirtschaftlichen Zweck der
                unwirksamen oder undurchführbaren Bestimmung möglichst nahe
                kommt.
              </p>
              <p>
                (4) Nebenabreden, Änderungen und Ergänzungen bedürfen der
                Textform.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
