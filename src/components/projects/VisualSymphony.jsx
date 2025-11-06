"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Keyboard } from "swiper/modules"; // no Lazy
import "swiper/css";
import "swiper/css/navigation";
import styles from "@/styles/projects/VisualSymphony.module.css";

export default function VisualSymphony({ data }) {
  if (!data || !Array.isArray(data.slides) || data.slides.length === 0)
    return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const containerRef = useRef(null);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // Mount only when near viewport
  useEffect(() => {
    if (!containerRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setReady(true);
          obs.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // Wire external nav after mount
  useEffect(() => {
    const s = swiperRef.current?.swiper;
    if (!s || !prevRef.current || !nextRef.current) return;
    s.params.navigation.prevEl = prevRef.current;
    s.params.navigation.nextEl = nextRef.current;
    s.navigation.init();
    s.navigation.update();
  }, [ready]);

  return (
    <section
      ref={containerRef}
      className={styles.symphonySection}
      aria-label={`${data.title} gallery`}
    >
      <div className={styles.backgroundOrchestra}>
        <div className={styles.floatingShape} />
        <div className={styles.floatingShape} />
        <div className={styles.floatingShape} />
      </div>

      <div className={styles.symphonyContainer}>
        <div className={styles.titleComposition}>
          <h2 className={styles.mainTitle}>{data.title}</h2>
          <div className={styles.titleAnimation}>
            <div className={styles.animationBar} />
            <div className={styles.animationDot} />
          </div>
        </div>

        <div className={styles.galleryMasterpiece}>
          {/* External nav buttons */}
          <button
            ref={prevRef}
            className={`${styles.navSculpture} ${styles.navPrev}`}
            aria-label="Previous image"
          >
            <div className={styles.navCore}>
              <div className={styles.navGlow} />
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
            <div className={styles.navShadow} />
          </button>

          <button
            ref={nextRef}
            className={`${styles.navSculpture} ${styles.navNext}`}
            aria-label="Next image"
          >
            <div className={styles.navCore}>
              <div className={styles.navGlow} />
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
            <div className={styles.navShadow} />
          </button>

          {/* Mount Swiper only when near viewport */}
          {ready && (
            <Swiper
              ref={swiperRef}
              modules={[Navigation, A11y, Keyboard]}
              className={styles.creativeSwiper}
              a11y={{ enabled: true }}
              keyboard={{ enabled: true }}
              slidesPerView={1}
              centeredSlides
              spaceBetween={0}
              speed={700}
              loop={false}
              watchOverflow
              grabCursor
              // ⛔ No lazy props; Lazy module removed in your version
              onSlideChange={(s) => setActiveIndex(s.realIndex)}
              onInit={(s) => {
                s.params.navigation.prevEl = prevRef.current;
                s.params.navigation.nextEl = nextRef.current;
                s.navigation.init();
                s.navigation.update();
              }}
            >
              {data.slides.map((src, i) => (
                <SwiperSlide key={i} className={styles.slideArt}>
                  <div className={styles.slideCanvas}>
                    <div className={styles.imageSculpture}>
                      <div className={styles.sculptureLayer} />
                      <div className={styles.sculptureLayer} />
                      <div className={styles.imageCore}>
                        <div
                          style={{
                            position: "relative",
                            width: "100%",
                            aspectRatio: "16/9",
                          }}
                        >
                          <Image
                            src={src}
                            alt={`${data.projectTag || "Project"} view ${
                              i + 1
                            }`}
                            fill
                            priority={i === 0}
                            placeholder="empty"
                            sizes="(max-width:640px) 95vw, (max-width:1024px) 85vw, 1200px"
                            className={styles.artImage}
                          />
                        </div>
                        <div className={styles.imageRadiance} />
                      </div>
                    </div>

                    <div className={styles.infoOrbit}>
                      <div className={styles.infoSphere}>
                        <div className={styles.sphereIcon}>✨</div>
                        <div className={styles.sphereContent}>
                          <div className={styles.sphereTitle}>
                            {data.projectTag || "Gallery"}
                          </div>
                          <div className={styles.sphereSubtitle}>
                            View {i + 1} of {data.slides.length}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          {/* Progress */}
          <div className={styles.progressComposition}>
            <div className={styles.progressTrack}>
              <div
                className={styles.progressBar}
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

        {/* Dots */}
        <div className={styles.dotsConstellation}>
          {data.slides.map((_, i) => (
            <button
              key={i}
              className={`${styles.cosmicDot} ${
                i === activeIndex ? styles.cosmicDotActive : ""
              }`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => swiperRef.current?.swiper?.slideTo(i)}
            >
              <div className={styles.dotCore} />
              <div className={styles.dotOrbit} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
