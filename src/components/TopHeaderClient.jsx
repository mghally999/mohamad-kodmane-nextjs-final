"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/TopHeader.module.css";
import { useLanguage } from "./LanguageProvider";

// Import data files
import { aboutData } from "@/data/about/aboutData";
import { propertiesData } from "@/data/propertiesData/propertiesData";
import { whereToLiveData } from "@/data/whereToLiveData/whereToLiveData";
import { developersData } from "@/data/developersData/developersData";
import { navData } from "@/data/nav/navData";

// Safe DOM manipulation hook
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
  const [selectedAboutItem, setSelectedAboutItem] = useState(null);

  const [mobileExpandedItems, setMobileExpandedItems] = useState({
    categories: null,
    categoryId: null,
    developerId: null,
    whereToLive: false,
    about: false,
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [whereToLiveSearch, setWhereToLiveSearch] = useState("");

  const { locale, switchLanguage, isTransitioning, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const isMounted = useSafeDOM();

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  // ================= DATA FETCHING ==================
  const aboutMenuItems = useMemo(() => aboutData(CDN), [CDN]);

  const propertiesMenuData = useMemo(
    () => propertiesData(CDN, t, locale),
    [CDN, t, locale]
  );

  const whereToLiveDataArray = useMemo(() => whereToLiveData(CDN), [CDN]);

  const developersDataArray = useMemo(() => developersData(CDN), [CDN]);

  const navItems = useMemo(() => navData, []);

  // ================= INITIALIZE SELECTED ITEMS ==================
  useEffect(() => {
    if (!selectedAboutItem && aboutMenuItems.length > 0) {
      setSelectedAboutItem(aboutMenuItems[0]);
    }
  }, [selectedAboutItem, aboutMenuItems]);

  // ================= SCROLL HANDLER ==================
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMounted]);

  // ================= SAFE MEGA MENU OUTSIDE CLICK ==================
  useEffect(() => {
    if (!isMounted || !activeMegaMenu) return;

    const handleClickOutside = (event) => {
      try {
        if (
          activeMegaMenu &&
          !event.target?.closest?.(`.${styles.megaMenu}`) &&
          !event.target?.closest?.(`.${styles.megaMenuTrigger}`)
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

  // ================= SAFE ROUTE CHANGE RESET ==================
  useEffect(() => {
    if (!isMounted) return;

    setActiveMegaMenu(null);
    setSelectedCategory(null);
    setSelectedProject(null);
    setSelectedWhereToLive(null);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [pathname, isMounted]);

  // ================= MEGA MENU HANDLERS ==================
  const handleMegaMenuEnter = (item) => {
    if (!isMounted || !item || typeof item !== "object") return;
    if (!item.hasMegaMenu) return;

    setActiveMegaMenu(item.label);

    if (item.label === "ABOUT") {
      setSelectedAboutItem(aboutMenuItems[0] || null);
    }
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

  const handleAboutHover = (aboutItem) => {
    setSelectedAboutItem(aboutItem);
  };

  // ================= HELPER FUNCTIONS ==================
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

  // ================= MOBILE MENU HANDLERS ==================
  const toggleMobileCategory = (categoryId) => {
    setMobileExpandedItems((prev) => ({
      ...prev,
      categories: "luxury-properties",
      categoryId: prev.categoryId === categoryId ? null : categoryId,
      developerId: prev.categoryId === categoryId ? prev.developerId : null,
      whereToLive: false,
      about: false,
    }));
  };

  const toggleMobileDeveloper = (developerId) => {
    setMobileExpandedItems((prev) => ({
      ...prev,
      developerId: prev.developerId === developerId ? null : developerId,
    }));
  };

  const toggleMobileWhereToLive = () => {
    setMobileExpandedItems((prev) => ({
      ...prev,
      categories: "where-to-live",
      categoryId: null,
      developerId: null,
      whereToLive: !prev.whereToLive,
      about: false,
    }));
  };

  const toggleMobileAbout = () => {
    setMobileExpandedItems((prev) => ({
      ...prev,
      categories: "about",
      categoryId: null,
      developerId: null,
      whereToLive: false,
      about: !prev.about,
    }));
  };

  const closeAllMobileMenus = () => {
    if (!isMounted) return;

    setMobileExpandedItems({
      categories: null,
      categoryId: null,
      developerId: null,
      whereToLive: false,
      about: false,
    });
    setIsMobileMenuOpen(false);
  };

  // ================= LANGUAGE TOGGLE ==================
  const toggleLanguage = () => {
    if (!isMounted) return;

    const newLang = locale === "en" ? "ar" : "en";
    switchLanguage(newLang);
  };

  // ================= SEARCH HANDLERS ==================
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const term = searchTerm.trim();
    if (!term) return;

    router.push(`/search?q=${encodeURIComponent(term)}`);
    setIsSearchOpen(false);
  };

  // ================= CURRENT SELECTIONS ==================
  const currentCategory = selectedCategory || firstCategory;
  const currentProjects = getCategoryProjects(currentCategory);
  const currentProject =
    selectedProject || (currentProjects.length ? currentProjects[0] : null);

  // ================= SIMPLIFIED SSR VERSION ==================
  if (!isMounted) {
    return null;
  }

  // ================= FULL CLIENT-SIDE VERSION ==================
  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
          isMobileMenuOpen ? styles.mobileMenuOpenHeader : ""
        } ${locale === "ar" ? styles.rtl : ""}`}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className={styles.container}>
          {/* LEFT MENU - REMOVED LOGO FROM HERE */}
          <div
            className={`${styles.menuLeft} ${styles.menuLinks} ${styles.col12} ${styles.colLg5}`}
          >
            <ul className={styles.navLinks}>
              {/* ABOUT MEGA MENU */}
              <li
                className={styles.menuItemHasChildren}
                onMouseEnter={() => {
                  if (!isMobileMenuOpen) {
                    handleMegaMenuEnter({
                      label: "ABOUT",
                      hasMegaMenu: true,
                    });
                  }
                }}
                onMouseLeave={() => {
                  if (!isMobileMenuOpen) {
                    handleMegaMenuLeave();
                  }
                }}
              >
                <Link
                  href="/about"
                  className={`${styles.level1Menu} ${styles.megaMenuTrigger} ${
                    activeMegaMenu === "ABOUT" ? styles.active : ""
                  }`}
                  onClick={(e) => {
                    handleMegaMenuLeave();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  ABOUT
                </Link>
              </li>

              {/* PROPERTIES MEGA MENU */}
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
                  PROPERTIES
                </button>
              </li>

              {/* WHERE TO LIVE MEGA MENU */}
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
                  WHERE TO LIVE
                </button>
              </li>

              {/* DEVELOPERS - NO MEGA MENU */}
              <li className={styles.menuItemHasChildren}>
                <Link
                  href="/developers"
                  className={styles.level1Menu}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  DEVELOPERS
                </Link>
              </li>
            </ul>
          </div>

          {/* CENTER LOGO - ONLY ONE LOGO HERE */}
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

          {/* RIGHT MENU */}
          <div
            className={`${styles.menuRight} ${styles.menuLinks} ${styles.col12} ${styles.colLg5}`}
          >
            <ul className={styles.navLinks}>
              <li className={styles.menuItemHasChildren}>
                <a className={styles.level1Menu} href="/articles/">
                  MEDIA CENTER
                </a>
              </li>

              <li className={styles.menuItemHasChildren}>
                <a className={styles.level1Menu} href="/contact-us/">
                  CONTACT US
                </a>
              </li>

              {/* SEARCH ICON */}
              <li className={styles.searchItem}>
                <button
                  type="button"
                  className={styles.searchTrigger}
                  onClick={() => setIsSearchOpen(true)}
                  aria-label="Open search"
                >
                  <span className={styles.searchIcon}>🔍</span>
                </button>
              </li>

              {/* Language Toggle */}
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

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`${styles.mobileMenuButton} ${
              isMobileMenuOpen ? styles.active : ""
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* ========== DESKTOP MEGA MENU – ABOUT ========== */}
        {isMounted && activeMegaMenu === "ABOUT" && selectedAboutItem && (
          <div
            className={styles.megaMenu}
            onMouseEnter={() => setActiveMegaMenu("ABOUT")}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className={styles.megaMenuInnerCommunities}>
              {/* LEFT – list only */}
              <div className={styles.megaCommunitiesLeft}>
                <div className={styles.megaColumnHeader}>
                  <span className={styles.megaColumnLabel}>
                    ABOUT THE BRAND
                  </span>
                </div>

                <ul className={styles.communityList}>
                  {aboutMenuItems.map((aboutItem) => (
                    <li key={aboutItem.id}>
                      <Link
                        href={`/about/${aboutItem.slug}`}
                        className={`${styles.communityLink} ${
                          selectedAboutItem.id === aboutItem.id
                            ? styles.activeCommunity
                            : ""
                        }`}
                        onMouseEnter={() => handleAboutHover(aboutItem)}
                      >
                        <span className={styles.communityName}>
                          {aboutItem.title}
                        </span>
                        <span className={styles.communityArrow}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT – preview */}
              <div className={styles.megaCommunitiesRight}>
                <div className={styles.communityPreviewWrapper}>
                  <div
                    className={styles.communityPreviewImage}
                    style={{
                      backgroundImage: `url(${selectedAboutItem.image})`,
                    }}
                  />
                  <div className={styles.communityPreviewInfo}>
                    <h3 className={styles.communityPreviewTitle}>
                      {selectedAboutItem.title}
                    </h3>
                    <p className={styles.communityPreviewLocation}>
                      {selectedAboutItem.description}
                    </p>
                    <Link
                      href={`/about/${selectedAboutItem.slug}`}
                      className={styles.communityPreviewButton}
                    >
                      LEARN MORE
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========== DESKTOP MEGA MENU – PROPERTIES ========== */}
        {activeMegaMenu === "PROPERTIES" && (
          <div
            className={styles.megaMenu}
            onMouseEnter={() => setActiveMegaMenu("PROPERTIES")}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className={styles.megaMenuInner}>
              {/* LEFT COLUMN – categories */}
              <div className={styles.megaColumnLeft}>
                <div className={styles.megaColumnHeader}>
                  <span className={styles.megaColumnLabel}>PROPERTY TYPES</span>
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

              {/* MIDDLE COLUMN – projects for current category */}
              <div className={styles.megaColumnMiddle}>
                <div className={styles.megaColumnHeader}>
                  <span className={styles.megaColumnLabel}>
                    {currentCategory?.name || "PROJECTS"}
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

              {/* RIGHT COLUMN – big preview image */}
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

        {/* ========== DESKTOP MEGA MENU – WHERE TO LIVE ========== */}
        {activeMegaMenu === "WHERE TO LIVE" && (
          <div
            className={styles.megaMenu}
            onMouseEnter={() => setActiveMegaMenu("WHERE TO LIVE")}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className={styles.megaMenuInnerCommunities}>
              {/* LEFT – list + search */}
              <div className={styles.megaCommunitiesLeft}>
                <div className={styles.megaColumnHeader}>
                  <span className={styles.megaColumnLabel}>
                    DUBAI NEIGHBORHOODS
                  </span>
                </div>

                <form
                  className={styles.communitySearchForm}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder="Search neighborhood (e.g. JVC, Marina)..."
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

              {/* RIGHT – preview */}
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
                        "Dubai Neighborhood"}
                    </h3>
                    <p className={styles.communityPreviewLocation}>
                      {selectedWhereToLive?.location ||
                        filteredWhereToLive[0]?.location}
                    </p>
                    <div className={styles.communityPreviewStats}>
                      <div className={styles.communityStat}>
                        <span className={styles.communityStatLabel}>
                          Avg. Purchase
                        </span>
                        <span className={styles.communityStatValue}>
                          {selectedWhereToLive?.avgBuy ||
                            filteredWhereToLive[0]?.avgBuy}
                        </span>
                      </div>
                      <div className={styles.communityStat}>
                        <span className={styles.communityStatLabel}>
                          Avg. Rent
                        </span>
                        <span className={styles.communityStatValue}>
                          {selectedWhereToLive?.avgRent ||
                            filteredWhereToLive[0]?.avgRent}
                        </span>
                      </div>
                      <div className={styles.communityStat}>
                        <span className={styles.communityStatLabel}>ROI</span>
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
                      VIEW NEIGHBORHOOD DETAILS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ========== CINEMATIC SEARCH OVERLAY ========== */}
      {isMounted && isSearchOpen && (
        <div className={styles.searchOverlay}>
          <div className={styles.searchPanel}>
            <div className={styles.searchPanelInner}>
              <form className={styles.searchForm} onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  className={styles.searchInput}
                  placeholder="Search projects, neighborhoods, developers, articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  autoFocus
                />
                <button type="submit" className={styles.searchButton}>
                  SEARCH
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

      {/* ========== MOBILE NAV ========== */}
      {isMounted && (
        <div
          className={`${styles.mobileNav} ${
            isMobileMenuOpen ? styles.active : ""
          } ${locale === "ar" ? styles.rtl : ""}`}
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          <div className={styles.mobileNavBackground} />
          <div className={styles.mobileNavContainer}>
            <div className={styles.mobileNavHeader}>
              {/* Mobile Logo - Only in mobile nav */}
              <div className={styles.mobileLogo}>
                <Link
                  href="/"
                  className={styles.logoLink}
                  onClick={closeAllMobileMenus}
                >
                  <img
                    src="/logo-transparent.png"
                    alt="Mohamad Kodmani Real Estate"
                    className={styles.logoImage}
                    width={125}
                    height={45}
                  />
                </Link>
              </div>
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
              {/* Mobile Language Toggle */}
              <div className={styles.mobileLanguageToggle}>
                <button
                  type="button"
                  onClick={toggleLanguage}
                  className={`${styles.mobileLangButton} ${
                    locale === "ar" ? styles.arabicActive : ""
                  }`}
                  aria-label={`Switch to ${
                    locale === "en" ? "Arabic" : "English"
                  }`}
                >
                  <span className={styles.mobileLangText}>
                    {locale === "en" ? "العربية" : "English"}
                  </span>
                  <div className={styles.mobileLangIndicator}>
                    <div
                      className={styles.mobileLangSlider}
                      data-lang={locale}
                    ></div>
                  </div>
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <div className={styles.mobileNavItems}>
                {/* ABOUT - Mobile */}
                <div className={styles.mobileMegaMenuItem}>
                  <button
                    type="button"
                    className={`${styles.mobileNavLink} ${
                      styles.mobileMegaMenuTrigger
                    } ${mobileExpandedItems.about ? styles.expanded : ""}`}
                    onClick={toggleMobileAbout}
                  >
                    <span className={styles.mobileNavText}>ABOUT</span>
                    <span className={styles.mobileDropdownArrow}>
                      {mobileExpandedItems.about ? "↑" : "↓"}
                    </span>
                  </button>

                  {mobileExpandedItems.about && (
                    <div className={styles.mobileMegaMenuContent}>
                      <div className={styles.mobileMenuLevel}>
                        <h4 className={styles.mobileMenuLevelTitle}>
                          ABOUT THE BRAND
                        </h4>
                        {aboutMenuItems.map((aboutItem) => (
                          <a
                            key={aboutItem.id}
                            href={`/about/${aboutItem.slug}`}
                            className={styles.mobileSubLink}
                            onClick={closeAllMobileMenus}
                          >
                            {aboutItem.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* PROPERTIES - Mobile */}
                <div className={styles.mobileMegaMenuItem}>
                  <button
                    type="button"
                    className={`${styles.mobileNavLink} ${
                      styles.mobileMegaMenuTrigger
                    } ${
                      mobileExpandedItems.categories === "luxury-properties"
                        ? styles.expanded
                        : ""
                    }`}
                    onClick={() => toggleMobileCategory("luxury-properties")}
                  >
                    <span className={styles.mobileNavText}>PROPERTIES</span>
                    <span className={styles.mobileDropdownArrow}>
                      {mobileExpandedItems.categories === "luxury-properties"
                        ? "↑"
                        : "↓"}
                    </span>
                  </button>

                  {mobileExpandedItems.categories === "luxury-properties" && (
                    <div className={styles.mobileMegaMenuContent}>
                      <div className={styles.mobileMenuLevel}>
                        <h4 className={styles.mobileMenuLevelTitle}>
                          Property Types
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
                                  Developers in {category.name}
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
                                      <div
                                        className={styles.mobileProjectsList}
                                      >
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
                                              className={
                                                styles.mobileProjectInfo
                                              }
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

                {/* WHERE TO LIVE - Mobile */}
                <div className={styles.mobileMegaMenuItem}>
                  <button
                    type="button"
                    className={`${styles.mobileNavLink} ${
                      styles.mobileMegaMenuTrigger
                    } ${
                      mobileExpandedItems.whereToLive ? styles.expanded : ""
                    }`}
                    onClick={toggleMobileWhereToLive}
                  >
                    <span className={styles.mobileNavText}>WHERE TO LIVE</span>
                    <span className={styles.mobileDropdownArrow}>
                      {mobileExpandedItems.whereToLive ? "↑" : "↓"}
                    </span>
                  </button>

                  {mobileExpandedItems.whereToLive && (
                    <div className={styles.mobileMegaMenuContent}>
                      <div className={styles.mobileMenuLevel}>
                        <h4 className={styles.mobileMenuLevelTitle}>
                          DUBAI NEIGHBORHOODS
                        </h4>
                        <div className={styles.mobileSearchContainer}>
                          <input
                            type="text"
                            placeholder="Search neighborhoods..."
                            className={styles.mobileSearchInput}
                            value={whereToLiveSearch}
                            onChange={(e) =>
                              setWhereToLiveSearch(e.target.value)
                            }
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

                {/* DEVELOPERS - Simple Link (No Mega Menu) */}
                <a
                  href="/developers"
                  className={styles.mobileNavLink}
                  onClick={closeAllMobileMenus}
                >
                  <span className={styles.mobileNavText}>DEVELOPERS</span>
                </a>

                {/* MEDIA CENTER */}
                <a
                  href="/articles"
                  className={styles.mobileNavLink}
                  onClick={closeAllMobileMenus}
                >
                  <span className={styles.mobileNavText}>MEDIA CENTER</span>
                </a>

                {/* CONTACT US */}
                <a
                  href="/contact-us"
                  className={styles.mobileNavLink}
                  onClick={closeAllMobileMenus}
                >
                  <span className={styles.mobileNavText}>CONTACT US</span>
                </a>
              </div>

              <div className={styles.mobileContact}>
                <div className={styles.mobileContactTitle}>Contact Us</div>
                <div className={styles.contactItem}>
                  <div className={styles.contactDetails}>
                    <div className={styles.contactType}>Direct Line</div>
                    <div className={styles.contactValue}>+971 56 666 5560</div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
