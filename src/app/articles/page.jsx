"use client";
import React, { useEffect, useState } from "react";
import styles from "./Articles.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import articlesData from "@/data/articles/articles-data";

export default function Articles() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  const heroImages = [
    {
      src: `${CDN}/sky-parks/exterior-night-01.jpg`,
      alt: "Dubai Real Estate Market Insights",
      title: "Investment Guides",
      description: "Maximize returns with strategic property investments",
    },
    {
      src: `${CDN}/hartland/hero-bg.jpg`,
      alt: "Investment Strategies",
      title: "Market Analysis",
      description: "Expert insights on Dubai's luxury property trends",
    },
    {
      src: `${CDN}/lumena-alta/hero-bg.jpg`,
      alt: "Property Development",
      title: "Development News",
      description: "Latest updates on premium Dubai developments",
    },
  ];

  const handleArticleClick = (slug) => router.push(`/articles/${slug}`);

  return (
    <div className={`${styles.page} ${isVisible ? styles.visible : ""}`}>
      {/* HERO (carousel) */}
      <section className={styles.hero}>
        <div className={styles.heroCarousel}>
          <div
            className={styles.carouselTrack}
            style={{ transform: `translateX(-${currentImage * 100}%)` }}
          >
            {heroImages.map((image, index) => (
              <div key={index} className={styles.carouselSlide}>
                <div className={styles.heroBackground}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={styles.heroImage}
                    priority
                  />
                  <div className={styles.heroOverlay}></div>
                </div>
                <div className={styles.heroContent}>
                  <div className={styles.heroContentInner}>
                    <div className={styles.heroBadge}>
                      <span>Expert Insights</span>
                      <div className={styles.badgeLine}></div>
                    </div>
                    <h1 className={styles.heroTitle}>
                      Dubai Real Estate{" "}
                      <span className={styles.highlight}>{image.title}</span>
                    </h1>
                    <p className={styles.heroSubtitle}>{image.description}</p>
                    <div className={styles.trustStats}>
                      <div className={styles.statItem}>
                        <div className={styles.statNumber}>15+</div>
                        <div className={styles.statLabel}>Years Experience</div>
                      </div>
                      <div className={styles.statItem}>
                        <div className={styles.statNumber}>500+</div>
                        <div className={styles.statLabel}>
                          Projects Completed
                        </div>
                      </div>
                      <div className={styles.statItem}>
                        <div className={styles.statNumber}>98%</div>
                        <div className={styles.statLabel}>
                          Client Satisfaction
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.carouselNav}>
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`${styles.navDot} ${
                  currentImage === index ? styles.active : ""
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>

          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{
                width: `${((currentImage + 1) / heroImages.length) * 100}%`,
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>
      </section>

      {/* ARTICLES GRID (from shared data) */}
      <section className={styles.articlesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              {articlesData.listing.sectionHeader.badge}
            </div>
            <h2 className={styles.sectionTitle}>
              {articlesData.listing.sectionHeader.title}{" "}
              <span className={styles.highlight}>
                {articlesData.listing.sectionHeader.highlight}
              </span>
            </h2>
            <p className={styles.sectionSubtitle}>
              {articlesData.listing.sectionHeader.subtitle}
            </p>
          </div>

          <div className={styles.articlesGrid}>
            {articlesData.getAllArticles().map((article) => (
              <article
                key={article.id}
                className={styles.articleCard}
                onClick={() => handleArticleClick(article.slug)}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className={styles.articleImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.imageOverlay}></div>
                  <div className={styles.categoryBadge}>
                    <span>{article.category}</span>
                  </div>
                  <div className={styles.readTime}>
                    <span>{article.readTime}</span>
                  </div>
                  <div className={styles.cardHover}>
                    <div className={styles.hoverContent}>
                      <span>Read Article</span>
                      <div className={styles.arrowIcon}>→</div>
                    </div>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleDescription}>
                    {article.description}
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleArticleClick(article.slug);
                    }}
                    className={styles.articleCTA}
                  >
                    {article.cta}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaBadge}>
              {articlesData.listing.cta.badge}
            </div>
            <h2 className={styles.ctaTitle}>
              {articlesData.listing.cta.title}{" "}
              <span className={styles.highlight}>
                {articlesData.listing.cta.highlight}
              </span>
            </h2>
            <p className={styles.ctaDescription}>
              {articlesData.listing.cta.description}
            </p>
            <div className={styles.ctaButtons}>
              {articlesData.listing.cta.buttons.map((b, i) => (
                <a
                  key={i}
                  href={b.href}
                  className={
                    b.type === "primary"
                      ? styles.primaryCTA
                      : styles.secondaryCTA
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {b.text}
                </a>
              ))}
            </div>
            <div className={styles.trustNote}>
              <strong>{articlesData.listing.cta.trustNote}</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
