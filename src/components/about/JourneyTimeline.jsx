"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/about/JourneyTimeline.module.css";

const JOURNEY_STEPS = [
  {
    year: "1976",
    title: "Great Things Start Small",
    description:
      "Mr. PNC Menon begins his journey in interior design, laying the foundations of what will later become a global real-estate brand.",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    year: "1995",
    title: "Royal Approval",
    description:
      "The company's work for royal families across the Gulf region establishes a reputation for meticulous craftsmanship and discretion.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    year: "1995",
    title: "Establishing Mohamad Kodmani Real Estate Brokers LLC.",
    description:
      "Mohamad Kodmani Real Estate Brokers enters the UAE market, founding a development company in Dubai and scaling its vision from interiors to full communities.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    year: "2003",
    title: "The City of Gold – Dubai",
    description:
      "The brand expands to Dubai, bringing its design-first philosophy to one of the world's most dynamic real-estate landscapes.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    year: "2014",
    title: "Homes that Inspire Sobha Hartland",
    description:
      "A new waterfront master community showcases the blend of architecture, quality and attention to detail that defines the brand.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    year: "2016",
    title: "Humanitarian Efforts",
    description:
      "Philanthropic initiatives support education and uplift communities, extending the brand's impact far beyond its developments.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  },
];

export default function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      {/* Heading */}
      <div className={styles.headingBlock}>
        <p className={styles.kicker}>OUR JOURNEY</p>
        <h2 className={styles.heading}>A Journey Through the Times,</h2>
      </div>

      {/* Timeline Row */}
      <div className={styles.timelineRow}>
        {JOURNEY_STEPS.map((step, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={`${step.year}-${index}`}
              type="button"
              className={`${styles.timelineItem} ${
                isActive ? styles.isActive : styles.isInactive
              }`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
            >
              {/* Background image + cinematic overlay */}
              <div className={styles.imageWrapper}>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(min-width: 1200px) 70vw, 100vw"
                  className={styles.image}
                  priority={index === 0}
                />
                <div className={styles.scrim} />
              </div>

              {/* Year when strip is collapsed */}
              <div className={styles.yearOnly}>
                <span className={styles.year}>{step.year}</span>
              </div>

              {/* Full content when expanded */}
              <div className={styles.content}>
                <div className={styles.yearTitleRow}>
                  <span className={styles.year}>{step.year}</span>
                  <span className={styles.dash}> — </span>
                  <span className={styles.title}>{step.title}</span>
                </div>
                <p className={styles.description}>{step.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
