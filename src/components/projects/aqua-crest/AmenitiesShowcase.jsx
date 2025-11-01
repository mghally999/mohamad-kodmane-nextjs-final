"use client";

import { useState, useRef, useEffect } from "react";
import styles from "@/styles/projects/sky-parks/AmenitiesShowcase.module.css";

export default function AmenitiesShowcase({
  title = "Luxury That Elevates Every Moment",
  amenities = [
    { label: "PADEL COURT", icon: "🎾", color: "#d7b46a" },
    { label: "INFINITY POOL", icon: "🏊", color: "#d7b46a" },
    { label: "YOGA ZONE & MEDITATION DECK", icon: "🧘", color: "#d7b46a" },
    { label: "CALISTHENICS ZONES", icon: "💪", color: "#d7b46a" },
    { label: "FLOATING DECKS", icon: "🌊", color: "#d7b46a" },
    { label: "ZEN GARDEN", icon: "🎋", color: "#d7b46a" },
    { label: "KIDS PLAY AREA", icon: "👶", color: "#d7b46a" },
    { label: "ROOFTOP LOUNGE", icon: "🏙️", color: "#d7b46a" },
  ],
}) {
  const [activeAmenity, setActiveAmenity] = useState(null);
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} className={styles.amenitiesSection}>
      <div className={styles.container}>
        {/* Title */}
        <h2 className={styles.title}>{title}</h2>

        {/* Compact Grid */}
        <div className={styles.amenitiesGrid}>
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className={`${styles.amenityCard} ${
                activeAmenity === index ? styles.active : ""
              }`}
              onMouseEnter={() => setActiveAmenity(index)}
              onMouseLeave={() => setActiveAmenity(null)}
            >
              <div className={styles.iconContainer}>
                <span className={styles.icon}>{amenity.icon}</span>
              </div>
              <h3 className={styles.label}>{amenity.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
