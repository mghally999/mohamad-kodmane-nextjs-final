"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/about/BuildingExcellence.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function BuildingExcellenceSection() {
  const { t, locale } = useLanguage();
  const isRTL = locale === "ar";

  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const statRefs = useRef([]);

  const setStatRef = (el, index) => {
    if (el) statRefs.current[index] = el;
  };

  /* ========== ANIMATIONS ========== */
  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left Title Animation
      gsap.fromTo(
        leftRef.current,
        { x: isRTL ? 80 : -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Right Paragraph Animation
      gsap.fromTo(
        rightRef.current,
        { x: isRTL ? -80 : 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );

      // Stats Cards
      gsap.fromTo(
        statRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Counter Numbers
      statRefs.current.forEach((el, index) => {
        const span = el.querySelector("[data-count-span]");
        if (!span) return;

        const target = Number(t(`buildingExcellence.stats.${index}.count`));
        const counter = { value: 0 };

        gsap.to(counter, {
          value: target,
          duration: 1.6,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          onUpdate: () => {
            span.textContent = Math.floor(counter.value);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [locale]);

  /* ========== JSX ========== */
  return (
    <section
      ref={sectionRef}
      className={styles.section}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className={styles.bgPattern} />

      <div className={styles.container}>
        {/* TOP ROW -------------------------------------- */}
        <div className={styles.topRow}>
          {/* LEFT COLUMN (HEADING) */}
          <div ref={leftRef} className={styles.leftCol}>
            <h2 className={styles.heading}>
              {t("buildingExcellence.heading.line1")} <br />
              {t("buildingExcellence.heading.line2")} <br />
              {t("buildingExcellence.heading.line3")}
            </h2>
          </div>

          {/* RIGHT COLUMN (PARAGRAPH) */}
          <div ref={rightRef} className={styles.rightCol}>
            <p
              className={styles.paragraph}
              dangerouslySetInnerHTML={{
                __html: t("buildingExcellence.paragraph"),
              }}
            />
          </div>
        </div>

        {/* STATS GRID ----------------------------------- */}
        <div className={styles.statsGrid}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              ref={(el) => setStatRef(el, i)}
              className={styles.statBoxWrapper}
            >
              <div className={styles.statBox}>
                {/* Top Gradient Line */}
                <div
                  className={`${styles.line} ${
                    i === 0
                      ? styles.linePurple
                      : i === 1
                      ? styles.linePink
                      : styles.lineBlue
                  }`}
                />

                {/* Number & Suffix */}
                <h3 className={styles.statTitle}>
                  <span
                    data-count-span
                    data-count-value={t(`buildingExcellence.stats.${i}.count`)}
                  >
                    {t(`buildingExcellence.stats.${i}.count`)}
                  </span>
                  {t(`buildingExcellence.stats.${i}.suffix`)}
                </h3>

                {/* Label */}
                <div className={styles.statLabel}>
                  {t(`buildingExcellence.stats.${i}.label`)}
                </div>

                {/* Bottom Line */}
                <div
                  className={`${styles.line} ${
                    i === 0
                      ? styles.linePurple
                      : i === 1
                      ? styles.linePink
                      : styles.lineBlue
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomDivider} />
      </div>
    </section>
  );
}
