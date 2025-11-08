"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ArticleTemplate.module.css";

/**
 * ============================
 * Standard Article Data Schema
 * ============================
 * article = {
 *   id, slug, title, description, image, readTime, category,
 *   publishDate?: "YYYY-MM-DD",
 *   articleData: {
 *     hero: { title, subtitle, image, readTime, category, publishDate? },
 *     tableOfContents: string[],
 *     content: {
 *       sections: Array<{
 *         id?: string, title?: string, content?: string(HTML),
 *         // Blocks below are optional; renderers are data-driven:
 *         stats?: [{ number, label }],
 *         keyPoints?: string[],
 *         expertQuote?: { text, author },
 *         marketAnalysis?: { title?: string, metrics: [{ title, value, description }] },
 *         taxBenefits?: [{ icon?, title, description }],
 *         caseStudy?: {
 *           title?: string,
 *           comparisons?: [{
 *             location, taxes: string[], totalTax
 *           }]
 *         },
 *         positioningAdvantages?: [{ title, description }],
 *         investmentOpportunities?: [{
 *           title, icon?, details?: { [k: string]: string }
 *         }],
 *         futureProjections?: [{
 *           title?: string, items: string[] | [{ label, value }]
 *         }],
 *         roadmap?: [{ step: string|number, title, description }],
 *         rentalYields?: [{
 *           location, averageYield, premiumYield, averageRent, propertyType, demand, image?
 *         }],
 *         analysis?: [{
 *           title, data?: [{ label, value }], description?
 *         }],
 *         appreciationMetrics?: [{ label, value, trend }],
 *         marketHealth?: [{ label, value, status }],
 *         growthTimeline?: [{ year, title, description, growth }]
 *       }>
 *     }
 *   }
 * }
 */

const slugify = (s = "") => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function Chip({ children, className }) {
  return (
    <span className={`${styles.readTime} ${className || ""}`}>{children}</span>
  );
}

