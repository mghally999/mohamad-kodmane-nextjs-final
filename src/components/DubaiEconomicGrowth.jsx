// DubaiEconomicGrowth.jsx
"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/DubaiEconomicGrowth.module.css";

export default function DubaiEconomicGrowth() {
  const [activeSector, setActiveSector] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sectors = [
    { name: "Trade", icon: "📊", color: "#d7b46a" },
    { name: "Tourism", icon: "🏛️", color: "#b8943c" },
    { name: "Technology", icon: "💻", color: "#9c7a2a" },
    { name: "Headquarters", icon: "🏢", color: "#7d6320" },
    { name: "Finance", icon: "💰", color: "#655021" },
  ];

  const features = [
    "World-class infrastructure",
    "Investment and business-friendly policies",
  ];

  return (
    <section
      className={`${styles.growthSection} ${isVisible ? styles.visible : ""}`}
    >
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.circuitPattern}></div>
      </div>

      <div className={styles.container}>
        {/* Main Header */}
        <div className={styles.mainHeader}>
          <div className={styles.headerVisual}>
            <div className={styles.growthVisual}>
              <div className={styles.globeContainer}>
                <div className={styles.globe}>
                  <div className={styles.globeLine}></div>
                  <div className={styles.globeLine}></div>
                  <div className={styles.globeLine}></div>
                  <div className={styles.globeCore}></div>
                </div>
                <div className={styles.risingParticles}>
                  <div className={styles.particle}></div>
                  <div className={styles.particle}></div>
                  <div className={styles.particle}></div>
                  <div className={styles.particle}></div>
                  <div className={styles.particle}></div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.sectionTitle}>Economic Growth in Dubai</h2>
            <div className={styles.goldDivider}></div>
            <p className={styles.sectionDescription}>
              Dubai is one of the fastest growing economies in the world:
            </p>
          </div>
        </div>

        {/* Diversified Economy Section */}
        <div className={styles.economySection}>
          <div className={styles.economyCard}>
            <div className={styles.economyHeader}>
              <h3 className={styles.economyTitle}>Diversified Economy</h3>
              <div className={styles.economyIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.sectorsGrid}>
              {sectors.map((sector, index) => (
                <div
                  key={index}
                  className={`${styles.sectorItem} ${
                    activeSector === index ? styles.active : ""
                  }`}
                  onMouseEnter={() => setActiveSector(index)}
                  style={{ "--sector-color": sector.color }}
                >
                  <div className={styles.sectorIcon}>
                    <span>{sector.icon}</span>
                    <div className={styles.sectorGlow}></div>
                  </div>
                  <div className={styles.sectorContent}>
                    <h4 className={styles.sectorName}>{sector.name}</h4>
                    <div className={styles.sectorProgress}>
                      <div
                        className={styles.progressBar}
                        style={{ width: `${80 + index * 5}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={styles.featuresSection}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureVisual}>
                <div className={styles.infrastructureIcon}>
                  <div className={styles.building}></div>
                  <div className={styles.building}></div>
                  <div className={styles.building}></div>
                  <div className={styles.road}></div>
                </div>
              </div>
              <div className={styles.featureContent}>
                <h4 className={styles.featureTitle}>
                  World-class Infrastructure
                </h4>
                <p className={styles.featureDescription}>
                  State-of-the-art facilities and connectivity supporting global
                  business operations
                </p>
              </div>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureVisual}>
                <div className={styles.policyIcon}>
                  <div className={styles.document}></div>
                  <div className={styles.checkmark}></div>
                  <div className={styles.policyGlow}></div>
                </div>
              </div>
              <div className={styles.featureContent}>
                <h4 className={styles.featureTitle}>
                  Investment and Business-friendly Policies
                </h4>
                <p className={styles.featureDescription}>
                  Strategic regulations designed to attract and support
                  international investments
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Indicator */}
        <div className={styles.growthIndicator}>
          <div className={styles.indicatorCard}>
            <div className={styles.indicatorHeader}>
              <h4 className={styles.indicatorTitle}>Global Growth Ranking</h4>
              <div className={styles.rankBadge}>
                <span>Top 5</span>
              </div>
            </div>
            <div className={styles.indicatorContent}>
              <div className={styles.growthMeter}>
                <div className={styles.meterTrack}>
                  <div className={styles.meterFill}></div>
                </div>
                <div className={styles.meterLabels}>
                  <span>Global Average</span>
                  <span>Dubai Growth</span>
                </div>
              </div>
              <div className={styles.growthStats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>+4.2%</span>
                  <span className={styles.statLabel}>Global Avg GDP</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>+6.8%</span>
                  <span className={styles.statLabel}>Dubai GDP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
