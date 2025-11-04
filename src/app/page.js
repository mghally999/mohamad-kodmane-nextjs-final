import HeroVideo from "@/components/HeroVideo";
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
    </>
  );
}
