"use client";

import { useState, useRef, useEffect } from "react";
import styles from "@/styles/projects/AmenitiesShowcase.module.css";

/**
 * Universal Amenities Showcase - Sobha Realty Style
 */
export default function AmenitiesShowcase({ data, projectData }) {
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
    name: projectData.project.name,
    description: projectData.seo?.description,
    amenities: amenitiesData.amenities.map((amenity) => amenity.label),
    url: typeof window !== "undefined" ? window.location.href : undefined,
  };

  return (
    <section
      ref={sectionRef}
      className={styles.amenitiesSection}
      aria-label={`${projectData.project.name} amenities`}
    >
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.container}>
        {/* Title - Sobha Style */}
        <h2 className={styles.title}>{amenitiesData.title}</h2>

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
              aria-label={`Learn more about ${amenity.label}`}
            >
              <div className={styles.iconContainer}>
                <span className={styles.icon} aria-hidden="true">
                  {amenity.icon}
                </span>
              </div>
              <h3 className={styles.label}>{amenity.label}</h3>
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
                aria-label={button.text}
              >
                <span className={styles.ctaText}>{button.text}</span>
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
