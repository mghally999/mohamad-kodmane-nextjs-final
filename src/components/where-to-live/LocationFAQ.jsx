// components/where-to-live/LocationFAQ.jsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/where-to-live/LocationFAQ.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function LocationFAQ({ regionData }) {
  const sectionRef = useRef(null);
  const locationRef = useRef(null);
  const faqRef = useRef(null);
  const titleRefs = useRef([]);
  const locationItemsRef = useRef([]);
  const faqItemsRef = useRef([]);
  const [activeLocation, setActiveLocation] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate titles with character splitting
      titleRefs.current.forEach((title, index) => {
        if (!title) return;

        const titleText = title.textContent;
        title.innerHTML = titleText
          .split("")
          .map((char) => `<span class="${styles.char}">${char}</span>`)
          .join("");

        const chars = title.querySelectorAll(`.${styles.char}`);

        tl.fromTo(
          chars,
          {
            y: 40,
            opacity: 0,
            rotationY: 45,
          },
          {
            y: 0,
            opacity: 1,
            rotationY: 0,
            duration: 0.8,
            stagger: 0.02,
            ease: "power2.out",
          },
          index === 0 ? 0 : "-=0.6"
        );
      });

      // Location card entrance
      tl.fromTo(
        locationRef.current,
        {
          x: -60,
          opacity: 0,
          scale: 0.95,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4"
      );

      // FAQ card entrance
      tl.fromTo(
        faqRef.current,
        {
          x: 60,
          opacity: 0,
          scale: 0.95,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      );

      // Stagger location items
      tl.fromTo(
        locationItemsRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
        },
        "-=0.5"
      );

      // Stagger FAQ items
      tl.fromTo(
        faqItemsRef.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const addToTitleRefs = (el, index) => {
    if (el && !titleRefs.current[index]) {
      titleRefs.current[index] = el;
    }
  };

  const addToLocationItemsRef = (el) => {
    if (el && !locationItemsRef.current.includes(el)) {
      locationItemsRef.current.push(el);
    }
  };

  const addToFaqItemsRef = (el) => {
    if (el && !faqItemsRef.current.includes(el)) {
      faqItemsRef.current.push(el);
    }
  };

  const handleLocationHover = (index) => {
    setActiveLocation(index);
  };

  const handleFaqHover = (index) => {
    setActiveFaq(index);
  };

  return (
    <section ref={sectionRef} className={styles.infoSection}>
      {/* Animated Background */}
      <div className={styles.backgroundCanvas}>
        <div className={styles.floatingOrb1}></div>
        <div className={styles.floatingOrb2}></div>
        <div className={styles.floatingOrb3}></div>
      </div>

      <div className={styles.infoPill}>
        <div className={styles.container}>
          {/* Section Ornament */}
          <div className={styles.sectionOrnament}></div>

          <div className={styles.infoGrid}>
            {/* Location Card - Creative Design */}
            <div ref={locationRef} className={styles.locationCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardHeader}>
                <div className={styles.titleWrapper}>
                  <h3
                    ref={(el) => addToTitleRefs(el, 0)}
                    className={styles.cardTitle}
                  >
                    Location Highlights
                  </h3>
                  <div className={styles.titleTrail}></div>
                </div>
                <div className={styles.cardDivider}>
                  <div className={styles.dividerDot}></div>
                </div>
              </div>

              <div className={styles.locationList}>
                {Object.entries(regionData.locationCards).map(
                  ([location, minutes], index) => (
                    <div
                      key={location}
                      ref={addToLocationItemsRef}
                      className={`${styles.locationItem} ${
                        activeLocation === index ? styles.activeLocation : ""
                      }`}
                      onMouseEnter={() => handleLocationHover(index)}
                      onMouseLeave={() => setActiveLocation(null)}
                    >
                      <div className={styles.locationContent}>
                        <div className={styles.locationIcon}>📍</div>
                        <div className={styles.locationText}>
                          <span className={styles.locationLabel}>
                            {location
                              .replace(/([A-Z])/g, " $1")
                              .replace("Minutes", "")
                              .trim()}
                          </span>
                          <div className={styles.locationLine}></div>
                        </div>
                      </div>
                      <div className={styles.locationValueWrapper}>
                        <span className={styles.locationValue}>
                          {minutes} min
                        </span>
                        <div className={styles.valuePulse}></div>
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Location Card Footer */}
            </div>

            {/* FAQ Card - Interactive Design */}
            <div ref={faqRef} className={styles.faqCard}>
              <div className={styles.cardGlow}></div>
              <div className={styles.cardHeader}>
                <div className={styles.titleWrapper}>
                  <h3
                    ref={(el) => addToTitleRefs(el, 1)}
                    className={styles.cardTitle}
                  >
                    Frequently Asked Questions
                  </h3>
                  <div className={styles.titleTrail}></div>
                </div>
                <div className={styles.cardDivider}>
                  <div className={styles.dividerDot}></div>
                </div>
              </div>

              <div className={styles.faqList}>
                {regionData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    ref={addToFaqItemsRef}
                    className={`${styles.faqItem} ${
                      activeFaq === index ? styles.activeFaq : ""
                    }`}
                    onMouseEnter={() => handleFaqHover(index)}
                    onMouseLeave={() => setActiveFaq(null)}
                  >
                    <div className={styles.faqHeader}>
                      <div className={styles.faqIcon}>❓</div>
                      <h4 className={styles.faqQuestion}>{faq.question}</h4>
                      <div className={styles.faqIndicator}>
                        <div className={styles.indicatorDot}></div>
                      </div>
                    </div>
                    <div className={styles.faqAnswerWrapper}>
                      <div className={styles.answerLine}></div>
                      <p className={styles.faqAnswer}>{faq.answer}</p>
                    </div>
                    <div className={styles.faqHoverEffect}></div>
                  </div>
                ))}
              </div>

              {/* FAQ Card Footer */}
              <div className={styles.cardFooter}>
                <div className={styles.footerNote}>
                  <div className={styles.noteIcon}>🌟</div>
                  <span>Got more questions?</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Ornament */}
          <div className={styles.bottomOrnament}>
            <div className={styles.ornamentLine}></div>
            <div className={styles.ornamentDot}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
