"use client";

import { useState, useRef } from "react";
import styles from "@/styles/projects/AmenitiesShowcase.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";

export default function AmenitiesShowcase({
  data,
  projectData,
  isRTL,
  locale,
}) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  // SAFETY CHECK - if no data, return nothing
  if (!data || !projectData) {
    console.error("AmenitiesShowcase: Missing data");
    return null;
  }

  const amenitiesData = data;
  const [activeAmenity, setActiveAmenity] = useState(null);
  const sectionRef = useRef(null);

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: getLocalizedText(projectData.project.name, activeLocale),
    description: getLocalizedText(projectData.seo?.description, activeLocale),
    amenities: amenitiesData.amenities.map((amenity) =>
      getLocalizedText(amenity.label, activeLocale)
    ),
    url: typeof window !== "undefined" ? window.location.href : undefined,
  };

  return (
    <section
      ref={sectionRef}
      className={styles.amenitiesSection}
      aria-label={`${getLocalizedText(
        projectData.project.name,
        activeLocale
      )} ${activeIsRTL ? "المرافق" : "amenities"}`}
      dir={activeIsRTL ? "rtl" : "ltr"}
    >
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.container}>
        {/* Title - Sobha Style */}
        <h2 className={styles.title}>
          {getLocalizedText(amenitiesData.title, activeLocale)}
        </h2>

        {/* Compact Grid */}
        <div className={styles.amenitiesGrid}>
          {amenitiesData.amenities.map((amenity, index) => (
            <div
              key={index}
              className={`${styles.amenityCard} ${
                activeAmenity === index ? styles.active : ""
              }`}
              onMouseEnter={() => setActiveAmenity(index)}
              onMouseLeave={() => setActiveAmenity(null)}
              onFocus={() => setActiveAmenity(index)}
              onBlur={() => setActiveAmenity(null)}
              tabIndex={0}
              role="button"
              aria-label={`${
                activeIsRTL ? "تعرف على المزيد عن" : "Learn more about"
              } ${getLocalizedText(amenity.label, activeLocale)}`}
            >
              <div className={styles.iconContainer}>
                <span className={styles.icon} aria-hidden="true">
                  {amenity.icon}
                </span>
              </div>
              <h3 className={styles.label}>
                {getLocalizedText(amenity.label, activeLocale)}
              </h3>
            </div>
          ))}
        </div>

        {/* Optional CTA Section - Sobha Style */}
        {amenitiesData.cta && (
          <div className={styles.ctaContainer}>
            {amenitiesData.cta.buttons?.map((button, index) => (
              <a
                key={index}
                href={button.url}
                className={`${styles.ctaButton} ${
                  button.type === "primary" ? styles.ctaPrimary : ""
                }`}
                target={button.url?.startsWith("http") ? "_blank" : "_self"}
                rel={
                  button.url?.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={getLocalizedText(button.text, activeLocale)}
              >
                <span className={styles.ctaText}>
                  {getLocalizedText(button.text, activeLocale)}
                </span>
                <div className={styles.ctaIcon}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
