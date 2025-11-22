"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "@/styles/ArtOfDetail.module.css";

export default function ArtOfDetail() {
  const sectionRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // when the top of the section is within 75% of the viewport height
      const shouldBeActive = rect.top < windowHeight * 0.75;
      // when section is fully in view, expand to full width
      const shouldBeExpanded = rect.top < windowHeight * 0.3;

      setIsActive(shouldBeActive);
      setIsExpanded(shouldBeExpanded);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial

    return () =>
      window.removeEventListener("scroll", handleScroll, { passive: true });
  }, []);

  const handleArrowClick = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className={styles.artOfDetailSection}>
      {/* Background image behind everything – like the master hero */}

      {/* White animated block */}
      <div
        className={`${styles.artOfDetailWrapper} ${
          isActive ? styles.active : ""
        } ${isExpanded ? styles.expanded : ""}`}
      >
        <div className={styles.artOfDetailInner}>
          {/* LEFT */}
          <div className={styles.contentCol}>
            <div className={styles.logoBlock}>
              <Image
                src="/logo.jpg"
                alt="MK Real Estate"
                width={200}
                height={60}
                className={styles.logoImage}
              />
            </div>

            <p className={styles.description}>
              At MK Real Estate, we understand that true excellence lies in the
              meticulous attention to detail and the artistry of craftsmanship.
              Guided by a commitment to perfection, we believe in crafting not
              just homes but immersive experiences where every nuance is
              thoughtfully considered.
            </p>

            <button type="button" className={styles.ctaButton}>
              DISCOVER MORE
            </button>
          </div>

          {/* RIGHT - Your image */}
          <div className={styles.imageCol}>
            <Image
              src="/mohamad-kodmane.png"
              alt="Mohamad Kodmani"
              fill
              className={styles.mainImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
