"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";

const CONSENT_KEY = "promakler_consent";

type ConsentState = "pending" | "accepted" | "rejected";

// Helper to read consent from localStorage
function getConsentFromStorage(): ConsentState {
  if (typeof window === "undefined") return "pending";
  const stored = localStorage.getItem(CONSENT_KEY);
  if (stored === "accepted" || stored === "rejected") {
    return stored;
  }
  return "pending";
}

// Subscribe function for useSyncExternalStore (no-op since we don't need live updates)
function subscribe() {
  return () => {};
}

// Server snapshot
function getServerSnapshot(): ConsentState {
  return "pending";
}

export default function ConsentBanner() {
  // Use useSyncExternalStore to avoid the setState-in-effect issue
  const consentState = useSyncExternalStore(
    subscribe,
    getConsentFromStorage,
    getServerSnapshot
  );
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (consentState === "pending") {
      // Show banner after a short delay to avoid layout shift on initial load
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, [consentState]);

  const handleAccept = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setIsVisible(false);
    // Force a re-render by updating the page
    window.location.reload();
  }, []);

  const handleReject = useCallback(() => {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setIsVisible(false);
    window.location.reload();
  }, []);

  // Don't render if consent already given or not yet ready to show
  if (consentState !== "pending" || !isVisible) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "var(--navy)",
        borderTop: "2px solid var(--gold)",
        padding: "1.25rem 2rem",
        boxShadow: "0 -4px 30px rgba(0, 0, 0, 0.3)",
        animation: "slideUp 0.4s ease-out",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "1 1 400px" }}>
          <p
            style={{
              color: "var(--cream)",
              fontSize: "0.95rem",
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            Wir nutzen Cookies, um Ihnen die bestmögliche Erfahrung auf unserer
            Website zu bieten. Weitere Informationen finden Sie in unserer{" "}
            <a
              href="/datenschutz"
              style={{
                color: "var(--gold)",
                textDecoration: "underline",
              }}
            >
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexShrink: 0,
          }}
        >
          <button
            onClick={handleReject}
            style={{
              padding: "0.75rem 1.5rem",
              background: "transparent",
              border: "1px solid rgba(248, 246, 241, 0.3)",
              color: "var(--cream)",
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "var(--cream)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(248, 246, 241, 0.3)";
            }}
          >
            Nur essenzielle
          </button>
          <button
            onClick={handleAccept}
            style={{
              padding: "0.75rem 1.5rem",
              background: "var(--gold)",
              border: "none",
              color: "var(--navy-dark)",
              fontFamily: "var(--font-body)",
              fontSize: "0.85rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 4px 15px rgba(201, 169, 98, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
