"use client";

import { useState, FormEvent } from "react";
import { OFFICE } from "@/data/office";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="contact-form-section section-dark" id="kontakt">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Kontakt</span>
          <h2>Lassen Sie uns über Ihr Projekt sprechen</h2>
          <p className="section-intro">
            Kostenlose Erstberatung – Wir melden uns innerhalb von 24 Stunden.
          </p>
        </div>

        <div className="contact-form-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Ihr Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Unternehmen</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Ihre Firma"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">
                  E-Mail <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ihre@email.de"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+49 ..."
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="website">Aktuelle Website (falls vorhanden)</label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://ihre-website.de"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Nachricht <span className="required">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Erzählen Sie uns von Ihrem Projekt..."
              />
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={status === "submitting"}
            >
              <span>
                {status === "submitting" ? "Wird gesendet..." : "Anfrage senden"}
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
                ✓ Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir
                melden uns innerhalb von 24 Stunden bei Ihnen.
              </div>
            )}

            {status === "error" && (
              <div className="form-message form-error">
                ✗ Leider ist ein Fehler aufgetreten. Bitte versuchen Sie es
                erneut oder kontaktieren Sie uns direkt unter{" "}
                <a href="mailto:kontakt@promakler.de">kontakt@promakler.de</a>
              </div>
            )}
          </form>

          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h4>Telefon</h4>
                <a href="tel:+4917672953996">+49 176 729 539 96</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h4>E-Mail</h4>
                <a href="mailto:kontakt@promakler.de">kontakt@promakler.de</a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h4>Reaktionszeit</h4>
                <p>Innerhalb von 24 Stunden</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-map-block">
          <p className="contact-map-address">{OFFICE.fullAddress}</p>
          <div className="contact-map-embed">
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
          <a
            href={OFFICE.mapsLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-map-link"
          >
            Route in Google Maps öffnen
          </a>
        </div>
      </div>
    </section>
  );
}
