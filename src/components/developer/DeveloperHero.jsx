"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/developer/DeveloperHero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function DeveloperHero({ developer }) {
  const sectionRef = useRef(null);
  const visualRef = useRef(null);
  const titleRef = useRef(null);
  const logoRef = useRef(null);
  const ornamentRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Master timeline
      const tl = gsap.timeline();

      // Background animation
      tl.fromTo(
        visualRef.current,
        {
          clipPath: "polygon(0% 10%, 100% 5%, 100% 90%, 0% 95%)",
          scale: 1.1,
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scale: 1,
          duration: 1.8,
          ease: "power3.inOut",
        }
      );

      // Logo animation
      tl.fromTo(
        logoRef.current,
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.4)",
        },
        "-=1.2"
      );

      // Title animation
      tl.fromTo(
        titleRef.current,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=1.0"
      );

      // Ornament animation
      tl.fromTo(
        ornamentRef.current,
        {
          scaleX: 0,
          opacity: 0,
        },
        {
          scaleX: 1,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      );

      // Parallax effect
      if (window.innerWidth > 768) {
        gsap.to(visualRef.current, {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [developer]);

  if (!developer) return null;

  return (
    <section ref={sectionRef} className={styles.hero}>
      {/* Geometric Background */}
      <div className={styles.geometricBg}>
        <div className={styles.geometricShape1}></div>
        <div className={styles.geometricShape2}></div>
        <div className={styles.geometricShape3}></div>
      </div>

      <div className={styles.heroContainer}>
        {/* Visual Area */}
        <div ref={visualRef} className={styles.visualArea}>
          <Image
            src={developer.heroImage}
            alt={developer.name}
            fill
            priority
            className={styles.heroImage}
            sizes="(max-width: 1400px) 100vw, 1360px"
          />
          <div className={styles.imageOverlay} />
        </div>

        {/* Content Layer */}
        <div className={styles.contentLayer}>
          {/* Logo */}
          {developer.logo && (
            <div ref={logoRef} className={styles.logoContainer}>
              <Image
                src={developer.logo}
                alt={`${developer.name} Logo`}
                width={120}
                height={60}
                className={styles.logo}
              />
            </div>
          )}

          {/* Title */}
          <div ref={titleRef} className={styles.titleContainer}>
            <h1 className={styles.title}>
              <span className={styles.titleMain}>{developer.name}</span>
              <span className={styles.titleSub}>Developer Portfolio</span>
            </h1>
          </div>

          {/* Ornament */}
          <div ref={ornamentRef} className={styles.titleOrnament}></div>

          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <span>Home</span>
            <span className={styles.breadcrumbDivider}>/</span>
            <span>Developers</span>
            <span className={styles.breadcrumbDivider}>/</span>
            <span className={styles.breadcrumbCurrent}>{developer.name}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
