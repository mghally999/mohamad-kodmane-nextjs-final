"use client";
import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

export default function AboutPage() {
  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>Founder & Visionary</div>
              <h1>
                Mohamad <span className={styles.highlight}>Kodmane</span>
              </h1>
              <p className={styles.subtitle}>
                Transforming Dubai real estate through strategic investment and
                unparalleled market expertise. Your trusted partner in building
                lasting wealth.
              </p>

              {/* Trust Stats */}
              {/* <div className={styles.stats}>
                <div className={styles.stat}>
                  <strong>AED 500M+</strong>
                  <span>Portfolio Value</span>
                </div>
                <div className={styles.stat}>
                  <strong>100+</strong>
                  <span>Clients Served</span>
                </div>
                <div className={styles.stat}>
                  <strong>4+ Years</strong>
                  <span>Market Excellence</span>
                </div>
              </div> */}

              {/* CTA */}
              <div className={styles.ctaSection}>
                <a
                  href="https://wa.me/971501234567?text=Hi%20Mohamad,%20I'd%20like%20to%20discuss%20Dubai%20investment%20opportunities"
                  className={styles.primaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Your Journey
                </a>
                <a href="#mission" className={styles.secondaryBtn}>
                  My Philosophy
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className={styles.photoSection}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/mohamad-kodmane.png"
                  alt="Dubai Skyline - Mohamad Kodmane's Investment Vision"
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.photoBadges}>
                  <div className={styles.photoBadge}>DLD Certified</div>
                  <div className={styles.photoBadge}>Premium Partner</div>
                  <div className={styles.photoBadge}>15-30% ROI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <div className={styles.missionContent}>
              <h2>
                My <span className={styles.highlight}>Mission</span>
              </h2>
              <p>
                To democratize premium Dubai real estate investment, making
                exclusive opportunities accessible to visionary investors
                worldwide.
              </p>
              <p>
                Through strategic partnerships with Dubai's top developers and
                data-driven market analysis, I provide clients with unparalleled
                access to high-yield investment opportunities.
              </p>
              <p>
                Every client relationship is built on transparency, trust, and
                tangible results—transforming investment goals into realized
                wealth.
              </p>

              <div className={styles.missionStats}>
                <div className={styles.missionStat}>
                  <strong>100%</strong>
                  <span>Client Satisfaction</span>
                </div>
                <div className={styles.missionStat}>
                  <strong>AED 2.1M</strong>
                  <span>Average ROI</span>
                </div>
              </div>
            </div>

            <div className={styles.missionImage}>
              <Image
                src={`${CDN}/aquamont/intro-main.png`}
                alt="Mohamad Kodmane - Dubai Real Estate Expert"
                fill
                className={styles.image}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesHeader}>
            <h2>
              Core <span className={styles.highlight}>Values</span>
            </h2>
            <p>The principles that guide every investment decision</p>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              {/* <div className={styles.valueIcon}>🔍</div> */}
              <h3>Strategic Vision</h3>
              <p>
                Identifying emerging opportunities before market trends,
                ensuring first-mover advantage and maximum returns for every
                investment.
              </p>
            </div>

            <div className={styles.valueCard}>
              {/* <div className={styles.valueIcon}>🤝</div> */}
              <h3>Client Partnership</h3>
              <p>
                Building long-term relationships based on trust, transparency,
                and shared success. Your goals become my mission.
              </p>
            </div>

            <div className={styles.valueCard}>
              {/* <div className={styles.valueIcon}>⚡</div> */}
              <h3>Execution Excellence</h3>
              <p>
                Rapid, precise deal execution with comprehensive due diligence
                and seamless transaction management from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.ctaSectionFull}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2>
              Ready to Invest in{" "}
              <span className={styles.highlight}>Dubai?</span>
            </h2>
            <p>
              Let's discuss your investment goals and create a personalized
              strategy for exceptional returns.
            </p>

            <div className={styles.ctaButtons}>
              <a
                href="https://wa.me/971501234567?text=Hi%20Mohamad,%20I'm%20ready%20to%20invest%20in%20Dubai%20real%20estate"
                className={styles.whatsappBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Consultation
              </a>
              <a href="tel:+971501234567" className={styles.callBtn}>
                Direct Call
              </a>
            </div>

            <div className={styles.trustNote}>
              <strong>
                Premium Developer Access • Full Transparency • Proven Results
              </strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
