// src/lib/project-data.js

// ✅ Dynamically loads project data based on URL parameters
export async function getProjectData(category, developer, project) {
  try {
    // Dynamically import the correct project file based on folder structure
    const dataModule = await import(
      `@/data/projects/${category}/${developer}/${project}.js`
    );

    // Convert file name like "sky-parks" → "skyParksData"
    const key = `${project.replace(/-([a-z])/g, (_, c) =>
      c.toUpperCase()
    )}Data`;

    // Return named export or default export
    return dataModule[key] || dataModule.default;
  } catch (error) {
    console.error(
      `❌ Project data not found for ${category}/${developer}/${project}:`,
      error
    );
    throw new Error(
      `Project not found for ${category}/${developer}/${project}`
    );
  }
}

// ✅ Define which pages to statically generate
export function getAllProjectSlugs() {
  return [
    { category: "apartments", developer: "sobha", project: "sky-parks" },
    { category: "apartments", developer: "sobha", project: "aqua-crest" },
    { category: "apartments", developer: "sobha", project: "central" },
    { category: "apartments", developer: "sobha", project: "aquamont" },
    // Add more here later as you expand:
    // { category: "villas", developer: "emaar", project: "the-valley" },
    // { category: "apartments", developer: "damac", project: "cavalli-couture" },
  ];
}
