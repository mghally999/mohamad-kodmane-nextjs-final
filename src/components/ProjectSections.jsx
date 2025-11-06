// src/components/projects/ProjectSections.jsx
"use client";

import dynamic from "next/dynamic";

// Dynamically import heavy client components
const ProjectHero = dynamic(() => import("@/components/projects/ProjectHero"));
const ProjectIntro = dynamic(() =>
  import("@/components/projects/ProjectIntro")
);
const VisualSymphony = dynamic(() =>
  import("@/components/projects/VisualSymphony")
);
const FloorPlanShowcase = dynamic(() =>
  import("@/components/projects/FloorPlanShowcase")
);
const AmenitiesShowcase = dynamic(() =>
  import("@/components/projects/AmenitiesShowcase")
);
const MapDirections = dynamic(() =>
  import("@/components/projects/MapDirections")
);
const MiniCallbackForm = dynamic(() => import("@/components/MiniCallbackForm"));

export default function ProjectSections({ projectData }) {
  if (!projectData) return null;

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
    </main>
  );
}
