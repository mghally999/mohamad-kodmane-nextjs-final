// components/projects/hartland/FloorPlanShowcase.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/projects/sky-parks/FloorPlanShowcase.module.css";

export default function FloorPlanShowcase({
  floorPlans = [
    {
      id: "4br",
      title: "4 Bedroom Villa",
      specs: { Unit: "—", Suite: "—", Balcony: "—", Total: "—", Price: "—" },
      images: [
        "https://luxury-real-estate-media.b-cdn.net/hartland/hero-inset.jpg",
      ],
      features: [],
    },
    {
      id: "5br",
      title: "5 Bedroom Villa",
      specs: { Unit: "—", Suite: "—", Balcony: "—", Total: "—", Price: "—" },
      images: [
        "https://luxury-real-estate-media.b-cdn.net/hartland/interior-family-01.jpg",
      ],
      features: [],
    },
    {
      id: "6br",
      title: "6 Bedroom Villa",
      specs: { Unit: "—", Suite: "—", Balcony: "—", Total: "—", Price: "—" },
      images: [
        "https://luxury-real-estate-media.b-cdn.net/hartland/interior-majlis-01.jpg",
      ],
      features: [],
    },
  ],
  brochureHref = "https://luxury-real-estate-media.b-cdn.net/hartland/sobha-hartland-2-6%20bedroom-villas.pdf",
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentPlan = floorPlans[activeTab];
  const hasMultipleImages = currentPlan.images.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentPlan.images.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (prev) =>
        (prev - 1 + currentPlan.images.length) % currentPlan.images.length
    );
  };
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
          <h2 className={styles.mainHeadline}>Villa Collections</h2>
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
                  {index === 0 ? "🏡" : index === 1 ? "🏠" : "🏘️"}
                </div>
                <span className={styles.tabText}>{plan.title}</span>
              </div>
              <div className={styles.tabGlow}></div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className={styles.contentMasterpiece}>
          {/* Left: Specs + CTA */}
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

            <a
              href={brochureHref}
              className={styles.luxuryCta}
              rel="noopener"
              target="_blank"
              aria-label="Download detailed floor plans"
            >
              <span className={styles.ctaText}>Request Detailed Plans</span>
              <div className={styles.ctaOrnament}>
                <div className={styles.ornamentLine}></div>
                <span className={styles.ctaArrow}>↗</span>
              </div>
            </a>
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
