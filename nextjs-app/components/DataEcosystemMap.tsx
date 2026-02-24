"use client";

import { BRIGHT_DATA_ECOSYSTEM, BRIGHT_DATA_TRUST_STRIP } from "@/data/brightData";

const CENTER_LABEL = "Ihre Website";

export default function DataEcosystemMap() {
  return (
    <section className="ecosystem-section section-dark" id="bright-ecosystem">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Daten-Ökosystem</span>
          <h2>Alle Datenquellen. Eine saubere API.</h2>
        </div>

        <div className="ecosystem-visual fade-in">
          <div className="ecosystem-center">{CENTER_LABEL}</div>
          <div className="ecosystem-nodes">
            {BRIGHT_DATA_ECOSYSTEM.map((node, i) => (
              <div
                key={node.name}
                className="ecosystem-node"
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className="ecosystem-line" />
                <div className="ecosystem-node-box">
                  <span className="ecosystem-node-name">{node.name}</span>
                  <span className={`ecosystem-node-badge ecosystem-node-badge--${node.label.toLowerCase()}`}>
                    {node.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ecosystem-list">
          {BRIGHT_DATA_ECOSYSTEM.map((node) => (
            <div key={node.name} className="ecosystem-list-item">
              <span>{node.name}</span>
              <span className={`ecosystem-node-badge ecosystem-node-badge--${node.label.toLowerCase()}`}>
                {node.label}
              </span>
            </div>
          ))}
        </div>

        <p className="ecosystem-trust">{BRIGHT_DATA_TRUST_STRIP}</p>
      </div>
    </section>
  );
}
