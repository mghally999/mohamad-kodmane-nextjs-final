"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useLanguage } from "@/components/LanguageProvider";
import { createMenuData } from "@/data/HeroSlides";
import styles from "@/styles/HeroProjectsSlider.module.css";

// 👇 Replace with your real CDN base URL
const CDN = "https://luxury-real-estate-media.b-cdn.net";

export default function HeroProjectsSlider() {
  const { t, locale } = useLanguage();

  // Build projects array from your menuData
  const projects = useMemo(() => {
    const menu = createMenuData(t, locale, CDN);

    const list = [];
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

  // Auto-rotate – exactly like a hero slider
  useEffect(() => {
    if (!projects.length) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 7000);

    return () => clearInterval(id);
  }, [projects.length]);

  if (!projects.length) return null;

  const activeProject = projects[activeIndex];

  return (
    <>
      {/* FIXED hero behind the header, full viewport */}
      <section className={styles.hero}>
        {/* Background image wrapper */}
        <div className={styles.mediaWrapper}>
          {/* Desktop image (you can later swap to a dedicated mobile src) */}
          <Image
            src={activeProject.image}
            alt={activeProject.title}
            fill
            priority
            quality={100}
            className={`${styles.heroImage} ${styles.onlyDesk}`}
          />

          {/* Mobile – currently same src, but separated for future override */}
          <Image
            src={activeProject.image}
            alt={activeProject.title}
            fill
            priority
            quality={100}
            className={`${styles.heroImage} ${styles.onlyMob}`}
          />
        </div>

        {/* Bottom gradient overlay (Sobha style) */}
        <div className={styles.bottomGradient}>
          <div className={styles.textBlock}>
            {activeProject.developer && (
              <p className={styles.kicker}>{activeProject.developer}</p>
            )}

            <h2 className={styles.heading}>{activeProject.title}</h2>

            {activeProject.description && (
              <p className={styles.subheading}>{activeProject.description}</p>
            )}

            <Link
              href={`/projects/${activeProject.slug}`}
              className={styles.cta}
            >
              DISCOVER
            </Link>
          </div>
        </div>

        {/* Slider dots at bottom-right */}
        <div className={styles.dots}>
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={`${styles.dot} ${
                index === activeIndex ? styles.dotActive : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${project.title}`}
            />
          ))}
        </div>
      </section>

      {/* This creates scroll height like Sobha's .dummy-height */}
      {/* <div className={styles.dummyHeight} /> */}
    </>
  );
}
