// CapitalGrowth.jsx - FINAL FULL WIDTH VERSION
"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/CapitalGrowth.module.css";

export default function CapitalGrowth() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  // Luxury Villa Images from your CDN
  const luxuryImages = [
    {
      url: `${CDN}/hartland/hero-bg.jpg`,
      alt: "Sobha Hartland Luxury Villas",
      title: "Premium Waterfront Villas",
      description: "Prime waterfront addresses with strong rental demand",
    },
    {
      url: `${CDN}/al-sinniyyah-island/hero-bg.jpg`,
      alt: "Al Sinniyyah Island Villas",
      title: "Private Island Living",
      description:
        "Exclusive island developments offering exceptional privacy and serenity",
    },
    {
      url: `${CDN}/massar-3/hero-bg.jpg`,
      alt: "Arada Massar Luxury Villas",
      title: "Gated Community Excellence",
      description:
        "Green, family-focused villa communities leading off-plan demand",
    },
  ];

  // QUALITATIVE METRICS ONLY - No number repetition
  const growthMetrics = [
    {
      value: "Premium",
      label: "Locations",
      description:
        "Prime waterfront and island developments in Dubai's most exclusive areas",
      image: luxuryImages[1].url,
      alt: luxuryImages[1].alt,
    },
    {
      value: "Luxury",
      label: "Amenities",
      description:
        "World-class facilities including pools, gyms, and private beach access",
      image: luxuryImages[0].url,
      alt: luxuryImages[0].alt,
    },
    {
      value: "Investment",
      label: "Returns",
      description:
        "Strong capital growth and rental yields in premium villa communities",
      image: luxuryImages[2].url,
      alt: luxuryImages[2].alt,
    },
    {
      value: "Community",
      label: "Features",
      description:
        "Gated communities with security, greenery, and family-focused living",
      image: `${CDN}/sky-parks/exterior-night-01.jpg`,
      alt: "Luxury Community Living",
    },
  ];

  return (
    <section
      className={`${styles.capitalGrowthSection} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div
            className={styles.heroBackground}
            style={{ backgroundImage: `url('${luxuryImages[0].url}')` }}
          >
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>MARKET INSIGHTS 2024</span>
            </div>
            <h1 className={styles.heroTitle}>
              EXCEPTIONAL CAPITAL GROWTH IN DUBAI VILLAS
            </h1>
            <p className={styles.heroSubtitle}>
              Premium villa communities delivering strong returns and sustained
              appreciation
            </p>
          </div>
        </div>

        {/* Interactive Metrics Gallery - QUALITATIVE ONLY */}
        <div className={styles.metricsGallery}>
          <div className={styles.galleryHeader}>
            <h2 className={styles.galleryTitle}>VILLA MARKET PERFORMANCE</h2>
            <p className={styles.gallerySubtitle}>
              Key drivers of luxury villa investments in Dubai
            </p>
          </div>

          <div className={styles.galleryContainer}>
            <div className={styles.metricsNav}>
              {growthMetrics.map((metric, index) => (
                <button
                  key={index}
                  className={`${styles.navButton} ${
                    activeMetric === index ? styles.active : ""
                  }`}
                  onClick={() => setActiveMetric(index)}
                >
                  <span className={styles.navValue}>{metric.value}</span>
                  <span className={styles.navLabel}>{metric.label}</span>
                </button>
              ))}
            </div>

            <div className={styles.metricsDisplay}>
              <div className={styles.metricImage}>
                <img
                  src={growthMetrics[activeMetric].image}
                  alt={growthMetrics[activeMetric].alt}
                  className={styles.displayImage}
                />
                <div className={styles.metricInfo}>
                  <div className={styles.metricValueLarge}>
                    {growthMetrics[activeMetric].value}
                  </div>
                  <div className={styles.metricLabelLarge}>
                    {growthMetrics[activeMetric].label}
                  </div>
                  <div className={styles.metricDescription}>
                    {growthMetrics[activeMetric].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* UPDATED INTEGRATED SECTION: Full Width Layout */}
        <div className={styles.fullWidthIntegratedSection}>
          <div className={styles.fullWidthIntegratedCard}>
            {/* Top Row - Villa Portfolio Mix + Strong Villa Market Fundamentals */}
            <div className={styles.topRow}>
              {/* Villa Portfolio Mix */}
              <div className={styles.portfolioMix}>
                <div className={styles.mixHeader}>
                  <h3 className={styles.mixTitle}>VILLA PORTFOLIO MIX</h3>
                  <p className={styles.mixSubtitle}>
                    Strategic allocation for maximum returns
                  </p>
                </div>

                <div className={styles.mixBars}>
                  <div className={styles.barItem}>
                    <div className={styles.barLabel}>
                      <span>UNDER CONSTRUCTION</span>
                      <span className={styles.barPercentage}>63%</span>
                    </div>
                    <div className={styles.barContainer}>
                      <div
                        className={styles.barFill}
                        style={{ width: "63%" }}
                      ></div>
                    </div>
                  </div>

                  <div className={styles.barItem}>
                    <div className={styles.barLabel}>
                      <span>READY VILLAS</span>
                      <span className={styles.barPercentage}>37%</span>
                    </div>
                    <div className={styles.barContainer}>
                      <div
                        className={styles.barFill}
                        style={{ width: "37%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className={styles.mixInsight}>
                  <p className={styles.insightText}>
                    <strong>
                      Most investors choose off-plan villas for better capital
                      growth potential
                    </strong>
                  </p>
                </div>
              </div>

              {/* Strong Villa Market Fundamentals */}
              <div className={styles.fundamentalsBlock}>
                <div className={styles.fundamentalsContent}>
                  <h2 className={styles.fundamentalsTitle}>
                    STRONG VILLA MARKET FUNDAMENTALS
                  </h2>

                  <div className={styles.fundamentalsStats}>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>AED 254B</div>
                      <div className={styles.statLabel}>OFF-PLAN SALES</div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>+51%</div>
                      <div className={styles.statLabel}>TRANSACTION GROWTH</div>
                    </div>
                    <div className={styles.statItem}>
                      <div className={styles.statValue}>AED 180K</div>
                      <div className={styles.statLabel}>AVERAGE VILLA RENT</div>
                    </div>
                  </div>

                  <p className={styles.fundamentalsText}>
                    <strong>
                      Dubai's villa market continues to show exceptional growth
                    </strong>{" "}
                    with record-breaking demand across premium communities like
                    Hartland, Al Sinniyyah Island, and Massar.
                  </p>

                  <div className={styles.sourceNote}>
                    <strong>
                      DATA SOURCE: DXB INTERACT MARKET ANALYSIS 2024
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Full Width Dubai Premium Villa Communities Image */}
            <div className={styles.bottomRow}>
              <div className={styles.fullWidthImageContainer}>
                <img
                  src={luxuryImages[1].url}
                  alt="Dubai Premium Villa Communities"
                  className={styles.fullWidthImage}
                />
                <div className={styles.fullWidthImageOverlay}>
                  <div className={styles.fullWidthImageContent}>
                    <h3 className={styles.fullWidthImageTitle}>
                      DUBAI PREMIUM VILLA COMMUNITIES
                    </h3>
                    <p className={styles.fullWidthImageDescription}>
                      Exclusive developments offering luxury living and strong
                      investment potential across prime locations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
