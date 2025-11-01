"use client";
import Image from "next/image";
import React from "react";
import styles from "@/styles/OffPlan.module.css";

export default function OffPlan() {
  return (
    <section className={styles.offplanSection}>
      <div className={styles.contentWrapper}>
        {/* LEFT CONTENT */}
        <div className={styles.textContent}>
          <div className={styles.titleDecoration}>
            <div className={styles.goldLine}></div>
            <h2 className={styles.sectionTitle}>
              What is <span>Off-Plan Real Estate Investment?</span>
            </h2>
          </div>

          <p className={styles.sectionParagraph}>
            Off-plan property trading stands as{" "}
            <strong>
              one of the most sophisticated and strategically rewarding
            </strong>{" "}
            real estate investment avenues. Esteemed by{" "}
            <strong>
              global entrepreneurs, celebrities, and institutional investors
            </strong>
            for its unparalleled potential and hands-free acquisition process.
          </p>

          <div className={styles.investmentProcess}>
            <div className={styles.processHeader}>
              <div className={styles.goldIcon}>✦</div>
              <h3 className={styles.processTitle}>Investment Structure</h3>
            </div>

            <div className={styles.processSteps}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4>Initial Commitment</h4>
                  <p>
                    Secure with{" "}
                    <strong className={styles.highlightText}>20%</strong> down
                    payment via <strong>protected escrow</strong>
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4>Government Registration</h4>
                  <p>
                    <strong className={styles.highlightText}>4%</strong> Dubai
                    Land Department <strong>registration fee</strong>
                  </p>
                </div>
              </div>

              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4>Flexible Financing</h4>
                  <p>
                    Remaining balance structured over{" "}
                    <strong className={styles.highlightText}>
                      24-36 months
                    </strong>{" "}
                    construction period
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.investmentStrategies}>
            <div className={styles.strategiesHeader}>
              <div className={styles.goldIcon}>↯</div>
              <h3 className={styles.strategiesTitle}>
                Strategic Exit Opportunities
              </h3>
            </div>

            <div className={styles.strategyCards}>
              <div className={styles.strategyCard}>
                <div className={styles.cardNumber}>1</div>
                <div className={styles.cardContent}>
                  <h4>Portfolio Acquisition</h4>
                  <p>
                    Take possession and establish{" "}
                    <strong>premium rental portfolio</strong>
                  </p>
                </div>
              </div>

              <div className={styles.strategyCard}>
                <div className={styles.cardNumber}>2</div>
                <div className={styles.cardContent}>
                  <h4>Capital Appreciation</h4>
                  <p>
                    Liquidate upon completion for{" "}
                    <strong>maximum market gains</strong>
                  </p>
                </div>
              </div>

              <div className={styles.strategyCard}>
                <div className={styles.cardNumber}>3</div>
                <div className={styles.cardContent}>
                  <h4>Pre-Completion Trading</h4>
                  <p>
                    Strategic resale during <strong>construction phase</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.investmentNote}>
            <div className={styles.noteIcon}>🌍</div>
            <p>
              <strong>Dubai's progressive regulatory framework</strong> welcomes
              global citizens — residents and international investors alike — to
              participate in premier off-plan opportunities. Entire acquisition
              process available through our{" "}
              <strong className={styles.highlightText}>
                exclusive digital platform
              </strong>{" "}
              with <strong>full remote capability</strong>.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGES - STACKED */}
        <div className={styles.imagesWrapper}>
          <div className={styles.imageContainer}>
            <div className={styles.imageOverlay}></div>
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Modern luxury villa with swimming pool"
              width={600}
              height={500}
              className={styles.luxuryImage}
            />
            <div className={styles.imageBadge}>
              <div className={styles.badgeContent}>
                <span className={styles.badgeText}>Premium Developments</span>
                <div className={styles.badgeLine}></div>
              </div>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.imageOverlay}></div>
            <Image
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Luxury interior of Dubai apartment"
              width={600}
              height={500}
              className={styles.luxuryImage}
            />
            <div className={styles.imageBadge}>
              <div className={styles.badgeContent}>
                <span className={styles.badgeText}>Elite Interiors</span>
                <div className={styles.badgeLine}></div>
              </div>
            </div>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.imageOverlay}></div>
            <Image
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
              alt="Luxury interior of Dubai apartment"
              width={600}
              height={500}
              className={styles.luxuryImage}
            />
            <div className={styles.imageBadge}>
              <div className={styles.badgeContent}>
                <span className={styles.badgeText}>Luxury Amenities</span>
                <div className={styles.badgeLine}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
