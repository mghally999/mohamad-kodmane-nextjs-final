// OurServices.jsx - OPTIMIZED & CLEANED
"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/OurServices.module.css";

export default function OurServices() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  const services = [
    {
      id: 1,
      title: "STRATEGIC INVESTMENT & PORTFOLIO MANAGEMENT",
      description:
        "Complete investment planning and portfolio construction for optimal returns",
      features: [
        "Strategic investment planning & market analysis",
        "Portfolio construction & diversification",
        "Off-plan & ready property acquisition",
        "Payment plan optimization",
        "Risk management strategies",
      ],
      image: `${CDN}/sky-parks/exterior-night-01.jpg`,
      color: "#d7b46a",
      stage: "Before Purchase",
    },
    {
      id: 2,
      title: "PROPERTY HANDOVER & QUALITY ASSURANCE",
      description:
        "Seamless property reception with comprehensive quality control",
      features: [
        "Professional quality inspection",
        "Documentation & legal processing",
        "Defect & snag management",
        "Developer coordination",
        "Smooth transition to ownership",
      ],
      image: `${CDN}/hartland/hero-bg.jpg`,
      color: "#c4a15d",
      stage: "During Ownership",
    },
    {
      id: 3,
      title: "PREMIUM RENTAL & PROPERTY MANAGEMENT",
      description: "Complete rental solutions and professional property care",
      features: [
        "Tenant screening & placement",
        "Rental optimization & pricing",
        "Maintenance coordination",
        "Financial reporting",
        "24/7 property care",
      ],
      image: `${CDN}/lumena-alta/hero-bg.jpg`,
      color: "#b8941f",
      stage: "During Ownership",
    },
    {
      id: 4,
      title: "MAXIMUM RETURN RESALE STRATEGIES",
      description: "Data-driven resale planning for optimal profit realization",
      features: [
        "Market timing analysis",
        "Premium marketing exposure",
        "Expert negotiation",
        "Competitive pricing strategy",
        "Maximum profit realization",
      ],
      image: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
      color: "#d7b46a",
      stage: "After Completion",
    },
    {
      id: 5,
      title: "TURNKEY INTERIOR DESIGN & FURNISHING",
      description:
        "Complete design solutions for luxury living and premium rental appeal",
      features: [
        "Custom interior design concepts",
        "Premium material selection",
        "Project management",
        "Styling & property staging",
        "Furniture procurement",
      ],
      image: `${CDN}/palm-central/exterior-lagoon-01.jpg`,
      color: "#c4a15d",
      stage: "After Completion",
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
          <h1 className={styles.mainTitle}>360° Real Estate Management</h1>
          <div className={styles.titleDivider}></div>
          <p className={styles.tagline}>
            From Purchase to Profit — Complete end-to-end property management
            ensuring your investment journey in Dubai is effortless, profitable,
            and secure.
          </p>
        </div>

        {/* Investment Journey Timeline */}
        <div className={styles.journeySection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Your Complete Investment Journey
            </h2>
            <div className={styles.sectionDivider}></div>
            <p className={styles.sectionSubtitle}>
              From the moment you choose your property until you realize your
              returns, every detail is handled with precision and transparency.
            </p>
          </div>

          <div className={styles.journeyTimeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineStage}>
                <div className={styles.stageBadge}>1</div>
                <h3 className={styles.stageTitle}>Before Purchase</h3>
              </div>
              <p className={styles.stageDescription}>
                Strategic investment planning and portfolio construction aligned
                with your financial goals
              </p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineStage}>
                <div className={styles.stageBadge}>2</div>
                <h3 className={styles.stageTitle}>During Ownership</h3>
              </div>
              <p className={styles.stageDescription}>
                Seamless property handover and professional management for
                consistent rental income
              </p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineStage}>
                <div className={styles.stageBadge}>3</div>
                <h3 className={styles.stageTitle}>After Completion</h3>
              </div>
              <p className={styles.stageDescription}>
                Maximum return strategies through premium resale and
                value-enhancing services
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Services Showcase */}
        <div className={styles.servicesShowcase}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Comprehensive Services</h2>
            <div className={styles.sectionDivider}></div>
            <p className={styles.sectionSubtitle}>
              Professional expertise, complete transparency, and long-term value
              — all under one roof
            </p>
          </div>

          <div className={styles.showcaseContainer}>
            {/* Services Navigation */}
            <div className={styles.servicesNav}>
              {services.map((service, index) => (
                <button
                  key={service.id}
                  className={`${styles.serviceNavItem} ${
                    activeService === index ? styles.active : ""
                  }`}
                  onClick={() => setActiveService(index)}
                  style={{
                    borderLeftColor:
                      activeService === index ? service.color : "transparent",
                  }}
                >
                  <div className={styles.navStage}>{service.stage}</div>
                  <div className={styles.navContent}>
                    <span className={styles.navTitle}>{service.title}</span>
                    <span className={styles.navDescription}>
                      {service.description}
                    </span>
                  </div>
                  <div className={styles.navIndicator}>
                    <div
                      className={styles.indicatorDot}
                      style={{ backgroundColor: service.color }}
                    ></div>
                  </div>
                </button>
              ))}
            </div>

            {/* Service Details Display */}
            <div className={styles.serviceDisplay}>
              <div
                className={styles.displayBackground}
                style={{
                  backgroundImage: `url('${services[activeService].image}')`,
                }}
              >
                <div className={styles.displayOverlay}></div>
              </div>

              <div className={styles.displayContent}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceStage}>
                    {services[activeService].stage}
                  </div>
                  <div>
                    <h3 className={styles.serviceTitle}>
                      {services[activeService].title}
                    </h3>
                    <p className={styles.serviceDescription}>
                      {services[activeService].description}
                    </p>
                  </div>
                </div>

                <div className={styles.featuresGrid}>
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className={styles.featureItem}>
                      <div
                        className={styles.featureIcon}
                        style={{
                          backgroundColor: services[activeService].color,
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span className={styles.featureText}>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.serviceStats}>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>100%</div>
                    <div className={styles.statLabel}>CLIENT SATISFACTION</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>500+</div>
                    <div className={styles.statLabel}>PROPERTIES MANAGED</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statNumber}>15+</div>
                    <div className={styles.statLabel}>YEARS EXPERIENCE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Promise Section */}
        <div className={styles.promiseSection}>
          <div className={styles.promiseCard}>
            <div className={styles.promiseMain}>
              <div className={styles.promiseHeader}>
                <div className={styles.promiseOrnament}></div>
                <h2 className={styles.promiseTitle}>Our Promise to You</h2>
              </div>

              <div className={styles.promiseBody}>
                <p className={styles.promiseStatement}>
                  We handle every stage of your real estate journey — so you
                  enjoy returns, not responsibilities. From strategic
                  acquisition to premium resale, we manage every detail ensuring
                  maximum returns with complete peace of mind.
                </p>

                <div className={styles.promiseHighlight}>
                  <div className={styles.highlightAccent}></div>
                  <div className={styles.highlightText}>
                    Complete End-to-End Management • Maximum Return Optimization
                    • Premium Service Guarantee
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.promiseVisual}>
              <div
                className={styles.promiseImage}
                style={{
                  backgroundImage: `url('${CDN}/al-sinniyyah-island/hero-bg.jpg')`,
                }}
              >
                <div className={styles.promiseOverlay}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
