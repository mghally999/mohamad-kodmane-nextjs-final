// src/components/filter/ProjectsFiltersBar.js
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "@/styles/filter/ProjectsFiltersBar.module.css";

// Status options stored as stable keys (what you save in filters),
// labels come from translations
const devStatusOptions = [
  {
    value: "completed",
    labelKey: "whereToLive.filters.devStatusOptions.completed",
  },
  {
    value: "presale",
    labelKey: "whereToLive.filters.devStatusOptions.presale",
  },
  {
    value: "underConstruction",
    labelKey: "whereToLive.filters.devStatusOptions.underConstruction",
  },
];

// Unit types – values are stable keys, labels from translations
const unitTypeOptions = [
  {
    value: "apartments",
    labelKey: "whereToLive.filters.unitTypeOptions.apartments",
  },
  {
    value: "villa",
    labelKey: "whereToLive.filters.unitTypeOptions.villa",
  },
  {
    value: "townhouse",
    labelKey: "whereToLive.filters.unitTypeOptions.townhouse",
  },
  {
    value: "duplex",
    labelKey: "whereToLive.filters.unitTypeOptions.duplex",
  },
  {
    value: "penthouse",
    labelKey: "whereToLive.filters.unitTypeOptions.penthouse",
  },
  {
    value: "retail",
    labelKey: "whereToLive.filters.unitTypeOptions.retail",
  },
];

// Bedrooms – numeric values kept as-is, labels translated
const bedroomOptions = [
  {
    value: 0,
    labelKey: "whereToLive.filters.bedroomOptions.studio",
  },
  {
    value: 1,
    labelKey: "whereToLive.filters.bedroomOptions.one",
  },
  {
    value: 2,
    labelKey: "whereToLive.filters.bedroomOptions.two",
  },
  {
    value: 3,
    labelKey: "whereToLive.filters.bedroomOptions.three",
  },
  {
    value: 4,
    labelKey: "whereToLive.filters.bedroomOptions.four",
  },
  {
    value: 5,
    labelKey: "whereToLive.filters.bedroomOptions.fivePlus",
  },
];

// Luxury Dubai property ranges
const PRICE_RANGE = { min: 0, max: 100000000 };
const SIZE_RANGE = { min: 0, max: 100000 };

// Utility functions for number formatting
const formatNumber = (num) => {
  if (!num && num !== 0) return "";
  return new Intl.NumberFormat().format(num);
};

const parseFormattedNumber = (str) => {
  const cleaned = str.replace(/,/g, "").replace(/\s/g, "");
  return cleaned ? parseInt(cleaned, 10) : "";
};

