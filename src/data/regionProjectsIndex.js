// src/data/regionProjectsIndex.js

// Import all project data directly
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
import { damacIslands2Data } from "@/data/projects/villas/damac/damac-islands-2";

// Helper to build a normalised "card" from the full project data
function toCard({ slug, href, regionSlug, data, bedrooms }) {
  const project = data?.en?.project || {};
  const hero = data?.en?.hero || {};
  const image =
    hero.squareImageUrl ||
    hero.backgroundUrl ||
    hero.mainImage ||
    hero.image ||
    null;

  return {
    slug,
    href,
    regionSlug,
    name: project.name || "",
    developer: project.developer || "",
    type: project.type || "", // "Apartments", "Villas", "Retail Spaces", etc.
    status: project.status || "",
    startingPrice: project.startingPrice || "",
    completionDate: project.completionDate || "",
    location: project.location || "",
    image,
    bedrooms: bedrooms || "Studio, 1, 2 & 3 Bedrooms",
  };
}

/**
 * MAIN INDEX - REAL PROJECTS + NEW NON-REPETITIVE DUMMY DATA
 */
export const regionProjectsIndex = [
  // ============== REAL PROJECTS ================================
  {
    ...toCard({
      slug: "lumenaalta",
      href: "/projects/commercial-retail/omniyat/lumenaalta",
      regionSlug: "business-bay",
      data: lumenaAltaData,
      bedrooms: "Commercial Spaces",
    }),
    priceAED: 1500000,
    startingPriceAED: 1500000,
    sizeSqft: 1100,
    devStatus: "Presale",
    saleStatus: "On Sale",
    unitType: "Retail",
    completionYear: 2027,
    hasPostHandover: true,
    postHandoverMonths: 24,
    minBedrooms: 0,
    maxBedrooms: 0,
  },

  {
    ...toCard({
      slug: "central",
      href: "/projects/apartments/sobha/central",
      regionSlug: "business-bay",
      data: centralData,
      bedrooms: "1, 2 & 3 Bedrooms",
    }),
    priceAED: 1250000,
    startingPriceAED: 1250000,
    sizeSqft: 850,
    devStatus: "Under Construction",
    saleStatus: "On Sale",
    unitType: "Apartments",
    completionYear: 2026,
    hasPostHandover: true,
    postHandoverMonths: 36,
    minBedrooms: 1,
    maxBedrooms: 3,
  },

  {
    ...toCard({
      slug: "skyparks",
      href: "/projects/apartments/sobha/skyparks",
      regionSlug: "downtown-dubai",
      data: skyParksData,
      bedrooms: "Studio, 1, 2 & 3 Bedrooms",
    }),
    priceAED: 2100000,
    startingPriceAED: 2100000,
    sizeSqft: 900,
    devStatus: "Presale",
    saleStatus: "Start of Sales",
    unitType: "Apartments",
    completionYear: 2028,
    hasPostHandover: true,
    postHandoverMonths: 48,
    minBedrooms: 0,
    maxBedrooms: 3,
  },

  {
    ...toCard({
      slug: "seahaven-penthouse",
      href: "/projects/penthouses/sobha/seahaven-penthouse",
      regionSlug: "dubai-marina",
      data: seahavenPenthouseData,
      bedrooms: "3 & 4 Bedrooms",
    }),
    priceAED: 8000000,
    startingPriceAED: 8000000,
    sizeSqft: 3500,
    devStatus: "On Sale",
    saleStatus: "On Sale",
    unitType: "Penthouse",
    completionYear: 2025,
    hasPostHandover: false,
    postHandoverMonths: 0,
    minBedrooms: 3,
    maxBedrooms: 4,
  },

  {
    ...toCard({
      slug: "hartland",
      href: "/projects/villas/sobha/hartland",
      regionSlug: "mohammed-bin-rashid-city",
      data: hartland2VillasData,
      bedrooms: "4, 5 & 6 Bedrooms",
    }),
    priceAED: 6000000,
    startingPriceAED: 6000000,
    sizeSqft: 4000,
    devStatus: "Under Construction",
    saleStatus: "On Sale",
    unitType: "Villa",
    completionYear: 2026,
    hasPostHandover: true,
    postHandoverMonths: 60,
    minBedrooms: 4,
    maxBedrooms: 6,
  },

  {
    ...toCard({
      slug: "riviera-retails",
      href: "/projects/commercial-retail/azizi/riviera-retails",
      regionSlug: "mohammed-bin-rashid-city",
      data: rivieraRetailsData,
      bedrooms: "Retail Units",
    }),
    priceAED: 1800000,
    startingPriceAED: 1800000,
    sizeSqft: 1200,
    devStatus: "Completed",
    saleStatus: "On Sale",
    unitType: "Retail",
    completionYear: 2024,
    hasPostHandover: false,
    postHandoverMonths: 0,
    minBedrooms: 0,
    maxBedrooms: 0,
  },

  {
    ...toCard({
      slug: "aqua-crest",
      href: "/projects/apartments/sobha/aqua-crest",
      regionSlug: "jumeirah-village-circle",
      data: aquaCrestData,
      bedrooms: "1, 2 & 3 Bedrooms",
    }),
    priceAED: 900000,
    startingPriceAED: 900000,
    sizeSqft: 700,
    devStatus: "Presale",
    saleStatus: "On Sale",
    unitType: "Apartments",
    completionYear: 2027,
    hasPostHandover: true,
    postHandoverMonths: 36,
    minBedrooms: 1,
    maxBedrooms: 3,
  },

  {
    ...toCard({
      slug: "massar",
      href: "/projects/villas/arada/massar",
      regionSlug: null,
      data: massar3Data,
      bedrooms: "3, 4 & 5 Bedrooms",
    }),
    priceAED: 2200000,
    startingPriceAED: 2200000,
    sizeSqft: 2600,
    devStatus: "Under Construction",
    saleStatus: "On Sale",
    unitType: "Villa",
    completionYear: 2027,
    hasPostHandover: true,
    postHandoverMonths: 36,
    minBedrooms: 3,
    maxBedrooms: 5,
  },

  {
    ...toCard({
      slug: "al-sinniyyah-island",
      href: "/projects/villas/sobha/al-sinniyyah-island",
      regionSlug: null,
      data: alSinniyyahIslandData,
      bedrooms: "3, 4 & 5 Bedrooms",
    }),
    priceAED: 3000000,
    startingPriceAED: 3000000,
    sizeSqft: 3200,
    devStatus: "Presale",
    saleStatus: "On Sale",
    unitType: "Villa",
    completionYear: 2028,
    hasPostHandover: true,
    postHandoverMonths: 48,
    minBedrooms: 3,
    maxBedrooms: 5,
  },

  {
    ...toCard({
      slug: "aquamont",
      href: "/projects/apartments/sobha/aquamont",
      regionSlug: null,
      data: aquamontData,
      bedrooms: "2, 3 & 4 Bedrooms",
    }),
    priceAED: 1100000,
    startingPriceAED: 1100000,
    sizeSqft: 900,
    devStatus: "Under Construction",
    saleStatus: "On Sale",
    unitType: "Apartments",
    completionYear: 2027,
    hasPostHandover: true,
    postHandoverMonths: 30,
    minBedrooms: 2,
    maxBedrooms: 4,
  },

  {
    ...toCard({
      slug: "damac-islands-2",
      href: "/projects/villas/damac/damac-islands-2",
      regionSlug: null,
      data: damacIslands2Data,
      bedrooms: "3, 4 & 5 Bedrooms",
    }),
    priceAED: 2600000,
    startingPriceAED: 2600000,
    sizeSqft: 2800,
    devStatus: "Announced",
    saleStatus: "Announced",
    unitType: "Villa",
    completionYear: 2030,
    hasPostHandover: false,
    postHandoverMonths: 0,
    minBedrooms: 3,
    maxBedrooms: 5,
  },

  // ============== NEW NON-REPETITIVE DUMMY DATA ===============
  // Luxury Apartments - High End
  {
    ...toCard({
      slug: "opal-towers-downtown",
      href: "/debug/opal-towers-downtown",
      regionSlug: "downtown-dubai",
      data: skyParksData,
      bedrooms: "2, 3 & 4 Bedrooms",
    }),
    priceAED: 4200000,
    startingPriceAED: 4200000,
    sizeSqft: 1800,
    devStatus: "Presale",
    saleStatus: "On Sale",
    unitType: "Apartments",
    completionYear: 2027,
    hasPostHandover: true,
    postHandoverMonths: 24,
    minBedrooms: 2,
    maxBedrooms: 4,
  },

  // Affordable Villas - Mid Range
  {
    ...toCard({
      slug: "desert-oasis-villas",
      href: "/debug/desert-oasis-villas",
      regionSlug: "mohammed-bin-rashid-city",
      data: hartland2VillasData,
      bedrooms: "3 & 4 Bedrooms",
    }),
    priceAED: 3200000,
    startingPriceAED: 3200000,
    sizeSqft: 2200,
    devStatus: "Under Construction",
    saleStatus: "On Sale",
    unitType: "Villa",
    completionYear: 2026,
    hasPostHandover: false,
    postHandoverMonths: 0,
    minBedrooms: 3,
    maxBedrooms: 4,
  },

  // Ultra Luxury Penthouses
  {
    ...toCard({
      slug: "sky-palace-residence",
      href: "/debug/sky-palace-residence",
      regionSlug: "dubai-marina",
      data: seahavenPenthouseData,
      bedrooms: "4 & 5 Bedrooms",
    }),
    priceAED: 12500000,
    startingPriceAED: 12500000,
    sizeSqft: 4800,
    devStatus: "Completed",
    saleStatus: "On Sale",
    unitType: "Penthouse",
    completionYear: 2024,
    hasPostHandover: true,
    postHandoverMonths: 12,
    minBedrooms: 4,
    maxBedrooms: 5,
  },

  // Budget Apartments - Low End
  {
    ...toCard({
      slug: "jvc-garden-apartments",
      href: "/debug/jvc-garden-apartments",
      regionSlug: "jumeirah-village-circle",
      data: aquaCrestData,
      bedrooms: "Studio & 1 BR",
    }),
    priceAED: 450000,
    startingPriceAED: 450000,
    sizeSqft: 500,
    devStatus: "Completed",
    saleStatus: "On Sale",
    unitType: "Apartments",
    completionYear: 2023,
    hasPostHandover: false,
    postHandoverMonths: 0,
    minBedrooms: 0,
    maxBedrooms: 1,
  },

  // Commercial Office Spaces
  {
    ...toCard({
      slug: "business-bay-offices",
      href: "/debug/business-bay-offices",
      regionSlug: "business-bay",
      data: lumenaAltaData,
      bedrooms: "Office Spaces",
    }),
    priceAED: 2800000,
    startingPriceAED: 2800000,
    sizeSqft: 1500,
    devStatus: "Under Construction",
    saleStatus: "On Sale",
    unitType: "Retail",
    completionYear: 2025,
    hasPostHandover: true,
    postHandoverMonths: 18,
    minBedrooms: 0,
    maxBedrooms: 0,
  },

  // Luxury Townhouses
  {
    ...toCard({
      slug: "palm-townhouses",
      href: "/debug/palm-townhouses",
      regionSlug: "dubai-marina",
      data: hartland2VillasData,
      bedrooms: "3 & 4 Bedrooms",
    }),
    priceAED: 5800000,
    startingPriceAED: 5800000,
    sizeSqft: 2600,
    devStatus: "Presale",
    saleStatus: "Start of Sales",
    unitType: "Townhouse",
    completionYear: 2028,
    hasPostHandover: true,
    postHandoverMonths: 36,
    minBedrooms: 3,
    maxBedrooms: 4,
  },

  // Mid-Range Apartments
  {
    ...toCard({
      slug: "creek-harbour-view",
      href: "/debug/creek-harbour-view",
      regionSlug: "downtown-dubai",
      data: centralData,
      bedrooms: "1, 2 & 3 Bedrooms",
    }),
    priceAED: 1850000,
    startingPriceAED: 1850000,
    sizeSqft: 1100,
    devStatus: "Under Construction",
    saleStatus: "On Sale",
    unitType: "Apartments",
    completionYear: 2026,
    hasPostHandover: true,
    postHandoverMonths: 24,
    minBedrooms: 1,
    maxBedrooms: 3,
  },

  // Luxury Duplex
  {
    ...toCard({
      slug: "emerald-duplex-residence",
      href: "/debug/emerald-duplex-residence",
      regionSlug: "business-bay",
      data: seahavenPenthouseData,
      bedrooms: "3 & 4 Bedrooms",
    }),
    priceAED: 6800000,
    startingPriceAED: 6800000,
    sizeSqft: 3200,
    devStatus: "Presale",
    saleStatus: "On Sale",
    unitType: "Duplex",
    completionYear: 2027,
    hasPostHandover: true,
    postHandoverMonths: 30,
    minBedrooms: 3,
    maxBedrooms: 4,
  },

  // Affordable Retail
  {
    ...toCard({
      slug: "community-retail-mall",
      href: "/debug/community-retail-mall",
      regionSlug: "jumeirah-village-circle",
      data: rivieraRetailsData,
      bedrooms: "Retail Units",
    }),
    priceAED: 950000,
    startingPriceAED: 950000,
    sizeSqft: 800,
    devStatus: "Completed",
    saleStatus: "On Sale",
    unitType: "Retail",
    completionYear: 2024,
    hasPostHandover: false,
    postHandoverMonths: 0,
    minBedrooms: 0,
    maxBedrooms: 0,
  },

  // Ultra Luxury Villa
  {
    ...toCard({
      slug: "royal-estate-villas",
      href: "/debug/royal-estate-villas",
      regionSlug: "mohammed-bin-rashid-city",
      data: hartland2VillasData,
      bedrooms: "5 & 6 Bedrooms",
    }),
    priceAED: 15000000,
    startingPriceAED: 15000000,
    sizeSqft: 6500,
    devStatus: "Presale",
    saleStatus: "On Sale",
    unitType: "Villa",
    completionYear: 2029,
    hasPostHandover: true,
    postHandoverMonths: 60,
    minBedrooms: 5,
    maxBedrooms: 6,
  },

  // Studio Apartments
  {
    ...toCard({
      slug: "studio-living-towers",
      href: "/debug/studio-living-towers",
      regionSlug: "downtown-dubai",
      data: skyParksData,
      bedrooms: "Studio",
    }),
    priceAED: 750000,
    startingPriceAED: 750000,
    sizeSqft: 400,
    devStatus: "Under Construction",
    saleStatus: "On Sale",
    unitType: "Apartments",
    completionYear: 2025,
    hasPostHandover: false,
    postHandoverMonths: 0,
    minBedrooms: 0,
    maxBedrooms: 0,
  },

  // Mixed Use Development
  {
    ...toCard({
      slug: "dubai-heights-complex",
      href: "/debug/dubai-heights-complex",
      regionSlug: "business-bay",
      data: centralData,
      bedrooms: "1, 2, 3 BR & Retail",
    }),
    priceAED: 2200000,
    startingPriceAED: 2200000,
    sizeSqft: 950,
    devStatus: "Under Construction",
    saleStatus: "On Sale",
    unitType: "Apartments",
    completionYear: 2026,
    hasPostHandover: true,
    postHandoverMonths: 24,
    minBedrooms: 1,
    maxBedrooms: 3,
  },

  // Luxury Waterfront Apartments
  {
    ...toCard({
      slug: "canal-front-residences",
      href: "/debug/canal-front-residences",
      regionSlug: "dubai-marina",
      data: seahavenPenthouseData,
      bedrooms: "2, 3 & 4 Bedrooms",
    }),
    priceAED: 5200000,
    startingPriceAED: 5200000,
    sizeSqft: 2100,
    devStatus: "Presale",
    saleStatus: "Start of Sales",
    unitType: "Apartments",
    completionYear: 2028,
    hasPostHandover: true,
    postHandoverMonths: 42,
    minBedrooms: 2,
    maxBedrooms: 4,
  },

  // Affordable Townhouses
  {
    ...toCard({
      slug: "family-townhomes",
      href: "/debug/family-townhomes",
      regionSlug: "jumeirah-village-circle",
      data: hartland2VillasData,
      bedrooms: "2 & 3 Bedrooms",
    }),
    priceAED: 1800000,
    startingPriceAED: 1800000,
    sizeSqft: 1600,
    devStatus: "Completed",
    saleStatus: "On Sale",
    unitType: "Townhouse",
    completionYear: 2024,
    hasPostHandover: false,
    postHandoverMonths: 0,
    minBedrooms: 2,
    maxBedrooms: 3,
  },

  // Premium Retail
  {
    ...toCard({
      slug: "luxury-boutique-mall",
      href: "/debug/luxury-boutique-mall",
      regionSlug: "downtown-dubai",
      data: lumenaAltaData,
      bedrooms: "Premium Retail",
    }),
    priceAED: 3500000,
    startingPriceAED: 3500000,
    sizeSqft: 1200,
    devStatus: "Under Construction",
    saleStatus: "On Sale",
    unitType: "Retail",
    completionYear: 2025,
    hasPostHandover: true,
    postHandoverMonths: 18,
    minBedrooms: 0,
    maxBedrooms: 0,
  },
];

// ---------------------------------------------------------------------------
// Helper functions
// ---------------------------------------------------------------------------

export function getProjectsForRegion(regionSlug) {
  return regionProjectsIndex.filter(
    (project) => project.regionSlug === regionSlug
  );
}

export function getRegionsWithProjects() {
  const regions = [
    ...new Set(
      regionProjectsIndex
        .map((project) => project.regionSlug)
        .filter((slug) => slug !== null)
    ),
  ];
  return regions;
}

export function getProjectBySlug(projectSlug) {
  return regionProjectsIndex.find((project) => project.slug === projectSlug);
}

export function getProjectsByDeveloper(developerName) {
  if (!developerName) return [];
  return regionProjectsIndex.filter(
    (project) =>
      project.developer?.toLowerCase() === developerName.toLowerCase()
  );
}

export function getProjectsByType(propertyType) {
  if (!propertyType) return [];
  return regionProjectsIndex.filter(
    (project) => project.type?.toLowerCase() === propertyType.toLowerCase()
  );
}

export function getProjectsOutsideDubai() {
  return regionProjectsIndex.filter((project) => project.regionSlug === null);
}
