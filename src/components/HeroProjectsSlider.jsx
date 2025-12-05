"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import { createMenuData } from "@/data/HeroSlides";
import styles from "@/styles/HeroProjectsSlider.module.css";

const CDN = "https://luxury-real-estate-media.b-cdn.net";

export default function HeroProjectsSlider() {
  const { t, locale } = useLanguage();

  // Build projects array from your menuData
  const projects = useMemo(() => {
    const menu = createMenuData(t, locale, CDN);
    const list = [];

    if (!menu || !menu.categories) return list;

    menu.categories.forEach((category) => {
      category.developers.forEach((developer) => {
        developer.projects.forEach((project) => {
          list.push({
            id: project.id,
            title: project.title,
            slug: project.slug,
            image: project.image,
            description: project.description,
            developer: developer.name,
          });
        });
      });
    });

    return list;
  }, [t, locale]);

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate hero every 7s
  useEffect(() => {
    if (!projects.length) return;

    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [projects.length]);

  if (!projects.length) return null;

  const activeProject = projects[activeIndex];

  const handleDotClick = (index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
  };

  return (
    <>
      {/* Full viewport hero */}
      <section className={styles.hero}>
        {/* Keyed wrapper to restart animations when slide changes */}
        <div key={activeProject.id} className={styles.mediaWrapper}>
          {/* Desktop image */}
          <div className={styles.imageFix}>
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              width={3840}
              height={1600}
              priority
              quality={100}
              className={`${styles.heroImage} ${styles.onlyDesk} ${styles.heroImageAnimated}`}
            />
          </div>

          {/* Mobile image (same src for now, but can be customized later) */}
          <Image
            src={activeProject.image}
            alt={activeProject.title}
            fill
            priority
            quality={100}
            className={`${styles.heroImage} ${styles.onlyMob} ${styles.heroImageAnimated}`}
          />
        </div>

        {/* Bottom gradient with luxury text block */}
        <div className={styles.bottomGradient}>
          <div key={activeProject.id} className={styles.textBlock}>
            {activeProject.developer && (
              <p className={`${styles.kicker} ${styles.fadeInUp}`}>
                {activeProject.developer}
              </p>
            )}

            <h2 className={`${styles.heading} ${styles.fadeInUp}`}>
              {activeProject.title}
            </h2>

            {activeProject.description && (
              <p className={`${styles.subheading} ${styles.fadeInUp}`}>
                {activeProject.description}
              </p>
            )}

            <Link
              href={`/projects/${activeProject.slug}`}
              className={`${styles.cta} ${styles.fadeInUp}`}
            >
              {t("homeSlider.discoverButton")}
            </Link>
          </div>
        </div>
      </section>

      {/* Optional: to push main content below hero if needed */}
      {/* <div className={styles.dummyHeight} /> */}
    </>
  );
}
