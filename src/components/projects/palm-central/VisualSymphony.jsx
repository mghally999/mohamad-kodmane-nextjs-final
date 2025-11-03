"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "@/styles/projects/sky-parks/VisualSymphony.module.css";

export default function VisualSymphony({
  title = "A Visual Symphony",
  slides = [
    "https://luxury-real-estate-media.b-cdn.net/aqua-crest/amenity-infinity-pool-01.jpg",
    "https://luxury-real-estate-media.b-cdn.net/aqua-crest/amenity-pool-decks-02.jpg",
    "https://luxury-real-estate-media.b-cdn.net/aqua-crest/exterior-towers-angled-01.jpg",
    "https://luxury-real-estate-media.b-cdn.net/aqua-crest/exterior-podium-hotel-01.jpg",
    "https://luxury-real-estate-media.b-cdn.net/aqua-crest/streetscape-cafe-01.jpg",
    "https://luxury-real-estate-media.b-cdn.net/aqua-crest/skyline-sunset-01.jpg",
    "https://luxury-real-estate-media.b-cdn.net/aqua-crest/interior-living-dining-01.jpg",
  ],
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;

      // Assign navigation elements directly to swiper instance
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <section className={styles.symphonySection} aria-label={`${title} gallery`}>
      <div className={styles.backgroundOrchestra}>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
        <div className={styles.floatingShape}></div>
      </div>

      <div className={styles.symphonyContainer}>
        <div className={styles.titleComposition}>
          <h2 className={styles.mainTitle}>{title}</h2>
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
            ref={nextRef}
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

          {/* Swiper Component */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, A11y, Keyboard, Autoplay]}
            className={styles.creativeSwiper}
            keyboard={{ enabled: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={0}
            speed={800}
            loop={true}
            a11y={{ enabled: true }}
            watchOverflow={true}
            grabCursor={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onInit={(swiper) => {
              // Override navigation elements after init
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {slides.map((src, i) => (
              <SwiperSlide key={i} className={styles.slideArt}>
                <div className={styles.slideCanvas}>
                  <div className={styles.imageSculpture}>
                    <div className={styles.sculptureLayer}></div>
                    <div className={styles.sculptureLayer}></div>
                    <div className={styles.imageCore}>
                      <Image
                        src={src}
                        alt={`Sobha SkyParks view ${i + 1}`}
                        fill
                        priority={i === 0}
                        sizes="(max-width: 640px) 95vw, (max-width: 1024px) 85vw, 1200px"
                        className={styles.artImage}
                      />
                      <div className={styles.imageRadiance}></div>
                    </div>
                  </div>
                  <div className={styles.infoOrbit}>
                    <div className={styles.infoSphere}>
                      <div className={styles.sphereIcon}>✨</div>
                      <div className={styles.sphereContent}>
                        <div className={styles.sphereTitle}>Aqua Crest</div>
                        <div className={styles.sphereSubtitle}>
                          View {i + 1} of {slides.length}
                        </div>
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

        {/* Dots Navigation */}
        <div className={styles.dotsConstellation}>
          {slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.cosmicDot} ${
                i === activeIndex ? styles.cosmicDotActive : ""
              }`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => swiperRef.current?.swiper.slideTo(i)}
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
