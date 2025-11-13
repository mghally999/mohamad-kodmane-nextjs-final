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

        {/* OWNER PICTURE AS BACKGROUND ELEMENT */}
        <div className={styles.ownerBackground}>
          <img
            src="/mohamad-kodmane.png"
            alt="Mohamad Kodmane - Real Estate Advisor"
            className={styles.ownerBgImage}
          />
          <div className={styles.ownerBgOverlay}></div>
        </div>
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
                  REAL ESTATE ADVISOR <br /> & INVESTMENT EXPERT IN DUBAI
                </h2>
              </div>

              <div className={styles.descriptionOrganic}>
                <p className={styles.organicText}>
                  At{" "}
                  <strong className={styles.highlight}>
                    Mohamad Kodmane Real Estate
                  </strong>
                  , we believe that everyone deserves the opportunity to own
                  property and invest with confidence in Dubai.
                </p>

                <p className={styles.organicText}>
                  We guide our clients through every stage of property
                  acquisition, from{" "}
                  <strong className={styles.highlight}>
                    off-plan developments
                  </strong>{" "}
                  to{" "}
                  <strong className={styles.highlight}>
                    ready luxury assets
                  </strong>
                  , helping them build strategically{" "}
                  <strong className={styles.highlight}>
                    diversified real estate portfolios
                  </strong>{" "}
                  that deliver consistent and sustainable returns.
                </p>

                <p className={styles.organicText}>
                  With{" "}
                  <strong className={styles.highlight}>
                    deep market expertise
                  </strong>
                  ,{" "}
                  <strong className={styles.highlight}>
                    transparent processes
                  </strong>
                  , and{" "}
                  <strong className={styles.highlight}>
                    data-driven insights
                  </strong>
                  , we empower investors to make informed decisions and achieve
                  optimal growth in Dubai's dynamic property market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
