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

  // Enhanced translation mapping for specs with proper spacing
  const getTranslatedSpecs = (specs) => {
    const translationMap = {
      // English to Arabic mapping for common spec terms
      Bedroom: activeIsRTL ? "غرفة نوم" : "Bedroom",
      Bathroom: activeIsRTL ? "حمام" : "Bathroom",
      "Master Bath": activeIsRTL ? "حمام رئيسي" : "Master Bath",
      "Living Area": activeIsRTL ? "منطقة المعيشة" : "Living Area",
      Balcony: activeIsRTL ? "شرفة" : "Balcony",
      Terrace: activeIsRTL ? "تراس" : "Terrace",
      Kitchen: activeIsRTL ? "مطبخ" : "Kitchen",
      "Dining Area": activeIsRTL ? "منطقة الطعام" : "Dining Area",
      "Study Room": activeIsRTL ? "غرفة دراسة" : "Study Room",
      "Maid Room": activeIsRTL ? "غرفة خادمة" : "Maid Room",
      Storage: activeIsRTL ? "مخزن" : "Storage",
      Parking: activeIsRTL ? "موقف سيارات" : "Parking",
      Garden: activeIsRTL ? "حديقة" : "Garden",
      Pool: activeIsRTL ? "مسبح" : "Pool",

      // Unit types and numbers
      "1 BEDROOM": activeIsRTL ? "1 غرفة نوم" : "1 BEDROOM",
      "2 BEDROOMS": activeIsRTL ? "2 غرفة نوم" : "2 BEDROOMS",
      "3 BEDROOMS": activeIsRTL ? "3 غرفة نوم" : "3 BEDROOMS",
      "4 BEDROOMS": activeIsRTL ? "4 غرفة نوم" : "4 BEDROOMS",
      "5 BEDROOMS": activeIsRTL ? "5 غرفة نوم" : "5 BEDROOMS",

      // Measurements and areas
      Area: activeIsRTL ? "المساحة" : "Area",
      Size: activeIsRTL ? "الحجم" : "Size",
      "Sq. Ft.": activeIsRTL ? "قدم مربع" : "Sq. Ft.",
      "Sq. M.": activeIsRTL ? "متر مربع" : "Sq. M.",
      Price: activeIsRTL ? "السعر" : "Price",
      "Starting From": activeIsRTL ? "تبدأ من" : "Starting From",

      // Features
      View: activeIsRTL ? "الإطلالة" : "View",
      Floor: activeIsRTL ? "الطابق" : "Floor",
      "Unit Type": activeIsRTL ? "نوع الوحدة" : "Unit Type",
      Completion: activeIsRTL ? "تاريخ التسليم" : "Completion",
      "Payment Plan": activeIsRTL ? "خطة السداد" : "Payment Plan",
    };

    const translatedSpecs = {};
    Object.keys(specs).forEach((key) => {
      const value = specs[key];

      // Translate both key and value
      const translatedKey = translationMap[key] || key;
      let translatedValue = value;

      // Check if value exists in translation map
      if (translationMap[value]) {
        translatedValue = translationMap[value];
      } else {
        // Handle combined strings like "1 BEDROOM + 1 MASTER BATH..." with proper spacing
        let processedValue = value;

        // Add proper spacing around plus signs
        processedValue = processedValue.replace(/\s*\+\s*/g, " + ");

        // Translate individual components while preserving spacing
        for (const [english, arabic] of Object.entries(translationMap)) {
          if (processedValue.includes(english)) {
            // Use word boundaries to ensure exact matches
            const regex = new RegExp(`\\b${english}\\b`, "g");
            processedValue = processedValue.replace(regex, arabic);
          }
        }

        translatedValue = processedValue;
      }

      translatedSpecs[translatedKey] = translatedValue;
    });

    return translatedSpecs;
  };

  // Format unit specifications with proper spacing
  const formatUnitSpec = (value) => {
    if (typeof value !== "string") return value;

    // Add proper spacing around plus signs and ensure consistent formatting
    let formatted = value
      .replace(/\s*\+\s*/g, " + ") // Ensure space around plus signs
      .replace(/\s+/g, " ") // Normalize multiple spaces
      .trim();

    return formatted;
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
                {Object.entries(getTranslatedSpecs(currentPlan.specs)).map(
                  ([key, value]) => (
                    <div key={key} className={styles.specItem}>
                      <div className={styles.specLabel}>{key}</div>
                      <div className={styles.specValue}>
                        {formatUnitSpec(value)}
                      </div>
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
                        d={activeIsRTL ? "M9 18l6-6-6-6" : "M15 18l-6-6 6-6"}
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
                        d={activeIsRTL ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"}
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
