"use client";
import Image from "next/image";
import React from "react";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}></div>
      <div className={styles.particles}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              MOHAMAD <span>KODMANE</span>
            </h1>

            <h2 className={styles.subtitle}>Real Estate Broker</h2>

            <p className={styles.tagline}>
              Dubai’s Premier Real Estate Broker for Luxury Investments and High
              Returns.{" "}
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>₿2.8B+</div>
                <div className={styles.statLabel}>Portfolio Value</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>75+</div>
                <div className={styles.statLabel}>Luxury Projects</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>5+</div>
                <div className={styles.statLabel}>Years Excellence</div>
              </div>
            </div>

            <div className={styles.cta}>
              <button className={`${styles.ctaBtn} ${styles.primary}`}>
                View Portfolio
              </button>
              <button className={`${styles.ctaBtn} ${styles.secondary}`}>
                Start Your Legacy
              </button>
            </div>
          </div>

          <div className={styles.logoSection}>
            <div className={styles.logoWrapper}>
              <Image
                src="/logo.jpg"
                alt="Mohamad Kodmane"
                width={280}
                height={280}
                className={styles.logo}
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid rgba(215,180,106,0.8)",
                  boxShadow:
                    "0 0 60px rgba(215,180,106,0.4), inset 0 0 40px rgba(215,180,106,0.3)",
                  backgroundColor: "#111",
                }}
              />
              <div className={styles.logoGlow}></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
