/* eslint-disable @next/next/no-assign-module-variable */

// Import all project data directly
// import { palmCentralData } from "@/data/projects/apartments/nakheel/palm-central/palm-central";
import { aquaCrestData } from "@/data/projects/apartments/sobha/aqua-crest/aqua-crest";
import { aquamontData } from "@/data/projects/apartments/sobha/aquamont/aquamont";
import { centralData } from "@/data/projects/apartments/sobha/central/central";
import { skyParksData } from "@/data/projects/apartments/sobha/skyparks/skyparks";
import { rivieraRetailsData } from "@/data/projects/commercial-retail/azizi/riviera-retails/riviera-retails";
import { lumenaAltaData } from "@/data/projects/commercial-retail/omniyat/lumenaalta/lumenaalta";
import { seahavenPenthouseData } from "@/data/projects/penthouses/sobha/seahaven-penthouse/seahaven-penthouse";
import { massar3Data } from "@/data/projects/villas/arada/massar/massar";
import { alSinniyyahIslandData } from "@/data/projects/villas/sobha/al-sinniyyah-island/al-sinniyyah-island";
import { hartland2VillasData } from "@/data/projects/villas/sobha/hartland/hartland";

/**
 * ✅ PROJECT DATA MAP - Direct access to your data
 */
const PROJECT_DATA_MAP = {
  // Apartments - Sobha
  skyparks: skyParksData,
  aquamont: aquamontData,
  "aqua-crest": aquaCrestData,
  central: centralData,

  // Apartments - Nakheel
  // "palm-central": palmCentralData,

  // Villas - Sobha
  hartland: hartland2VillasData,
  "al-sinniyyah-island": alSinniyyahIslandData,

  // Villas - Arada
  massar: massar3Data,

  // Commercial - Azizi
  "riviera-retails": rivieraRetailsData,

  // Commercial - Omniyat
  lumenaalta: lumenaAltaData,

  // Penthouses - Sobha
  "seahaven-penthouse": seahavenPenthouseData,
};

/**
 * 🎯 Get project data with locale support
 */
export async function getProjectData(
  category,
  developer,
  project,
  locale = "en"
) {
  console.log("🔄 Getting project:", { project, locale });

  const projectData = PROJECT_DATA_MAP[project];

  if (!projectData) {
    console.warn(`❌ Project "${project}" not found`);
    return FALLBACK_PROJECT_DATA;
  }

  // Get the data for the requested locale, fallback to English
  const data = projectData[locale] || projectData.en;

  if (!data) {
    console.warn(`❌ No data for "${project}" in "${locale}"`);
    return FALLBACK_PROJECT_DATA;
  }

  console.log("✅ Successfully loaded:", project);
  return data;
}

/**
 * ✅ Static project routes
 */
export function getAllProjectSlugs() {
  return Object.keys(PROJECT_DATA_MAP).map((project) => {
    let category = "apartments";
    let developer = "sobha";

    if (
      project.includes("hartland") ||
      project.includes("massar") ||
      project.includes("al-sinniyyah")
    ) {
      category = "villas";
    } else if (project.includes("riviera") || project.includes("lumena")) {
      category = "commercial-retail";
    } else if (project.includes("penthouse")) {
      category = "penthouses";
    }

    if (project.includes("nakheel")) developer = "nakheel";
    if (project.includes("arada")) developer = "arada";
    if (project.includes("azizi")) developer = "azizi";
    if (project.includes("omniyat")) developer = "omniyat";

    return { category, developer, project };
  });
}

// Keep your FALLBACK_PROJECT_DATA the same
export const FALLBACK_PROJECT_DATA = {
  seo: {
    title: {
      en: "Project Not Found | Nextis",
      ar: "المشروع غير موجود | نيكستس",
    },
    description: {
      en: "The requested project could not be found.",
      ar: "لم يتم العثور على المشروع المطلوب.",
    },
    canonical: "/projects",
  },
  project: {
    name: {
      en: "Unknown Project",
      ar: "مشروع غير معروف",
    },
    developer: {
      en: "Unknown",
      ar: "غير معروف",
    },
    location: {
      en: "N/A",
      ar: "غير متوفر",
    },
    status: {
      en: "Unavailable",
      ar: "غير متوفر",
    },
    startingPrice: {
      en: "N/A",
      ar: "غير متوفر",
    },
    completionDate: {
      en: "N/A",
      ar: "غير متوفر",
    },
    type: {
      en: "N/A",
      ar: "غير متوفر",
    },
  },
  hero: {
    backgroundUrl: "/images/fallback-hero.jpg",
    squareImageUrl: "/images/fallback-square.jpg",
    companyName: {
      en: "Unknown Developer",
      ar: "مطور غير معروف",
    },
    rating: 0,
  },
  intro: {
    title: {
      en: "Project Not Found",
      ar: "المشروع غير موجود",
    },
    paragraphs: [
      {
        en: "We couldn't find the project you're looking for.",
        ar: "لم نتمكن من العثور على المشروع الذي تبحث عنه.",
      },
      {
        en: "Please check the URL or explore other listings.",
        ar: "يرجى التحقق من الرابط أو استكشاف المشاريع الأخرى.",
      },
    ],
  },
  gallery: {
    slides: ["/images/fallback-gallery.jpg"],
  },
  floorPlans: { plans: [] },
  amenities: { amenities: [] },
  location: { lat: 25.2048, lng: 55.2708 },
  cta: {
    title: {
      en: "Need Assistance?",
      ar: "هل تحتاج إلى مساعدة؟",
    },
    description: {
      en: "Get in touch with our experts today.",
      ar: "تواصل مع خبرائنا اليوم.",
    },
    buttons: [
      {
        text: {
          en: "Contact Us",
          ar: "اتصل بنا",
        },
        type: "primary",
        url: "/contact",
      },
    ],
  },
  images: ["/images/fallback-gallery.jpg"],
};
