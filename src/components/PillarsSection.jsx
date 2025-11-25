"use client";

import styles from "@/styles/PillarSection.module.css";

const pillars = [
  {
    id: 1,
    title: "Why Invest in Dubai?",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2158&q=80",
    intro:
      "Dubai is one of the strongest investment cities in the world and offers an ideal environment to grow your real estate wealth.",
    points: [
      "High investment returns.",
      "Safe and advanced economic environment.",
      "No taxes on income or real estate profits.",
      "Option to obtain a Golden Visa with an investment of AED 2 million or more.",
      "World-class infrastructure.",
      "Growing global demand for Dubai property.",
      "Easy property ownership for foreigners.",
    ],
  },
  {
    id: 2,
    title: "What Is a Real Estate Portfolio?",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
    intro:
      "Owning more than one property – both ready and off-plan – with the goal of building a strong, balanced real estate fortune.",
    points: [
      "Diversifies your income across multiple properties.",
      "Reduces risk by spreading investments.",
      "Maximises returns through rental income and capital appreciation.",
      "We manage the entire portfolio for you, so your real estate wealth grows safely and smoothly.",
    ],
  },
  {
    id: 3,
    title: "What Is Off-Plan Investment in Dubai?",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    intro:
      "Buying a property in its early stages, before or during construction, with flexible instalments paid directly to the developer.",
    points: [
      "Lower purchase price compared to ready properties.",
      "Potential to realise profit at handover as the property value rises over time.",
      "High payment flexibility with comfortable instalments and no need for bank financing.",
    ],
  },
];

export default function PillarsSection() {
  return (
    <section className={styles.newLaunchSection}>
      {/* Header */}
      <div className={styles.titleSection}>
        <h2 className={`${styles.heading2} ${styles.linesOnSides}`}>
          FROM CONCEPT TO COMPLETION: DEFINING OUR PILLARS
        </h2>
      </div>
      <div
        className={`${styles.container} ${styles.sectionSpaceTop} ${styles.sectionSpaceBottom} ${styles.latestImageBoxes}`}
      >
        {/* Three pillars */}
        <div className={styles.homeSlider}>
          <div className={styles.slidesWrapper}>
            {pillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`${styles.slide} ${
                  index === 1 ? styles.middleSlide : ""
                }`}
              >
                <div className={styles.latestBoxes}>
                  <div className={styles.latestBoxesCol}>
                    {/* Image */}
                    <div className={styles.latestBoxThumb}>
                      <img src={pillar.img} alt={pillar.title} />
                    </div>

                    {/* Content */}
                    <div className={styles.latestBoxContent}>
                      <h4>{pillar.title}</h4>
                      <p className={styles.pillarIntro}>{pillar.intro}</p>
                      <ul className={styles.pillarList}>
                        {pillar.points.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
