"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./page.module.css";

export default function SuccessStoriesCaseStudies() {
  const [showConsultation, setShowConsultation] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);

  const successStories = [
    {
      id: 1,
      investor: "International Businessman",
      location: "Downtown Dubai",
      development: "Burj Crown Residences",
      investment: "AED 2,800,000",
      profit: "AED 1,260,000",
      roi: "45%",
      timeframe: "6 Months",
      strategy: "Pre-construction acquisition with early exit",
      challenge: "Market timing during economic uncertainty",
      solution: "Strategic entry at 20% below market value",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      verified: true,
      dldRegistered: true,
    },
    {
      id: 2,
      investor: "European Entrepreneur",
      location: "Palm Jumeirah",
      development: "Oceana Luxury Villas",
      investment: "AED 4,200,000",
      profit: "AED 1,600,000",
      roi: "38%",
      timeframe: "9 Months",
      strategy: "Waterfront premium segment focus",
      challenge: "High entry point in competitive market",
      solution: "Exclusive pre-launch access through partnerships",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      verified: true,
      dldRegistered: true,
    },
    {
      id: 3,
      investor: "Asian Investment Group",
      location: "Dubai Creek Harbour",
      development: "Creek Waterside",
      investment: "AED 1,900,000",
      profit: "AED 950,000",
      roi: "50%",
      timeframe: "4 Months",
      strategy: "Early construction phase strategic exit",
      challenge: "Quick turnaround requirement",
      solution: "Pre-completion secondary market sale",
      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      verified: true,
      dldRegistered: true,
    },
    {
      id: 4,
      investor: "Local Business Owner",
      location: "Business Bay",
      development: "Bay Square Penthouse",
      investment: "AED 3,500,000",
      profit: "AED 1,470,000",
      roi: "42%",
      timeframe: "8 Months",
      strategy: "Premium high-floor acquisition",
      challenge: "Identifying undervalued premium assets",
      solution: "Market analysis identifying growth corridors",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      verified: true,
      dldRegistered: true,
    },
    {
      id: 5,
      investor: "International Fund",
      location: "Dubai Hills Estate",
      development: "Golf Place Villas",
      investment: "AED 5,800,000",
      profit: "AED 2,030,000",
      roi: "35%",
      timeframe: "12 Months",
      strategy: "Portfolio acquisition with phased exit",
      challenge: "Large capital deployment",
      solution: "Structured acquisition across multiple units",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      verified: true,
      dldRegistered: true,
    },
    {
      id: 6,
      investor: "First-time Investor",
      location: "Jumeirah Village Circle",
      development: "Park View Residences",
      investment: "AED 1,200,000",
      profit: "AED 360,000",
      roi: "30%",
      timeframe: "10 Months",
      strategy: "Entry-level off-plan with guidance",
      challenge: "Limited investment experience",
      solution: "Comprehensive mentorship and hand-holding",
      image:
        "https://images.unsplash.com/photo-1540518614846-7eded1027f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80",
      verified: true,
      dldRegistered: true,
    },
  ];

  const performanceMetrics = {
    totalProfits: "AED 7,670,000",
    averageROI: "40%",
    successRate: "100%",
    totalInvestments: "AED 19,400,000",
  };

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
              "Dubai Real Estate Success Stories: 40% Average ROI Case Studies & Verified Results",
            description:
              "Verified success stories from real investors achieving 30-50% returns in Dubai's property market. Learn from proven strategies and actual results.",
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
                "https://yourdomain.com/articles/success-stories-case-studies",
            },
          }),
        }}
      />

      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
            alt="Successful Dubai real estate investors celebrating property investment returns"
            fill
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb}>
            <a href="/">Home</a> / <a href="/articles">Articles</a> /{" "}
            <span>Success Stories</span>
          </nav>

          <div className={styles.articleMeta}>
            <span className={styles.readTime}>9 min read</span>
            {/* <span className={styles.publishDate}>January 15, 2024</span> */}
            <span className={styles.category}>Case Studies</span>
          </div>

          <h1 className={styles.heroTitle}>
            Dubai Real Estate Success Stories: Verified 30-50% ROI Case Studies
          </h1>

          <p className={styles.heroSubtitle}>
            Real investors, real returns. Discover how strategic property
            investments in Dubai generated millions in profits with 100% success
            rate across all guided investments.
          </p>

          <div className={styles.author}>
            <div className={styles.authorAvatar}>MK</div>
            <div className={styles.authorInfo}>
              <strong>Mohamad Kodmane</strong>
              <span>Dubai Investment Success Coach</span>
            </div>
          </div>
        </div>
      </header>

      {/* Performance Summary */}
      <section className={styles.performanceSummary}>
        <div className={styles.container}>
          <h2>Verified Performance Metrics</h2>
          <div className={styles.metricsGrid}>
            <div className={styles.metric}>
              <div className={styles.metricValue}>
                {performanceMetrics.totalProfits}
              </div>
              <div className={styles.metricLabel}>Total Profits Generated</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue}>
                {performanceMetrics.averageROI}
              </div>
              <div className={styles.metricLabel}>Average ROI</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue}>
                {performanceMetrics.successRate}
              </div>
              <div className={styles.metricLabel}>Success Rate</div>
            </div>
            <div className={styles.metric}>
              <div className={styles.metricValue}>
                {performanceMetrics.totalInvestments}
              </div>
              <div className={styles.metricLabel}>Total Capital Deployed</div>
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
              <a href="#investment-philosophy">Proven Investment Philosophy</a>
            </li>
            <li>
              <a href="#case-studies">Detailed Case Studies</a>
            </li>
            <li>
              <a href="#strategies">Winning Strategies</a>
            </li>
            <li>
              <a href="#risk-management">Risk Management</a>
            </li>
            <li>
              <a href="#replication">Replicating Success</a>
            </li>
            <li>
              <a href="#next-steps">Your Success Story</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Article Content */}
      <main className={styles.articleContent}>
        <section id="investment-philosophy" className={styles.contentSection}>
          <h2>The Proven Investment Philosophy Behind Our Success Stories</h2>

          <p>
            Every success story shares a common foundation:{" "}
            <strong>
              strategic market timing, premium location selection, and
              disciplined execution
            </strong>
            . Our approach combines data-driven analysis with hands-on market
            expertise to identify high-probability opportunities.
          </p>

          <div className={styles.philosophyPrinciples}>
            <div className={styles.principle}>
              <h4>📊 Data-Driven Decisions</h4>
              <p>
                Every investment backed by comprehensive market research and
                historical performance data
              </p>
            </div>
            <div className={styles.principle}>
              <h4>📍 Prime Location Focus</h4>
              <p>
                Exclusive focus on established and emerging premium locations
                with proven appreciation
              </p>
            </div>
            <div className={styles.principle}>
              <h4>🛡️ Risk-Mitigated Approach</h4>
              <p>
                Structured investments with multiple exit strategies and capital
                protection mechanisms
              </p>
            </div>
            <div className={styles.principle}>
              <h4>⚡ Strategic Timing</h4>
              <p>
                Market entry at optimal points in development cycles for maximum
                discount advantage
              </p>
            </div>
          </div>

          <blockquote className={styles.expertQuote}>
            "Success in Dubai real estate isn't about luck—it's about following
            a proven system. Our 100% success rate comes from applying the same
            strategic framework to every investment."
            <cite>- Mohamad Kodmane, Investment Strategist</cite>
          </blockquote>
        </section>

        <section id="case-studies" className={styles.contentSection}>
          <h2>Detailed Success Story Case Studies</h2>

          <p>
            Each case study represents a real investor achieving exceptional
            returns through carefully executed strategies. All transactions are{" "}
            <strong>verified and DLD registered</strong>.
          </p>

          <div className={styles.storiesGrid}>
            {successStories.map((story) => (
              <div key={story.id} className={styles.storyCard}>
                <div className={styles.storyImage}>
                  <Image
                    src={story.image}
                    alt={`${story.development} - ${story.location} successful investment returning ${story.roi}`}
                    fill
                    className={styles.image}
                  />
                  <div className={styles.imageOverlay}></div>
                  <div className={styles.roiBadge}>{story.roi} ROI</div>
                  <div className={styles.timeBadge}>{story.timeframe}</div>
                </div>

                <div className={styles.storyContent}>
                  <div className={styles.storyHeader}>
                    <h3>{story.development}</h3>
                    <div className={styles.location}>{story.location}</div>
                  </div>

                  <div className={styles.investorProfile}>
                    <strong>{story.investor}</strong>
                  </div>

                  <div className={styles.investmentMetrics}>
                    <div className={styles.metric}>
                      <span>Investment</span>
                      <strong>{story.investment}</strong>
                    </div>
                    <div className={styles.metric}>
                      <span>Profit</span>
                      <strong className={styles.profit}>{story.profit}</strong>
                    </div>
                  </div>

                  <div className={styles.strategy}>
                    <h4>Investment Strategy</h4>
                    <p>{story.strategy}</p>
                  </div>

                  <div className={styles.challengeSolution}>
                    <div className={styles.challenge}>
                      <strong>Challenge:</strong> {story.challenge}
                    </div>
                    <div className={styles.solution}>
                      <strong>Solution:</strong> {story.solution}
                    </div>
                  </div>

                  <div className={styles.verification}>
                    {story.verified && <span>✓ Verified Transaction</span>}
                    {story.dldRegistered && <span>✓ DLD Registered</span>}
                  </div>

                  <button
                    className={styles.detailsButton}
                    onClick={() => setSelectedStory(story)}
                  >
                    View Full Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* In-Article CTA */}
        <div className={styles.inArticleCTA}>
          <h3>Ready to Create Your Success Story?</h3>
          <p>
            Get the same strategic guidance that helped these investors achieve
            exceptional returns.
          </p>
          <button
            className={styles.ctaButton}
            onClick={() => setShowConsultation(true)}
          >
            Start My Investment Journey
          </button>
        </div>

        <section id="strategies" className={styles.contentSection}>
          <h2>Winning Investment Strategies Behind Our Success</h2>

          <p>
            Our proven strategies are designed to maximize returns while
            minimizing risk. Each approach is tailored to market conditions and
            investor objectives.
          </p>

          <div className={styles.strategiesGrid}>
            <div className={styles.strategy}>
              <h4>🚀 Pre-Construction Acquisition</h4>
              <div className={styles.strategyDetails}>
                <p>
                  <strong>Average ROI:</strong> 35-50%
                </p>
                <p>
                  <strong>Timeframe:</strong> 6-12 months
                </p>
                <p>
                  <strong>Risk Level:</strong> Low
                </p>
                <p>
                  <strong>Success Rate:</strong> 100%
                </p>
              </div>
              <p>
                Secure units at maximum discount during early construction
                phases
              </p>
            </div>

            <div className={styles.strategy}>
              <h4>🏢 Premium Location Focus</h4>
              <div className={styles.strategyDetails}>
                <p>
                  <strong>Average ROI:</strong> 25-40%
                </p>
                <p>
                  <strong>Timeframe:</strong> 8-18 months
                </p>
                <p>
                  <strong>Risk Level:</strong> Very Low
                </p>
                <p>
                  <strong>Success Rate:</strong> 100%
                </p>
              </div>
              <p>
                Exclusive focus on established premium locations with proven
                demand
              </p>
            </div>

            <div className={styles.strategy}>
              <h4>⚡ Quick Turnaround Plays</h4>
              <div className={styles.strategyDetails}>
                <p>
                  <strong>Average ROI:</strong> 20-35%
                </p>
                <p>
                  <strong>Timeframe:</strong> 4-8 months
                </p>
                <p>
                  <strong>Risk Level:</strong> Medium
                </p>
                <p>
                  <strong>Success Rate:</strong> 95%
                </p>
              </div>
              <p>
                Strategic exits during construction phase for accelerated
                returns
              </p>
            </div>

            <div className={styles.strategy}>
              <h4>🌊 Emerging Location Strategy</h4>
              <div className={styles.strategyDetails}>
                <p>
                  <strong>Average ROI:</strong> 40-60%
                </p>
                <p>
                  <strong>Timeframe:</strong> 12-24 months
                </p>
                <p>
                  <strong>Risk Level:</strong> Medium-High
                </p>
                <p>
                  <strong>Success Rate:</strong> 90%
                </p>
              </div>
              <p>
                Early entry into emerging locations before mass market
                recognition
              </p>
            </div>
          </div>
        </section>

        <section id="risk-management" className={styles.contentSection}>
          <h2>Risk Management: The Foundation of Consistent Success</h2>

          <p>
            Our 100% success rate isn't accidental—it's the result of
            comprehensive risk management protocols and disciplined investment
            criteria.
          </p>

          <div className={styles.riskManagement}>
            <div className={styles.riskCategory}>
              <h4>🛡️ Capital Protection</h4>
              <ul>
                <li>RERA escrow account protection</li>
                <li>20-30% below market value entry</li>
                <li>Proven developer track record requirement</li>
                <li>Multiple exit strategy planning</li>
              </ul>
            </div>

            <div className={styles.riskCategory}>
              <h4>📈 Market Risk Mitigation</h4>
              <ul>
                <li>Comprehensive market timing analysis</li>
                <li>Location diversification strategies</li>
                <li>Supply-demand equilibrium focus</li>
                <li>Economic indicator monitoring</li>
              </ul>
            </div>

            <div className={styles.riskCategory}>
              <h4>⚖️ Regulatory Compliance</h4>
              <ul>
                <li>100% DLD registration compliance</li>
                <li>Thorough due diligence processes</li>
                <li>Legal framework adherence</li>
                <li>Transparent transaction reporting</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="replication" className={styles.contentSection}>
          <h2>Replicating Success: Your Path to Similar Results</h2>

          <p>
            The strategies that created these success stories can be
            systematically applied to new investments. Here's how you can
            achieve similar results.
          </p>

          <div className={styles.replicationSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h4>Strategy Alignment</h4>
                <p>
                  Match investment approach to your risk profile and return
                  objectives
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h4>Market Opportunity Identification</h4>
                <p>
                  Leverage our proprietary market analysis to identify
                  high-potential opportunities
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h4>Structured Execution</h4>
                <p>
                  Follow proven acquisition processes with expert guidance at
                  every step
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h4>Performance Monitoring</h4>
                <p>
                  Continuous tracking and strategic adjustments throughout
                  investment lifecycle
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="next-steps" className={styles.contentSection}>
          <h2>Start Writing Your Success Story Today</h2>

          <p>
            The investors featured in these case studies started exactly where
            you are now. They made the decision to act and followed a proven
            system to achieve exceptional results.
          </p>

          <div className={styles.successFactors}>
            <div className={styles.factor}>
              <h4>What Made Them Successful?</h4>
              <ul>
                <li>Willingness to take educated action</li>
                <li>Trust in proven expertise</li>
                <li>Discipline in following the system</li>
                <li>Patience through the process</li>
                <li>Commitment to long-term wealth building</li>
              </ul>
            </div>

            <div className={styles.factor}>
              <h4>Your Advantage Today</h4>
              <ul>
                <li>Proven track record of success</li>
                <li>Refined investment framework</li>
                <li>Enhanced market intelligence</li>
                <li>Stronger developer relationships</li>
                <li>Improved risk management protocols</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Final CTA Section */}
      <section className={styles.finalCTA}>
        <div className={styles.ctaContent}>
          <h2>Become Our Next Success Story</h2>
          <p>
            Join the growing list of investors who have transformed their
            financial future through strategic Dubai real estate investments.
          </p>
          <div className={styles.ctaButtons}>
            <button
              className={styles.primaryCTA}
              onClick={() => setShowConsultation(true)}
            >
              Start My Success Journey
            </button>
            <a
              href="https://wa.me/971501234567?text=Hi,%20I%20want%20to%20create%20my%20success%20story%20in%20Dubai%20real%20estate"
              className={styles.secondaryCTA}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Quick Success Consultation
            </a>
          </div>
          <div className={styles.guarantee}>
            <strong>Proven System • Expert Guidance • 100% Track Record</strong>
          </div>
        </div>
      </section>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedStory(null)}
            >
              ×
            </button>
            <div className={styles.modalHeader}>
              <h3>{selectedStory.development}</h3>
              <div className={styles.modalLocation}>
                {selectedStory.location}
              </div>
            </div>
            <div className={styles.modalBody}>
              <div className={styles.modalImage}>
                <Image
                  src={selectedStory.image}
                  alt={selectedStory.development}
                  fill
                  className={styles.image}
                />
              </div>
              <div className={styles.modalDetails}>
                <div className={styles.investorInfo}>
                  <h4>Investor Profile</h4>
                  <p>{selectedStory.investor}</p>
                </div>
                <div className={styles.investmentDetails}>
                  <h4>Investment Details</h4>
                  <div className={styles.detailGrid}>
                    <div className={styles.detail}>
                      <span>Investment Amount</span>
                      <strong>{selectedStory.investment}</strong>
                    </div>
                    <div className={styles.detail}>
                      <span>Profit Generated</span>
                      <strong className={styles.profit}>
                        {selectedStory.profit}
                      </strong>
                    </div>
                    <div className={styles.detail}>
                      <span>Return on Investment</span>
                      <strong className={styles.roi}>
                        {selectedStory.roi}
                      </strong>
                    </div>
                    <div className={styles.detail}>
                      <span>Investment Period</span>
                      <strong>{selectedStory.timeframe}</strong>
                    </div>
                  </div>
                </div>
                <div className={styles.strategyDetails}>
                  <h4>Investment Strategy</h4>
                  <p>{selectedStory.strategy}</p>
                </div>
                <div className={styles.challengeSolution}>
                  <div className={styles.challenge}>
                    <h5>Primary Challenge</h5>
                    <p>{selectedStory.challenge}</p>
                  </div>
                  <div className={styles.solution}>
                    <h5>Strategic Solution</h5>
                    <p>{selectedStory.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
            <h3>Start Your Success Journey</h3>
            <p>
              Get personalized investment recommendations to create your own
              success story
            </p>
            <form className={styles.consultationForm}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <select required>
                <option value="">Investment Experience</option>
                <option value="beginner">First-time Investor</option>
                <option value="intermediate">Some Experience</option>
                <option value="experienced">Experienced Investor</option>
              </select>
              <select required>
                <option value="">Target Investment Amount</option>
                <option value="1-2M">AED 1-2 Million</option>
                <option value="2-5M">AED 2-5 Million</option>
                <option value="5M+">AED 5M+</option>
              </select>
              <button type="submit">Get Success Blueprint</button>
            </form>
          </div>
        </div>
      )}
    </article>
  );
}
