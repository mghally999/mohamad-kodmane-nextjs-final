import MiniCallbackForm from "@/components/MiniCallbackForm";
import AmenitiesShowcase from "@/components/projects/riviera-retails/AmenitiesShowcase";
import CityProximity from "@/components/projects/riviera-retails/CityProximity";
import FloorPlanShowcase from "@/components/projects/riviera-retails/FloorPlanShowcase";
import MapDirections from "@/components/projects/riviera-retails/MapDirections";
import ProjectHero from "@/components/projects/riviera-retails/ProjectHero";
import ProjectIntro from "@/components/projects/riviera-retails/ProjectIntro";
import ProjectsFooter from "@/components/projects/riviera-retails/ProjectsFooter";
import VisualSymphony from "@/components/projects/riviera-retails/VisualSymphony";

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
