// "use client";

// import { useLanguage } from "@/components/LanguageProvider";
// import HeroVideo from "@/components/HeroVideo";
// import MiniCallbackForm from "@/components/MiniCallbackForm";
// import AboutMohamadKodmane from "@/components/AboutMohamadKodmane";
// import FreeServices from "@/components/FreeServices";
// import MissionVision from "@/components/MissionVision";
// import CoreValues from "@/components/CoreValues";
// import Header from "@/components/Header";
// import CallbackForm from "@/components/CallbackForm";
// import OffPlanInvestment from "@/components/OffPlanInvestment";
// import PortfolioInvestment from "@/components/PortfolioInvestment";
// import CapitalGrowth from "@/components/CapitalGrowth";
// import DubaiDemand from "@/components/DubaiDemand";
// import DubaiEconomicGrowth from "@/components/DubaiEconomicGrowth";
// import OurServices from "@/components/OurServices";
// import HeroProjectsSlider from "@/components/HeroProjectsSlider";

// export default function HomePage() {
//   const { locale } = useLanguage();

//   return (
//     <>
//       <HeroProjectsSlider />
//       <Header />
//       <HeroVideo locale={locale} />
//       <CallbackForm locale={locale} />
//       <OffPlanInvestment locale={locale} />
//       <PortfolioInvestment locale={locale} />
//       <CapitalGrowth locale={locale} />
//       <DubaiDemand locale={locale} />
//       <DubaiEconomicGrowth locale={locale} />
//       <OurServices locale={locale} />
//       {/* <MissionVision locale={locale} /> */}
//       {/* <AboutMohamadKodmane locale={locale} /> */}
//       {/* <CoreValues locale={locale} /> */}
//       {/* <FreeServices locale={locale} /> */}
//       {/* <MiniCallbackForm locale={locale} /> */}
//     </>
//   );
// }

"use client";

import { useLanguage } from "@/components/LanguageProvider";
import HeroProjectsSlider from "@/components/HeroProjectsSlider";
import HeroVideo from "@/components/HeroVideo";
import MiniCallbackForm from "@/components/MiniCallbackForm";
import OurServices from "@/components/OurServices";
import ArtOfDetail from "@/components/ArtOfDetail";
import PillarsSection from "@/components/PillarsSection";
import HomeHeroSlider from "@/components/HomeHeroSlider";
import PressReleasesSlider from "@/components/articles/PressReleasesSlider";
// Header should usually be in layout, not here

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

      {/* 2. Short hero video + brief pitch */}
      {/* <HeroVideo locale={locale} /> */}

      {/* 3. Quick consultation CTA */}
      {/* <MiniCallbackForm locale={locale} /> */}

      {/* 4. 3–4 service cards max */}
      {/* <OurServices locale={locale} /> */}
    </>
  );
}
