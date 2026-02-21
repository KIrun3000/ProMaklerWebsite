"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { testimonials, IS_PLACEHOLDER_CONTENT } from "@/data/testimonials";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = testimonials.length;

  const goToSlide = useCallback((index: number) => {
    const newIndex = ((index % totalSlides) + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);
    if (trackRef.current) {
      const slideWidth = trackRef.current.offsetWidth;
      trackRef.current.scrollTo({
        left: newIndex * slideWidth,
        behavior: "smooth",
      });
    }
  }, [totalSlides]);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Auto-rotation with pause on hover/focus
  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, nextSlide]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  // Render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill={i < rating ? "var(--gold)" : "none"}
        stroke="var(--gold)"
        strokeWidth="1.5"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ));
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Kundenstimmen</span>
          <h2>Was unsere Kunden sagen</h2>
          {IS_PLACEHOLDER_CONTENT && (
            <p className="placeholder-disclaimer">
              * Beispielhafte Darstellung – echte Kundenstimmen folgen in Kürze
            </p>
          )}
        </div>

        <div
          className="testimonial-carousel"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Kundenstimmen Karussell"
        >
          <button
            className="carousel-btn carousel-btn-prev"
            onClick={prevSlide}
            aria-label="Vorherige Kundenstimme"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="testimonial-track" ref={trackRef}>
            {testimonials.map((t, index) => (
              <div
                key={t.id}
                className="testimonial-slide"
                aria-hidden={index !== currentIndex}
              >
                <div className="testimonial-card">
                  <div className="testimonial-stars">{renderStars(t.rating)}</div>
                  <blockquote className="testimonial-quote">
                    &bdquo;{t.zitat}&ldquo;
                  </blockquote>
                  <div className="testimonial-author">
                    <span className="testimonial-name">{t.autor}</span>
                    <span className="testimonial-info">
                      {t.firma}, {t.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn carousel-btn-next"
            onClick={nextSlide}
            aria-label="Nächste Kundenstimme"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dots indicator */}
        <div className="carousel-dots" role="tablist">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
              aria-label={`Gehe zu Kundenstimme ${index + 1}`}
              aria-selected={index === currentIndex}
              role="tab"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
