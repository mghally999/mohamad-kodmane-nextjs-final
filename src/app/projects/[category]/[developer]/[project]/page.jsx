"use client";

import { use, useEffect, useState } from "react";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectIntro from "@/components/projects/ProjectIntro";
import VisualSymphony from "@/components/projects/VisualSymphony";
import FloorPlanShowcase from "@/components/projects/FloorPlanShowcase";
import AmenitiesShowcase from "@/components/projects/AmenitiesShowcase";
import ContactFormFinal from "@/components/projects/ContactFormFinal";
import { getProjectData } from "@/lib/project-data";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectPage({ params }) {
  const { locale } = useLanguage();

  // ✅ unwrap params (Next.js 16)
  const { category, developer, project } = use(params);

  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await getProjectData(category, developer, project, locale);
      setProjectData(data);
      setLoading(false);
    }

    loadData();
  }, [category, developer, project, locale]);

  if (loading) return <div>Loading...</div>;
  if (!projectData) return <div>Project not found</div>;

  // ✅ floorplans visible only when we really want them
  const shouldShowFloorPlans =
    project !== "lumenaalta" &&
    project !== "riviera-retails" &&
    projectData.floorPlans &&
    Array.isArray(projectData.floorPlans.plans) &&
    projectData.floorPlans.plans.length > 0;

  return (
    <main>
      <ProjectHero data={projectData.hero} projectData={projectData} />
      <ProjectIntro data={projectData.intro} projectData={projectData} />
      <VisualSymphony data={projectData.gallery} />

      {shouldShowFloorPlans && (
        <FloorPlanShowcase
          data={projectData.floorPlans}
          projectData={projectData}
        />
      )}

      <AmenitiesShowcase
        data={projectData.amenities}
        projectData={projectData}
      />
      <ContactFormFinal />
    </main>
  );
}
