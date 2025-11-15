"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/projects/ProjectHero.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectHero({ data, projectData, isRTL, locale }) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  if (!data || !projectData) return null;

  const heroData = data;
  const projectInfo = projectData.project;

  return (
    <div className={styles.root}>
      {/* HERO */}
      <section className={styles.hero} aria-label="Project hero">
        <div className={styles.bgWrap} aria-hidden="true">
          <Image
            src={heroData.backgroundUrl}
            alt=""
            fill
            priority
            fetchPriority="high"
            placeholder="blur"
            blurDataURL={`${heroData.backgroundUrl}?width=16&quality=20`}
            sizes="100vw"
            className={styles.bgImage}
          />
          <div className={styles.vignette} />
        </div>

        {/* Edge anchor: aligns with white bar container width */}
        <div className={styles.edgeContainer}>
          {/* Overlapping square */}
          <div className={styles.squareWrap}>
            <div className={styles.squareCard}>
              <Image
                src={heroData.squareImageUrl}
                alt={`${getLocalizedText(
                  projectInfo.name,
                  activeLocale
                )} luxury interior`}
                fill
                placeholder="blur"
                blurDataURL={`${heroData.squareImageUrl}?width=16&quality=20`}
                sizes="(max-width:480px) 60vw, (max-width:900px) 45vw, (max-width:1400px) 28vw, 320px"
                className={styles.squareImg}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHITE BAR BELOW HERO */}
      <section className={styles.whiteBar} aria-label="Review summary strip">
        <div className={styles.barContainer}>
          <div className={styles.leftSpacer} aria-hidden="true" />

          <div className={styles.reviews}>
            <div className={styles.googleRow}>
              <span className={styles.gLogo} aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={styles.gSvg}
                >
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </span>
              <div className={styles.gMeta}>
                <div className={styles.gTitle}>
                  <span className={styles.gWord}>
                    {activeIsRTL ? "جوجل" : "Google"}
                  </span>
                  <span className={styles.gReviews}>
                    {activeIsRTL ? "التقييمات" : "Reviews"}
                  </span>
                </div>
                <div className={styles.company}>
                  {getLocalizedText(heroData.companyName, activeLocale)}
                </div>
              </div>
            </div>

            <div className={styles.scoreRow}>
              <span className={styles.score}>
                {heroData?.rating !== undefined
                  ? heroData.rating.toFixed(1)
                  : "N/A"}
              </span>
              <span className={styles.outOf}>/ 5</span>
              <span
                className={styles.stars}
                role="img"
                aria-label={activeIsRTL ? "التقييم من 5" : "Rating out of 5"}
              >
                ★★★★★
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
