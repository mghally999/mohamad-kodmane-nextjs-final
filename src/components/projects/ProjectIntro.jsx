"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/projects/ProjectIntro.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectIntro({ data, projectData, isRTL, locale }) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!data || !projectData) {
    console.error("ProjectIntro: Missing data");
    return null;
  }

  const { project } = projectData;
  const intro = data;

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  // Property images with fallback
  const propertyImages = intro.propertyImages || [
    {
      src: intro.imgUrl || `${CDN}/sky-parks/exterior-night-01.jpg`,
      alt: intro.imgAlt || getLocalizedText(project.name, activeLocale),
      title: getLocalizedText(project.name, activeLocale),
      description:
        getLocalizedText(project.location, activeLocale) ||
        (activeIsRTL ? "موقع متميز في دبي" : "Premium location in Dubai"),
    },
  ];

  // Key highlights data - using localized data
  const highlights = [
    {
      icon: "📍",
      value:
        getLocalizedText(project.location, activeLocale) ||
        (activeIsRTL ? "موقع متميز" : "Prime Location"),
      label: activeIsRTL ? "الموقع" : "Location",
    },
    {
      icon: "💰",
      value: getLocalizedText(project.startingPrice, activeLocale) || "AED —",
      label: activeIsRTL ? "السعر الابتدائي" : "Starting Price",
    },
    {
      icon: "📅",
      value: getLocalizedText(project.completionDate, activeLocale) || "TBC",
      label: activeIsRTL ? "تاريخ الانتهاء" : "Completion",
    },
    {
      icon: "🏗️",
      value:
        getLocalizedText(project.status, activeLocale) ||
        (activeIsRTL ? "قيد الإنشاء" : "Off-Plan"),
      label: activeIsRTL ? "الحالة" : "Status",
    },
  ];

  return (
    <section
      className={`${styles.projectIntro} ${isVisible ? styles.visible : ""}`}
      dir={activeIsRTL ? "rtl" : "ltr"}
    >
      <div className={styles.container}>
        {/* HERO SECTION */}
        <div className={styles.heroSection}>
          <div
            className={styles.heroBackground}
            style={{
              backgroundImage: `url('${propertyImages[0].src}')`,
            }}
          >
            <div className={styles.heroOverlay}></div>
          </div>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>{activeIsRTL ? "تطوير متميز" : "PREMIUM DEVELOPMENT"}</span>
            </div>
            <h1 className={styles.heroTitle}>
              {getLocalizedText(intro.title, activeLocale) ||
                getLocalizedText(project.name, activeLocale)}
            </h1>
            <p className={styles.heroSubtitle}>
              {getLocalizedText(project.location, activeLocale) ||
                (activeIsRTL
                  ? "عيش فاخر في قلب دبي"
                  : "Luxury living in the heart of Dubai")}
            </p>
          </div>
        </div>

        {/* MAIN CONTENT GRID */}
        <div className={styles.contentGrid}>
          {/* LEFT: IMAGE GALLERY */}
          <div className={styles.gallerySection}>
            <div className={styles.galleryContainer}>
              <div className={styles.mainImage}>
                <Image
                  src={propertyImages[activeImage].src}
                  alt={propertyImages[activeImage].alt}
                  fill
                  className={styles.image}
                  priority
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.imageContent}>
                  <h3 className={styles.imageTitle}>
                    {propertyImages[activeImage].title}
                  </h3>
                  <p className={styles.imageDescription}>
                    {propertyImages[activeImage].description}
                  </p>
                </div>
              </div>

              {/* Image Navigation */}
              {propertyImages.length > 1 && (
                <div className={styles.imageNav}>
                  {propertyImages.map((_, index) => (
                    <button
                      key={index}
                      className={`${styles.navDot} ${
                        activeImage === index ? styles.active : ""
                      }`}
                      onClick={() => setActiveImage(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: CONTENT SECTION */}
          <div className={styles.contentSection}>
            {/* HIGHLIGHTS */}
            <div className={styles.highlightsSection}>
              <h2 className={styles.sectionTitle}>
                {activeIsRTL ? "أبرز معالم المشروع" : "PROJECT HIGHLIGHTS"}
              </h2>
              <div className={styles.highlightsGrid}>
                {highlights.map((highlight, index) => (
                  <div key={index} className={styles.highlightCard}>
                    <div className={styles.highlightIcon}>{highlight.icon}</div>
                    <div className={styles.highlightContent}>
                      <div className={styles.highlightValue}>
                        {highlight.value}
                      </div>
                      <div className={styles.highlightLabel}>
                        {highlight.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className={styles.descriptionSection}>
              <h3 className={styles.sectionTitle}>
                {activeIsRTL ? "نظرة عامة على المشروع" : "PROJECT OVERVIEW"}
              </h3>
              <div className={styles.descriptionContent}>
                {intro.paragraphs.map((paragraph, index) => (
                  <p key={index} className={styles.paragraph}>
                    {getLocalizedText(paragraph, activeLocale)}
                  </p>
                ))}
              </div>
            </div>

            {/* DEVELOPER INFO */}
            <div className={styles.developerSection}>
              <div className={styles.developerCard}>
                <div className={styles.developerIcon}>🏢</div>
                <div className={styles.developerContent}>
                  <h4 className={styles.developerTitle}>
                    {activeIsRTL ? "المطور" : "DEVELOPER"}
                  </h4>
                  <div className={styles.developerName}>
                    {getLocalizedText(project.developer, activeLocale) ||
                      (activeIsRTL ? "مطور متميز" : "Premium Developer")}
                  </div>
                  <p className={styles.developerDescription}>
                    {activeIsRTL
                      ? "مطور موثوق بسجل حافل في مجال العقارات الفاخرة"
                      : "Trusted developer with proven track record in luxury real estate"}
                  </p>
                </div>
              </div>
            </div>

            {/* CALL TO ACTION */}
            <div className={styles.actionsSection}>
              {intro.brochures?.map((brochure, index) => (
                <a
                  key={index}
                  href={brochure.url}
                  className={styles.primaryButton}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    {getLocalizedText(brochure.title, activeLocale) ||
                      (activeIsRTL ? "تحميل الكتيب" : "DOWNLOAD BROCHURE")}
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
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
