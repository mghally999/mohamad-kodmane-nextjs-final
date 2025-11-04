// src/lib/project-data.js

// ✅ Project data mapping to ensure correct file names and exports
const PROJECT_MAPPINGS = {
  // Apartments - Sobha
  "apartments-sobha-sky-parks": {
    file: "sky-parks",
    exportKey: "skyParksData",
  },
  "apartments-sobha-aqua-crest": {
    file: "aqua-crest",
    exportKey: "aquaCrestData",
  },
  "apartments-sobha-central": {
    file: "central",
    exportKey: "centralData",
  },
  "apartments-sobha-aquamont": {
    file: "aquamont",
    exportKey: "aquamontData",
  },
  // Apartments - Nakheel
  "apartments-nakheel-palm-central": {
    file: "palm-central",
    exportKey: "palmCentralData",
  },
  // Villas - Sobha
  "villas-sobha-hartland": {
    file: "hartland",
    exportKey: "hartland2VillasData",
  },
  "villas-sobha-al-sinniyyah-island": {
    file: "al-sinniyyah-island",
    exportKey: "alSinniyyahIslandData",
  },
  "villas-arada-massar-3": {
    file: "massar-3",
    exportKey: "massar3Data",
  },
};

// ✅ Dynamically loads project data based on URL parameters
export async function getProjectData(category, developer, project) {
  try {
    const mappingKey = `${category}-${developer}-${project}`;
    const mapping = PROJECT_MAPPINGS[mappingKey];

    if (!mapping) {
      throw new Error(`No mapping found for: ${mappingKey}`);
    }

    console.log(`🔍 Loading project: ${mappingKey}`);
    console.log(`📁 File: ${mapping.file}, Export: ${mapping.exportKey}`);

    // Dynamically import the correct project file
    const dataModule = await import(
      `@/data/projects/${category}/${developer}/${mapping.file}.js`
    );

    console.log("✅ Module loaded successfully");

    // Get the data from the correct export key
    const projectData = dataModule[mapping.exportKey];

    if (!projectData) {
      console.error("❌ Available exports:", Object.keys(dataModule));
      throw new Error(`Export "${mapping.exportKey}" not found in module`);
    }

    // Validate the data structure
    if (!projectData.hero || !projectData.intro) {
      throw new Error("Project data missing required structure (hero, intro)");
    }

    console.log(`✅ Successfully loaded: ${projectData.project?.name}`);
    return projectData;
  } catch (error) {
    console.error(
      `❌ Failed to load project data for ${category}/${developer}/${project}:`,
      error.message
    );
    console.error("Full error:", error);

    // Provide more helpful error message
    throw new Error(
      `Project "${project}" by ${developer} (${category}) not found. ` +
        `Please check if the data file exists and exports the correct data structure.`
    );
  }
}

// ✅ Define which pages to statically generate
export function getAllProjectSlugs() {
  return Object.keys(PROJECT_MAPPINGS).map((key) => {
    const [category, developer, project] = key.split("-");
    return {
      category,
      developer,
      project,
    };
  });
}

// ✅ Fallback data for development (optional)
export const FALLBACK_PROJECT_DATA = {
  seo: {
    title: "Project Not Found",
    description: "The requested project could not be found.",
    keywords: "",
    canonical: "/projects",
  },
  project: {
    name: "Project Not Found",
    developer: "Unknown",
    location: "Unknown",
    status: "Unknown",
    startingPrice: "Contact for details",
    completionDate: "Unknown",
    type: "Unknown",
    units: "Unknown",
  },
  hero: {
    backgroundUrl: "/images/fallback-hero.jpg",
    squareImageUrl: "/images/fallback-square.jpg",
    companyName: "Unknown Developer",
    rating: 4.0,
  },
  intro: {
    title: "PROJECT NOT FOUND",
    paragraphs: [
      "The project you are looking for could not be found.",
      "Please check the URL or contact us for assistance.",
    ],
    brochures: [],
    imgUrl: "/images/fallback-intro.jpg",
    imgAlt: "Project not found",
    floatingCards: [],
  },
  gallery: {
    title: "Project Gallery",
    slides: ["/images/fallback-gallery.jpg"],
    projectTag: "Unknown",
  },
  floorPlans: {
    type: "unknown",
    plans: [],
    brochureHref: "#",
  },
  amenities: {
    title: "Project Amenities",
    amenities: [],
  },
  location: {
    title: "Project Location",
    projectName: "Unknown Project",
    address: "Unknown Location",
    lat: 25.2048,
    lng: 55.2708,
    zoom: 10,
    proximityFeatures: [],
  },
  nearbyAttractions: {
    title: "Nearby Attractions",
    attractions: [],
  },
  cta: {
    title: "Contact Us",
    description: "Please contact us for more information about our projects.",
    buttons: [
      {
        text: "Contact Sales",
        type: "primary",
        url: "/contact",
      },
    ],
  },
};
