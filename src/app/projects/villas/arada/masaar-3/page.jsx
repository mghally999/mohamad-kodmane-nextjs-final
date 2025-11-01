import MiniCallbackForm from "@/components/MiniCallbackForm";
import AmenitiesShowcase from "@/components/projects/masaar-3/AmenitiesShowcase";
import CityProximity from "@/components/projects/masaar-3/CityProximity";
import FloorPlanShowcase from "@/components/projects/masaar-3/FloorPlanShowcase";
import MapDirections from "@/components/projects/masaar-3/MapDirections";
import ProjectHero from "@/components/projects/masaar-3/ProjectHero";
import ProjectIntro from "@/components/projects/masaar-3/ProjectIntro";
import ProjectsFooter from "@/components/projects/masaar-3/ProjectsFooter";
import VisualSymphony from "@/components/projects/masaar-3/VisualSymphony";

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
