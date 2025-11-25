"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/HomeHeroSlider.module.css";

const CDN = "https://luxury-real-estate-media.b-cdn.net";

/* ░░ PROJECT LOGOS FROM /public/project-slider ░░
   Projects that don't have a logo will just show text,
   but spacing stays identical because of the CSS shell.
*/
const PROJECT_LOGOS = {
  skyparks: "/project-slider/skyparks.svg",
  "aqua-crest": "/project-slider/aqua-crest.svg",
  aquamont: "/project-slider/aquamont.svg",
  central: "/project-slider/sobha-central.svg",
  hartland: "/project-slider/sobha-hartland-2.svg",
  "al-sinniyyah-island": "/project-slider/Siniya-island.svg",
  // massar: "/project-slider/Masaar-3.svg",
  // "damac-islands-2": "/project-slider/damac-island.webp",
  // "seahaven-penthouse": "/project-slider/seahaven.svg",
  // riviera-retails & lumenaalta stay text-only for now
};

/* ░░ AMENITY ICONS – INLINE SVGs (100% free, inline) ░░ */
const AmenityIcons = {
  "Infinity Pool": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 16c1.5 1.5 3.5 1.5 5 0s3.5-1.5 5 0 3.5 1.5 5 0" />
      <path d="M3 11c1.5 1.5 3.5 1.5 5 0s3.5-1.5 5 0 3.5 1.5 5 0" />
    </svg>
  ),
  "Sky Gardens": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M5 21V10a3 3 0 0 1 6 0v11" />
      <path d="M13 21V7a3 3 0 0 1 6 0v14" />
      <path d="M3 21h18" />
    </svg>
  ),
  "Burj Khalifa View": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2v20" />
      <path d="M9 21h6" />
      <path d="M10.5 6h3" />
      <path d="M10 10h4" />
      <path d="M9.5 14h5" />
    </svg>
  ),
  "Marina & Yacht": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 18c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" />
      <path d="M4 14h7l2-4 7 4" />
      <path d="M6 10l3-6" />
    </svg>
  ),
  "Waterfront Living": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 12h16V5l-5-3H9L4 5z" />
      <path d="M3 18c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" />
    </svg>
  ),
  "City Skyline View": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="10" width="4" height="10" />
      <rect x="9" y="6" width="4" height="14" />
      <rect x="15" y="3" width="4" height="17" />
      <path d="M2 21h20" />
    </svg>
  ),
  "Luxury Interiors": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 20V8h6v12" />
    </svg>
  ),
  "Premium Amenities": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="8" r="3" />
      <path d="M5 21a7 7 0 0 1 14 0" />
      <path d="M4 4h16" />
    </svg>
  ),
  "Waterfront Promenade": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 4h9l3 4h4v12H4z" />
      <path d="M3 18c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" />
    </svg>
  ),
  "Sky Deck": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="4" y="6" width="16" height="5" rx="2" />
      <path d="M4 17h16" />
    </svg>
  ),
  "Waterfront Community": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="8" cy="7" r="3" />
      <circle cx="18" cy="9" r="3" />
      <path d="M2 21a5 5 0 0 1 10 0" />
      <path d="M13 21a5 5 0 0 1 9 0" />
    </svg>
  ),
  "International Schools": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 5l8-3 8 3-8 3z" />
      <path d="M4 10l8 3 8-3" />
      <path d="M4 15l8 3 8-3" />
    </svg>
  ),
  "Green Spaces": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2v20" />
      <path d="M7 9l5-7 5 7" />
      <path d="M6 22h12" />
    </svg>
  ),
  "Private Beach": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 18c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0" />
      <path d="M6 14s1-4 6-4 6 4 6 4" />
      <path d="M7 6a2 2 0 0 1 4 0c0 2-2 3-2 3s-2-1-2-3z" />
    </svg>
  ),
  "Island Living": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M8 16c1-.7 2-.7 3 0s2 .7 3 0 2-.7 3 0" />
      <path d="M9 12a3 3 0 0 1 6 0" />
    </svg>
  ),
  "Resort Lifestyle": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 20h16" />
      <path d="M5 17a7 7 0 0 1 14 0" />
      <path d="M8 10a4 4 0 0 1 8 0" />
    </svg>
  ),
  "Forest Community": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M7 21V11l3-4 3 4v10" />
      <path d="M4 21v-6l3-4" />
      <path d="M16 21V9l2-3 2 3v12" />
    </svg>
  ),
  "Cycling Track": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="6" cy="16" r="3" />
      <circle cx="18" cy="16" r="3" />
      <path d="M6 13h4l2-3h4" />
      <path d="M10 9l-1-3" />
    </svg>
  ),
  "Family Parks": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="7" cy="8" r="2.5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M2 21a5 5 0 0 1 10 0" />
      <path d="M12 21a5 5 0 0 1 10 0" />
    </svg>
  ),
  "Waterfront Villas": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v9h14v-9" />
      <path d="M4 19c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0" />
    </svg>
  ),
  "Private Marina": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 20c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0" />
      <path d="M6 4l6-2 6 2v8H6z" />
      <path d="M10 8h4" />
    </svg>
  ),
  "Retail Boulevard": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
    </svg>
  ),
  "Dining Destination": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M4 4h16v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M8 2v3M12 2v3M16 2v3" />
    </svg>
  ),
  "Signature Retail": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 10h16" />
    </svg>
  ),
  "Prime Location": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  "Architectural Landmark": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 2 4 22h16z" />
      <path d="M12 7v10" />
    </svg>
  ),
  "Padel Court": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M4 12h16M12 4v16" />
    </svg>
  ),
  "Yoga Deck": (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="7" r="3" />
      <path d="M5 21l3-5 4-2 4 2 3 5" />
    </svg>
  ),
};

