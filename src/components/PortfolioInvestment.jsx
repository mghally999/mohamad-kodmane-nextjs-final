// PortfolioInvestment.jsx
"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/PortfolioInvestment.module.css";

// CDN Base URL
const CDN = "https://luxury-real-estate-media.b-cdn.net";

export default function PortfolioInvestment() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeYear, setActiveYear] = useState(3); // Default to Year 7

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Real Dubai Real Estate Growth Data (Based on actual market reports)
  const growthData = {
    years: [1, 3, 5, 7],
    values: [100, 158, 242, 356], // 100% base, +58% Y3, +142% Y5, +256% Y7
    percentages: ["+0%", "+58%", "+142%", "+256%"],
    descriptions: [
      "Initial investment with immediate rental income",
      "Strong appreciation from development completion",
      "Compounded growth from rental yields and market appreciation",
      "+256% in 7 years — a reflection of Dubai's sustained growth, investor confidence, and world-class infrastructure",
    ],
  };

  // Property Cards - Side by side
  const portfolioProperties = [
    {
      src: `${CDN}/sky-parks/exterior-night-01.jpg`,
      alt: "Skyline Wealth Generation",
      category: "Cashflow Engine",
      title: "Immediate Returns in Secondary Market",
      metrics: "5–7% Rental Yield",
      description:
        "Premium apartments generating steady monthly income and ensuring strong liquidity within your portfolio",
    },
    {
      src: `${CDN}/hartland/hero-bg.jpg`,
      alt: "Future Value Creation",
      category: "Growth Asset",
      title: "Value Appreciation",
      metrics: "10–12% Annual Growth",
      description:
        "Strategically selected off-plan developments designed for high capital appreciation and long-term wealth creation",
    },
    {
      src: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
      alt: "Luxury Lifestyle Integration",
      category: "Wealth Ecosystem",
      title: "Complete Portfolio",
      metrics: "0% Tax",
      description:
        "Integrated holdings combining residential, serviced, and lifestyle properties — structured for maximum fiscal efficiency and global investor benefits",
    },
  ];

  const performanceHighlights = [
    {
      value: "63%",
      label: "of Dubai's property sales are off-plan",
      trend: "2024 – DXB Interact",
      icon: "📊",
    },
    {
      value: "19.3%",
      label: "YoY increase in apartment rents",
      trend: "Q3 2024",
      icon: "🏢",
    },
    {
      value: "10%",
      label: "average price appreciation across Dubai",
      trend: "2024 Market Performance",
      icon: "💵",
    },
    {
      value: "119,800",
      label: "property transactions recorded",
      trend: "+49% YoY",
      icon: "🧾",
    },
  ];

  return (
    <section
      className={`${styles.portfolioSection} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.container}>
        {/* Elegant Header */}
        <div className={styles.elegantHeader}>
          <div className={styles.headerOrnament}>
            <div className={styles.ornamentLine}></div>
            <div className={styles.ornamentDot}></div>
            <div className={styles.ornamentLine}></div>
          </div>
          <h1 className={styles.mainTitle}>Strategic Real Estate Portfolio</h1>
          <div className={styles.titleDivider}></div>
          <p className={styles.tagline}>
            Build a well-balanced real estate portfolio that includes both ready
            and off-plan properties, designed to maximize returns, appreciation,
            and long-term stability.
          </p>
        </div>

        {/* Property Cards Grid */}
        <div className={styles.propertiesGrid}>
          {portfolioProperties.map((property, index) => (
            <div key={index} className={styles.propertyCard}>
              <div className={styles.cardImage}>
                <img
                  src={property.src}
                  alt={property.alt}
                  className={styles.propertyImage}
                />
                <div className={styles.cardOverlay}>
                  <span className={styles.propertyCategory}>
                    {property.category}
                  </span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.propertyTitle}>{property.title}</h3>
                <div className={styles.propertyMetrics}>{property.metrics}</div>
                <p className={styles.propertyDescription}>
                  {property.description}
                </p>
                <div className={styles.cardDivider}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Growth Trajectory Visualization */}
        <div className={styles.growthSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Portfolio Growth Trajectory</h2>
            <div className={styles.sectionDivider}></div>
            <p className={styles.sectionSubtitle}>
              Projected wealth accumulation based on Dubai's real estate
              performance
            </p>
          </div>

          <div className={styles.growthVisualization}>
            {/* Year Selector */}
            <div className={styles.yearSelector}>
              {growthData.years.map((year, index) => (
                <button
                  key={year}
                  className={`${styles.yearButton} ${
                    activeYear === index ? styles.active : ""
                  }`}
                  onClick={() => setActiveYear(index)}
                >
                  <span className={styles.yearLabel}>Year {year}</span>
                  <span className={styles.yearReturn}>
                    {growthData.percentages[index]}
                  </span>
                </button>
              ))}
            </div>

            {/* Growth Chart */}
            <div className={styles.growthChart}>
              <div className={styles.chartContainer}>
                {/* Growth Line */}
                <div className={styles.growthLine}>
                  {growthData.values.map((value, index) => (
                    <div
                      key={index}
                      className={`${styles.dataPoint} ${
                        index <= activeYear ? styles.active : ""
                      } ${index === activeYear ? styles.current : ""}`}
                      style={{
                        left: `${
                          (index / (growthData.values.length - 1)) * 100
                        }%`,
                        bottom: `${((value - 100) / 300) * 100}%`,
                      }}
                    >
                      <div className={styles.pointValue}>${value}K</div>
                      <div className={styles.pointDot}></div>
                    </div>
                  ))}

                  {/* Connecting Lines */}
                  <div className={styles.connectionLines}>
                    {growthData.values.slice(0, -1).map((_, index) => (
                      <div
                        key={index}
                        className={`${styles.connectionLine} ${
                          index < activeYear ? styles.active : ""
                        }`}
                        style={{
                          left: `${
                            (index / (growthData.values.length - 1)) * 100
                          }%`,
                          width: `${
                            (1 / (growthData.values.length - 1)) * 100
                          }%`,
                        }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Y-axis Labels */}
                <div className={styles.yAxis}>
                  <span className={styles.yLabel}>$100K</span>
                  <span className={styles.yLabel}>$200K</span>
                  <span className={styles.yLabel}>$300K</span>
                  <span className={styles.yLabel}>$400K</span>
                </div>

                {/* X-axis Labels */}
                <div className={styles.xAxis}>
                  {growthData.years.map((year, index) => (
                    <span key={year} className={styles.xLabel}>
                      Year {year}
                    </span>
                  ))}
                </div>
              </div>

              {/* Current Year Info */}
              <div className={styles.currentInfo}>
                <div className={styles.infoCard}>
                  <div className={styles.infoHeader}>
                    <h3 className={styles.infoTitle}>
                      Year {growthData.years[activeYear]} Performance
                    </h3>
                    <div className={styles.infoReturn}>
                      {growthData.percentages[activeYear]}
                    </div>
                  </div>
                  <p className={styles.infoDescription}>
                    {growthData.descriptions[activeYear]}
                  </p>
                  <div className={styles.progressIndicator}>
                    <div
                      className={styles.progressBar}
                      style={{
                        width: `${
                          (activeYear / (growthData.years.length - 1)) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Highlights */}
        <div className={styles.performanceSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Key Market Insights</h2>
            <div className={styles.sectionDivider}></div>
          </div>
          <div className={styles.performanceGrid}>
            {performanceHighlights.map((highlight, index) => (
              <div key={index} className={styles.performanceCard}>
                <div className={styles.cardOrnament}></div>
                <div className={styles.cardContent}>
                  <div className={styles.cardValue}>{highlight.value}</div>
                  <div className={styles.cardLabel}>{highlight.label}</div>
                  <div className={styles.cardTrend}>{highlight.trend}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Philosophy */}
        <div className={styles.philosophySection}>
          <div className={styles.philosophyGrid}>
            {/* Core Objectives */}
            <div className={styles.objectivesCard}>
              <div className={styles.objectivesHeader}>
                <div className={styles.headerAccent}></div>
                <h3 className={styles.objectivesTitle}>
                  Investment Objectives
                </h3>
              </div>
              <div className={styles.objectivesList}>
                <div className={styles.objectiveItem}>
                  <div className={styles.objectiveMarker}></div>
                  <div className={styles.objectiveContent}>
                    <h4 className={styles.objectiveHeading}>
                      Diversify income sources across different property types
                    </h4>
                  </div>
                </div>
                <div className={styles.objectiveItem}>
                  <div className={styles.objectiveMarker}></div>
                  <div className={styles.objectiveContent}>
                    <h4 className={styles.objectiveHeading}>
                      Reduce exposure to market fluctuations and risk
                    </h4>
                  </div>
                </div>
                <div className={styles.objectiveItem}>
                  <div className={styles.objectiveMarker}></div>
                  <div className={styles.objectiveContent}>
                    <h4 className={styles.objectiveHeading}>
                      Maximize profits through rental yields and capital
                      appreciation
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Management Promise */}
            <div className={styles.promiseCard}>
              <div className={styles.promiseHeader}>
                <div className={styles.promiseOrnament}></div>
                <h3 className={styles.promiseTitle}>Portfolio Management</h3>
              </div>
              <div className={styles.promiseContent}>
                <p className={styles.promiseStatement}>
                  We handle every aspect of your portfolio — from Handover to
                  resale —
                </p>
                <div className={styles.promiseHighlight}>
                  <div className={styles.highlightAccent}></div>
                  <span className={styles.highlightText}>
                    so your wealth continues to grow passively and securely,
                    backed by Dubai's thriving market.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
