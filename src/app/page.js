"use client";

import { useLanguage } from "@/components/LanguageProvider";
import HeroProjectsSlider from "@/components/HeroProjectsSlider";
import ArtOfDetail from "@/components/ArtOfDetail";
import PillarsSection from "@/components/PillarsSection";
import HomeHeroSlider from "@/components/HomeHeroSlider";
import PressReleasesSlider from "@/components/articles/PressReleasesSlider";

export default function HomePage() {
  const { locale } = useLanguage();

  return (
    <>
      {/* 1. Sobha-style full hero */}
      <HeroProjectsSlider />

      <ArtOfDetail />

      <PillarsSection />

      <HomeHeroSlider />

      <PressReleasesSlider />
    </>
  );
}
