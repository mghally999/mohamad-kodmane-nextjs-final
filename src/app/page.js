"use client";

import { useLanguage } from "@/components/LanguageProvider";
import HeroVideo from "@/components/HeroVideo";
import MiniCallbackForm from "@/components/MiniCallbackForm";
import AboutMohamadKodmane from "@/components/AboutMohamadKodmane";
import FreeServices from "@/components/FreeServices";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";
import Header from "@/components/Header";
import CallbackForm from "@/components/CallbackForm";
import OffPlanInvestment from "@/components/OffPlanInvestment";
import PortfolioInvestment from "@/components/PortfolioInvestment";
import CapitalGrowth from "@/components/CapitalGrowth";
import DubaiDemand from "@/components/DubaiDemand";
import DubaiEconomicGrowth from "@/components/DubaiEconomicGrowth";
import OurServices from "@/components/OurServices";

export default function HomePage() {
  const { locale } = useLanguage();

  return (
    <>
      <Header />
      <HeroVideo locale={locale} />
      <CallbackForm locale={locale} />
      <OffPlanInvestment locale={locale} />
      <PortfolioInvestment locale={locale} />
      <CapitalGrowth locale={locale} />
      <DubaiDemand locale={locale} />
      <DubaiEconomicGrowth locale={locale} />
      <OurServices locale={locale} />
      {/* <MissionVision locale={locale} /> */}
      {/* <AboutMohamadKodmane locale={locale} /> */}
      {/* <CoreValues locale={locale} /> */}
      {/* <FreeServices locale={locale} /> */}
      {/* <MiniCallbackForm locale={locale} /> */}
    </>
  );
}
