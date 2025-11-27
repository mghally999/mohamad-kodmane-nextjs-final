// src/components/filter/ProjectsFiltersModal.js
"use client";

import React, { useEffect, useState } from "react";
import styles from "@/styles/filter/ProjectsFiltersModal.module.css";

const bedroomOptions = [
  { label: "Studio", value: 0 },
  { label: "1 BR", value: 1 },
  { label: "2 BR", value: 2 },
  { label: "3 BR", value: 3 },
  { label: "4 BR", value: 4 },
  { label: "5+ BR", value: 5 },
];

const devStatusOptions = ["Completed", "Presale", "Under Construction"];

const unitTypeOptions = [
  "Apartments",
  "Villa",
  "Townhouse",
  "Duplex",
  "Penthouse",
  "Retail",
];

const completionYearOptions = [2025, 2026, 2027, 2028, 2029, 2030];

// Luxury Dubai property ranges
const PRICE_RANGE = { min: 0, max: 100000000 }; // 50 million AED for luxury properties
const SIZE_RANGE = { min: 0, max: 100000 }; // 50,000 sqft for luxury villas

// Utility functions
const formatNumber = (num) => {
  if (!num && num !== 0) return "";
  return new Intl.NumberFormat().format(num);
};

const parseFormattedNumber = (str) => {
  const cleaned = str.replace(/,/g, "").replace(/\s/g, "");
  return cleaned ? parseInt(cleaned) : "";
};

const RangeSlider = ({ min, max, values, onChange, formatLabel }) => {
  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = parseInt(value);

    if (index === 0 && newValues[0] > newValues[1]) {
      newValues[1] = newValues[0];
    } else if (index === 1 && newValues[1] < newValues[0]) {
      newValues[0] = newValues[1];
    }

    onChange(newValues);
  };

  return (
    <div className={styles.rangeSlider}>
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min={min}
          max={max}
          value={values[0]}
          onChange={(e) => handleChange(0, e.target.value)}
          className={styles.slider}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={values[1]}
          onChange={(e) => handleChange(1, e.target.value)}
          className={styles.slider}
        />
      </div>
      <div className={styles.sliderValues}>
        <span>
          {formatLabel ? formatLabel(values[0]) : formatNumber(values[0])}
        </span>
        <span>
          {formatLabel ? formatLabel(values[1]) : formatNumber(values[1])}
        </span>
      </div>
    </div>
  );
};

