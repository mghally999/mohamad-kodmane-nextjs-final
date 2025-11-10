// OffPlanInvestment.jsx
"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/OffPlanInvestment.module.css";

export default function OffPlanInvestment() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // ===== ALL CDN IMAGES (Bunny) =====
  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  // Updated propertyImages array with your actual CDN images
  const propertyImages = [
    {
      src: `${CDN}/sky-parks/exterior-night-01.jpg`,
      alt: "Sobha SkyParks Luxury Apartment",
      title: "Modern Apartments",
      description: "Prime locations with panoramic city views",
    },
    {
      src: `${CDN}/hartland/hero-bg.jpg`,
      alt: "Sobha Hartland Luxury Villas",
      title: "Luxury Villas",
      description: "Spacious living in gated communities",
    },
    {
      src: `${CDN}/lumena-alta/hero-bg.jpg`,
      alt: "Lumina Alta Commercial Tower",
      title: "Commercial Spaces",
      description: "Premium office and retail opportunities",
    },
    {
      src: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
      alt: "Sobha AquaCrest Beachfront",
      title: "Beachfront Residences",
      description: "Luxury living with direct beach access",
    },
    {
      src: `${CDN}/palm-central/exterior-lagoon-01.jpg`,
      alt: "Palm Central Luxury Development",
      title: "Palm Jumeirah Living",
      description: "Exclusive properties on the iconic Palm",
    },
  ];

  return (
    <section
      className={`${styles.investmentSection} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div className={styles.container}>
        {/* SECTION HEADER */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Off-Plan Real Estate Investment in Dubai
          </h2>
          <div className={styles.goldDivider}></div>
          <p className={styles.sectionDescription}>
            Purchasing property in its early stages before construction begins
            with profitable installments
          </p>
        </div>

        {/* VISUAL HERO SECTION */}
        <div className={styles.visualHero}>
          <div className={styles.imageCarousel}>
            <div
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              {propertyImages.map((image, index) => (
                <div key={index} className={styles.carouselSlide}>
                  <div className={styles.imageContainer}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      className={styles.propertyImage}
                    />
                    <div className={styles.imageOverlay}></div>
                    <div className={styles.imageContent}>
                      <h3 className={styles.imageTitle}>{image.title}</h3>
                      <p className={styles.imageDescription}>
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div className={styles.carouselNav}>
              {propertyImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.navDot} ${
                    currentImage === index ? styles.active : ""
                  }`}
                  onClick={() => setCurrentImage(index)}
                ></button>
              ))}
            </div>

            {/* Progress Bar */}
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${
                    ((currentImage + 1) / propertyImages.length) * 100
                  }%`,
                  transition: "width 0.3s ease",
                }}
              ></div>
            </div>
          </div>

          {/* Investment Stats Overlay */}
          <div className={styles.statsOverlay}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>7-9%</div>
              <div className={styles.statLabel}>Average ROI</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>40%</div>
              <div className={styles.statLabel}>Price Advantage</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>0%</div>
              <div className={styles.statLabel}>Tax</div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className={styles.contentGrid}>
          {/* LEFT COLUMN - DEFINITION */}
          <div className={styles.definitionCard}>
            <div className={styles.definitionIcon}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className={styles.definitionContent}>
              <h3 className={styles.definitionTitle}>What It Means</h3>
              <p className={styles.definitionText}>
                Lower price today → Higher value upon delivery
              </p>
              <div className={styles.paymentHighlight}>
                <span className={styles.highlightText}>
                  You pay installments during construction without needing bank
                  financing
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - BENEFITS */}
          <div className={styles.benefitsCard}>
            <div className={styles.benefitsHeader}>
              <h3 className={styles.benefitsTitle}>
                Benefits of This Investment Type
              </h3>
              <div className={styles.benefitsIcon}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className={styles.benefitsList}>
              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <div className={styles.iconCircle}>
                    <span>1</span>
                  </div>
                </div>
                <div className={styles.benefitContent}>
                  <h4 className={styles.benefitHeading}>
                    Lower Purchase Price
                  </h4>
                  <p className={styles.benefitDescription}>
                    Compared to ready properties
                  </p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <div className={styles.iconCircle}>
                    <span>2</span>
                  </div>
                </div>
                <div className={styles.benefitContent}>
                  <h4 className={styles.benefitHeading}>Profit Potential</h4>
                  <p className={styles.benefitDescription}>
                    Realize profit at the moment of handover
                  </p>
                </div>
              </div>

              <div className={styles.benefitItem}>
                <div className={styles.benefitIcon}>
                  <div className={styles.iconCircle}>
                    <span>3</span>
                  </div>
                </div>
                <div className={styles.benefitContent}>
                  <h4 className={styles.benefitHeading}>Flexible Payment</h4>
                  <p className={styles.benefitDescription}>
                    Pay in installments directly with the developer without
                    financial pressure
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VISUAL TIMELINE */}
        <div className={styles.timelineSection}>
          <h3 className={styles.timelineTitle}>Investment Journey</h3>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4>Initial Investment</h4>
                <p>Secure property at pre-construction prices</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4>Construction Phase</h4>
                <p>Flexible payment plan during development</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4>Project Completion</h4>
                <p>Property value appreciates significantly</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h4>Handover & Profit</h4>
                <p>Realize returns upon delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
