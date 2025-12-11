// src/components/projects/ProjectCards.jsx
"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/projects/ProjectCards.module.css";

const STATUS_TRANSLATION_KEYS = {
  Completed: "projects.status.completed",
  Presale: "projects.status.presale",
  "Under Construction": "projects.status.underConstruction",
  Announced: "projects.status.announced",
  "On Sale": "projects.status.onSale",
  "Off Plan": "projects.status.offPlan",
  "Off-Plan": "projects.status.offPlan",
  Ready: "projects.status.ready",
  "Ready & Off-Plan": "projects.status.readyAndOffPlan",
};

const STATUS_CLASS_MAP = {
  Completed: styles.statusCompleted,
  Presale: styles.statusPresale,
  "Under Construction": styles.statusUnderConstruction,
  Announced: styles.statusAnnounced,
  "On Sale": styles.statusOnSale,
  "Off Plan": styles.statusOnSale,
  "Off-Plan": styles.statusOnSale,
  Ready: styles.statusCompleted,
  "Ready & Off-Plan": styles.statusOnSale,
};

// Developer name → translation key
const DEVELOPER_TRANSLATION_KEYS = {
  "Sobha Realty": "developers.sobhaRealty",
  Arada: "developers.arada",
  "DAMAC Properties": "developers.damacProperties",
  "Azizi Developments": "developers.aziziDevelopments",
  Omniyat: "developers.omniyat",
};

// Project name → translation key
const PROJECT_TRANSLATION_KEYS = {
  "Sobha SkyParks": "projectNames.sobhaSkyParks",
  "Sobha AquaCrest": "projectNames.sobhaAquaCrest",
  "Sobha Central": "projectNames.sobhaCentral",
  "Sobha Aquamont": "projectNames.sobhaAquamont",
  "Sobha Hartland Villas": "projectNames.sobhaHartland2Villas",
  "Al Sinniyyah Island": "projectNames.sobhaAlSinniyyahIsland",
  Masaar: "projectNames.aradaMassar3",
  "Damac Islands 2": "projectNames.damacIslands2",
  "Riviera Retails": "projectNames.aziziRivieraRetails",
  "Sobha SeaHaven Penthouse": "projectNames.sobhaSeaHavenPenthouse",
  // If Lumena Alta key spelling differs, fallback will show English name
  "Lumena Alta": "projectNames.luminaAlta",
};

// Unit type → translation key
const UNIT_TYPE_TRANSLATION_KEYS = {
  Apartments: "categories.apartments",
  "Luxury Villas": "categories.villas",
  Villas: "categories.villas",
  "Waterfront Townhouses & Villas": "categories.villas",
  Penthouse: "categories.penthouses",
  Penthouses: "categories.penthouses",
  "Commercial Retail": "categories.commercial",
  "Retail Spaces": "categories.commercial",
  "Retail Units": "categories.commercial",
  "Office Spaces": "categories.commercial",
};

