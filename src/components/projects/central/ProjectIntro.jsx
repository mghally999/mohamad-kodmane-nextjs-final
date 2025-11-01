"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/projects/central/ProjectIntro.module.css";

export default function ProjectIntro({
  title = "LIVE WHERE THE SKY FEELS LIKE HOME",
  paragraphs = [
    "Rising over Sheikh Zayed Road, Sobha SkyParks brings together the best of city life and elevated calm. This 81-storey architectural icon places you at the heart of Dubai's most desired location, steps away from business districts, fine dining, designer labels, and vibrant cultural landmarks.",
    "Choose from 1–4 bedroom residences and elegant duplexes, each offering sweeping views of the Arabian Gulf and Downtown Dubai skyline. Here, every moment flows seamlessly between movement and stillness, between the pulse of the city and the quiet above the clouds.",
  ],
  imgUrl = "https://luxury-real-estate-media.b-cdn.net/sobha-central/new/intro-main.jpg",
  imgAlt = "Sobha SkyParks luxury residences with panoramic Dubai views",
  companyName = "Sobha Realty",
  projectName = "Sobha SkyParks",
  location = "Sheikh Zayed Road, Dubai",
}) {
  const [activeBrochure, setActiveBrochure] = useState(0);
  const [showAllBrochures, setShowAllBrochures] = useState(false);

  const brochures = [
    {
      id: 1,
      name: "The Tranquil",
      fileName: "The Tranquil at Sobha Central_Brochure.pdf",
      description: "Serene living spaces with panoramic views",
      icon: "🌿",
      color: "#2E8B57",
      size: "4.2 MB",
      category: "Residential",
    },
    {
      id: 2,
      name: "The Horizon",
      fileName: "Sobha Central Brochure - The Horizon.pdf",
      description: "Expansive views and modern luxury",
      icon: "🌅",
      color: "#FF6B35",
      size: "3.8 MB",
      category: "Premium",
    },
    {
      id: 3,
      name: "The Eden",
      fileName: "Sobha Central Brochure - The Eden.pdf",
      description: "Lush green spaces and natural beauty",
      icon: "🏞️",
      color: "#4CAF50",
      size: "5.1 MB",
      category: "Gardens",
    },
    {
      id: 4,
      name: "The Serene",
      fileName: "SOBHA CENTRAL - THE SERENE BROCHURE.pdf",
      description: "Peaceful retreat in the city center",
      icon: "☁️",
      color: "#2196F3",
      size: "4.7 MB",
      category: "Luxury",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: projectName,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      streetAddress: "Sheikh Zayed Road",
      addressCountry: "AE",
    },
    brand: { "@type": "Brand", name: companyName },
    description:
      "81-storey luxury residential tower offering 1-4 bedroom apartments with panoramic Dubai views.",
    image: imgUrl,
    url: typeof window !== "undefined" ? window.location.href : undefined,
  };

  const handleBrochureDownload = (brochure, event) => {
    event.preventDefault();
    // Simulate download - in real implementation, this would be the actual PDF URL
    console.log(`Downloading: ${brochure.fileName}`);

    // Create a temporary link for download
    const link = document.createElement("a");
    link.href = `#${brochure.id}`;
    link.download = brochure.fileName;
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

  const visibleBrochures = showAllBrochures ? brochures : brochures.slice(0, 2);

  return (
    <section
      className={styles.projectIntro}
      aria-label={`${projectName} introduction`}
    >
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className={styles.introContainer}>
        {/* Text Content */}
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

          {/* Brochures Section */}
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
                    <button
                      className={styles.downloadButton}
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

                    <div className={styles.fileName}>{brochure.fileName}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show More/Less Toggle */}
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
                  // Simulate downloading all brochures
                  brochures.forEach((brochure, index) => {
                    setTimeout(() => {
                      const link = document.createElement("a");
                      link.href = `#${brochure.id}`;
                      link.download = brochure.fileName;
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
                <span>Download All Brochures ({brochures.length})</span>
              </button>
              <div className={styles.downloadAllInfo}>
                ZIP file • 17.8 MB total
              </div>
            </div>
          </div>
        </div>

        {/* Creative Image Display */}
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            {/* Main Image with Creative Border */}
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

            {/* Floating Brochure Cards */}
            {brochures.slice(0, 3).map((brochure, index) => (
              <div
                key={brochure.id}
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
                  style={{ backgroundColor: brochure.color }}
                >
                  {brochure.icon}
                </div>
                <div className={styles.floatingCardContent}>
                  <div className={styles.floatingCardName}>{brochure.name}</div>
                  <div className={styles.floatingCardCategory}>
                    {brochure.category}
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
