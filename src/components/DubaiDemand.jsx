// DubaiDemand.jsx - ELEGANT VERSION
"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/DubaiDemand.module.css";

export default function DubaiDemand() {
  const [currentStat, setCurrentStat] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ===== ELEGANT IMAGE INTEGRATION =====
  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  const luxuryImages = {
    background: `${CDN}/sky-parks/exterior-night-01.jpg`,
    demand: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
    supply: `${CDN}/hartland/hero-bg.jpg`,
    growth: `${CDN}/palm-central/exterior-lagoon-01.jpg`,
  };

  const stats = [
    {
      number: "Millions",
      label: "Visitors annually",
      suffix: "+",
      image: `${CDN}/sky-parks/exterior-night-01.jpg`,
    },
    {
      number: "Thousands",
      label: "New investors",
      suffix: "+",
      image: `${CDN}/lumena-alta/hero-bg.jpg`,
    },
    {
      number: "International",
      label: "companies moving their business to the emirate",
      suffix: "",
      image: `${CDN}/riviera/hero-bg.jpg`,
    },
  ];

  return (
    <section
      className={`${styles.demandSection} ${isVisible ? styles.visible : ""}`}
    >
      {/* Enhanced Background with Luxury Image Overlay */}
      <div className={styles.backgroundElements}>
        <div
          className={styles.luxuryBackground}
          style={{ backgroundImage: `url(${luxuryImages.background})` }}
        ></div>
        <div className={styles.backgroundOverlay}></div>
        <div className={styles.gridLines}></div>
      </div>

      <div className={styles.container}>
        {/* Enhanced Main Header */}
        <div className={styles.mainHeader}>
          <div className={styles.headerVisual}>
            <div className={styles.demandVisual}>
              {/* Elegant Image-based Chart */}
              <div className={styles.imageChart}>
                <div className={styles.chartColumn}>
                  <div
                    className={styles.chartImage}
                    style={{ backgroundImage: `url(${luxuryImages.demand})` }}
                  >
                    <div className={styles.chartOverlay} data-type="demand">
                      <span className={styles.chartPercentage}>100%</span>
                      <span className={styles.chartLabel}>Demand</span>
                    </div>
                  </div>
                </div>
                <div className={styles.chartColumn}>
                  <div
                    className={styles.chartImage}
                    style={{ backgroundImage: `url(${luxuryImages.supply})` }}
                  >
                    <div className={styles.chartOverlay} data-type="supply">
                      <span className={styles.chartPercentage}>75%</span>
                      <span className={styles.chartLabel}>Supply</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.chartArrow}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 19V5M12 5l-7 7M12 5l7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.sectionTitle}>
              Continuous Demand for Dubai Real Estate
            </h2>
            <div className={styles.goldDivider}></div>
            <p className={styles.sectionDescription}>Dubai welcomes:</p>
          </div>
        </div>

        {/* Enhanced Stats Section with Image Integration */}
        <div className={styles.statsSection}>
          <div className={styles.statsContainer}>
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${styles.statItem} ${
                  currentStat === index ? styles.active : ""
                }`}
                onMouseEnter={() => setCurrentStat(index)}
              >
                {/* Elegant Image Background for Stats */}
                <div
                  className={styles.statImageBackground}
                  style={{ backgroundImage: `url(${stat.image})` }}
                ></div>

                <div className={styles.statVisual}>
                  <div className={styles.statCircle}>
                    <span className={styles.statNumber}>{stat.number}</span>
                    <span className={styles.statSuffix}>{stat.suffix}</span>
                  </div>
                  <div className={styles.statPulse}></div>
                </div>
                <div className={styles.statContent}>
                  <p className={styles.statLabel}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Result Section */}
        <div className={styles.resultSection}>
          <div className={styles.resultCard}>
            <div className={styles.resultIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.resultContent}>
              <h3 className={styles.resultTitle}>The Result?</h3>
              <p className={styles.resultDescription}>
                Demand higher than supply → Continuous rise in prices and rental
                values
              </p>
            </div>
            <div className={styles.resultGraphic}>
              {/* Enhanced Trend with Luxury Images */}
              <div className={styles.trendVisualization}>
                <div
                  className={styles.trendPoint}
                  style={{
                    backgroundImage: `url(${CDN}/sobha-central/exterior-towers-angled-01.jpg)`,
                  }}
                ></div>
                <div
                  className={styles.trendPoint}
                  style={{
                    backgroundImage: `url(${CDN}/aquamont/intro-main.png)`,
                  }}
                ></div>
                {/* <div
                  className={styles.trendPoint}
                  style={{
                    backgroundImage: `${CDN}/hartland/hero-bg.jpg`,
                  }}
                ></div> */}
                <div className={styles.trendLine}>
                  <div className={styles.trendDot}></div>
                  <div className={styles.trendDot}></div>
                  <div className={styles.trendDot}></div>
                  <div className={styles.trendDot}></div>
                  <div className={styles.trendDot}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
