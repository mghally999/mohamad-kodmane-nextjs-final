import MiniCallbackForm from "@/components/MiniCallbackForm";
import AmenitiesShowcase from "@/components/projects/central/AmenitiesShowcase";
import CityProximity from "@/components/projects/central/CityProximity";
import FloorPlanShowcase from "@/components/projects/central/FloorPlanShowcase";
import MapDirections from "@/components/projects/central/MapDirections";
import ProjectHero from "@/components/projects/central/ProjectHero";
import ProjectIntro from "@/components/projects/central/ProjectIntro";
import ProjectsFooter from "@/components/projects/central/ProjectsFooter";
import VisualSymphony from "@/components/projects/central/VisualSymphony";

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
