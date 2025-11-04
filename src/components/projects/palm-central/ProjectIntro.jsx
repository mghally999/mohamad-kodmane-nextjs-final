"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/projects/ProjectIntro.module.css";

export default function ProjectIntro({
  title = "PALM CENTRAL – RESORT-STYLE LIVING BY NAKHEEL",
  paragraphs = [
    "Welcome to Palm Central on Palm Jumeirah — a contemporary beachside address by Nakheel. Wake up to turquoise lagoons, landscaped courts, and skyline views in a collection of refined residences.",
    "Designed for effortless everyday living, Palm Central combines resort amenities with serene architecture and calming natural palettes.",
  ],
  imgUrl = "https://luxury-real-estate-media.b-cdn.net/palm-central/intro-main.jpg",
  imgAlt = "Palm Central by Nakheel overlooking the lagoon and skyline",
  companyName = "Nakheel",
  projectName = "Palm Central",
  location = "Palm Jumeirah, Dubai",
}) {
  const [activeBrochure, setActiveBrochure] = useState(0);
  const [showAllBrochures, setShowAllBrochures] = useState(false);

  // ─────────────────────────  BROCHURES (REAL FILES)  ─────────────────────────
  const brochures = [
    {
      id: 1,
      name: "Project Briefing",
      fileName: "palm-central-project-briefing.pdf",
      url: "https://luxury-real-estate-media.b-cdn.net/palm-central/palm-central-project-briefing.pdf",
      description: "Full concept, amenities and lifestyle overview",
      icon: "📘",
      color: "#3A7BD5",
      size: "48.3 MB",
      category: "Overview",
    },
    {
      id: 2,
      name: "Masterplan",
      fileName: "palm-central-masterplan.pdf",
      url: "https://luxury-real-estate-media.b-cdn.net/palm-central/palm-central-masterplan.pdf",
      description: "Site layout, landscape and circulation",
      icon: "🗺️",
      color: "#2E8B57",
      size: "20.1 MB",
      category: "Site",
    },
    {
      id: 3,
      name: "Prices & Payment Plan",
      fileName: "palm-central-prices-and-payment-plan.pdf",
      url: "https://luxury-real-estate-media.b-cdn.net/palm-central/palm-central-prices-and-payment-plan.pdf",
      description: "Latest pricing, terms and schedules",
      icon: "💠",
      color: "#A855F7",
      size: "13.7 MB",
      category: "Sales",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: projectName,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
    brand: { "@type": "Brand", name: companyName },
    description: "Beachside residences on Palm Jumeirah by Nakheel.",
    image: imgUrl,
    url: typeof window !== "undefined" ? window.location.href : undefined,
  };

  const handleBrochureDownload = (brochure, event) => {
    event.preventDefault();
    const link = document.createElement("a");
    link.href = brochure.url; // ← real PDF URL
    link.download = brochure.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const button = event.currentTarget;
    button.classList.add(styles.downloading);
    setTimeout(() => button.classList.remove(styles.downloading), 1200);
  };

  const visibleBrochures = showAllBrochures ? brochures : brochures.slice(0, 2);

  return (
    <section
      className={styles.projectIntro}
      aria-label={`${projectName} introduction`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.introContainer}>
        {/* Text */}
        <div className={styles.textContent}>
          <div className={styles.titleSection}>
            <h2 className={styles.projectTitle}>{title}</h2>
            <div className={styles.titleDivider}></div>
          </div>

          <div className={styles.descriptionSection}>
            {paragraphs.map((p, i) => (
              <p key={i} className={styles.projectDescription}>
                {p}
              </p>
            ))}
          </div>

          {/* Brochures */}
          <div className={styles.brochuresSection}>
            <div className={styles.sectionHeader}>
              <h3 className={styles.sectionTitle}>Project Brochures</h3>
              <div className={styles.sectionSubtitle}>
                Download the official documents for Palm Central
              </div>
            </div>

            <div className={styles.brochuresGrid}>
              {visibleBrochures.map((brochure, index) => (
                <div
                  key={brochure.id}
                  className={`${styles.brochureCard} ${
                    activeBrochure === index ? styles.active : ""
                  }`}
                  onMouseEnter={() => setActiveBrochure(index)}
                >
                  <div className={styles.brochureHeader}>
                    <div
                      className={styles.brochureIcon}
                      style={{
                        backgroundColor: `${brochure.color}20`,
                        borderColor: brochure.color,
                      }}
                    >
                      <span className={styles.icon}>{brochure.icon}</span>
                    </div>
                    <div className={styles.brochureInfo}>
                      <h4 className={styles.brochureName}>{brochure.name}</h4>
                      <div className={styles.brochureMeta}>
                        <span className={styles.brochureCategory}>
                          {brochure.category}
                        </span>
                        <span className={styles.brochureSize}>
                          {brochure.size}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className={styles.brochureDescription}>
                    {brochure.description}
                  </p>

                  <div className={styles.brochureActions}>
                    <a
                      className={styles.downloadButton}
                      href={brochure.url}
                      onClick={(e) => handleBrochureDownload(brochure, e)}
                      aria-label={`Download ${brochure.name} brochure`}
                    >
                      <span className={styles.downloadText}>Download PDF</span>
                      <div className={styles.downloadIcon}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
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
                      </div>
                    </a>
                    <div className={styles.fileName}>{brochure.fileName}</div>
                  </div>
                </div>
              ))}
            </div>

            {brochures.length > 2 && (
              <button
                className={styles.toggleBrochures}
                onClick={() => setShowAllBrochures(!showAllBrochures)}
              >
                <span>
                  {showAllBrochures
                    ? "Show Less"
                    : `+${brochures.length - 2} More Brochures`}
                </span>
                <div
                  className={`${styles.toggleIcon} ${
                    showAllBrochures ? styles.expanded : ""
                  }`}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M6 9l6 6 6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>

        {/* Image */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={imgUrl}
                alt={imgAlt}
                fill
                className={styles.mainImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
              <div className={styles.imageBorder}></div>
              <div className={styles.imageOverlay}></div>
            </div>

            {/* Floating mini-cards */}
            {brochures.slice(0, 3).map((b, i) => (
              <div
                key={b.id}
                className={styles.floatingBrochureCard}
                style={{
                  top: `${22 + i * 24}%`,
                  right: i % 2 === 0 ? "-30px" : "auto",
                  left: i % 2 !== 0 ? "-30px" : "auto",
                  animationDelay: `${i * 1.2}s`,
                }}
              >
                <div
                  className={styles.floatingCardIcon}
                  style={{ backgroundColor: b.color }}
                >
                  {b.icon}
                </div>
                <div className={styles.floatingCardContent}>
                  <div className={styles.floatingCardName}>{b.name}</div>
                  <div className={styles.floatingCardCategory}>
                    {b.category}
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
