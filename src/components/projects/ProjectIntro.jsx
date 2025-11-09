"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/projects/ProjectIntro.module.css";

export default function ProjectIntro({ data, projectData }) {
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
      alt: intro.imgAlt || project.name,
      title: project.name,
      description: project.location || "Premium location in Dubai",
    },
  ];

  // Key highlights data
  const highlights = [
    {
      icon: "📍",
      value: project.location || "Prime Location",
      label: "Location",
    },
    {
      icon: "💰",
      value: project.startingPrice || "AED —",
      label: "Starting Price",
    },
    {
      icon: "📅",
      value: project.completionDate || "TBC",
      label: "Completion",
    },
    {
      icon: "🏗️",
      value: project.status || "Off-Plan",
      label: "Status",
    },
  ];

  // Features data
  // const features = [
  //   { icon: "⭐", text: "Luxury Finishes" },
  //   { icon: "🌊", text: "Swimming Pool" },
  //   { icon: "🏋️", text: "Fitness Center" },
  //   { icon: "🅿️", text: "Parking" },
  //   { icon: "🌴", text: "Landscaped Gardens" },
  //   { icon: "🏊", text: "Infinity Pool" },
  // ];

  return (
    <section
      className={`${styles.projectIntro} ${isVisible ? styles.visible : ""}`}
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
              <span>PREMIUM DEVELOPMENT</span>
            </div>
            <h1 className={styles.heroTitle}>{intro.title || project.name}</h1>
            <p className={styles.heroSubtitle}>
              {project.location || "Luxury living in the heart of Dubai"}
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

            {/* FEATURES GRID */}
          </div>

          {/* RIGHT: CONTENT SECTION */}
          <div className={styles.contentSection}>
            {/* HIGHLIGHTS */}
            <div className={styles.highlightsSection}>
              <h2 className={styles.sectionTitle}>PROJECT HIGHLIGHTS</h2>
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
              <h3 className={styles.sectionTitle}>PROJECT OVERVIEW</h3>
              <div className={styles.descriptionContent}>
                {intro.paragraphs?.map((paragraph, index) => (
                  <p key={index} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* DEVELOPER INFO */}
            <div className={styles.developerSection}>
              <div className={styles.developerCard}>
                <div className={styles.developerIcon}>🏢</div>
                <div className={styles.developerContent}>
                  <h4 className={styles.developerTitle}>DEVELOPER</h4>
                  <div className={styles.developerName}>
                    {project.developer || "Premium Developer"}
                  </div>
                  <p className={styles.developerDescription}>
                    Trusted developer with proven track record in luxury real
                    estate
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
                  <span>{brochure.title || "DOWNLOAD BROCHURE"}</span>
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
              <button className={styles.secondaryButton}>
                <span>SCHEDULE VIEWING</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M22 6l-10 7L2 6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
