"use client";
import React from "react";
import styles from "@/styles/SuccessStories.module.css";
import Image from "next/image";

const SuccessStories = () => {
  const successStories = [
    {
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Downtown Dubai Skyrise",
      roi: "45%",
      timeframe: "6 Months",
      description:
        "Strategic off-plan acquisition in Burj Khalifa district, leveraging pre-construction pricing and premium location demand for maximum capital appreciation.",
      metrics: ["AED 2.8M Investment", "AED 1.26M Profit", "Prime Location"],
      badge: "Luxury Residential",
    },
    {
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Palm Jumeirah Villa",
      roi: "38%",
      timeframe: "9 Months",
      description:
        "Exclusive waterfront villa acquisition with pre-handover resale strategy, capitalizing on Palm Jumeirah's limited inventory and high-demand premium segment.",
      metrics: ["AED 4.2M Investment", "AED 1.6M Profit", "Waterfront"],
      badge: "Ultra Luxury",
    },
    {
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      title: "Dubai Creek Harbour",
      roi: "50%",
      timeframe: "4 Months",
      description:
        "Early construction phase strategic exit in Dubai's future city center, leveraging master community development momentum and infrastructure announcements.",
      metrics: ["AED 1.9M Investment", "AED 950K Profit", "Future City Center"],
      badge: "Strategic Exit",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Business Bay Penthouse",
      roi: "42%",
      timeframe: "8 Months",
      description:
        "Premium high-floor penthouse with panoramic views, executed through precise market timing and understanding of commercial district premium appreciation patterns.",
      metrics: ["AED 3.5M Investment", "AED 1.47M Profit", "Panoramic Views"],
      badge: "Premium Penthouse",
    },
  ];

  return (
    <section className={styles.successStories}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
      </div>

      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.titleDecoration}>
            <div className={styles.goldBar}></div>
            <div className={styles.titleContent}>
              <h2 className={styles.title}>
                Strategic Investment{" "}
                <span className={styles.highlight}>Success Stories</span>
              </h2>
              <p className={styles.subtitle}>
                Real returns from strategic off-plan acquisitions in Dubai's
                most lucrative districts. Each case study represents calculated
                market timing, premium location selection, and sophisticated
                exit strategy execution.
              </p>
            </div>
          </div>

          {/* Performance Summary */}
          <div className={styles.performanceSummary}>
            <div className={styles.summaryItem}>
              <div className={styles.summaryNumber}>AED 5.28M</div>
              <div className={styles.summaryLabel}>Total Profits Generated</div>
            </div>
            <div className={styles.summaryItem}>
              <div className={styles.summaryNumber}>43.75%</div>
              <div className={styles.summaryLabel}>Average ROI</div>
            </div>
            <div className={styles.summaryItem}>
              <div className={styles.summaryNumber}>100%</div>
              <div className={styles.summaryLabel}>Success Rate</div>
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className={styles.storiesGrid}>
          {successStories.map((story, index) => (
            <article key={index} className={styles.storyCard}>
              {/* Image Container */}
              <div className={styles.imageContainer}>
                <Image
                  src={story.image}
                  alt={`${story.title} - Dubai luxury real estate investment returning ${story.roi} ROI`}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={index < 2}
                />

                {/* ROI Badge */}
                <div className={styles.roiBadge}>
                  <span className={styles.roiText}>{story.roi} ROI</span>
                  <div className={styles.roiLine}></div>
                </div>

                {/* Time Badge */}
                <div className={styles.timeBadge}>
                  <span>{story.timeframe}</span>
                </div>

                {/* Category Badge */}
                <div className={styles.categoryBadge}>{story.badge}</div>
              </div>

              {/* Content Overlay */}
              <div className={styles.contentOverlay}>
                <div className={styles.contentHeader}>
                  <h3 className={styles.storyTitle}>{story.title}</h3>
                  <div className={styles.metrics}>
                    {story.metrics.map((metric, idx) => (
                      <span key={idx} className={styles.metric}>
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                <p className={styles.storyDescription}>{story.description}</p>

                {/* Strategy Indicators */}
                <div className={styles.strategyIndicators}>
                  <div className={styles.indicator}>
                    <div className={styles.indicatorDot}></div>
                    <span>Market Timing</span>
                  </div>
                  <div className={styles.indicator}>
                    <div className={styles.indicatorDot}></div>
                    <span>Location Analysis</span>
                  </div>
                  <div className={styles.indicator}>
                    <div className={styles.indicatorDot}></div>
                    <span>Exit Strategy</span>
                  </div>
                </div>
              </div>

              {/* Hover Effect Layer */}
              <div className={styles.hoverLayer}>
                <div className={styles.hoverContent}>
                  <div className={styles.successIcon}>✓</div>
                  <span className={styles.hoverText}>Successful Exit</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              Ready to Build Your Success Story?
            </h3>
            <p className={styles.ctaDescription}>
              Join the elite circle of investors leveraging Dubai's
              unprecedented growth. Let's identify your next strategic
              opportunity together.
            </p>
          </div>
          <div className={styles.ctaDecoration}>
            <div className={styles.ctaOrnament}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