export default function ProjectsFiltersModal({
  isOpen,
  filters,
  onChange,
  onClose,
  onReset,
  totalProjects,
}) {
  const [priceRange, setPriceRange] = useState([
    PRICE_RANGE.min,
    PRICE_RANGE.max,
  ]);
  const [sizeRange, setSizeRange] = useState([SIZE_RANGE.min, SIZE_RANGE.max]);

  useEffect(() => {
    if (!isOpen) return;
    const handle = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (filters.minPrice !== undefined || filters.maxPrice !== undefined) {
      setPriceRange([
        filters.minPrice || PRICE_RANGE.min,
        filters.maxPrice || PRICE_RANGE.max,
      ]);
    }
  }, [filters.minPrice, filters.maxPrice]);

  useEffect(() => {
    if (filters.minSize !== undefined || filters.maxSize !== undefined) {
      setSizeRange([
        filters.minSize || SIZE_RANGE.min,
        filters.maxSize || SIZE_RANGE.max,
      ]);
    }
  }, [filters.minSize, filters.maxSize]);

  if (!isOpen) return null;

  const updateField = (key, value) => {
    onChange({ ...filters, [key]: value });
  };

  const handleFormattedInputChange = (field, value) => {
    const numericValue = value ? parseFormattedNumber(value) : "";
    updateField(field, numericValue);
  };

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
    updateField("minPrice", newRange[0]);
    updateField("maxPrice", newRange[1]);
  };

  const handleSizeRangeChange = (newRange) => {
    setSizeRange(newRange);
    updateField("minSize", newRange[0]);
    updateField("maxSize", newRange[1]);
  };

  const toggleArrayField = (key, value) => {
    const current = filters[key] || [];
    const exists = current.includes(value);
    const next = exists
      ? current.filter((v) => v !== value)
      : [...current, value];
    updateField(key, next);
  };

  const toggleBedroom = (value) => toggleArrayField("bedrooms", value);

  const handleApplyAndClose = () => {
    onClose();
  };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>Filter Projects</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </div>

        <div className={styles.modalContent}>
          {/* Search */}
          <div className={styles.fieldBlock}>
            <label>Search</label>
            <input
              type="text"
              placeholder="Type a project, developer or district"
              value={filters.search || ""}
              onChange={(e) => updateField("search", e.target.value)}
            />
          </div>

          {/* Price */}
          <div className={styles.fieldBlock}>
            <label>Price (AED)</label>

            <RangeSlider
              min={PRICE_RANGE.min}
              max={PRICE_RANGE.max}
              values={priceRange}
              onChange={handlePriceRangeChange}
              formatLabel={(value) => `AED ${formatNumber(value)}`}
            />

            <div className={styles.twoCol}>
              <div>
                <span className={styles.subLabel}>Minimum price</span>
                <input
                  type="text"
                  placeholder="From"
                  value={formatNumber(filters.minPrice) || ""}
                  onChange={(e) =>
                    handleFormattedInputChange("minPrice", e.target.value)
                  }
                />
              </div>
              <div>
                <span className={styles.subLabel}>Maximum price</span>
                <input
                  type="text"
                  placeholder="To"
                  value={formatNumber(filters.maxPrice) || ""}
                  onChange={(e) =>
                    handleFormattedInputChange("maxPrice", e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          {/* Property size */}
          <div className={styles.fieldBlock}>
            <label>Property size (sqft)</label>

            <RangeSlider
              min={SIZE_RANGE.min}
              max={SIZE_RANGE.max}
              values={sizeRange}
              onChange={handleSizeRangeChange}
              formatLabel={(value) => `${formatNumber(value)} sqft`}
            />

            <div className={styles.twoCol}>
              <div>
                <span className={styles.subLabel}>Minimum size</span>
                <input
                  type="text"
                  placeholder="From"
                  value={formatNumber(filters.minSize) || ""}
                  onChange={(e) =>
                    handleFormattedInputChange("minSize", e.target.value)
                  }
                />
              </div>
              <div>
                <span className={styles.subLabel}>Maximum size</span>
                <input
                  type="text"
                  placeholder="To"
                  value={formatNumber(filters.maxSize) || ""}
                  onChange={(e) =>
                    handleFormattedInputChange("maxSize", e.target.value)
                  }
                />
              </div>
            </div>
          </div>

          {/* Development status */}
          <div className={styles.fieldBlock}>
            <label>Development status</label>
            <div className={styles.chipsRow}>
              {devStatusOptions.map((status) => (
                <button
                  key={status}
                  className={`${styles.chip} ${
                    filters.devStatus?.includes(status) ? styles.chipActive : ""
                  }`}
                  onClick={() => toggleArrayField("devStatus", status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Unit type */}
          <div className={styles.fieldBlock}>
            <label>Unit type</label>
            <div className={styles.chipsRow}>
              {unitTypeOptions.map((type) => (
                <button
                  key={type}
                  className={`${styles.chip} ${
                    filters.unitTypes?.includes(type) ? styles.chipActive : ""
                  }`}
                  onClick={() => toggleArrayField("unitTypes", type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Bedrooms */}
          <div className={styles.fieldBlock}>
            <label>Bedrooms</label>
            <div className={styles.chipsRow}>
              {bedroomOptions.map((b) => (
                <button
                  key={b.value}
                  className={`${styles.chip} ${
                    filters.bedrooms?.includes(b.value) ? styles.chipActive : ""
                  }`}
                  onClick={() => toggleBedroom(b.value)}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.resetButton} onClick={onReset}>
            Clear all
          </button>
          <button className={styles.applyButton} onClick={handleApplyAndClose}>
            Show {totalProjects} projects
          </button>
        </div>
      </div>
    </div>
  );
}
