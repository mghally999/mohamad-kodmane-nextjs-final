"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "@/styles/RentalReturns.module.css";
import Image from "next/image";

const RentalReturns = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const investmentPortfolios = [
    {
      id: 1,
      category: "Luxury Waterfront",
      title: "Marina Skyrise Collection",
      location: "Dubai Marina",
      purchasePrice: "AED 2,650,000",
      annualRent: "AED 350,000",
      roi: "13.2%",
      occupancy: "98%",
      appreciation: "22%",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Private Beach Access",
        "Infinity Pool",
        "24/7 Concierge",
        "Smart Home System",
      ],
      performance: [85, 92, 88, 95, 98],
      description:
        "Premium waterfront residences offering unparalleled luxury living with guaranteed high rental yields in Dubai's most sought-after location.",
    },
    {
      id: 2,
      category: "Business District",
      title: "Financial Tower Residences",
      location: "Business Bay",
      purchasePrice: "AED 3,000,000",
      annualRent: "AED 240,000",
      roi: "8.0%",
      occupancy: "95%",
      appreciation: "18%",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Executive Lounge",
        "Business Center",
        "City Views",
        "Premium Finishes",
      ],
      performance: [78, 85, 90, 88, 95],
      description:
        "Strategic corporate district locations catering to high-net-worth professionals and business executives seeking premium urban living.",
    },
    {
      id: 3,
      category: "Luxury Community",
      title: "Elite Villa Collection",
      location: "Tilal Al Ghaf",
      purchasePrice: "AED 2,000,000",
      annualRent: "AED 189,000",
      roi: "9.5%",
      occupancy: "92%",
      appreciation: "25%",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      features: [
        "Private Gardens",
        "Community Amenities",
        "Family-Oriented",
        "Premium Security",
      ],
      performance: [82, 88, 85, 90, 92],
      description:
        "Exclusive gated community villas offering spacious family living with premium amenities and strong capital appreciation potential.",
    },
  ];

  const marketInsights = [
    {
      metric: "711,000",
      label: "Annual Rental Transactions",
      trend: "+18% YoY",
    },
    {
      metric: "AED 283B",
      label: "Total Rental Market Value",
      trend: "+24% Growth",
    },
    { metric: "94%", label: "Average Occupancy Rate", trend: "Record High" },
    { metric: "8.7%", label: "Market Average ROI", trend: "+2.1% vs 2022" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const currentPortfolio = investmentPortfolios[activeTab];

  return (
    <section ref={containerRef} className={styles.rentalReturns}>
      {/* Geometric Background Pattern */}
      <div className={styles.geometricBackground}>
        <div className={styles.hexagon}></div>
        <div className={styles.hexagon}></div>
        <div className={styles.hexagon}></div>
        <div className={styles.diamond}></div>
        <div className={styles.diamond}></div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div
          className={`${styles.header} ${isVisible ? styles.animateIn : ""}`}
        >
          <div className={styles.headerContent}>
            <div className={styles.titleGroup}>
              <div className={styles.titleDecoration}>
                <div className={styles.accentLine}></div>
                <div className={styles.titleBadge}>Premium Returns</div>
              </div>
              <h1 className={styles.mainTitle}>
                Strategic{" "}
                <span className={styles.titleGradient}>Rental Portfolio</span>
                <br />
                Performance
              </h1>
              <p className={styles.subtitle}>
                Curated luxury properties delivering exceptional rental yields
                and sustained capital growth in Dubai's most dynamic real estate
                markets.
              </p>
            </div>

            {/* Market Insights */}
            <div className={styles.insightsGrid}>
              {marketInsights.map((insight, index) => (
                <div key={index} className={styles.insightCard}>
                  <div className={styles.insightValue}>{insight.metric}</div>
                  <div className={styles.insightLabel}>{insight.label}</div>
                  <div className={styles.insightTrend}>{insight.trend}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Split Layout */}
        <div className={styles.contentLayout}>
          {/* Left Panel - Visual Showcase */}
          <div className={styles.visualPanel}>
            <div className={styles.imageGallery}>
              <div className={styles.mainImageContainer}>
                <Image
                  src={currentPortfolio.image}
                  alt={`${currentPortfolio.title} - ${currentPortfolio.location}`}
                  fill
                  className={styles.mainImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {/* Performance Overlay */}
                <div className={styles.performanceOverlay}>
                  <div className={styles.performanceMetric}>
                    <div className={styles.metricValue}>
                      {currentPortfolio.roi}
                    </div>
                    <div className={styles.metricLabel}>Annual Yield</div>
                  </div>
                  <div className={styles.performanceMetric}>
                    <div className={styles.metricValue}>
                      {currentPortfolio.occupancy}
                    </div>
                    <div className={styles.metricLabel}>Occupancy</div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className={styles.categoryIndicator}>
                  {currentPortfolio.category}
                </div>
              </div>

              {/* Performance Graph */}
              <div className={styles.performanceGraph}>
                <div className={styles.graphHeader}>
                  <h4>Occupancy Trend</h4>
                  <span className={styles.graphSubtitle}>Last 5 Quarters</span>
                </div>
                <div className={styles.graphBars}>
                  {currentPortfolio.performance.map((value, index) => (
                    <div key={index} className={styles.barContainer}>
                      <div
                        className={styles.bar}
                        style={{ height: `${value}%` }}
                      ></div>
                      <div className={styles.barLabel}>Q{index + 1}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Investment Details */}
          <div className={styles.detailsPanel}>
            {/* Portfolio Selector */}
            <div className={styles.portfolioSelector}>
              {investmentPortfolios.map((portfolio, index) => (
                <button
                  key={portfolio.id}
                  className={`${styles.portfolioTab} ${
                    activeTab === index ? styles.active : ""
                  }`}
                  onClick={() => setActiveTab(index)}
                >
                  <div className={styles.tabContent}>
                    <div className={styles.tabTitle}>{portfolio.title}</div>
                    <div className={styles.tabLocation}>
                      {portfolio.location}
                    </div>
                  </div>
                  <div className={styles.tabIndicator}>
                    <div className={styles.indicatorDot}></div>
                  </div>
                </button>
              ))}
            </div>

            {/* Investment Breakdown */}
            <div className={styles.investmentBreakdown}>
              <div className={styles.breakdownHeader}>
                <h3 className={styles.breakdownTitle}>Investment Analysis</h3>
                <div className={styles.performanceRating}>
                  <div className={styles.ratingStars}>{"★".repeat(5)}</div>
                  <span>Premium Tier</span>
                </div>
              </div>

              {/* Financial Metrics */}
              <div className={styles.financialMetrics}>
                <div className={styles.metricRow}>
                  <div className={styles.metricInfo}>
                    <span className={styles.metricName}>Purchase Price</span>
                    <span className={styles.metricDescription}>
                      Market Value
                    </span>
                  </div>
                  <div className={styles.metricValue}>
                    {currentPortfolio.purchasePrice}
                  </div>
                </div>

                <div className={styles.metricRow}>
                  <div className={styles.metricInfo}>
                    <span className={styles.metricName}>
                      Annual Rental Income
                    </span>
                    <span className={styles.metricDescription}>
                      Guaranteed Returns
                    </span>
                  </div>
                  <div className={styles.metricValue}>
                    {currentPortfolio.annualRent}
                  </div>
                </div>

                <div className={styles.metricRow}>
                  <div className={styles.metricInfo}>
                    <span className={styles.metricName}>
                      Capital Appreciation
                    </span>
                    <span className={styles.metricDescription}>
                      Annual Growth
                    </span>
                  </div>
                  <div className={styles.metricValue}>
                    {currentPortfolio.appreciation}
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className={styles.featuresSection}>
                <h4 className={styles.featuresTitle}>Premium Features</h4>
                <div className={styles.featuresGrid}>
                  {currentPortfolio.features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                      <div className={styles.featureIcon}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className={styles.descriptionSection}>
                <p className={styles.propertyDescription}>
                  {currentPortfolio.description}
                </p>
              </div>

              {/* ROI Comparison */}
              <div className={styles.roiComparison}>
                <div className={styles.comparisonHeader}>
                  <span>Market Average</span>
                  <span>This Property</span>
                </div>
                <div className={styles.comparisonBars}>
                  <div className={styles.marketBar}>
                    <div
                      className={styles.barFill}
                      style={{ width: "70%" }}
                    ></div>
                    <span>8.7%</span>
                  </div>
                  <div className={styles.propertyBar}>
                    <div
                      className={styles.barFill}
                      style={{
                        width: `${parseFloat(currentPortfolio.roi) * 10}%`,
                      }}
                    ></div>
                    <span>{currentPortfolio.roi}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Investment Strategy CTA */}
        <div className={styles.strategyCTA}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaText}>
              <h3 className={styles.ctaTitle}>
                Ready to Build Your{" "}
                <span className={styles.ctaAccent}>Premium Portfolio?</span>
              </h3>
              <p className={styles.ctaDescription}>
                Join sophisticated investors achieving exceptional returns
                through strategically curated luxury properties in Dubai's most
                promising locations.
              </p>
            </div>
            <div className={styles.ctaOrnament}>
              <div className={styles.ornamentCircle}></div>
              <div className={styles.ornamentLine}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalReturns;
