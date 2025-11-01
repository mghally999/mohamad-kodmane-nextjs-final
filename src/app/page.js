import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsList from "../components/ProjectsList";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeroVideo from "@/components/HeroVideo";
import OffPlan from "@/components/OffPlan";
import DubaiOpportunity from "@/components/DubaiOpportunity";
import DubaiDemand from "@/components/DubaiDemand";
import SuccessStories from "@/components/SuccessStories";
import RentalReturns from "@/components/RentalReturns";
import MiniCallbackForm from "@/components/MiniCallbackForm";
import AboutMohamadKodmane from "@/components/AboutMohamadKodmane";
import FreeServices from "@/components/FreeServices";
import MissionVision from "@/components/MissionVision";
import CoreValues from "@/components/CoreValues";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroVideo />
      <MissionVision />
      <AboutMohamadKodmane />
      <CoreValues />
      <FreeServices />
      <MiniCallbackForm />
      {/* <OffPlan /> */}
      {/* <DubaiOpportunity /> */}
      {/* <DubaiDemand /> */}
      {/* <SuccessStories /> */}
      {/* <RentalReturns /> */}
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <ProjectsList /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}
