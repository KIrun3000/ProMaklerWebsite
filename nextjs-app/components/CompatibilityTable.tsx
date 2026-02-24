"use client";

import {
  COMPAT_SYSTEMS,
  COMPAT_FEATURES,
  COMPAT_MATRIX,
  COMPAT_FOOTER,
  type FeatureValue,
} from "@/data/crmCompatibility";

function Badge({ value }: { value: FeatureValue }) {
  if (value === true) {
    return <span className="compat-badge compat-badge--yes">✓</span>;
  }
  if (value === "optional") {
    return <span className="compat-badge compat-badge--optional">optional</span>;
  }
  return <span className="compat-badge compat-badge--no">—</span>;
}

export default function CompatibilityTable() {
  return (
    <section className="compat-section compat-section--enhanced section-light" id="compat">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Kompatibilität</span>
          <h2>Funktioniert mit Ihrem System</h2>
        </div>

        <div className="compat-wrapper">
          <div className="compat-table-wrap">
            <table className="compat-table">
              <thead className="compat-table-head">
                <tr>
                  <th scope="col" className="compat-th-system">System</th>
                  {COMPAT_FEATURES.map((f) => (
                    <th key={f.id} scope="col">
                      {f.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPAT_SYSTEMS.map((sys, i) => (
                  <tr key={sys.id} className={`compat-row${i % 2 === 1 ? " compat-row--alt" : ""}`}>
                    <th scope="row" className="compat-row-system">{sys.name}</th>
                    {COMPAT_FEATURES.map((f) => (
                      <td key={f.id}>
                        <Badge value={COMPAT_MATRIX[sys.id][f.id]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="compat-cards">
            {COMPAT_SYSTEMS.map((sys) => (
              <div key={sys.id} className="compat-card compat-card--glass fade-in">
                <h4 className="compat-card-title">{sys.name}</h4>
                <ul className="compat-card-list">
                  {COMPAT_FEATURES.map((f) => (
                    <li key={f.id}>
                      <span className="compat-card-feature">{f.label}</span>
                      <Badge value={COMPAT_MATRIX[sys.id][f.id]} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="compat-footer">
          <a href="#kontakt">{COMPAT_FOOTER}</a>
        </p>
      </div>
    </section>
  );
}
