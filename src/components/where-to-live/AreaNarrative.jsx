"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/where-to-live/AreaNarrative.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function AreaNarrative({ regionData }) {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const featuresRef = useRef(null);
  const nutshellRef = useRef(null);
  const neighborhoodRef = useRef(null);

  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !canvasRef.current) return;

    // Canvas animation for subtle floating elements
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrame;

    const resizeCanvas = () => {
      if (!sectionRef.current) return;
      canvas.width = sectionRef.current.offsetWidth;
      canvas.height = sectionRef.current.offsetHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.1 + 0.05;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 30 }, () => new Particle());

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrame = requestAnimationFrame(animateParticles);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animateParticles();

    // GSAP Animations
    const ctxGSAP = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Guard against missing titleRef
      if (!titleRef.current) return;

      // Split title by words and characters while preserving spaces
      const titleText = titleRef.current.textContent || "";
      titleRef.current.innerHTML = titleText
        .split(" ")
        .map((word) =>
          word
            .split("")
            .map((char) => `<span class="${styles.char}">${char}</span>`)
            .join("")
        )
        .join(`<span class="${styles.space}">&nbsp;</span>`);

      const chars = titleRef.current.querySelectorAll(`.${styles.char}`);
      const spaces = titleRef.current.querySelectorAll(`.${styles.space}`);

      // Animate characters
      tl.fromTo(
        chars,
        {
          y: 80,
          opacity: 0,
          rotationX: 45,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.02,
          ease: "power2.out",
        }
      );

      // Animate spaces with slight delay
      tl.fromTo(
        spaces,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.01,
          ease: "power2.out",
        },
        "-=1.0"
      );

      // Subtitle
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          {
            x: -40,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6"
        );
      }

      // Features
      if (featuresRef.current) {
        tl.fromTo(
          featuresRef.current.children,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          },
          "-=0.4"
        );
      }

      // Nutshell section
      if (nutshellRef.current) {
        tl.fromTo(
          nutshellRef.current,
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            opacity: 0,
          },
          {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            duration: 1.2,
            ease: "power2.inOut",
          },
          "-=0.2"
        );
      }

      // Neighborhood cards
      if (neighborhoodRef.current) {
        tl.fromTo(
          neighborhoodRef.current.children,
          {
            y: 80,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
          },
          "-=0.3"
        );
      }
    }, sectionRef);

    return () => {
      ctxGSAP.revert();
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const handleFeatureHover = (index) => {
    setActiveFeature(index);
  };

  const nutshellTitle = regionData.highlights?.nutshellTitle || "In a Nutshell";

  const neighbourhoodOverviewTitle =
    regionData.neighbourhoodTitles?.overview || "Neighborhood Overview";

  const neighbourhoodPropertiesTitle =
    regionData.neighbourhoodTitles?.properties || "Property Landscape";

  return (
    <section ref={sectionRef} className={styles.narrativeSection}>
      {/* Subtle Canvas Background */}
      <canvas ref={canvasRef} className={styles.canvasBackground} />

      <div className={styles.narrativeContainer}>
        {/* Sophisticated Header */}
        <div className={styles.elegantHeader}>
          <div className={styles.titleWrapper}>
            <h1 ref={titleRef} className={styles.mainTitle}>
              {regionData.name}
            </h1>
          </div>

          <div ref={subtitleRef} className={styles.subtitleWrapper}>
            <div className={styles.subtitleAccent}></div>
            <p className={styles.subtitle}>{regionData.hero.subtitle}</p>
          </div>
        </div>

        {/* Refined Features Grid */}
        <div ref={featuresRef} className={styles.featuresGrid}>
          {regionData.highlights.inANutshell.map((point, index) => (
            <div
              key={index}
              className={`${styles.featureCard} ${
                activeFeature === index ? styles.activeFeature : ""
              }`}
              onMouseEnter={() => handleFeatureHover(index)}
            >
              <div className={styles.featureOrnament}></div>
              <div className={styles.featureContent}>
                <div className={styles.featureIndex}>
                  <span>0{index + 1}</span>
                  <div className={styles.indexConnector}></div>
                </div>
                <div className={styles.featureText}>
                  <p>{point}</p>
                </div>
              </div>
              <div className={styles.featureReveal}></div>
            </div>
          ))}
        </div>

        {/* Premium Nutshell Section */}
        <div ref={nutshellRef} className={styles.nutshellSection}>
          <div className={styles.nutshellHeader}>
            <h2 className={styles.nutshellTitle}>{nutshellTitle}</h2>
            <div className={styles.titleEmbellishment}></div>
          </div>
          <div className={styles.nutshellContent}>
            <div className={styles.nutshellTextWrapper}>
              <p className={styles.nutshellText}>
                {regionData.highlights.about}
              </p>
            </div>
          </div>
        </div>

        {/* Sophisticated Neighborhood Cards */}
        <div ref={neighborhoodRef} className={styles.neighborhoodSection}>
          <div className={styles.neighborhoodGrid}>
            <div className={styles.neighborhoodCard}>
              <div className={styles.cardEmbellishment}></div>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  {neighbourhoodOverviewTitle}
                </h3>
                <div className={styles.cardIndicator}>→</div>
              </div>
              <div className={styles.cardContent}>
                <p className={styles.cardText}>
                  {regionData.neighbourhood.communityOverview}
                </p>
              </div>
              <div className={styles.cardHoverLayer}></div>
            </div>

            <div className={styles.neighborhoodCard}>
              <div className={styles.cardEmbellishment}></div>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  {neighbourhoodPropertiesTitle}
                </h3>
                <div className={styles.cardIndicator}>→</div>
              </div>
              <div className={styles.cardContent}>
                <p className={styles.cardText}>
                  {regionData.neighbourhood.propertiesOverview}
                </p>
              </div>
              <div className={styles.cardHoverLayer}></div>
            </div>
          </div>
        </div>

        {/* Refined Scroll Progress */}
        <div className={styles.scrollProgress}>
          <div className={styles.progressTrack}></div>
        </div>
      </div>
    </section>
  );
}
