"use client";
import React from "react";
import styles from "./articles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Articles() {
  const router = useRouter();

  const articles = [
    {
      id: 1,
      title: "Off-Plan Real Estate Investment",
      description:
        "Discover how to achieve 15-30% returns through strategic off-plan property investments in Dubai's premium developments.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "5 min read",
      category: "Investment Strategy",
      cta: "Learn Investment Secrets",
      link: "/articles/off-plan-investment-dubai",
      slug: "off-plan-investment-dubai",
    },
    {
      id: 2,
      title: "Dubai's Economic Opportunity",
      description:
        "Explore why Dubai is the world's fastest-growing luxury real estate market with zero tax and unlimited potential.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "4 min read",
      category: "Market Analysis",
      cta: "See Market Potential",
      link: "/articles/dubai-economic-opportunity",
      slug: "dubai-economic-opportunity",
    },
    {
      id: 3,
      title: "Dubai Real Estate Demand",
      description:
        "Record-breaking 214% growth in 5 years. Understand the data behind Dubai's unprecedented property boom.",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "6 min read",
      category: "Data Insights",
      cta: "View Growth Charts",
      link: "/articles/dubai-real-estate-demand",
      slug: "dubai-real-estate-demand",
    },
    {
      id: 4,
      title: "Rental Returns Guide",
      description:
        "How to build a portfolio generating 8-15% annual rental yields with premium Dubai properties.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      readTime: "5 min read",
      category: "Rental Strategy",
      cta: "Maximize Your Returns",
      link: "/articles/rental-returns-guide",
      slug: "rental-returns-guide",
    },
    {
      id: 5,
      title: "Luxury Property Trends 2024",
      description:
        "2024's hottest luxury property trends in Dubai. What smart investors are buying right now.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      readTime: "4 min read",
      category: "Trend Analysis",
      cta: "Discover Trends",
      link: "/articles/luxury-property-trends-2024",
      slug: "luxury-property-trends-2024",
    },
    {
      id: 6,
      title: "Success Stories & Case Studies",
      description:
        "Real investors achieving 32% returns in 14 months. Learn from proven strategies that actually work.",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      readTime: "7 min read",
      category: "Case Studies",
      cta: "Read Success Stories",
      link: "/articles/success-stories",
      slug: "success-stories",
    },
  ];

  const handleArticleClick = (link, slug) => {
    if (link.startsWith("/#")) {
      // For hash links, go to homepage
      router.push("/");
      // You can add scroll functionality here later
    } else {
      router.push(link);
    }
  };

  const handleCardClick = (link, slug) => {
    handleArticleClick(link, slug);
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
          <Image
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Dubai Luxury Real Estate Market Insights"
            fill
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>ELITE INVESTMENT INTELLIGENCE</span>
              <div className={styles.badgeLine}></div>
            </div>

            <h1 className={styles.heroTitle}>
              Smart Investors Read.{" "}
              <span className={styles.highlight}>Smarter Investors Act.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Data-driven insights and proven strategies from Dubai's #1 real
              estate expert. Turn market knowledge into 15-30% returns.
            </p>

            {/* Trust Stats */}
            <div className={styles.trustStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>Articles Published</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>9K+</div>
                <div className={styles.statLabel}>Investors Educated</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>15-30%</div>
                <div className={styles.statLabel}>Proven Returns</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className={styles.articlesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>MARKET INTELLIGENCE</div>
            <h2 className={styles.sectionTitle}>
              Latest{" "}
              <span className={styles.highlight}>Strategic Insights</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Actionable intelligence that separates successful investors from
              the rest
            </p>
          </div>

          <div className={styles.articlesGrid}>
            {articles.map((article) => (
              <article
                key={article.id}
                className={styles.articleCard}
                onClick={() => handleCardClick(article.link, article.slug)}
              >
                {/* Image Container */}
                <div className={styles.imageContainer}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className={styles.articleImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.imageOverlay}></div>

                  {/* Category Badge */}
                  <div className={styles.categoryBadge}>
                    <span>{article.category}</span>
                  </div>

                  {/* Read Time */}
                  <div className={styles.readTime}>
                    <span>{article.readTime}</span>
                  </div>

                  {/* Hover Effect */}
                  <div className={styles.cardHover}>
                    <div className={styles.hoverContent}>
                      <span>Read Article</span>
                      <div className={styles.arrowIcon}>→</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleDescription}>
                    {article.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleArticleClick(article.link, article.slug);
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

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaBadge}>READY TO INVEST?</div>
            <h2 className={styles.ctaTitle}>
              Ready to Turn Insights Into{" "}
              <span className={styles.highlight}>Real Profits?</span>
            </h2>
            <p className={styles.ctaDescription}>
              Stop reading about success. Start creating it. Get personalized
              investment strategies that deliver 15-30% returns.
            </p>

            <div className={styles.ctaButtons}>
              <a
                href="https://wa.me/971501234567?text=I'm%20ready%20to%20invest%20in%20Dubai%20real%20estate"
                className={styles.primaryCTA}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Get Free Consultation
              </a>
              <a
                href="https://www.youtube.com/@Mohamad.Kodmane"
                className={styles.secondaryCTA}
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶️ Watch Market Updates
              </a>
            </div>

            <div className={styles.trustNote}>
              <strong>100+ Success Stories • 0% Bullshit • 100% Results</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
