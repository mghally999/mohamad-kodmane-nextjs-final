// components/where-to-live/MarketInsights.jsx
"use client";

import React from "react";
import styles from "@/styles/where-to-live/MarketInsights.module.css";

export default function MarketInsights({ regionData }) {
  return (
    <section className={styles.marketSection}>
      <div className={styles.marketPill}>
        <div className={styles.container}>
          <div className={styles.marketHeader}>
            <h2 className={styles.marketTitle}>Market Insights</h2>
            <p className={styles.marketSubtitle}>Financial Intelligence</p>
          </div>

          <div className={styles.marketGrid}>
            {/* Rental Trends */}
            <div className={styles.marketCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Rental Trends</h3>
                <div className={styles.cardDivider}></div>
              </div>
              <div className={styles.dataList}>
                {regionData.market.rentalTrends.map((trend, index) => (
                  <div key={index} className={styles.dataItem}>
                    <span className={styles.dataType}>{trend.type}</span>
                    <span className={styles.dataValue}>
                      AED {trend.averageRentAED.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sales Trends */}
            <div className={styles.marketCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Sales Trends</h3>
                <div className={styles.cardDivider}></div>
              </div>
              <div className={styles.dataList}>
                {regionData.market.salesTrends.map((trend, index) => (
                  <div key={index} className={styles.dataItem}>
                    <span className={styles.dataType}>{trend.type}</span>
                    <span className={styles.dataValue}>
                      AED {(trend.averagePriceAED / 1000000).toFixed(1)}M
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ROI */}
            <div className={styles.marketCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Return on Investment</h3>
                <div className={styles.cardDivider}></div>
              </div>
              <div className={styles.dataList}>
                {regionData.market.roiByType.map((roi, index) => (
                  <div key={index} className={styles.dataItem}>
                    <span className={styles.dataType}>{roi.type}</span>
                    <span className={styles.dataValue}>
                      {roi.roiPercent}% ROI
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Popular Buildings */}
          <div className={styles.buildingsSection}>
            <div className={styles.buildingsHeader}>
              <h3 className={styles.buildingsTitle}>Popular Buildings</h3>
              <div className={styles.titleDivider}></div>
            </div>
            <div className={styles.buildingsGrid}>
              {regionData.market.popularBuildings.map((building, index) => (
                <div key={index} className={styles.buildingCard}>
                  <div className={styles.buildingName}>{building.name}</div>
                  <div className={styles.buildingLocation}>
                    {regionData.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
