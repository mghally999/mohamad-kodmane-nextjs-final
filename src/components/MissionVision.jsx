"use client";
import React from "react";
import styles from "@/styles/MissionVision.module.css";

export default function MissionVision() {
  return (
    <section className={styles.missionVision}>
      <div className={styles.backgroundElements}>
        <div className={styles.goldOrb}></div>
        <div className={styles.diamondGrid}></div>
      </div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>
            My <span className={styles.accent}>Mission</span> &{" "}
            <span className={styles.accent}>Vision</span>
          </h2>
          <div className={styles.titleDivider}></div>
        </div>

        {/* Content Grid */}
        <div className={styles.contentGrid}>
          {/* Mission */}
          <div className={styles.missionCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <div className={styles.crownIcon}>🏙️</div>
              </div>
              <h3 className={styles.cardTitle}>Mission</h3>
            </div>

            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                To connect visionary buyers with Dubai’s most powerful
                investment properties—where{" "}
                <span className={styles.highlight}>luxury</span> meets{" "}
                <span className={styles.highlight}>long-term growth</span>.
                Every deal I close is built on trust, precision, and a
                commitment to deliver unmatched results.
              </p>

              <div className={styles.missionPoints}>
                <div className={styles.point}>
                  <span className={styles.pointIcon}>✓</span>
                  <span>Secure premium real estate with confidence</span>
                </div>
                <div className={styles.point}>
                  <span className={styles.pointIcon}>✓</span>
                  <span>Maximize ROI through data-driven strategy</span>
                </div>
                <div className={styles.point}>
                  <span className={styles.pointIcon}>✓</span>
                  <span>Build lasting partnerships—not one-time sales</span>
                </div>
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className={styles.visionCard}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <div className={styles.visionIcon}>🌇</div>
              </div>
              <h3 className={styles.cardTitle}>Vision</h3>
            </div>

            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                To become Dubai’s most trusted real-estate strategist—turning
                <span className={styles.highlight}> properties</span> into{" "}
                <span className={styles.highlight}>power moves</span> for elite
                investors who expect nothing less than perfection.
              </p>

              <div className={styles.visionAspirations}>
                <div className={styles.aspiration}>
                  <div className={styles.aspirationNumber}>01</div>
                  <div className={styles.aspirationText}>
                    Set the gold standard for personalized real estate advisory.
                  </div>
                </div>
                <div className={styles.aspiration}>
                  <div className={styles.aspirationNumber}>02</div>
                  <div className={styles.aspirationText}>
                    Build wealth ecosystems for clients who think beyond today.
                  </div>
                </div>
                <div className={styles.aspiration}>
                  <div className={styles.aspirationNumber}>03</div>
                  <div className={styles.aspirationText}>
                    Elevate Dubai’s property market to global dominance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className={styles.philosophy}>
          <div className={styles.philosophyContent}>
            <h4 className={styles.philosophyTitle}>My Philosophy</h4>
            <p className={styles.philosophyText}>
              “Luxury isn’t sold—it’s earned. Every client I work with deserves
              clarity, exclusivity, and results that speak louder than
              promises.”
            </p>
            <div className={styles.signature}>— Mohamad Kodmane</div>
          </div>
        </div>
      </div>
    </section>
  );
}
