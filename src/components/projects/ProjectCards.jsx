"use client";

import React from "react";
import styles from "@/styles/projects/ProjectCards.module.css";
import Link from "next/link";

const ProjectCards = ({ projects, onResetFilters }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>No Projects Found</h3>
        <p>Try adjusting your filters to see more results</p>
        <button className={styles.resetFilters} onClick={onResetFilters}>
          Reset All Filters
        </button>
      </div>
    );
  }

  const getStatusClass = (status) => {
    const statusMap = {
      Completed: styles.statusCompleted,
      Presale: styles.statusPresale,
      "Under Construction": styles.statusUnderConstruction,
      Announced: styles.statusAnnounced,
      "On Sale": styles.statusOnSale,
      "Off Plan": styles.statusOnSale,
      Ready: styles.statusCompleted,
    };
    return statusMap[status] || "";
  };

  const formatPrice = (price) => {
    if (!price) return "Price on request";
    if (price < 1000000) {
      return `${(price / 1000).toFixed(0)}K`;
    }
    return `${(price / 1000000).toFixed(1)}M`;
  };

  const getStatusText = (project) => {
    return project.devStatus || project.status || "Available";
  };

  const getBedroomText = (project) => {
    if (
      project.minBedrooms !== undefined &&
      project.maxBedrooms !== undefined
    ) {
      if (project.minBedrooms === project.maxBedrooms) {
        return `${project.minBedrooms} BR`;
      }
      return `${project.minBedrooms}-${project.maxBedrooms} BR`;
    }
    return project.bedrooms || "Studio";
  };

  const getProjectUrl = (project) => {
    // Generate proper URL for the project
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

  return (
    <div className={styles.cardsGrid}>
      {projects.map((project, index) => {
        const projectUrl = getProjectUrl(project);

        return (
          <div
            key={`${project.slug || project.id}-${index}`}
            className={styles.projectCard}
          >
            {/* Image Section */}
            {project.image ? (
              <img
                src={project.image}
                alt={project.name}
                className={styles.cardImage}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : null}

            {!project.image && (
              <div className={styles.imagePlaceholder}>
                {project.name || "Project Image"}
              </div>
            )}

            {/* Status Badge */}
            <div
              className={`${styles.statusBadge} ${getStatusClass(
                getStatusText(project)
              )}`}
            >
              {getStatusText(project)}
            </div>

            {/* Content Section */}
            <div className={styles.cardContent}>
              {/* Header */}
              <div className={styles.cardHeader}>
                <div className={styles.developer}>{project.developer}</div>
                <h3 className={styles.projectName}>{project.name}</h3>
                <div className={styles.location}>
                  <span>📍</span>
                  <span>{project.location || "Dubai"}</span>
                </div>
              </div>

              {/* Details Grid */}
              <div className={styles.cardDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Price From</span>
                  <span className={`${styles.detailValue} ${styles.price}`}>
                    {formatPrice(project.priceAED || project.startingPriceAED)}
                  </span>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Type</span>
                  <span className={styles.detailValue}>
                    {project.unitType || project.type || "Apartment"}
                  </span>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Size</span>
                  <span className={styles.detailValue}>
                    {project.sizeSqft
                      ? `${new Intl.NumberFormat().format(
                          project.sizeSqft
                        )} sqft`
                      : "N/A"}
                  </span>
                </div>

                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Completion</span>
                  <span className={styles.detailValue}>
                    {project.completionYear || project.completionDate || "TBA"}
                  </span>
                </div>
              </div>

              {/* Bedrooms */}
              <div className={styles.bedrooms}>
                <span>🛏️</span>
                <span>Bedrooms:</span>
                <span className={styles.bedroomRange}>
                  {getBedroomText(project)}
                </span>
              </div>

              {/* Post-Handover */}
              {(project.hasPostHandover || project.postHandoverMonths) && (
                <div className={styles.postHandover}>
                  <span>✅</span>
                  <span>Post-handover plan available</span>
                  {project.postHandoverMonths > 0 && (
                    <span> ({project.postHandoverMonths} months)</span>
                  )}
                </div>
              )}

              {/* View Project Button */}
              <Link href={projectUrl} className={styles.viewButton}>
                <span className={styles.buttonIcon}>→</span>
                <span>View Project Details</span>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCards;
