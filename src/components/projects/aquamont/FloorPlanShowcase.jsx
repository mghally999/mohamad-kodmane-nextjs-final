"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/projects/FloorPlanShowcase.module.css";

/**
 * Luxury Floor Plan Showcase - 3 Tabs with Creative Design
 * Professional, elegant, and 100% unique with brand colors
 */
export default function FloorPlanShowcase({
  floorPlans = [
    {
      id: "1-bedroom",
      title: "1 Bedroom Residence",
      specs: {
        Unit: "1 BEDROOM + 1 MASTER BATH + 1 LIVING AREA + 1 BALCONY",
        Suite: "665.31 SQ.FT.",
        Balcony: "60.28 SQ.FT.",
        Total: "715.59 SQ.FT.",
        Price: "AED 2,880,250",
      },
      images: [
        "https://luxury-real-estate-media.b-cdn.net/aquamont/interior-bedroom-1bhk.jpg",
        "https://luxury-real-estate-media.b-cdn.net/aquamont/interior-bathroom-01.jpg",
      ],
      features: ["Walk-in Closet", "Premium Finishes", "Smart Home Ready"],
    },
    {
      id: "2-bedroom",
      title: "2 Bedroom Residence",
      specs: {
        Unit: "2 BEDROOM + 1 POWDER ROOM + 1 MAID ROOM + 1 BALCONY",
        Suite: "1,107.18 SQ.FT.",
        Balcony: "80.84 SQ.FT.",
        Total: "1,188.02 SQ.FT.",
        Price: "AED 4,752,080",
      },
      images: [
        "https://luxury-real-estate-media.b-cdn.net/aquamont/exterior-balcony-day-view.png",
        "https://luxury-real-estate-media.b-cdn.net/aquamont/exterior-beach-view.png",
      ],
      features: ["Maid's Room", "Double Balcony", "Premium Kitchen"],
    },
    {
      id: "3-bedroom",
      title: "3 Bedroom Residence",
      specs: {
        Unit: "3 BEDROOM + 2 MASTER BATH + 1 LIVING + 2 BALCONIES",
        Suite: "1,993.05 SQ.FT.",
        Balcony: "274.16 SQ.FT.",
        Total: "2,267.21 SQ.FT.",
        Price: "AED 9,352,241",
      },
      images: [
        "https://luxury-real-estate-media.b-cdn.net/aquamont/interior-living-3bhk-duplex-type-b.jpg",
        "https://luxury-real-estate-media.b-cdn.net/aquamont/exterior-daytime-02.png",
      ],
      features: ["Double Master", "Panoramic Views", "Private Elevator"],
    },
  ],
  brochureHref = "#",
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
      {/* Luxury Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.luxuryOrnament}></div>
        <div className={styles.luxuryOrnament}></div>
      </div>

      <div className={styles.luxuryContainer}>
        {/* Creative Title */}
        <div className={styles.titleMasterpiece}>
          <h2 className={styles.mainHeadline}>Residence Collections</h2>
          <div className={styles.titleEmbellishment}>
            <div className={styles.embellishmentLine}></div>
            <div className={styles.embellishmentDot}></div>
          </div>
        </div>

        {/* Luxury Tabs */}
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
                  {index === 0 && "🏠"}
                  {index === 1 && "🏢"}
                  {index === 2 && "🏘️"}
                </div>
                <span className={styles.tabText}>{plan.title}</span>
              </div>
              <div className={styles.tabGlow}></div>
            </button>
          ))}
        </div>

        {/* Content Masterpiece */}
        <div className={styles.contentMasterpiece}>
          {/* Left: Luxury Specs */}
          <div className={styles.specsGallery}>
            <div className={styles.specsHeader}>
              <h3 className={styles.planTitle}>{currentPlan.title}</h3>
              <div className={styles.titleAccent}></div>
            </div>

            {/* Specs List */}
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

            {/* Luxury Features */}
            {/* <div className={styles.featuresShowcase}>
              <h4 className={styles.featuresTitle}>Premium Features</h4>
              <div className={styles.featuresGrid}>
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className={styles.featureBadge}>
                    <span className={styles.featureIcon}>✓</span>
                    <span className={styles.featureText}>{feature}</span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Luxury CTA */}
            <a
              href={brochureHref}
              className={styles.luxuryCta}
              rel="noopener"
              aria-label="Download detailed floor plans"
            >
              <span className={styles.ctaText}>Request Detailed Plans</span>
              <div className={styles.ctaOrnament}>
                <div className={styles.ornamentLine}></div>
                <span className={styles.ctaArrow}>↗</span>
              </div>
            </a>
          </div>

          {/* Right: Luxury Image Display */}
          <div className={styles.visualMasterpiece}>
            <div className={styles.imageSculpture}>
              <div className={styles.imageFrame}>
                <div className={styles.frameBorder}></div>
                <div className={styles.imageContainer}>
                  <Image
                    src={currentPlan.images[currentImageIndex]}
                    alt={`${currentPlan.title} floor plan view ${
                      currentImageIndex + 1
                    }`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className={styles.luxuryImage}
                    priority={activeTab === 0 && currentImageIndex === 0}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>

                {/* Image Navigation */}
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

                {/* Image Counter */}
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
