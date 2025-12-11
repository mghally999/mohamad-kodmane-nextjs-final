"use client";

import React from "react";
import styles from "@/styles/where-to-live/MarketInsights.module.css";

export default function MarketInsights({ regionData, lang = "en" }) {
  return (
    <section className={styles.marketSection}>
      <div className={styles.marketPill}>
        <div className={styles.container}>
          {/* HEADER */}
          <div className={styles.marketHeader}>
            <h2 className={styles.marketTitle}>
              {regionData.translations?.market?.title}
            </h2>
            <p className={styles.marketSubtitle}>
              {regionData.translations?.market?.subtitle}
            </p>
          </div>

          <div className={styles.marketGrid}>
            {/* RENTAL TRENDS */}
            <div className={styles.marketCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  {regionData.translations?.market?.rentalTrends}
                </h3>
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

            {/* SALES TRENDS */}
            <div className={styles.marketCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  {regionData.translations?.market?.salesTrends}
                </h3>
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
                <h3 className={styles.cardTitle}>
                  {regionData.translations?.market?.roi}
                </h3>
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

          {/* POPULAR BUILDINGS */}
          <div className={styles.buildingsSection}>
            <div className={styles.buildingsHeader}>
              <h3 className={styles.buildingsTitle}>
                {regionData.translations?.market?.popularBuildings}
              </h3>
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
