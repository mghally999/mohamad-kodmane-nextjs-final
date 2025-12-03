"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/about/BrandPillarsAccordion.module.css";

const VISION_ICON = "/about/vision.svg";
const MISSION_ICON = "/about/mission.svg";

const PILLAR_IMAGES = {
  transparency: "/about/pillars/transparency.jpg",
  expertise: "/about/pillars/expertise.jpg",
  results: "/about/pillars/results.jpg",
};

export default function BrandPillarsAccordion() {
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive((prev) => (prev === id ? null : id));
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
                      To build a strong, diversified real estate investment
                      portfolio that delivers high, stable, and safe returns for
                      our investors, and to become the first destination for
                      anyone looking for reliable real estate opportunities in
                      Dubai.
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
                      To build a sustainable working system that creates job
                      opportunities for thousands of people, and to develop a
                      new generation of entrepreneurs who contribute positively
                      to society through responsible, well-planned real estate
                      investments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* THE BRAND PILLARS / VALUES */}
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
              <h2 className={styles.accTitle}>Our Core Pillars</h2>
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
                  <span>BUILT ON</span> Clear Values
                </h2>

                <div className={styles.brandAccBoxMain}>
                  {/* Transparency */}
                  <div className={styles.brandAccBox}>
                    <div className={styles.brandAccThumb}>
                      <Image
                        src={PILLAR_IMAGES.transparency}
                        alt="Transparency"
                        width={320}
                        height={460}
                        className={styles.brandAccImage}
                      />
                    </div>
                    <div className={styles.brandPillarContent}>
                      <h5>Transparency</h5>
                      <p className={styles.disc}>
                        Every number and every detail is clear, honest, and
                        explained — so investors can take decisions with full
                        confidence.
                      </p>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className={styles.brandAccBox}>
                    <div className={styles.brandAccThumb}>
                      <Image
                        src={PILLAR_IMAGES.expertise}
                        alt="Expertise"
                        width={320}
                        height={460}
                        className={styles.brandAccImage}
                      />
                    </div>
                    <div className={styles.brandPillarContent}>
                      <h5>Expertise & Commitment</h5>
                      <p className={styles.disc}>
                        Decisions are built on continuous market monitoring,
                        real data, and a genuine commitment to achieving the
                        best outcomes for each investor.
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className={styles.brandAccBox}>
                    <div className={styles.brandAccThumb}>
                      <Image
                        src={PILLAR_IMAGES.results}
                        alt="Results"
                        width={320}
                        height={460}
                        className={styles.brandAccImage}
                      />
                    </div>
                    <div className={styles.brandPillarContent}>
                      <h5>Results & Professionalism</h5>
                      <p className={styles.disc}>
                        Our first goal is always to achieve the highest possible
                        returns with the least possible risk, through
                        professionally-structured, numbers-driven portfolios.
                      </p>
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
