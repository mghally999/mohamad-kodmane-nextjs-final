"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/about/BrandPillarsAccordion.module.css";

const VISION_ICON = "/about/vision.svg";
const MISSION_ICON = "/about/mission.svg";

const PILLAR_IMAGES = {
  craftsmanship: "/about/pillars/craftsmanship.jpg",
  design: "/about/pillars/thoughtful-design.jpg",
  quality: "/about/pillars/signature-quality.jpg",
};

export default function BrandPillarsAccordion() {
  // null = everything closed (you can change to "vision" if you want 1st open)
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive((prev) => (prev === id ? null : id)); // click again = close
  };

  const isOpen = (id) => active === id;

  return (
    <section className={styles.brandAccSec}>
      <div className={styles.container}>
        <div className={styles.accordion}>
          {/* OUR VISION */}
          <div
            className={`${styles.accItem} ${
              isOpen("vision") ? styles.accItemActive : ""
            }`}
          >
            <button
              type="button"
              className={styles.accHeader}
              onClick={() => toggle("vision")}
            >
              <span className={styles.icons} />
              <h2 className={styles.accTitle}>Our Vision</h2>
            </button>

            <div
              className={`${styles.accBodyWrapper} ${
                isOpen("vision") ? styles.accBodyOpen : ""
              }`}
            >
              <div className={styles.accBody}>
                <div className={styles.twoColContent}>
                  <div className={styles.twoColLeft}>
                    <Image
                      src={VISION_ICON}
                      alt="Our Vision"
                      width={220}
                      height={220}
                      className={styles.iconImage}
                    />
                  </div>
                  <div className={styles.twoColRight}>
                    <p className={`${styles.disc} ${styles.twoColParagraph}`}>
                      Mohamad Kodmani Real Estate Brokers aspires to become the
                      most trusted real estate developer both regionally and
                      globally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OUR MISSION */}
          <div
            className={`${styles.accItem} ${
              isOpen("mission") ? styles.accItemActive : ""
            }`}
          >
            <button
              type="button"
              className={styles.accHeader}
              onClick={() => toggle("mission")}
            >
              <span className={styles.icons} />
              <h2 className={styles.accTitle}>Our Mission</h2>
            </button>

            <div
              className={`${styles.accBodyWrapper} ${
                isOpen("mission") ? styles.accBodyOpen : ""
              }`}
            >
              <div className={styles.accBody}>
                <div className={styles.twoColContent}>
                  <div className={styles.twoColLeft}>
                    <Image
                      src={MISSION_ICON}
                      alt="Our Mission"
                      width={220}
                      height={220}
                      className={styles.iconImage}
                    />
                  </div>
                  <div className={styles.twoColRight}>
                    <p className={`${styles.disc} ${styles.twoColParagraph}`}>
                      By pioneering innovative global projects and transforming
                      perceptions on quality, we work to challenge existing
                      norms and standards that will ultimately enrich
                      communities and societies at large.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* THE BRAND PILLARS */}
          <div
            className={`${styles.accItem} ${
              isOpen("pillars") ? styles.accItemActive : ""
            }`}
          >
            <button
              type="button"
              className={styles.accHeader}
              onClick={() => toggle("pillars")}
            >
              <span className={styles.icons} />
              <h2 className={styles.accTitle}>The Brand Pillars</h2>
            </button>

            <div
              className={`${styles.accBodyWrapper} ${
                isOpen("pillars") ? styles.accBodyOpen : ""
              }`}
            >
              <div className={styles.accBody}>
                <h2
                  className={`${styles.style2} ${styles.accBodyHeadingStyle2}`}
                >
                  <span>BUILT ON</span> 3 Key Pillars
                </h2>

                <div className={styles.brandAccBoxMain}>
                  {/* Craftsmanship */}
                  <div className={styles.brandAccBox}>
                    <div className={styles.brandAccThumb}>
                      <Image
                        src={PILLAR_IMAGES.craftsmanship}
                        alt="Craftsmanship"
                        width={320}
                        height={460}
                        className={styles.brandAccImage}
                      />
                    </div>
                    <div className={styles.brandPillarContent}>
                      <h5>Craftsmanship</h5>
                    </div>
                  </div>

                  {/* Thoughtful Design */}
                  <div className={styles.brandAccBox}>
                    <div className={styles.brandAccThumb}>
                      <Image
                        src={PILLAR_IMAGES.design}
                        alt="Thoughtful Design"
                        width={320}
                        height={460}
                        className={styles.brandAccImage}
                      />
                    </div>
                    <div className={styles.brandPillarContent}>
                      <h5>
                        Thoughtful
                        <br />
                        Design
                      </h5>
                    </div>
                  </div>

                  {/* Signature Quality */}
                  <div className={styles.brandAccBox}>
                    <div className={styles.brandAccThumb}>
                      <Image
                        src={PILLAR_IMAGES.quality}
                        alt="Signature Quality"
                        width={320}
                        height={460}
                        className={styles.brandAccImage}
                      />
                    </div>
                    <div className={styles.brandPillarContent}>
                      <h5>
                        Signature
                        <br />
                        Quality
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end accordion */}
        </div>
      </div>
    </section>
  );
}