function StatsGrid({ stats }) {
  if (!Array.isArray(stats) || stats.length === 0) return null;
  return (
    <div className={styles.statsGrid}>
      {stats.map((s, i) => (
        <div className={styles.statCard} key={i}>
          <div className={styles.statNumber}>{s.number}</div>
          <div className={styles.statLabel}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function ExpertQuote({ quote }) {
  if (!quote?.text) return null;
  return (
    <blockquote className={styles.expertQuote}>
      <em>“{quote.text}”</em>
      {quote.author && <cite>— {quote.author}</cite>}
    </blockquote>
  );
}

function KeyPoints({ points }) {
  if (!Array.isArray(points) || points.length === 0) return null;
  return (
    <div className={styles.keyPoints}>
      <ul>
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function MarketAnalysis({ block }) {
  const metrics = block?.metrics || [];
  if (metrics.length === 0) return null;
  return (
    <div className={styles.marketAnalysis}>
      {block.title && <h3>{block.title}</h3>}
      <div className={styles.metricsGrid}>
        {metrics.map((m, i) => (
          <div className={styles.metric} key={i}>
            <h4>{m.title}</h4>
            <div className={styles.metricValue}>{m.value}</div>
            <div className={styles.metricDescription}>{m.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TaxBenefits({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <div className={styles.taxBenefits}>
      {items.map((b, i) => (
        <div className={styles.taxBenefit} key={i}>
          <h4>
            {b.icon ? `${b.icon} ` : ""}
            {b.title}
          </h4>
          <p>{b.description}</p>
        </div>
      ))}
    </div>
  );
}

function CaseStudy({ caseStudy }) {
  const comps = caseStudy?.comparisons || [];
  if (comps.length === 0) return null;
  return (
    <div className={styles.caseStudy}>
      {caseStudy.title && <h3>{caseStudy.title}</h3>}
      <div className={styles.comparison}>
        {comps.map((c, i) => (
          <div className={styles.comparisonItem} key={i}>
            <h5>{c.location}</h5>
            <div className={styles.taxBreakdown}>
              {(c.taxes || []).map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>
            <div className={styles.totalTax}>{c.totalTax}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PositioningAdvantages({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <div className={styles.positioningAdvantages}>
      {items.map((a, i) => (
        <div className={styles.advantage} key={i}>
          <h4>
            {a.icon ? `${a.icon} ` : ""}
            {a.title}
          </h4>
          <p>{a.description}</p>
        </div>
      ))}
    </div>
  );
}

function InvestmentOpportunities({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <div className={styles.investmentOpportunities}>
      {items.map((o, i) => (
        <div className={styles.opportunity} key={i}>
          <h4>
            {o.icon ? `${o.icon} ` : ""}
            {o.title}
          </h4>
          {o.details && (
            <div>
              {Object.entries(o.details).map(([k, v]) => (
                <p key={k}>
                  <strong>{k[0].toUpperCase() + k.slice(1)}:</strong> {v}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function FutureProjections({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <div className={styles.futureProjections}>
      {items.map((p, i) => {
        const list = Array.isArray(p.items) ? p.items : [];
        return (
          <div className={styles.projection} key={i}>
            <h4>{p.title || p.year}</h4>
            <ul>
              {list.map((it, idx) =>
                typeof it === "string" ? (
                  <li key={idx}>{it}</li>
                ) : (
                  <li key={idx}>
                    {it.label}: {it.value}
                  </li>
                )
              )}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

function Roadmap({ steps }) {
  if (!Array.isArray(steps) || steps.length === 0) return null;
  return (
    <div className={styles.roadmap}>
      {steps.map((s, i) => (
        <div className={styles.roadmapStep} key={i}>
          <div className={styles.stepNumber}>{s.step}</div>
          <div className={styles.stepContent}>
            <h4>{s.title}</h4>
            <p>{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function RentalYields({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <div className={styles.investmentOpportunities}>
      {items.map((r, i) => (
        <div className={styles.opportunity} key={i} style={{ padding: 0 }}>
          {r.image && (
            <div style={{ position: "relative", width: "100%", height: 160 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.image}
                alt={r.location}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
              />
            </div>
          )}
          <div style={{ padding: 20 }}>
            <h4>{r.location}</h4>
            <p>
              <strong>Avg Yield:</strong> {r.averageYield}
            </p>
            <p>
              <strong>Premium Yield:</strong> {r.premiumYield}
            </p>
            <p>
              <strong>Avg Rent:</strong> {r.averageRent}
            </p>
            <p>
              <strong>Type:</strong> {r.propertyType}
            </p>
            <p>
              <strong>Demand:</strong> {r.demand}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function AnalysisBlocks({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
        gap: 20,
      }}
    >
      {items.map((a, i) => (
        <div className={styles.opportunity} key={i}>
          <h4>{a.title}</h4>
          {(a.data || []).map((d, idx) => (
            <p key={idx}>
              <strong>{d.label}:</strong> {d.value}
            </p>
          ))}
          {a.description && <p style={{ opacity: 0.8 }}>{a.description}</p>}
        </div>
      ))}
    </div>
  );
}

function GrowthTimeline({ items }) {
  if (!Array.isArray(items) || items.length === 0) return null;
  return (
    <div>
      {items.map((g, i) => (
        <div
          key={i}
          style={{ borderBottom: "1px solid #e9ecef", padding: "10px 0" }}
        >
          <h4 style={{ margin: 0 }}>
            {g.year}: {g.title}
          </h4>
          <p style={{ margin: "6px 0" }}>
            {g.description} ({g.growth})
          </p>
        </div>
      ))}
    </div>
  );
}

function Section({ section }) {
  const anchor = section.id || slugify(section.title || "");
  return (
    <section className={styles.contentSection} id={anchor}>
      {section.title && <h2>{section.title}</h2>}
      {section.content && (
        <div dangerouslySetInnerHTML={{ __html: section.content }} />
      )}

      {/* blocks mapped to your standardized classes */}
      <StatsGrid stats={section.stats} />
      <KeyPoints points={section.keyPoints} />
      <ExpertQuote quote={section.expertQuote} />
      {section.marketAnalysis && (
        <MarketAnalysis block={section.marketAnalysis} />
      )}
      <TaxBenefits items={section.taxBenefits} />
      {section.caseStudy && <CaseStudy caseStudy={section.caseStudy} />}
      <PositioningAdvantages
        items={section.positioningAdvantages || section.advantages}
      />
      <InvestmentOpportunities
        items={section.investmentOpportunities || section.opportunities}
      />
      <FutureProjections
        items={section.futureProjections || section.projections}
      />
      <Roadmap steps={section.roadmap} />
      <RentalYields items={section.rentalYields} />
      <AnalysisBlocks items={section.analysis} />
      <GrowthTimeline items={section.growthTimeline} />

      {/* appreciation/health tables (inline, small) */}
      {Array.isArray(section.appreciationMetrics) &&
        section.appreciationMetrics.length > 0 && (
          <div className={styles.marketAnalysis} style={{ marginTop: 20 }}>
            <h3>Appreciation Metrics</h3>
            <div className={styles.metricsGrid}>
              {section.appreciationMetrics.map((m, i) => (
                <div className={styles.metric} key={i}>
                  <h4>{m.label}</h4>
                  <div className={styles.metricValue}>{m.value}</div>
                  <div className={styles.metricDescription}>{m.trend}</div>
                </div>
              ))}
            </div>
          </div>
        )}

      {Array.isArray(section.marketHealth) &&
        section.marketHealth.length > 0 && (
          <div className={styles.marketAnalysis} style={{ marginTop: 20 }}>
            <h3>Market Health</h3>
            <div className={styles.metricsGrid}>
              {section.marketHealth.map((m, i) => (
                <div className={styles.metric} key={i}>
                  <h4>{m.label}</h4>
                  <div className={styles.metricValue}>{m.value}</div>
                  <div className={styles.metricDescription}>{m.status}</div>
                </div>
              ))}
            </div>
          </div>
        )}
    </section>
  );
}

export default function ArticleTemplate({ article }) {
  const [showConsultation, setShowConsultation] = useState(false);
  const { articleData } = article;

  const toc = useMemo(() => articleData?.tableOfContents || [], [articleData]);
  const published =
    article.articleData?.hero?.publishDate ||
    article.publishDate ||
    "2024-01-15";

  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    setShowConsultation(false);
  };

  return (
    <article className={styles.articlePage}>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: articleData.hero.title,
            description: articleData.hero.subtitle,
            image: articleData.hero.image,
            datePublished: published,
            author: { "@type": "Person", name: "Mohamad Kodmane" },
            publisher: {
              "@type": "Organization",
              name: "Dubai Real Estate Experts",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://yourdomain.com/articles/${article.slug}`,
            },
          }),
        }}
      />

      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src={article.image}
            alt={articleData.hero.title}
            fill
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link> / <Link href="/articles">Articles</Link>{" "}
            / <span>{article.category}</span>
          </nav>

          <div className={styles.articleMeta}>
            {articleData.hero.readTime && (
              <Chip>{articleData.hero.readTime}</Chip>
            )}
            {articleData.hero.category && (
              <Chip className={styles.category}>
                {articleData.hero.category}
              </Chip>
            )}
            {published && (
              <Chip className={styles.publishDate}>{published}</Chip>
            )}
          </div>

          <h1 className={styles.heroTitle}>{articleData.hero.title}</h1>
          <p className={styles.heroSubtitle}>{articleData.hero.subtitle}</p>

          <div className={styles.author}>
            <div className={styles.authorAvatar}>MK</div>
            <div className={styles.authorInfo}>
              <strong>Mohamad Kodmane</strong>
              <span>Dubai Real Estate Expert</span>
            </div>
          </div>
        </div>
      </header>

      {/* TOC */}
      {toc.length > 0 && (
        <aside className={styles.tableOfContents}>
          <h2>Table of Contents</h2>
          <nav>
            <ul>
              {toc.map((item, i) => (
                <li key={i}>
                  <a href={`#${slugify(item)}`}>{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}

      {/* Content */}
      <main className={styles.articleContent}>
        {(articleData.content?.sections || []).map((section, idx) => (
          <Section key={section.id || idx} section={section} />
        ))}

        {/* In-Article CTA */}
        <section className={styles.contentSection}>
          <div className={styles.inArticleCTA}>
            <h3>Ready to Take Action?</h3>
            <p>
              Get personalized guidance based on this analysis to maximize your
              returns.
            </p>
            <button
              className={styles.ctaButton}
              onClick={() => setShowConsultation(true)}
            >
              Get Expert Consultation
            </button>
          </div>
        </section>
      </main>

      {/* Final CTA */}
      <section className={styles.finalCTA}>
        <div className={styles.ctaContent}>
          <h2>Ready to Implement These Strategies?</h2>
          <p>
            Take the next step in your investment journey with personalized
            guidance and expert support.
          </p>
          <div className={styles.ctaButtons}>
            <button
              className={styles.primaryCTA}
              onClick={() => setShowConsultation(true)}
            >
              Get Personalized Investment Plan
            </button>
            <a
              href="https://wa.me/971501234567?text=Hi,%20I%20read%20your%20article%20and%20want%20to%20learn%20more"
              className={styles.secondaryCTA}
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Quick Consultation
            </a>
          </div>
          <div className={styles.guarantee}>
            <strong>
              Expert Guidance • Proven Results • Personalized Strategy
            </strong>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showConsultation && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeButton}
              onClick={() => setShowConsultation(false)}
            >
              ×
            </button>
            <h3>Get Expert Guidance</h3>
            <p>
              Receive personalized investment recommendations based on this
              article's insights
            </p>
            <form
              className={styles.consultationForm}
              onSubmit={handleConsultationSubmit}
            >
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <select required>
                <option value="">Investment Interest</option>
                <option value="off-plan">Off-Plan Properties</option>
                <option value="ready">Ready Properties</option>
                <option value="rental">Rental Investments</option>
                <option value="luxury">Luxury Properties</option>
              </select>
              <select required>
                <option value="">Investment Budget</option>
                <option value="1-2M">AED 1-2 Million</option>
                <option value="2-5M">AED 2-5 Million</option>
                <option value="5M+">AED 5M+</option>
              </select>
              <button type="submit">Get Expert Advice</button>
            </form>
          </div>
        </div>
      )}
    </article>
  );
}
