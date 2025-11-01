import MiniCallbackForm from "@/components/MiniCallbackForm";
import AmenitiesShowcase from "@/components/projects/seahaven-penthouse/AmenitiesShowcase";
import CityProximity from "@/components/projects/seahaven-penthouse/CityProximity";
import FloorPlanShowcase from "@/components/projects/seahaven-penthouse/FloorPlanShowcase";
import MapDirections from "@/components/projects/seahaven-penthouse/MapDirections";
import ProjectHero from "@/components/projects/seahaven-penthouse/ProjectHero";
import ProjectIntro from "@/components/projects/seahaven-penthouse/ProjectIntro";
import ProjectsFooter from "@/components/projects/seahaven-penthouse/ProjectsFooter";
import VisualSymphony from "@/components/projects/seahaven-penthouse/VisualSymphony";

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
