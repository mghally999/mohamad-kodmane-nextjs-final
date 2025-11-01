import MiniCallbackForm from "@/components/MiniCallbackForm";
import AmenitiesShowcase from "@/components/projects/al-sinniyyah-island/AmenitiesShowcase";
import CityProximity from "@/components/projects/al-sinniyyah-island/CityProximity";
import FloorPlanShowcase from "@/components/projects/al-sinniyyah-island/FloorPlanShowcase";
import MapDirections from "@/components/projects/al-sinniyyah-island/MapDirections";
import ProjectHero from "@/components/projects/al-sinniyyah-island/ProjectHero";
import ProjectIntro from "@/components/projects/al-sinniyyah-island/ProjectIntro";
import ProjectsFooter from "@/components/projects/al-sinniyyah-island/ProjectsFooter";
import VisualSymphony from "@/components/projects/al-sinniyyah-island/VisualSymphony";

export default function ProjectPage() {
  return (
    <main>
      <ProjectHero />
      <ProjectIntro />
      <VisualSymphony />
      <FloorPlanShowcase />
      <AmenitiesShowcase />
      <MapDirections />
      <CityProximity />
      <MiniCallbackForm />
      <ProjectsFooter />
    </main>
  );
}