const BASE_SLIDES = [
  {
    id: "skyparks",
    category: "Apartments",
    developer: "Sobha Realty",
    name: "Sobha SkyParks",
    location: "Dubai, UAE",
    href: "/projects/apartments/sobha/skyparks",
    imageDesktop: `${CDN}/sky-parks/exterior-night-01.jpg`,
    amenities: ["Infinity Pool", "Sky Gardens", "Burj Khalifa View"],
  },
  {
    id: "aqua-crest",
    category: "Apartments",
    developer: "Sobha Realty",
    name: "Sobha AquaCrest",
    location: "Dubai, UAE",
    href: "/projects/apartments/sobha/aqua-crest",
    imageDesktop: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
    amenities: ["Infinity Pool", "Marina & Yacht", "Waterfront Living"],
  },
  {
    id: "central",
    category: "Apartments",
    developer: "Sobha Realty",
    name: "Sobha Central",
    location: "Sheikh Zayed Road, Dubai",
    href: "/projects/apartments/sobha/central",
    imageDesktop: `${CDN}/sobha-central/exterior-towers-angled-01.jpg`,
    amenities: ["City Skyline View", "Luxury Interiors", "Premium Amenities"],
  },
  {
    id: "aquamont",
    category: "Apartments",
    developer: "Sobha Realty",
    name: "Sobha Aquamont",
    location: "Dubai, UAE",
    href: "/projects/apartments/sobha/aquamont",
    imageDesktop: `${CDN}/aquamont/intro-main.png`,
    amenities: ["Infinity Pool", "Waterfront Promenade", "Sky Deck"],
  },
  {
    id: "hartland",
    category: "Villas",
    developer: "Sobha Realty",
    name: "Sobha Hartland Villas",
    location: "MBR City, Dubai",
    href: "/projects/villas/sobha/hartland",
    imageDesktop: `${CDN}/hartland/hero-bg.jpg`,
    amenities: [
      "Waterfront Community",
      "International Schools",
      "Green Spaces",
    ],
  },
  {
    id: "al-sinniyyah-island",
    category: "Villas",
    developer: "Sobha Realty",
    name: "Al Sinniyyah Island",
    location: "Umm Al Quwain, UAE",
    href: "/projects/villas/sobha/al-sinniyyah-island",
    imageDesktop: `${CDN}/al-sinniyyah-island/hero-bg.jpg`,
    amenities: ["Private Beach", "Island Living", "Resort Lifestyle"],
  },
  {
    id: "massar",
    category: "Villas",
    developer: "Arada",
    name: "Masaar",
    location: "Sharjah, UAE",
    href: "/projects/villas/arada/massar",
    imageDesktop: `${CDN}/massar-3/hero-bg.jpg`,
    amenities: ["Forest Community", "Cycling Track", "Family Parks"],
  },
  {
    id: "damac-islands-2",
    category: "Villas",
    developer: "Damac Properties",
    name: "Damac Islands 2",
    location: "Dubai, UAE",
    href: "/projects/villas/damac/damac-islands-2",
    imageDesktop: `${CDN}/damac-island-2/WhatsApp%20Image%202025-11-19%20at%2013.26.51%20%281%29.jpeg`,
    amenities: ["Island Living", "Waterfront Villas", "Private Marina"],
  },
  {
    id: "riviera-retails",
    category: "Commercial Retail",
    developer: "Azizi Developments",
    name: "Riviera Retails",
    location: "Dubai, UAE",
    href: "/projects/commercial-retail/azizi/riviera-retails",
    imageDesktop: `${CDN}/riviera/hero-bg.jpg`,
    amenities: [
      "Retail Boulevard",
      "Waterfront Promenade",
      "Dining Destination",
    ],
  },
  {
    id: "lumenaalta",
    category: "Commercial Retail",
    developer: "Omniyat",
    name: "Lumena Alta",
    location: "Dubai, UAE",
    href: "/projects/commercial-retail/omniyat/lumenaalta",
    imageDesktop: `${CDN}/lumena-alta/hero-bg.jpg`,
    amenities: ["Signature Retail", "Prime Location", "Architectural Landmark"],
  },
  {
    id: "seahaven-penthouse",
    category: "Penthouses",
    developer: "Sobha Realty",
    name: "Sobha SeaHaven Penthouse",
    location: "Dubai Harbour, Dubai",
    href: "/projects/penthouses/sobha/seahaven-penthouse",
    imageDesktop: `${CDN}/sky-parks/exterior-night-01.jpg`,
    amenities: ["Padel Court", "Infinity Pool", "Yoga Deck"],
  },
];

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function HomeHeroSlider() {
  const [slides, setSlides] = useState(BASE_SLIDES);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const shuffled = shuffleArray(BASE_SLIDES);
    setSlides(shuffled);
    setActiveIndex(0);
  }, []);

  useEffect(() => {
    if (!slides.length || isAnimating) return;
    const timer = setInterval(() => {
      handleSlideChange((activeIndex + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length, activeIndex, isAnimating]);

  const handleSlideChange = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 1100);
  };

  const goTo = (index) => {
    if (!slides.length || isAnimating) return;
    const total = slides.length;
    handleSlideChange(((index % total) + total) % total);
  };

  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  if (!slides.length) return null;

  const activeSlide = slides[activeIndex];
  const projectLogoSrc = PROJECT_LOGOS[activeSlide.id] || null;

  return (
    <section className={styles.heroSection}>
      {/* HEADER */}
      <div className={styles.titleSection}>
        <h2 className={`${styles.heading2} ${styles.linesOnSides}`}>
          EXPLORE OUR LUXURY PROPERTIES IN THE UAE
        </h2>
      </div>

      {/* IMAGE STRIP */}
      <div className={styles.sliderWrapper}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div className={styles.slide} key={slide.id}>
              <Image
                src={slide.imageDesktop}
                alt={slide.name}
                fill
                sizes="100vw"
                priority={slide.id === activeSlide.id}
                className={styles.backgroundImage}
              />
            </div>
          ))}
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={goPrev}
          aria-label="Previous slide"
          disabled={isAnimating}
        >
          <span className={styles.arrowIcon} />
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={goNext}
          aria-label="Next slide"
          disabled={isAnimating}
        >
          <span className={styles.arrowIcon} />
        </button>
      </div>

      {/* BOTTOM BAR */}
      <div className={styles.bottomStrip}>
        <div className={styles.bottomInner}>
          <div className={styles.topRow}>
            {/* LEFT – project logo OR name, but same shell height for consistency */}
            <div className={styles.projectTitleBlock}>
              <div className={styles.projectTitleMainShell}>
                {projectLogoSrc ? (
                  <div className={styles.projectLogoWrapper}>
                    <Image
                      src={projectLogoSrc}
                      alt={activeSlide.name}
                      width={260}
                      height={80}
                      className={styles.projectLogo}
                    />
                  </div>
                ) : (
                  <div className={styles.projectNameMain}>
                    {activeSlide.name}
                  </div>
                )}
              </div>

              <div className={styles.projectSubtitle}>
                {activeSlide.developer} · {activeSlide.category} ·{" "}
                {activeSlide.location}
              </div>
            </div>

            {/* RIGHT – amenities */}
            <div className={styles.amenitiesRow}>
              {activeSlide.amenities.map((label) => (
                <div key={label} className={styles.amenity}>
                  <div className={styles.amenityIcon}>
                    {AmenityIcons[label] || (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M9 13l2 2 4-4" />
                      </svg>
                    )}
                  </div>
                  <span className={styles.amenityLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.buttonRow}>
            <Link href={activeSlide.href} className={styles.exploreButton}>
              EXPLORE ALL
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
