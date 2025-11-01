"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./page.module.css";

export default function LuxuryPropertyTrends2024() {
  const [showConsultation, setShowConsultation] = useState(false);

  const luxuryTrends = [
    {
      trend: "Smart Home Integration",
      description:
        "AI-powered home automation systems with voice control and predictive maintenance",
      impact: "15-25% value premium",
      adoption: "85% of new luxury developments",
      image:
        "https://images.unsplash.com/photo-1558002038-10559086dfb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Technology",
    },
    {
      trend: "Sustainable Luxury",
      description:
        "Net-zero energy homes with solar integration and eco-friendly materials",
      impact: "20-30% higher resale value",
      adoption: "70% of premium buyers prioritize",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Sustainability",
    },
    {
      trend: "Wellness Architecture",
      description:
        "Homes designed for mental and physical wellbeing with dedicated wellness spaces",
      impact: "18-22% price premium",
      adoption: "90% in ultra-luxury segment",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Lifestyle",
    },
    {
      trend: "Private Amenities",
      description:
        "Personal spas, private cinemas, and dedicated entertainment spaces",
      impact: "25-40% value appreciation",
      adoption: "Standard in AED 20M+ properties",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      category: "Amenities",
    },
    {
      trend: "Waterfront Premium",
      description: "Beachfront and canal homes with private access and views",
      impact: "30-50% location premium",
      adoption: "Limited supply, high demand",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Location",
    },
    {
      trend: "Smart Security",
      description:
        "Biometric access, AI surveillance, and integrated security systems",
      impact: "Essential for high-net-worth buyers",
      adoption: "100% in premium developments",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      category: "Security",
    },
  ];

  const emergingLocations = [
    {
      location: "Dubai Creek Harbour",
      trend: "Future City Center",
      growth: "45% projected appreciation",
      premium: "Waterfront + Downtown access",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      location: "Palm Jumeirah",
      trend: "Ultra-Luxury Waterfront",
      growth: "38% current year growth",
      premium: "Limited inventory, high demand",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      location: "Dubai Hills Estate",
      trend: "Family Luxury Community",
      growth: "32% annual appreciation",
      premium: "Golf course + park views",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    },
    {
      location: "Business Bay",
      trend: "Commercial Luxury Hybrid",
      growth: "28% year-over-year",
      premium: "Downtown proximity + canal views",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
              "Luxury Property Trends Dubai 2024: Smart Homes, Sustainability & Premium Locations",
            description:
              "Comprehensive analysis of 2024 luxury property trends in Dubai. Discover emerging locations, smart home features, and investment opportunities in the premium segment.",
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
              "@id":
                "https://yourdomain.com/articles/luxury-property-trends-2024",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80"
            alt="Luxury Dubai property with modern architecture and premium amenities"
            fill
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb}>
            <a href="/">Home</a> / <a href="/articles">Articles</a> /{" "}
            <span>Luxury Trends</span>
          </nav>

          <div className={styles.articleMeta}>
            <span className={styles.readTime}>7 min read</span>
            <span className={styles.category}>Market Trends</span>
          </div>

          <h1 className={styles.heroTitle}>
            Luxury Property Trends Dubai 2024: Smart Homes & Premium Locations
          </h1>

          <p className={styles.heroSubtitle}>
            Exclusive analysis of emerging luxury property trends in Dubai.
            Discover the smart home features, sustainable designs, and premium
            locations shaping the high-end market in 2024.
          </p>

          <div className={styles.author}>
            <div className={styles.authorAvatar}>MK</div>
            <div className={styles.authorInfo}>
              <strong>Mohamad Kodmane</strong>
              <span>Luxury Property Market Analyst</span>
            </div>
          </div>
        </div>
      </header>

      {/* Market Overview */}
      <section className={styles.marketOverview}>
        <div className={styles.container}>
          <h2>2024 Luxury Market Performance</h2>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewMetric}>
              <div className={styles.metricValue}>18.9%</div>
              <div className={styles.metricLabel}>
                Luxury Price Appreciation
              </div>
            </div>
            <div className={styles.overviewMetric}>
              <div className={styles.metricValue}>78%</div>
              <div className={styles.metricLabel}>
                International Buyer Share
              </div>
            </div>
            <div className={styles.overviewMetric}>
              <div className={styles.metricValue}>AED 283B</div>
              <div className={styles.metricLabel}>Luxury Transaction Value</div>
            </div>
            <div className={styles.overviewMetric}>
              <div className={styles.metricValue}>94%</div>
              <div className={styles.metricLabel}>Premium Occupancy Rate</div>
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
              <a href="#key-trends">Key Luxury Trends 2024</a>
            </li>
            <li>
              <a href="#smart-homes">Smart Home Revolution</a>
            </li>
            <li>
              <a href="#sustainability">Sustainable Luxury</a>
            </li>
            <li>
              <a href="#emerging-locations">Emerging Premium Locations</a>
            </li>
            <li>
              <a href="#amenities">Premium Amenities</a>
            </li>
            <li>
              <a href="#investment-opportunities">Investment Opportunities</a>
            </li>
            <li>
              <a href="#future-outlook">Future Market Outlook</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Article Content */}
      <main className={styles.articleContent}>
        <section id="key-trends" className={styles.contentSection}>
          <h2>Key Luxury Property Trends Shaping 2024</h2>

          <p>
            Dubai's luxury property market is evolving rapidly, with{" "}
            <strong>new trends emerging</strong>
            that redefine premium living. The convergence of technology,
            sustainability, and wellness is creating unprecedented opportunities
            for discerning investors.
          </p>

          <div className={styles.trendsGrid}>
            {luxuryTrends.map((trend, index) => (
              <div key={index} className={styles.trendCard}>
                <div className={styles.trendImage}>
                  <Image
                    src={trend.image}
                    alt={`${trend.trend} - Luxury property trend 2024`}
                    fill
                    className={styles.image}
                  />
                  <div className={styles.categoryBadge}>{trend.category}</div>
                </div>

                <div className={styles.trendContent}>
                  <h3>{trend.trend}</h3>
                  <p className={styles.trendDescription}>{trend.description}</p>

                  <div className={styles.trendMetrics}>
                    <div className={styles.metric}>
                      <span>Value Impact</span>
                      <strong>{trend.impact}</strong>
                    </div>
                    <div className={styles.metric}>
                      <span>Market Adoption</span>
                      <strong>{trend.adoption}</strong>
                    </div>
                  </div>

                  <div className={styles.trendInsight}>
                    <h4>Why It Matters:</h4>
                    <p>
                      This trend represents a fundamental shift in luxury buyer
                      preferences and is becoming a standard expectation in
                      premium properties.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="smart-homes" className={styles.contentSection}>
          <h2>The Smart Home Revolution in Luxury Properties</h2>

          <p>
            <strong>AI-powered home automation</strong> is no longer a
            luxury—it's an expectation. The integration of smart technology is
            adding significant value to premium properties while enhancing
            convenience and security.
          </p>

          <div className={styles.smartHomeFeatures}>
            <div className={styles.featureCategory}>
              <h4>🏠 Home Automation Systems</h4>
              <ul>
                <li>
                  <strong>Voice Control:</strong> Integrated Alexa/Google Home
                  systems
                </li>
                <li>
                  <strong>Predictive Climate:</strong> AI learning temperature
                  preferences
                </li>
                <li>
                  <strong>Lighting Scenes:</strong> Customizable mood lighting
                  presets
                </li>
                <li>
                  <strong>Automated Window Treatments:</strong> Smart blinds and
                  curtains
                </li>
              </ul>
            </div>

            <div className={styles.featureCategory}>
              <h4>🔒 Advanced Security</h4>
              <ul>
                <li>
                  <strong>Biometric Access:</strong> Fingerprint and facial
                  recognition
                </li>
                <li>
                  <strong>AI Surveillance:</strong> Smart camera systems with
                  analytics
                </li>
                <li>
                  <strong>Remote Monitoring:</strong> 24/7 mobile access and
                  alerts
                </li>
                <li>
                  <strong>Integrated Systems:</strong> Unified security and home
                  automation
                </li>
              </ul>
            </div>

            <div className={styles.featureCategory}>
              <h4>🌿 Wellness Integration</h4>
              <ul>
                <li>
                  <strong>Air Quality Monitoring:</strong> Real-time
                  environmental controls
                </li>
                <li>
                  <strong>Water Purification:</strong> Whole-house filtration
                  systems
                </li>
                <li>
                  <strong>Acoustic Optimization:</strong> Smart soundproofing
                  technology
                </li>
                <li>
                  <strong>Circadian Lighting:</strong> Health-optimized light
                  cycles
                </li>
              </ul>
            </div>
          </div>

          <blockquote className={styles.expertQuote}>
            "Smart home technology is adding 15-25% to property values in the
            luxury segment. Buyers now expect seamless integration of technology
            that enhances both security and lifestyle."
            <cite>- Mohamad Kodmane, Luxury Market Specialist</cite>
          </blockquote>
        </section>

        {/* In-Article CTA */}
        <div className={styles.inArticleCTA}>
          <h3>Invest in Tomorrow's Luxury Today</h3>
          <p>
            Get exclusive access to premium properties featuring the latest
            smart home technology and sustainable designs.
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => setShowConsultation(true)}
          >
            Explore Luxury Opportunities
          </button>
        </div>

        <section id="sustainability" className={styles.contentSection}>
          <h2>Sustainable Luxury: The New Standard</h2>

          <p>
            <strong>Eco-conscious design</strong> is becoming a defining feature
            of luxury properties. High-net-worth buyers are increasingly
            prioritizing sustainability alongside traditional luxury features.
          </p>

          <div className={styles.sustainabilityFeatures}>
            <div className={styles.sustainabilityItem}>
              <h4>🌞 Energy Efficiency</h4>
              <div className={styles.featureDetails}>
                <p>
                  <strong>Solar Integration:</strong> Rooftop solar panels with
                  battery storage
                </p>
                <p>
                  <strong>Smart Grid:</strong> Energy monitoring and
                  optimization systems
                </p>
                <p>
                  <strong>LED Lighting:</strong> 100% energy-efficient lighting
                  solutions
                </p>
                <p>
                  <strong>Insulation:</strong> Advanced thermal and acoustic
                  insulation
                </p>
              </div>
            </div>

            <div className={styles.sustainabilityItem}>
              <h4>💧 Water Conservation</h4>
              <div className={styles.featureDetails}>
                <p>
                  <strong>Greywater Systems:</strong> Recycling for irrigation
                  and toilets
                </p>
                <p>
                  <strong>Smart Irrigation:</strong> Weather-based garden
                  watering
                </p>
                <p>
                  <strong>Low-flow Fixtures:</strong> Water-efficient taps and
                  showers
                </p>
                <p>
                  <strong>Rainwater Harvesting:</strong> Collection and reuse
                  systems
                </p>
              </div>
            </div>

            <div className={styles.sustainabilityItem}>
              <h4>🌱 Eco Materials</h4>
              <div className={styles.featureDetails}>
                <p>
                  <strong>Sustainable Wood:</strong> Certified renewable timber
                  sources
                </p>
                <p>
                  <strong>Low-VOC Paints:</strong> Healthier indoor air quality
                </p>
                <p>
                  <strong>Recycled Materials:</strong> Upcycled and repurposed
                  elements
                </p>
                <p>
                  <strong>Local Sourcing:</strong> Reduced transportation
                  footprint
                </p>
              </div>
            </div>
          </div>

          <div className={styles.sustainabilityImpact}>
            <h4>Financial Impact of Sustainable Features</h4>
            <div className={styles.impactMetrics}>
              <div className={styles.impactMetric}>
                <div className={styles.metricValue}>20-30%</div>
                <div className={styles.metricLabel}>Higher Resale Value</div>
              </div>
              <div className={styles.impactMetric}>
                <div className={styles.metricValue}>40-60%</div>
                <div className={styles.metricLabel}>
                  Reduced Operating Costs
                </div>
              </div>
              <div className={styles.impactMetric}>
                <div className={styles.metricValue}>70%</div>
                <div className={styles.metricLabel}>Faster Sale Time</div>
              </div>
              <div className={styles.impactMetric}>
                <div className={styles.metricValue}>85%</div>
                <div className={styles.metricLabel}>Buyer Preference</div>
              </div>
            </div>
          </div>
        </section>

        <section id="emerging-locations" className={styles.contentSection}>
          <h2>Emerging Premium Locations for 2024</h2>

          <p>
            While established areas continue to perform well,{" "}
            <strong>new luxury hotspots</strong>
            are emerging with exceptional growth potential and unique value
            propositions.
          </p>

          <div className={styles.locationsGrid}>
            {emergingLocations.map((location, index) => (
              <div key={index} className={styles.locationCard}>
                <div className={styles.locationImage}>
                  <Image
                    src={location.image}
                    alt={`${location.location} - Emerging luxury location`}
                    fill
                    className={styles.image}
                  />
                  <div className={styles.growthBadge}>{location.growth}</div>
                </div>

                <div className={styles.locationContent}>
                  <h3>{location.location}</h3>
                  <div className={styles.locationTrend}>{location.trend}</div>

                  <div className={location.premiumFeatures}>
                    <h4>Key Premium Features:</h4>
                    <p>{location.premium}</p>
                  </div>

                  <div className={styles.investmentPotential}>
                    <h4>Investment Potential</h4>
                    <div className={styles.potentialMetrics}>
                      <div className={styles.potentialMetric}>
                        <span>1-Year Projection</span>
                        <strong>18-25%</strong>
                      </div>
                      <div className={styles.potentialMetric}>
                        <span>3-Year Outlook</span>
                        <strong>45-60%</strong>
                      </div>
                      <div className={styles.potentialMetric}>
                        <span>Rental Yield</span>
                        <strong>6-8%</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="amenities" className={styles.contentSection}>
          <h2>Premium Amenities Redefining Luxury Living</h2>

          <p>
            Beyond traditional features, <strong>new amenity categories</strong>{" "}
            are emerging that cater to the evolving lifestyles of high-net-worth
            individuals.
          </p>

          <div className={styles.amenitiesCategories}>
            <div className={styles.amenityCategory}>
              <h4>🎯 Wellness & Health</h4>
              <div className={styles.amenityList}>
                <div className={styles.amenity}>
                  <strong>Private Spas:</strong> In-home treatment rooms with
                  professional equipment
                </div>
                <div className={styles.amenity}>
                  <strong>Meditation Spaces:</strong> Sound-proofed rooms for
                  mindfulness practice
                </div>
                <div className={styles.amenity}>
                  <strong>Home Gyms:</strong> Professional-grade equipment with
                  virtual training
                </div>
                <div className={styles.amenity}>
                  <strong>Salt Rooms:</strong> Therapeutic salt chambers for
                  respiratory health
                </div>
              </div>
            </div>

            <div className={styles.amenityCategory}>
              <h4>🎬 Entertainment</h4>
              <div className={styles.amenityList}>
                <div className={styles.amenity}>
                  <strong>Private Cinemas:</strong> 4K projection with Dolby
                  Atmos sound
                </div>
                <div className={styles.amenity}>
                  <strong>Wine Cellars:</strong> Climate-controlled storage with
                  tasting areas
                </div>
                <div className={styles.amenity}>
                  <strong>Game Rooms:</strong> Professional billiards and
                  entertainment systems
                </div>
                <div className={styles.amenity}>
                  <strong>Outdoor Theaters:</strong> Rooftop screening areas
                  with luxury seating
                </div>
              </div>
            </div>

            <div className={styles.amenityCategory}>
              <h4>🏢 Business & Connectivity</h4>
              <div className={styles.amenityList}>
                <div className={styles.amenity}>
                  <strong>Executive Offices:</strong> Sound-proofed workspaces
                  with video conferencing
                </div>
                <div className={styles.amenity}>
                  <strong>Fiber Internet:</strong> Multi-gigabit dedicated
                  connections
                </div>
                <div className={styles.amenity}>
                  <strong>Meeting Rooms:</strong> Professional spaces for
                  business gatherings
                </div>
                <div className={styles.amenity}>
                  <strong>Virtual Assistant:</strong> AI-powered home management
                  systems
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="investment-opportunities"
          className={styles.contentSection}
        >
          <h2>Luxury Property Investment Opportunities</h2>

          <p>
            The convergence of these trends creates{" "}
            <strong>unique investment opportunities</strong>
            for discerning investors looking to capitalize on Dubai's luxury
            market growth.
          </p>

          <div className={styles.investmentStrategies}>
            <div className={styles.strategy}>
              <h4>🚀 Early Adoption Plays</h4>
              <div className={styles.strategyDetails}>
                <p>
                  <strong>Focus:</strong> Properties with emerging smart home
                  features
                </p>
                <p>
                  <strong>Target ROI:</strong> 25-40% in 18-24 months
                </p>
                <p>
                  <strong>Risk Level:</strong> Medium
                </p>
                <p>
                  <strong>Ideal Locations:</strong> Dubai Creek Harbour,
                  Business Bay
                </p>
              </div>
            </div>

            <div className={styles.strategy}>
              <h4>🌿 Sustainable Premium</h4>
              <div className={styles.strategyDetails}>
                <p>
                  <strong>Focus:</strong> Eco-friendly luxury properties
                </p>
                <p>
                  <strong>Target ROI:</strong> 20-35% in 24-36 months
                </p>
                <p>
                  <strong>Risk Level:</strong> Low-Medium
                </p>
                <p>
                  <strong>Ideal Locations:</strong> Palm Jumeirah, Dubai Hills
                </p>
              </div>
            </div>

            <div className={styles.strategy}>
              <h4>🏠 Wellness-Centric</h4>
              <div className={styles.strategyDetails}>
                <p>
                  <strong>Focus:</strong> Properties with dedicated wellness
                  amenities
                </p>
                <p>
                  <strong>Target ROI:</strong> 30-45% in 12-18 months
                </p>
                <p>
                  <strong>Risk Level:</strong> Medium
                </p>
                <p>
                  <strong>Ideal Locations:</strong> Emirates Hills, Jumeirah
                  Islands
                </p>
              </div>
            </div>
          </div>

          <div className={styles.investmentConsiderations}>
            <h4>Key Investment Considerations</h4>
            <div className={styles.considerations}>
              <div className={styles.consideration}>
                <h5>📊 Market Timing</h5>
                <p>
                  Enter during early development phases for maximum appreciation
                  potential
                </p>
              </div>
              <div className={styles.consideration}>
                <h5>📍 Location Strategy</h5>
                <p>
                  Focus on areas with limited supply and strong infrastructure
                  development
                </p>
              </div>
              <div className={styles.consideration}>
                <h5>💡 Feature Selection</h5>
                <p>
                  Prioritize properties with trending amenities that add
                  long-term value
                </p>
              </div>
              <div className={styles.consideration}>
                <h5>🛡️ Risk Management</h5>
                <p>
                  Diversify across different luxury segments and location types
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="future-outlook" className={styles.contentSection}>
          <h2>Future Outlook: Luxury Market Projections</h2>

          <p>
            Based on current trends and market indicators, Dubai's luxury
            property market is positioned for{" "}
            <strong>continued strong performance</strong> through 2025 and
            beyond.
          </p>

          <div className={styles.futureProjections}>
            <div className={styles.projection}>
              <h4>2024-2025 Market Forecast</h4>
              <div className={styles.projectionData}>
                <div className={styles.projectionItem}>
                  <span>Luxury Price Appreciation</span>
                  <strong>15-20% annually</strong>
                </div>
                <div className={styles.projectionItem}>
                  <span>Rental Yield Stability</span>
                  <strong>6-8% gross yields</strong>
                </div>
                <div className={styles.projectionItem}>
                  <span>International Demand</span>
                  <strong>80-85% buyer share</strong>
                </div>
                <div className={styles.projectionItem}>
                  <span>New Supply Absorption</span>
                  <strong>90-95% rate</strong>
                </div>
              </div>
            </div>

            <div className={styles.projection}>
              <h4>Emerging Trends to Watch</h4>
              <div className={styles.emergingTrends}>
                <div className={styles.trend}>
                  <strong>AI Integration:</strong> Predictive home management
                  systems
                </div>
                <div className={styles.trend}>
                  <strong>Health Tech:</strong> Integrated medical monitoring
                  features
                </div>
                <div className={styles.trend}>
                  <strong>Virtual Reality:</strong> Property viewing and
                  customization
                </div>
                <div className={styles.trend}>
                  <strong>Blockchain:</strong> Secure property transactions and
                  records
                </div>
              </div>
            </div>
          </div>

          <div className={styles.marketDrivers}>
            <h4>Sustained Market Growth Drivers</h4>
            <div className={styles.drivers}>
              <div className={styles.driver}>
                <h5>🌍 Global Wealth Migration</h5>
                <p>
                  Continued influx of high-net-worth individuals seeking Dubai's
                  tax advantages and lifestyle
                </p>
              </div>
              <div className={styles.driver}>
                <h5>🏗️ Infrastructure Development</h5>
                <p>
                  Ongoing government investment in world-class infrastructure
                  and amenities
                </p>
              </div>
              <div className={styles.driver}>
                <h5>📈 Economic Diversification</h5>
                <p>
                  Strong GDP growth across multiple sectors supporting property
                  demand
                </p>
              </div>
              <div className={styles.driver}>
                <h5>🛡️ Political Stability</h5>
                <p>
                  Safe haven status during global uncertainty attracting
                  international capital
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.ctaContent}>
          <h2>Invest in Dubai's Luxury Future</h2>
          <p>
            Position your portfolio at the forefront of luxury property trends
            with exclusive access to premium opportunities featuring the latest
            innovations.
          </p>
          <div className={styles.ctaButtons}>
            <button
              className={styles.primaryCTA}
              onClick={() => setShowConsultation(true)}
            >
              Access Luxury Investment Opportunities
            </button>
            <a
              href="https://wa.me/971501234567?text=Hi,%20I%20want%20to%20invest%20in%20Dubai%20luxury%20properties"
              className={styles.secondaryCTA}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Luxury Market Consultation
            </a>
          </div>
          <div className={styles.guarantee}>
            <strong>
              Exclusive Access • Expert Guidance • Premium Returns
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
            <h3>Explore Luxury Investment Opportunities</h3>
            <p>
              Get exclusive access to premium properties with the latest trends
              and features
            </p>
            <form className={styles.consultationForm}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <select required>
                <option value="">Investment Focus</option>
                <option value="smart-homes">Smart Home Properties</option>
                <option value="sustainable">Sustainable Luxury</option>
                <option value="wellness">Wellness Features</option>
                <option value="waterfront">Waterfront Premium</option>
              </select>
              <select required>
                <option value="">Investment Budget</option>
                <option value="5-10M">AED 5-10 Million</option>
                <option value="10-20M">AED 10-20 Million</option>
                <option value="20M+">AED 20M+</option>
              </select>
              <select required>
                <option value="">Preferred Location</option>
                <option value="palm">Palm Jumeirah</option>
                <option value="creek">Dubai Creek Harbour</option>
                <option value="downtown">Downtown Dubai</option>
                <option value="hills">Dubai Hills Estate</option>
                <option value="any">Any Premium Location</option>
              </select>
              <button type="submit">Get Luxury Portfolio Access</button>
            </form>
          </div>
        </div>
      )}
    </article>
  );
}
