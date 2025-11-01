"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./page.module.css";

export default function RentalReturnsGuide() {
  const [showConsultation, setShowConsultation] = useState(false);

  const rentalYields = [
    {
      location: "Downtown Dubai",
      averageYield: "7.2%",
      premiumYield: "9.5%",
      averageRent: "AED 180,000",
      propertyType: "Luxury Apartments",
      demand: "Very High",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      location: "Palm Jumeirah",
      averageYield: "6.8%",
      premiumYield: "8.9%",
      averageRent: "AED 350,000",
      propertyType: "Villas & Apartments",
      demand: "High",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      location: "Dubai Marina",
      averageYield: "7.5%",
      premiumYield: "10.2%",
      averageRent: "AED 120,000",
      propertyType: "Waterfront Apartments",
      demand: "Very High",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
    },
    {
      location: "Business Bay",
      averageYield: "7.8%",
      premiumYield: "11.5%",
      averageRent: "AED 95,000",
      propertyType: "Commercial & Residential",
      demand: "High",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      location: "Jumeirah Village Circle",
      averageYield: "8.2%",
      premiumYield: "12.1%",
      averageRent: "AED 65,000",
      propertyType: "Affordable Apartments",
      demand: "Medium-High",
      image:
        "https://images.unsplash.com/photo-1540518614846-7eded1027f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80",
    },
    {
      location: "Dubai Hills Estate",
      averageYield: "6.5%",
      premiumYield: "8.3%",
      averageRent: "AED 140,000",
      propertyType: "Family Villas",
      demand: "High",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    },
  ];

  const caseStudies = [
    {
      investor: "Portfolio Investor",
      strategy: "Multiple Unit Acquisition",
      investment: "AED 8,400,000",
      annualRental: "AED 672,000",
      yield: "8.0%",
      properties: "6 units across 3 locations",
      management: "Professional property management",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      investor: "Luxury Focus Investor",
      strategy: "Premium Single Asset",
      investment: "AED 12,000,000",
      annualRental: "AED 960,000",
      yield: "8.0%",
      properties: "Palm Jumeirah Villa",
      management: "Luxury concierge service",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      investor: "Entry Level Investor",
      strategy: "Single Unit Start",
      investment: "AED 1,200,000",
      annualRental: "AED 96,000",
      yield: "8.0%",
      properties: "1-bedroom apartment",
      management: "Basic management package",
      image:
        "https://images.unsplash.com/photo-1540518614846-7eded1027f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80",
    },
  ];

  return (
    <article className={styles.articlePage}>
      {/* Schema Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Dubai Rental Returns Guide 2024: How to Achieve 8-12% Rental Yields",
            description:
              "Complete guide to building a profitable rental property portfolio in Dubai. Learn strategies for 8-12% rental yields with proven case studies.",
            author: {
              "@type": "Person",
              name: "Mohamad Kodmane",
            },
            publisher: {
              "@type": "Organization",
              name: "Dubai Real Estate Experts",
              logo: {
                "@type": "ImageObject",
                url: "https://yourdomain.com/logo.png",
              },
            },
            datePublished: "2024-01-15",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://yourdomain.com/articles/rental-returns-guide",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="https://images.unsplash.com/photo-1540518614846-7eded1027f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80"
            alt="Luxury Dubai apartment interior showing rental property investment opportunity"
            fill
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb}>
            <a href="/">Home</a> / <a href="/articles">Articles</a> /{" "}
            <span>Rental Returns</span>
          </nav>

          <div className={styles.articleMeta}>
            <span className={styles.readTime}>8 min read</span>
            <span className={styles.category}>Investment Strategy</span>
          </div>

          <h1 className={styles.heroTitle}>
            Dubai Rental Returns Guide 2024: Achieve 8-12% Rental Yields
          </h1>

          <p className={styles.heroSubtitle}>
            Comprehensive guide to building a profitable rental property
            portfolio in Dubai. Learn proven strategies, location analysis, and
            management techniques for consistent passive income.
          </p>

          <div className={styles.author}>
            <div className={styles.authorAvatar}>MK</div>
            <div className={styles.authorInfo}>
              <strong>Mohamad Kodmane</strong>
              <span>Rental Property Investment Expert</span>
            </div>
          </div>
        </div>
      </header>

      {/* Key Metrics */}
      <section className={styles.keyMetrics}>
        <div className={styles.container}>
          <h2>Dubai Rental Market Performance</h2>
          <div className={styles.metricsGrid}>
            <div className={styles.metric}>
              <div className={styles.metricValue}>7.2%</div>
              <div className={styles.metricLabel}>
                Average Gross Rental Yield
              </div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue}>12.1%</div>
              <div className={styles.metricLabel}>Maximum Achievable Yield</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue}>94%</div>
              <div className={styles.metricLabel}>Average Occupancy Rate</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue}>15%</div>
              <div className={styles.metricLabel}>Rental Price Growth YoY</div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <aside className={styles.tableOfContents}>
        <h2>Table of Contents</h2>
        <nav>
          <ul>
            <li>
              <a href="#market-overview">Rental Market Overview</a>
            </li>
            <li>
              <a href="#location-analysis">Location Yield Analysis</a>
            </li>
            <li>
              <a href="#investment-strategies">Investment Strategies</a>
            </li>
            <li>
              <a href="#property-management">Property Management</a>
            </li>
            <li>
              <a href="#case-studies">Real Case Studies</a>
            </li>
            <li>
              <a href="#maximizing-returns">Maximizing Returns</a>
            </li>
            <li>
              <a href="#getting-started">Getting Started</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Article Content */}
      <main className={styles.articleContent}>
        <section id="market-overview" className={styles.contentSection}>
          <h2>Dubai Rental Market Overview 2024</h2>

          <p>
            Dubai's rental market is experiencing{" "}
            <strong>unprecedented growth</strong> with rental yields
            outperforming global averages. The combination of population growth,
            economic expansion, and limited quality supply creates ideal
            conditions for rental investors.
          </p>

          <div className={styles.marketInsights}>
            <div className={styles.insight}>
              <h4>📈 Market Growth Drivers</h4>
              <ul>
                <li>
                  <strong>Population Increase:</strong> 200+ new residents daily
                </li>
                <li>
                  <strong>Economic Expansion:</strong> 3.3% GDP growth driving
                  demand
                </li>
                <li>
                  <strong>Quality Supply Gap:</strong> Limited premium rental
                  inventory
                </li>
                <li>
                  <strong>Expat Influx:</strong> 78% of residents are
                  expatriates
                </li>
              </ul>
            </div>

            <div className={styles.insight}>
              <h4>💰 Yield Comparison</h4>
              <ul>
                <li>
                  <strong>Dubai Average:</strong> 7.2% gross rental yield
                </li>
                <li>
                  <strong>London:</strong> 3.1% gross rental yield
                </li>
                <li>
                  <strong>Singapore:</strong> 2.8% gross rental yield
                </li>
                <li>
                  <strong>Hong Kong:</strong> 2.2% gross rental yield
                </li>
              </ul>
            </div>
          </div>

          <blockquote className={styles.expertQuote}>
            "Dubai offers the perfect storm for rental investors: strong demand,
            limited quality supply, and tax-free income. It's one of the few
            markets where you can achieve double-digit yields with professional
            management."
            <cite>- Mohamad Kodmane, Rental Investment Expert</cite>
          </blockquote>
        </section>

        <section id="location-analysis" className={styles.contentSection}>
          <h2>Location-Specific Rental Yield Analysis</h2>

          <p>
            Rental yields vary significantly across Dubai's neighborhoods.
            Strategic location selection is crucial for maximizing returns and
            ensuring consistent occupancy.
          </p>

          <div className={styles.yieldGrid}>
            {rentalYields.map((location, index) => (
              <div key={index} className={styles.yieldCard}>
                <div className={styles.locationImage}>
                  <Image
                    src={location.image}
                    alt={`${location.location} rental property`}
                    fill
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay}></div>
                  <div className={styles.yieldBadge}>
                    {location.averageYield}
                  </div>
                </div>

                <div className={styles.locationInfo}>
                  <h3>{location.location}</h3>
                  <div className={styles.propertyType}>
                    {location.propertyType}
                  </div>

                  <div className={styles.yieldDetails}>
                    <div className={styles.yieldItem}>
                      <span>Average Yield</span>
                      <strong>{location.averageYield}</strong>
                    </div>
                    <div className={styles.yieldItem}>
                      <span>Premium Yield</span>
                      <strong className={styles.premium}>
                        {location.premiumYield}
                      </strong>
                    </div>
                    <div className={styles.yieldItem}>
                      <span>Average Rent</span>
                      <strong>{location.averageRent}/year</strong>
                    </div>
                  </div>

                  <div className={styles.demandIndicator}>
                    <span>Demand: </span>
                    <strong
                      className={
                        styles[location.demand.toLowerCase().replace(" ", "")]
                      }
                    >
                      {location.demand}
                    </strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* In-Article CTA */}
        <div className={styles.inArticleCTA}>
          <h3>Ready to Build Your Rental Portfolio?</h3>
          <p>
            Get personalized rental yield analysis and property recommendations
            for your investment goals.
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => setShowConsultation(true)}
          >
            Get Rental Portfolio Strategy
          </button>
        </div>

        <section id="investment-strategies" className={styles.contentSection}>
          <h2>Proven Rental Investment Strategies</h2>

          <p>
            Different investment strategies yield different results. Choose the
            approach that aligns with your financial goals, risk tolerance, and
            management preferences.
          </p>

          <div className={styles.strategies}>
            <div className={styles.strategy}>
              <h4>🏠 Single Unit Strategy</h4>
              <div className={styles.strategyDetails}>
                <p>
                  <strong>Target Yield:</strong> 7-9%
                </p>
                <p>
                  <strong>Investment Range:</strong> AED 1-3M
                </p>
                <p>
                  <strong>Management:</strong> Basic to Moderate
                </p>
                <p>
                  <strong>Risk Level:</strong> Low
                </p>
              </div>
              <p>
                Ideal for first-time investors focusing on prime locations with
                stable demand
              </p>
            </div>

            <div className={styles.strategy}>
              <h4>🏢 Multi-Unit Portfolio</h4>
              <div className={styles.strategyDetails}>
                <p>
                  <strong>Target Yield:</strong> 8-10%
                </p>
                <p>
                  <strong>Investment Range:</strong> AED 5-15M
                </p>
                <p>
                  <strong>Management:</strong> Professional Required
                </p>
                <p>
                  <strong>Risk Level:</strong> Medium
                </p>
              </div>
              <p>
                Diversified approach across multiple locations and property
                types
              </p>
            </div>

            <div className={styles.strategy}>
              <h4>🌟 Luxury Focus Strategy</h4>
              <div className={styles.strategyDetails}>
                <p>
                  <strong>Target Yield:</strong> 6-8%
                </p>
                <p>
                  <strong>Investment Range:</strong> AED 8M+
                </p>
                <p>
                  <strong>Management:</strong> Premium Service
                </p>
                <p>
                  <strong>Risk Level:</strong> Low-Medium
                </p>
              </div>
              <p>High-end properties with premium tenants and lower turnover</p>
            </div>

            <div className={styles.strategy}>
              <h4>⚡ High-Yield Strategy</h4>
              <div className={styles.strategyDetails}>
                <p>
                  <strong>Target Yield:</strong> 10-12%
                </p>
                <p>
                  <strong>Investment Range:</strong> AED 2-6M
                </p>
                <p>
                  <strong>Management:</strong> Intensive
                </p>
                <p>
                  <strong>Risk Level:</strong> Medium-High
                </p>
              </div>
              <p>Focus on emerging locations and value-add opportunities</p>
            </div>
          </div>
        </section>

        <section id="property-management" className={styles.contentSection}>
          <h2>Professional Property Management Essentials</h2>

          <p>
            Effective property management is the key to maximizing rental yields
            and minimizing vacancies. Professional management can increase net
            returns by 2-3%.
          </p>

          <div className={styles.managementServices}>
            <div className={styles.service}>
              <h4>🔄 Tenant Management</h4>
              <ul>
                <li>Comprehensive tenant screening</li>
                <li>Lease agreement preparation</li>
                <li>Rent collection automation</li>
                <li>Tenant relationship management</li>
              </ul>
            </div>

            <div className={styles.service}>
              <h4>🏠 Maintenance & Repairs</h4>
              <ul>
                <li>24/7 emergency response</li>
                <li>Preventive maintenance scheduling</li>
                <li>Vendor management</li>
                <li>Quality control oversight</li>
              </ul>
            </div>

            <div className={styles.service}>
              <h4>💰 Financial Management</h4>
              <ul>
                <li>Rent optimization analysis</li>
                <li>Expense tracking and reporting</li>
                <li>Tax documentation preparation</li>
                <li>Performance reporting</li>
              </ul>
            </div>

            <div className={styles.service}>
              <h4>📈 Value Enhancement</h4>
              <ul>
                <li>Property improvement planning</li>
                <li>Market positioning strategy</li>
                <li>Renewal rate optimization</li>
                <li>Exit strategy planning</li>
              </ul>
            </div>
          </div>

          <div className={styles.managementCosts}>
            <h4>Management Fee Structure</h4>
            <div className={styles.feeStructure}>
              <div className={styles.feeTier}>
                <h5>Basic Management</h5>
                <div className={styles.feeRate}>5% of monthly rent</div>
                <p>Essential services for single properties</p>
              </div>
              <div className={styles.feeTier}>
                <h5>Premium Management</h5>
                <div className={styles.feeRate}>8% of monthly rent</div>
                <p>Comprehensive services with performance guarantees</p>
              </div>
              <div className={styles.feeTier}>
                <h5>Portfolio Management</h5>
                <div className={styles.feeRate}>6% of monthly rent</div>
                <p>Bulk discount for multiple properties</p>
              </div>
            </div>
          </div>
        </section>

        <section id="case-studies" className={styles.contentSection}>
          <h2>Real Rental Investment Case Studies</h2>

          <p>
            These real case studies demonstrate how different investment
            strategies achieve consistent rental returns in Dubai's market.
          </p>

          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((study, index) => (
              <div key={index} className={styles.caseStudy}>
                <div className={styles.studyImage}>
                  <Image
                    src={study.image}
                    alt={`${study.investor} rental property case study`}
                    fill
                    className={styles.image}
                  />
                  <div className={styles.yieldBadge}>{study.yield} Yield</div>
                </div>

                <div className={styles.studyContent}>
                  <h3>{study.investor}</h3>
                  <div className={styles.strategyType}>{study.strategy}</div>

                  <div className={styles.investmentMetrics}>
                    <div className={styles.metric}>
                      <span>Investment</span>
                      <strong>{study.investment}</strong>
                    </div>
                    <div className={styles.metric}>
                      <span>Annual Rental</span>
                      <strong className={styles.rental}>
                        {study.annualRental}
                      </strong>
                    </div>
                    <div className={styles.metric}>
                      <span>Properties</span>
                      <strong>{study.properties}</strong>
                    </div>
                  </div>

                  <div className={styles.managementInfo}>
                    <strong>Management:</strong> {study.management}
                  </div>

                  <div className={styles.performance}>
                    <div className={styles.performanceMetric}>
                      <span>Net Yield After Costs</span>
                      <strong>7.2%</strong>
                    </div>
                    <div className={styles.performanceMetric}>
                      <span>Occupancy Rate</span>
                      <strong>96%</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="maximizing-returns" className={styles.contentSection}>
          <h2>Strategies for Maximizing Rental Returns</h2>

          <p>
            Beyond basic investment, several strategies can significantly
            enhance your rental yields and property performance.
          </p>

          <div className={styles.enhancementStrategies}>
            <div className={styles.enhancement}>
              <h4>🎯 Value-Add Improvements</h4>
              <p>
                <strong>Potential Yield Increase:</strong> 1-2%
              </p>
              <ul>
                <li>Strategic renovations and upgrades</li>
                <li>Smart home technology integration</li>
                <li>Premium appliance upgrades</li>
                <li>Furnishing for premium rentals</li>
              </ul>
            </div>

            <div className={styles.enhancement}>
              <h4>📊 Dynamic Pricing</h4>
              <p>
                <strong>Potential Yield Increase:</strong> 0.5-1.5%
              </p>
              <ul>
                <li>Seasonal rent optimization</li>
                <li>Market demand-based pricing</li>
                <li>Competitive analysis adjustments</li>
                <li>Renewal rate optimization</li>
              </ul>
            </div>

            <div className={styles.enhancement}>
              <h4>🔧 Cost Optimization</h4>
              <p>
                <strong>Potential Yield Increase:</strong> 1-2%
              </p>
              <ul>
                <li>Bulk service provider contracts</li>
                <li>Energy efficiency improvements</li>
                <li>Preventive maintenance planning</li>
                <li>Technology automation</li>
              </ul>
            </div>

            <div className={styles.enhancement}>
              <h4>🏆 Premium Positioning</h4>
              <p>
                <strong>Potential Yield Increase:</strong> 2-3%
              </p>
              <ul>
                <li>Luxury service offerings</li>
                <li>Exclusive tenant amenities</li>
                <li>Brand partnership benefits</li>
                <li>Corporate leasing programs</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="getting-started" className={styles.contentSection}>
          <h2>Getting Started with Rental Investments</h2>

          <p>
            Building a successful rental portfolio requires careful planning and
            systematic execution. Follow this proven roadmap for success.
          </p>

          <div className={styles.roadmap}>
            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h4>Financial Assessment</h4>
                <p>
                  Evaluate investment capacity, risk tolerance, and return
                  objectives
                </p>
              </div>
            </div>

            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h4>Strategy Selection</h4>
                <p>
                  Choose investment strategy aligned with your goals and
                  preferences
                </p>
              </div>
            </div>

            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h4>Property Identification</h4>
                <p>
                  Source and evaluate properties based on yield potential and
                  growth
                </p>
              </div>
            </div>

            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h4>Acquisition & Setup</h4>
                <p>
                  Complete purchase process and establish management systems
                </p>
              </div>
            </div>

            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>5</div>
              <div className={styles.stepContent}>
                <h4>Performance Optimization</h4>
                <p>Implement enhancement strategies and monitor performance</p>
              </div>
            </div>

            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>6</div>
              <div className={styles.stepContent}>
                <h4>Portfolio Expansion</h4>
                <p>Reinvest profits and scale your rental property portfolio</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.ctaContent}>
          <h2>Start Building Your Rental Income Stream</h2>
          <p>
            Join successful investors earning consistent 8-12% rental yields in
            Dubai's thriving property market. Let us help you build and manage
            your portfolio.
          </p>
          <div className={styles.ctaButtons}>
            <button
              className={styles.primaryCTA}
              onClick={() => setShowConsultation(true)}
            >
              Get Personalized Rental Strategy
            </button>
            <a
              href="https://wa.me/971501234567?text=Hi,%20I%20want%20to%20learn%20about%20rental%20property%20investment%20in%20Dubai"
              className={styles.secondaryCTA}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Rental Investment Consultation
            </a>
          </div>
          <div className={styles.guarantee}>
            <strong>
              Proven Strategies • Professional Management • Guaranteed Results
            </strong>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      {showConsultation && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setShowConsultation(false)}
            >
              ×
            </button>
            <h3>Build Your Rental Portfolio</h3>
            <p>
              Get a customized rental investment strategy based on your goals
              and budget
            </p>
            <form className={styles.consultationForm}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <select required>
                <option value="">Investment Budget</option>
                <option value="1-3M">AED 1-3 Million</option>
                <option value="3-8M">AED 3-8 Million</option>
                <option value="8M+">AED 8M+</option>
              </select>
              <select required>
                <option value="">Preferred Strategy</option>
                <option value="single">Single Property</option>
                <option value="portfolio">Portfolio</option>
                <option value="luxury">Luxury Focus</option>
                <option value="high-yield">High Yield</option>
              </select>
              <select required>
                <option value="">Management Preference</option>
                <option value="self">Self-Manage</option>
                <option value="basic">Basic Management</option>
                <option value="premium">Premium Management</option>
              </select>
              <button type="submit">Get Rental Strategy</button>
            </form>
          </div>
        </div>
      )}
    </article>
  );
}
