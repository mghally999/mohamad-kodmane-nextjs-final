"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/HomeHeroSlider.module.css";
import { useLanguage } from "./LanguageProvider";

const CDN = "https://luxury-real-estate-media.b-cdn.net";

/* ░░ PROJECT LOGOS FROM /public/project-slider ░░ */
const PROJECT_LOGOS = {
  skyparks: "/project-slider/skyparks.svg",
  "aqua-crest": "/project-slider/aqua-crest.svg",
  aquamont: "/project-slider/aquamont.svg",
  central: "/project-slider/sobha-central.svg",
  hartland: "/project-slider/sobha-hartland-2.svg",
  "al-sinniyyah-island": "/project-slider/Siniya-island.svg",
};

/* ░░ AMENITY LABEL FALLBACKS (ENGLISH) ░░ */
const AMENITY_LABELS_EN = {
  infinityPool: "Infinity Pool",
  skyGardens: "Sky Gardens",
  burjKhalifaView: "Burj Khalifa View",
  marinaYacht: "Marina & Yacht",
  waterfrontLiving: "Waterfront Living",
  citySkylineView: "City Skyline View",
  luxuryInteriors: "Luxury Interiors",
  premiumAmenities: "Premium Amenities",
  waterfrontPromenade: "Waterfront Promenade",
  skyDeck: "Sky Deck",
  waterfrontCommunity: "Waterfront Community",
  internationalSchools: "International Schools",
  greenSpaces: "Green Spaces",
  privateBeach: "Private Beach",
  islandLiving: "Island Living",
  resortLifestyle: "Resort Lifestyle",
  forestCommunity: "Forest Community",
  cyclingTrack: "Cycling Track",
  familyParks: "Family Parks",
  waterfrontVillas: "Waterfront Villas",
  privateMarina: "Private Marina",
  retailBoulevard: "Retail Boulevard",
  diningDestination: "Dining Destination",
  signatureRetail: "Signature Retail",
  primeLocation: "Prime Location",
  architecturalLandmark: "Architectural Landmark",
  padelCourt: "Padel Court",
  yogaDeck: "Yoga Deck",
};

