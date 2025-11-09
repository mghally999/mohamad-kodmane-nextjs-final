"use client";

import { useState } from "react";
import styles from "@/styles/projects/MapDirections.module.css";

export default function MapDirections({ data, projectData }) {
  if (!data || !projectData) {
    console.error("MapDirections: Missing data");
    return null;
  }

  const locationData = data;
  const projectInfo = projectData.project;
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Exact Sobha-style Google Maps embed URL
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(
    locationData.address
  )}&zoom=${locationData.zoom || 15}&maptype=roadmap&language=en&region=AE`;

  // Alternative without API key (using search query)
  const mapSrcFallback = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.178518620317!2d55.27076741500938!3d25.197155983893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sae!4v1234567890`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${locationData.lat},${locationData.lng}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(locationData.address);
  };

  return (
    <section className={styles.mapSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{locationData.title}</h2>
          <div className={styles.titleDivider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerDot}></div>
          </div>
        </div>

        {/* Map Container */}
        <div className={styles.mapCard}>
          {/* Project Info */}
          <div className={styles.projectInfo}>
            <h3 className={styles.projectName}>
              {locationData.projectName || projectInfo.name}
            </h3>
            <p className={styles.projectAddress}>{locationData.address}</p>
          </div>

          {/* Map - EXACT SOBHA STYLE */}
          <div className={styles.mapContainer}>
            <div className={styles.mapWrapper}>
              {!isMapLoaded && (
                <div className={styles.mapLoader}>
                  <div className={styles.loadingSpinner}></div>
                  <span>Loading Location Map...</span>
                </div>
              )}
              <iframe
                className={`${styles.mapIframe} ${
                  isMapLoaded ? styles.loaded : ""
                }`}
                src={mapSrcFallback} // Using fallback for demo
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title={`${
                  locationData.projectName || projectInfo.name
                } Location`}
                onLoad={() => setIsMapLoaded(true)}
                style={{
                  border: 0,
                  filter: "grayscale(0.1) contrast(1.1) saturate(1.1)",
                }}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.directionsBtn}
            >
              <span>Get Directions</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <button className={styles.copyBtn} onClick={copyAddress}>
              <span>Copy Address</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
