"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/TopHeader.module.css";

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
  const pathname = usePathname();

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

  const navItems = [
    { href: "/", label: "Home", type: "primary" },
    { href: "/about", label: "About", type: "primary" },
    {
      href: "/projects",
      label: "Projects",
      type: "primary",
      hasMegaMenu: true,
    },
    { href: "/articles", label: "Market Insights", type: "primary" },
    { href: "/contact", label: "Consultation", type: "cta" },
  ];

  // ===== ALL CDN IMAGES (Bunny) =====
  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  const menuData = {
    categories: [
      {
        id: 1,
        name: "Apartments",
        slug: "apartments",
        description: "Luxury apartments in Dubai's most sought-after areas",
        image: `${CDN}/sky-parks/exterior-night-01.jpg`,
        developers: [
          {
            id: 1,
            name: "Sobha Realty",
            slug: "sobha",
            image: `${CDN}/aquamont/intro-main.png`,
            logo: `${CDN}/developers/sobha-logo.png`, // Developer logo
            projects: [
              {
                id: 101,
                title: "Sobha SkyParks",
                slug: "skyparks",
                image: `${CDN}/sky-parks/exterior-night-01.jpg`,
                description: "Luxury high-rise with panoramic city views",
              },
              {
                id: 102,
                title: "Sobha AquaCrest",
                slug: "aqua-crest",
                image: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
                description: "Beachfront luxury residences",
              },
              {
                id: 103,
                title: "Sobha Central",
                slug: "central",
                image: `${CDN}/sobha-central/exterior-towers-angled-01.jpg`,
                description: "Downtown premium apartments",
              },
              {
                id: 104,
                title: "Sobha Aquamont",
                slug: "aquamont",
                image: `${CDN}/aquamont/intro-main.png`,
                description: "Mountain view luxury residences",
              },
            ],
          },
          {
            id: 2,
            name: "Nakheel",
            slug: "nakheel",
            image: `${CDN}/palm-central/exterior-lagoon-01.jpg`,
            logo: `${CDN}/developers/nakheel-logo.png`, // Developer logo
            projects: [
              {
                id: 106,
                title: "Palm Central – Nakheel",
                slug: "palm-central",
                image: `${CDN}/palm-central/exterior-lagoon-01.jpg`,
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
        image: `${CDN}/hartland/hero-bg.jpg`,
        developers: [
          {
            id: 1,
            name: "Sobha Realty",
            slug: "sobha",
            image: `${CDN}/hartland/hero-bg.jpg`,
            logo: `${CDN}/developers/sobha-logo.png`, // Developer logo
            projects: [
              {
                id: 201,
                title: "Sobha Hartland 2 Villas",
                slug: "hartland",
                image: `${CDN}/hartland/hero-bg.jpg`,
                description: "Premium waterfront villas",
              },
              {
                id: 202,
                title: "Sobha Al Sinniyyah Island",
                slug: "al-sinniyyah-island",
                image: `${CDN}/al-sinniyyah-island/hero-bg.jpg`,
                description: "Private island luxury villas",
              },
            ],
          },
          {
            id: 2,
            name: "Arada",
            slug: "arada",
            image: `${CDN}/massar-3/hero-bg.jpg`,
            logo: `${CDN}/developers/arada-logo.png`, // Developer logo
            projects: [
              {
                id: 203,
                title: "Arada – Massar 3",
                slug: "massar",
                image: `${CDN}/massar-3/hero-bg.jpg`,
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
        image: `${CDN}/riviera-retails/hero-bg.jpg`,
        developers: [
          {
            id: 2,
            name: "Omniyat",
            slug: "omniyat",
            image: `${CDN}/lumena-alta/hero-bg.jpg`,
            logo: `${CDN}/developers/omniyat-logo.png`, // Developer logo
            projects: [
              {
                id: 305,
                title: "Lumina Alta – Omniyat",
                slug: "lumenaalta",
                image: `${CDN}/lumena-alta/hero-bg.jpg`,
                description: "Ultra-luxury office tower",
              },
            ],
          },
          {
            id: 1,
            name: "Azizi Developments",
            slug: "azizi",
            image: `${CDN}/riviera/hero-bg.jpg`,
            logo: `${CDN}/developers/azizi-logo.png`, // Developer logo
            projects: [
              {
                id: 301,
                title: "Azizi Riviera – Retails",
                slug: "riviera-retails",
                image: `${CDN}/riviera/hero-bg.jpg`,
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
        image: `${CDN}/sky-parks/exterior-night-01.jpg`,
        developers: [
          {
            id: 1,
            name: "Sobha Realty",
            slug: "sobha",
            image: `${CDN}/sky-parks/exterior-night-01.jpg`,
            logo: `${CDN}/developers/sobha-logo.png`, // Developer logo
            projects: [
              {
                id: 401,
                title: "Sobha SeaHaven Penthouse",
                slug: "seahaven-penthouse",
                image: `${CDN}/sky-parks/exterior-night-01.jpg`,
                description: "Ultra-luxury penthouse with sea views",
              },
            ],
          },
        ],
      },
    ],
  };

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

  // FIXED MOBILE FUNCTIONS
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
        }`}
      >
        <div className={styles.backgroundOverlay} />

        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <a href="/" className={styles.logoLink}>
              <div className={styles.logoText}>MOHAMAD KODMANE</div>
              <div className={styles.logoSubtitle}>LUXURY REAL ESTATE</div>
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

          {/* Mega Menu */}
          {activeMegaMenu && (
            <div className={styles.megaMenu} onMouseLeave={handleMegaMenuLeave}>
              <div className={styles.megaMenuContainer}>
                <div className={styles.megaMenuContent}>
                  {/* Level 1: Categories */}
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

                  {/* Level 2: Developers */}
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
                              {/* Developer Logo */}
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

                  {/* Level 3: Projects */}
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

                  {/* Preview Panel */}
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
                          />
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
                              backgroundImage: `url(${CDN}/sky-parks/exterior-night-01.jpg)`,
                            }}
                          />
                          <div className={styles.previewInfo}>
                            <h3 className={styles.previewTitle}>Projects</h3>
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

          {/* Desktop Contact */}
          <div className={styles.desktopContact}>
            <div className={styles.contactBadge}>
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

      {/* Mobile Nav - FIXED VERSION */}
      <div
        className={`${styles.mobileNav} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
      >
        <div className={styles.mobileNavBackground} />
        <div className={styles.mobileNavContainer}>
          <div className={styles.mobileNavHeader}>
            <div className={styles.mobileLogo}>
              <div className={styles.mobileLogoText}>MOHAMAD KODMANE</div>
              <div className={styles.mobileLogoSubtitle}>
                LUXURY REAL ESTATE
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
                                        {/* Developer Logo in Mobile */}
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
              <div className={styles.mobileContactTitle}>Contact Us</div>
              <div className={styles.contactItem}>
                <div className={styles.contactDetails}>
                  <div className={styles.contactType}>Direct Line</div>
                  <div className={styles.contactValue}>+971 56 666 5560</div>
                </div>
              </div>
              <div className={styles.contactItem}>
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
