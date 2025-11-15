// src/app/projects/[category]/[developer]/[project]/page.js
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectIntro from "@/components/projects/ProjectIntro";
import VisualSymphony from "@/components/projects/VisualSymphony";
import FloorPlanShowcase from "@/components/projects/FloorPlanShowcase";
import AmenitiesShowcase from "@/components/projects/AmenitiesShowcase";
import MapDirections from "@/components/projects/MapDirections";
import ContactFormFinal from "@/components/projects/ContactFormFinal";
import { getProjectData } from "@/lib/project-data";

export default async function ProjectPage({ params }) {
  const projectData = await getProjectData(
    params.category,
    params.developer,
    params.project
  );

  return (
    <main>
      <ProjectHero data={projectData.hero} projectData={projectData} />
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
      <ContactFormFinal />
    </main>
  );
}
