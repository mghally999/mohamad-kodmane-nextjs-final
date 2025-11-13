// DubaiDemand.jsx - LUXURY BRAND VERSION WITH IMAGE FIXES
"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/DubaiDemand.module.css";

export default function DubaiDemand() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ===== LUXURY IMAGE INTEGRATION =====
  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  // Test if images exist, provide fallbacks if they don't
  const luxuryImages = {
    background: `${CDN}/sky-parks/exterior-night-01.jpg`,
    visitors: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
    investors: `${CDN}/hartland/hero-bg.jpg`,
    corporations: `${CDN}/palm-central/exterior-lagoon-01.jpg`,
  };

  // Fallback images in case CDN images don't load
  const fallbackImages = {
    background:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&h=800&fit=crop",
    visitors:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
    investors:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    corporations:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  };

  const handleImageError = (imageKey) => {
    console.log(`Image failed to load: ${luxuryImages[imageKey]}`);
    setImageErrors((prev) => ({ ...prev, [imageKey]: true }));
  };

  const getImageSrc = (imageKey) => {
    return imageErrors[imageKey]
      ? fallbackImages[imageKey]
      : luxuryImages[imageKey];
  };

  // Log image URLs for debugging
  useEffect(() => {
    console.log("Image URLs:", luxuryImages);
  }, []);

  return (
    <section
      className={`${styles.demandSection} ${isVisible ? styles.visible : ""}`}
    >
      {/* Luxury Background Elements */}
      <div className={styles.backgroundElements}>
        <div
          className={styles.luxuryBackground}
          style={{ backgroundImage: `url(${getImageSrc("background")})` }}
          onError={() => handleImageError("background")}
        ></div>
        <div className={styles.backgroundOverlay}></div>
        <div className={styles.goldAccents}>
          <div className={styles.accentLine}></div>
          <div className={styles.accentDot}></div>
          <div className={styles.accentLine}></div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Luxury Main Header */}
        <div className={styles.mainHeader}>
          <div className={styles.headerBadge}>
            <span>MARKET ANALYSIS</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Continuous Demand for Dubai Real Estate
          </h2>
          <div className={styles.titleDivider}></div>
          <p className={styles.sectionDescription}>
            Dubai's property market continues to witness unprecedented global
            demand, supported by record-breaking visitor numbers, new investors,
            and international corporations relocating their headquarters to the
            emirate.
          </p>
        </div>
        {/* Luxury Dubai Welcomes Section */}
        <div className={styles.dubaiWelcomes}>
          <div className={styles.welcomesHeader}>
            <h3 className={styles.welcomesTitle}>Dubai Welcomes:</h3>
            <div className={styles.welcomesDivider}></div>
          </div>

          <div className={styles.welcomesGrid}>
            {/* Visitors Luxury Card */}
            <div className={styles.welcomeCard}>
              <div className={styles.cardVisual}>
                <div className={styles.cardImageContainer}>
                  <img
                    src={getImageSrc("visitors")}
                    alt="Millions of Visitors"
                    className={styles.cardImage}
                    onError={() => handleImageError("visitors")}
                    onLoad={() =>
                      console.log("Visitors image loaded successfully")
                    }
                  />
                  <div className={styles.cardOverlay}></div>
                </div>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>
                  Millions of Visitors Annually
                </h4>
                <p className={styles.cardDescription}>
                  A world tourism hub that fuels short-term rental demand and
                  boosts ROI for investors.
                </p>
                <div className={styles.cardStat}>
                  <span className={styles.statNumber}>25M+</span>
                  <span className={styles.statLabel}>Annual Visitors</span>
                </div>
              </div>
            </div>

            {/* Investors Luxury Card */}
            <div className={styles.welcomeCard}>
              <div className={styles.cardVisual}>
                <div className={styles.cardImageContainer}>
                  <img
                    src={getImageSrc("investors")}
                    alt="Thousands of New Investors"
                    className={styles.cardImage}
                    onError={() => handleImageError("investors")}
                    onLoad={() =>
                      console.log("Investors image loaded successfully")
                    }
                  />
                  <div className={styles.cardOverlay}></div>
                </div>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 1v22M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>Thousands of New Investors</h4>
                <p className={styles.cardDescription}>
                  High-net-worth individuals and families securing assets in
                  Dubai's fast-growing property sector.
                </p>
                <div className={styles.cardStat}>
                  <span className={styles.statNumber}>15K+</span>
                  <span className={styles.statLabel}>New Investors</span>
                </div>
              </div>
            </div>

            {/* Corporations Luxury Card */}
            <div className={styles.welcomeCard}>
              <div className={styles.cardVisual}>
                <div className={styles.cardImageContainer}>
                  <img
                    src={getImageSrc("corporations")}
                    alt="International Corporations"
                    className={styles.cardImage}
                    onError={() => handleImageError("corporations")}
                    onLoad={() =>
                      console.log("Corporations image loaded successfully")
                    }
                  />
                  <div className={styles.cardOverlay}></div>
                </div>
                <div className={styles.cardIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 21v-8H7v8M7 3v5h8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>International Corporations</h4>
                <p className={styles.cardDescription}>
                  Global companies expanding or moving operations to Dubai —
                  driving commercial and residential demand alike.
                </p>
                <div className={styles.cardStat}>
                  <span className={styles.statNumber}>500+</span>
                  <span className={styles.statLabel}>HQ Relocations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Luxury Result Section */}
        <div className={styles.resultSection}>
          <div className={styles.resultCard}>
            <div className={styles.resultVisual}>
              <div className={styles.luxuryChart}>
                <div className={styles.chartHeader}>
                  <h4 className={styles.chartMainTitle}>
                    Market Dynamics 2024
                  </h4>
                  <p className={styles.chartSubtitle}>
                    Demand vs Supply Analysis
                  </p>
                </div>
                <div className={styles.chartContainer}>
                  <div className={styles.chartBar} data-type="demand">
                    <div className={styles.barFill}>
                      <span className={styles.barValue}>100%</span>
                    </div>
                    <div className={styles.barLabel}>Demand</div>
                    <div className={styles.barPercentage}>+25% YoY</div>
                  </div>

                  <div className={styles.chartComparison}>
                    <div className={styles.comparisonArrow}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 12h14M12 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className={styles.comparisonText}>
                      <span>Outpaces by</span>
                      <span className={styles.comparisonValue}>25%</span>
                    </div>
                  </div>

                  <div className={styles.chartBar} data-type="supply">
                    <div className={styles.barFill}>
                      <span className={styles.barValue}>75%</span>
                    </div>
                    <div className={styles.barLabel}>Supply</div>
                    <div className={styles.barPercentage}>+15% YoY</div>
                  </div>
                </div>

                <div className={styles.chartLegend}>
                  <div className={styles.legendItem}>
                    <div
                      className={styles.legendColor}
                      style={{ background: "#d7b46a" }}
                    ></div>
                    <span>High Demand Growth</span>
                  </div>
                  <div className={styles.legendItem}>
                    <div
                      className={styles.legendColor}
                      style={{ background: "rgba(215, 180, 106, 0.6)" }}
                    ></div>
                    <span>Supply Growth</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.resultContent}>
              <div className={styles.resultHeader}>
                <div className={styles.resultBadge}>
                  <span>THE RESULT</span>
                </div>
                <h3 className={styles.resultTitle}>Unprecedented Growth</h3>
              </div>

              <div className={styles.resultText}>
                <p className={styles.resultHighlight}>
                  Demand consistently outpaces supply → leading to continuous
                  growth in prices, rental values, and overall investment
                  returns.
                </p>

                <div className={styles.resultStats}>
                  <div className={styles.resultStat}>
                    <span className={styles.statValue}>+18%</span>
                    <span className={styles.statLabel}>Price Growth</span>
                  </div>
                  <div className={styles.resultStat}>
                    <span className={styles.statValue}>+22%</span>
                    <span className={styles.statLabel}>Rental Yield</span>
                  </div>
                  <div className={styles.resultStat}>
                    <span className={styles.statValue}>+35%</span>
                    <span className={styles.statLabel}>ROI</span>
                  </div>
                </div>

                <p className={styles.resultConclusion}>
                  Dubai remains one of the most resilient and profitable real
                  estate markets worldwide, offering unmatched stability and
                  long-term value appreciation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
