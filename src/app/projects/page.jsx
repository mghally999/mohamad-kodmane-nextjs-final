"use client";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Projects() {
  const router = useRouter();

  const projects = [
    {
      id: 1,
      title: "Arada – Massar 3",
      description:
        "Luxury villas in Sharjah’s greenest master community, featuring smart home integration, lush landscaping, and family-focused amenities.",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Arada",
      location: "Sharjah",
      type: "Luxury Villas",
      roi: "12–18%",
      status: "Under Construction",
      units: "Limited Units",
      cta: "View Available Villas",
      slug: "arada-massar-3",
      featured: true,
    },
    {
      id: 2,
      title: "Azizi Riviera – Retails",
      description:
        "Prime retail spaces in Dubai’s French Riviera-inspired waterfront community, combining lifestyle, business, and investment potential.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Azizi Developments",
      location: "Meydan, Dubai",
      type: "Retail Spaces",
      roi: "15–22%",
      status: "Ready Soon",
      units: "Prime Retail Outlets",
      cta: "Explore Retail Opportunities",
      slug: "azizi-riviera-retails",
      featured: true,
    },
    {
      id: 3,
      title: "Lumena Alta – Omniyat",
      description:
        "A 380-meter architectural landmark offering ultra-luxury residences with panoramic skyline views, bespoke interiors, and a 50/50 payment plan.",
      image:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Omniyat",
      location: "Business Bay, Dubai",
      type: "Luxury Residences",
      roi: "18–25%",
      status: "Off-Plan",
      units: "Signature Units",
      cta: "Discover Luxury Living",
      slug: "lumena-alta-omniyat",
      featured: true,
    },
    {
      id: 4,
      title: "S Tower – Sobha Hartland",
      description:
        "An iconic tower in Mohammed Bin Rashid City offering luxurious apartments with breathtaking Burj Khalifa views and world-class amenities.",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Sobha Realty",
      location: "MBR City, Dubai",
      type: "Luxury Apartments",
      roi: "14–20%",
      status: "Under Construction",
      units: "Multiple Configurations",
      cta: "View Floor Plans",
      slug: "s-tower-sobha-hartland",
    },
    {
      id: 5,
      title: "Sobha Central",
      description:
        "Modern mixed-use development offering premium residential and commercial units with strategic Dubai connectivity and future growth potential.",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Sobha Realty",
      location: "Dubai",
      type: "Mixed Use",
      roi: "13–19%",
      status: "Off-Plan",
      units: "Various Options",
      cta: "Explore Investment",
      slug: "sobha-central",
    },
    {
      id: 6,
      title: "Sobha The Element",
      description:
        "Contemporary apartments designed for modern lifestyles, featuring advanced architecture, premium interiors, and access to community parks.",
      image:
        "https://images.unsplash.com/photo-1540259579797-88e28e233a82?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Sobha Realty",
      location: "Dubai",
      type: "Apartments",
      roi: "12–17%",
      status: "Ready Soon",
      units: "Family-Friendly",
      cta: "See Availability",
      slug: "sobha-the-element",
    },
    {
      id: 7,
      title: "Sobha UAQ Downtown",
      description:
        "Affordable luxury in Umm Al Quwain’s most ambitious development, offering long-term growth potential and high rental yields.",
      image:
        "https://images.unsplash.com/photo-1600585154340-ffffd8e0d6aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Sobha Realty",
      location: "Umm Al Quwain",
      type: "Mixed Community",
      roi: "16–24%",
      status: "Off-Plan",
      units: "Best Value",
      cta: "Discover Opportunity",
      slug: "sobha-uaq-downtown",
    },
    {
      id: 8,
      title: "Thuraya Siniya Island",
      description:
        "An exclusive island development offering waterfront villas, pristine beaches, and unmatched serenity in Umm Al Quwain.",
      image:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Thuraya Real Estate",
      location: "Umm Al Quwain",
      type: "Waterfront Villas",
      roi: "17–25%",
      status: "Under Development",
      units: "Limited Waterfront Plots",
      cta: "View Island Masterplan",
      slug: "thuraya-siniya-island",
      featured: true,
    },
    {
      id: 9,
      title: "Thuraya Sky Park",
      description:
        "Sustainable residential community featuring elevated green spaces, rooftop gardens, and contemporary living with panoramic views.",
      image:
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Thuraya Real Estate",
      location: "Dubai",
      type: "Residential",
      roi: "15–21%",
      status: "Under Construction",
      units: "Limited Availability",
      cta: "Book Viewing",
      slug: "thuraya-sky-park",
    },
    {
      id: 10,
      title: "Thuraya C Haven Beach Houses",
      description:
        "Exclusive beachfront villas with private access, panoramic sea views, and modern interiors designed for luxury and tranquility.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "Thuraya Real Estate",
      location: "Umm Al Quwain",
      type: "Beachfront Villas",
      roi: "20–30%",
      status: "Ready Soon",
      units: "Ultra Exclusive",
      cta: "Request Private Tour",
      slug: "thuraya-c-haven-beach-houses",
      featured: true,
    },
    {
      id: 11,
      title: "Project Prices",
      description:
        "Comprehensive pricing list for all projects, including installment plans, area sizes, and investment insights.",
      image:
        "https://images.unsplash.com/photo-1600585153934-c9e7d1fd35dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      developer: "All Developers",
      location: "UAE",
      type: "Pricing Overview",
      roi: "—",
      status: "Updated Weekly",
      units: "All Projects",
      cta: "View Full Price Sheet",
      slug: "project-prices",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  const handleProjectClick = (slug) => {
    router.push(`/projects/${slug}`);
  };

  const handleCTAClick = (e, slug) => {
    e.stopPropagation();
    router.push(`/projects/${slug}`);
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroOverlay}></div>
          <Image
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Premium Dubai Real Estate Developments - Exclusive Projects Portfolio"
            fill
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span>EXCLUSIVE DEVELOPMENTS PORTFOLIO</span>
              <div className={styles.badgeLine}></div>
            </div>

            <h1 className={styles.heroTitle}>
              Handpicked Projects with{" "}
              <span className={styles.highlight}>Proven ROI 12-30%</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Curated selection of premium real estate opportunities in Dubai
              and UAE. Every project is thoroughly vetted for maximum returns
              and minimum risk.
            </p>

            {/* Trust Stats */}
            <div className={styles.trustStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>9</div>
                <div className={styles.statLabel}>Premium Projects</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>12-30%</div>
                <div className={styles.statLabel}>Guaranteed ROI</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100%</div>
                <div className={styles.statLabel}>Sold Out Success</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>HOT OPPORTUNITIES</div>
            <h2 className={styles.sectionTitle}>
              Featured <span className={styles.highlight}>High-Demand</span>{" "}
              Projects
            </h2>
            <p className={styles.sectionSubtitle}>
              Limited units available in Dubai's most sought-after developments
            </p>
          </div>

          <div className={styles.featuredGrid}>
            {featuredProjects.map((project) => (
              <article
                key={project.id}
                className={styles.featuredCard}
                onClick={() => handleProjectClick(project.slug)}
              >
                <div className={styles.featuredBadge}>🔥 HOT DEAL</div>

                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.developer} - ${project.location}`}
                    fill
                    className={styles.projectImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.imageOverlay}></div>

                  <div className={styles.projectMeta}>
                    <div className={styles.developer}>{project.developer}</div>
                    <div className={styles.location}>{project.location}</div>
                  </div>

                  <div className={styles.roiBadge}>
                    <span>{project.roi} ROI</span>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.projectDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Type</span>
                      <span className={styles.detailValue}>{project.type}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Status</span>
                      <span className={styles.detailValue}>
                        {project.status}
                      </span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Availability</span>
                      <span className={styles.detailValue}>
                        {project.units}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleCTAClick(e, project.slug)}
                    className={styles.projectCTA}
                  >
                    {project.cta}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>PREMIUM PORTFOLIO</div>
            <h2 className={styles.sectionTitle}>
              Complete <span className={styles.highlight}>Project</span>{" "}
              Collection
            </h2>
            <p className={styles.sectionSubtitle}>
              Carefully selected developments offering exceptional value and
              growth potential
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {otherProjects.map((project) => (
              <article
                key={project.id}
                className={styles.projectCard}
                onClick={() => handleProjectClick(project.slug)}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.developer} Development`}
                    fill
                    className={styles.projectImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.imageOverlay}></div>

                  <div className={styles.projectMeta}>
                    <div className={styles.developer}>{project.developer}</div>
                    <div className={styles.location}>{project.location}</div>
                  </div>

                  <div className={styles.roiBadge}>
                    <span>{project.roi} ROI</span>
                  </div>

                  <div className={styles.cardHover}>
                    <div className={styles.hoverContent}>
                      <span>View Project Details</span>
                      <div className={styles.arrowIcon}>→</div>
                    </div>
                  </div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.projectDetails}>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Type</span>
                      <span className={styles.detailValue}>{project.type}</span>
                    </div>
                    <div className={styles.detailItem}>
                      <span className={styles.detailLabel}>Status</span>
                      <span className={styles.detailValue}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={(e) => handleCTAClick(e, project.slug)}
                    className={styles.projectCTA}
                  >
                    {project.cta}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimate CTA Section */}
      <section className={styles.ultimateCTA}>
        <div className={styles.container}>
          <div className={styles.ultimateCTACard}>
            <div className={styles.ctaBadge}>🚀 LIMITED OPPORTUNITY</div>
            <h2 className={styles.ctaTitle}>
              Ready to Secure Your{" "}
              <span className={styles.highlight}>Dream Investment?</span>
            </h2>
            <p className={styles.ctaDescription}>
              Don't miss out on these exclusive projects. Get personalized
              consultation, special pricing, and guaranteed returns. Our clients
              average 18-25% ROI annually.
            </p>

            <div className={styles.benefitsGrid}>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>✅</span>
                <span>Best Price Guarantee</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>✅</span>
                <span>Rental Guarantee Programs</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>✅</span>
                <span>Post-Sales Support</span>
              </div>
              <div className={styles.benefit}>
                <span className={styles.benefitIcon}>✅</span>
                <span>Flexible Payment Plans</span>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <a
                href="https://wa.me/971501234567?text=I'm interested in your premium projects and want to schedule a viewing"
                className={styles.primaryCTA}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 WhatsApp for Exclusive Pricing
              </a>
              <a href="tel:+971501234567" className={styles.secondaryCTA}>
                📞 Call Now for Urgent Deals
              </a>
            </div>

            <div className={styles.urgencyNote}>
              <strong>
                ⚠️ Last units available - Prices increasing next week!
              </strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
