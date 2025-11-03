import MiniCallbackForm from "@/components/MiniCallbackForm";
import CityProximity from "@/components/projects/aqua-crest/CityProximity";
import AmenitiesShowcase from "@/components/projects/palm-central/AmenitiesShowcase";
import FloorPlanShowcase from "@/components/projects/palm-central/FloorPlanShowcase";
import MapDirections from "@/components/projects/palm-central/MapDirections";
import ProjectHero from "@/components/projects/palm-central/ProjectHero";
import ProjectIntro from "@/components/projects/palm-central/ProjectIntro";
import ProjectsFooter from "@/components/projects/palm-central/ProjectsFooter";
import VisualSymphony from "@/components/projects/palm-central/VisualSymphony";

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
