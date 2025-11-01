import MiniCallbackForm from "@/components/MiniCallbackForm";
import AmenitiesShowcase from "@/components/projects/sky-parks/AmenitiesShowcase";
import CityProximity from "@/components/projects/sky-parks/CityProximity";
import FloorPlanShowcase from "@/components/projects/sky-parks/FloorPlanShowcase";
import MapDirections from "@/components/projects/sky-parks/MapDirections";
import ProjectHero from "@/components/projects/sky-parks/ProjectHero";
import ProjectIntro from "@/components/projects/sky-parks/ProjectIntro";
import ProjectsFooter from "@/components/projects/sky-parks/ProjectsFooter";
import VisualSymphony from "@/components/projects/sky-parks/VisualSymphony";

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
