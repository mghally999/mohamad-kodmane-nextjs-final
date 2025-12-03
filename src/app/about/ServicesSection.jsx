"use client";

import React from "react";
import styles from "@/styles/about/ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.headerContainer}>
          <h2 className={styles.sectionTitle}>What We Do for Our Investors</h2>
          <div className={styles.headerContent}>
            <p className={styles.sectionIntro}>
              At{" "}
              <span className={styles.brandHighlight}>
                Mohamad Kodmani Real Estate Brokerage
              </span>
              , we do much more than sell properties. We analyse your goals,
              design a clear strategy, and execute every step with you — from
              selecting the right project to handover, leasing, resale, and
              furnishing.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {/* Card 1 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}>
              <div className={styles.iconCircle}>1</div>
            </div>
            <h3 className={styles.cardTitle}>
              Investment Advisory & Off-Plan Strategy
            </h3>
            <ul className={styles.serviceList}>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  In-depth consultation to understand your capital, goals, and
                  risk profile.
                </span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  Selecting projects with the strongest growth potential in
                  Dubai&apos;s key locations.
                </span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  Short- and long-term investment planning backed by realistic
                  market analysis.
                </span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  Off-plan advisory: capital appreciation studies, payment plan
                  design, and securing the best units before public launch.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}>
              <div className={styles.iconCircle}>2</div>
            </div>
            <h3 className={styles.cardTitle}>
              Portfolio Building & Property Management
            </h3>
            <ul className={styles.serviceList}>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  Designing balanced portfolios that mix{" "}
                  <strong>cash-flow properties</strong> with{" "}
                  <strong>capital growth assets</strong>.
                </span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  Combining ready units with off-plan projects to spread risk.
                </span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  Property management and leasing: tenant sourcing, follow-up,
                  and rent optimisation.
                </span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  Full handling of maintenance, expenses, and regular
                  performance reports for investors.
                </span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className={styles.serviceCard}>
            <div className={styles.cardIcon}>
              <div className={styles.iconCircle}>3</div>
            </div>
            <h3 className={styles.cardTitle}>Handover, Resale & Furnishing</h3>
            <ul className={styles.serviceList}>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  Detailed snagging and handover service: inspecting the unit,
                  detecting defects, and supervising corrections.
                </span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  Preparing the property for leasing or resale with the right
                  finishing and positioning.
                </span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  Premium resale service: luxury marketing, serious buyer
                  filtering, and selling at the right moment to maximise profit.
                </span>
              </li>
              <li className={styles.listItem}>
                <span className={styles.bullet}></span>
                <span>
                  Furnishing & interior design for high-end units to support
                  faster leasing and premium rental rates.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer CTA */}
        <div className={styles.footerContainer}>
          <p className={styles.footerText}>
            With us, you gain a long-term investment partner who understands the
            Dubai market, reads its trends, and guides you toward the{" "}
            <strong className={styles.highlight}>
              best possible results with the least possible risk
            </strong>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
