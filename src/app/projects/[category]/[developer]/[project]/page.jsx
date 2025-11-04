import { getProjectData, getAllProjectSlugs } from "@/lib/project-data";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectIntro from "@/components/projects/ProjectIntro";
import VisualSymphony from "@/components/projects/VisualSymphony";
import FloorPlanShowcase from "@/components/projects/FloorPlanShowcase";
import AmenitiesShowcase from "@/components/projects/AmenitiesShowcase";
import MapDirections from "@/components/projects/MapDirections";
import ProjectsFooter from "@/components/projects/ProjectsFooter";
import MiniCallbackForm from "@/components/MiniCallbackForm";
import CityProximity from "@/components/projects/CityProximity";

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    category: String(slug.category),
    developer: String(slug.developer),
    project: String(slug.project),
  }));
}

export default async function ProjectPage({ params }) {
  const projectData = await getProjectData(
    params.category,
    params.developer,
    params.project
  );

  return (
    <main>
      <ProjectHero data={projectData.hero} />
      <ProjectIntro data={projectData.intro} projectData={projectData} />
      <VisualSymphony data={projectData.gallery} />
      <FloorPlanShowcase
        data={projectData.floorPlans}
        projectData={projectData}
      />
      <AmenitiesShowcase
        data={projectData.amenities}
        projectData={projectData}
      />
      <MapDirections data={projectData.location} projectData={projectData} />
      <CityProximity data={projectData.nearbyAttractions} />
      <MiniCallbackForm />
      <ProjectsFooter />
    </main>
  );
}
