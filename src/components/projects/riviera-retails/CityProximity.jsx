"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/styles/projects/sky-parks/CityProximity.module.css";

export default function CityProximity({
  title = "The Best Of The City, All Within Minutes",
  items = [
    {
      name: "Dubai International Airport",
      minutes: 20,
      image:
        "https://images.unsplash.com/photo-1556388155-91eea1df0a0e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Business Bay",
      minutes: 5,
      image:
        "https://images.unsplash.com/photo-1543365067-f488401f5c6c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Downtown Dubai",
      minutes: 13,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Jumeirah Beach",
      minutes: 15,
      image:
        "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Dubai Mall",
      minutes: 8,
      image:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Palm Jumeirah",
      minutes: 18,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    },
  ],
}) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      className={styles.proximitySection}
      aria-label="Nearby destinations"
    >
      <div className={styles.container}>
        {/* Elegant Title */}
        <div className={styles.titleSection}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.titleLine}></div>
        </div>

        {/* Creative Cards Grid */}
        <div className={styles.cardsGrid}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.proximityCard} ${
                activeCard === index ? styles.active : ""
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Background Image */}
              <div className={styles.imageContainer}>
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.cardImage}
                  priority={index < 3}
                />
                <div className={styles.imageOverlay}></div>
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.locationName}>{item.name}</h3>
                <div className={styles.timeIndicator}>
                  <div className={styles.timeCircle}>
                    <span className={styles.minutes}>{item.minutes}</span>
                    <span className={styles.minutesLabel}>MIN</span>
                  </div>
                  <div className={styles.timeLine}></div>
                </div>
              </div>

              {/* Gold Accent */}
              <div className={styles.cardAccent}></div>
            </div>
          ))}
        </div>

        {/* Elegant Footer */}
        <div className={styles.footer}>
          <p className={styles.footerText}>
            Prime location with seamless access to Dubai's most prestigious
            destinations
          </p>
        </div>
      </div>
    </section>
  );
}