/* ░░ AMENITY ICONS – NEW SIMPLE LUXURY-LINE STYLE ░░ */
const AmenityIcons = {
  infinityPool: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M3 15c1.5 1.4 3.5 1.4 5 0l2-2 2 2c1.5 1.4 3.5 1.4 5 0" />
    </svg>
  ),
  skyGardens: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M7 20V9a3 3 0 0 1 6 0v11" />
      <path d="M5 20h10" />
      <path d="M15 6l2-2 2 2" />
    </svg>
  ),
  burjKhalifaView: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M12 3v18" />
      <path d="M9 21h6" />
      <path d="M11 7h2M10.5 11h3M10 15h4" />
    </svg>
  ),
  marinaYacht: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M4 16h8l2-4 6 3" />
      <path d="M3 18c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0" />
    </svg>
  ),
  waterfrontLiving: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <rect x="4" y="4" width="10" height="8" rx="1" />
      <path d="M3 18c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0" />
    </svg>
  ),
  citySkylineView: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <rect x="3" y="11" width="3" height="8" />
      <rect x="8" y="8" width="3" height="11" />
      <rect x="13" y="5" width="3" height="14" />
      <path d="M2 21h20" />
    </svg>
  ),
  luxuryInteriors: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M9 19V9h6v10" />
    </svg>
  ),
  premiumAmenities: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <circle cx="12" cy="8" r="3" />
      <path d="M6 20a6 6 0 0 1 12 0" />
      <path d="M4 4h16" />
    </svg>
  ),
  waterfrontPromenade: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <rect x="4" y="5" width="10" height="10" rx="1" />
      <path d="M3 18c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0" />
    </svg>
  ),
  skyDeck: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <rect x="5" y="7" width="14" height="4" rx="1" />
      <path d="M5 17h14" />
    </svg>
  ),
  waterfrontCommunity: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <circle cx="8" cy="7" r="2.2" />
      <circle cx="16" cy="8" r="2.2" />
      <path d="M3 19a5 5 0 0 1 10 0" />
      <path d="M11 19a5 5 0 0 1 10 0" />
    </svg>
  ),
  internationalSchools: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M4 6 12 3l8 3-8 3z" />
      <path d="M12 6v12" />
      <path d="M6 21h12" />
    </svg>
  ),
  greenSpaces: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M12 3v16" />
      <path d="M8 11 12 4l4 7" />
      <path d="M6 21h12" />
    </svg>
  ),
  privateBeach: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M3 18c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0" />
      <path d="M7 7a2 2 0 0 1 4 0c0 2-2 3-2 3s-2-1-2-3z" />
    </svg>
  ),
  islandLiving: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M7 16c1-.7 2-.7 3 0s2 .7 3 0 2-.7 3 0" />
    </svg>
  ),
  resortLifestyle: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M4 20h16" />
      <path d="M6 17a6 6 0 0 1 12 0" />
      <path d="M9 10a3 3 0 0 1 6 0" />
    </svg>
  ),
  forestCommunity: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M7 20V11l3-4 3 4v9" />
      <path d="M4 20v-6l3-4" />
      <path d="M16 20V9l2-3 2 3v11" />
    </svg>
  ),
  cyclingTrack: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <circle cx="6" cy="16" r="2.5" />
      <circle cx="18" cy="16" r="2.5" />
      <path d="M6 13h4l2-3h4" />
    </svg>
  ),
  familyParks: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <circle cx="7" cy="8" r="2" />
      <circle cx="17" cy="9" r="2" />
      <path d="M2 20a5 5 0 0 1 10 0" />
      <path d="M12 20a5 5 0 0 1 10 0" />
    </svg>
  ),
  waterfrontVillas: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M3 11 12 4l9 7" />
      <path d="M5 11v7h14v-7" />
    </svg>
  ),
  privateMarina: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M6 5 12 3l6 2v7H6z" />
      <path d="M4 18c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0" />
    </svg>
  ),
  retailBoulevard: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <rect x="4" y="6" width="16" height="10" rx="2" />
      <path d="M4 11h16" />
    </svg>
  ),
  diningDestination: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M5 5h14v9a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z" />
      <path d="M9 3v3M12 3v3M15 3v3" />
    </svg>
  ),
  signatureRetail: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M5 10h14" />
    </svg>
  ),
  primeLocation: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  architecturalLandmark: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M12 3 5 21h14z" />
      <path d="M12 8v8" />
    </svg>
  ),
  padelCourt: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <rect x="5" y="5" width="14" height="14" rx="2" />
      <path d="M5 12h14M12 5v14" />
    </svg>
  ),
  yogaDeck: (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <circle cx="12" cy="7" r="2.2" />
      <path d="M5 20l3-4 4-2 4 2 3 4" />
    </svg>
  ),
};

