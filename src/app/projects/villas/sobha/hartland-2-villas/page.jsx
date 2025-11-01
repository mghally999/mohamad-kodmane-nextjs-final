import MiniCallbackForm from "@/components/MiniCallbackForm";
import AmenitiesShowcase from "@/components/projects/hartland-2-villas/AmenitiesShowcase";
import CityProximity from "@/components/projects/hartland-2-villas/CityProximity";
import FloorPlanShowcase from "@/components/projects/hartland-2-villas/FloorPlanShowcase";
import MapDirections from "@/components/projects/hartland-2-villas/MapDirections";
import ProjectHero from "@/components/projects/hartland-2-villas/ProjectHero";
import ProjectIntro from "@/components/projects/hartland-2-villas/ProjectIntro";
import ProjectsFooter from "@/components/projects/hartland-2-villas/ProjectsFooter";
import VisualSymphony from "@/components/projects/hartland-2-villas/VisualSymphony";

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
