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
 * MAIN INDEX - REAL PROJECTS ONLY (NO DUMMY / DEBUG ITEMS)
 *
 * Region mapping (from your project.location fields):
 * - Lumena Alta        → Business Bay, Dubai, UAE           → "business-bay"
 * - Central            → Sheikh Zayed Road, Dubai           → "sheikh-zayed-road"
 * - SkyParks           → Sheikh Zayed Road, Dubai           → "sheikh-zayed-road"
 * - SeaHaven Penthouse → Dubai Harbour / waterfront         → "dubai-harbour"
 * - Hartland 2 Villas  → MBR City, Dubai, UAE               → "mohammed-bin-rashid-city"
 * - Riviera Retails    → Meydan One, Dubai                  → "meydan-one"
 * - DAMAC Islands 2    → Dubailand, Dubai, UAE              → "dubailand"
 * - AquaCrest, Aquamont, Masaar 3, Al Sinniyyah Island
 *   → Umm Al Quwain / Sharjah (outside Dubai)               → regionSlug: null
 */

export const regionProjectsIndex = [
  // =================== COMMERCIAL / RETAIL ======================

  {
    // Lumena Alta – Business Bay
    ...toCard({
      slug: "lumenaalta",
      href: "/projects/commercial-retail/omniyat/lumenaalta",
      regionSlug: "business-bay",
      data: lumenaAltaData,
      bedrooms: "Office Spaces",
    }),
    // From project.startingPrice: 25_300_000
    priceAED: 25300000,
    startingPriceAED: 25300000,
    sizeSqft: 1100,
    devStatus: "Off-Plan",
    saleStatus: "On Sale",
    unitType: "Office Spaces",
    completionYear: 2030, // "Q3 2030"
    hasPostHandover: true,
    postHandoverMonths: 24,
    minBedrooms: 0,
    maxBedrooms: 0,
  },

  {
    // Riviera Retails – Meydan One (MBR City side)
    ...toCard({
      slug: "riviera-retails",
      href: "/projects/commercial-retail/azizi/riviera-retails",
      regionSlug: "meydan-one",
      data: rivieraRetailsData,
      bedrooms: "Retail Units",
    }),
    // From project.startingPrice: 2_795_000
    priceAED: 2795000,
    startingPriceAED: 2795000,
    sizeSqft: 1200,
    devStatus: "Ready & Off-Plan",
    saleStatus: "On Sale",
    unitType: "Retail Spaces",
    completionYear: 2026, // "Ready & Q1 2026"
    hasPostHandover: false,
    postHandoverMonths: 0,
    minBedrooms: 0,
    maxBedrooms: 0,
  },

  // =================== APARTMENTS ===============================

  {
    // Central by Sobha – Sheikh Zayed Road, Dubai
    ...toCard({
      slug: "central",
      href: "/projects/apartments/sobha/central",
      regionSlug: "sheikh-zayed-road",
      data: centralData,
      bedrooms: "1, 2 & 3 Bedrooms",
    }),
    // From project.startingPrice: "AED 1,784,354"
    priceAED: 1784354,
    startingPriceAED: 1784354,
    sizeSqft: 850,
    devStatus: "Off-Plan",
    saleStatus: "On Sale",
    unitType: "Apartments",
    completionYear: 2029, // "Q4 2029"
    hasPostHandover: true,
    postHandoverMonths: 36,
    minBedrooms: 1,
    maxBedrooms: 3,
  },

  {
    // SkyParks by Sobha – Sheikh Zayed Road, Dubai
    ...toCard({
      slug: "skyparks",
      href: "/projects/apartments/sobha/skyparks",
      regionSlug: "sheikh-zayed-road",
      data: skyParksData,
      bedrooms: "Studio, 1, 2 & 3 Bedrooms",
    }),
    // From project.startingPrice: "AED 2,880,250"
    priceAED: 2880250,
    startingPriceAED: 2880250,
    sizeSqft: 900,
    devStatus: "Off-Plan",
    saleStatus: "Start of Sales",
    unitType: "Apartments",
    completionYear: 2031, // "Q4 2031"
    hasPostHandover: true,
    postHandoverMonths: 48,
    minBedrooms: 0,
    maxBedrooms: 3,
  },

  {
    // AquaCrest – Downtown Umm Al Quwain (outside Dubai)
    ...toCard({
      slug: "aqua-crest",
      href: "/projects/apartments/sobha/aqua-crest",
      regionSlug: "umm-al-quwain",
      data: aquaCrestData,
      bedrooms: "1 & 2 Bedrooms",
    }),
    // From project.startingPrice: "AED 1,166,850"
    priceAED: 1166850,
    startingPriceAED: 1166850,
    sizeSqft: 700,
    devStatus: "Off-Plan",
    saleStatus: "On Sale",
    unitType: "Apartments",
    completionYear: 2029, // "Q3 2029"
    hasPostHandover: true,
    postHandoverMonths: 36,
    minBedrooms: 1,
    maxBedrooms: 2,
  },

  {
    // Aquamont – Downtown Umm Al Quwain (outside Dubai)
    ...toCard({
      slug: "aquamont",
      href: "/projects/apartments/sobha/aquamont",
      regionSlug: "umm-al-quwain",
      data: aquamontData,
      bedrooms: "1, 2 & 3 Bedrooms",
    }),
    // From project.startingPrice: "AED 1,112,127"
    priceAED: 1112127,
    startingPriceAED: 1112127,
    sizeSqft: 900,
    devStatus: "Off-Plan",
    saleStatus: "On Sale",
    unitType: "Apartments",
    completionYear: 2028, // "Q3 2028"
    hasPostHandover: true,
    postHandoverMonths: 30,
    minBedrooms: 1,
    maxBedrooms: 3,
  },

  // =================== PENTHOUSES ===============================

  {
    // Sobha SeaHaven Penthouse – Dubai Harbour / Waterfront
    ...toCard({
      slug: "seahaven-penthouse",
      href: "/projects/penthouses/sobha/seahaven-penthouse",
      regionSlug: "dubai-harbour",
      data: seahavenPenthouseData,
      bedrooms: "5 & 6 Bedrooms",
    }),
    // From project.startingPrice: 51_188_437
    priceAED: 51188437,
    startingPriceAED: 51188437,
    sizeSqft: 3500,
    devStatus: "Off-Plan",
    saleStatus: "On Sale",
    unitType: "Penthouse",
    completionYear: 2026, // "Q4 2026"
    hasPostHandover: false,
    postHandoverMonths: 0,
    minBedrooms: 5,
    maxBedrooms: 6,
  },

  // =================== VILLAS / TOWNHOUSES ======================

  {
    // Sobha Hartland 2 Villas – MBR City, Dubai
    ...toCard({
      slug: "hartland",
      href: "/projects/villas/sobha/hartland",
      regionSlug: "mohammed-bin-rashid-city",
      data: hartland2VillasData,
      bedrooms: "6 Bedrooms",
    }),
    // From project.startingPrice: "AED 60,639,950"
    priceAED: 60639950,
    startingPriceAED: 60639950,
    sizeSqft: 4000,
    devStatus: "Off-Plan",
    saleStatus: "On Sale",
    unitType: "Luxury Villas",
    completionYear: 2026, // "Q3 2026"
    hasPostHandover: true,
    postHandoverMonths: 60,
    minBedrooms: 6,
    maxBedrooms: 6,
  },

  {
    // Masaar 3 – Sharjah (outside Dubai)
    ...toCard({
      slug: "massar",
      href: "/projects/villas/arada/massar",
      regionSlug: "sharjah",
      data: massar3Data,
      bedrooms: "3 & 5 Bedrooms",
    }),
    // From project.startingPrice: 4_395_000
    priceAED: 4395000,
    startingPriceAED: 4395000,
    sizeSqft: 2600,
    devStatus: "Off-Plan",
    saleStatus: "On Sale",
    unitType: "Luxury Villas",
    completionYear: 2028, // "Q4 2028"
    hasPostHandover: true,
    postHandoverMonths: 36,
    minBedrooms: 3,
    maxBedrooms: 5,
  },

  {
    // Al Sinniyyah Island Villas – Umm Al Quwain (outside Dubai)
    ...toCard({
      slug: "al-sinniyyah-island",
      href: "/projects/villas/sobha/al-sinniyyah-island",
      regionSlug: "umm-al-quwain",
      data: alSinniyyahIslandData,
      bedrooms: "4–6 Bedrooms",
    }),
    // From project.startingPrice: "AED 10.7M"
    priceAED: 10700000,
    startingPriceAED: 10700000,
    sizeSqft: 3200,
    devStatus: "Off-Plan",
    saleStatus: "On Sale",
    unitType: "Luxury Villas",
    completionYear: 2030, // "2029–2030"
    hasPostHandover: true,
    postHandoverMonths: 48,
    minBedrooms: 4,
    maxBedrooms: 6,
  },

  {
    // DAMAC Islands 2 – Dubailand, Dubai
    ...toCard({
      slug: "damac-islands-2",
      href: "/projects/villas/damac/damac-islands-2",
      regionSlug: "dubailand",
      data: damacIslands2Data,
      bedrooms: "4–6 Bedrooms",
    }),
    // From project.startingPrice: "AED 2,750,000"
    priceAED: 2750000,
    startingPriceAED: 2750000,
    sizeSqft: 2800,
    devStatus: "Off-Plan",
    saleStatus: "Announced",
    unitType: "Waterfront Townhouses & Villas",
    completionYear: 2030, // "30 June 2030"
    hasPostHandover: false,
    postHandoverMonths: 0,
    minBedrooms: 4,
    maxBedrooms: 6,
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
