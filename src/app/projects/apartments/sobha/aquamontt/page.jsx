import MiniCallbackForm from "@/components/MiniCallbackForm";
import CityProximity from "@/components/projects/aqua-crest/CityProximity";
import AmenitiesShowcase from "@/components/projects/aquamont/AmenitiesShowcase";
import FloorPlanShowcase from "@/components/projects/aquamont/FloorPlanShowcase";
import MapDirections from "@/components/projects/aquamont/MapDirections";
import ProjectHero from "@/components/projects/aquamont/ProjectHero";
import ProjectIntro from "@/components/projects/aquamont/ProjectIntro";
import ProjectsFooter from "@/components/projects/aquamont/ProjectsFooter";
import VisualSymphony from "@/components/projects/aquamont/VisualSymphony";

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
