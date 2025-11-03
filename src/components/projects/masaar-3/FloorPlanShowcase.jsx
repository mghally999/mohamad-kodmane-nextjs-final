// components/projects/masaar-3/FloorPlanShowcase.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/projects/sky-parks/FloorPlanShowcase.module.css";

export default function FloorPlanShowcase({
  // Masaar 3: we only have 3BR + 5BR floor visuals (villa community).
  floorPlans = [
    {
      id: "3br-villa",
      title: "3 Bedroom Villa",
      specs: { Unit: "—", Suite: "—", Balcony: "—", Total: "—", Price: "—" },
      images: [
        "https://luxury-real-estate-media.b-cdn.net/massar-3/floor-3br.jpg",
      ],
      features: [],
    },
    {
      id: "5br-villa",
      title: "5 Bedroom Villa",
      specs: { Unit: "—", Suite: "—", Balcony: "—", Total: "—", Price: "—" },
      images: [
        "https://luxury-real-estate-media.b-cdn.net/massar-3/floor-5br.jpg",
      ],
      features: [],
    },
  ],
  // Keeping this prop for backward compatibility (not used if brochures[] exists)
  brochureHref,
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Masaar 3 official PDFs you uploaded
  const brochures = [
    {
      id: "ph1",
      label: "Download Brochure (Phase 1)",
      href: "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%20Ph1%20%20Brochure.pdf",
    },
    {
      id: "ph2",
      label: "Download Brochure (Phase 2)",
      href: "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%20Ph2%20%20Brochure.pdf",
    },
  ];

  const currentPlan = floorPlans[activeTab];
  const hasMultipleImages = currentPlan.images.length > 1;

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % currentPlan.images.length);

  const prevImage = () =>
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + currentPlan.images.length) % currentPlan.images.length
    );

  const handleTabClick = (index) => {
    setActiveTab(index);
    setCurrentImageIndex(0);
  };

  return (
    <section className={styles.luxurySection} aria-label="Floor plan showcase">
      <div className={styles.backgroundElements}>
        <div className={styles.luxuryOrnament}></div>
        <div className={styles.luxuryOrnament}></div>
      </div>

      <div className={styles.luxuryContainer}>
        <div className={styles.titleMasterpiece}>
          <h2 className={styles.mainHeadline}>Masaar 3 — Villa Collections</h2>
          <div className={styles.titleEmbellishment}>
            <div className={styles.embellishmentLine}></div>
            <div className={styles.embellishmentDot}></div>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabsSymphony}>
          {floorPlans.map((plan, index) => (
            <button
              key={plan.id}
              className={`${styles.luxuryTab} ${
                activeTab === index ? styles.tabActive : ""
              }`}
              onClick={() => handleTabClick(index)}
              aria-label={`View ${plan.title}`}
            >
              <div className={styles.tabContent}>
                <div className={styles.tabIcon}>
                  {index === 0 ? "🏡" : "🏠"}
                </div>
                <span className={styles.tabText}>{plan.title}</span>
              </div>
              <div className={styles.tabGlow}></div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={styles.contentMasterpiece}>
          {/* Left: Specs + CTAs */}
          <div className={styles.specsGallery}>
            <div className={styles.specsHeader}>
              <h3 className={styles.planTitle}>{currentPlan.title}</h3>
              <div className={styles.titleAccent}></div>
            </div>

            <div className={styles.specsList}>
              {Object.entries(currentPlan.specs).map(([key, value]) => (
                <div key={key} className={styles.specItem}>
                  <div className={styles.specHeader}>
                    <div className={styles.specIcon}>✦</div>
                    <span className={styles.specKey}>{key}</span>
                  </div>
                  <p className={styles.specValue}>{value}</p>
                </div>
              ))}
            </div>

            {/* Brochure buttons (two PDFs) */}
            <div
              className={styles.ctaGroup}
              style={{ display: "grid", gap: "10px" }}
            >
              {brochures.map((b) => (
                <a
                  key={b.id}
                  href={b.href}
                  className={styles.luxuryCta}
                  rel="noopener"
                  target="_blank"
                  aria-label={b.label}
                >
                  <span className={styles.ctaText}>{b.label}</span>
                  <div className={styles.ctaOrnament}>
                    <div className={styles.ornamentLine}></div>
                    <span className={styles.ctaArrow}>↗</span>
                  </div>
                </a>
              ))}

              {/* fallback: if someone passes brochureHref prop */}
              {!brochures.length && brochureHref && (
                <a
                  href={brochureHref}
                  className={styles.luxuryCta}
                  rel="noopener"
                  target="_blank"
                >
                  <span className={styles.ctaText}>Download Brochure</span>
                  <div className={styles.ctaOrnament}>
                    <div className={styles.ornamentLine}></div>
                    <span className={styles.ctaArrow}>↗</span>
                  </div>
                </a>
              )}
            </div>
          </div>

          {/* Right: Image */}
          <div className={styles.visualMasterpiece}>
            <div className={styles.imageSculpture}>
              <div className={styles.imageFrame}>
                <div className={styles.frameBorder}></div>
                <div className={styles.imageContainer}>
                  <Image
                    src={currentPlan.images[currentImageIndex]}
                    alt={`${currentPlan.title} representative view ${
                      currentImageIndex + 1
                    }`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className={styles.luxuryImage}
                    priority={activeTab === 0 && currentImageIndex === 0}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>

                {hasMultipleImages && (
                  <>
                    <button
                      className={`${styles.imageNav} ${styles.navPrev}`}
                      onClick={prevImage}
                      aria-label="Previous view"
                    >
                      <div className={styles.navCore}>
                        <svg viewBox="0 0 24 24" className={styles.navIcon}>
                          <path
                            d="M15.5 19.5 8 12l7.5-7.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                    <button
                      className={`${styles.imageNav} ${styles.navNext}`}
                      onClick={nextImage}
                      aria-label="Next view"
                    >
                      <div className={styles.navCore}>
                        <svg viewBox="0 0 24 24" className={styles.navIcon}>
                          <path
                            d="M8.5 19.5 16 12 8.5 4.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </button>
                  </>
                )}

                {hasMultipleImages && (
                  <div className={styles.imageCounter}>
                    <span className={styles.currentImage}>
                      {currentImageIndex + 1}
                    </span>
                    <span className={styles.counterSeparator}>/</span>
                    <span className={styles.totalImages}>
                      {currentPlan.images.length}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
