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

  // Luxury background images from your CDN
  const serviceBackgrounds = [
    {
      url: `${CDN}/sky-parks/exterior-night-01.jpg`,
      alt: "Luxury Portfolio Management",
      title: "Portfolio Excellence",
    },
    {
      url: `${CDN}/hartland/hero-bg.jpg`,
      alt: "Property Resale Services",
      title: "Maximum Returns",
    },
    {
      url: `${CDN}/lumena-alta/hero-bg.jpg`,
      alt: "Property Management",
      title: "Seamless Management",
    },
    {
      url: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
      alt: "Off-Plan Investment",
      title: "Future Opportunities",
    },
    {
      url: `${CDN}/palm-central/exterior-lagoon-01.jpg`,
      alt: "Property Handover",
      title: "Perfect Delivery",
    },
    {
      url: `${CDN}/al-sinniyyah-island/hero-bg.jpg`,
      alt: "Interior Design",
      title: "Luxury Furnishing",
    },
  ];

  // Translated and enhanced services
  const services = [
    {
      id: 1,
      title: "PORTFOLIO CONSTRUCTION & MANAGEMENT",
      description:
        "Strategic building and professional management of real estate investment portfolios",
      features: [
        "Diversified asset allocation",
        "Risk management strategies",
        "Performance optimization",
        "Regular portfolio reviews",
      ],
      image: serviceBackgrounds[0].url,
      color: "#d7b46a",
    },
    {
      id: 2,
      title: "PREMIUM PROPERTY RESALE",
      description:
        "Maximize your returns with strategic resale at optimal market timing",
      features: [
        "Market analysis & pricing",
        "Premium marketing exposure",
        "Expert negotiation",
        "Maximum profit realization",
      ],
      image: serviceBackgrounds[1].url,
      color: "#c4a15d",
    },
    {
      id: 3,
      title: "PROPERTY RENTAL & MANAGEMENT",
      description:
        "Comprehensive rental services and professional property management",
      features: [
        "Tenant screening & placement",
        "Rental optimization",
        "Maintenance coordination",
        "Financial reporting",
      ],
      image: serviceBackgrounds[2].url,
      color: "#b8941f",
    },
    {
      id: 4,
      title: "OFF-PLAN INVESTMENT STRATEGY",
      description:
        "Strategic investment in pre-construction properties for optimal growth",
      features: [
        "Early access opportunities",
        "Payment plan optimization",
        "Market trend analysis",
        "Developer relationship management",
      ],
      image: serviceBackgrounds[3].url,
      color: "#d7b46a",
    },
    {
      id: 5,
      title: "PROPERTY HANDOVER EXCELLENCE",
      description:
        "Seamless property reception and quality assurance from developers",
      features: [
        "Quality inspection",
        "Documentation processing",
        "Defect management",
        "Smooth transition",
      ],
      image: serviceBackgrounds[4].url,
      color: "#c4a15d",
    },
    {
      id: 6,
      title: "COMPLETE INTERIOR DESIGN & FURNISHING",
      description:
        "Turnkey furnishing solutions for luxury living and premium rental appeal",
      features: [
        "Custom design concepts",
        "Premium material selection",
        "Project management",
        "Styling & staging",
      ],
      image: serviceBackgrounds[5].url,
      color: "#b8941f",
    },
  ];

  return (
    <section
      className={`${styles.servicesSection} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div
            className={styles.heroBackground}
            style={{
              backgroundImage: `url('${serviceBackgrounds[0].url}')`,
            }}
          >
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>COMPREHENSIVE SOLUTIONS</span>
            </div>
            <h1 className={styles.heroTitle}>PREMIUM REAL ESTATE SERVICES</h1>
            <p className={styles.heroSubtitle}>
              End-to-end luxury property solutions designed for exceptional
              returns and peace of mind
            </p>
          </div>
        </div>

        {/* Interactive Services Showcase */}
        <div className={styles.servicesShowcase}>
          <div className={styles.showcaseHeader}>
            <h2 className={styles.showcaseTitle}>OUR EXPERTISE</h2>
            <p className={styles.showcaseSubtitle}>
              Comprehensive services covering every aspect of luxury real estate
              investment
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
                  <div className={styles.navContent}>
                    <span className={styles.navTitle}>{service.title}</span>
                    <span className={styles.navDescription}>
                      {service.description}
                    </span>
                  </div>
                  <div className={styles.navIndicator}>
                    <div className={styles.indicatorDot}></div>
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
                    <div className={styles.statLabel}>PROJECTS COMPLETED</div>
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

        {/* All Services Grid */}
        <div className={styles.allServicesSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              COMPREHENSIVE SERVICE PORTFOLIO
            </h2>
            <p className={styles.sectionSubtitle}>
              Every aspect of your real estate journey, handled with excellence
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={service.id}
                className={styles.serviceCard}
                onMouseEnter={() => setActiveService(index)}
              >
                <div
                  className={styles.cardBackground}
                  style={{
                    backgroundImage: `url('${service.image}')`,
                  }}
                >
                  <div className={styles.cardOverlay}></div>
                </div>

                <div className={styles.cardContent}>
                  <h4 className={styles.cardTitle}>{service.title}</h4>
                  <p className={styles.cardDescription}>
                    {service.description}
                  </p>

                  <div className={styles.cardFeatures}>
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className={styles.cardFeature}>
                        <div
                          className={styles.featureDot}
                          style={{ backgroundColor: service.color }}
                        ></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 2 && (
                      <div className={styles.moreFeatures}>
                        +{service.features.length - 2} more features
                      </div>
                    )}
                  </div>

                  <div className={styles.cardHover}>
                    <span>EXPLORE SERVICE</span>
                    <div className={styles.arrowIcon}>→</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaBackground}>
              <div
                className={styles.ctaImage}
                style={{
                  backgroundImage: `url('${CDN}/sky-parks/exterior-night-01.jpg')`,
                }}
              >
                <div className={styles.ctaOverlay}></div>
              </div>
            </div>

            <div className={styles.ctaContent}>
              <div className={styles.ctaBadge}>COMPLETE SOLUTIONS</div>
              <h2 className={styles.ctaTitle}>
                WE HANDLE EVERYTHING...
                <span className={styles.highlight}>
                  {" "}
                  YOUR PROFITS ARE SECURE
                </span>
              </h2>
              <p className={styles.ctaDescription}>
                From strategic acquisition to premium resale, we manage every
                detail of your real estate investment journey, ensuring maximum
                returns with complete peace of mind.
              </p>

              <div className={styles.trustIndicators}>
                <div className={styles.trustItem}>
                  <div className={styles.trustIcon}>✓</div>
                  <span>END-TO-END MANAGEMENT</span>
                </div>
                <div className={styles.trustItem}>
                  <div className={styles.trustIcon}>✓</div>
                  <span>MAXIMUM RETURN OPTIMIZATION</span>
                </div>
                <div className={styles.trustItem}>
                  <div className={styles.trustIcon}>✓</div>
                  <span>PREMIUM SERVICE GUARANTEE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
