import { getProjectData, getAllProjectSlugs } from "@/lib/project-data";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectIntro from "@/components/projects/ProjectIntro";
import VisualSymphony from "@/components/projects/VisualSymphony";
import FloorPlanShowcase from "@/components/projects/FloorPlanShowcase";
import AmenitiesShowcase from "@/components/projects/AmenitiesShowcase";
import MapDirections from "@/components/projects/MapDirections";
import ProjectsFooter from "@/components/projects/ProjectsFooter";
import MiniCallbackForm from "@/components/MiniCallbackForm";

export const revalidate = 300;

// ✅ Automatically generate all static routes
export async function generateStaticParams() {
  return getAllProjectSlugs();
}

// ✅ Dynamic SEO metadata
export async function generateMetadata({ params }) {
  const projectData = await getProjectData(
    params.category,
    params.developer,
    params.project
  );

  return {
    title: projectData.seo?.title || "Luxury Projects | Nextis",
    description:
      projectData.seo?.description ||
      "Explore Dubai's premier off-plan and ready-to-move properties.",
    alternates: {
      canonical:
        projectData.seo?.canonical ||
        `/projects/${params.category}/${params.developer}/${params.project}`,
    },
  };
}

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
      <MiniCallbackForm />
      {/* <ProjectsFooter /> */}
    </main>
  );
}
