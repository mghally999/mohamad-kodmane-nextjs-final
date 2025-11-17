"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/ArticleTemplate.module.css";
import { useLanguage } from "@/components/LanguageProvider";
import articlesData from "@/data/articles/articles-data";

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

function ExpertQuote({ quote, isRTL }) {
  if (!quote?.text) return null;
  return (
    <blockquote className={styles.expertQuote}>
      <em>"{quote.text}"</em>
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

function ProcessSteps({ steps }) {
  if (!Array.isArray(steps) || steps.length === 0) return null;
  return (
    <div className={styles.roadmap}>
      {steps.map((s, i) => (
        <div className={styles.roadmapStep} key={i}>
          <div className={styles.stepNumber}>{s.number}</div>
          <div className={styles.stepContent}>
            <h4>{s.title}</h4>
            <p>{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// UPDATED COMPONENTS WITH LOCALIZATION
function CaseStudies({ caseStudies, isRTL }) {
  if (!Array.isArray(caseStudies) || caseStudies.length === 0) return null;

  const labels = {
    investment: isRTL ? "الاستثمار" : "Investment",
    downPayment: isRTL ? "الدفعة الأولى" : "Down Payment",
    salePrice: isRTL ? "سعر البيع" : "Sale Price",
    profit: isRTL ? "الربح" : "Profit",
    roi: isRTL ? "العائد على الاستثمار" : "ROI",
    timeframe: isRTL ? "الفترة الزمنية" : "Timeframe",
  };

  return (
    <div className={styles.caseStudies}>
      {caseStudies.map((cs, i) => (
        <div className={styles.caseStudyItem} key={i}>
          <h4>{cs.title}</h4>
          <div className={styles.caseStudyDetails}>
            <p>
              <strong>{labels.investment}:</strong> {cs.investment}
            </p>
            <p>
              <strong>{labels.downPayment}:</strong> {cs.downPayment}
            </p>
            <p>
              <strong>{labels.salePrice}:</strong> {cs.salePrice}
            </p>
            <p>
              <strong>{labels.profit}:</strong> {cs.profit}
            </p>
            <p>
              <strong>{labels.roi}:</strong> {cs.roi}
            </p>
            <p>
              <strong>{labels.timeframe}:</strong> {cs.timeframe}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function Risks({ risks, isRTL }) {
  if (!Array.isArray(risks) || risks.length === 0) return null;

  const labels = {
    risk: isRTL ? "المخاطر" : "Risk",
    mitigation: isRTL ? "التخفيف" : "Mitigation",
  };

  return (
    <div className={styles.risks}>
      {risks.map((r, i) => (
        <div className={styles.riskItem} key={i}>
          <h4>{r.title}</h4>
          <p>
            <strong>{labels.risk}:</strong> {r.risk}
          </p>
          <p>
            <strong>{labels.mitigation}:</strong> {r.mitigation}
          </p>
        </div>
      ))}
    </div>
  );
}

function Developments({ developments, isRTL }) {
  if (!Array.isArray(developments) || developments.length === 0) return null;

  const labels = {
    developer: isRTL ? "المطور" : "Developer",
    price: isRTL ? "السعر" : "Price",
    roi: isRTL ? "العائد المتوقع" : "ROI",
    completion: isRTL ? "موعد التسليم" : "Completion",
  };

  return (
    <div className={styles.developments}>
      {developments.map((d, i) => (
        <div className={styles.developmentItem} key={i}>
          <h4>{d.name}</h4>
          <p>
            <strong>{labels.developer}:</strong> {d.developer}
          </p>
          <p>
            <strong>{labels.price}:</strong> {d.price}
          </p>
          <p>
            <strong>{labels.roi}:</strong> {d.roi}
          </p>
          <p>
            <strong>{labels.completion}:</strong> {d.completion}
          </p>
        </div>
      ))}
    </div>
  );
}

function Strategies({ strategies }) {
  if (!Array.isArray(strategies) || strategies.length === 0) return null;
  return (
    <div className={styles.strategies}>
      {strategies.map((s, i) => (
        <div className={styles.strategyItem} key={i}>
          <h4>{s.title}</h4>
          <p>{s.description}</p>
        </div>
      ))}
    </div>
  );
}

function Section({ section, isRTL }) {
  const anchor = section.id || slugify(section.title || "");
  return (
    <section className={styles.contentSection} id={anchor}>
      {section.title && <h2>{section.title}</h2>}
      {section.content && (
        <div dangerouslySetInnerHTML={{ __html: section.content }} />
      )}

      {/* Render all possible data blocks */}
      <StatsGrid stats={section.stats} />
      <KeyPoints points={section.keyPoints} />
      <ExpertQuote quote={section.expertQuote} isRTL={isRTL} />
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
      <ProcessSteps steps={section.processSteps} />
      <CaseStudies caseStudies={section.caseStudies} isRTL={isRTL} />
      <Risks risks={section.risks} isRTL={isRTL} />
      <Developments developments={section.developments} isRTL={isRTL} />
      <Strategies strategies={section.strategies} />

      {/* appreciation/health tables */}
      {Array.isArray(section.appreciationMetrics) &&
        section.appreciationMetrics.length > 0 && (
          <div className={styles.marketAnalysis} style={{ marginTop: 20 }}>
            <h3>{isRTL ? "مقاييس التقدير" : "Appreciation Metrics"}</h3>
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
            <h3>{isRTL ? "صحة السوق" : "Market Health"}</h3>
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

export default function ArticleTemplate({ article, slug }) {
  const { locale } = useLanguage();
  const [showConsultation, setShowConsultation] = useState(false);

  // Get localized article data
  const localizedArticle = useMemo(() => {
    return articlesData.getArticleBySlug(slug, locale) || article;
  }, [slug, locale, article]);

  const { articleData } = localizedArticle;
  const isRTL = locale === "ar";

  const toc = useMemo(() => articleData?.tableOfContents || [], [articleData]);
  const published =
    articleData?.hero?.publishDate ||
    localizedArticle.publishDate ||
    "2024-01-15";

  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    setShowConsultation(false);
  };

  return (
    <article className={styles.articlePage} dir={isRTL ? "rtl" : "ltr"}>
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
              "@id": `https://yourdomain.com/articles/${localizedArticle.slug}`,
            },
          }),
        }}
      />

      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src={articleData.hero.image || localizedArticle.image}
            alt={articleData.hero.title}
            fill
            className={styles.heroImage}
            priority
          />
        </div>

        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb}>
            <Link href="/">{isRTL ? "الرئيسية" : "Home"}</Link> /{" "}
            <Link href="/articles">{isRTL ? "المقالات" : "Articles"}</Link> /{" "}
            <span>{localizedArticle.category}</span>
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
            <div className={styles.authorAvatar}>{isRTL ? "م.ق" : "MK"}</div>
            <div className={styles.authorInfo}>
              <strong>{isRTL ? "محمد قضماني" : "Mohamad Kodmane"}</strong>
              <span>
                {isRTL ? "خبير العقارات في دبي" : "Dubai Real Estate Expert"}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* TOC */}
      {toc.length > 0 && (
        <aside className={styles.tableOfContents}>
          <h2>{isRTL ? "جدول المحتويات" : "Table of Contents"}</h2>
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
          <Section key={section.id || idx} section={section} isRTL={isRTL} />
        ))}

        {/* In-Article CTA */}
        <section className={styles.contentSection}>
          <div className={styles.inArticleCTA}>
            <h3>{isRTL ? "مستعد لاتخاذ الإجراء؟" : "Ready to Take Action?"}</h3>
            <p>
              {isRTL
                ? "احصل على إرشادات مخصصة بناءً على هذا التحليل لتعظيم عوائدك."
                : "Get personalized guidance based on this analysis to maximize your returns."}
            </p>
            <button
              className={styles.ctaButton}
              onClick={() => setShowConsultation(true)}
            >
              {isRTL ? "احصل على استشارة الخبراء" : "Get Expert Consultation"}
            </button>
          </div>
        </section>
      </main>

      {/* Final CTA */}
      <section className={styles.finalCTA}>
        <div className={styles.ctaContent}>
          <h2>
            {isRTL
              ? "مستعد لتنفيذ هذه الاستراتيجيات؟"
              : "Ready to Implement These Strategies?"}
          </h2>
          <p>
            {isRTL
              ? "اتخذ الخطوة التالية في رحلتك الاستثمارية مع إرشادات مخصصة ودعم الخبراء."
              : "Take the next step in your investment journey with personalized guidance and expert support."}
          </p>
          <div className={styles.ctaButtons}>
            <button
              className={styles.primaryCTA}
              onClick={() => setShowConsultation(true)}
            >
              {isRTL
                ? "احصل على خطة استثمار مخصصة"
                : "Get Personalized Investment Plan"}
            </button>
            <a
              href="https://wa.me/971501234567?text=Hi,%20I%20read%20your%20article%20and%20want%20to%20learn%20more"
              className={styles.secondaryCTA}
              target="_blank"
              rel="noopener noreferrer"
            >
              {isRTL ? "💬 استشارة سريعة" : "💬 Quick Consultation"}
            </a>
          </div>
          <div className={styles.guarantee}>
            <strong>
              {isRTL
                ? "إرشادات الخبراء • نتائج مثبتة • استراتيجية مخصصة"
                : "Expert Guidance • Proven Results • Personalized Strategy"}
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
            <h3>
              {isRTL ? "احصل على إرشادات الخبراء" : "Get Expert Guidance"}
            </h3>
            <p>
              {isRTL
                ? "تلقي توصيات استثمارية مخصصة بناءً على رؤى هذه المقالة"
                : "Receive personalized investment recommendations based on this article's insights"}
            </p>
            <form
              className={styles.consultationForm}
              onSubmit={handleConsultationSubmit}
            >
              <input
                type="text"
                placeholder={isRTL ? "الاسم الكامل" : "Full Name"}
                required
              />
              <input
                type="email"
                placeholder={isRTL ? "البريد الإلكتروني" : "Email Address"}
                required
              />
              <input
                type="tel"
                placeholder={isRTL ? "رقم الهاتف" : "Phone Number"}
                required
              />
              <select required>
                <option value="">
                  {isRTL ? "مجال الاهتمام الاستثماري" : "Investment Interest"}
                </option>
                <option value="off-plan">
                  {isRTL ? "العقارات على المخطط" : "Off-Plan Properties"}
                </option>
                <option value="ready">
                  {isRTL ? "العقارات الجاهزة" : "Ready Properties"}
                </option>
                <option value="rental">
                  {isRTL ? "الاستثمارات الإيجارية" : "Rental Investments"}
                </option>
                <option value="luxury">
                  {isRTL ? "العقارات الفاخرة" : "Luxury Properties"}
                </option>
              </select>
              <select required>
                <option value="">
                  {isRTL ? "ميزانية الاستثمار" : "Investment Budget"}
                </option>
                <option value="1-2M">
                  AED 1-2 {isRTL ? "مليون" : "Million"}
                </option>
                <option value="2-5M">
                  AED 2-5 {isRTL ? "مليون" : "Million"}
                </option>
                <option value="5M+">AED 5M+</option>
              </select>
              <button type="submit">
                {isRTL ? "احصل على نصيحة الخبراء" : "Get Expert Advice"}
              </button>
            </form>
          </div>
        </div>
      )}
    </article>
  );
}
