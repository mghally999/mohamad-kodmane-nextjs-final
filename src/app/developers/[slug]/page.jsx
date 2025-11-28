"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";
import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";
import ProjectCards from "@/components/projects/ProjectCards";
import DeveloperHero from "@/components/developer/DeveloperHero";
import DeveloperAbout from "@/components/developer/DeveloperAbout";
import DeveloperStats from "@/components/developer/DeveloperStats";

import { getProjectsByDeveloper } from "@/data/regionProjectsIndex";
import { getDeveloperBySlug } from "@/data/developersData/developerDetails";

import styles from "@/styles/developer/DeveloperPage.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function DeveloperPage() {
  const { slug } = useParams();
  const developer = getDeveloperBySlug(slug);

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for smooth animations
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const developerProjects = useMemo(
    () => getProjectsByDeveloper(developer?.name || ""),
    [developer?.name]
  );

  const filteredProjects = useMemo(() => {
    if (!developerProjects) return [];

    return developerProjects.filter((project) => {
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
          .map((f) => f.toLowerCase());

        const matchesSearch = searchableFields.some((f) =>
          f.includes(searchTerm)
        );
        if (!matchesSearch) return false;
      }

      const projectPrice = project.priceAED || project.startingPriceAED || 0;
      if (filters.minPrice && filters.minPrice !== "") {
        if (projectPrice < Number(filters.minPrice)) return false;
      }
      if (filters.maxPrice && filters.maxPrice !== "") {
        if (projectPrice > Number(filters.maxPrice)) return false;
      }

      const projectSize = project.sizeSqft || 0;
      if (filters.minSize && filters.minSize !== "") {
        if (projectSize < Number(filters.minSize)) return false;
      }
      if (filters.maxSize && filters.maxSize !== "") {
        if (projectSize > Number(filters.maxSize)) return false;
      }

      if (filters.devStatus.length > 0) {
        if (!filters.devStatus.includes(project.devStatus)) return false;
      }

      if (filters.unitTypes.length > 0) {
        if (!filters.unitTypes.includes(project.unitType)) return false;
      }

      if (filters.bedrooms.length > 0) {
        const hasMatchingBedroom = filters.bedrooms.some((bedroom) => {
          const minBeds = project.minBedrooms || 0;
          const maxBeds = project.maxBedrooms || project.minBedrooms || 0;
          if (bedroom === 5) {
            return minBeds >= 5;
          }
          return bedroom >= minBeds && bedroom <= maxBeds;
        });

        if (!hasMatchingBedroom) return false;
      }

      if (filters.completionYears.length > 0) {
        if (!filters.completionYears.includes(project.completionYear))
          return false;
      }

      if (filters.postHandoverOnly && !project.hasPostHandover) return false;

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
  }, [developerProjects, filters]);

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

  if (!developer) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <h1>Developer Not Found</h1>
          <p>
            The developer you're looking for doesn't exist in our portfolio.
          </p>
          <div className={styles.notFoundOrnament}></div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.loadingOrnament}></div>
        <div className={styles.loadingText}>
          <span>Loading</span>
          <div className={styles.loadingDots}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <DeveloperHero developer={developer} />

      <div className={styles.contentWrapper}>
        <DeveloperAbout developer={developer} />
        <DeveloperStats developer={developer} />

        <section className={styles.projectsSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.headerOrnament}></div>
            <h2 className={styles.sectionTitle}>Portfolio Collection</h2>
            <p className={styles.sectionSubtitle}>
              Curated selection of {developer.name}'s exceptional developments
            </p>
          </div>

          <ProjectsFiltersBar
            filters={filters}
            onChange={setFilters}
            onOpenFullFilters={() => setIsModalOpen(true)}
          />

          <ProjectsFiltersModal
            isOpen={isModalOpen}
            filters={filters}
            onChange={setFilters}
            onClose={() => setIsModalOpen(false)}
            onReset={handleResetFilters}
            totalProjects={filteredProjects.length}
          />

          <div className={styles.projectsContent}>
            <div className={styles.resultsHeader}>
              <div className={styles.resultsInfo}>
                <span className={styles.resultsCount}>
                  {filteredProjects.length}
                </span>
                <span className={styles.resultsLabel}>
                  {filteredProjects.length === 1
                    ? "Exclusive Project"
                    : "Signature Developments"}
                </span>
                {activeFilterCount > 0 && (
                  <div className={styles.filtersBadge}>
                    {activeFilterCount}{" "}
                    {activeFilterCount === 1 ? "Filter" : "Filters"} Active
                  </div>
                )}
              </div>

              {activeFilterCount > 0 && (
                <button
                  onClick={handleResetFilters}
                  className={styles.clearFiltersBtn}
                >
                  <span>Clear All</span>
                  <div className={styles.btnOrnament}></div>
                </button>
              )}
            </div>

            <ProjectCards
              projects={filteredProjects}
              onResetFilters={handleResetFilters}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
