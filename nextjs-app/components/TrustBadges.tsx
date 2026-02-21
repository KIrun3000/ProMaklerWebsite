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
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "4.9/5 Sterne",
    subtitle: "Kundenbewertung",
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
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "50+ Makler",
    subtitle: "vertrauen uns",
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
