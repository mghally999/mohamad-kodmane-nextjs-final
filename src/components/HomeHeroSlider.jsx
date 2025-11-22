"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/HomeHeroSlider.module.css";

const CDN = "https://luxury-real-estate-media.b-cdn.net";

const BASE_SLIDES = [
  // Apartments – Sobha
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

  // Villas – Sobha
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

  // Villas – Arada
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

  // Villas – Damac
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

  // Commercial / Retail
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

  // Penthouse
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

  // Shuffle + random starting slide on first mount
  useEffect(() => {
    const shuffled = shuffleArray(BASE_SLIDES);
    const randomStart = Math.floor(Math.random() * shuffled.length);
    setSlides(shuffled);
    setActiveIndex(randomStart);
  }, []);

  // Auto-slide
  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  if (!slides.length) return null;

  const activeSlide = slides[activeIndex];

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % slides.length || 0);

  const goPrev = () =>
    setActiveIndex((prev) =>
      slides.length ? (prev - 1 + slides.length) % slides.length : 0
    );

  return (
    <section className={styles.heroSection}>
      {/* IMAGE SLIDER */}
      <div
        className={styles.sliderWrapper}
        style={{ position: "relative", overflow: "hidden" }} // 🔥 ONLY CHANGE
      >
        <Image
          key={activeSlide.id}
          src={activeSlide.imageDesktop}
          alt={activeSlide.name}
          fill
          priority
          sizes="100vw"
          className={styles.backgroundImage}
        />

        {/* Arrows */}
        <button
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={goPrev}
          aria-label="Previous slide"
        >
          <span className={styles.arrowIcon} />
        </button>
        <button
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={goNext}
          aria-label="Next slide"
        >
          <span className={styles.arrowIcon} />
        </button>
      </div>

      {/* BOTTOM INFO STRIP – PRISTINE STYLE */}
      <div className={styles.bottomStrip}>
        <div className={styles.bottomInner}>
          <div className={styles.topRow}>
            <div className={styles.projectTitleBlock}>
              <div className={styles.projectNameMain}>{activeSlide.name}</div>
              <div className={styles.projectSubtitle}>
                {activeSlide.category} · {activeSlide.location}
              </div>
            </div>

            <div className={styles.amenitiesRow}>
              {activeSlide.amenities.map((label) => (
                <div key={label} className={styles.amenity}>
                  <span className={styles.amenityLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.buttonRow}>
            <Link href={activeSlide.href} className={styles.exploreButton}>
              Explore All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
