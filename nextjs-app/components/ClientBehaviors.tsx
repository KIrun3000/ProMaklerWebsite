"use client";

import { useEffect } from "react";

export default function ClientBehaviors() {
  useEffect(() => {
    // Navigation scroll effect
    const nav = document.getElementById("nav");

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (nav) {
        if (currentScroll > 100) {
          nav.classList.add("scrolled");
        } else {
          nav.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Mobile nav toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    const handleNavToggle = () => {
      navLinks?.classList.toggle("active");
    };

    navToggle?.addEventListener("click", handleNavToggle);

    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href && href !== "#") {
        const targetEl = document.querySelector(href);
        if (targetEl) {
          targetEl.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          navLinks?.classList.remove("active");
        }
      }
    };

    anchors.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    // Staggered animation for cards
    document
      .querySelectorAll(".problem-row, .addon-cards, .process-steps, .crm-benefits-grid, .problem-solution-grid")
      .forEach((container) => {
        const children = container.children;
        Array.from(children).forEach((child, index) => {
          (child as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
        });
      });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      navToggle?.removeEventListener("click", handleNavToggle);
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
      observer.disconnect();
    };
  }, []);

  return null;
}
