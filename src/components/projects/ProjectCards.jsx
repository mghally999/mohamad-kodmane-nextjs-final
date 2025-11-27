// src/components/projects/ProjectCards.js
"use client";

import React from "react";
import styles from "@/styles/projects/ProjectCards.module.css";

const ProjectCards = ({ projects, onResetFilters }) => {
  if (!projects || projects.length === 0) {
    return (
      <div className={styles.emptyState}>
        <h3>No projects found</h3>
        <p>Try adjusting your filters to see more results</p>
        <button className={styles.resetFilters} onClick={onResetFilters}>
          Reset all filters
        </button>
      </div>
    );
  }

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return styles.statusCompleted;
      case "Presale":
        return styles.statusPresale;
      case "Under Construction":
        return styles.statusUnderConstruction;
      case "Announced":
        return styles.statusAnnounced;
      case "On Sale":
        return styles.statusOnSale;
      default:
        return "";
    }
  };

  const formatPrice = (price) => {
    if (!price) return "Price on request";
    return `AED ${new Intl.NumberFormat().format(price)}`;
  };

  const getStatusText = (project) => {
    return project.devStatus || project.status || "Available";
  };

  return (
    <div className={styles.cardsGrid}>
      {projects.map((project, index) => (
        <div key={`${project.slug}-${index}`} className={styles.projectCard}>
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

          <div
            className={`${styles.statusBadge} ${getStatusClass(
              getStatusText(project)
            )}`}
          >
            {getStatusText(project)}
          </div>

          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div className={styles.developer}>{project.developer}</div>
              <h3 className={styles.projectName}>{project.name}</h3>
              <div className={styles.location}>
                📍 {project.location || "Dubai"}
              </div>
            </div>

            <div className={styles.cardDetails}>
              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Price</span>
                <span className={`${styles.detailValue} ${styles.price}`}>
                  {formatPrice(project.priceAED || project.startingPriceAED)}
                </span>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Type</span>
                <span className={styles.detailValue}>
                  {project.unitType || project.type}
                </span>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Size</span>
                <span className={styles.detailValue}>
                  {project.sizeSqft
                    ? `${new Intl.NumberFormat().format(project.sizeSqft)} sqft`
                    : "N/A"}
                </span>
              </div>

              <div className={styles.detailItem}>
                <span className={styles.detailLabel}>Completion</span>
                <span className={styles.detailValue}>
                  {project.completionYear || project.completionDate || "N/A"}
                </span>
              </div>
            </div>

            <div className={styles.bedrooms}>
              🛏️ {project.bedrooms}
              {project.minBedrooms !== undefined &&
                project.maxBedrooms !== undefined && (
                  <span className={styles.bedroomRange}>
                    (
                    {project.minBedrooms === project.maxBedrooms
                      ? `${project.minBedrooms} BR`
                      : `${project.minBedrooms}-${project.maxBedrooms} BR`}
                    )
                  </span>
                )}
            </div>

            {(project.hasPostHandover || project.postHandoverMonths) && (
              <div className={styles.postHandover}>
                ✅ Post-handover payment plan available
                {project.postHandoverMonths > 0 && (
                  <span> ({project.postHandoverMonths} months)</span>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
