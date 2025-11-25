"use client";

import React from "react";
import styles from "@/styles/about/ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h2>What We Do for Our Investors</h2>
          <p>
            On this page, we introduce <strong>Mohamad Kodmane</strong>, the
            story behind the company, the services we provide, and how you can
            contact us to start your investment journey.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Investment Services</h3>
            <ul>
              <li>Off-plan property acquisition</li>
              <li>Building tailored real estate portfolios</li>
              <li>Investment advisory and strategy</li>
              <li>Return-on-investment analysis and valuation</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Post-Purchase Services</h3>
            <ul>
              <li>Property handover and snagging</li>
              <li>Full furnishing and interior styling</li>
              <li>Leasing and property management</li>
              <li>Resale strategy and execution</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h3>Exclusive Services</h3>
            <ul>
              <li>Ongoing project monitoring and reporting</li>
              <li>Assistance with obtaining the UAE Golden Visa</li>
              <li>VIP service for high-net-worth investors</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
