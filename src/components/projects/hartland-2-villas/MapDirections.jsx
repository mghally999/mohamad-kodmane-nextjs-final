"use client";

import { useState } from "react";
import styles from "@/styles/projects/sky-parks/MapDirections.module.css";

export default function MapDirections({
  projectName = "Sobha SkyParks",
  address = "Business Bay, Dubai, UAE",
  lat = 25.1874304,
  lng = 55.2573965,
  zoom = 15,
  title = "Project Location",
}) {
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    projectName
  )}+${encodeURIComponent(address)}&z=${zoom}&output=embed&hl=en`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

  const copyAddress = () => {
    navigator.clipboard.writeText(address);
    // You can add a toast notification here if needed
  };

  return (
    <section className={styles.luxuryMapSection} aria-label="Project location">
      {/* Elegant Header */}
      <div className={styles.mapHeader}>
        <h2 className={styles.mapTitle}>{title}</h2>
        <div className={styles.titleLine}></div>
      </div>

      {/* Luxury Map Container */}
      <div className={styles.luxuryMapCard}>
        {/* Project Info Banner */}
        <div className={styles.projectBanner}>
          <div className={styles.projectIcon}>📍</div>
          <div className={styles.projectInfo}>
            <h3 className={styles.projectName}>{projectName}</h3>
            <p className={styles.projectAddress}>{address}</p>
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
              title={`${projectName} Location`}
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
          >
            {/* <span className={styles.buttonIcon}>🚗</span> */}
            <span className={styles.buttonText}>Get Directions</span>
            <span className={styles.buttonArrow}>→</span>
          </a>

          {/* <div className={styles.actionDivider}>or</div> */}

          {/* <button className={styles.copyButton} onClick={copyAddress}>
            <span className={styles.buttonIcon}>📋</span>
            <span className={styles.buttonText}>Copy Address</span>
          </button> */}
        </div>
      </div>

      {/* Location Features */}
      <div className={styles.locationFeatures}>
        <div className={styles.featureItem}>
          <span className={styles.featureIcon}>⏱️</span>
          <span className={styles.featureText}>20 min from Dubai Airport</span>
        </div>
        <div className={styles.featureItem}>
          <span className={styles.featureIcon}>🏙️</span>
          <span className={styles.featureText}>Downtown Access</span>
        </div>
        <div className={styles.featureItem}>
          <span className={styles.featureIcon}>🛣️</span>
          <span className={styles.featureText}>Major Highway Proximity</span>
        </div>
      </div>
    </section>
  );
}
