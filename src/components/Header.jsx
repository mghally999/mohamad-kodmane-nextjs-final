"use client";
import React from "react";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
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
