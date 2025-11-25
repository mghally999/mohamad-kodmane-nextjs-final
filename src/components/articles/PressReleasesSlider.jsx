"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import styles from "@/styles/PressReleasesSlider.module.css";
import articlesData from "@/data/articles/articles-data";
import { useLanguage } from "@/components/LanguageProvider";

export default function PressReleasesSlider() {
  const router = useRouter();
  const { locale } = useLanguage();
  const isRTL = locale === "ar";

  const articles = articlesData.getAllArticles(locale);
  if (!articles.length) return null;

  const handleClick = (article) => {
    router.push(`/articles/${article.slug}`);
  };

  return (
    <section
      className={styles.sobhaStoriesSec}
      dir={isRTL ? "rtl" : "ltr"}
      aria-labelledby="press-releases-heading"
    >
      <div className={styles.container}>
        {/* Heading */}
        <h2 id="press-releases-heading" className={styles.heading}>
          {isRTL ? "البيانات الصحفية" : "PRESS RELEASES"}
        </h2>

        <div className={styles.sliderShell}>
          {/* arrows */}
          <button
            className={`${styles.navArrow} ${styles.navPrev} stories-prev`}
            aria-label={isRTL ? "السابق" : "Previous press release"}
          >
            <span className={styles.arrowIcon} />
          </button>

          <button
            className={`${styles.navArrow} ${styles.navNext} stories-next`}
            aria-label={isRTL ? "التالي" : "Next press release"}
          >
            <span className={styles.arrowIcon} />
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".stories-prev",
              nextEl: ".stories-next",
            }}
            autoplay={{
              delay: 8000, // slower, more “luxury”
              disableOnInteraction: false,
            }}
            loop
            centeredSlides
            centeredSlidesBounds
            slidesPerView={"auto"}
            spaceBetween={32}
            speed={900} // slow slide transition like Sobha
            className={styles.storiesSlider}
          >
            {articles.map((article) => (
              <SwiperSlide
                key={article.id || article.slug}
                className={styles.slide}
              >
                <article
                  className={styles.card}
                  onClick={() => handleClick(article)}
                >
                  <div className={styles.cardBox}>
                    {/* IMAGE */}
                    <div className={styles.imageWrap}>
                      {/* desktop */}
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className={`${styles.image} ${styles.onlyDesk}`}
                        sizes="(max-width: 768px) 0px,
                               (max-width: 1200px) 70vw,
                               900px"
                      />
                      {/* mobile */}
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className={`${styles.image} ${styles.onlyMob}`}
                        sizes="100vw"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className={styles.cardContent}>
                      <div className={styles.storyTitle}>
                        <h3 className={styles.cardTitle}>{article.title}</h3>
                      </div>

                      <div className={styles.storyPublish}>
                        <div className={styles.datePlace}>
                          {/* <span className={styles.publishedLabel}>
                            {isRTL ? "تاريخ النشر" : "Published on"}
                          </span> */}
                          <span className={styles.publishedDate}>
                            {article.publishedOn || article.date || ""}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* VIEW ALL */}
        <div className={styles.viewAllRow}>
          <Link href="/articles" className={styles.viewAllBtn}>
            {isRTL ? "عرض الكل" : "VIEW ALL"}
          </Link>
        </div>
      </div>
    </section>
  );
}
