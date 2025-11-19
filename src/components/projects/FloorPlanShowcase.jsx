"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/projects/FloorPlanShowcase.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";

export default function FloorPlanShowcase({
  data,
  projectData,
  isRTL,
  locale,
}) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  if (!data || !projectData) {
    console.error("FloorPlanShowcase: Missing data");
    return null;
  }

  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getSpecs = (specs) => {
    const translatedSpecs = {};
    Object.keys(specs).forEach((key) => {
      translatedSpecs[getLocalizedText(key, activeLocale)] = getLocalizedText(
        specs[key],
        activeLocale
      );
    });
    return translatedSpecs;
  };

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

  // Get section title based on project type
  const getSectionTitle = () => {
    const type = data.type;
    if (activeIsRTL) {
      switch (type) {
        case "villas":
          return "مجموعة الفلل";
        case "penthouses":
          return "مجموعة البنتهاوس";
        case "commercial":
          return "المساحات التجارية";
        case "offices":
          return "المساحات المكتبية";
        default:
          return "مجموعة الوحدات السكنية";
      }
    } else {
      switch (type) {
        case "villas":
          return "Villa Collections";
        case "penthouses":
          return "Penthouse Collections";
        case "commercial":
          return "Commercial Spaces";
        case "offices":
          return "Office Spaces";
        default:
          return "Residence Collections";
      }
    }
  };

  return (
    <section
      className={styles.floorplanSection}
      dir={activeIsRTL ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{getSectionTitle()}</h2>
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
                  <span className={styles.tabText}>
                    {getLocalizedText(plan.title, activeLocale)}
                  </span>
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
                <h3 className={styles.planName}>
                  {getLocalizedText(currentPlan.title, activeLocale)}
                </h3>
                <div className={styles.planDivider}></div>
              </div>

              <div className={styles.specsList}>
                {Object.entries(getSpecs(currentPlan.specs)).map(
                  ([key, value]) => (
                    <div key={key} className={styles.specItem}>
                      <div className={styles.specLabel}>{key}</div>
                      <div className={styles.specValue}>{value}</div>
                    </div>
                  )
                )}
              </div>

              {/* CTA Button */}
              {/* Pushing Purposes */}
              {/* <div className={styles.ctaContainer}>
                <button className={styles.ctaButton}>
                  <span>
                    {activeIsRTL
                      ? "تحميل المخطط الأرضي"
                      : "Download Floor Plan"}
                  </span>
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
              </div> */}
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
                alt={`${getLocalizedText(currentPlan.title, activeLocale)} ${
                  activeIsRTL ? "صورة" : "image"
                } ${currentImageIndex + 1}`}
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
