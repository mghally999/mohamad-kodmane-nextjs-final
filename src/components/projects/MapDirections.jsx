"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";
import styles from "@/styles/projects/MapDirections.module.css";
import { getLocalizedText } from "@/lib/text-utils";
import { useLanguage } from "@/components/LanguageProvider";

/**
 * This component supports TWO data shapes:
 *
 * A) SIMPLE (your current one – works immediately)
 *    data = {
 *      title: "Project Location",
 *      projectName: "Sobha SkyParks",
 *      address: "Business Bay, Dubai, UAE",
 *      lat: 25.18,
 *      lng: 55.25,
 *      zoom: 15
 *    }
 *
 * B) ADVANCED (Sobha-style categories + points)
 *    data = {
 *      title: { en: "...", ar: "..." },
 *      center: { lat, lng },
 *      zoom: 13,
 *      categories: [{ id, label: { en, ar } }, ...],
 *      points: [
 *        {
 *          id,
 *          categoryId: "schools",
 *          name: { en, ar? },
 *          description: { en, ar? },
 *          lat,
 *          lng,
 *          directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=lat,lng"
 *        },
 *        ...
 *      ]
 *    }
 *
 * If you pass SIMPLE, it will still show a marker & tab "All Nearby".
 * If you pass ADVANCED, you get full Sobha-style category functionality.
 */