const ProjectCards = ({ projects, onResetFilters }) => {
  const { t, locale } = useLanguage();

  // ----------------------------------------
  // Helpers
  // ----------------------------------------

  const getStatusClass = (status) => STATUS_CLASS_MAP[status] || "";

  const getStatusLabel = (status) => {
    if (!status) {
      return t("projects.status.available") || "Available";
    }
    const key = STATUS_TRANSLATION_KEYS[status] || "projects.status.available";
    return t(key) || status;
  };

  const formatPrice = (price) => {
    if (!price) {
      return t("projects.cards.priceOnRequest") || "Price on request";
    }

    const absPrice = Number(price) || 0;

    if (absPrice < 1_000_000) {
      const value = Math.round(absPrice / 1_000);
      return `${value}K`;
    }

    const value = (absPrice / 1_000_000).toFixed(1);
    return `${value}M`;
  };

  const getStatusText = (project) =>
    project.devStatus || project.status || "Available";

  const getProjectUrl = (project) => {
    if (project.slug && project.category && project.developerSlug) {
      return `/projects/${project.category}/${project.developerSlug}/${project.slug}`;
    }
    if (project.slug && project.developer) {
      return `/projects/${project.developer
        .toLowerCase()
        .replace(/\s+/g, "-")}/${project.slug}`;
    }
    return "#";
  };

  const formatSqft = (sizeSqft) => {
    if (!sizeSqft) return t("projects.cards.sizeNA") || "N/A";

    const number = new Intl.NumberFormat(
      locale === "ar" ? "ar-AE" : "en-US"
    ).format(sizeSqft);

    const unit = t("projects.cards.sqft") || "sqft";
    return `${number} ${unit}`;
  };

  const getDeveloperLabel = (name) => {
    if (!name) return "";
    const key = DEVELOPER_TRANSLATION_KEYS[name];
    return (key && t(key)) || name;
  };

  const getProjectNameLabel = (name) => {
    if (!name) return "";
    const key = PROJECT_TRANSLATION_KEYS[name];
    return (key && t(key)) || name;
  };

  const getUnitTypeLabel = (project) => {
    const raw =
      project.unitType ||
      project.type ||
      t("projects.cards.typeDefault") ||
      "Apartment";

    const key = UNIT_TYPE_TRANSLATION_KEYS[raw];
    return (key && t(key)) || raw;
  };

  const defaultLocation = t("projects.cards.defaultLocation") || "Dubai";

  // ----------------------------------------
  // Empty state
  // ----------------------------------------

  if (!projects || projects.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>{t("projects.empty.title") || "No Projects Found"}</h3>
        <p>
          {t("projects.empty.subtitle") ||
            "Try adjusting your filters to see more results"}
        </p>
        <button className={styles.resetFilters} onClick={onResetFilters}>
          {t("projects.empty.resetButton") || "Reset All Filters"}
        </button>
      </div>
    );
  }

  // ----------------------------------------
  // Cards
  // ----------------------------------------

  return (
    <div className={styles.cardsGrid}>
      {projects.map((project, index) => {
        const projectUrl = getProjectUrl(project);
        const rawStatus = getStatusText(project);
        const statusLabel = getStatusLabel(rawStatus);
        const developerLabel = getDeveloperLabel(project.developer);
        const projectNameLabel = getProjectNameLabel(project.name);
        const unitTypeLabel = getUnitTypeLabel(project);

        return (
          <div
            key={`${project.slug || project.id}-${index}`}
            className={styles.projectCard}
          >
            {/* Image Section */}
            {project.image ? (
              <img
                src={project.image}
                alt={projectNameLabel || project.name}
                className={styles.cardImage}
                onError={(e) => {
                  e.target.style.display = "none";
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = "flex";
                  }
                }}
              />
            ) : null}

            {!project.image && (
              <div className={styles.imagePlaceholder}>
                {projectNameLabel ||
                  t("projects.cards.imageFallback") ||
                  "Project"}
              </div>
            )}

            {/* Status Badge */}
            <div
              className={`${styles.statusBadge} ${getStatusClass(rawStatus)}`}
            >
              {statusLabel}
            </div>

            {/* Content Section */}
            <div className={styles.cardContent}>
              {/* Header */}
              <div className={styles.cardHeader}>
                <div className={styles.developer}>{developerLabel}</div>
                <h3 className={styles.projectName}>{projectNameLabel}</h3>
                <div className={styles.location}>
                  <span>📍</span>
                  <span>{project.location || defaultLocation}</span>
                </div>
              </div>

              {/* Details Grid */}
              <div className={styles.cardDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>
                    {t("projects.cards.priceFrom") || "Price From"}
                  </span>
                  <span className={`${styles.detailValue} ${styles.price}`}>
                    {formatPrice(
                      project.priceAED ||
                        project.startingPriceAED ||
                        project.startingPrice
                    )}
                  </span>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>
                    {t("projects.cards.typeLabel") || "Type"}
                  </span>
                  <span className={styles.detailValue}>{unitTypeLabel}</span>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>
                    {t("projects.cards.sizeLabel") || "Size"}
                  </span>
                  <span className={styles.detailValue}>
                    {formatSqft(project.sizeSqft)}
                  </span>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>
                    {t("projects.cards.completionLabel") || "Completion"}
                  </span>
                  <span className={styles.detailValue}>
                    {project.completionYear ||
                      project.completionDate ||
                      t("projects.cards.completionTBA") ||
                      "TBA"}
                  </span>
                </div>
              </div>

              {/* Optional CTA – already localised */}
              {/* <Link href={projectUrl} className={styles.viewButton}>
                <span className={styles.buttonIcon}>→</span>
                <span>
                  {t("projects.cards.viewDetails") || "View Project Details"}
                </span>
              </Link> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCards;
