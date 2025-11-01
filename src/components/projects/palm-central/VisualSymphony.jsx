"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Keyboard, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import styles from "@/styles/projects/sky-parks/VisualSymphony.module.css";

/**
 * REVOLUTIONARY Visual Symphony - 3D Perspective Gallery
 * Creative, unique, and 100% working with Unsplash images
 */
export default function VisualSymphony({
  title = "A Visual Symphony",
  slides = [
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-ffff5c57bebe?auto=format&fit=crop&w=1200&q=80",
  ],
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const ids = useMemo(
    () => ({
      prev: "vs-prev-" + Math.random().toString(36).slice(2),
      next: "vs-next-" + Math.random().toString(36).slice(2),
    }),
    []
  );

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleDotClick = (index) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
  };

  return (
    <section className={styles.symphonySection} aria-label={`${title} gallery`}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundOrchestra}>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
      </div>

      <div className={styles.symphonyContainer}>
        {/* Creative Title with Animation */}
        <div className={styles.titleComposition}>
          <h2 className={styles.mainTitle}>{title}</h2>
          <div className={styles.titleAnimation}>
            <div className={styles.animationBar}></div>
            <div className={styles.animationDot}></div>
          </div>
        </div>

        {/* Revolutionary Gallery Container */}
        <div className={styles.galleryMasterpiece}>
          {/* 3D Navigation Buttons */}
          <button
            id={ids.prev}
            className={`${styles.navSculpture} ${styles.navPrev}`}
            aria-label="Previous image"
          >
            <div className={styles.navCore}>
              <div className={styles.navGlow}></div>
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
            <div className={styles.navShadow}></div>
          </button>

          <button
            id={ids.next}
            className={`${styles.navSculpture} ${styles.navNext}`}
            aria-label="Next image"
          >
            <div className={styles.navCore}>
              <div className={styles.navGlow}></div>
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
            <div className={styles.navShadow}></div>
          </button>

          {/* Creative Swiper with 3D Effects */}
          <Swiper
            modules={[Navigation, A11y, Keyboard, EffectCreative]}
            className={styles.creativeSwiper}
            keyboard={{ enabled: true }}
            navigation={{
              prevEl: `#${ids.prev}`,
              nextEl: `#${ids.next}`,
            }}
            effect="creative"
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ["-120%", 0, -500],
              },
              next: {
                shadow: true,
                translate: ["120%", 0, -500],
              },
            }}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={0}
            speed={1000}
            loop={true}
            a11y={{ enabled: true }}
            watchOverflow={true}
            grabCursor={true}
            onSlideChange={handleSlideChange}
            onSwiper={setSwiperInstance}
          >
            {slides.map((src, i) => (
              <SwiperSlide key={i} className={styles.slideArt}>
                <div className={styles.slideCanvas}>
                  {/* Main Image with Creative Frame */}
                  <div className={styles.imageSculpture}>
                    <div className={styles.sculptureLayer}></div>
                    <div className={styles.sculptureLayer}></div>
                    <div className={styles.imageCore}>
                      <Image
                        src={src}
                        alt={`Sobha SkyParks luxury view ${i + 1}`}
                        fill
                        priority={i === 0}
                        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 85vw, 1200px"
                        className={styles.artImage}
                      />
                      <div className={styles.imageRadiance}></div>
                    </div>
                  </div>

                  {/* Floating Info Card */}
                  <div className={styles.infoOrbit}>
                    <div className={styles.infoSphere}>
                      <div className={styles.sphereIcon}>✨</div>
                      <div className={styles.sphereContent}>
                        <div className={styles.sphereTitle}>SkyParks</div>
                        <div className={styles.sphereSubtitle}>
                          View {i + 1}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Progress Indicator */}
          <div className={styles.progressComposition}>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressBar}
                style={{
                  width: `${((activeIndex + 1) / slides.length) * 100}%`,
                }}
              ></div>
            </div>
            <div className={styles.progressText}>
              <span className={styles.currentSlide}>{activeIndex + 1}</span>
              <span className={styles.slideSeparator}>/</span>
              <span className={styles.totalSlides}>{slides.length}</span>
            </div>
          </div>
        </div>

        {/* Interactive Dots */}
        <div className={styles.dotsConstellation}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.cosmicDot} ${
                i === activeIndex ? styles.cosmicDotActive : ""
              }`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => handleDotClick(i)}
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
