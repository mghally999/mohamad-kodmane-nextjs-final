// CapitalGrowth.jsx
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
      description: "19.3% rental growth in premium properties",
    },
    {
      url: `${CDN}/al-sinniyyah-island/hero-bg.jpg`,
      alt: "Al Sinniyyah Island Villas",
      title: "Private Island Living",
      description: "10% price growth per square foot",
    },
    {
      url: `${CDN}/massar-3/hero-bg.jpg`,
      alt: "Arada Massar Luxury Villas",
      title: "Gated Community Excellence",
      description: "63% off-plan market dominance",
    },
  ];

  // Simplified Growth Metrics
  const growthMetrics = [
    {
      value: "+10%",
      label: "Price Growth",
      description: "Average price per sqft increase",
      image: luxuryImages[1].url,
      alt: luxuryImages[1].alt,
    },
    {
      value: "+19.3%",
      label: "Villa Rent",
      description: "Rental growth in premium units",
      image: luxuryImages[0].url,
      alt: luxuryImages[0].alt,
    },
    {
      value: "63%",
      label: "Off-plan Market",
      description: "Share of total transactions",
      image: luxuryImages[2].url,
      alt: luxuryImages[2].alt,
    },
    {
      value: "119,800",
      label: "Total Deals",
      description: "Transactions in 2024 (+51%)",
      image: `${CDN}/sky-parks/exterior-night-01.jpg`,
      alt: "Luxury Skyline View",
    },
  ];

  // Key Highlights
  const keyHighlights = [
    {
      title: "Off-plan Dominance",
      value: "63% of 2024 deals",
      description: "Investors prefer future projects",
      image: luxuryImages[2].url,
    },
    {
      title: "Strong Growth",
      value: "10% price increase",
      description: "Consistent market appreciation",
      image: luxuryImages[1].url,
    },
    {
      title: "Rental Boom",
      value: "19.3% rent growth",
      description: "High rental demand continues",
      image: luxuryImages[0].url,
    },
  ];

  return (
    <section
      className={`${styles.capitalGrowthSection} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.container}>
        {/* Hero Section with Background Image */}
        <div className={styles.heroSection}>
          <div
            className={styles.heroBackground}
            style={{
              backgroundImage: `url('${luxuryImages[0].url}')`,
            }}
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

        {/* Interactive Metrics Gallery */}
        <div className={styles.metricsGallery}>
          <div className={styles.galleryHeader}>
            <h2 className={styles.galleryTitle}>VILLA MARKET PERFORMANCE</h2>
            <p className={styles.gallerySubtitle}>
              Key metrics driving luxury villa investments
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

        {/* Portfolio Mix Visual */}
        <div className={styles.portfolioSection}>
          <div className={styles.portfolioVisual}>
            <div className={styles.mixCard}>
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

            <div className={styles.portfolioImage}>
              <img
                src={luxuryImages[1].url}
                alt={luxuryImages[1].alt}
                className={styles.portfolioImg}
              />
            </div>
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className={styles.highlightsSection}>
          <div className={styles.highlightsGrid}>
            {keyHighlights.map((highlight, index) => (
              <div key={index} className={styles.highlightCard}>
                <div className={styles.highlightImage}>
                  <img
                    src={highlight.image}
                    alt={highlight.title}
                    className={styles.highlightImg}
                  />
                </div>
                <div className={styles.highlightContent}>
                  <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                  <div className={styles.highlightValue}>{highlight.value}</div>
                  <p className={styles.highlightDescription}>
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Summary */}
        <div className={styles.summarySection}>
          <div className={styles.summaryCard}>
            <div className={styles.summaryImage}>
              <img
                src={luxuryImages[2].url}
                alt={luxuryImages[2].alt}
                className={styles.summaryImg}
              />
            </div>
            <div className={styles.summaryContent}>
              <h2 className={styles.summaryTitle}>
                STRONG VILLA MARKET FUNDAMENTALS
              </h2>
              <div className={styles.summaryStats}>
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
                  <div className={styles.statLabel}>VILLA RENT</div>
                </div>
              </div>
              <p className={styles.summaryText}>
                <strong>
                  Dubai's villa market continues to show strong growth
                </strong>{" "}
                with increasing demand for both off-plan and ready properties,
                driving exceptional returns for investors in premium communities
                like Hartland, Al Sinniyyah Island, and Massar.
              </p>
              <div className={styles.sourceNote}>
                <strong>DATA SOURCE: DXB INTERACT MARKET ANALYSIS 2024</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className={styles.featuredProjects}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>FEATURED VILLA COMMUNITIES</h2>
            <p className={styles.sectionSubtitle}>
              Premium developments driving market growth
            </p>
          </div>
          <div className={styles.projectsGrid}>
            {luxuryImages.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img src={project.url} alt={project.alt} />
                </div>
                <div className={styles.projectContent}>
                  <h4 className={styles.projectTitle}>{project.title}</h4>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