export default function MapDirections({ data, projectData, isRTL, locale }) {
  const { locale: ctxLocale } = useLanguage();
  const activeLocale = locale || ctxLocale || "en";
  const activeIsRTL =
    typeof isRTL === "boolean" ? isRTL : activeLocale === "ar";

  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);
  const [mapbox, setMapbox] = useState(null);
  const [tokenError, setTokenError] = useState(false);

  // --- 1) NORMALIZE DATA TO SOBHA-STYLE STRUCTURE --------------------------

  const normalized = useMemo(() => {
    // If caller already provides full Sobha-style structure, use it as-is
    if (data && data.center && data.categories && data.points) {
      return data;
    }

    // If caller passes your current simple location object, adapt it
    if (data && data.lat && data.lng) {
      const title =
        typeof data.title === "string"
          ? { en: data.title, ar: data.title }
          : data.title || {
              en: "Close To What Matters Most",
              ar: "قريبة من كل ما يهمك",
            };

      const projectName =
        typeof data.projectName === "string"
          ? { en: data.projectName, ar: data.projectName }
          : data.projectName ||
            projectData?.project?.name || {
              en: "Project Location",
              ar: "موقع المشروع",
            };

      const address =
        typeof data.address === "string"
          ? { en: data.address, ar: data.address }
          : data.address || {
              en: "Dubai, United Arab Emirates",
              ar: "دبي، الإمارات العربية المتحدة",
            };

      return {
        title,
        center: {
          lat: data.lat,
          lng: data.lng,
        },
        zoom: data.zoom || 13,
        categories: [
          {
            id: "all",
            label: {
              en: "All Nearby",
              ar: "كل الأماكن",
            },
          },
        ],
        points: [
          {
            id: "project",
            categoryId: "all",
            name: projectName,
            description: address,
            lat: data.lat,
            lng: data.lng,
            directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${data.lat},${data.lng}`,
          },
        ],
      };
    }

    // Fallback example for development if nothing is passed
    return {
      title: {
        en: "Close To What Matters Most",
        ar: "قريبة من كل ما يهمك",
      },
      center: {
        lat: 25.1874304,
        lng: 55.2573965,
      },
      zoom: 13,
      categories: [
        {
          id: "schools",
          label: { en: "Schools", ar: "المدارس" },
        },
        {
          id: "shop",
          label: { en: "Shopping", ar: "التسوق" },
        },
        {
          id: "dine",
          label: { en: "Dine", ar: "المطاعم" },
        },
        {
          id: "attraction",
          label: { en: "Attractions", ar: "الترفيه" },
        },
      ],
      points: [
        {
          id: "dubai-mall",
          categoryId: "shop",
          name: { en: "The Dubai Mall" },
          description: {
            en: "World-class shopping, dining & entertainment hub.",
          },
          lat: 25.1972,
          lng: 55.2744,
          directionsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=25.1972,55.2744",
        },
        {
          id: "business-bay-metro",
          categoryId: "attraction",
          name: { en: "Business Bay Metro Station" },
          description: {
            en: "Metro connection, minutes from Sobha SkyParks.",
          },
          lat: 25.1879,
          lng: 55.2605,
          directionsUrl:
            "https://www.google.com/maps/dir/?api=1&destination=25.1879,55.2605",
        },
      ],
    };
  }, [data, projectData]);

  if (!normalized || !normalized.center) {
    console.error("MapDirections: Missing or invalid data", data);
    return null;
  }

  const [activeCategory, setActiveCategory] = useState(
    normalized.categories[0]?.id || ""
  );

  // Update active category if normalized data changes
  useEffect(() => {
    if (normalized.categories.length) {
      setActiveCategory(normalized.categories[0].id);
    }
  }, [normalized.categories]);

  // --- 2) LOAD MAPBOX-GL ON CLIENT ONLY -----------------------------------

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const mod = await import("mapbox-gl");
        if (cancelled) return;

        const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || "";
        if (!token) {
          console.warn(
            "MapDirections: Missing NEXT_PUBLIC_MAPBOX_TOKEN. Map will not render."
          );
          setTokenError(true);
          return;
        }

        mod.default.accessToken = token;
        setMapbox(mod.default);
      } catch (err) {
        console.error("Failed to load mapbox-gl", err);
        setTokenError(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // --- 3) INIT MAP ONCE ----------------------------------------------------

  useEffect(() => {
    if (!mapbox) return;
    if (!mapContainerRef.current) return;
    if (mapRef.current) return;

    const center = [normalized.center.lng, normalized.center.lat];

    const map = new mapbox.Map({
      container: mapContainerRef.current,
      style: normalized.mapStyle || "mapbox://styles/mapbox/light-v11",
      center,
      zoom: normalized.zoom || 13,
    });

    map.addControl(new mapbox.NavigationControl(), "top-right");

    mapRef.current = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [mapbox, normalized.center, normalized.zoom, normalized.mapStyle]);

  // --- 4) UPDATE MARKERS WHEN CATEGORY / DATA CHANGES ----------------------

  useEffect(() => {
    if (!mapRef.current || !mapbox) return;

    // Remove previous markers
    if (markersRef.current && markersRef.current.length) {
      markersRef.current.forEach((m) => m.remove());
    }
    markersRef.current = [];

    const visiblePoints = (normalized.points || []).filter(
      (p) => !activeCategory || p.categoryId === activeCategory
    );

    if (!visiblePoints.length) return;

    const bounds = new mapbox.LngLatBounds();

    visiblePoints.forEach((pt) => {
      const el = document.createElement("div");
      // This class is styled via :global in MapDirections.module.css
      el.className = "sobha-map-marker";

      const name = getLocalizedText(pt.name, activeLocale) || "";
      const desc = pt.description
        ? getLocalizedText(pt.description, activeLocale)
        : "";
      const dirLabel = activeIsRTL ? "الحصول على الاتجاهات" : "Get Direction";

      const popupHtml = `
        <div class="sobha-popup-content">
          <div class="sobha-popup-title">${name}</div>
          ${desc ? `<div class="sobha-popup-desc">${desc}</div>` : ""}
          ${
            pt.directionsUrl
              ? `<a class="sobha-popup-link" href="${pt.directionsUrl}" target="_blank" rel="noopener noreferrer">${dirLabel}</a>`
              : ""
          }
        </div>
      `;

      const marker = new mapbox.Marker(el)
        .setLngLat([pt.lng, pt.lat])
        .setPopup(new mapbox.Popup({ offset: 16 }).setHTML(popupHtml.trim()))
        .addTo(mapRef.current);

      markersRef.current.push(marker);
      bounds.extend([pt.lng, pt.lat]);
    });

    // Fit to markers like Sobha (padding)
    if (!bounds.isEmpty()) {
      mapRef.current.fitBounds(bounds, {
        padding: { top: 60, bottom: 60, left: 100, right: 100 },
        duration: 800,
      });
    }
  }, [activeCategory, normalized.points, activeLocale, activeIsRTL, mapbox]);

  // --- 5) RENDER -----------------------------------------------------------

  const title =
    getLocalizedText(normalized.title, activeLocale) ||
    (activeIsRTL ? "قريبة من كل ما يهمك" : "Close To What Matters Most");

  return (
    <section
      className={styles.mapSection}
      dir={activeIsRTL ? "rtl" : "ltr"}
      aria-label={title}
    >
      <div className={styles.container}>
        {/* Heading – Sobha style */}
        <h2 className={styles.heading}>{title}</h2>

        {/* Token / loading fallback */}
        {tokenError && (
          <div className={styles.tokenWarning}>
            {activeIsRTL
              ? "الخريطة غير متاحة حاليًا. يرجى إضافة مفتاح Mapbox في متغير NEXT_PUBLIC_MAPBOX_TOKEN."
              : "Map is not available yet. Please add a Mapbox token in NEXT_PUBLIC_MAPBOX_TOKEN."}
          </div>
        )}

        {/* Category tabs – Sobha logic */}
        <div className={styles.categoryTabs}>
          {normalized.categories.map((cat) => {
            const label = getLocalizedText(cat.label, activeLocale) || cat.id;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Map container */}
        <div className={styles.mapWrapper}>
          <div
            id="map_canvas"
            ref={mapContainerRef}
            className={styles.mapInner}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
