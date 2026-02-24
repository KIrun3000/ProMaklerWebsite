"use client";

import { BRIGHT_DATA_PROBLEM_SOLUTION } from "@/data/brightData";

export default function ProblemSolutionCards() {
  return (
    <section className="problem-solution-section section-light" id="bright-problem-solution">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Echtzeit-Daten</span>
          <h2>
            Daten ohne Grenzen — kein Block, kein Captcha, keine Lücken
          </h2>
        </div>

        <div className="problem-solution-grid">
          {BRIGHT_DATA_PROBLEM_SOLUTION.map((item, i) => (
            <div key={i} className="problem-solution-card fade-in">
              <div className="problem-solution-problem">
                <span>{item.problem}</span>
              </div>
              <div className="problem-solution-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </div>
              <div className="problem-solution-solution">
                <span>{item.solution}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="problem-solution-cta">
          <a href="#kontakt" className="btn-primary">
            <span>Demo anfordern — konfiguriert in 15 Min.</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
