"use client";

import { useState, FormEvent } from "react";

export default function HeroAudit() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const normalizeUrl = (input: string) => {
    const trimmed = input.trim();
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return `https://${trimmed}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const urlToSend = normalizeUrl(url);

    try {
      const response = await fetch("/api/audit-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: urlToSend, email }),
      });

      if (response.ok) {
        setStatus("success");
        setUrl("");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Audit request error:", error);
      setStatus("error");
    }
  };

  return (
    <section className="hero hero-audit">
      <div className="container hero-audit-container">
        <div className="hero-audit-grid">
          <div className="hero-audit-form-col">
            <div className="hero-content">
              <span className="hero-tag">Kostenlose Website-Analyse</span>
              <h1>
                Website-URL eingeben &amp; innerhalb von 24h einen{" "}
                <span className="highlight">kostenlosen Relaunch-Entwurf</span>{" "}
                erhalten
              </h1>

              <div className="hero-value-prop">
            <div className="value-prop-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--gold)"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div className="value-prop-text">
              <strong>Die Rendite-Rechnung:</strong> Wenn Sie durch Ihre neue
              Website nur <em>einen</em> zusätzlichen Auftrag erhalten – ist Ihre
              digitale Immobilie bereits mit <strong>Faktor 10</strong> rentiert.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="hero-audit-form">
            <div className="form-inputs">
              <div className="form-input-wrapper">
                <svg
                  className="input-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <input
                  type="text"
                  inputMode="url"
                  placeholder="z.B. www.ihre-website.de oder ihre-website.de"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                  className="audit-input"
                />
              </div>

              <div className="form-input-wrapper">
                <svg
                  className="input-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <input
                  type="email"
                  placeholder="Ihre E-Mail für den Entwurf"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="audit-input"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-audit-submit"
              disabled={status === "submitting"}
            >
              <span>
                {status === "submitting"
                  ? "Wird analysiert..."
                  : "Kostenlosen Entwurf anfordern"}
              </span>
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
            </button>

            {status === "success" && (
              <div className="form-message form-success">
                ✓ Perfekt! Wir analysieren Ihre Website und senden Ihnen innerhalb
                von 24 Stunden einen individuellen Relaunch-Entwurf.
              </div>
            )}

            {status === "error" && (
              <div className="form-message form-error">
                ✗ Fehler beim Absenden. Bitte versuchen Sie es erneut oder
                kontaktieren Sie uns direkt.
              </div>
            )}
          </form>

          <div className="hero-trust">
            <div className="trust-badge">
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
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Analyse in 24 Stunden</span>
            </div>
            <div className="trust-badge">
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
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>100% kostenlos &amp; unverbindlich</span>
            </div>
            <div className="trust-badge">
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
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Individueller Entwurf für Ihr Business</span>
            </div>
          </div>
            </div>
          </div>

          <div className="hero-audit-visual-col">
            <div className="hero-audit-process">
              <div className="audit-process-glow" aria-hidden />
              <div className="audit-step" style={{ animationDelay: "0.1s" }}>
                <div className="audit-step-num">01</div>
                <div className="audit-step-content">
                  <strong>URL eingeben</strong>
                  <span>Ihre Website-Adresse in das Formular eintragen</span>
                </div>
              </div>
              <div className="audit-step-connector" aria-hidden>
                <div className="audit-step-connector-line">
                  <div className="audit-connector-dot" />
                </div>
              </div>
              <div className="audit-step" style={{ animationDelay: "0.25s" }}>
                <div className="audit-step-num">02</div>
                <div className="audit-step-content">
                  <strong>KI-Analyse</strong>
                  <span>Technik, Design &amp; Conversion – geprüft in 24h</span>
                </div>
              </div>
              <div className="audit-step-connector" aria-hidden>
                <div className="audit-step-connector-line">
                  <div className="audit-connector-dot" style={{ animationDelay: "0.6s" }} />
                </div>
              </div>
              <div className="audit-step" style={{ animationDelay: "0.4s" }}>
                <div className="audit-step-num">03</div>
                <div className="audit-step-content">
                  <strong>Entwurf erhalten</strong>
                  <span>Ihr persönlicher Relaunch-Entwurf kommt per E-Mail</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
