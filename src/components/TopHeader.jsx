"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/TopHeader.module.css";

export default function TopHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState({});
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    if (isMobileMenuOpen) {
      document.body.classList.add(styles.mobileMenuOpen);
    } else {
      document.body.classList.remove(styles.mobileMenuOpen);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove(styles.mobileMenuOpen);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { href: "/", label: "Home", type: "primary" },
    { href: "/about", label: "About", type: "primary" },
    {
      href: "/projects",
      label: "Luxury Projects",
      type: "primary",
      hasMegaMenu: true,
    },
    { href: "/articles", label: "Market Insights", type: "primary" },
    { href: "/contact", label: "Consultation", type: "cta" },
  ];

  const menuData = {
    categories: [
      {
        id: 1,
        name: "Apartments",
        slug: "apartments",
        description: "Luxury apartments in Dubai's most sought-after areas",
        image:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
        icon: "🏢",
        developers: [
          {
            id: 1,
            name: "Sobha Realty",
            slug: "sobha",
            image:
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
            projects: [
              {
                id: 101,
                title: "Sobha SkyParks",
                slug: "sky-parks",
                image:
                  "https://luxury-real-estate-media.b-cdn.net/sky-parks/exterior-night-01.jpg",
                description: "Luxury high-rise with panoramic city views",
              },
              {
                id: 102,
                title: "Sobha AquaCrest",
                slug: "aqua-crest",
                image:
                  "https://luxury-real-estate-media.b-cdn.net/aqua-crest/amenity-infinity-pool-01.jpg",
                description: "Beachfront luxury residences",
              },
              {
                id: 103,
                title: "Sobha Central",
                slug: "central",
                image:
                  "https://luxury-real-estate-media.b-cdn.net/sobha-central/exterior-towers-angled-01.jpg",
                description: "Downtown premium apartments",
              },
              {
                id: 104,
                title: "Sobha Aquamont",
                slug: "aquamont",
                image:
                  "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=800&q=80",
                description: "Mountain view luxury residences",
              },
            ],
          },
          {
            id: 2,
            name: "Nakheel",
            slug: "nakheel",
            image:
              "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?auto=format&fit=crop&w=800&q=80",
            projects: [
              {
                id: 106,
                title: "Palm Central – Nakheel",
                slug: "palm-central",
                image:
                  "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?auto=format&fit=crop&w=800&q=80",
                description: "Palm Jumeirah luxury living",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        name: "Villas",
        slug: "villas",
        description: "Exclusive villa developments and waterfront communities",
        image:
          "https://images.unsplash.com/photo-1600585154314-8c5b4cdbb81a?auto=format&fit=crop&w=800&q=80",
        icon: "🏡",
        developers: [
          {
            id: 1,
            name: "Sobha Realty",
            slug: "sobha",
            image:
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
            projects: [
              {
                id: 201,
                title: "Sobha Hartland 2 Villas",
                slug: "hartland-2-villas",
                image:
                  "https://images.unsplash.com/photo-1600585154314-8c5b4cdbb81a?auto=format&fit=crop&w=800&q=80",
                description: "Premium waterfront villas",
              },
              {
                id: 202,
                title: "Sobha Al Sinniyyah Island",
                slug: "al-sinniyyah-island",
                image:
                  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
                description: "Private island luxury villas",
              },
            ],
          },
          {
            id: 2,
            name: "Arada",
            slug: "arada",
            image:
              "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
            projects: [
              {
                id: 203,
                title: "Arada – Masaar 3",
                slug: "masaar-3",
                image:
                  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
                description: "Gated community luxury villas",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        name: "Commercial / Retail",
        slug: "commercial-retail",
        description: "High-ROI commercial and mixed-use developments",
        image:
          "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
        icon: "🏬",
        developers: [
          // ✅ Added Omniyat here with Lumina Alta
          {
            id: 2,
            name: "Omniyat",
            slug: "omniyat",
            image:
              "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80",
            projects: [
              {
                id: 305,
                title: "Lumina Alta – Omniyat",
                slug: "lumina-alta",
                image:
                  "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80",
                description: "Ultra-luxury residential tower",
              },
            ],
          },
          {
            id: 1,
            name: "Azizi Developments",
            slug: "azizi",
            image:
              "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
            projects: [
              {
                id: 301,
                title: "Azizi Riviera – Retails",
                slug: "riviera-retails",
                image:
                  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
                description: "Premium retail spaces",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        name: "Penthouses",
        slug: "penthouses",
        description: "Ultra-luxury penthouses with panoramic views",
        image:
          "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
        icon: "🏔️",
        developers: [
          {
            id: 1,
            name: "Sobha Realty",
            slug: "sobha",
            image:
              "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
            projects: [
              {
                id: 401,
                title: "Sobha SeaHaven Penthouse",
                slug: "seahaven-penthouse",
                image:
                  "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
                description: "Ultra-luxury penthouse with sea views",
              },
            ],
          },
        ],
      },
    ],
  };

  const handleMegaMenuEnter = (item) => {
    if (item.hasMegaMenu) {
      setActiveMegaMenu(item.label);
      // Auto-select first category
      setSelectedCategory(menuData.categories[0]);
      setSelectedDeveloper(menuData.categories[0]?.developers[0] || null);
      setSelectedProject(
        menuData.categories[0]?.developers[0]?.projects[0] || null
      );
    }
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

  const handleProjectHover = (project) => {
    setSelectedProject(project);
  };

  // Mobile accordion handlers
  const toggleMobileCategory = (categoryId) => {
    setMobileExpandedItems((prev) => ({
      ...prev,
      categories: prev.categories === categoryId ? null : categoryId,
    }));
  };

  const toggleMobileDeveloper = (developerId) => {
    setMobileExpandedItems((prev) => ({
      ...prev,
      developers: prev.developers === developerId ? null : developerId,
    }));
  };

  const closeAllMobileMenus = () => {
    setMobileExpandedItems({});
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={styles.headerSpacer}></div>

      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.backgroundOverlay}></div>

        <div className={styles.container}>
          {/* Desktop Navigation */}
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
                    {item.type === "cta" && (
                      <span className={styles.ctaGlow}></span>
                    )}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Multi-Level Mega Menu */}
          {activeMegaMenu && (
            <div className={styles.megaMenu} onMouseLeave={handleMegaMenuLeave}>
              <div className={styles.megaMenuContainer}>
                <div className={styles.megaMenuContent}>
                  {/* Level 1: Categories - Fixed Width */}
                  <div className={styles.menuLevel}>
                    <div className={styles.menuLevelHeader}>
                      <h3 className={styles.menuLevelTitle}>Property Types</h3>
                      <p className={styles.menuLevelDescription}>
                        Explore our luxury property portfolio
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
                          <div className={styles.categoryIcon}>
                            {category.icon}
                          </div>
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

                  {/* Level 2: Developers - Shows when category is selected */}
                  {selectedCategory && (
                    <div className={styles.menuLevel}>
                      <div className={styles.menuLevelHeader}>
                        <h3 className={styles.menuLevelTitle}>
                          Developers in {selectedCategory.name}
                        </h3>
                        <p className={styles.menuLevelDescription}>
                          Select a developer to view their projects
                        </p>
                      </div>
                      <div className={styles.developersList}>
                        {selectedCategory.developers.map((developer) => (
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
                              <div className={styles.developerIcon}>🏗️</div>
                              <div className={styles.developerInfo}>
                                <h4 className={styles.developerName}>
                                  {developer.name}
                                </h4>
                                <p className={styles.projectCount}>
                                  {developer.projects.length} project
                                  {developer.projects.length !== 1 ? "s" : ""}
                                </p>
                              </div>
                              <span className={styles.developerArrow}>→</span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Level 3: Projects - Shows when developer is selected */}
                  {selectedDeveloper && (
                    <div className={styles.menuLevel}>
                      <div className={styles.menuLevelHeader}>
                        <h3 className={styles.menuLevelTitle}>
                          Projects by {selectedDeveloper.name}
                        </h3>
                        <p className={styles.menuLevelDescription}>
                          Browse available properties
                        </p>
                      </div>
                      <div className={styles.projectsList}>
                        {selectedDeveloper.projects.map((project) => (
                          <a
                            key={project.id}
                            href={`/projects/${selectedCategory.slug}/${selectedDeveloper.slug}/${project.slug}`}
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
                  )}

                  {/* Image Preview Panel - Fixed Width */}
                  <div className={styles.imagePreviewPanel}>
                    <div className={styles.imagePreviewContent}>
                      {selectedProject ? (
                        <>
                          <a
                            href={`/projects/${selectedCategory.slug}/${selectedDeveloper.slug}/${selectedProject.slug}`}
                            className={styles.previewImageLink}
                          >
                            <div
                              className={styles.previewImage}
                              style={{
                                backgroundImage: `url(${selectedProject.image})`,
                              }}
                            ></div>
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
                                {selectedCategory.name}
                              </span>
                              <span className={styles.stat}>
                                {selectedDeveloper.name}
                              </span>
                              <span className={styles.stat}>Luxury</span>
                            </div>
                            <a
                              href={`/projects/${selectedCategory.slug}/${selectedDeveloper.slug}/${selectedProject.slug}`}
                              className={styles.previewButton}
                            >
                              View Project Details
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
                          ></div>
                          <div className={styles.previewInfo}>
                            <h3 className={styles.previewTitle}>
                              {selectedDeveloper.name}
                            </h3>
                            <p className={styles.previewDescription}>
                              Premium developer in {selectedCategory.name}
                            </p>
                            <div className={styles.previewStats}>
                              <span className={styles.stat}>
                                {selectedDeveloper.projects.length} Projects
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
                          ></div>
                          <div className={styles.previewInfo}>
                            <h3 className={styles.previewTitle}>
                              {selectedCategory.name}
                            </h3>
                            <p className={styles.previewDescription}>
                              {selectedCategory.description}
                            </p>
                            <div className={styles.previewStats}>
                              <span className={styles.stat}>
                                {selectedCategory.developers.length} Developers
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
                              backgroundImage: `url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80)`,
                            }}
                          ></div>
                          <div className={styles.previewInfo}>
                            <h3 className={styles.previewTitle}>
                              Luxury Projects
                            </h3>
                            <p className={styles.previewDescription}>
                              Discover our premium real estate portfolio
                            </p>
                            <div className={styles.previewStats}>
                              <span className={styles.stat}>
                                {menuData.categories.length} Categories
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

          {/* Desktop Contact CTA */}
          <div className={styles.desktopContact}>
            <div className={styles.contactBadge}>
              <div className={styles.contactIcon}>📞</div>
              <div className={styles.contactInfo}>
                <div className={styles.contactLabel}>Direct Line</div>
                <div className={styles.contactNumber}>+971 56 666 5560</div>
              </div>
            </div>
          </div>

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

      {/* Mobile Navigation */}
      <div
        className={`${styles.mobileNav} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
      >
        <div className={styles.mobileNavBackground}></div>
        <div className={styles.mobileNavContainer}>
          <div className={styles.mobileNavHeader}>
            <div className={styles.mobileLogo}></div>
            <button
              className={styles.mobileCloseButton}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <nav className={styles.mobileNavContent}>
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

                    {/* Mobile Mega Menu Content */}
                    {mobileExpandedItems.categories === "luxury-projects" && (
                      <div className={styles.mobileMegaMenuContent}>
                        {/* Categories Level */}
                        <div className={styles.mobileMenuLevel}>
                          <h4 className={styles.mobileMenuLevelTitle}>
                            Property Types
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
                                <span className={styles.mobileCategoryIcon}>
                                  {category.icon}
                                </span>
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

                              {/* Developers Level */}
                              {mobileExpandedItems.categoryId ===
                                category.id && (
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
                                        <span
                                          className={styles.mobileDeveloperIcon}
                                        >
                                          🏗️
                                        </span>
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

                                      {/* Projects Level */}
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
                                              ></div>
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
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className={styles.mobileNavText}>{item.label}</span>
                    {item.type === "cta" && (
                      <span className={styles.mobileCtaIcon}>✨</span>
                    )}
                  </a>
                )}
              </div>
            ))}

            <div className={styles.mobileContact}>
              <div className={styles.mobileContactTitle}>Contact Us</div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <div className={styles.contactDetails}>
                  <div className={styles.contactType}>Direct Line</div>
                  <div className={styles.contactValue}>+971 56 666 5560</div>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div className={styles.contactDetails}>
                  <div className={styles.contactType}>Email</div>
                  <div className={styles.contactValue}>info@sodhia.com</div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

/* Comment */
