"use client";
import Image from "next/image";
import React from "react";
import styles from "@/styles/DubaiOpportunity.module.css";

export default function DubaiOpportunity() {
  return (
    <section className={styles.dubaiOpportunity}>
      <div className={styles.opportunityContainer}>
        {/* MAIN CONTENT GRID */}
        <div className={styles.contentGrid}>
          {/* LEFT COLUMN - IMAGES */}
          <div className={styles.imagesColumn}>
            <div className={styles.mainImageContainer}>
              <div className={styles.imageOverlay}></div>
              <Image
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Dubai luxury skyline"
                width={630}
                height={500}
                className={styles.mainImage}
                priority
              />
              <div className={styles.imageBadge}>
                <div className={styles.badgeContent}>
                  <span className={styles.badgeText}>Global Icon</span>
                  <div className={styles.badgeLine}></div>
                </div>
              </div>
            </div>

            <div className={styles.imageGridSmall}>
              <div className={styles.smallImage}>
                <Image
                  src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Luxury interior"
                  width={330}
                  height={330}
                  className={styles.gridImage}
                />
                <div className={styles.smallBadge}>Premium</div>
              </div>
              <div className={styles.smallImage}>
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Modern villa"
                  width={330}
                  height={330}
                  className={styles.gridImage}
                />
                <div className={styles.smallBadge}>Villas</div>
              </div>
              <div className={styles.smallImage}>
                <Image
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                  alt="Waterfront living"
                  width={330}
                  height={330}
                  className={styles.gridImage}
                />
                <div className={styles.smallBadge}>Marina</div>
              </div>
              <div className={styles.smallImage}>
                <Image
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Palm Jumeirah"
                  width={330}
                  height={330}
                  className={styles.gridImage}
                />
                <div className={styles.smallBadge}>Exclusive</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - CONTENT */}
          <div className={styles.contentColumn}>
            <div className={styles.titleSection}>
              <div className={styles.titleDecoration}>
                <div className={styles.goldBar}></div>
                <h2 className={styles.opportunityTitle}>
                  Economic Growth & A Life of{" "}
                  <span className={styles.titleGradient}>
                    Unparalleled Opportunity
                  </span>
                </h2>
              </div>
              <p className={styles.opportunitySubtitle}>
                Dubai stands as a{" "}
                <strong>global benchmark for innovation and prosperity</strong>,
                offering unmatched opportunities for visionaries and investors
                alike.
              </p>
            </div>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                {/* <div className={styles.featureIcon}>🏛️</div> */}
                <div className={styles.featureContent}>
                  <h4>Regulatory Excellence</h4>
                  <p>
                    Dubai Land Department ensures{" "}
                    <strong>maximum security</strong> and long-term value
                    preservation
                  </p>
                </div>
              </div>

              <div className={styles.featureCard}>
                {/* <div className={styles.featureIcon}>📈</div> */}
                <div className={styles.featureContent}>
                  <h4>Market Growth</h4>
                  <p>
                    Sustained demand for off-plan properties in world's most{" "}
                    <strong>future-focused city</strong>
                  </p>
                </div>
              </div>

              <div className={styles.featureCard}>
                {/* <div className={styles.featureIcon}>💼</div> */}
                <div className={styles.featureContent}>
                  <h4>Career Advancement</h4>
                  <p>
                    Thriving ecosystem for <strong>professional growth</strong>{" "}
                    and business expansion
                  </p>
                </div>
              </div>

              <div className={styles.featureCard}>
                {/* <div className={styles.featureIcon}>🌍</div> */}
                <div className={styles.featureContent}>
                  <h4>Tax Advantages</h4>
                  <p>
                    <strong>Zero income tax</strong> for individuals and
                    corporations enhances investment returns
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.investmentHighlights}>
              <div className={styles.highlightItem}>
                <div className={styles.highlightNumber}>99%</div>
                <div className={styles.highlightText}>
                  Investor Satisfaction Rate
                </div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightNumber}>24/7</div>
                <div className={styles.highlightText}>
                  Digital Platform Access
                </div>
              </div>
              <div className={styles.highlightItem}>
                <div className={styles.highlightNumber}>0%</div>
                <div className={styles.highlightText}>Income Tax Liability</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Join the elite circle of investors leveraging Dubai's{" "}
            <strong>progressive ecosystem </strong>
            for unprecedented growth and lifestyle excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
