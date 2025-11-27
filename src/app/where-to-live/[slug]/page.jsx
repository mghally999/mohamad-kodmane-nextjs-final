// Example usage in your page component
"use client";

import React, { useState, useMemo } from "react";
import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";
import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";
import ProjectCards from "@/components/projects/ProjectCards";
import { regionProjectsIndex } from "@/data/regionProjectsIndex";
import AreaGuideHero from "@/components/where-to-live/AreaGuideHero";
import AreaNarrative from "@/components/where-to-live/AreaNarrative";
import MarketInsights from "@/components/where-to-live/MarketInsights";
import styles from "@/styles/RegionPage.module.css";
import { whereToLiveRegionDetails } from "@/data/whereToLiveData/whereToLiveRegionDetails";
import { useParams } from "next/navigation";
import LocationFAQ from "@/components/where-to-live/LocationFAQ";

export default function ProjectsPage() {
  const { slug } = useParams();

  const [filters, setFilters] = useState({
    search: "",
    minPrice: "",
    maxPrice: "",
    minSize: "",
    maxSize: "",
    devStatus: [],
    unitTypes: [],
    bedrooms: [],
    completionYears: [],
    postHandoverOnly: false,
    minPostHandoverMonths: 1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const regionData = whereToLiveRegionDetails[slug];

  // 100% ACCURATE REAL-TIME FILTERING
  const filteredProjects = useMemo(() => {
    return regionProjectsIndex.filter((project) => {
      // Region filter - only show projects for current region
      if (slug && project.regionSlug !== slug) return false;

      // Search filter - case insensitive search across multiple fields
      if (filters.search && filters.search.trim() !== "") {
        const searchTerm = filters.search.toLowerCase().trim();
        const searchableFields = [
          project.name,
          project.developer,
          project.location,
          project.bedrooms,
          project.unitType,
        ]
          .filter(Boolean)
          .map((field) => field.toLowerCase());

        const matchesSearch = searchableFields.some((field) =>
          field.includes(searchTerm)
        );
        if (!matchesSearch) return false;
      }

      // Price filter - handle empty values and proper number comparison
      const projectPrice = project.priceAED || project.startingPriceAED || 0;
      if (filters.minPrice && filters.minPrice !== "") {
        if (projectPrice < Number(filters.minPrice)) return false;
      }
      if (filters.maxPrice && filters.maxPrice !== "") {
        if (projectPrice > Number(filters.maxPrice)) return false;
      }

      // Size filter - handle empty values and proper number comparison
      const projectSize = project.sizeSqft || 0;
      if (filters.minSize && filters.minSize !== "") {
        if (projectSize < Number(filters.minSize)) return false;
      }
      if (filters.maxSize && filters.maxSize !== "") {
        if (projectSize > Number(filters.maxSize)) return false;
      }

      // Development status filter - exact match required
      if (filters.devStatus.length > 0) {
        if (!filters.devStatus.includes(project.devStatus)) return false;
      }

      // Unit type filter - exact match required
      if (filters.unitTypes.length > 0) {
        if (!filters.unitTypes.includes(project.unitType)) return false;
      }

      // Bedrooms filter - handle range matching
      if (filters.bedrooms.length > 0) {
        const hasMatchingBedroom = filters.bedrooms.some((bedroom) => {
          const minBeds = project.minBedrooms || 0;
          const maxBeds = project.maxBedrooms || project.minBedrooms || 0;
          // For 5+ BR selection, match any project with 5 or more bedrooms
          if (bedroom === 5) {
            return minBeds >= 5;
          }
          return bedroom >= minBeds && bedroom <= maxBeds;
        });
        if (!hasMatchingBedroom) return false;
      }

      // Completion year filter - exact match required
      if (filters.completionYears.length > 0) {
        if (!filters.completionYears.includes(project.completionYear))
          return false;
      }

      // Post handover filter - boolean check
      if (filters.postHandoverOnly && !project.hasPostHandover) return false;

      // Post handover months filter - numeric comparison
      if (filters.minPostHandoverMonths > 1) {
        if (
          !project.hasPostHandover ||
          project.postHandoverMonths < filters.minPostHandoverMonths
        ) {
          return false;
        }
      }

      return true;
    });
  }, [filters, slug]); // Real-time updates when any filter changes

  const handleResetFilters = () => {
    setFilters({
      search: "",
      minPrice: "",
      maxPrice: "",
      minSize: "",
      maxSize: "",
      devStatus: [],
      unitTypes: [],
      bedrooms: [],
      completionYears: [],
      postHandoverOnly: false,
      minPostHandoverMonths: 1,
    });
  };

  // Count active filters for display
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.search && filters.search.trim() !== "") count++;
    if (filters.minPrice && filters.minPrice !== "") count++;
    if (filters.maxPrice && filters.maxPrice !== "") count++;
    if (filters.minSize && filters.minSize !== "") count++;
    if (filters.maxSize && filters.maxSize !== "") count++;
    if (filters.devStatus.length > 0) count++;
    if (filters.unitTypes.length > 0) count++;
    if (filters.bedrooms.length > 0) count++;
    if (filters.completionYears.length > 0) count++;
    if (filters.postHandoverOnly) count++;
    if (filters.minPostHandoverMonths > 1) count++;
    return count;
  }, [filters]);

  return (
    <>
      <AreaGuideHero regionData={regionData} />
      <AreaNarrative regionData={regionData} />
      <MarketInsights regionData={regionData} />

      {/* Real-time filter bar */}
      <ProjectsFiltersBar
        filters={filters}
        onChange={setFilters}
        onOpenFullFilters={() => setIsModalOpen(true)}
      />

      {/* Modal with real-time updates */}
      <ProjectsFiltersModal
        isOpen={isModalOpen}
        filters={filters}
        onChange={setFilters}
        onClose={() => setIsModalOpen(false)}
        onReset={handleResetFilters}
        totalProjects={filteredProjects.length}
      />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
        }}
      >
        {/* Enhanced results counter */}
        <div
          style={{
            padding: "20px 0",
            fontSize: "15px",
            color: "#64748b",
            borderBottom: "1.5px solid #e2e8f0",
            marginBottom: "28px",
            fontWeight: "500",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            Showing {filteredProjects.length} projects in{" "}
            {regionData?.name || "Dubai"}
            {activeFilterCount > 0 &&
              ` (${activeFilterCount} filter${
                activeFilterCount !== 1 ? "s" : ""
              } applied)`}
          </span>

          {activeFilterCount > 0 && (
            <button
              onClick={handleResetFilters}
              style={{
                background: "none",
                border: "1px solid #dc2626",
                color: "#dc2626",
                padding: "6px 12px",
                borderRadius: "6px",
                fontSize: "13px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Real-time project cards */}
        <ProjectCards
          projects={filteredProjects}
          onResetFilters={handleResetFilters}
        />
      </div>
      <MarketInsights regionData={regionData} />
      <LocationFAQ regionData={regionData} />
    </>
  );
}
