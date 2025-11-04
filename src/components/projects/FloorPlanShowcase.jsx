"use client";

import { useState } from "react";
import Image from "next/image";
import Brochures from "@/components/projects/Brochures";
import styles from "@/styles/projects/FloorPlanShowcase.module.css";

export default function FloorPlanShowcase({ data, projectData }) {
  // SAFETY CHECK - if no data, return nothing
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

  // Get appropriate icon based on plan type and index
  const getPlanIcon = (plan, index) => {
    // Check if it's a villa, penthouse, or commercial space
    if (plan.title?.toLowerCase().includes("villa")) return "🏡";
    if (plan.title?.toLowerCase().includes("penthouse")) return "🏙️";
    if (
      plan.title?.toLowerCase().includes("office") ||
      plan.title?.toLowerCase().includes("commercial")
    )
      return "🏢";
    if (plan.title?.toLowerCase().includes("retail")) return "🛍️";

    // Default apartment icons based on bedroom count
    if (plan.bedrooms === 1) return "🏠";
    if (plan.bedrooms === 2) return "🏢";
    if (plan.bedrooms === 3) return "🏘️";
    if (plan.bedrooms >= 4) return "🏛️";

    // Fallback based on index
    return ["🏠", "🏢", "🏘️", "🏛️"][index % 4];
  };

  return (
    <section className={styles.luxurySection} aria-label="Floor plan showcase">
      <div className={styles.backgroundElements}>
        <div className={styles.luxuryOrnament}></div>
        <div className={styles.luxuryOrnament}></div>
      </div>

      <div className={styles.luxuryContainer}>
        <div className={styles.titleMasterpiece}>
          <h2 className={styles.mainHeadline}>
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
          <div className={styles.titleEmbellishment}>
            <div className={styles.embellishmentLine}></div>
            <div className={styles.embellishmentDot}></div>
          </div>
        </div>

        <div className={styles.tabsSymphony}>
          {data.plans.map((plan, index) => (
            <button
              key={plan.id}
              className={`${styles.luxuryTab} ${
                activeTab === index ? styles.tabActive : ""
              }`}
              onClick={() => {
                setActiveTab(index);
                setCurrentImageIndex(0);
              }}
              aria-label={`View ${plan.title}`}
            >
              <div className={styles.tabContent}>
                <div className={styles.tabIcon}>{getPlanIcon(plan, index)}</div>
                <span className={styles.tabText}>{plan.title}</span>
              </div>
              <div className={styles.tabGlow}></div>
            </button>
          ))}
        </div>

        <div className={styles.contentMasterpiece}>
          <div className={styles.specsGallery}>
            <div className={styles.specsHeader}>
              <h3 className={styles.planTitle}>{currentPlan.title}</h3>
              <div className={styles.titleAccent}></div>
            </div>

            <div className={styles.specsList}>
              {Object.entries(currentPlan.specs).map(([key, value]) => (
                <div key={key} className={styles.specItem}>
                  <div className={styles.specHeader}>
                    <div className={styles.specIcon}>✦</div>
                    <span className={styles.specKey}>{key}</span>
                  </div>
                  <p className={styles.specValue}>{value}</p>
                </div>
              ))}
            </div>

            {/* Features Showcase */}
            {/* {currentPlan.features && currentPlan.features.length > 0 && (
              <div className={styles.featuresShowcase}>
                <h4 className={styles.featuresTitle}>Key Features</h4>
                <div className={styles.featuresGrid}>
                  {currentPlan.features.map((feature, index) => (
                    <div key={index} className={styles.featureBadge}>
                      <span className={styles.featureIcon}>✓</span>
                      <span className={styles.featureText}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )} */}

            {/* Brochures Component */}
            {/* <Brochures
              brochures={projectData.intro?.brochures}
              projectName={projectData.project?.name}
            /> */}
          </div>

          <div className={styles.visualMasterpiece}>
            <div className={styles.imageSculpture}>
              <div className={styles.imageFrame}>
                <div className={styles.frameBorder}></div>
                <div className={styles.imageContainer}>
                  <Image
                    src={
                      currentPlan.images?.[currentImageIndex] ||
                      "/placeholder-floorplan.jpg"
                    }
                    alt={`${currentPlan.title} image ${currentImageIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className={styles.luxuryImage}
                    priority={activeTab === 0 && currentImageIndex === 0}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>

                {hasMultipleImages && (
                  <>
                    <button
                      className={`${styles.imageNav} ${styles.navPrev}`}
                      onClick={prevImage}
                      aria-label="Previous view"
                    >
                      <div className={styles.navCore}>
                        <svg viewBox="0 0 24 24" className={styles.navIcon}>
                          <path
                            d="M15.5 19.5 8 12l7.5-7.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                    <button
                      className={`${styles.imageNav} ${styles.navNext}`}
                      onClick={nextImage}
                      aria-label="Next view"
                    >
                      <div className={styles.navCore}>
                        <svg viewBox="0 0 24 24" className={styles.navIcon}>
                          <path
                            d="M8.5 19.5 16 12 8.5 4.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                  </>
                )}

                {hasMultipleImages && (
                  <div className={styles.imageCounter}>
                    <span className={styles.currentImage}>
                      {currentImageIndex + 1}
                    </span>
                    <span className={styles.counterSeparator}>/</span>
                    <span className={styles.totalImages}>
                      {currentPlan.images.length}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
