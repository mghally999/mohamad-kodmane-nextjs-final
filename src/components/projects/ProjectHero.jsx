"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/projects/ProjectHero.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";

function isVideo(url = "") {
  return /\.(mp4|webm|ogg)$/i.test(url);
}

export default function ProjectHero({ data, projectData, isRTL, locale }) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  if (!data || !projectData) return null;

  const heroData = data;
  const projectInfo = projectData.project;

  const projectName = getLocalizedText(projectInfo.name, activeLocale);
  const companyName = getLocalizedText(heroData.companyName, activeLocale);

  const bgUrl = heroData.backgroundUrl;
  const isBgVideo = isVideo(bgUrl);

  return (
    <div className={styles.root}>
      {/* HERO */}
      <section className={styles.hero} aria-label="Project hero">
        <div className={styles.heroBgWrap} aria-hidden="true">
          {isBgVideo ? (
            <video
              className={styles.heroVideo}
              src={bgUrl}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
          ) : (
            <Image
              src={bgUrl}
              alt=""
              fill
              priority
              fetchPriority="high"
              placeholder="blur"
              blurDataURL={`${bgUrl}?width=16&quality=20`}
              sizes="100vw"
              className={styles.heroImage}
            />
          )}

          <div className={styles.vignette} />
        </div>
      </section>

      {/* LOGO + INFO */}
      <section
        className={styles.secondWrapper}
        aria-label="Project logo and reviews"
      >
        <div className={styles.innerRow}>
          <div className={styles.detLogoContent}>
            <div className={styles.logoCard}>
              <Image
                src={heroData.squareImageUrl}
                alt={`${projectName} logo`}
                width={220}
                height={80}
                className={styles.logoImg}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
