import MiniCallbackForm from "@/components/MiniCallbackForm";
import AmenitiesShowcase from "@/components/projects/aqua-crest/AmenitiesShowcase";
import CityProximity from "@/components/projects/aqua-crest/CityProximity";
import FloorPlanShowcase from "@/components/projects/aqua-crest/FloorPlanShowcase";
import MapDirections from "@/components/projects/aqua-crest/MapDirections";
import ProjectHero from "@/components/projects/aqua-crest/ProjectHero";
import ProjectIntro from "@/components/projects/aqua-crest/ProjectIntro";
import ProjectsFooter from "@/components/projects/aqua-crest/ProjectsFooter";
import VisualSymphony from "@/components/projects/aqua-crest/VisualSymphony";

export default function ProjectPage() {
  return (
    <main>
      <ProjectHero />
      <ProjectIntro />
      <VisualSymphony />
      <FloorPlanShowcase />
      <AmenitiesShowcase />
      {/* <MapDirections /> */}
      <CityProximity />
      <MiniCallbackForm />
      <ProjectsFooter />
    </main>
  );
}
