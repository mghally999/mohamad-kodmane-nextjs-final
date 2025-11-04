"use client";

import { useState } from "react";
import styles from "@/styles/projects/MapDirections.module.css";

/**
 * Universal Map Directions Component - Works for ALL projects
 * Completely generic with data-driven content
 */
export default function MapDirections({ data, projectData }) {
  // SAFETY CHECK - if no data, return nothing
  if (!data || !projectData) {
    console.error("MapDirections: Missing data");
    return null;
  }

  const locationData = data;
  const projectInfo = projectData.project;
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    locationData.projectName || projectInfo.name
  )}+${encodeURIComponent(locationData.address)}&z=${
    locationData.zoom || 15
  }&output=embed&hl=en`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${locationData.lat},${locationData.lng}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(locationData.address);
    // You can add a toast notification here if needed
  };

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: locationData.projectName || projectInfo.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: locationData.address,
      addressLocality: "Umm Al Quwain",
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: locationData.lat,
      longitude: locationData.lng,
    },
    description: projectData.seo?.description,
    url: typeof window !== "undefined" ? window.location.href : undefined,
  };

  return (
    <section className={styles.luxuryMapSection} aria-label="Project location">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Elegant Header */}
      <div className={styles.mapHeader}>
        <h2 className={styles.mapTitle}>{locationData.title}</h2>
        <div className={styles.titleLine}></div>
      </div>

      {/* Luxury Map Container */}
      <div className={styles.luxuryMapCard}>
        {/* Project Info Banner */}
        <div className={styles.projectBanner}>
          <div className={styles.projectIcon}>📍</div>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectName}>
              {locationData.projectName || projectInfo.name}
            </h3>
            <p className={styles.projectAddress}>{locationData.address}</p>
          </div>
        </div>

        {/* Compact Map */}
        <div className={styles.mapContainer}>
          <div className={styles.mapRatioBox}>
            {!isMapLoaded && (
              <div className={styles.mapLoader}>
                <div className={styles.loadingSpinner}></div>
                <span>Loading Location...</span>
              </div>
            )}
            <iframe
              className={`${styles.luxuryIframe} ${
                isMapLoaded ? styles.loaded : ""
              }`}
              src={mapSrc}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title={`${locationData.projectName || projectInfo.name} Location`}
              onLoad={() => setIsMapLoaded(true)}
            />
          </div>
        </div>

        {/* Luxury Actions */}
        <div className={styles.luxuryActions}>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.directionsButton}
            aria-label={`Get directions to ${
              locationData.projectName || projectInfo.name
            }`}
          >
            <span className={styles.buttonText}>Get Directions</span>
            <span className={styles.buttonArrow}>→</span>
          </a>

          {/* Optional Copy Address Button */}
          {locationData.showCopyAddress && (
            <>
              <div className={styles.actionDivider}>or</div>
              <button
                className={styles.copyButton}
                onClick={copyAddress}
                aria-label={`Copy ${
                  locationData.projectName || projectInfo.name
                } address to clipboard`}
              >
                <span className={styles.buttonIcon}>📋</span>
                <span className={styles.buttonText}>Copy Address</span>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Dynamic Location Features */}
      {locationData.proximityFeatures && (
        <div className={styles.locationFeatures}>
          {locationData.proximityFeatures.map((feature, index) => (
            <div key={index} className={styles.featureItem}>
              <span className={styles.featureIcon}>{feature.icon}</span>
              <span className={styles.featureText}>{feature.text}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
