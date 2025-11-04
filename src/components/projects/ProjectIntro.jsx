"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/projects/ProjectIntro.module.css";

/**
 * Universal Project Intro Section - Works for ALL projects
 * Conditionally renders brochure styles based on number of brochures
 */
export default function ProjectIntro({ data, projectData }) {
  // SAFETY CHECK - if no data, return nothing
  if (!data || !projectData) {
    console.error("ProjectIntro: Missing data");
    return null;
  }

  const projectInfo = projectData.project;
  const introData = data;
  const [activeBrochure, setActiveBrochure] = useState(0);
  const [showAllBrochures, setShowAllBrochures] = useState(false);

  // Check if we have multiple brochures for fancy styling
  const hasMultipleBrochures =
    introData.brochures && introData.brochures.length > 1;
  const visibleBrochures = showAllBrochures
    ? introData.brochures
    : introData.brochures?.slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: projectInfo.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      streetAddress: projectInfo.location,
      addressCountry: "AE",
    },
    brand: {
      "@type": "Brand",
      name: projectInfo.developer,
    },
    description: projectData.seo?.description,
    image: introData.imgUrl,
    url: typeof window !== "undefined" ? window.location.href : undefined,
  };

  const handleBrochureDownload = (brochure, event) => {
    event.preventDefault();

    // Create a temporary link for download
    const link = document.createElement("a");
    link.href = brochure.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Add download animation
    const button = event.currentTarget;
    button.classList.add(styles.downloading);
    setTimeout(() => {
      button.classList.remove(styles.downloading);
    }, 2000);
  };

  return (
    <section className={styles.projectIntro} aria-label="Project introduction">
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.introContainer}>
        {/* Text Content */}
        <div className={styles.textContent}>
          <div className={styles.titleSection}>
            <h2 className={styles.projectTitle}>{introData.title}</h2>
            <div className={styles.titleDivider}></div>
          </div>

          {/* Project Highlights Grid */}
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>🏗️</div>
              <div className={styles.highlightContent}>
                <div className={styles.highlightValue}>
                  {projectInfo.status}
                </div>
                <div className={styles.highlightLabel}>Status</div>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>💰</div>
              <div className={styles.highlightContent}>
                <div className={styles.highlightValue}>
                  {projectInfo.startingPrice}
                </div>
                <div className={styles.highlightLabel}>Starting Price</div>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <div className={styles.highlightIcon}>📅</div>
              <div className={styles.highlightContent}>
                <div className={styles.highlightValue}>
                  {projectInfo.completionDate}
                </div>
                <div className={styles.highlightLabel}>Completion</div>
              </div>
            </div>
          </div>

          <div className={styles.descriptionSection}>
            {introData.paragraphs.map((p, i) => (
              <p key={i} className={styles.projectDescription}>
                {p}
              </p>
            ))}
          </div>

          {/* CONDITIONAL BROCHURES RENDERING */}
          {hasMultipleBrochures ? (
            /* FANCY BROCHURES SECTION (Multiple brochures) */
            <div className={styles.brochuresSection}>
              <div className={styles.sectionHeader}>
                <h3 className={styles.sectionTitle}>Project Brochures</h3>
                <div className={styles.sectionSubtitle}>
                  Explore our exclusive collection of luxury living spaces
                </div>
              </div>

              <div className={styles.brochuresGrid}>
                {visibleBrochures.map((brochure, index) => (
                  <div
                    key={index}
                    className={`${styles.brochureCard} ${
                      activeBrochure === index ? styles.active : ""
                    }`}
                    onMouseEnter={() => setActiveBrochure(index)}
                  >
                    <div className={styles.brochureHeader}>
                      <div
                        className={styles.brochureIcon}
                        style={{
                          backgroundColor: `${brochure.color || "#d7b46a"}20`,
                          borderColor: brochure.color || "#d7b46a",
                        }}
                      >
                        <span className={styles.icon}>
                          {brochure.icon || "📄"}
                        </span>
                      </div>
                      <div className={styles.brochureInfo}>
                        <h4 className={styles.brochureName}>
                          {brochure.title}
                        </h4>
                        <div className={styles.brochureMeta}>
                          <span className={styles.brochureCategory}>
                            {brochure.category || "Brochure"}
                          </span>
                          <span className={styles.brochureSize}>
                            {brochure.size || "PDF"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className={styles.brochureDescription}>
                      {brochure.description || `Download the ${brochure.title}`}
                    </p>

                    <div className={styles.brochureActions}>
                      <button
                        className={styles.downloadButton}
                        onClick={(e) => handleBrochureDownload(brochure, e)}
                        aria-label={`Download ${brochure.title} brochure`}
                      >
                        <span className={styles.downloadText}>
                          Download PDF
                        </span>
                        <div className={styles.downloadIcon}>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M12 16L12 4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M7 11L12 16L17 11"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M5 20H19"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </button>

                      <div className={styles.fileName}>
                        {brochure.fileName || `${brochure.title}.pdf`}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Show More/Less Toggle */}
              {introData.brochures.length > 2 && (
                <button
                  className={styles.toggleBrochures}
                  onClick={() => setShowAllBrochures(!showAllBrochures)}
                >
                  <span>
                    {showAllBrochures
                      ? "Show Less"
                      : `+${introData.brochures.length - 2} More Brochures`}
                  </span>
                  <div
                    className={`${styles.toggleIcon} ${
                      showAllBrochures ? styles.expanded : ""
                    }`}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 9L12 15L18 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </button>
              )}

              {/* Quick Download All */}
              <div className={styles.downloadAllSection}>
                <button
                  className={styles.downloadAllButton}
                  onClick={() => {
                    // Download all brochures
                    introData.brochures.forEach((brochure, index) => {
                      setTimeout(() => {
                        const link = document.createElement("a");
                        link.href = brochure.url;
                        link.target = "_blank";
                        link.rel = "noopener noreferrer";
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }, index * 300);
                    });
                  }}
                >
                  <div className={styles.downloadAllIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 16L12 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M7 11L12 16L17 11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5 20H19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M19 16V20H5V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <span>
                    Download All Brochures ({introData.brochures.length})
                  </span>
                </button>
                <div className={styles.downloadAllInfo}>
                  ZIP file • {Math.round(introData.brochures.length * 4.5)} MB
                  total
                </div>
              </div>
            </div>
          ) : (
            /* SIMPLE BROCHURES SECTION (Single brochure) */
            <div className={styles.actionSection}>
              {introData.brochures?.map((brochure, index) => {
                const isExternalPdf =
                  brochure.url.startsWith("http") ||
                  brochure.url.endsWith(".pdf");
                const BrochureComponent = isExternalPdf ? "a" : Link;
                const brochureProps = isExternalPdf
                  ? {
                      href: brochure.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {
                      href: brochure.url,
                    };

                return (
                  <BrochureComponent
                    key={index}
                    {...brochureProps}
                    className={`${styles.downloadBrochure} ${
                      styles[brochure.type] || styles.main
                    }`}
                    aria-label={`View ${
                      projectInfo.name
                    } ${brochure.title.toLowerCase()}`}
                  >
                    <span className={styles.brochureText}>
                      {brochure.title || "View Brochure"}
                    </span>
                    <div className={styles.downloadIcon}>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 16L12 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M7 11L12 16L17 11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5 20H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </BrochureComponent>
                );
              })}
            </div>
          )}
        </div>

        {/* Creative Image Display */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            {/* Main Image with Creative Border */}
            <div className={styles.mainImageWrapper}>
              <Image
                src={introData.imgUrl}
                alt={introData.imgAlt}
                fill
                className={styles.mainImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
              <div className={styles.imageBorder}></div>
              <div className={styles.imageOverlay}></div>
            </div>

            {/* Dynamic Floating Cards */}
            {introData.floatingCards?.map((card, index) => (
              <div
                key={index}
                className={styles.floatingCard}
                style={{
                  top: card.top,
                  right: card.right,
                  bottom: card.bottom,
                  left: card.left,
                }}
              >
                <div className={styles.cardIcon}>{card.icon}</div>
                <div className={styles.cardContent}>
                  <div className={styles.cardValue}>{card.value}</div>
                  <div className={styles.cardLabel}>{card.label}</div>
                </div>
              </div>
            ))}

            {/* Floating Brochure Cards (only for multiple brochures) */}
            {hasMultipleBrochures &&
              introData.brochures?.slice(0, 3).map((brochure, index) => (
                <div
                  key={index}
                  className={styles.floatingBrochureCard}
                  style={{
                    top: `${20 + index * 25}%`,
                    right: index % 2 === 0 ? "-30px" : "auto",
                    left: index % 2 !== 0 ? "-30px" : "auto",
                    animationDelay: `${index * 1.5}s`,
                  }}
                >
                  <div
                    className={styles.floatingCardIcon}
                    style={{ backgroundColor: brochure.color || "#d7b46a" }}
                  >
                    {brochure.icon || "📄"}
                  </div>
                  <div className={styles.floatingCardContent}>
                    <div className={styles.floatingCardName}>
                      {brochure.title}
                    </div>
                    <div className={styles.floatingCardCategory}>
                      {brochure.category || "Brochure"}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
