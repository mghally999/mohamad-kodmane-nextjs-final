"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/TopHeader.module.css";
import { useLanguage } from "./LanguageProvider";

import { propertiesData } from "@/data/propertiesData/propertiesData";
import { whereToLiveData } from "@/data/whereToLiveData/whereToLiveData";
import { developersData } from "@/data/developersData/developersData";

// Safe DOM hook
function useSafeDOM() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return isMounted;
}

export default function TopHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedWhereToLive, setSelectedWhereToLive] = useState(null);

  const [mobileExpandedItems, setMobileExpandedItems] = useState({
    section: null,
    categoryId: null,
    developerId: null,
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [whereToLiveSearch, setWhereToLiveSearch] = useState("");

  const { locale, switchLanguage, isTransitioning, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const isMounted = useSafeDOM();

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  // DATA
  const propertiesMenuData = useMemo(
    () => propertiesData(CDN, t, locale),
    [CDN, t, locale]
  );

  const whereToLiveDataArray = useMemo(
    () => whereToLiveData(CDN, t, locale),
    [CDN, t, locale]
  );

  const developersDataArray = useMemo(
    () => (developersData ? developersData(CDN) : []),
    [CDN]
  );

  // SCROLL STYLE
  useEffect(() => {
    if (!isMounted) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  // OUTSIDE CLICK FOR MEGA MENU
  useEffect(() => {
    if (!isMounted || !activeMegaMenu) return;

    const handleClickOutside = (event) => {
      try {
        const target = event.target;
        if (
          activeMegaMenu &&
          !target?.closest?.(`.${styles.megaMenu}`) &&
          !target?.closest?.(`.${styles.megaMenuTrigger}`)
        ) {
          handleMegaMenuLeave();
        }
      } catch (error) {
        console.warn("Click outside handler error:", error);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMegaMenu, isMounted]);

  // RESET ON ROUTE CHANGE
  useEffect(() => {
    if (!isMounted) return;
    setActiveMegaMenu(null);
    setSelectedCategory(null);
    setSelectedProject(null);
    setSelectedWhereToLive(null);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setMobileExpandedItems({
      section: null,
      categoryId: null,
      developerId: null,
    });
  }, [pathname, isMounted]);

  // LOCK BODY SCROLL WHEN MOBILE MENU OPEN
  useEffect(() => {
    if (!isMounted) return;
    const body = document.body;
    if (isMobileMenuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
    return () => {
      body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isMounted]);

  // MEGA MENU HANDLERS (DESKTOP)
  const handleMegaMenuEnter = (item) => {
    if (!isMounted || !item || typeof item !== "object") return;
    if (!item.hasMegaMenu) return;

    setActiveMegaMenu(item.label);

    if (item.label === "PROPERTIES") {
      const firstCategory = propertiesMenuData.categories[0];
      const projects = getCategoryProjects(firstCategory);
      setSelectedCategory(firstCategory);
      setSelectedProject(projects[0] || null);
    }

    if (item.label === "WHERE TO LIVE") {
      setSelectedWhereToLive(whereToLiveDataArray[0] || null);
    }
  };

  const handleMegaMenuLeave = () => {
    if (!isMounted) return;
    setTimeout(() => {
      setActiveMegaMenu(null);
      setSelectedCategory(null);
      setSelectedProject(null);
      setSelectedWhereToLive(null);
    }, 10);
  };

  const handleCategoryHover = (category) => {
    const projects = getCategoryProjects(category);
    setSelectedCategory(category);
    setSelectedProject(projects[0] || null);
  };

  const handleProjectHover = (project) => {
    setSelectedProject(project);
  };

  const handleWhereToLiveHover = (whereToLive) => {
    setSelectedWhereToLive(whereToLive);
  };

  // HELPERS
  const firstCategory = propertiesMenuData.categories[0];

  const getCategoryProjects = (category) => {
    if (!category) return [];
    const out = [];
    category.developers.forEach((dev) => {
      dev.projects.forEach((project) => {
        out.push({ ...project, developer: dev });
      });
    });
    return out;
  };

  const filteredWhereToLive = useMemo(() => {
    if (!whereToLiveSearch.trim()) return whereToLiveDataArray;
    return whereToLiveDataArray.filter((c) =>
      c.name.toLowerCase().includes(whereToLiveSearch.toLowerCase())
    );
  }, [whereToLiveDataArray, whereToLiveSearch]);

  // MOBILE NAV HANDLERS
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeAllMobileMenus = () => {
    if (!isMounted) return;
    setIsMobileMenuOpen(false);
    setMobileExpandedItems({
      section: null,
      categoryId: null,
      developerId: null,
    });
  };

  const toggleMobilePropertiesRoot = () => {
    setMobileExpandedItems((prev) => {
      if (prev.section === "properties") {
        return { section: null, categoryId: null, developerId: null };
      }
      return { section: "properties", categoryId: null, developerId: null };
    });
  };

  const toggleMobileWhereToLiveRoot = () => {
    setMobileExpandedItems((prev) => {
      if (prev.section === "whereToLive") {
        return { section: null, categoryId: null, developerId: null };
      }
      return { section: "whereToLive", categoryId: null, developerId: null };
    });
  };

  const toggleMobileCategory = (categoryId) => {
    setMobileExpandedItems((prev) => {
      const isSame = prev.categoryId === categoryId;
      return {
        section: "properties",
        categoryId: isSame ? null : categoryId,
        developerId: isSame ? null : prev.developerId,
      };
    });
  };

  const toggleMobileDeveloper = (developerId) => {
    setMobileExpandedItems((prev) => {
      const isSame = prev.developerId === developerId;
      return {
        ...prev,
        developerId: isSame ? null : developerId,
      };
    });
  };

  // LANGUAGE TOGGLE
  const toggleLanguage = () => {
    if (!isMounted) return;
    const newLang = locale === "en" ? "ar" : "en";
    switchLanguage(newLang);
  };

  // SEARCH
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const term = searchTerm.trim();
    if (!term) return;
    router.push(`/search?q=${encodeURIComponent(term)}`);
    setIsSearchOpen(false);
  };

  // CURRENT SELECTIONS (DESKTOP)
  const currentCategory = selectedCategory || firstCategory;
  const currentProjects = getCategoryProjects(currentCategory);
  const currentProject =
    selectedProject || (currentProjects.length ? currentProjects[0] : null);

  if (!isMounted) return null;

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
          isMobileMenuOpen ? styles.mobileMenuOpenHeader : ""
        } ${locale === "ar" ? styles.rtl : ""}`}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className={styles.container}>
          {/* LEFT MENU (ENGLISH) / RIGHT MENU (ARABIC) */}
          <div
            className={`${styles.menuLeft} ${styles.menuLinks} ${styles.col12} ${styles.colLg5}`}
          >
            <ul className={styles.navLinks}>
              <li className={styles.menuItem}>
                <Link
                  href="/about"
                  className={styles.level1Menu}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t?.("nav.about") || "ABOUT"}
                </Link>
              </li>

              <li
                className={styles.menuItemHasChildren}
                onMouseEnter={() =>
                  handleMegaMenuEnter({
                    label: "PROPERTIES",
                    hasMegaMenu: true,
                  })
                }
              >
                <button
                  type="button"
                  className={`${styles.level1Menu} ${styles.megaMenuTrigger} ${
                    activeMegaMenu === "PROPERTIES" ? styles.active : ""
                  }`}
                  onClick={() => {
                    if (activeMegaMenu === "PROPERTIES") {
                      handleMegaMenuLeave();
                    } else {
                      handleMegaMenuEnter({
                        label: "PROPERTIES",
                        hasMegaMenu: true,
                      });
                    }
                  }}
                >
                  {t?.("nav.properties") || "PROPERTIES"}
                  {/* <span className={styles.dropdownArrow}>▼</span> */}
                </button>
              </li>

              <li
                className={styles.menuItemHasChildren}
                onMouseEnter={() =>
                  handleMegaMenuEnter({
                    label: "WHERE TO LIVE",
                    hasMegaMenu: true,
                  })
                }
              >
                <button
                  type="button"
                  className={`${styles.level1Menu} ${styles.megaMenuTrigger} ${
                    activeMegaMenu === "WHERE TO LIVE" ? styles.active : ""
                  }`}
                  onClick={() => {
                    if (activeMegaMenu === "WHERE TO LIVE") {
                      handleMegaMenuLeave();
                    } else {
                      handleMegaMenuEnter({
                        label: "WHERE TO LIVE",
                        hasMegaMenu: true,
                      });
                    }
                  }}
                >
                  {t?.("nav.whereToLive") || "WHERE TO LIVE"}
                  {/* <span className={styles.dropdownArrow}>▼</span> */}
                </button>
              </li>

              <li className={styles.menuItem}>
                <Link
                  href="/developers"
                  className={styles.level1Menu}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t?.("nav.developers") || "DEVELOPERS"}
                </Link>
              </li>
            </ul>
          </div>

          {/* CENTER LOGO – DESKTOP ONLY */}
          <div
            className={`${styles.logoSec} ${styles.col12} ${styles.colLg2} ${styles.onlyDesk}`}
          >
            <Link href="/" className={styles.logoLink}>
              <img
                src="/logo-transparent.png"
                alt="Mohamad Kodmani Real Estate"
                className={styles.logoImage}
                width={125}
                height={45}
              />
            </Link>
          </div>

          {/* RIGHT MENU (ENGLISH) / LEFT MENU (ARABIC) */}
          <div
            className={`${styles.menuRight} ${styles.menuLinks} ${styles.col12} ${styles.colLg5}`}
          >
            <ul className={styles.navLinks}>
              <li className={styles.menuItem}>
                <a className={styles.level1Menu} href="/articles/">
                  {t?.("nav.mediaCenter") || "MEDIA CENTER"}
                </a>
              </li>

              <li className={styles.menuItem}>
                <a className={styles.level1Menu} href="/contact-us/">
                  {t?.("nav.contactUs") || "CONTACT US"}
                </a>
              </li>

              {/* <li className={styles.searchItem}>
                <button
                  type="button"
                  className={styles.searchTrigger}
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Open search"
                >
                  <span className={styles.searchIcon}>🔍</span>
                </button>
              </li> */}

              <li className={styles.languageToggle}>
                <button
                  type="button"
                  onClick={toggleLanguage}
                  disabled={isTransitioning}
                  className={`${styles.langButton} ${
                    locale === "ar" ? styles.arabicActive : ""
                  } ${isTransitioning ? styles.transitioning : ""}`}
                  aria-label={`Switch to ${
                    locale === "en" ? "Arabic" : "English"
                  }`}
                >
                  <span className={styles.langText}>
                    {isTransitioning ? "⟳" : locale === "en" ? "العربية" : "EN"}
                  </span>
                  <div className={styles.langIndicator}>
                    <div
                      className={`${styles.langSlider} ${
                        isTransitioning ? styles.pulsing : ""
                      }`}
                      data-lang={locale}
                    ></div>
                  </div>
                </button>
              </li>
            </ul>
          </div>

          {/* MOBILE BURGER MENU */}
          {!isMobileMenuOpen && (
            <button
              type="button"
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>

        {/* DESKTOP MEGA MENU – PROPERTIES */}
        {activeMegaMenu === "PROPERTIES" && (
          <div
            className={`${styles.megaMenu} ${
              locale === "ar" ? styles.rtl : ""
            }`}
            dir={locale === "ar" ? "rtl" : "ltr"}
            onMouseEnter={() => setActiveMegaMenu("PROPERTIES")}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className={styles.megaMenuInner}>
              {/* Categories column - Left in EN, Right in AR */}
              <div className={styles.megaColumnLeft}>
                <div className={styles.megaColumnHeader}>
                  <span className={styles.megaColumnLabel}>
                    {t?.("ui.propertyTypesLabel") || "PROPERTY TYPES"}
                  </span>
                </div>
                <ul className={styles.categoryList}>
                  {propertiesMenuData.categories.map((category) => (
                    <li key={category.id}>
                      <button
                        type="button"
                        className={`${styles.categoryLink} ${
                          currentCategory?.id === category.id
                            ? styles.activeCategory
                            : ""
                        }`}
                        onMouseEnter={() => handleCategoryHover(category)}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects column - Middle */}
              <div className={styles.megaColumnMiddle}>
                <div className={styles.megaColumnHeader}>
                  <span className={styles.megaColumnLabel}>
                    {currentCategory?.name ||
                      t?.("ui.projectsLabel") ||
                      "PROJECTS"}
                  </span>
                </div>
                <ul className={styles.projectList}>
                  {currentProjects.map((project) => (
                    <li key={project.id}>
                      <a
                        href={`/projects/${currentCategory.slug}/${project.developer.slug}/${project.slug}`}
                        className={`${styles.projectLink} ${
                          currentProject?.id === project.id
                            ? styles.activeProject
                            : ""
                        }`}
                        onMouseEnter={() => handleProjectHover(project)}
                      >
                        <span className={styles.projectTitleInline}>
                          {project.title}
                        </span>
                        <span className={styles.projectMeta}>
                          {project.developer.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image column - Right in EN, Left in AR */}
              <div className={styles.megaColumnRight}>
                <div className={styles.megaImageWrapper}>
                  <div
                    className={styles.megaImage}
                    style={{
                      backgroundImage: `url(${
                        currentProject?.image ||
                        currentCategory?.image ||
                        firstCategory.image
                      })`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* DESKTOP MEGA MENU – WHERE TO LIVE */}
        {activeMegaMenu === "WHERE TO LIVE" && (
          <div
            className={`${styles.megaMenu} ${
              locale === "ar" ? styles.rtl : ""
            }`}
            dir={locale === "ar" ? "rtl" : "ltr"}
            onMouseEnter={() => setActiveMegaMenu("WHERE TO LIVE")}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className={styles.megaMenuInnerCommunities}>
              {/* List/Search column - Left in EN, Right in AR */}
              <div className={styles.megaCommunitiesLeft}>
                <div className={styles.megaColumnHeader}>
                  <span className={styles.megaColumnLabel}>
                    {t?.("ui.dubaiNeighborhoodsLabel") || "DUBAI NEIGHBORHOODS"}
                  </span>
                </div>

                <form
                  className={styles.communitySearchForm}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder={
                      t?.("ui.searchNeighborhoodPlaceholderDesktop") ||
                      "Search neighborhood (e.g. JVC, Marina)..."
                    }
                    className={styles.communitySearchInput}
                    value={whereToLiveSearch}
                    onChange={(e) => setWhereToLiveSearch(e.target.value)}
                  />
                </form>

                <ul className={styles.communityList}>
                  {filteredWhereToLive.map((whereToLive) => (
                    <li key={whereToLive.id}>
                      <Link
                        href={`/where-to-live/${whereToLive.slug}`}
                        className={`${styles.communityLink} ${
                          selectedWhereToLive?.id === whereToLive.id
                            ? styles.activeCommunity
                            : ""
                        }`}
                        onMouseEnter={() => handleWhereToLiveHover(whereToLive)}
                      >
                        <span className={styles.communityName}>
                          {whereToLive.name}
                        </span>
                        <span className={styles.communityArrow}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preview column - Right in EN, Left in AR */}
              <div className={styles.megaCommunitiesRight}>
                <div className={styles.communityPreviewWrapper}>
                  <div
                    className={styles.communityPreviewImage}
                    style={{
                      backgroundImage: `url(${
                        selectedWhereToLive?.image ||
                        filteredWhereToLive[0]?.image
                      })`,
                    }}
                  />
                  <div className={styles.communityPreviewInfo}>
                    <h3 className={styles.communityPreviewTitle}>
                      {selectedWhereToLive?.name ||
                        filteredWhereToLive[0]?.name ||
                        t?.("ui.defaultNeighborhoodTitle") ||
                        "Dubai Neighborhood"}
                    </h3>
                    <p className={styles.communityPreviewLocation}>
                      {selectedWhereToLive?.location ||
                        filteredWhereToLive[0]?.location}
                    </p>
                    <div className={styles.communityPreviewStats}>
                      <div className={styles.communityStat}>
                        <span className={styles.communityStatLabel}>
                          {t?.("ui.avgPurchaseLabel") || "Avg. Purchase"}
                        </span>
                        <span className={styles.communityStatValue}>
                          {selectedWhereToLive?.avgBuy ||
                            filteredWhereToLive[0]?.avgBuy}
                        </span>
                      </div>
                      <div className={styles.communityStat}>
                        <span className={styles.communityStatLabel}>
                          {t?.("ui.avgRentLabel") || "Avg. Rent"}
                        </span>
                        <span className={styles.communityStatValue}>
                          {selectedWhereToLive?.avgRent ||
                            filteredWhereToLive[0]?.avgRent}
                        </span>
                      </div>
                      <div className={styles.communityStat}>
                        <span className={styles.communityStatLabel}>
                          {t?.("ui.roiLabel") || "ROI"}
                        </span>
                        <span className={styles.communityStatValue}>
                          {selectedWhereToLive?.roi ||
                            filteredWhereToLive[0]?.roi}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/where-to-live/${
                        selectedWhereToLive?.slug ||
                        filteredWhereToLive[0]?.slug ||
                        ""
                      }`}
                      className={styles.communityPreviewButton}
                    >
                      {t?.("ui.viewNeighborhoodDetails") ||
                        "VIEW NEIGHBORHOOD DETAILS"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* SEARCH OVERLAY */}
      {isSearchOpen && (
        <div className={styles.searchOverlay}>
          <div className={styles.searchPanel}>
            <div className={styles.searchPanelInner}>
              <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder={
                    t?.("ui.searchOverlayPlaceholder") ||
                    "Search projects, neighborhoods, developers, articles..."
                  }
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <button type="submit" className={styles.searchButton}>
                  {t?.("ui.searchOverlayButton") || "SEARCH"}
                </button>
                <button
                  type="button"
                  className={styles.searchClose}
                  onClick={() => setIsSearchOpen(false)}
                  aria-label="Close search"
                >
                  ×
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE NAV OVERLAY */}
      <div
        className={`${styles.mobileNav} ${
          isMobileMenuOpen ? styles.active : ""
        } ${locale === "ar" ? styles.rtl : ""}`}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className={styles.mobileNavBackground} />
        <div className={styles.mobileNavContainer}>
          <div className={styles.mobileNavHeader}>
            <button
              type="button"
              className={styles.mobileCloseButton}
              onClick={closeAllMobileMenus}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <nav className={styles.mobileNavContent}>
            {/* Logo inside content area */}
            <div className={styles.mobileLogoContent}>
              <Link
                href="/"
                className={styles.logoLink}
                onClick={closeAllMobileMenus}
              >
                <img
                  src="/logo-transparent.png"
                  alt="Mohamad Kodmani Real Estate"
                  className={styles.logoImage}
                  width={150}
                  height={54}
                />
              </Link>
            </div>

            {/* Language Toggle in Mobile */}
            <div className={styles.mobileLanguageToggle}>
              <button
                type="button"
                onClick={toggleLanguage}
                disabled={isTransitioning}
                className={styles.mobileLangButton}
                aria-label={`Switch to ${
                  locale === "en" ? "Arabic" : "English"
                }`}
              >
                <span>
                  {isTransitioning ? "⟳" : locale === "en" ? "العربية" : "EN"}
                </span>
                <div className={styles.langIndicator}>
                  <div
                    className={`${styles.langSlider} ${
                      isTransitioning ? styles.pulsing : ""
                    }`}
                    data-lang={locale}
                  ></div>
                </div>
              </button>
            </div>

            <div className={styles.mobileNavItems}>
              <a
                href="/about"
                className={styles.mobileNavLink}
                onClick={closeAllMobileMenus}
              >
                <span className={styles.mobileNavText}>
                  {t?.("nav.about") || "ABOUT"}
                </span>
              </a>

              {/* PROPERTIES – MOBILE */}
              <div className={styles.mobileMegaMenuItem}>
                <button
                  type="button"
                  className={`${styles.mobileNavLink} ${
                    styles.mobileMegaMenuTrigger
                  } ${
                    mobileExpandedItems.section === "properties"
                      ? styles.expanded
                      : ""
                  }`}
                  onClick={toggleMobilePropertiesRoot}
                >
                  <span className={styles.mobileNavText}>
                    {t?.("nav.properties") || "PROPERTIES"}
                  </span>
                  <span className={styles.mobileDropdownArrow}>
                    {mobileExpandedItems.section === "properties" ? "↑" : "↓"}
                  </span>
                </button>

                {mobileExpandedItems.section === "properties" && (
                  <div className={styles.mobileMegaMenuContent}>
                    <div className={styles.mobileMenuLevel}>
                      <h4 className={styles.mobileMenuLevelTitle}>
                        {t?.("ui.mobilePropertyTypesTitle") || "Property Types"}
                      </h4>

                      {propertiesMenuData.categories.map((category) => (
                        <div
                          key={category.id}
                          className={styles.mobileCategoryItem}
                        >
                          <button
                            type="button"
                            className={`${styles.mobileCategoryButton} ${
                              mobileExpandedItems.categoryId === category.id
                                ? styles.expanded
                                : ""
                            }`}
                            onClick={() => toggleMobileCategory(category.id)}
                          >
                            <span className={styles.mobileCategoryName}>
                              {category.name}
                            </span>
                            <span className={styles.mobileCategoryArrow}>
                              {mobileExpandedItems.categoryId === category.id
                                ? "↑"
                                : "↓"}
                            </span>
                          </button>

                          {mobileExpandedItems.categoryId === category.id && (
                            <div className={styles.mobileDevelopersList}>
                              <h5 className={styles.mobileDevelopersTitle}>
                                {(t?.("ui.mobileDevelopersTitlePrefix") ||
                                  "Developers in") +
                                  " " +
                                  category.name}
                              </h5>

                              {category.developers.map((developer) => (
                                <div
                                  key={developer.id}
                                  className={styles.mobileDeveloperItem}
                                >
                                  <button
                                    type="button"
                                    className={`${
                                      styles.mobileDeveloperButton
                                    } ${
                                      mobileExpandedItems.developerId ===
                                      developer.id
                                        ? styles.expanded
                                        : ""
                                    }`}
                                    onClick={() =>
                                      toggleMobileDeveloper(developer.id)
                                    }
                                  >
                                    {developer.logo && (
                                      <div
                                        className={styles.mobileDeveloperLogo}
                                      >
                                        <img
                                          src={developer.logo}
                                          alt={`${developer.name} logo`}
                                          className={
                                            styles.mobileDeveloperLogoImage
                                          }
                                        />
                                      </div>
                                    )}
                                    <span
                                      className={styles.mobileDeveloperName}
                                    >
                                      {developer.name}
                                    </span>
                                    <span
                                      className={styles.mobileDeveloperArrow}
                                    >
                                      {mobileExpandedItems.developerId ===
                                      developer.id
                                        ? "↑"
                                        : "↓"}
                                    </span>
                                  </button>

                                  {mobileExpandedItems.developerId ===
                                    developer.id && (
                                    <div className={styles.mobileProjectsList}>
                                      {developer.projects.map((project) => (
                                        <a
                                          key={project.id}
                                          href={`/projects/${category.slug}/${developer.slug}/${project.slug}`}
                                          className={styles.mobileProjectLink}
                                          onClick={closeAllMobileMenus}
                                        >
                                          <div
                                            className={
                                              styles.mobileProjectImage
                                            }
                                            style={{
                                              backgroundImage: `url(${project.image})`,
                                            }}
                                          />
                                          <div
                                            className={styles.mobileProjectInfo}
                                          >
                                            <span
                                              className={
                                                styles.mobileProjectName
                                              }
                                            >
                                              {project.title}
                                            </span>
                                            <span
                                              className={
                                                styles.mobileProjectArrow
                                              }
                                            >
                                              →
                                            </span>
                                          </div>
                                        </a>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* WHERE TO LIVE – MOBILE */}
              <div className={styles.mobileMegaMenuItem}>
                <button
                  type="button"
                  className={`${styles.mobileNavLink} ${
                    styles.mobileMegaMenuTrigger
                  } ${
                    mobileExpandedItems.section === "whereToLive"
                      ? styles.expanded
                      : ""
                  }`}
                  onClick={toggleMobileWhereToLiveRoot}
                >
                  <span className={styles.mobileNavText}>
                    {t?.("nav.whereToLive") || "WHERE TO LIVE"}
                  </span>
                  <span className={styles.mobileDropdownArrow}>
                    {mobileExpandedItems.section === "whereToLive" ? "↑" : "↓"}
                  </span>
                </button>

                {mobileExpandedItems.section === "whereToLive" && (
                  <div className={styles.mobileMegaMenuContent}>
                    <div className={styles.mobileMenuLevel}>
                      <h4 className={styles.mobileMenuLevelTitle}>
                        {t?.("ui.dubaiNeighborhoodsLabel") ||
                          "DUBAI NEIGHBORHOODS"}
                      </h4>
                      <div className={styles.mobileSearchContainer}>
                        <input
                          type="text"
                          placeholder={
                            t?.("ui.searchNeighborhoodPlaceholderMobile") ||
                            "Search neighborhoods..."
                          }
                          className={styles.mobileSearchInput}
                          value={whereToLiveSearch}
                          onChange={(e) => setWhereToLiveSearch(e.target.value)}
                        />
                      </div>
                      <div className={styles.mobileWhereToLiveList}>
                        {filteredWhereToLive.map((whereToLive) => (
                          <a
                            key={whereToLive.id}
                            href={`/where-to-live/${whereToLive.slug}`}
                            className={styles.mobileWhereToLiveLink}
                            onClick={closeAllMobileMenus}
                          >
                            <div
                              className={styles.mobileWhereToLiveImage}
                              style={{
                                backgroundImage: `url(${whereToLive.image})`,
                              }}
                            />
                            <div className={styles.mobileWhereToLiveInfo}>
                              <span className={styles.mobileWhereToLiveName}>
                                {whereToLive.name}
                              </span>
                              <span className={styles.mobileWhereToLiveArrow}>
                                →
                              </span>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* DEVELOPERS */}
              <a
                href="/developers"
                className={styles.mobileNavLink}
                onClick={closeAllMobileMenus}
              >
                <span className={styles.mobileNavText}>
                  {t?.("nav.developers") || "DEVELOPERS"}
                </span>
              </a>

              {/* MEDIA CENTER */}
              <a
                href="/articles"
                className={styles.mobileNavLink}
                onClick={closeAllMobileMenus}
              >
                <span className={styles.mobileNavText}>
                  {t?.("nav.mediaCenter") || "MEDIA CENTER"}
                </span>
              </a>

              {/* CONTACT US */}
              <a
                href="/contact-us"
                className={styles.mobileNavLink}
                onClick={closeAllMobileMenus}
              >
                <span className={styles.mobileNavText}>
                  {t?.("nav.contactUs") || "CONTACT US"}
                </span>
              </a>
            </div>

            <div className={styles.mobileContact}>
              <div className={styles.mobileContactTitle}>
                {t?.("ui.mobileContactTitle") || "Contact Us"}
              </div>
              {/* <div className={styles.contactItem}>
                <div className={styles.contactDetails}>
                  <div className={styles.contactType}>
                    {t?.("ui.mobileDirectLine") || "Direct Line"}
                  </div>
                  <div className={styles.contactValue}>+971 56 666 5560</div>
                </div>
              </div> */}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
