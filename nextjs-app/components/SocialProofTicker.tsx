"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const tickerMessages = [
  { name: "Michael S.", city: "Berlin", action: "hat gerade angefragt" },
  { name: "Sandra P.", city: "Hamburg", action: "hat ein Projekt gestartet" },
  { name: "Thomas W.", city: "München", action: "hat gerade angefragt" },
  { name: "Kristina H.", city: "Frankfurt", action: "hat ein Exposé erhalten" },
  { name: "Andreas M.", city: "Köln", action: "hat gerade angefragt" },
  { name: "Julia B.", city: "Stuttgart", action: "hat ein Projekt gestartet" },
  { name: "Robert K.", city: "Düsseldorf", action: "hat gerade angefragt" },
  { name: "Maria L.", city: "Leipzig", action: "hat ein Exposé erhalten" },
];

export default function SocialProofTicker() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showMessage = useCallback(() => {
    setIsVisible(true);
    
    // Hide after 4 seconds
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      
      // Show next message after a pause
      timeoutRef.current = setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % tickerMessages.length);
      }, 3000);
    }, 4000);
  }, []);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || isDismissed) {
      return;
    }

    // Initial delay before first message
    timeoutRef.current = setTimeout(() => {
      showMessage();
    }, 5000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isDismissed, showMessage]);

  // When message changes and not first render, show it
  useEffect(() => {
    if (currentMessage === 0 || isDismissed) return;
    
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    
    if (prefersReducedMotion) return;

    // Use timeout to avoid synchronous setState
    timeoutRef.current = setTimeout(() => {
      showMessage();
    }, 0);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentMessage, isDismissed, showMessage]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  if (isDismissed) {
    return null;
  }

  const message = tickerMessages[currentMessage];

  return (
    <div className={`social-proof-ticker ${!isVisible ? "hidden" : ""}`}>
      <button
        className="ticker-close"
        onClick={handleDismiss}
        aria-label="Benachrichtigung schließen"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <div className="ticker-content">
        <div className="ticker-icon">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <div className="ticker-text">
          <strong>{message.name}</strong> aus {message.city}{" "}
          {message.action}
        </div>
      </div>
    </div>
  );
}
