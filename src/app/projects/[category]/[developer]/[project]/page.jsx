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

  const locationMap = {
    title: {
      en: "Close To What Matters Most",
      ar: "قريبة من كل ما يهمك",
    },
    center: {
      lat: 25.1874304,
      lng: 55.2573965, // approximate SkyParks / Business Bay area
    },
    zoom: 13,
    categories: [
      { id: "schools", label: { en: "Schools", ar: "المدارس" } },
      { id: "shop", label: { en: "Shop", ar: "التسوق" } },
      { id: "dine", label: { en: "Dine", ar: "المطاعم" } },
      { id: "grocery", label: { en: "Grocery", ar: "البقالة" } },
      { id: "attraction", label: { en: "Attractions", ar: "الترفيه" } },
    ],
    points: [
      {
        id: "dubai-mall",
        categoryId: "shop",
        name: { en: "The Dubai Mall" },
        description: { en: "World-class shopping, dining & entertainment." },
        lat: 25.1972,
        lng: 55.2744,
        directionsUrl:
          "https://www.google.com/maps/dir/?api=1&destination=25.1972,55.2744",
      },
      {
        id: "business-bay-metro",
        categoryId: "attraction",
        name: { en: "Business Bay Metro Station" },
        description: { en: "Just minutes away from Sobha SkyParks." },
        lat: 25.1879,
        lng: 55.2605,
        directionsUrl:
          "https://www.google.com/maps/dir/?api=1&destination=25.1879,55.2605",
      },
      {
        id: "school-example",
        categoryId: "schools",
        name: { en: "International School nearby" },
        description: { en: "Premium international curriculum." },
        lat: 25.205,
        lng: 55.26,
      },
    ],
  };

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
      <MapDirections data={locationMap} />
      {/* <MapDirections data={projectData.location} projectData={projectData} /> */}
      <ContactFormFinal />
    </main>
  );
}
