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

  const currentPlan = data.plans[activeTab];
  const hasMultipleImages = currentPlan.images && currentPlan.images.length > 1;

  const nextImage = () => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex((prev) => (prev + 1) % currentPlan.images.length);
  };

  const prevImage = () => {
    if (!hasMultipleImages) return;
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + currentPlan.images.length) % currentPlan.images.length
    );
  };

  // --- SPEC TRANSLATION (same logic you already had) ---
  const getTranslatedSpecs = (specs) => {
    const translationMap = {
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

      "1 BEDROOM": activeIsRTL ? "1 غرفة نوم" : "1 BEDROOM",
      "2 BEDROOMS": activeIsRTL ? "2 غرفة نوم" : "2 BEDROOMS",
      "3 BEDROOMS": activeIsRTL ? "3 غرفة نوم" : "3 BEDROOMS",
      "4 BEDROOMS": activeIsRTL ? "4 غرفة نوم" : "4 BEDROOMS",
      "5 BEDROOMS": activeIsRTL ? "5 غرفة نوم" : "5 BEDROOMS",

      Area: activeIsRTL ? "المساحة" : "Area",
      Size: activeIsRTL ? "الحجم" : "Size",
      "Sq. Ft.": activeIsRTL ? "قدم مربع" : "Sq. Ft.",
      "Sq. M.": activeIsRTL ? "متر مربع" : "Sq. M.",
      Price: activeIsRTL ? "السعر" : "Price",
      "Starting From": activeIsRTL ? "تبدأ من" : "Starting From",

      View: activeIsRTL ? "الإطلالة" : "View",
      Floor: activeIsRTL ? "الطابق" : "Floor",
      "Unit Type": activeIsRTL ? "نوع الوحدة" : "Unit Type",
      Completion: activeIsRTL ? "تاريخ التسليم" : "Completion",
      "Payment Plan": activeIsRTL ? "خطة السداد" : "Payment Plan",
    };

    const translatedSpecs = {};
    Object.keys(specs).forEach((key) => {
      const value = specs[key];
      const translatedKey = translationMap[key] || key;
      let translatedValue = value;

      if (translationMap[value]) {
        translatedValue = translationMap[value];
      } else if (typeof value === "string") {
        let processed = value.replace(/\s*\+\s*/g, " + ");
        for (const [english, arabic] of Object.entries(translationMap)) {
          const regex = new RegExp(`\\b${english}\\b`, "g");
          processed = processed.replace(regex, arabic);
        }
        translatedValue = processed;
      }

      translatedSpecs[translatedKey] = translatedValue;
    });

    return translatedSpecs;
  };

  const formatUnitSpec = (value) => {
    if (typeof value !== "string") return value;
    return value
      .replace(/\s*\+\s*/g, " + ")
      .replace(/\s+/g, " ")
      .trim();
  };

  const translatedSpecs = getTranslatedSpecs(currentPlan.specs || {});

  // Helper: section heading “Floor Plan”
  const getSectionTitle = () => (activeIsRTL ? "مخطط الطوابق" : "Floor Plan");

  return (
    <section
      className={styles.floorplanSection}
      dir={activeIsRTL ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        {/* TITLE */}
        <header className={styles.header}>
          <h2 className={styles.floorTitle}>{getSectionTitle()}</h2>
          <div className={styles.floorUnderline} />
        </header>

        {/* TABS: 1 BR / 2 BR / 3 BR */}
        <nav className={styles.tabsWrapper} aria-label="Floor plan tabs">
          <ul className={styles.detailTabs}>
            {data.plans.map((plan, index) => (
              <li key={plan.id || index} className={styles.detailTabItem}>
                <button
                  type="button"
                  className={`${styles.navLink} ${
                    activeTab === index ? styles.navLinkActive : ""
                  }`}
                  onClick={() => {
                    setActiveTab(index);
                    setCurrentImageIndex(0);
                  }}
                >
                  {getLocalizedText(
                    plan.shortLabel || plan.title,
                    activeLocale
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* TAB CONTENT */}
        <div className={styles.tabContent}>
          <div className={styles.row}>
            {/* LEFT: specs */}
            <div className={styles.colText}>
              <h4 className={styles.planHeading}>
                {getLocalizedText(
                  currentPlan.fullTitle || currentPlan.title,
                  activeLocale
                )}
              </h4>

              <ul className={styles.specList}>
                {Object.entries(translatedSpecs).map(([key, value]) => (
                  <li key={key} className={styles.specItem}>
                    <span className={styles.specLabel}>{key} :</span>
                    <span className={styles.specValue}>
                      {formatUnitSpec(value)}
                    </span>
                  </li>
                ))}
              </ul>

              {currentPlan.brochureUrl && (
                <ul className={styles.buttonList}>
                  <li>
                    <a
                      href={currentPlan.brochureUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.buttonMain}
                    >
                      <span className={styles.buttonText}>
                        {activeIsRTL
                          ? "تحميل مخطط الطابق"
                          : "Download Floor Plan"}
                      </span>
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* RIGHT: image with Sobha-style base shape */}
            <div className={styles.colImage}>
              <div className={styles.virtualTourWrapper}>
                <Image
                  src={
                    currentPlan.images?.[currentImageIndex] ||
                    "/placeholder-floorplan.jpg"
                  }
                  alt={`${getLocalizedText(currentPlan.title, activeLocale)} ${
                    activeIsRTL ? "مخطط" : "floor plan"
                  }`}
                  fill
                  className={styles.planImage}
                  sizes="(max-width: 767px) 90vw, (max-width: 1200px) 460px, 540px"
                />

                {hasMultipleImages && (
                  <div className={styles.commonArrow}>
                    <button
                      type="button"
                      className={`${styles.swiperButton} ${styles.prev}`}
                      onClick={prevImage}
                      aria-label={activeIsRTL ? "السابق" : "Previous"}
                    >
                      <span />
                    </button>
                    <button
                      type="button"
                      className={`${styles.swiperButton} ${styles.next}`}
                      onClick={nextImage}
                      aria-label={activeIsRTL ? "التالي" : "Next"}
                    >
                      <span />
                    </button>
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
