import HeroVideo from "@/components/HeroVideo";
import MiniCallbackForm from "@/components/MiniCallbackForm";
import AboutMohamadKodmane from "@/components/AboutMohamadKodmane";
import FreeServices from "@/components/FreeServices";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";
import Header from "@/components/Header";
import CallbackForm from "@/components/CallbackForm";
import OffPlanInvestment from "@/components/OffPlanInvestment";
import DubaiDemand from "@/components/DubaiDemand";
import DubaiEconomicGrowth from "@/components/DubaiEconomicGrowth";
import PortfolioInvestment from "@/components/PortfolioInvestment";
import CapitalGrowth from "@/components/CapitalGrowth";
import OurServices from "@/components/OurServices";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroVideo /> {/* Welcome & Company Intro */}
      <CallbackForm /> {/* Services + Contact */}
      <OffPlanInvestment /> {/* What is off-plan investment? */}
      <PortfolioInvestment /> {/* What is building portfolios? */}
      <CapitalGrowth /> {/* Examples of capital growth - DXB Interact */}
      <DubaiDemand /> {/* Unprecedented demand */}
      <DubaiEconomicGrowth /> {/* Economic growth + Why invest in Dubai */}
      <OurServices />
      <MiniCallbackForm /> {/* Services + Contact */}
      {/* <MissionVision /> */}
      {/* <AboutMohamadKodmane /> */}
      {/* <CoreValues /> */}
      {/* <FreeServices /> */}
      {/* <MiniCallbackForm /> */}
    </>
  );
}