/* ░░ SLIDES CONFIG – AMENITIES USE KEYS ░░ */
const BASE_SLIDES = (t) => [
  {
    id: "skyparks",
    category: t?.("homeSlider.projects.skyparks.category") || "Apartments",
    developer: t?.("developers.sobhaRealty") || "Sobha Realty",
    name: t?.("projectNames.sobhaSkyParks") || "Sobha SkyParks",
    location: t?.("homeSlider.projects.skyparks.location") || "Dubai, UAE",
    href: "/projects/apartments/sobha/skyparks",
    imageDesktop: `${CDN}/sky-parks/exterior-night-01.jpg`,
    amenities: ["infinityPool", "skyGardens", "burjKhalifaView"],
  },
  {
    id: "aqua-crest",
    category: t?.("homeSlider.projects.aquaCrest.category") || "Apartments",
    developer: t?.("developers.sobhaRealty") || "Sobha Realty",
    name: t?.("projectNames.sobhaAquaCrest") || "Sobha AquaCrest",
    location: t?.("homeSlider.projects.aquaCrest.location") || "Dubai, UAE",
    href: "/projects/apartments/sobha/aqua-crest",
    imageDesktop: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
    amenities: ["infinityPool", "marinaYacht", "waterfrontLiving"],
  },
  {
    id: "central",
    category: t?.("homeSlider.projects.central.category") || "Apartments",
    developer: t?.("developers.sobhaRealty") || "Sobha Realty",
    name: t?.("projectNames.sobhaCentral") || "Sobha Central",
    location:
      t?.("homeSlider.projects.central.location") || "Sheikh Zayed Road, Dubai",
    href: "/projects/apartments/sobha/central",
    imageDesktop: `${CDN}/sobha-central/exterior-towers-angled-01.jpg`,
    amenities: ["citySkylineView", "luxuryInteriors", "premiumAmenities"],
  },
  {
    id: "aquamont",
    category: t?.("homeSlider.projects.aquamont.category") || "Apartments",
    developer: t?.("developers.sobhaRealty") || "Sobha Realty",
    name: t?.("projectNames.sobhaAquamont") || "Sobha Aquamont",
    location: t?.("homeSlider.projects.aquamont.location") || "Dubai, UAE",
    href: "/projects/apartments/sobha/aquamont",
    imageDesktop: `${CDN}/aquamont/intro-main.png`,
    amenities: ["infinityPool", "waterfrontPromenade", "skyDeck"],
  },
  {
    id: "hartland",
    category: t?.("homeSlider.projects.hartland.category") || "Villas",
    developer: t?.("developers.sobhaRealty") || "Sobha Realty",
    name: t?.("projectNames.sobhaHartland2Villas") || "Sobha Hartland Villas",
    location: t?.("homeSlider.projects.hartland.location") || "MBR City, Dubai",
    href: "/projects/villas/sobha/hartland",
    imageDesktop: `${CDN}/hartland/hero-bg.jpg`,
    amenities: ["waterfrontCommunity", "internationalSchools", "greenSpaces"],
  },
  {
    id: "al-sinniyyah-island",
    category: t?.("homeSlider.projects.alSinniyyahIsland.category") || "Villas",
    developer: t?.("developers.sobhaRealty") || "Sobha Realty",
    name: t?.("projectNames.sobhaAlSinniyyahIsland") || "Al Sinniyyah Island",
    location:
      t?.("homeSlider.projects.alSinniyyahIsland.location") ||
      "Umm Al Quwain, UAE",
    href: "/projects/villas/sobha/al-sinniyyah-island",
    imageDesktop: `${CDN}/al-sinniyyah-island/hero-bg.jpg`,
    amenities: ["privateBeach", "islandLiving", "resortLifestyle"],
  },
  {
    id: "massar",
    category: t?.("homeSlider.projects.massar.category") || "Villas",
    developer: t?.("developers.arada") || "Arada",
    name: t?.("projectNames.aradaMassar3") || "Masaar",
    location: t?.("homeSlider.projects.massar.location") || "Sharjah, UAE",
    href: "/projects/villas/arada/massar",
    imageDesktop: `${CDN}/massar-3/hero-bg.jpg`,
    amenities: ["forestCommunity", "cyclingTrack", "familyParks"],
  },
  {
    id: "damac-islands-2",
    category: t?.("homeSlider.projects.damacIslands2.category") || "Villas",
    developer: t?.("developers.damacProperties") || "DAMAC Properties",
    name: t?.("projectNames.damacIslands2") || "Damac Islands 2",
    location: t?.("homeSlider.projects.damacIslands2.location") || "Dubai, UAE",
    href: "/projects/villas/damac/damac-islands-2",
    imageDesktop: `${CDN}/damac-island-2/WhatsApp%20Image%202025-11-19%20at%2013.26.51%20%281%29.jpeg`,
    amenities: ["islandLiving", "waterfrontVillas", "privateMarina"],
  },
  {
    id: "riviera-retails",
    category:
      t?.("homeSlider.projects.rivieraRetails.category") || "Commercial Retail",
    developer: t?.("developers.aziziDevelopments") || "Azizi Developments",
    name: t?.("projectNames.aziziRivieraRetails") || "Riviera Retails",
    location:
      t?.("homeSlider.projects.rivieraRetails.location") || "Dubai, UAE",
    href: "/projects/commercial-retail/azizi/riviera-retails",
    imageDesktop: `${CDN}/riviera/hero-bg.jpg`,
    amenities: ["retailBoulevard", "waterfrontPromenade", "diningDestination"],
  },
  {
    id: "lumenaalta",
    category:
      t?.("homeSlider.projects.lumenaAlta.category") || "Commercial Retail",
    developer: t?.("developers.omniyat") || "Omniyat",
    name: t?.("projectNames.luminaAlta") || "Lumena Alta",
    location: t?.("homeSlider.projects.lumenaAlta.location") || "Dubai, UAE",
    href: "/projects/commercial-retail/omniyat/lumenaalta",
    imageDesktop: `${CDN}/lumena-alta/hero-bg.jpg`,
    amenities: ["signatureRetail", "primeLocation", "architecturalLandmark"],
  },
  {
    id: "seahaven-penthouse",
    category:
      t?.("homeSlider.projects.seaHavenPenthouse.category") || "Penthouses",
    developer: t?.("developers.sobhaRealty") || "Sobha Realty",
    name:
      t?.("projectNames.sobhaSeaHavenPenthouse") || "Sobha SeaHaven Penthouse",
    location:
      t?.("homeSlider.projects.seaHavenPenthouse.location") ||
      "Dubai Harbour, Dubai",
    href: "/projects/penthouses/sobha/seahaven-penthouse",
    imageDesktop: `${CDN}/sky-parks/exterior-night-01.jpg`,
    amenities: ["padelCourt", "infinityPool", "yogaDeck"],
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

export default function HomeHeroSlider(props) {
  const langCtx = useLanguage();
  const t = props?.t || langCtx?.t;
  const locale = props?.locale || langCtx?.locale || "en";

  const [slides, setSlides] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const isRTL = locale === "ar";

  useEffect(() => {
    if (!t) return;
    const slidesData = BASE_SLIDES(t);
    const shuffled = shuffleArray(slidesData);
    setSlides(shuffled);
    setActiveIndex(0);
  }, [t, locale]);

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

  // Slider movement: opposite direction in Arabic
  const sliderOffset = (isRTL ? 1 : -1) * activeIndex * 100;

  return (
    <section
      className={`${styles.heroSection} ${isRTL ? styles.rtl : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* HEADER */}
      <div className={styles.titleSection}>
        <h2 className={`${styles.heading2} ${styles.linesOnSides}`}>
          {t?.("homeSlider.mainTitle") ||
            "EXPLORE OUR LUXURY PROPERTIES IN THE UAE"}
        </h2>
      </div>

      {/* IMAGE STRIP */}
      <div className={styles.sliderWrapper}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(${sliderOffset}%)` }}
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
          aria-label={
            t?.("homeSlider.ariaLabels.previousSlide") || "Previous slide"
          }
          disabled={isAnimating}
        >
          <span className={styles.arrowIcon} />
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={goNext}
          aria-label={t?.("homeSlider.ariaLabels.nextSlide") || "Next slide"}
          disabled={isAnimating}
        >
          <span className={styles.arrowIcon} />
        </button>
      </div>

      {/* BOTTOM STRIP – SMALLER + TIGHTER */}
      <div className={styles.bottomStrip}>
        <div className={styles.bottomInner}>
          <div className={styles.topRow}>
            {/* LEFT – project logo OR name */}
            <div className={styles.projectTitleBlock}>
              <div className={styles.projectTitleMainShell}>
                {projectLogoSrc ? (
                  <div className={styles.projectLogoWrapper}>
                    <Image
                      src={projectLogoSrc}
                      alt={activeSlide.name}
                      width={220}
                      height={60}
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

            {/* RIGHT – amenities inline (icon next to word) */}
            <div className={styles.amenitiesRow}>
              {activeSlide.amenities.map((amenityKey) => {
                const label =
                  t?.(`homeSlider.amenities.${amenityKey}`) ||
                  AMENITY_LABELS_EN[amenityKey] ||
                  amenityKey;
                const icon = AmenityIcons[amenityKey];

                return (
                  <div key={amenityKey} className={styles.amenity}>
                    <span className={styles.amenityIcon}>
                      {icon || (
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
                    </span>
                    <span className={styles.amenityLabel}>{label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.buttonRow}>
            <Link href={activeSlide.href} className={styles.exploreButton}>
              {t?.("homeSlider.exploreButton") || "EXPLORE ALL"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
