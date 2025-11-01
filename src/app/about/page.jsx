"use client";
import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>About Mohamad Kodmane</div>
              <h1>
                I Make Investors{" "}
                <span className={styles.highlight}>15-30% Returns</span> in
                Dubai Real Estate
              </h1>
              <p className={styles.subtitle}>
                No fluff. No empty promises. Just proven results.
              </p>

              {/* Trust Stats */}
              <div className={styles.stats}>
                <div className={styles.stat}>
                  <strong>AED 500M+</strong>
                  <span>Client Wealth</span>
                </div>
                <div className={styles.stat}>
                  <strong>100+</strong>
                  <span>Deals Closed</span>
                </div>
                <div className={styles.stat}>
                  <strong>0</strong>
                  <span>Complaints</span>
                </div>
              </div>

              {/* CTA */}
              <div className={styles.ctaSection}>
                <a
                  href="https://wa.me/971501234567?text=I%20want%2015-30%%20returns"
                  className={styles.primaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 Get My Free Investment Plan
                </a>
                <a href="#proof" className={styles.secondaryBtn}>
                  📊 See Real Results
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className={styles.photoSection}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/owner-hero.png"
                  alt="Mohamad Kodmane - Dubai Real Estate Expert"
                  fill
                  className={styles.image}
                  priority
                />
                <div className={styles.photoBadges}>
                  <div className={styles.photoBadge}>🏛️ DLD Certified</div>
                  <div className={styles.photoBadge}>⭐ 9K+ Followers</div>
                  <div className={styles.photoBadge}>📈 4+ Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Make Money For You */}
      <section className={styles.moneySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>
              How I Make You <span className={styles.highlight}>Money</span>
            </h2>
            <p>Simple process. Big results.</p>
          </div>

          <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processIcon}>🔍</div>
              <h3>Find Hidden Deals</h3>
              <p>I get first access to properties before public listing</p>
              <div className={styles.result}>→ You buy at lower prices</div>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processIcon}>📊</div>
              <h3>Smart Analysis</h3>
              <p>Data-driven decisions on when to buy and sell</p>
              <div className={styles.result}>→ Maximum profit timing</div>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processIcon}>🛡️</div>
              <h3>Full Protection</h3>
              <p>DLD-certified safe transactions, no hidden fees</p>
              <div className={styles.result}>→ Zero risk investment</div>
            </div>

            <div className={styles.processCard}>
              <div className={styles.processIcon}>⚡</div>
              <h3>Fast Action</h3>
              <p>Quick execution to secure deals before competition</p>
              <div className={styles.result}>→ Money working faster</div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Proof Section */}
      <section id="proof" className={styles.proofSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2>
              Real <span className={styles.highlight}>Proof</span> of Results
            </h2>
            <p>Actual numbers from real clients</p>
          </div>

          <div className={styles.proofGrid}>
            <div className={styles.proofCard}>
              <div className={styles.proofHeader}>
                <div className={styles.profitBadge}>+32%</div>
                <div className={styles.proofIcon}>💰</div>
              </div>
              <h3>Palm Jumeirah Villa</h3>
              <p>Off-plan purchase • 14 months</p>
              <div className={styles.clientNote}>
                "Mohamad found this before anyone else knew"
              </div>
            </div>

            <div className={styles.proofCard}>
              <div className={styles.proofHeader}>
                <div className={styles.profitBadge}>AED 2.1M</div>
                <div className={styles.proofIcon}>📈</div>
              </div>
              <h3>Downtown Apartment</h3>
              <p>Strategic flip • 2 years</p>
              <div className={styles.clientNote}>
                "Perfect timing - bought low, sold high"
              </div>
            </div>

            <div className={styles.proofCard}>
              <div className={styles.proofHeader}>
                <div className={styles.profitBadge}>18% Yield</div>
                <div className={styles.proofIcon}>🏠</div>
              </div>
              <h3>Business Bay Office</h3>
              <p>Rental property • Ongoing</p>
              <div className={styles.clientNote}>
                "Consistent income every month"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalSection}>
        <div className={styles.container}>
          <div className={styles.finalCard}>
            <h2>
              Ready to Make{" "}
              <span className={styles.highlight}>Real Money?</span>
            </h2>
            <p>Stop thinking about it. Start earning today.</p>

            <div className={styles.guarantees}>
              <div className={styles.guarantee}>✅ 15-30% Returns</div>
              <div className={styles.guarantee}>✅ DLD Protected</div>
              <div className={styles.guarantee}>✅ No Hidden Fees</div>
              <div className={styles.guarantee}>✅ Proven Track Record</div>
            </div>

            <div className={styles.finalCTAs}>
              <a
                href="https://wa.me/971501234567?text=I'm%20ready%20to%20make%2015-30%%20returns"
                className={styles.whatsappBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp Me Now
              </a>
              <a
                href="https://youtube.com/@Mohamad.Kodmane"
                className={styles.youtubeBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶️ Watch My Strategy
              </a>
            </div>

            <div className={styles.trustNote}>
              <strong>
                100+ Satisfied Investors • 0 Complaints • 4+ Years Excellence
              </strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
