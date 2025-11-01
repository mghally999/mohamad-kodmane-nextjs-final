"use client";
import Image from "next/image";
import styles from "@/styles/projects/sky-parks/ProjectIntro.module.css";

export default function ProjectIntro({
  title = "LIVE WHERE THE SKY FEELS LIKE HOME",
  paragraphs = [
    "Rising over Sheikh Zayed Road, Sobha SkyParks brings together the best of city life and elevated calm. This 81-storey architectural icon places you at the heart of Dubai's most desired location, steps away from business districts, fine dining, designer labels, and vibrant cultural landmarks.",
    "Choose from 1–4 bedroom residences and elegant duplexes, each offering sweeping views of the Arabian Gulf and Downtown Dubai skyline. Here, every moment flows seamlessly between movement and stillness, between the pulse of the city and the quiet above the clouds.",
  ],
  brochureHref = "https://luxury-real-estate-media.b-cdn.net/sky-parks/SOBHA-SKYPARKS-BROCHURE.pdf",
  imgUrl = "https://luxury-real-estate-media.b-cdn.net/sky-parks/intro-main.jpg",
  imgAlt = "Sobha SkyParks exterior",
  companyName = "Sobha Realty",
  projectName = "Sobha SkyParks",
  location = "Sheikh Zayed Road, Dubai",
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: projectName,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dubai",
      streetAddress: "Sheikh Zayed Road",
      addressCountry: "AE",
    },
    brand: { "@type": "Brand", name: companyName },
    description:
      "81-storey luxury residential tower offering 1–4 bedroom apartments with panoramic Dubai views.",
    image: imgUrl,
  };

  return (
    <section
      className={styles.projectIntro}
      aria-label={`${projectName} introduction`}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.introContainer}>
        <div className={styles.textContent}>
          <div className={styles.titleSection}>
            <h2 className={styles.projectTitle}>{title}</h2>
            <div className={styles.titleDivider}></div>
          </div>
          <div className={styles.descriptionSection}>
            {paragraphs.map((p, i) => (
              <p key={i} className={styles.projectDescription}>
                {p}
              </p>
            ))}
          </div>
          <div className={styles.actionSection}>
            <a
              href={brochureHref}
              className={styles.downloadBrochure}
              aria-label="Download brochure"
              rel="noopener"
            >
              <span className={styles.brochureText}>Download Brochure</span>
              <div className={styles.downloadIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 16L12 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7 11L12 16L17 11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 20H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>

        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={imgUrl}
                alt={imgAlt}
                fill
                className={styles.mainImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
              <div className={styles.imageBorder}></div>
              <div className={styles.imageOverlay}></div>
            </div>

            {/* Floating cards keep as-is */}
            <div
              className={styles.floatingCard}
              style={{ top: "20%", right: "-30px" }}
            >
              <div className={styles.cardIcon}>🏙️</div>
              <div className={styles.cardContent}>
                <div className={styles.cardValue}>Sheikh Zayed Rd</div>
                <div className={styles.cardLabel}>Prime Location</div>
              </div>
            </div>
            <div
              className={styles.floatingCard}
              style={{ bottom: "30%", left: "-40px" }}
            >
              <div className={styles.cardIcon}>🌊</div>
              <div className={styles.cardContent}>
                <div className={styles.cardValue}>Sea & City</div>
                <div className={styles.cardLabel}>Dual Views</div>
              </div>
            </div>
            <div
              className={styles.floatingCard}
              style={{ bottom: "15%", right: "-20px" }}
            >
              <div className={styles.cardIcon}>🚇</div>
              <div className={styles.cardContent}>
                <div className={styles.cardValue}>5 min</div>
                <div className={styles.cardLabel}>To Metro</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
