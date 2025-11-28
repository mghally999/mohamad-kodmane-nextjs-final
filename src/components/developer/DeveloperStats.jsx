"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/developer/DeveloperStats.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function DeveloperStats({ developer }) {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);
  const logoRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  // Add refs for each stat box
  const addToStatsRef = (el) => {
    if (el && !statsRef.current.includes(el)) {
      statsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (!sectionRef.current || !developer || !developer.stats) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Logo animation
      if (logoRef.current) {
        tl.fromTo(
          logoRef.current,
          {
            scale: 0.8,
            opacity: 0,
            rotation: -5,
          },
          {
            scale: 1,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: "back.out(1.4)",
          }
        );
      }

      // Stats animation
      if (statsRef.current.length > 0) {
        tl.fromTo(
          statsRef.current,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.5"
        );
      }

      setIsReady(true);
    }, sectionRef);

    return () => {
      ctx.revert();
      statsRef.current = []; // Clean up refs
    };
  }, [developer]);

  // Early return if no developer or stats
  if (!developer || !developer.stats) {
    console.log("No developer or stats:", { developer });
    return null;
  }

  const { stats } = developer;

  // Check if we have any stats to display
  const hasStats =
    stats &&
    (stats.projects ||
      stats.deliveredProjects ||
      stats.underConstructionProjects ||
      stats.communities ||
      stats.sales2024);

  if (!hasStats) {
    console.log("No stats data available:", stats);
    return null;
  }

  return (
    <section
      ref={sectionRef}
      className={`${styles.stats} ${isReady ? styles.ready : ""}`}
      style={{ background: "#f8f8f8" }}
    >
      <div className={styles.statsContainer}>
        <div className={styles.statsCard}>
          {/* Developer Logo */}
          {developer.logo && (
            <div ref={logoRef} className={styles.logoSection}>
              <div className={styles.logoContainer}>
                <img
                  src={developer.logo}
                  alt={`${developer.name} Logo`}
                  className={styles.logo}
                />
              </div>
            </div>
          )}

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            {stats.projects && (
              <StatBox
                ref={addToStatsRef}
                label="Total Projects"
                value={stats.projects}
              />
            )}
            {stats.deliveredProjects && (
              <StatBox
                ref={addToStatsRef}
                label="Delivered"
                value={stats.deliveredProjects}
              />
            )}
            {stats.underConstructionProjects && (
              <StatBox
                ref={addToStatsRef}
                label="Under Construction"
                value={stats.underConstructionProjects}
              />
            )}
            {stats.communities && (
              <StatBox
                ref={addToStatsRef}
                label="Communities"
                value={stats.communities}
              />
            )}
            {stats.sales2024 && (
              <StatBox
                ref={addToStatsRef}
                label="2024 Sales"
                value={stats.sales2024}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Forward ref to StatBox component
const StatBox = React.forwardRef(({ label, value }, ref) => {
  if (!value) return null;

  return (
    <div ref={ref} className={styles.statBox}>
      <div className={styles.statContent}>
        <div className={styles.statValue}>{value}</div>
        <div className={styles.statLabel}>{label}</div>
      </div>
      <div className={styles.statOrnament}></div>
    </div>
  );
});

StatBox.displayName = "StatBox";
