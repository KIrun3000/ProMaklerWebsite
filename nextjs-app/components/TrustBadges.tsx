import { IS_PLACEHOLDER_CONTENT } from "@/data/testimonials";

const badges = [
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Individuelle Beratung",
    subtitle: "Kostenlose Erstberatung",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "DSGVO-konform",
    subtitle: "100% Datenschutz",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Transparente Preise",
    subtitle: "Faire Konditionen",
  },
  {
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "14 Tage",
    subtitle: "bis zum Launch",
  },
];

export default function TrustBadges() {
  return (
    <section className="trust-badges-section" id="trust">
      <div className="container">
        <div className="trust-badges-container">
          {badges.map((badge, index) => (
            <div key={index} className="trust-badge-item">
              <div className="trust-badge-icon">{badge.icon}</div>
              <div className="trust-badge-text">
                <strong>{badge.title}</strong>
                <span>{badge.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
        {IS_PLACEHOLDER_CONTENT && (
          <p
            style={{
              textAlign: "center",
              marginTop: "1rem",
              fontSize: "0.75rem",
              color: "rgba(248, 246, 241, 0.5)",
              fontStyle: "italic",
            }}
          >
            * Beispielhafte Darstellung
          </p>
        )}
      </div>
    </section>
  );
}
