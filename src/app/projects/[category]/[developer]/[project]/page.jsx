// src/app/projects/[category]/[developer]/[project]/page.js
"use client";

import React from "react";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectIntro from "@/components/projects/ProjectIntro";
import VisualSymphony from "@/components/projects/VisualSymphony";
import FloorPlanShowcase from "@/components/projects/FloorPlanShowcase";
import AmenitiesShowcase from "@/components/projects/AmenitiesShowcase";
import MapDirections from "@/components/projects/MapDirections";
import ContactFormFinal from "@/components/projects/ContactFormFinal";
import { getProjectData } from "@/lib/project-data";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjectPage({ params }) {
  const { locale } = useLanguage();
  const [projectData, setProjectData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadProjectData() {
      try {
        setLoading(true);
        const data = await getProjectData(
          params.category,
          params.developer,
          params.project,
          locale
        );
        setProjectData(data);
      } catch (error) {
        console.error("Error loading project data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjectData();
  }, [params.category, params.developer, params.project, locale]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!projectData) {
    return <div>Project not found</div>;
  }

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
