"use client";
import React, { useEffect, useState } from "react";
import styles from "./articles.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import articlesData from "@/data/articles/articles-data";
import { useLanguage } from "@/components/LanguageProvider";

export default function Articles() {
  const router = useRouter();
  const { locale, t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const isRTL = locale === "ar";

  // 🔹 Meta Pixel helper – used only for the 3 events you requested
  const track = (eventName, params = {}) => {
    if (typeof window === "undefined" || typeof window.fbq !== "function") {
      return;
    }
    window.fbq("trackCustom", eventName, params);
  };

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  // Hero images with translations
  const heroImages = [
    {
      src: `${CDN}/sky-parks/exterior-night-01.jpg`,
      alt: isRTL
        ? "تحليلات سوق العقارات في دبي"
        : "Dubai Real Estate Market Insights",
      title: isRTL ? "دليل الاستثمار" : "Investment Guides",
      description: isRTL
        ? "حقّق أقصى عائد من خلال الاستثمار الاستراتيجي في العقارات"
        : "Maximize returns with strategic property investments",
    },
    {
      src: `${CDN}/hartland/hero-bg.jpg`,
      alt: isRTL ? "استراتيجيات الاستثمار" : "Investment Strategies",
      title: isRTL ? "تحليل السوق" : "Market Analysis",
      description: isRTL
        ? "رؤى الخبراء حول اتجاهات العقارات الفاخرة في دبي"
        : "Expert insights on Dubai's luxury property trends",
    },
    {
      src: `${CDN}/lumena-alta/hero-bg.jpg`,
      alt: isRTL ? "تطوير العقارات" : "Property Development",
      title: isRTL ? "أخبار التطوير" : "Development News",
      description: isRTL
        ? "أحدث التحديثات حول المشاريع العقارية المتميزة في دبي"
        : "Latest updates on premium Dubai developments",
    },
  ];

  // Trust stats with translations
  const trustStats = [
    {
      number: "15+",
      label: isRTL ? "سنوات خبرة" : "Years Experience",
    },
    {
      number: "500+",
      label: isRTL ? "مشروع مكتمل" : "Projects Completed",
    },
    {
      number: "98%",
      label: isRTL ? "رضا العملاء" : "Client Satisfaction",
    },
  ];

  const handleArticleClick = (article, location) => {
    // 🔹 ArticleClick
    track("ArticleClick", {
      slug: article.slug,
      title: article.title,
      category: article.category,
      location, // "card" or "cta"
      locale,
    });

    router.push(`/articles/${article.slug}`);
  };

  // Get localized data
  const listingData = articlesData.getListingData(locale);
  const articles = articlesData.getAllArticles(locale);

  // Calculate transform for RTL direction
  const getCarouselTransform = () => {
    if (isRTL) {
      // For RTL: move in positive direction (opposite of LTR)
      return `translateX(${currentImage * 100}%)`;
    }
    // For LTR: move in negative direction (standard)
    return `translateX(-${currentImage * 100}%)`;
  };

  return (
    <div
      className={`${styles.page} ${isVisible ? styles.visible : ""} ${
        isRTL ? styles.rtl : ""
      }`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* HERO (carousel) */}
      <section className={styles.hero}>
        <div className={styles.heroCarousel}>
          <div
            className={styles.carouselTrack}
            style={{ transform: getCarouselTransform() }}
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
                      <span>{isRTL ? "رؤى الخبراء" : "Expert Insights"}</span>
                      <div className={styles.badgeLine}></div>
                    </div>
                    <h1 className={styles.heroTitle}>
                      {isRTL ? "العقارات في دبي" : "Dubai Real Estate"}{" "}
                      <span className={styles.highlight}>{image.title}</span>
                    </h1>
                    <p className={styles.heroSubtitle}>{image.description}</p>
                    <div className={styles.trustStats}>
                      {trustStats.map((stat, i) => (
                        <div key={i} className={styles.statItem}>
                          <div className={styles.statNumber}>{stat.number}</div>
                          <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                      ))}
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
              {listingData.sectionHeader.badge}
            </div>
            <h2 className={styles.sectionTitle}>
              {listingData.sectionHeader.title}{" "}
              <span className={styles.highlight}>
                {listingData.sectionHeader.highlight}
              </span>
            </h2>
            <p className={styles.sectionSubtitle}>
              {listingData.sectionHeader.subtitle}
            </p>
          </div>

          <div className={styles.articlesGrid}>
            {articles.map((article) => (
              <article
                key={article.id}
                className={styles.articleCard}
                onClick={() => handleArticleClick(article, "card")}
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
                      <span>{isRTL ? "اقرأ المقال" : "Read Article"}</span>
                      <div className={styles.arrowIcon}>
                        {isRTL ? "←" : "→"}
                      </div>
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
                      handleArticleClick(article, "cta");
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
            <div className={styles.ctaBadge}>{listingData.cta.badge}</div>
            <h2 className={styles.ctaTitle}>
              {listingData.cta.title}{" "}
              <span className={styles.highlight}>
                {listingData.cta.highlight}
              </span>
            </h2>
            <p className={styles.ctaDescription}>
              {listingData.cta.description}
            </p>
            <div className={styles.ctaButtons}>
              {listingData.cta.buttons.map((b, i) => (
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
                  onClick={() =>
                    track("ArticlesCTAButtonClick", {
                      label: b.text,
                      href: b.href,
                      locale,
                    })
                  }
                >
                  {b.text}
                </a>
              ))}
            </div>
            <div className={styles.trustNote}>
              <strong>{listingData.cta.trustNote}</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
