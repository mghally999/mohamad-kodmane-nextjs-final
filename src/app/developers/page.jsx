"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import { developersDetails } from "@/data/developersData/developerDetails";
import { getProjectsByDeveloper } from "@/data/regionProjectsIndex";
import ProjectsFiltersBar from "@/components/filters/ProjectsFiltersBar";
import ProjectsFiltersModal from "@/components/filters/ProjectsFiltersModal";
import ProjectCards from "@/components/projects/ProjectCards";
import DeveloperHero from "@/components/developer/DeveloperHero";
import DeveloperAbout from "@/components/developer/DeveloperAbout";
import DeveloperStats from "@/components/developer/DeveloperStats";
import styles from "@/styles/developer/DevelopersDashboard.module.css";

const INITIAL_FILTERS = {
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
};

export default function DevelopersDashboardPage() {
  const developersArray = Object.values(developersDetails || {});
  const [activeDeveloperSlug, setActiveDeveloperSlug] = useState(
    developersArray[0]?.slug || ""
  );
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const mainContentRef = useRef(null);

  const activeDeveloper = developersDetails[activeDeveloperSlug];

  // Filter developers for sidebar search
  const filteredDevelopers = useMemo(() => {
    if (!sidebarSearch.trim()) return developersArray;

    const searchTerm = sidebarSearch.toLowerCase().trim();
    return developersArray.filter(
      (dev) =>
        dev.name.toLowerCase().includes(searchTerm) ||
        (dev.tagline && dev.tagline.toLowerCase().includes(searchTerm))
    );
  }, [developersArray, sidebarSearch]);

  const projectsForDeveloper = useMemo(() => {
    if (!activeDeveloper?.name) return [];
    return getProjectsByDeveloper(activeDeveloper.name);
  }, [activeDeveloper?.name]);

  const filteredProjects = useMemo(() => {
    return projectsForDeveloper.filter((project) => {
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

      const projectPrice = project.priceAED || project.startingPriceAED || 0;
      if (filters.minPrice && projectPrice < Number(filters.minPrice))
        return false;
      if (filters.maxPrice && projectPrice > Number(filters.maxPrice))
        return false;

      const projectSize = project.sizeSqft || 0;
      if (filters.minSize && projectSize < Number(filters.minSize))
        return false;
      if (filters.maxSize && projectSize > Number(filters.maxSize))
        return false;

      if (
        filters.devStatus.length > 0 &&
        !filters.devStatus.includes(project.devStatus)
      )
        return false;
      if (
        filters.unitTypes.length > 0 &&
        !filters.unitTypes.includes(project.unitType)
      )
        return false;

      if (filters.bedrooms.length > 0) {
        const hasMatchingBedroom = filters.bedrooms.some((bedroom) => {
          const minBeds = project.minBedrooms || 0;
          const maxBeds = project.maxBedrooms || project.minBedrooms || 0;
          if (bedroom === 5) return minBeds >= 5;
          return bedroom >= minBeds && bedroom <= maxBeds;
        });
        if (!hasMatchingBedroom) return false;
      }

      if (
        filters.completionYears.length > 0 &&
        !filters.completionYears.includes(project.completionYear)
      )
        return false;
      if (filters.postHandoverOnly && !project.hasPostHandover) return false;
      if (
        filters.minPostHandoverMonths > 1 &&
        (!project.hasPostHandover ||
          project.postHandoverMonths < filters.minPostHandoverMonths)
      )
        return false;

      return true;
    });
  }, [filters, projectsForDeveloper]);

  const handleResetFilters = () => setFilters(INITIAL_FILTERS);

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

  const handleDeveloperClick = (slug) => {
    setActiveDeveloperSlug(slug);
    setFilters(INITIAL_FILTERS);
    setIsMobileSidebarOpen(false);

    // Scroll to top when switching developers
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  };

  const clearSidebarSearch = () => {
    setSidebarSearch("");
  };

  // Close mobile sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileSidebarOpen && !sidebarRef.current?.contains(event.target)) {
        setIsMobileSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileSidebarOpen]);

  if (!activeDeveloper) {
    return (
      <div className={styles.emptyState}>
        <h2>No developers configured</h2>
        <p>Add entries in developersDetails to use this page.</p>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      {/* MOBILE SIDEBAR TOGGLE */}
      <button
        className={styles.mobileSidebarToggle}
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      >
        <span className={styles.toggleIcon}>☰</span>
        <span>Developers</span>
      </button>

      {/* LUXURY GLASS SIDEBAR WITH INTERNAL SCROLL */}
      <aside
        ref={sidebarRef}
        className={`${styles.sidebar} ${
          isMobileSidebarOpen ? styles.sidebarMobileOpen : ""
        }`}
      >
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarLabel}>Developers</span>
          <div className={styles.sidebarOrnament}></div>

          {/* MOBILE CLOSE BUTTON */}
          <button
            className={styles.mobileCloseButton}
            onClick={() => setIsMobileSidebarOpen(false)}
          >
            ×
          </button>
        </div>

        {/* SIDEBAR SEARCH */}
        <div className={styles.sidebarSearchContainer}>
          <div className={styles.searchInputWrapper}>
            <svg
              className={styles.searchIcon}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search developers..."
              value={sidebarSearch}
              onChange={(e) => setSidebarSearch(e.target.value)}
              className={styles.sidebarSearchInput}
            />
            {sidebarSearch && (
              <button
                onClick={clearSidebarSearch}
                className={styles.clearSearchButton}
              >
                ×
              </button>
            )}
          </div>
          {sidebarSearch && (
            <div className={styles.searchResultsInfo}>
              {filteredDevelopers.length} developer
              {filteredDevelopers.length !== 1 ? "s" : ""} found
            </div>
          )}
        </div>

        {/* SCROLLABLE DEVELOPERS LIST */}
        <div className={styles.sidebarListContainer}>
          <div className={styles.sidebarList}>
            {filteredDevelopers.length > 0 ? (
              filteredDevelopers.map((dev) => (
                <button
                  key={dev.slug}
                  type="button"
                  onClick={() => handleDeveloperClick(dev.slug)}
                  className={`${styles.developerItem} ${
                    dev.slug === activeDeveloperSlug
                      ? styles.developerItemActive
                      : ""
                  }`}
                >
                  {dev.logo && (
                    <div className={styles.developerLogoWrapper}>
                      <img
                        src={dev.logo}
                        alt={dev.name}
                        className={styles.developerLogo}
                      />
                    </div>
                  )}
                  <div className={styles.developerText}>
                    <span className={styles.developerName}>{dev.name}</span>
                    {dev.tagline && (
                      <span className={styles.developerTagline}>
                        {dev.tagline}
                      </span>
                    )}
                  </div>
                  <div className={styles.developerIndicator}></div>
                </button>
              ))
            ) : (
              <div className={styles.noResults}>
                <span>No developers found</span>
                <button
                  onClick={clearSidebarSearch}
                  className={styles.clearSearchText}
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>

        {/* SIDEBAR FOOTER */}
        <div className={styles.sidebarFooter}>
          <div className={styles.developerCount}>
            {filteredDevelopers.length} of {developersArray.length} developers
          </div>
          <div className={styles.glowOrb}></div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA WITH FULL DEVELOPER PAGE */}
      <main ref={mainContentRef} className={styles.main}>
        {/* DEVELOPER HERO SECTION */}
        <DeveloperHero developer={activeDeveloper} />

        {/* DEVELOPER ABOUT SECTION */}
        <DeveloperAbout developer={activeDeveloper} />

        {/* DEVELOPER STATS SECTION */}
        <DeveloperStats developer={activeDeveloper} />

        {/* PROJECTS SECTION */}
        <section className={styles.projectsSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.headerOrnament}></div>
            <h2 className={styles.sectionTitle}>Portfolio Collection</h2>
            <p className={styles.sectionSubtitle}>
              Curated selection of {activeDeveloper.name}'s exceptional
              developments
            </p>
          </div>

          {/* FILTERS */}
          <div className={styles.filtersWrapper}>
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
          </div>

          {/* RESULTS HEADER */}
          <div className={styles.resultsHeader}>
            <div className={styles.resultsInfo}>
              <span className={styles.resultsCount}>
                <strong>{filteredProjects.length}</strong> projects by{" "}
                <strong>{activeDeveloper.name}</strong>
              </span>
              {activeFilterCount > 0 && (
                <span className={styles.filterCount}>
                  ({activeFilterCount} filter
                  {activeFilterCount !== 1 ? "s" : ""} applied)
                </span>
              )}
            </div>

            {activeFilterCount > 0 && (
              <button
                type="button"
                onClick={handleResetFilters}
                className={styles.clearFiltersBtn}
              >
                <span>Clear all</span>
                <div className={styles.clearIcon}>×</div>
              </button>
            )}
          </div>

          {/* PROJECT CARDS */}
          <ProjectCards
            projects={filteredProjects}
            onResetFilters={handleResetFilters}
          />
        </section>
      </main>

      {/* MOBILE OVERLAY */}
      {isMobileSidebarOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}
    </div>
  );
}
