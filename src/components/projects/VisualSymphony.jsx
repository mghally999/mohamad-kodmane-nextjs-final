"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "@/styles/projects/VisualSymphony.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";

export default function VisualSymphony({ data, isRTL, locale }) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  if (!data) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Apply custom classes to slides for proper styling
  const updateSlideClasses = (swiper) => {
    if (!swiper) return;

    // Remove all custom classes first
    swiper.slides.forEach((slide) => {
      slide.classList.remove(
        styles.slideActive,
        styles.slidePrev,
        styles.slideNext
      );
      slide.classList.add(styles.slide);
    });

    // Get real indices for loop mode
    const realIndex = swiper.realIndex;
    const slides = swiper.slides;
    const totalSlides = slides.length;

    // Add active class to current slide
    if (slides[realIndex]) {
      slides[realIndex].classList.add(styles.slideActive);
    }

    // Add prev/next classes for adjacent slides (proper loop handling)
    const prevIndex = realIndex === 0 ? totalSlides - 1 : realIndex - 1;
    const nextIndex = realIndex === totalSlides - 1 ? 0 : realIndex + 1;

    if (slides[prevIndex]) {
      slides[prevIndex].classList.add(styles.slidePrev);
    }
    if (slides[nextIndex]) {
      slides[nextIndex].classList.add(styles.slideNext);
    }
  };

  useEffect(() => {
    if (mounted && swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;

      // Assign navigation elements
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();

      // Initial class setup
      updateSlideClasses(swiper);
    }
  }, [mounted]);

  if (!mounted) {
    return (
      <section
        className={styles.symphonySection}
        dir={activeIsRTL ? "rtl" : "ltr"}
      >
        <div className={styles.symphonyContainer}>
          <div className={styles.titleComposition}>
            <h2 className={styles.mainTitle}>
              {getLocalizedText(data.title, activeLocale)}
            </h2>
            <div className={styles.titleAnimation}>
              <div className={styles.animationBar}></div>
              <div className={styles.animationDot}></div>
            </div>
          </div>
          <div
            style={{
              height: "700px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              fontSize: "18px",
            }}
          >
            {activeIsRTL ? "جاري تحميل المعرض..." : "Loading gallery..."}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={styles.symphonySection}
      aria-label={`${getLocalizedText(data.title, activeLocale)} gallery`}
      dir={activeIsRTL ? "rtl" : "ltr"}
    >
      <div className={styles.symphonyContainer}>
        <div className={styles.titleComposition}>
          <h2 className={styles.mainTitle}>
            {getLocalizedText(data.title, activeLocale)}
          </h2>
          <div className={styles.titleAnimation}>
            <div className={styles.animationBar}></div>
            <div className={styles.animationDot}></div>
          </div>
        </div>

        <div className={styles.galleryMasterpiece}>
          {/* Navigation Buttons */}
          <button
            ref={prevRef}
            className={`${styles.navSculpture} ${styles.navPrev}`}
            aria-label={activeIsRTL ? "الصورة السابقة" : "Previous image"}
          >
            <div className={styles.navCore}>
              <svg viewBox="0 0 24 24" className={styles.navIcon} aria-hidden>
                <path
                  d="M15.5 19.5 8 12l7.5-7.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          <button
            ref={nextRef}
            className={`${styles.navSculpture} ${styles.navNext}`}
            aria-label={activeIsRTL ? "الصورة التالية" : "Next image"}
          >
            <div className={styles.navCore}>
              <svg viewBox="0 0 24 24" className={styles.navIcon} aria-hidden>
                <path
                  d="M8.5 19.5 16 12 8.5 4.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          {/* Swiper Component */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, A11y, Keyboard, Autoplay]}
            className={styles.creativeSwiper}
            slidesPerView={1.5}
            centeredSlides={true}
            spaceBetween={100}
            speed={800}
            loop={true}
            keyboard={{ enabled: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            a11y={{ enabled: true }}
            watchOverflow={true}
            grabCursor={true}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 1.3,
                spaceBetween: 60,
              },
              1024: {
                slidesPerView: 1.4,
                spaceBetween: 80,
              },
              1200: {
                slidesPerView: 1.5,
                spaceBetween: 100,
              },
            }}
            onInit={(swiper) => {
              // Ensure navigation after init
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
              updateSlideClasses(swiper);
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              updateSlideClasses(swiper);
            }}
            onTransitionStart={(swiper) => {
              updateSlideClasses(swiper);
            }}
          >
            {data.slides.map((src, i) => (
              <SwiperSlide key={i}>
                <div className={styles.frame}>
                  <div className={styles.imageCore}>
                    <Image
                      src={src}
                      alt={`${
                        getLocalizedText(data.projectTag, activeLocale) ||
                        "Project"
                      } ${activeIsRTL ? "منظر" : "view"} ${i + 1}`}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 640px) 95vw, (max-width: 1024px) 85vw, 1200px"
                      className={styles.artImage}
                    />
                  </div>

                  <div className={styles.infoOrbit}>
                    <div className={styles.infoSphere}>
                      <div className={styles.sphereTitle}>
                        {getLocalizedText(data.projectTag, activeLocale) ||
                          "SkyParks"}
                      </div>
                      <div className={styles.sphereSubtitle}>
                        {activeIsRTL
                          ? `منظر ${i + 1} من ${data.slides.length}`
                          : `VIEW ${i + 1} OF ${data.slides.length}`}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress Bar */}
          <div className={styles.progressComposition}>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{
                  width: `${((activeIndex + 1) / data.slides.length) * 100}%`,
                }}
              />
            </div>
            <div className={styles.progressText}>
              <span className={styles.currentSlide}>{activeIndex + 1}</span>
              <span className={styles.slideSeparator}>/</span>
              <span className={styles.totalSlides}>{data.slides.length}</span>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className={styles.dotsConstellation}>
          {data.slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.cosmicDot} ${
                i === activeIndex ? styles.cosmicDotActive : ""
              }`}
              aria-label={
                activeIsRTL
                  ? `انتقل إلى الشريحة ${i + 1}`
                  : `Go to slide ${i + 1}`
              }
              onClick={() => {
                if (swiperRef.current?.swiper) {
                  swiperRef.current.swiper.slideToLoop(i);
                }
              }}
            >
              <div className={styles.dotCore}></div>
              <div className={styles.dotOrbit}></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
