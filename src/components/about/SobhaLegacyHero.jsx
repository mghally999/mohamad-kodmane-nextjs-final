"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/about/SobhaLegacyHero.module.css";

gsap.registerPlugin(ScrollTrigger);

const CDN = "https://luxury-real-estate-media.b-cdn.net";
const DESKTOP_IMAGE = `${CDN}/aquamont/intro-main.png`;
const MOBILE_IMAGE = `${CDN}/massar-3/hero-bg.jpg`;

export default function SobhaLegacyHero() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const bannerRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightRef = useRef(null);
  const overlayRef = useRef(null);
  const imageOverlayRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* ============== MOBILE ============== */
      if (window.innerWidth < 1000) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1.1,
          },
        });

        tl.fromTo(
          leftTextRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1 }
        )
          .fromTo(
            bannerRef.current,
            { scale: 0.96, opacity: 0 },
            { scale: 1, opacity: 1 },
            "-=0.3"
          )
          .fromTo(
            rightRef.current,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1 },
            "-=0.4"
          );

        return;
      }

      /* ============== DESKTOP ============== */

      // Initial state for the central banner (clip + slight scale)
      gsap.set(bannerRef.current, {
        clipPath: "inset(0% 25% round 12px)",
        scale: 1.05,
      });

      // Banner reveal / clip animation on scroll
      const bannerTl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      bannerTl
        .to(bannerRef.current, {
          clipPath: "inset(0% 0% round 12px)",
          scale: 1,
          duration: 2,
          ease: "power2.out",
        })
        .to(
          imageOverlayRef.current,
          {
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.25) 100%)",
            duration: 2,
          },
          0
        )
        .to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 1,
          },
          0
        );

      // Left text (badge + headline) – fades slightly as user scrolls
      gsap.fromTo(
        leftTextRef.current,
        { y: 0, opacity: 1 },
        {
          y: -60,
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "center top",
            scrub: 1.2,
          },
        }
      );

      // Right text card – separate trigger so longer text can fully appear
      // and is not “rushed” by the banner animation
      gsap.fromTo(
        rightRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 80%", // delayed so the whole card is in view
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      <div ref={overlayRef} className={styles.overlay}></div>

      <div ref={triggerRef} className={styles.stickyWrapper}>
        <div className={styles.heroInner}>
          {/* LEFT HERO BLOCK */}
          <div ref={leftTextRef} className={styles.aboutText}>
            {/* GOLD BADGE */}
            <div className={styles.badgeWrap}>
              <div className={styles.badgeCircle}>
                <span className={styles.badgeNumber}>18</span>
                <span className={styles.badgePlus}>+</span>
              </div>
              <span className={styles.badgeSince}>Since 2006</span>
            </div>

            {/* TEXT - from PDF (English version) */}
            <h5 className={styles.yearsHeading}>
              <span className={styles.yearsLabel}>Years of</span>
              <span className={styles.yearsMain}>
                Innovation
                <br />
                &amp; Expertise
              </span>
            </h5>
          </div>

          {/* CENTER IMAGE */}
          <div className={styles.bannerWrapper}>
            <div ref={bannerRef} className={styles.aboutBanner}>
              <div ref={imageOverlayRef} className={styles.imageOverlay}></div>

              <div className={styles.imageContainer}>
                <Image
                  src={DESKTOP_IMAGE}
                  alt="Mohamad Kodmani - Dubai Real Estate Expert"
                  fill
                  priority
                  className={`${styles.bannerImage} ${styles.onlyDesk}`}
                />
              </div>

              <div className={styles.mobileImageContainer}>
                <Image
                  src={MOBILE_IMAGE}
                  alt="Mohamad Kodmani - Dubai Real Estate"
                  fill
                  priority
                  className={`${styles.bannerImage} ${styles.onlyMob}`}
                />
              </div>
            </div>
          </div>

          {/* RIGHT TEXT – EXACT MEANING FROM THE PDF */}
          <div ref={rightRef} className={styles.bannerDisc}>
            <div className={styles.textContainer}>
              <p className={styles.description}>
                <strong>Mohamad Kodmani</strong> is a real estate investment
                specialist in Dubai with a clear vision and a professional
                approach that combines innovation, experience, and precise
                analysis of market opportunities.
              </p>
              <p className={styles.description}>
                His career spanning contracting, business development, and real
                estate investment has enabled him to help hundreds of investors
                make successful purchase decisions and build profitable real
                estate portfolios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
