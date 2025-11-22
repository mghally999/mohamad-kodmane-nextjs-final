"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Swiper
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

  const handleClick = (article) => {
    router.push(`/articles/${article.slug}`);
  };

  if (!articles.length) return null;

  return (
    <section className={styles.sobhaStoriesSec} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.container}>
        {/* Heading */}
        <h2 className={styles.heading}>
          {isRTL ? "البيانات الصحفية" : "PRESS RELEASES"}
        </h2>

        {/* Slider wrapper with arrows */}
        <div className={styles.sliderShell}>
          {/* Arrows */}
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
              delay: 6000,
              disableOnInteraction: false,
            }}
            loop
            centeredSlides
            centeredSlidesBounds
            slidesPerView={"auto"}
            spaceBetween={32}
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
                  <div className={styles.imageWrap}>
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw,
                             (max-width: 1200px) 70vw,
                             900px"
                    />
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.cardText}>
                      <h3 className={styles.cardTitle}>{article.title}</h3>
                    </div>

                    <div className={styles.cardMetaRow}>
                      <div className={styles.emptyMeta} />
                      <div className={styles.publishedMeta}>
                        {/* <span className={styles.publishedLabel}>
                          {isRTL ? "تاريخ النشر" : "Published on"}
                        </span> */}
                        <span className={styles.publishedDate}>
                          {article.publishedOn || article.date || ""}
                        </span>
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
