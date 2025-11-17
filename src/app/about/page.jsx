"use client";
import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./about.module.css";
import Image from "next/image";

export default function AboutPage() {
  const { locale, t } = useLanguage();
  const CDN = "https://luxury-real-estate-media.b-cdn.net";
  const isRTL = locale === "ar";

  // Badge translations
  const badgeTranslations = {
    dldCertified: isRTL ? "معتمد من دائرة الأراضي والأملاك" : "DLD Certified",
    premiumPartner: isRTL ? "شريك متميز" : "Premium Partner",
    roi: isRTL ? "15-30% عائد استثماري" : "15-30% ROI",
  };

  return (
    <div
      className={`${styles.page} ${isRTL ? styles.rtl : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>{t("about.hero.badge")}</div>
              <h1>
                {t("about.hero.title")}{" "}
                <span className={styles.highlight}>
                  {t("about.hero.highlight")}
                </span>
              </h1>
              <p className={styles.subtitle}>{t("about.hero.subtitle")}</p>

              {/* CTA */}
              <div className={styles.ctaSection}>
                <a
                  href="https://wa.me/971501234567?text=Hi%20Mohamad,%20I'd%20like%20to%20discuss%20Dubai%20investment%20opportunities"
                  className={styles.primaryBtn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("about.hero.cta.startJourney")}
                </a>
                <a href="#mission" className={styles.secondaryBtn}>
                  {t("about.hero.cta.myPhilosophy")}
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className={styles.photoSection}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/mohamad-kodmane.png"
                  alt={
                    isRTL
                      ? "محمد قضماني - مستشار عقاري في دبي"
                      : "Mohamad Kodmane - Dubai Real Estate Advisor"
                  }
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className={styles.photoBadges}>
                  <div className={styles.photoBadge}>
                    {badgeTranslations.dldCertified}
                  </div>
                  <div className={styles.photoBadge}>
                    {badgeTranslations.premiumPartner}
                  </div>
                  <div className={styles.photoBadge}>
                    {badgeTranslations.roi}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionGrid}>
            <div className={styles.missionContent}>
              <h2>
                {t("about.mission.title")}{" "}
                <span className={styles.highlight}>
                  {t("about.mission.highlight")}
                </span>
              </h2>
              <p>{t("about.mission.paragraph1")}</p>
              <p>{t("about.mission.paragraph2")}</p>
              <p>{t("about.mission.paragraph3")}</p>

              <div className={styles.missionStats}>
                <div className={styles.missionStat}>
                  <strong>100%</strong>
                  <span>{t("about.mission.stats.satisfaction")}</span>
                </div>
                <div className={styles.missionStat}>
                  <strong>AED 2.1M</strong>
                  <span>{t("about.mission.stats.averageROI")}</span>
                </div>
              </div>
            </div>

            <div className={styles.missionImage}>
              <Image
                src={`${CDN}/aquamont/intro-main.png`}
                alt={
                  isRTL
                    ? "محمد قضماني - خبير العقارات في دبي"
                    : "Mohamad Kodmane - Dubai Real Estate Expert"
                }
                fill
                className={styles.image}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesHeader}>
            <h2>
              {t("about.values.title")}{" "}
              <span className={styles.highlight}>
                {t("about.values.highlight")}
              </span>
            </h2>
            <p>{t("about.values.subtitle")}</p>
          </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>{t("about.values.strategic.title")}</h3>
              <p>{t("about.values.strategic.description")}</p>
            </div>

            <div className={styles.valueCard}>
              <h3>{t("about.values.partnership.title")}</h3>
              <p>{t("about.values.partnership.description")}</p>
            </div>

            <div className={styles.valueCard}>
              <h3>{t("about.values.execution.title")}</h3>
              <p>{t("about.values.execution.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={styles.ctaSectionFull}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2>
              {t("about.finalCta.title")}{" "}
              <span className={styles.highlight}>
                {t("about.finalCta.highlight")}
              </span>
            </h2>
            <p>{t("about.finalCta.description")}</p>

            <div className={styles.ctaButtons}>
              <a
                href="https://wa.me/971501234567?text=Hi%20Mohamad,%20I'm%20ready%20to%20invest%20in%20Dubai%20real%20estate"
                className={styles.whatsappBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("about.finalCta.whatsapp")}
              </a>
              <a href="tel:+971501234567" className={styles.callBtn}>
                {t("about.finalCta.directCall")}
              </a>
            </div>

            <div className={styles.trustNote}>
              <strong>{t("about.finalCta.trustNote")}</strong>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