const RangeSlider = ({ min, max, values, onChange, formatLabel }) => {
  const handleChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = parseInt(value, 10);

    // Keep ranges valid
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

export default function ProjectsFiltersBar({
  filters,
  onChange,
  onOpenFullFilters,
}) {
  const { t } = useLanguage();

  const [openDropdown, setOpenDropdown] = useState(null);
  const [priceRange, setPriceRange] = useState([
    PRICE_RANGE.min,
    PRICE_RANGE.max,
  ]);
  const [sizeRange, setSizeRange] = useState([SIZE_RANGE.min, SIZE_RANGE.max]);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync ranges with filters
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

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  // Real-time updates - no apply button needed
  const handleFormattedInputChange = (field, value) => {
    const numericValue = value ? parseFormattedNumber(value) : "";
    onChange({ ...filters, [field]: numericValue });
  };

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
    onChange({
      ...filters,
      minPrice: newRange[0],
      maxPrice: newRange[1],
    });
  };

  const handleSizeRangeChange = (newRange) => {
    setSizeRange(newRange);
    onChange({
      ...filters,
      minSize: newRange[0],
      maxSize: newRange[1],
    });
  };

  const toggleArrayFilter = (key, value) => {
    const current = filters[key] || [];
    const exists = current.includes(value);
    const next = exists
      ? current.filter((v) => v !== value)
      : [...current, value];
    onChange({ ...filters, [key]: next });
  };

  const toggleBedroom = (value) => toggleArrayFilter("bedrooms", value);

  const clearFilter = (filterKeys) => {
    const newFilters = { ...filters };
    filterKeys.forEach((key) => {
      if (Array.isArray(newFilters[key])) {
        newFilters[key] = [];
      } else {
        newFilters[key] = "";
      }
    });
    onChange(newFilters);
  };

  const hasActiveFilters =
    filters.search ||
    filters.minPrice ||
    filters.maxPrice ||
    filters.minSize ||
    filters.maxSize ||
    (filters.devStatus && filters.devStatus.length > 0) ||
    (filters.unitTypes && filters.unitTypes.length > 0) ||
    (filters.bedrooms && filters.bedrooms.length > 0);

  return (
    <div className={styles.stickyWrapper}>
      <div className={styles.filtersBar}>
        {/* Left side: Search & Filters button */}
        <div className={styles.leftGroup}>
          <button
            className={styles.searchFiltersButton}
            onClick={onOpenFullFilters}
          >
            <span className={styles.iconCircle}>🔍</span>
            <span>{t("whereToLive.filters.searchAndFilters")}</span>
            {hasActiveFilters && (
              <span className={styles.activeDot} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Right side: dropdown filters */}
        <div ref={dropdownRef} className={styles.rightGroup}>
          {/* Price */}
          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdownButton} ${
                filters.minPrice || filters.maxPrice
                  ? styles.dropdownButtonActive
                  : ""
              }`}
              onClick={() => toggleDropdown("price")}
            >
              <span>{t("whereToLive.filters.price")}</span>
              {(filters.minPrice || filters.maxPrice) && (
                <span className={styles.filterBadge}>•</span>
              )}
              <span className={styles.chevron}>▾</span>
            </button>
            {openDropdown === "price" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>{t("whereToLive.filters.priceRangeLabel")}</h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["minPrice", "maxPrice"])}
                  >
                    {t("common.clear")}
                  </button>
                </div>

                <RangeSlider
                  min={PRICE_RANGE.min}
                  max={PRICE_RANGE.max}
                  values={priceRange}
                  onChange={handlePriceRangeChange}
                  formatLabel={(value) =>
                    t("whereToLive.filters.priceRangeValue", {
                      value: formatNumber(value),
                    })
                  }
                />

                <div className={styles.rangeRow}>
                  <div className={styles.rangeField}>
                    <label>{t("whereToLive.filters.minPriceLabel")}</label>
                    <input
                      type="text"
                      placeholder={t("common.from")}
                      value={formatNumber(filters.minPrice) || ""}
                      onChange={(e) =>
                        handleFormattedInputChange("minPrice", e.target.value)
                      }
                    />
                  </div>
                  <div className={styles.rangeField}>
                    <label>{t("whereToLive.filters.maxPriceLabel")}</label>
                    <input
                      type="text"
                      placeholder={t("common.to")}
                      value={formatNumber(filters.maxPrice) || ""}
                      onChange={(e) =>
                        handleFormattedInputChange("maxPrice", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Size */}
          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdownButton} ${
                filters.minSize || filters.maxSize
                  ? styles.dropdownButtonActive
                  : ""
              }`}
              onClick={() => toggleDropdown("size")}
            >
              <span>{t("whereToLive.filters.size")}</span>
              {(filters.minSize || filters.maxSize) && (
                <span className={styles.filterBadge}>•</span>
              )}
              <span className={styles.chevron}>▾</span>
            </button>
            {openDropdown === "size" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>{t("whereToLive.filters.sizeRangeLabel")}</h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["minSize", "maxSize"])}
                  >
                    {t("common.clear")}
                  </button>
                </div>

                <RangeSlider
                  min={SIZE_RANGE.min}
                  max={SIZE_RANGE.max}
                  values={sizeRange}
                  onChange={handleSizeRangeChange}
                  formatLabel={(value) =>
                    t("whereToLive.filters.sizeRangeValue", {
                      value: formatNumber(value),
                    })
                  }
                />

                <div className={styles.rangeRow}>
                  <div className={styles.rangeField}>
                    <label>{t("whereToLive.filters.minSizeLabel")}</label>
                    <input
                      type="text"
                      placeholder={t("common.from")}
                      value={formatNumber(filters.minSize) || ""}
                      onChange={(e) =>
                        handleFormattedInputChange("minSize", e.target.value)
                      }
                    />
                  </div>
                  <div className={styles.rangeField}>
                    <label>{t("whereToLive.filters.maxSizeLabel")}</label>
                    <input
                      type="text"
                      placeholder={t("common.to")}
                      value={formatNumber(filters.maxSize) || ""}
                      onChange={(e) =>
                        handleFormattedInputChange("maxSize", e.target.value)
                      }
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Unit type */}
          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdownButton} ${
                filters.unitTypes?.length > 0 ? styles.dropdownButtonActive : ""
              }`}
              onClick={() => toggleDropdown("unitType")}
            >
              <span>{t("whereToLive.filters.unitType")}</span>
              {filters.unitTypes?.length > 0 && (
                <span className={styles.filterBadge}>
                  {filters.unitTypes.length}
                </span>
              )}
              <span className={styles.chevron}>▾</span>
            </button>
            {openDropdown === "unitType" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>{t("whereToLive.filters.unitTypeLabel")}</h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["unitTypes"])}
                  >
                    {t("common.clear")}
                  </button>
                </div>
                <div className={styles.chipGrid}>
                  {unitTypeOptions.map((type) => (
                    <button
                      key={type.value}
                      className={`${styles.chip} ${
                        filters.unitTypes?.includes(type.value)
                          ? styles.chipActive
                          : ""
                      }`}
                      onClick={() => toggleArrayFilter("unitTypes", type.value)}
                    >
                      {t(type.labelKey)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Dev Status */}
          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdownButton} ${
                filters.devStatus?.length > 0 ? styles.dropdownButtonActive : ""
              }`}
              onClick={() => toggleDropdown("devStatus")}
            >
              <span>{t("whereToLive.filters.status")}</span>
              {filters.devStatus?.length > 0 && (
                <span className={styles.filterBadge}>
                  {filters.devStatus.length}
                </span>
              )}
              <span className={styles.chevron}>▾</span>
            </button>
            {openDropdown === "devStatus" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>{t("whereToLive.filters.statusLabel")}</h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["devStatus"])}
                  >
                    {t("common.clear")}
                  </button>
                </div>
                <div className={styles.chipRow}>
                  {devStatusOptions.map((status) => (
                    <button
                      key={status.value}
                      className={`${styles.chip} ${
                        filters.devStatus?.includes(status.value)
                          ? styles.chipActive
                          : ""
                      }`}
                      onClick={() =>
                        toggleArrayFilter("devStatus", status.value)
                      }
                    >
                      {t(status.labelKey)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bedrooms */}
          <div className={styles.dropdownWrapper}>
            <button
              className={`${styles.dropdownButton} ${
                filters.bedrooms?.length > 0 ? styles.dropdownButtonActive : ""
              }`}
              onClick={() => toggleDropdown("bedrooms")}
            >
              <span>{t("whereToLive.filters.bedrooms")}</span>
              {filters.bedrooms?.length > 0 && (
                <span className={styles.filterBadge}>
                  {filters.bedrooms.length}
                </span>
              )}
              <span className={styles.chevron}>▾</span>
            </button>
            {openDropdown === "bedrooms" && (
              <div className={styles.dropdownMenu}>
                <div className={styles.dropdownHeader}>
                  <h4>{t("whereToLive.filters.bedroomsLabel")}</h4>
                  <button
                    className={styles.clearButton}
                    onClick={() => clearFilter(["bedrooms"])}
                  >
                    {t("common.clear")}
                  </button>
                </div>
                <div className={styles.chipRow}>
                  {bedroomOptions.map((b) => (
                    <button
                      key={b.value}
                      className={`${styles.chip} ${
                        filters.bedrooms?.includes(b.value)
                          ? styles.chipActive
                          : ""
                      }`}
                      onClick={() => toggleBedroom(b.value)}
                    >
                      {t(b.labelKey)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
