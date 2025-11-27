"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/where-to-live/AreaGuideHero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AreaGuideHero({ regionData }) {
  const sectionRef = useRef(null);
  const bannerRef = useRef(null);
  const titleRef = useRef(null);
  const statsRef = useRef(null);
  const locationRef = useRef(null);
  const floatingTextRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Unique reveal animation - asymmetric clip path
      gsap.fromTo(
        bannerRef.current,
        {
          clipPath: "polygon(0% 15%, 100% 5%, 100% 85%, 0% 95%)",
          scale: 1.1,
          filter: "brightness(0.7) contrast(1.3)",
        },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scale: 1,
          filter: "brightness(1) contrast(1)",
          duration: 2,
          ease: "power3.inOut",
        }
      );

      // Floating text parallax
      floatingTextRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: index % 2 === 0 ? -30 : 30,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.8,
          });
        }
      });

      // Staggered text animations with creative timing
      const tl = gsap.timeline({ delay: 0.8 });
      tl.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
          rotationX: 15,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.4,
          ease: "power3.out",
        }
      )
        .fromTo(
          locationRef.current,
          {
            x: -50,
            opacity: 0,
            scale: 0.8,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out(1.4)",
          },
          "-=0.8"
        )
        .fromTo(
          ".stat-element",
          {
            y: 60,
            opacity: 0,
            scale: 0.3,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            stagger: 0.2,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.5"
        );

      // Advanced parallax with rotation
      if (window.innerWidth > 768) {
        gsap.to(bannerRef.current, {
          y: -100,
          rotation: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [regionData]);

  const addToFloatingRefs = (el) => {
    if (el && !floatingTextRef.current.includes(el)) {
      floatingTextRef.current.push(el);
    }
  };

  if (!regionData) return null;

  return (
    <section ref={sectionRef} className={styles.heroSection}>
      {/* Geometric Background Elements */}
      <div className={styles.geometricBackground}>
        <div className={styles.geometricShape1}></div>
        <div className={styles.geometricShape2}></div>
        <div className={styles.geometricShape3}></div>
      </div>

      <div className={styles.heroContainer}>
        {/* Main Visual Area */}
        <div className={styles.visualArea}>
          <div ref={bannerRef} className={styles.regionBanner}>
            <Image
              src={regionData.heroImage || "/images/area-guide-default.jpg"}
              alt={`${regionData.name} - Dubai Area Guide`}
              fill
              priority
              className={styles.bannerImage}
              sizes="(max-width: 1400px) 100vw, 1360px"
            />
            <div className={styles.imageOverlay} />

            {/* Floating Text Elements */}
            <div className={styles.floatingText} ref={addToFloatingRefs}>
              <span>LUXURY</span>
            </div>
            <div className={styles.floatingText} ref={addToFloatingRefs}>
              <span>PREMIUM</span>
            </div>
            <div className={styles.floatingText} ref={addToFloatingRefs}>
              <span>EXCLUSIVE</span>
            </div>
          </div>
        </div>

        {/* Content Layer */}
        <div className={styles.contentLayer}>
          {/* Title Section */}
          <div className={styles.titleArea}>
            <div ref={titleRef} className={styles.titleContainer}>
              <h1 className={styles.regionTitle}>
                <span className={styles.titleLine1}>
                  {regionData.name.split(" ")[0]}
                </span>
                {regionData.name.split(" ").slice(1).join(" ") && (
                  <span className={styles.titleLine2}>
                    {regionData.name.split(" ").slice(1).join(" ")}
                  </span>
                )}
              </h1>
              <div ref={locationRef} className={styles.locationIndicator}>
                <div className={styles.locationLine}></div>
                <span className={styles.locationText}>
                  {regionData.summary.location}
                </span>
              </div>
            </div>
          </div>

          {/* Stats - Creative Layout */}
          <div className={styles.statsArea}>
            <div ref={statsRef} className={styles.statsContainer}>
              <div className={`${styles.statElement} stat-element`}>
                <div className={styles.statValue}>
                  {regionData.summary.avgBuy}
                </div>
                <div className={styles.statLabel}>AVERAGE PURCHASE</div>
                <div className={styles.statUnderline}></div>
              </div>
              <div className={`${styles.statElement} stat-element`}>
                <div className={styles.statValue}>
                  {regionData.summary.avgRent}
                </div>
                <div className={styles.statLabel}>AVERAGE RENT</div>
                <div className={styles.statUnderline}></div>
              </div>
              <div className={`${styles.statElement} stat-element`}>
                <div className={styles.statValue}>{regionData.summary.roi}</div>
                <div className={styles.statLabel}>ESTIMATED ROI</div>
                <div className={styles.statUnderline}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Scroll Indicator */}
        {/* <div className={styles.scrollCue}>
          <div className={styles.scrollProgress}>
            <div className={styles.progressBar}></div>
          </div>
          <div className={styles.scrollHint}>
            SCROLL TO EXPLORE {regionData.name.toUpperCase()}
          </div>
        </div> */}
      </div>
    </section>
  );
}
