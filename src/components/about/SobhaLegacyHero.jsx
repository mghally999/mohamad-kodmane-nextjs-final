"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/about/SobhaLegacyHero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function SobhaLegacyHero() {
  const sectionRef = useRef(null);
  const bannerRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1000) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=130%",
          scrub: true,
          // ❌ removed pin + anticipatePin to avoid DOM reparenting
        },
      });

      tl.fromTo(
        bannerRef.current,
        { clipPath: "inset(5% 35% round 10px)", scale: 0.96 },
        { clipPath: "inset(0% 0% round 0px)", scale: 1.08, ease: "none" }
      );

      tl.fromTo(
        leftTextRef.current,
        { y: 0, opacity: 1 },
        { y: -80, opacity: 0.25, ease: "none" },
        0
      );

      tl.fromTo(
        rightTextRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, ease: "none" },
        0.05
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      <div className={styles.heroInner}>
        {/* LEFT – SVG 50 + text, same structure as Sobha */}
        <div ref={leftTextRef} className={styles.aboutText}>
          {/* If you have their SVG, put it here */}
          <Image
            src="/images/s-banner-50.svg" // <--- put your 50-years SVG path
            alt="50 years of incredible legacy"
            width={150}
            height={220}
            className={styles.yearsSvg}
          />
          <h5>
            20 years of <br />
            <span>
              Incredible
              <br />
              Legacy
            </span>
          </h5>
        </div>

        {/* CENTER – main banner image (desktop) */}
        <div className={styles.bannerWrapper}>
          <div ref={bannerRef} className={styles.aboutBanner}>
            <Image
              src="/images/about-hero-desktop.jpg" // <--- desktop banner
              alt="About Kodmane Properties"
              fill
              priority
              className={`${styles.bannerImage} ${styles.onlyDesk}`}
              sizes="(max-width: 1400px) 100vw, 1360px"
            />

            {/* mobile image – stays static, no GSAP */}
            <Image
              src="/images/about-hero-mobile.jpg" // <--- mobile banner
              alt="About Kodmane Properties"
              fill
              className={`${styles.bannerImage} ${styles.onlyMob}`}
              sizes="100vw"
            />
          </div>
        </div>

        {/* RIGHT – description paragraph, same placement as .s-banner-disc */}
        <div ref={rightTextRef} className={styles.bannerDisc}>
          <p>
            Mohamad Kodmani Real Estate Brokers was founded in 2006 by a
            first-generation entrepreneur Mr. Mohamad Kodmani, the founder of
            the Group. The entity is a multiproduct group with significant
            investments in the UAE.
          </p>
        </div>
      </div>
    </section>
  );
}
