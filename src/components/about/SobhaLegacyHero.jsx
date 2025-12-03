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
      /* MOBILE */
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

      /* DESKTOP */
      gsap.set(bannerRef.current, {
        clipPath: "inset(0% 25% round 12px)",
        scale: 1.05,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      tl.to(bannerRef.current, {
        clipPath: "inset(0% 0% round 12px)",
        scale: 1,
        duration: 2,
        ease: "power2.out",
      });

      tl.to(
        leftTextRef.current,
        {
          y: -60,
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
        },
        0
      );

      tl.fromTo(
        rightRef.current,
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.4, ease: "power3.out" },
        0.01
      );

      tl.to(
        imageOverlayRef.current,
        {
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.25) 100%)",
          duration: 2,
        },
        0
      );

      tl.to(overlayRef.current, { opacity: 0, duration: 1 }, 0);
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
                <span className={styles.badgeNumber}>20</span>
                <span className={styles.badgePlus}>+</span>
              </div>

              <span className={styles.badgeSince}>Since 2006</span>
            </div>

            {/* TEXT */}
            <h5 className={styles.yearsHeading}>
              <span className={styles.yearsLabel}>years of</span>
              <span className={styles.yearsMain}>
                Incredible
                <br />
                Legacy
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
                  alt="Luxury Real Estate"
                  fill
                  priority
                  className={`${styles.bannerImage} ${styles.onlyDesk}`}
                />
              </div>

              <div className={styles.mobileImageContainer}>
                <Image
                  src={MOBILE_IMAGE}
                  alt="Mobile Hero"
                  fill
                  priority
                  className={`${styles.bannerImage} ${styles.onlyMob}`}
                />
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div ref={rightRef} className={styles.bannerDisc}>
            <div className={styles.textContainer}>
              <p className={styles.description}>
                <strong>Mohamad Kodmani</strong> is a leading Dubai-based real
                estate expert known for precision, trust, and consistent
                results.
              </p>
              <p className={styles.description}>
                Through <strong>Mohamad Kodmani Real Estate Brokerage</strong>,
                he empowers investors using data-driven, low-risk methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
