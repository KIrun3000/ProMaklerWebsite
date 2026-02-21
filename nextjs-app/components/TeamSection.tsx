import { IS_SOLO, soloProfile, teamMembers } from "@/data/team";
import { IS_PLACEHOLDER_CONTENT } from "@/data/testimonials";
import Link from "next/link";

interface TeamSectionProps {
  compact?: boolean;
}

export default function TeamSection({ compact = false }: TeamSectionProps) {
  if (IS_SOLO) {
    return (
      <section className="team-section section-light" id="team">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Über mich</span>
            <h2>Der Kopf hinter ProMakler</h2>
            {IS_PLACEHOLDER_CONTENT && (
              <p className="placeholder-disclaimer">
                * Beispielhafte Darstellung
              </p>
            )}
          </div>

          {compact ? (
            // Compact version for homepage
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "3rem",
                alignItems: "center",
                maxWidth: "800px",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  width: "200px",
                  height: "250px",
                  background:
                    "linear-gradient(135deg, var(--navy) 0%, var(--anthrazit) 100%)",
                  border: "3px solid var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="60"
                  height="60"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="1"
                  style={{ opacity: 0.3 }}
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.75rem",
                    color: "var(--navy)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {soloProfile.name}
                </h3>
                <p
                  style={{
                    color: "var(--gold-dark)",
                    fontWeight: 600,
                    marginBottom: "1rem",
                  }}
                >
                  {soloProfile.titel}
                </p>
                <p
                  style={{
                    color: "var(--anthrazit)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                  }}
                >
                  {soloProfile.erfahrung}
                </p>
                <Link href="/team" className="case-study-cta">
                  Mehr über mich
                  <svg
                    width="16"
                    height="16"
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
          ) : (
            // Full version for /team page
            <div className="solo-profile">
              <div className="solo-image-wrapper">
                <div className="solo-image">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
              <div className="solo-content">
                <h2>{soloProfile.name}</h2>
                <p className="solo-titel">{soloProfile.titel}</p>
                <p className="solo-story">{soloProfile.story}</p>

                <div className="solo-qualifikationen">
                  <h4>Qualifikationen</h4>
                  <ul>
                    {soloProfile.qualifikationen.map((qual, index) => (
                      <li key={index}>
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
                        {qual}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  // Team version (multiple members)
  return (
    <section className="team-section section-light" id="team">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Unser Team</span>
          <h2>Die Menschen hinter ProMakler</h2>
          {IS_PLACEHOLDER_CONTENT && (
            <p className="placeholder-disclaimer">* Beispielhafte Darstellung</p>
          )}
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="team-info">
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.rolle}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-expertise">
                  {member.expertise.map((skill, index) => (
                    <span key={index}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {compact && (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/team" className="case-study-cta">
              Mehr über uns
              <svg
                width="16"
                height="16"
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
