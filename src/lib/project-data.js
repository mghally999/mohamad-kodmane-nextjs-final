/**
 * ✅ Universal project data loader for Next.js App Router
 * Works perfectly in dev & production, supports src alias, no broken paths.
 */

export async function getProjectData(category, developer, project) {
  try {
    // Use alias import path compatible with Next.js build
    const importedModule = await import(
      `@/data/projects/${category}/${developer}/${project}.js`
    );

    // Find export key ending with "Data"
    const exportKey = Object.keys(importedModule).find((key) =>
      key.toLowerCase().endsWith("data")
    );

    if (!exportKey) {
      throw new Error(
        `❌ No exported variable ending with "Data" found in @/data/projects/${category}/${developer}/${project}.js`
      );
    }

    return importedModule[exportKey];
  } catch (error) {
    console.error(
      `❌ Failed to load project "${project}" by ${developer} (${category}):`,
      error.message
    );
    return FALLBACK_PROJECT_DATA;
  }
}

/**
 * ✅ Static project routes (for SSG builds)
 */
export function getAllProjectSlugs() {
  return [
    // 🏢 Apartments
    { category: "apartments", developer: "sobha", project: "skyparks" },
    { category: "apartments", developer: "sobha", project: "aqua-crest" },
    { category: "apartments", developer: "sobha", project: "central" },
    { category: "apartments", developer: "sobha", project: "aquamont" },
    { category: "apartments", developer: "nakheel", project: "palm-central" },

    // 🏡 Villas
    { category: "villas", developer: "sobha", project: "hartland" },
    { category: "villas", developer: "sobha", project: "al-sinniyyah-island" },
    { category: "villas", developer: "arada", project: "massar" },

    // 🏬 Commercial / Retail
    {
      category: "commercial-retail",
      developer: "omniyat",
      project: "lumenaalta",
    },
    {
      category: "commercial-retail",
      developer: "azizi",
      project: "riviera-retails",
    },

    // 🌇 Penthouses
    {
      category: "penthouses",
      developer: "sobha",
      project: "seahaven-penthouse",
    },
  ];
}

/**
 * ✅ Fallback data when a project file is missing
 */
export const FALLBACK_PROJECT_DATA = {
  seo: {
    title: "Project Not Found | Nextis",
    description: "The requested project could not be found.",
    canonical: "/projects",
  },
  project: {
    name: "Unknown Project",
    developer: "Unknown",
    location: "N/A",
    status: "Unavailable",
    startingPrice: "N/A",
    completionDate: "N/A",
    type: "N/A",
  },
  hero: {
    backgroundUrl: "/images/fallback-hero.jpg",
    squareImageUrl: "/images/fallback-square.jpg",
  },
  intro: {
    title: "Project Not Found",
    paragraphs: [
      "We couldn’t find the project you’re looking for.",
      "Please check the URL or explore other listings.",
    ],
  },
  gallery: {
    slides: ["/images/fallback-gallery.jpg"],
  },
  floorPlans: { plans: [] },
  amenities: { amenities: [] },
  location: { lat: 25.2048, lng: 55.2708 },
  cta: {
    title: "Need Assistance?",
    description: "Get in touch with our experts today.",
    buttons: [{ text: "Contact Us", type: "primary", url: "/contact" }],
  },
};
