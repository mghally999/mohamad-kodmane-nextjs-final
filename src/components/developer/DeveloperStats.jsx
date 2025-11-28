"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/developer/DeveloperStats.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function DeveloperStats({ developer }) {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      });

      // Logo animation
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

      // Stats animation
      tl.fromTo(
        statsRef.current.children,
        {
          y: 60,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [developer]);

  if (!developer || !developer.stats) return null;

  const { stats } = developer;

  return (
    <section ref={sectionRef} className={styles.stats}>
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
          <div ref={statsRef} className={styles.statsGrid}>
            <StatBox label="Total Projects" value={stats.projects} />
            <StatBox label="Delivered" value={stats.deliveredProjects} />
            <StatBox
              label="Under Construction"
              value={stats.underConstructionProjects}
            />
            <StatBox label="Communities" value={stats.communities} />
            <StatBox label="2024 Sales" value={stats.sales2024} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ label, value }) {
  if (!value) return null;

  return (
    <div className={styles.statBox}>
      <div className={styles.statContent}>
        <div className={styles.statValue}>{value}</div>
        <div className={styles.statLabel}>{label}</div>
      </div>
      <div className={styles.statOrnament}></div>
    </div>
  );
}
