"use client";

import { useState, useRef } from "react";
import Image from "next/image";
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

  if (!data || !projectData) {
    console.error("AmenitiesShowcase: Missing data");
    return null;
  }

  const amenitiesData = data;
  const [activeAmenity, setActiveAmenity] = useState(null);
  const sectionRef = useRef(null);

  // JSON-LD (keep for SEO)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: getLocalizedText(projectData.project.name, activeLocale),
    description: getLocalizedText(projectData.seo?.description, activeLocale),
    amenities: amenitiesData.amenities.map((amenity) =>
      getLocalizedText(amenity.label, activeLocale)
    ),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.container}>
        {/* H2 – same styling idea as “Luxury That Elevates Every Moment” */}
        <h2 className={styles.title}>
          {getLocalizedText(amenitiesData.title, activeLocale)}
        </h2>

        {/* GRID – 6 cards per row on desktop, 2 per row on mobile, same as Sobha */}
        <div className={styles.row}>
          {amenitiesData.amenities.map((amenity, index) => (
            <div key={index} className={styles.col}>
              <button
                type="button"
                className={`${styles.greyCard} ${
                  activeAmenity === index ? styles.greyCardActive : ""
                }`}
                onMouseEnter={() => setActiveAmenity(index)}
                onMouseLeave={() => setActiveAmenity(null)}
                onFocus={() => setActiveAmenity(index)}
                onBlur={() => setActiveAmenity(null)}
                aria-label={getLocalizedText(amenity.label, activeLocale)}
              >
                <span className={styles.iconWrapper}>
                  {/* 
                    🔹 ICON PLACEHOLDER
                    Put your BunnyCDN SVG/PNG URL on amenity.iconUrl
                    so it becomes a 65x65 icon exactly like Sobha.
                  */}
                  {amenity.iconUrl ? (
                    <Image
                      src={amenity.iconUrl}
                      alt={getLocalizedText(amenity.label, activeLocale)}
                      fill
                      sizes="65px"
                      className={styles.iconImg}
                    />
                  ) : (
                    <span className={styles.iconFallback}>
                      {amenity.icon || ""}
                    </span>
                  )}
                </span>

                <p className={styles.label}>
                  {getLocalizedText(amenity.label, activeLocale)}
                </p>
              </button>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON – same hook class name as Sobha for your JS */}
        <div className={styles.buttonMain}>
          <a
            href="javascript:void(0);"
            className="button-1 view-all ameneties-view-all-link"
          >
            {activeIsRTL ? "عرض الكل" : "VIEW ALL"}
            <i />
          </a>
        </div>
      </div>
    </section>
  );
}
