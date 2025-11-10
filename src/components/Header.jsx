"use client";
import React from "react";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* BACKGROUND ELEMENTS */}
      <div className={styles.backgroundElements}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.line}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* CREATIVE ASYMMETRICAL LAYOUT */}
          <div className={styles.creativeLayout}>
            {/* LOGO - POSITIONED CREATIVELY */}
            <div className={styles.logoSection}>
              <div className={styles.logoContainer}>
                <img
                  src="/logo.jpg"
                  alt="Mohamad Kodmane Real Estate"
                  className={styles.logoImage}
                />
                <div className={styles.logoGlow}></div>
              </div>
            </div>

            {/* CONTENT - ORGANIC FLOW */}
            <div className={styles.contentFlow}>
              <div className={styles.nameReveal}>
                <h1 className={styles.firstName}>MOHAMAD</h1>
                <h1 className={styles.lastName}>KODMANE</h1>
              </div>

              <div className={styles.titleElegant}>
                <h2 className={styles.subtitle}>
                  Entrepreneur & Real-Estate Investor in Dubai
                </h2>
              </div>

              <div className={styles.descriptionOrganic}>
                <p className={styles.organicText}>
                  At{" "}
                  <strong className={styles.highlight}>
                    Mohamad Kodmane Real Estate Brokerage
                  </strong>
                  , we believe everyone deserves to own property and invest with
                  confidence in Dubai. We guide new buyers{" "}
                  <strong className={styles.highlight}>step-by-step</strong> to
                  purchase{" "}
                  <strong className={styles.highlight}>off-plan</strong>{" "}
                  properties, and we build{" "}
                  <strong className={styles.highlight}>
                    diversified real-estate portfolios
                  </strong>{" "}
                  across ready and under-construction assets—managing them to
                  achieve the best returns.
                </p>

                <p className={styles.organicText}>
                  We support investors in Dubai with{" "}
                  <strong className={styles.highlight}>
                    professional expertise
                  </strong>
                  ,{" "}
                  <strong className={styles.highlight}>
                    full transparency
                  </strong>
                  , and{" "}
                  <strong className={styles.highlight}>precise details</strong>{" "}
                  that ensure optimal investment results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
