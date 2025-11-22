// components/PillarsSection.jsx
import styles from "@/styles/PillarSection.module.css";

const BASE = "https://sobharealty.com";

const pillars = [
  {
    title: "Craftsmanship",
    titleHtml: "Craftsmanship",
    alt: "Craftsmanship",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2158&q=80",
    text: "When building a house, attention to detail is essential. Sobha recognises this, and we pay attention to every detail, whether it's the quality of the materials, textures and finishes, door hinges, doors, floor tiling, bathroom flooring, fittings or window size. A true craftsman for a harmonious life.",
  },
  {
    title: "Thoughtful Design",
    titleHtml: "Thoughtful<br>Design",
    alt: "Design",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
    text: "At Sobha, home design is not just a structure; it's a beautiful piece of art. Homes that are spacious with well-utilised spaces. The design is carefully considered and subjected to severe quality inspections. We consider every stage of construction to ensure a thoughtful design.",
  },
  {
    title: "Signature Quality",
    titleHtml: "Signature<br>Quality",
    alt: "Quality",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    text: "At Sobha, we are involved in every stage of the process, from material sourcing to building homes. Every home built by us is subjected to a material quality inspection. All of the items used in the construction are manufactured by us, allowing complete control over the quality of the products utilised.",
  },
];

export default function PillarsSection() {
  return (
    <section className={styles.newLaunchSection}>
      <div
        className={`${styles.container} ${styles.sectionSpaceTop} ${styles.sectionSpaceBottom} ${styles.latestImageBoxes}`}
      >
        <div className={styles.titleSection}>
          <h2 className={`${styles.heading2} ${styles.linesOnSides}`}>
            From Concept to Completion: Defining Our Pillars
          </h2>
        </div>

        <div className={styles.homeSlider}>
          <div className={styles.slidesWrapper}>
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className={`${styles.slide} ${
                  index === 1 ? styles.middleSlide : ""
                }`}
              >
                <div className={styles.latestBoxes}>
                  <div className={styles.latestBoxesCol}>
                    <div className={styles.latestBoxThumb}>
                      <img src={pillar.img} alt={pillar.alt} />
                    </div>

                    <div className={styles.latestBoxContent}>
                      <h4
                        dangerouslySetInnerHTML={{ __html: pillar.titleHtml }}
                      />
                      <p>{pillar.text}</p>
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
