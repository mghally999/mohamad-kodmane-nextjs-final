"use client";
import { useState, useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/TopHeader.module.css";
import { useLanguage } from "./LanguageProvider";

export default function TopHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState({
    categories: null,
    categoryId: null,
    developerId: null,
  });

  const { locale, switchLanguage, isTransitioning, t } = useLanguage();
  const pathname = usePathname();

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  // Fixed menu data with projectNames
  const menuData = useMemo(() => {
    const data = {
      categories: [
        {
          id: 1,
          name: t("categories.apartments"),
          slug: "apartments",
          description: t("descriptions.apartments"),
          image: `${CDN}/sky-parks/exterior-night-01.jpg`,
          developers: [
            {
              id: 1,
              name: t("developers.sobhaRealty"),
              slug: "sobha",
              image: `${CDN}/aquamont/intro-main.png`,
              logo: `/Sobha-Realty-Square-Logo.jpg`,
              projects: [
                {
                  id: 101,
                  title: t("projectNames.sobhaSkyParks"),
                  slug: "skyparks",
                  image: `${CDN}/sky-parks/exterior-night-01.jpg`,
                  description: t("descriptions.apartments"),
                },
                {
                  id: 102,
                  title: t("projectNames.sobhaAquaCrest"),
                  slug: "aqua-crest",
                  image: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
                  description: t("descriptions.apartments"),
                },
                {
                  id: 103,
                  title: t("projectNames.sobhaCentral"),
                  slug: "central",
                  image: `${CDN}/sobha-central/exterior-towers-angled-01.jpg`,
                  description: t("descriptions.apartments"),
                },
                {
                  id: 104,
                  title: t("projectNames.sobhaAquamont"),
                  slug: "aquamont",
                  image: `${CDN}/aquamont/intro-main.png`,
                  description: t("descriptions.apartments"),
                },
              ],
            },
            {
              id: 2,
              name: t("developers.nakheel"),
              slug: "nakheel",
              image: `${CDN}/palm-central/exterior-lagoon-01.jpg`,
              logo: `/Nakheel-Developments.webp`,
              projects: [
                {
                  id: 106,
                  title: t("projectNames.palmCentralNakheel"),
                  slug: "palm-central",
                  image: `${CDN}/palm-central/exterior-lagoon-01.jpg`,
                  description: t("descriptions.apartments"),
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: t("categories.villas"),
          slug: "villas",
          description: t("descriptions.villas"),
          image: `${CDN}/hartland/hero-bg.jpg`,
          developers: [
            {
              id: 1,
              name: t("developers.sobhaRealty"),
              slug: "sobha",
              image: `${CDN}/hartland/hero-bg.jpg`,
              logo: `/Sobha-Realty-Square-Logo.jpg`,
              projects: [
                {
                  id: 201,
                  title: t("projectNames.sobhaHartland2Villas"),
                  slug: "hartland",
                  image: `${CDN}/hartland/hero-bg.jpg`,
                  description: t("descriptions.villas"),
                },
                {
                  id: 202,
                  title: t("projectNames.sobhaAlSinniyyahIsland"),
                  slug: "al-sinniyyah-island",
                  image: `${CDN}/al-sinniyyah-island/hero-bg.jpg`,
                  description: t("descriptions.villas"),
                },
              ],
            },
            {
              id: 2,
              name: t("developers.arada"),
              slug: "arada",
              image: `${CDN}/massar-3/hero-bg.jpg`,
              logo: `/arada-developer.avif`,
              projects: [
                {
                  id: 203,
                  title: t("projectNames.aradaMassar3"),
                  slug: "massar",
                  image: `${CDN}/massar-3/hero-bg.jpg`,
                  description: t("descriptions.villas"),
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: t("categories.commercial"),
          slug: "commercial-retail",
          description: t("descriptions.commercial"),
          image: `${CDN}/riviera-retails/hero-bg.jpg`,
          developers: [
            {
              id: 2,
              name: t("developers.omniyat"),
              slug: "omniyat",
              image: `${CDN}/lumena-alta/hero-bg.jpg`,
              logo: `/omniyat-logo.avif`,
              projects: [
                {
                  id: 305,
                  title: t("projectNames.luminaAlta"),
                  slug: "lumenaalta",
                  image: `${CDN}/lumena-alta/hero-bg.jpg`,
                  description: t("descriptions.commercial"),
                },
              ],
            },
            {
              id: 1,
              name: t("developers.aziziDevelopments"),
              slug: "azizi",
              image: `${CDN}/riviera/hero-bg.jpg`,
              logo: `/azizi.jpg`,
              projects: [
                {
                  id: 301,
                  title: t("projectNames.aziziRivieraRetails"),
                  slug: "riviera-retails",
                  image: `${CDN}/riviera/hero-bg.jpg`,
                  description: t("descriptions.commercial"),
                },
              ],
            },
          ],
        },
        {
          id: 4,
          name: t("categories.penthouses"),
          slug: "penthouses",
          description: t("descriptions.penthouses"),
          image: `${CDN}/sky-parks/exterior-night-01.jpg`,
          developers: [
            {
              id: 1,
              name: t("developers.sobhaRealty"),
              slug: "sobha",
              image: `${CDN}/sky-parks/exterior-night-01.jpg`,
              logo: `/Sobha-Realty-Square-Logo.jpg`,
              projects: [
                {
                  id: 401,
                  title: t("projectNames.sobhaSeaHavenPenthouse"),
                  slug: "seahaven-penthouse",
                  image: `${CDN}/sky-parks/exterior-night-01.jpg`,
                  description: t("descriptions.penthouses"),
                },
              ],
            },
          ],
        },
      ],
    };

    return data;
  }, [t, locale]);

  // Navigation items with translation keys
  const navItems = useMemo(
    () => [
      { href: "/", label: t("nav.home"), type: "primary" },
      { href: "/about", label: t("nav.about"), type: "primary" },
      {
        href: "/projects",
        label: t("nav.projects"),
        type: "primary",
        hasMegaMenu: true,
      },
      {
        href: "/articles",
        label: t("nav.marketInsights"),
        type: "primary",
      },
    ],
    [t, locale]
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    if (isMobileMenuOpen) document.body.classList.add(styles.mobileMenuOpen);
    else document.body.classList.remove(styles.mobileMenuOpen);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove(styles.mobileMenuOpen);
    };
  }, [isMobileMenuOpen]);

  const toggleLanguage = () => {
    const newLang = locale === "en" ? "ar" : "en";
    switchLanguage(newLang);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeMegaMenu &&
        !event.target.closest(`.${styles.megaMenu}`) &&
        !event.target.closest(`.${styles.megaMenuTrigger}`)
      ) {
        handleMegaMenuLeave();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMegaMenu]);

  const handleMegaMenuEnter = (item) => {
    if (!item.hasMegaMenu) return;
    setActiveMegaMenu(item.label);
    setSelectedCategory(menuData.categories[0]);
    setSelectedDeveloper(menuData.categories[0]?.developers[0] || null);
    setSelectedProject(
      menuData.categories[0]?.developers[0]?.projects[0] || null
    );
  };

  const handleMegaMenuLeave = () => {
    setActiveMegaMenu(null);
    setSelectedCategory(null);
    setSelectedDeveloper(null);
    setSelectedProject(null);
  };

  const handleCategoryHover = (category) => {
    setSelectedCategory(category);
    setSelectedDeveloper(category.developers[0] || null);
    setSelectedProject(category.developers[0]?.projects[0] || null);
  };

  const handleDeveloperHover = (developer) => {
    setSelectedDeveloper(developer);
    setSelectedProject(developer.projects[0] || null);
  };

  const handleProjectHover = (project) => setSelectedProject(project);

  const toggleMobileCategory = (categoryId) => {
    setMobileExpandedItems((prev) => ({
      categories: "luxury-projects",
      categoryId: prev.categoryId === categoryId ? null : categoryId,
      developerId: prev.categoryId === categoryId ? prev.developerId : null,
    }));
  };

  const toggleMobileDeveloper = (developerId) => {
    setMobileExpandedItems((prev) => ({
      ...prev,
      developerId: prev.developerId === developerId ? null : developerId,
    }));
  };

  const closeAllMobileMenus = () => {
    setMobileExpandedItems({
      categories: null,
      categoryId: null,
      developerId: null,
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={styles.headerSpacer} />

      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        } ${locale === "ar" ? styles.rtl : ""}`}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className={styles.backgroundOverlay} />

        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <a href="/" className={styles.logoLink}>
              <div className={styles.logoText}>{t("Header.title")}</div>
              <div className={styles.logoSubtitle}>{t("Header.subtitle")}</div>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <div
                key={item.href}
                className={styles.navItemWrapper}
                onMouseEnter={() => handleMegaMenuEnter(item)}
              >
                {item.hasMegaMenu ? (
                  <button
                    className={`${styles.navLink} ${styles.megaMenuTrigger} ${
                      activeMegaMenu === item.label ? styles.active : ""
                    }`}
                  >
                    {item.label}
                    <span className={styles.dropdownArrow}>▼</span>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${
                      item.type === "cta" ? styles.ctaButton : ""
                    } ${pathname === item.href ? styles.active : ""}`}
                  >
                    {item.label}
                    {item.type === "cta" && <span className={styles.ctaGlow} />}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Language Toggle Button */}
          <div className={styles.languageToggle}>
            <button
              onClick={toggleLanguage}
              disabled={isTransitioning}
              className={`${styles.langButton} ${
                locale === "ar" ? styles.arabicActive : ""
              } ${isTransitioning ? styles.transitioning : ""}`}
              aria-label={`Switch to ${locale === "en" ? "Arabic" : "English"}`}
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
          </div>

          {/* Mega Menu */}
          {activeMegaMenu && (
            <div className={styles.megaMenu} onMouseLeave={handleMegaMenuLeave}>
              <div className={styles.megaMenuContainer}>
                <div className={styles.megaMenuContent}>
                  {/* Column 1: Categories */}
                  <div className={styles.menuLevel}>
                    <div className={styles.menuLevelHeader}>
                      <h3 className={styles.menuLevelTitle}>
                        {t("nav.propertyTypes")}
                      </h3>
                      <p className={styles.menuLevelDescription}>
                        {t("nav.explorePortfolio")}
                      </p>
                    </div>
                    <div className={styles.categoriesGrid}>
                      {menuData.categories.map((category) => (
                        <button
                          key={category.id}
                          className={`${styles.categoryCard} ${
                            selectedCategory?.id === category.id
                              ? styles.active
                              : ""
                          }`}
                          onMouseEnter={() => handleCategoryHover(category)}
                        >
                          <div className={styles.categoryInfo}>
                            <h4 className={styles.categoryName}>
                              {category.name}
                            </h4>
                            <p className={styles.categoryDescription}>
                              {category.description}
                            </p>
                          </div>
                          <span className={styles.categoryArrow}>→</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Column 2: Developers */}
                  <div className={styles.menuLevel}>
                    <div className={styles.menuLevelHeader}>
                      <h3 className={styles.menuLevelTitle}>
                        {t("nav.developers")}{" "}
                        {selectedCategory &&
                          t("descriptions.developerIn", {
                            category: selectedCategory.name,
                          })}
                      </h3>
                      <p className={styles.menuLevelDescription}>
                        {t("nav.selectDeveloper")}
                      </p>
                    </div>
                    <div className={styles.developersList}>
                      {selectedCategory?.developers.map((developer) => (
                        <button
                          key={developer.id}
                          className={`${styles.developerItem} ${
                            selectedDeveloper?.id === developer.id
                              ? styles.active
                              : ""
                          }`}
                          onMouseEnter={() => handleDeveloperHover(developer)}
                        >
                          <div className={styles.developerHeader}>
                            {developer.logo && (
                              <div className={styles.developerLogo}>
                                <img
                                  src={developer.logo}
                                  alt={`${developer.name} logo`}
                                  className={styles.developerLogoImage}
                                />
                              </div>
                            )}
                            <div className={styles.developerInfo}>
                              <h4 className={styles.developerName}>
                                {developer.name}
                              </h4>
                              <p className={styles.projectCount}>
                                {developer.projects.length}{" "}
                                {t("nav.projectsList").toLowerCase()}
                              </p>
                            </div>
                            <span className={styles.developerArrow}>→</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Column 3: Projects */}
                  <div className={styles.menuLevel}>
                    <div className={styles.menuLevelHeader}>
                      <h3 className={styles.menuLevelTitle}>
                        {t("nav.projectsList")}{" "}
                        {selectedDeveloper &&
                          t("descriptions.projectsBy", {
                            developer: selectedDeveloper.name,
                          })}
                      </h3>
                      <p className={styles.menuLevelDescription}>
                        {t("nav.browseProperties")}
                      </p>
                    </div>
                    <div className={styles.projectsList}>
                      {selectedDeveloper?.projects.map((project) => (
                        <a
                          key={project.id}
                          href={`/projects/${selectedCategory?.slug}/${selectedDeveloper?.slug}/${project.slug}`}
                          className={`${styles.projectItem} ${
                            selectedProject?.id === project.id
                              ? styles.active
                              : ""
                          }`}
                          onMouseEnter={() => handleProjectHover(project)}
                        >
                          <div className={styles.projectInfo}>
                            <h4 className={styles.projectTitle}>
                              {project.title}
                            </h4>
                            <p className={styles.projectDescription}>
                              {project.description}
                            </p>
                          </div>
                          <span className={styles.projectArrow}>→</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Preview Panel */}
                  <div className={styles.imagePreviewPanel}>
                    <div className={styles.imagePreviewContent}>
                      {selectedProject ? (
                        <>
                          <a
                            href={`/projects/${selectedCategory?.slug}/${selectedDeveloper?.slug}/${selectedProject.slug}`}
                            className={styles.previewImageLink}
                          >
                            <div
                              className={`${styles.previewImage} ${styles.projectImageActive}`}
                              style={{
                                backgroundImage: `url(${selectedProject.image})`,
                              }}
                            />
                          </a>
                          <div className={styles.previewInfo}>
                            <h3 className={styles.previewTitle}>
                              {selectedProject.title}
                            </h3>
                            <p className={styles.previewDescription}>
                              {selectedProject.description}
                            </p>
                            <div className={styles.previewStats}>
                              <span className={styles.stat}>
                                {selectedCategory?.name}
                              </span>
                              <span className={styles.stat}>
                                {selectedDeveloper?.name}
                              </span>
                              <span className={styles.stat}>Luxury</span>
                            </div>
                            <a
                              href={`/projects/${selectedCategory?.slug}/${selectedDeveloper?.slug}/${selectedProject.slug}`}
                              className={styles.previewButton}
                            >
                              {t("nav.viewProjectDetails")}
                              <span className={styles.buttonArrow}>→</span>
                            </a>
                          </div>
                        </>
                      ) : selectedDeveloper ? (
                        <>
                          <div
                            className={styles.previewImage}
                            style={{
                              backgroundImage: `url(${selectedDeveloper.image})`,
                            }}
                          />
                          <div className={styles.previewInfo}>
                            <h3 className={styles.previewTitle}>
                              {selectedDeveloper.name}
                            </h3>
                            <p className={styles.previewDescription}>
                              {t("descriptions.premiumDeveloper", {
                                category: selectedCategory?.name,
                              })}
                            </p>
                            <div className={styles.previewStats}>
                              <span className={styles.stat}>
                                {selectedDeveloper.projects.length}{" "}
                                {t("nav.projectsList")}
                              </span>
                              <span className={styles.stat}>Luxury</span>
                              <span className={styles.stat}>Premium</span>
                            </div>
                          </div>
                        </>
                      ) : selectedCategory ? (
                        <>
                          <div
                            className={styles.previewImage}
                            style={{
                              backgroundImage: `url(${selectedCategory.image})`,
                            }}
                          />
                          <div className={styles.previewInfo}>
                            <h3 className={styles.previewTitle}>
                              {selectedCategory.name}
                            </h3>
                            <p className={styles.previewDescription}>
                              {selectedCategory.description}
                            </p>
                            <div className={styles.previewStats}>
                              <span className={styles.stat}>
                                {selectedCategory.developers.length}{" "}
                                {t("nav.developers")}
                              </span>
                              <span className={styles.stat}>Premium</span>
                              <span className={styles.stat}>Luxury</span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className={styles.previewImage}
                            style={{
                              backgroundImage: `url(${CDN}/sky-parks/exterior-night-01.jpg)`,
                            }}
                          />
                          <div className={styles.previewInfo}>
                            <h3 className={styles.previewTitle}>
                              {t("nav.projects")}
                            </h3>
                            <p className={styles.previewDescription}>
                              {t("descriptions.discoverPortfolio")}
                            </p>
                            <div className={styles.previewStats}>
                              <span className={styles.stat}>
                                {menuData.categories.length}{" "}
                                {t("nav.propertyTypes")}
                              </span>
                              <span className={styles.stat}>Premium</span>
                              <span className={styles.stat}>Exclusive</span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
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
      </header>

      {/* Mobile Nav */}
      <div
        className={`${styles.mobileNav} ${
          isMobileMenuOpen ? styles.active : ""
        } ${locale === "ar" ? styles.rtl : ""}`}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className={styles.mobileNavBackground} />
        <div className={styles.mobileNavContainer}>
          <div className={styles.mobileNavHeader}>
            <div className={styles.mobileLogo}>
              <div className={styles.mobileLogoText}>{t("Header.title")}</div>
              <div className={styles.mobileLogoSubtitle}>
                {t("Header.subtitle")}
              </div>
            </div>
            <button
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

            {navItems.map((item) => (
              <div key={item.href}>
                {item.hasMegaMenu ? (
                  <div className={styles.mobileMegaMenuItem}>
                    <button
                      className={`${styles.mobileNavLink} ${styles.mobileMegaMenuTrigger}`}
                      onClick={() => toggleMobileCategory("luxury-projects")}
                    >
                      <span className={styles.mobileNavText}>{item.label}</span>
                      <span
                        className={`${styles.mobileDropdownArrow} ${
                          mobileExpandedItems.categories === "luxury-projects"
                            ? styles.expanded
                            : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {mobileExpandedItems.categories === "luxury-projects" && (
                      <div className={styles.mobileMegaMenuContent}>
                        <div className={styles.mobileMenuLevel}>
                          <h4 className={styles.mobileMenuLevelTitle}>
                            {t("nav.propertyTypes")}
                          </h4>

                          {menuData.categories.map((category) => (
                            <div
                              key={category.id}
                              className={styles.mobileCategoryItem}
                            >
                              <button
                                className={`${styles.mobileCategoryButton} ${
                                  mobileExpandedItems.categoryId === category.id
                                    ? styles.expanded
                                    : ""
                                }`}
                                onClick={() =>
                                  toggleMobileCategory(category.id)
                                }
                              >
                                <span className={styles.mobileCategoryName}>
                                  {category.name}
                                </span>
                                <span className={styles.mobileCategoryArrow}>
                                  {mobileExpandedItems.categoryId ===
                                  category.id
                                    ? "↑"
                                    : "↓"}
                                </span>
                              </button>

                              {mobileExpandedItems.categoryId ===
                                category.id && (
                                <div className={styles.mobileDevelopersList}>
                                  <h5 className={styles.mobileDevelopersTitle}>
                                    {t("descriptions.developerIn", {
                                      category: category.name,
                                    })}
                                  </h5>

                                  {category.developers.map((developer) => (
                                    <div
                                      key={developer.id}
                                      className={styles.mobileDeveloperItem}
                                    >
                                      <button
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
                                            className={
                                              styles.mobileDeveloperLogo
                                            }
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
                                          className={
                                            styles.mobileDeveloperArrow
                                          }
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
                                              className={
                                                styles.mobileProjectLink
                                              }
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
                ) : (
                  <a
                    href={item.href}
                    className={`${styles.mobileNavLink} ${
                      item.type === "cta" ? styles.mobileCta : ""
                    } ${pathname === item.href ? styles.active : ""}`}
                    onClick={closeAllMobileMenus}
                  >
                    <span className={styles.mobileNavText}>{item.label}</span>
                  </a>
                )}
              </div>
            ))}

            <div className={styles.mobileContact}>
              <div className={styles.mobileContactTitle}>
                {t("nav.contactUs")}
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactDetails}>
                  <div className={styles.contactType}>
                    {t("nav.directLine")}
                  </div>
                  <div className={styles.contactValue}>+971 56 666 5560</div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
