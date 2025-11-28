"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/developer/DeveloperAbout.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function DeveloperAbout({ developer }) {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const particlesRef = useRef([]);
  const hologramRef = useRef(null);
  const [activeGlow, setActiveGlow] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Canvas animation for luxury particles
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrame;

    const resizeCanvas = () => {
      canvas.width = sectionRef.current.offsetWidth;
      canvas.height = sectionRef.current.offsetHeight;
    };

    class LuxuryParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.2 + 0.2;
        this.speedX = Math.random() * 0.2 - 0.1;
        this.speedY = Math.random() * 0.2 - 0.1;
        this.opacity = Math.random() * 0.08 + 0.02;
        this.oscillation = Math.random() * Math.PI * 2;
      }

      update() {
        this.oscillation += 0.02;
        this.x += this.speedX + Math.sin(this.oscillation) * 0.1;
        this.y += this.speedY + Math.cos(this.oscillation) * 0.1;

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

    const particles = Array.from({ length: 25 }, () => new LuxuryParticle());

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
      // Master timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Title character animation with proper spacing
      const titleText = titleRef.current.textContent;
      titleRef.current.innerHTML = titleText
        .split("")
        .map((char) =>
          char === " "
            ? `<span class="${styles.space}">&nbsp;</span>`
            : `<span class="${styles.titleChar}">${char}</span>`
        )
        .join("");

      const titleChars = titleRef.current.querySelectorAll(
        `.${styles.titleChar}`
      );
      const titleSpaces = titleRef.current.querySelectorAll(`.${styles.space}`);

      // Animate characters with elegant entrance
      tl.fromTo(
        titleChars,
        {
          y: 100,
          opacity: 0,
          rotationY: 45,
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1.5,
          stagger: 0.03,
          ease: "power3.out",
        }
      );

      // Animate spaces
      tl.fromTo(
        titleSpaces,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=1.2"
      );

      // Hologram scan effect
      gsap.to(hologramRef.current, {
        y: "100%",
        duration: 4,
        repeat: -1,
        repeatDelay: 3,
        ease: "none",
      });

      // Floating particles animation
      particlesRef.current.forEach((particle, i) => {
        if (!particle) return;
        gsap.to(particle, {
          y: -25,
          rotation: Math.random() * 8 - 4,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.15,
        });
      });

      // Content cards animation
      const contentCards = sectionRef.current.querySelectorAll(
        `.${styles.contentCard}`
      );
      tl.fromTo(
        contentCards,
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.8"
      );
    }, sectionRef);

    // Auto-rotate glow effect
    const glowInterval = setInterval(() => {
      setActiveGlow((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      ctxGSAP.revert();
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
      clearInterval(glowInterval);
    };
  }, []);

  const addToParticlesRef = (el) => {
    if (el && !particlesRef.current.includes(el)) {
      particlesRef.current.push(el);
    }
  };

  if (!developer) return null;

  return (
    <section ref={sectionRef} className={styles.about}>
      {/* Luxury Canvas Background */}
      <canvas ref={canvasRef} className={styles.canvasBackground} />

      {/* Holographic Overlay */}
      <div className={styles.hologramContainer}>
        <div ref={hologramRef} className={styles.hologramScan}></div>
      </div>

      <div className={styles.container}>
        {/* Premium Header Section */}
        <div className={styles.premiumHeader}>
          <div className={styles.titleContainer}>
            <h1 ref={titleRef} className={styles.mainTitle}>
              About {developer.name}
            </h1>
            <div className={styles.titleUnderline}>
              <div className={styles.underlineGlow}></div>
            </div>
          </div>

          {developer.tagline && (
            <div className={styles.taglineSection}>
              <div className={styles.taglineOrnament}></div>
              <p className={styles.tagline}>{developer.tagline}</p>
              <div className={styles.taglineOrnament}></div>
            </div>
          )}
        </div>

        {/* Architectural Separator */}
        <div className={styles.architecturalSeparator}>
          {[...Array(12)].map((_, i) => (
            <div key={i} className={styles.separatorUnit}>
              <div className={styles.separatorDot}></div>
              <div className={styles.separatorLine}></div>
            </div>
          ))}
        </div>

        {/* Luxury Content Grid */}
        <div className={styles.contentGrid}>
          {Array.isArray(developer.about) &&
            developer.about.map((para, idx) => (
              <div
                key={idx}
                className={`${styles.contentCard} ${
                  activeGlow === idx ? styles.activeGlow : ""
                }`}
              >
                {/* Floating Indicator */}
                <div className={styles.cardIndicator}>
                  <div
                    ref={addToParticlesRef}
                    className={styles.floatingParticle}
                  ></div>
                  <span className={styles.cardNumber}>
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card Content */}
                <div className={styles.cardContent}>
                  <p className={styles.paragraph}>{para}</p>
                </div>

                {/* Luxury Border Effects */}
                <div className={styles.cardBorder}>
                  <div className={styles.borderCorner}></div>
                  <div className={styles.borderCorner}></div>
                  <div className={styles.borderCorner}></div>
                  <div className={styles.borderCorner}></div>
                </div>

                {/* Hover Glow Layer */}
                <div className={styles.cardGlow}></div>
              </div>
            ))}
        </div>

        {/* Signature Element */}
        <div className={styles.signatureSection}>
          <div className={styles.signatureLine}></div>
          <div className={styles.signatureText}>
            Crafting Digital Excellence
          </div>
          <div className={styles.signatureLine}></div>
        </div>
      </div>
    </section>
  );
}
