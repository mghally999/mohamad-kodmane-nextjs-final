"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/about/JourneyTimeline.module.css";

const JOURNEY_STEPS = [
  {
    year: "2006",
    title: "From Family Legacy to Construction",
    description:
      "Coming from a family with a strong background in contracting and real estate, Mohamad establishes Al Bairaq Contracting in Dubai and begins building his own track record in projects and execution.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2070&q=80",
  },
  {
    year: "2013",
    title: "Expanding into the Beauty Sector",
    description:
      "He moves into business development in the beauty industry in Syria, gaining hands-on experience in brand building, operations, and customer-focused growth.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2070&q=80",
  },
  {
    year: "2016",
    title: "Entrepreneurship in F&B",
    description:
      "Mohamad establishes and manages restaurants in Syria, strengthening his understanding of cashflow, daily operations, and risk management in competitive markets.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2070&q=80",
  },
  {
    year: "2023",
    title: "Founding Mohamad Kodmani Real Estate Brokerage",
    description:
      "Drawing on years of experience in construction and entrepreneurship, he launches Mohamad Kodmani Real Estate Brokerage in Dubai, specialising in investment-focused real estate services.",
    image:
      "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?auto=format&fit=crop&w=2070&q=80",
  },
  {
    year: "2023–2025",
    title: "Building Investor Portfolios in Dubai",
    description:
      "In just two years, the company helps investors close more than AED 170 million in transactions with investment returns above 8%, focusing on smart off-plan opportunities, portfolio building and full post-purchase services.",
    image:
      "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=2070&q=80",
  },
];

export default function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      {/* Heading */}
      <div className={styles.headingBlock}>
        <p className={styles.kicker}>OUR JOURNEY</p>
        <h2 className={styles.heading}>
          From Construction to Investment Leadership
        </h2>
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
              {/* Background image + overlay */}
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

              {/* Year when collapsed */}
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
