import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import { caseStudies, getCaseStudyBySlug } from "@/data/caseStudies";
import { IS_PLACEHOLDER_CONTENT } from "@/data/testimonials";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({
    slug: cs.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Case Study nicht gefunden | ProMakler Digital",
    };
  }

  return {
    title: `${caseStudy.kunde} ${caseStudy.location} | ProMakler Digital`,
    description: caseStudy.ausgangssituation.substring(0, 160),
    openGraph: {
      title: `Case Study: ${caseStudy.kunde} ${caseStudy.location}`,
      description: caseStudy.ausgangssituation.substring(0, 160),
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

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

        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <Link
            href="/referenzen"
            style={{
              color: "var(--cream)",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            Alle Referenzen
          </Link>
          <Link href="/#kontakt" className="nav-cta">
            Projekt anfragen
          </Link>
        </div>
      </nav>

      {/* Case Study Content */}
      <main
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
          minHeight: "60vh",
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <div
            style={{
              marginBottom: "2rem",
              fontSize: "0.9rem",
              color: "rgba(248, 246, 241, 0.6)",
            }}
          >
            <Link
              href="/"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Startseite
            </Link>
            {" / "}
            <Link
              href="/referenzen"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Referenzen
            </Link>
            {" / "}
            <span style={{ color: "var(--gold)" }}>{caseStudy.kunde}</span>
          </div>

          {IS_PLACEHOLDER_CONTENT && (
            <div
              style={{
                background: "rgba(201, 169, 98, 0.15)",
                border: "2px dashed var(--gold)",
                padding: "1rem",
                marginBottom: "2rem",
                textAlign: "center",
                maxWidth: "600px",
              }}
            >
              <p
                style={{
                  color: "var(--gold)",
                  fontWeight: 600,
                  margin: 0,
                  fontSize: "0.9rem",
                }}
              >
                Beispielhafte Darstellung – echte Case Studies folgen in Kürze
              </p>
            </div>
          )}

          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--gold)",
              }}
            >
              {caseStudy.location}
            </span>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "var(--cream)",
                marginTop: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              {caseStudy.kunde}
            </h1>
          </div>

          {/* Results Highlight */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1.5rem",
              marginBottom: "3rem",
              padding: "2rem",
              background: "rgba(201, 169, 98, 0.1)",
              border: "1px solid rgba(201, 169, 98, 0.3)",
            }}
          >
            {caseStudy.ergebnisse.map((result, index) => (
              <div key={index} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 600,
                    color: "var(--gold)",
                  }}
                >
                  {result.value}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(248, 246, 241, 0.7)",
                  }}
                >
                  {result.label}
                </div>
              </div>
            ))}
          </div>

          {/* Content Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
            }}
          >
            {/* Left Column */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "var(--cream)",
                  marginBottom: "1rem",
                }}
              >
                Ausgangssituation
              </h2>
              <p
                style={{
                  color: "rgba(248, 246, 241, 0.8)",
                  lineHeight: 1.8,
                  marginBottom: "2rem",
                }}
              >
                {caseStudy.ausgangssituation}
              </p>

              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  color: "var(--cream)",
                  marginBottom: "1rem",
                }}
              >
                Unsere Lösung
              </h2>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                }}
              >
                {caseStudy.loesung.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
                      color: "rgba(248, 246, 241, 0.8)",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--gold)"
                      strokeWidth="2"
                      style={{ flexShrink: 0, marginTop: "3px" }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Testimonial */}
            <div>
              <div
                style={{
                  background: "var(--navy)",
                  padding: "2.5rem",
                  border: "1px solid rgba(201, 169, 98, 0.3)",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.25rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="var(--gold)"
                      stroke="var(--gold)"
                      strokeWidth="1"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <blockquote
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontStyle: "italic",
                    color: "var(--cream)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                    border: "none",
                    padding: 0,
                  }}
                >
                  &bdquo;{caseStudy.testimonial.zitat}&ldquo;
                </blockquote>
                <div>
                  <div
                    style={{ fontWeight: 600, color: "var(--cream)" }}
                  >
                    {caseStudy.testimonial.autor}
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(248, 246, 241, 0.6)",
                    }}
                  >
                    {caseStudy.testimonial.rolle}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: "4rem",
              padding: "3rem",
              background: "rgba(201, 169, 98, 0.08)",
              border: "1px solid rgba(201, 169, 98, 0.2)",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                color: "var(--cream)",
                marginBottom: "1rem",
              }}
            >
              Ähnliches Projekt gewünscht?
            </h3>
            <p
              style={{
                color: "rgba(248, 246, 241, 0.7)",
                marginBottom: "1.5rem",
              }}
            >
              Lassen Sie uns besprechen, wie wir auch Ihnen zu solchen
              Ergebnissen verhelfen können.
            </p>
            <Link href="/#kontakt" className="btn-primary">
              <span>Kostenloses Erstgespräch</span>
              <svg
                width="20"
                height="20"
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
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
