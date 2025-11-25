"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import styles from "@/styles/projects/ProjectIntro.module.css";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectIntro({ data, projectData, isRTL, locale }) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const cloudsRef = useRef([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Cloud animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    const updateCanvasSize = () => {
      if (canvas.parentElement) {
        const { width, height } = canvas.parentElement.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
      }
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Cloud class
    class Cloud {
      constructor() {
        this.reset();
        this.particles = [];
        this.initParticles();
      }

      initParticles() {
        const particleCount = 6 + Math.floor(Math.random() * 4);
        for (let i = 0; i < particleCount; i++) {
          this.particles.push({
            x: (Math.random() - 0.5) * this.size * 1.2,
            y: (Math.random() - 0.5) * this.size * 0.8,
            size: this.size * (0.4 + Math.random() * 0.3),
          });
        }
      }

      reset() {
        const width = canvas.width;
        const height = canvas.height;

        this.x = width + Math.random() * 100;
        this.y = 60 + Math.random() * (height - 120);
        this.size = 50 + Math.random() * 40;
        this.speed = 0.3 + Math.random() * 0.4;
        this.opacity = 0.08 + Math.random() * 0.12;
      }

      update() {
        this.x -= this.speed;

        if (this.x < -this.size * 2) {
          this.reset();
          this.particles = [];
          this.initParticles();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = "#ffffff";

        // Draw cloud using multiple circles
        ctx.beginPath();
        this.particles.forEach((particle) => {
          ctx.moveTo(this.x + particle.x + particle.size, this.y + particle.y);
          ctx.arc(
            this.x + particle.x,
            this.y + particle.y,
            particle.size,
            0,
            Math.PI * 2
          );
        });
        ctx.fill();

        ctx.restore();
      }
    }

    // Initialize clouds
    if (cloudsRef.current.length === 0) {
      for (let i = 0; i < 5; i++) {
        cloudsRef.current.push(new Cloud());
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw clouds
      cloudsRef.current.forEach((cloud) => {
        cloud.update();
        cloud.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  if (!data || !projectData) return null;

  const intro = data;
  const { project } = projectData;

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  // MAIN IMAGE (right side)
  const mainImage = (intro.propertyImages && intro.propertyImages[0]) || {
    src: intro.imgUrl || `${CDN}/sky-parks/exterior-day-01.jpg`,
    alt: intro.imgAlt || project.name,
  };

  const heading =
    intro.title ||
    intro.heading ||
    (activeIsRTL ? "عنوان المشروع" : "LIVE WHERE THE SKY FEELS LIKE HOME");

  const paragraphs =
    intro.paragraphs && intro.paragraphs.length
      ? intro.paragraphs
      : [
          activeIsRTL
            ? "هنا يمكنك إضافة وصف عربي للمشروع يشبه نص صفحة سوبها الأصلية."
            : "Here you can add a detailed English description of the project similar to the original Sobha page.",
        ];

  const brochures = intro.brochures || [];

  return (
    <section
      className={`${styles.projectIntro} ${isVisible ? styles.visible : ""}`}
      dir={activeIsRTL ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        <div className={styles.row}>
          {/* LEFT: TEXT + DOWNLOAD */}
          <div className={styles.colLeft}>
            <h2 className={styles.heading}>{heading}</h2>

            <div className={styles.textBlock}>
              {paragraphs.map((p, idx) => (
                <p key={idx} className={styles.paragraph}>
                  {p}
                </p>
              ))}
            </div>

            <div className={styles.bottomRow}>
              {/* Download brochure (left side) */}
              {brochures.length > 0 ? (
                brochures.map((brochure, idx) => (
                  <a
                    key={idx}
                    href={brochure.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.downloadBtn}
                  >
                    {brochure.title ||
                      (activeIsRTL ? "تحميل الكتيب" : "DOWNLOAD BROCHURE")}
                  </a>
                ))
              ) : (
                <button type="button" className={styles.downloadBtn}>
                  {activeIsRTL ? "تحميل الكتيب" : "DOWNLOAD BROCHURE"}
                </button>
              )}
            </div>
          </div>

          {/* RIGHT: IMAGE WITH CLOUD EFFECTS */}
          <div className={styles.colRight}>
            <div className={styles.cloudImageContainer}>
              <div className={styles.imageWrap}>
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  fill
                  priority={false}
                  className={styles.cloudShapeImage}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 640px"
                />
              </div>

              {/* Animated Cloud Canvas */}
              <canvas ref={canvasRef} className={styles.cloudCanvas} />

              {/* Cloud Glow Effect */}
              <div className={styles.cloudGlow}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
