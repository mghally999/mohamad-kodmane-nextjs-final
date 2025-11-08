"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Header.module.css";

export default function Header() {
  const CDN = "https://luxury-real-estate-media.b-cdn.net";
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <header className={styles.header}>
      {/* Optimized Background Image with Overlay */}
      <div className={styles.heroBackground}>
        <div className={styles.imageContainer}>
          <Image
            src={`${CDN}/aquamont/intro-main.png`}
            alt="Luxury Dubai Real Estate - Aquamont Development"
            fill
            priority
            quality={85}
            sizes="100vw"
            className={`${styles.backgroundImage} ${
              imageLoaded ? styles.imageLoaded : ""
            }`}
            onLoad={() => setImageLoaded(true)}
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <div className={styles.imageOverlay}></div>
        </div>
        {/* Fallback background color */}
        <div className={styles.backgroundFallback}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* CENTERED TITLE SECTION */}
          <div className={styles.titleSection}>
            <h1 className={styles.title}>
              MOHAMAD <span>KODMANE</span>
            </h1>
            <h2 className={styles.subtitle}>
              Entrepreneur & Real-Estate Investor in Dubai
            </h2>
          </div>

          {/* FULL WIDTH TEXT CONTENT */}
          <div className={styles.textContent}>
            <p className={styles.tagline}>
              At <strong>Mohamad Kodmane Real Estate Brokerage</strong>, we
              believe everyone deserves to own property and invest with
              confidence in Dubai. We guide new buyers{" "}
              <strong>step-by-step</strong> to purchase{" "}
              <strong>off-plan</strong> properties, and we build{" "}
              <strong>diversified real-estate portfolios</strong> across ready
              and under-construction assets—managing them to achieve the best
              returns.
            </p>

            <p className={styles.tagline}>
              We support investors in Dubai with{" "}
              <strong>professional expertise</strong>,{" "}
              <strong>full transparency</strong>, and{" "}
              <strong>precise details</strong> that ensure optimal investment
              results.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
