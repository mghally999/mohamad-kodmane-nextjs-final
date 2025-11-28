"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/developer/DeveloperAbout.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function DeveloperAbout({ developer }) {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentCardsRef = useRef([]);

  // Add ref for each content card
  const addToContentCardsRef = (el) => {
    if (el && !contentCardsRef.current.includes(el)) {
      contentCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current || !developer) return;

    const ctx = gsap.context(() => {
      // Simple scroll trigger animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Title animation
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          }
        );
      }

      // Content cards animation
      if (contentCardsRef.current.length > 0) {
        tl.fromTo(
          contentCardsRef.current,
          {
            y: 20,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      contentCardsRef.current = []; // Clean up refs
    };
  }, [developer]);

  if (!developer || !developer.about) return null;

  return (
    <section
      ref={sectionRef}
      className={styles.about}
      style={{ background: "#ffffff" }}
    >
      <div className={styles.container}>
        {/* Premium Header Section */}
        <div className={styles.premiumHeader}>
          <div className={styles.titleContainer}>
            <h1 ref={titleRef} className={styles.mainTitle}>
              About {developer.name}
            </h1>
            <div className={styles.titleUnderline}>
              <div className={styles.underlineGlow}></div>
            </div>
          </div>

          {developer.tagline && (
            <div className={styles.taglineSection}>
              <div className={styles.taglineOrnament}></div>
              <p className={styles.tagline}>{developer.tagline}</p>
              <div className={styles.taglineOrnament}></div>
            </div>
          )}
        </div>

        {/* Architectural Separator */}
        <div className={styles.architecturalSeparator}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={styles.separatorUnit}>
              <div className={styles.separatorDot}></div>
              <div className={styles.separatorLine}></div>
            </div>
          ))}
        </div>

        {/* Luxury Content Grid */}
        <div className={styles.contentGrid}>
          {Array.isArray(developer.about) &&
            developer.about.map((para, idx) => (
              <div
                key={idx}
                ref={addToContentCardsRef}
                className={styles.contentCard}
              >
                {/* Floating Indicator */}
                <div className={styles.cardIndicator}>
                  <span className={styles.cardNumber}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card Content */}
                <div className={styles.cardContent}>
                  <p className={styles.paragraph}>{para}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Signature Element */}
        <div className={styles.signatureSection}>
          <div className={styles.signatureLine}></div>
          <div className={styles.signatureText}>
            Crafting Digital Excellence
          </div>
          <div className={styles.signatureLine}></div>
        </div>
      </div>
    </section>
  );
}
