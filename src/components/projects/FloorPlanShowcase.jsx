"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/projects/FloorPlanShowcase.module.css";

export default function FloorPlanShowcase({ data, projectData }) {
  if (!data || !projectData) {
    console.error("FloorPlanShowcase: Missing data");
    return null;
  }

  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentPlan = data.plans[activeTab];
  const hasMultipleImages = currentPlan.images && currentPlan.images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentPlan.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + currentPlan.images.length) % currentPlan.images.length
    );
  };

  return (
    <section className={styles.floorplanSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {data.type === "villas"
              ? "Villa Collections"
              : data.type === "penthouses"
              ? "Penthouse Collections"
              : data.type === "commercial"
              ? "Commercial Spaces"
              : data.type === "offices"
              ? "Office Spaces"
              : "Residence Collections"}
          </h2>
          <div className={styles.titleDivider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerDot}></div>
            <div className={styles.dividerLine}></div>
          </div>
        </div>

        {/* Creative Tab Navigation */}
        <div className={styles.tabNavigation}>
          <div className={styles.tabContainer}>
            {data.plans.map((plan, index) => (
              <button
                key={plan.id}
                className={`${styles.tabButton} ${
                  activeTab === index ? styles.tabActive : ""
                }`}
                onClick={() => {
                  setActiveTab(index);
                  setCurrentImageIndex(0);
                }}
              >
                <div className={styles.tabContent}>
                  <span className={styles.tabText}>{plan.title}</span>
                  <div className={styles.tabIndicator}></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area - Equal Height */}
        <div className={styles.contentArea}>
          {/* Specifications Panel */}
          <div className={styles.specsPanel}>
            <div className={styles.panelContent}>
              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{currentPlan.title}</h3>
                <div className={styles.planDivider}></div>
              </div>

              <div className={styles.specsList}>
                {Object.entries(currentPlan.specs).map(([key, value]) => (
                  <div key={key} className={styles.specItem}>
                    <div className={styles.specLabel}>{key}</div>
                    <div className={styles.specValue}>{value}</div>
                  </div>
                ))}
              </div>

              {/* Features */}
              {/* {currentPlan.features && currentPlan.features.length > 0 && (
                <div className={styles.featuresSection}>
                  <h4 className={styles.featuresTitle}>Key Features</h4>
                  <div className={styles.featuresGrid}>
                    {currentPlan.features.map((feature, index) => (
                      <div key={index} className={styles.featureItem}>
                        <span className={styles.featureIcon}>✦</span>
                        <span className={styles.featureText}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )} */}

              {/* CTA Button */}
              <div className={styles.ctaContainer}>
                <button className={styles.ctaButton}>
                  <span>Download Floor Plan</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 16V4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M7 11l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 20h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className={styles.galleryPanel}>
            <div className={styles.imageContainer}>
              <Image
                src={
                  currentPlan.images?.[currentImageIndex] ||
                  "/placeholder-floorplan.jpg"
                }
                alt={`${currentPlan.title} image ${currentImageIndex + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className={styles.floorplanImage}
                priority={activeTab === 0 && currentImageIndex === 0}
              />

              {/* Navigation Arrows */}
              {hasMultipleImages && (
                <>
                  <button
                    className={`${styles.navButton} ${styles.navPrev}`}
                    onClick={prevImage}
                  >
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15 18l-6-6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    className={`${styles.navButton} ${styles.navNext}`}
                    onClick={nextImage}
                  >
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 18l6-6-6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Counter */}
              {hasMultipleImages && (
                <div className={styles.imageCounter}>
                  <span className={styles.counterCurrent}>
                    {currentImageIndex + 1}
                  </span>
                  <span className={styles.counterSeparator}>/</span>
                  <span className={styles.counterTotal}>
                    {currentPlan.images.length}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
