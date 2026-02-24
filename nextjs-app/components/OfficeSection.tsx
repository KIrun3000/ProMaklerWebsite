import { OFFICE } from "@/data/office";

export default function OfficeSection() {
  return (
    <section className="office-section section-light" id="standort">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Standort</span>
          <h2>Unser Büro</h2>
          <p className="section-intro">
            {OFFICE.fullAddress} – {OFFICE.note}
          </p>
        </div>

        <div className="office-grid">
          <div className="office-photo">
            <div className="office-photo-inner">
              <div className="office-placeholder">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--gold)"
                  strokeWidth="1.5"
                  style={{ opacity: 0.4 }}
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
                <span>Bürofoto folgt</span>
              </div>
              {/* Ersetzen durch public/images/office.jpg wenn vorhanden */}
              <img
                src="/images/office.jpg"
                alt="Büro ProMakler Berlin"
                className="office-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
                onLoad={(e) => {
                  (e.target as HTMLImageElement).previousElementSibling?.classList.add("hidden");
                }}
              />
            </div>
          </div>

          <div className="office-map">
            <iframe
              src={OFFICE.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karte: ProMakler Büro Berlin"
            />
          </div>
        </div>

        <div className="office-actions">
          <a
            href={OFFICE.mapsLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            <span>Route in Google Maps öffnen</span>
          </a>
        </div>
      </div>
    </section>
  );
}
