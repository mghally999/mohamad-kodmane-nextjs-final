"use client";

import { useState, useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import styles from "@/styles/TopHeader.module.css";
import { useLanguage } from "./LanguageProvider";

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
  const [selectedCommunity, setSelectedCommunity] = useState(null);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [selectedAboutItem, setSelectedAboutItem] = useState(null);

  const [mobileExpandedItems, setMobileExpandedItems] = useState({
    categories: null,
    categoryId: null,
    developerId: null,
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [communitySearch, setCommunitySearch] = useState("");

  const { locale, switchLanguage, isTransitioning, t } = useLanguage();
  const pathname = usePathname();
  const router = useRouter();
  const isMounted = useSafeDOM();

  const CDN = "https://luxury-real-estate-media.b-cdn.net";

  // ================= ABOUT MENU DATA ==================
  const aboutMenuItems = [
    {
      id: "about-mohamadkodmani",
      title: "About Mohamad Kodmani",
      slug: "about-mohamadkodmani",
      image: `${CDN}/sky-parks/exterior-night-01.jpg`,
      description:
        "Learn about the vision, leadership, and legacy behind our real estate advisory.",
    },
    {
      id: "our-story",
      title: "Our Story",
      slug: "our-story",
      image: `${CDN}/sobha-central/exterior-towers-angled-01.jpg`,
      description:
        "Explore our journey, milestones, and how we help clients invest in Dubai with confidence.",
    },
    {
      id: "leadership",
      title: "Leadership",
      slug: "leadership",
      image: `${CDN}/aquamont/intro-main.png`,
      description:
        "Meet the leadership and strategic partners powering our portfolio of projects.",
    },
    {
      id: "design",
      title: "Thoughtful Design",
      slug: "thoughtful-design",
      image: `${CDN}/lumena-alta/hero-bg.jpg`,
      description:
        "Discover how we curate projects with design, lifestyle, and long-term value in mind.",
    },
    {
      id: "investor-services",
      title: "Investor Services",
      slug: "investor-services",
      image: `${CDN}/riviera/hero-bg.jpg`,
      description:
        "From selection to exit strategy, we provide end-to-end support for serious investors.",
    },
    {
      id: "csr",
      title: "CSR & Community",
      slug: "csr",
      image: `${CDN}/massar-3/hero-bg.jpg`,
      description:
        "A look at how our partners build sustainable communities and long-term neighbourhood value.",
    },
  ];

  // ================= PROPERTIES MENU DATA ==================
  const propertiesMenuData = useMemo(() => {
    const data = {
      categories: [
        {
          id: 1,
          name: t?.("categories.apartments") || "Apartments",
          slug: "apartments",
          description:
            t?.("descriptions.apartments") ||
            "Luxury apartments in prime locations",
          image: `${CDN}/sky-parks/exterior-night-01.jpg`,
          developers: [
            {
              id: 1,
              name: t?.("developers.sobhaRealty") || "Sobha Realty",
              slug: "sobha",
              image: `${CDN}/aquamont/intro-main.png`,
              logo: `/Sobha-Realty-Square-Logo.jpg`,
              projects: [
                {
                  id: 101,
                  title: t?.("projectNames.sobhaSkyParks") || "Sobha Sky Parks",
                  slug: "skyparks",
                  image: `${CDN}/sky-parks/exterior-night-01.jpg`,
                  description:
                    t?.("descriptions.apartments") || "Luxury apartments",
                },
                {
                  id: 102,
                  title:
                    t?.("projectNames.sobhaAquaCrest") || "Sobha Aqua Crest",
                  slug: "aqua-crest",
                  image: `${CDN}/aqua-crest/amenity-infinity-pool-01.jpg`,
                  description:
                    t?.("descriptions.apartments") || "Luxury apartments",
                },
                {
                  id: 103,
                  title: t?.("projectNames.sobhaCentral") || "Sobha Central",
                  slug: "central",
                  image: `${CDN}/sobha-central/exterior-towers-angled-01.jpg`,
                  description:
                    t?.("descriptions.apartments") || "Luxury apartments",
                },
                {
                  id: 104,
                  title: t?.("projectNames.sobhaAquamont") || "Sobha Aquamont",
                  slug: "aquamont",
                  image: `${CDN}/aquamont/intro-main.png`,
                  description:
                    t?.("descriptions.apartments") || "Luxury apartments",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: t?.("categories.villas") || "Villas",
          slug: "villas",
          description:
            t?.("descriptions.villas") || "Premium villas and townhouses",
          image: `${CDN}/hartland/hero-bg.jpg`,
          developers: [
            {
              id: 1,
              name: t?.("developers.sobhaRealty") || "Sobha Realty",
              slug: "sobha",
              image: `${CDN}/hartland/hero-bg.jpg`,
              logo: `/Sobha-Realty-Square-Logo.jpg`,
              projects: [
                {
                  id: 201,
                  title:
                    t?.("projectNames.sobhaHartland2Villas") ||
                    "Sobha Hartland 2 Villas",
                  slug: "hartland",
                  image: `${CDN}/hartland/hero-bg.jpg`,
                  description: t?.("descriptions.villas") || "Premium villas",
                },
                {
                  id: 202,
                  title:
                    t?.("projectNames.sobhaAlSinniyyahIsland") ||
                    "Sobha Al Sinniyyah Island",
                  slug: "al-sinniyyah-island",
                  image: `${CDN}/al-sinniyyah-island/hero-bg.jpg`,
                  description: t?.("descriptions.villas") || "Premium villas",
                },
              ],
            },
            {
              id: 2,
              name: t?.("developers.arada") || "Arada",
              slug: "arada",
              image: `${CDN}/massar-3/hero-bg.jpg`,
              logo: `/arada-developer.avif`,
              projects: [
                {
                  id: 203,
                  title: t?.("projectNames.aradaMassar3") || "Arada Massar 3",
                  slug: "massar",
                  image: `${CDN}/massar-3/hero-bg.jpg`,
                  description: t?.("descriptions.villas") || "Premium villas",
                },
              ],
            },
            {
              id: 3,
              name: t?.("developers.damacProperties") || "DAMAC Properties",
              slug: "damac",
              image: `${CDN}/damac-island-2/WhatsApp%20Image%202025-11-19%20at%2013.26.51%20%281%29.jpeg`,
              logo: `/damac-logo.png`,
              projects: [
                {
                  id: 204,
                  title: t?.("projectNames.damacIslands2") || "DAMAC Islands 2",
                  slug: "damac-islands-2",
                  image: `${CDN}/damac-island-2/WhatsApp%20Image%202025-11-19%20at%2013.26.51%20%281%29.jpeg`,
                  description: t?.("descriptions.villas") || "Premium villas",
                },
              ],
            },
          ],
        },
        {
          id: 3,
          name: t?.("categories.commercial") || "Commercial",
          slug: "commercial-retail",
          description:
            t?.("descriptions.commercial") || "Commercial and retail spaces",
          image: `${CDN}/riviera-retails/hero-bg.jpg`,
          developers: [
            {
              id: 2,
              name: t?.("developers.omniyat") || "Omniyat",
              slug: "omniyat",
              image: `${CDN}/lumena-alta/hero-bg.jpg`,
              logo: `/omniyat-logo.avif`,
              projects: [
                {
                  id: 305,
                  title: t?.("projectNames.luminaAlta") || "Lumina Alta",
                  slug: "lumenaalta",
                  image: `${CDN}/lumena-alta/hero-bg.jpg`,
                  description:
                    t?.("descriptions.commercial") || "Commercial spaces",
                },
              ],
            },
            {
              id: 1,
              name: t?.("developers.aziziDevelopments") || "Azizi Developments",
              slug: "azizi",
              image: `${CDN}/riviera/hero-bg.jpg`,
              logo: `/azizi.jpg`,
              projects: [
                {
                  id: 301,
                  title:
                    t?.("projectNames.aziziRivieraRetails") ||
                    "Azizi Riviera Retails",
                  slug: "riviera-retails",
                  image: `${CDN}/riviera/hero-bg.jpg`,
                  description:
                    t?.("descriptions.commercial") || "Commercial spaces",
                },
              ],
            },
          ],
        },
        {
          id: 4,
          name: t?.("categories.penthouses") || "Penthouses",
          slug: "penthouses",
          description:
            t?.("descriptions.penthouses") ||
            "Luxury penthouses with premium amenities",
          image: `${CDN}/sky-parks/exterior-night-01.jpg`,
          developers: [
            {
              id: 1,
              name: t?.("developers.sobhaRealty") || "Sobha Realty",
              slug: "sobha",
              image: `${CDN}/sky-parks/exterior-night-01.jpg`,
              logo: `/Sobha-Realty-Square-Logo.jpg`,
              projects: [
                {
                  id: 401,
                  title:
                    t?.("projectNames.sobhaSeaHavenPenthouse") ||
                    "Sobha Sea Haven Penthouse",
                  slug: "seahaven-penthouse",
                  image: `${CDN}/sky-parks/exterior-night-01.jpg`,
                  description:
                    t?.("descriptions.penthouses") || "Luxury penthouses",
                },
              ],
            },
          ],
        },
      ],
    };

    return data;
  }, [t, locale]);

  // ================= COMMUNITIES DATA ==================
  const communitiesData = useMemo(
    () => [
      {
        id: "downtown-dubai",
        slug: "downtown-dubai",
        name: "Downtown Dubai",
        image: `${CDN}/sky-parks/exterior-night-01.jpg`,
        location: "Heart of Dubai, next to Burj Khalifa & Dubai Mall",
        avgBuy: "1BR from AED 1.5M",
        avgRent: "1BR from AED 110K / year",
        roi: "6–7% estimated ROI",
      },
      {
        id: "business-bay",
        slug: "business-bay",
        name: "Business Bay",
        image: `${CDN}/sobha-central/exterior-towers-angled-01.jpg`,
        location: "Along Dubai Canal, minutes from Downtown",
        avgBuy: "1BR from AED 1.1M",
        avgRent: "1BR from AED 95K / year",
        roi: "7–8% estimated ROI",
      },
      {
        id: "jvc",
        slug: "jvc",
        name: "Jumeirah Village Circle (JVC)",
        image: `${CDN}/massar-3/hero-bg.jpg`,
        location: "New Dubai, between Al Khail Road & Hessa Street",
        avgBuy: "1BR from AED 800K",
        avgRent: "1BR from AED 70K / year",
        roi: "7–9% estimated ROI",
      },
      {
        id: "dubai-marina",
        slug: "dubai-marina",
        name: "Dubai Marina",
        image: `${CDN}/aquamont/intro-main.png`,
        location: "Waterfront district along Sheikh Zayed Road",
        avgBuy: "1BR from AED 1.3M",
        avgRent: "1BR from AED 105K / year",
        roi: "6–7% estimated ROI",
      },
      {
        id: "mbr-city",
        slug: "mbr-city",
        name: "Mohammed Bin Rashid City",
        image: `${CDN}/hartland/hero-bg.jpg`,
        location: "Master community with villas & apartments near Downtown",
        avgBuy: "Villas from AED 6M",
        avgRent: "Villas from AED 350K / year",
        roi: "5–6% estimated ROI",
      },
    ],
    [CDN]
  );

  // ================= DEVELOPERS DATA ==================
  const developersData = useMemo(
    () => [
      {
        id: "sobha",
        slug: "sobha",
        name: "Sobha Realty",
        logo: "/Sobha-Realty-Square-Logo.jpg",
        image: `${CDN}/aquamont/intro-main.png`,
        tagline: "Master developer of waterfront and park-front communities.",
      },
      {
        id: "arada",
        slug: "arada",
        name: "Arada",
        logo: "/arada-developer.avif",
        image: `${CDN}/massar-3/hero-bg.jpg`,
        tagline: "Lifestyle communities with greenery and family amenities.",
      },
      {
        id: "damac",
        slug: "damac",
        name: "DAMAC Properties",
        logo: "/damac-logo.png",
        image: `${CDN}/damac-island-2/WhatsApp%20Image%202025-11-19%20at%2013.26.51%20%281%29.jpeg`,
        tagline: "High-impact branded residences & resort living.",
      },
      {
        id: "azizi",
        slug: "azizi",
        name: "Azizi Developments",
        logo: "/azizi.jpg",
        image: `${CDN}/riviera/hero-bg.jpg`,
        tagline: "Strong ROI options in strategic locations across Dubai.",
      },
      {
        id: "omniyat",
        slug: "omniyat",
        name: "Omniyat",
        logo: "/omniyat-logo.avif",
        image: `${CDN}/lumena-alta/hero-bg.jpg`,
        tagline: "Ultra-luxury design-led developments on the waterfront.",
      },
    ],
    [CDN]
  );

  // ================= NAV ITEMS ==================
  const navItems = useMemo(
    () => [
      { href: "/", label: "HOME", type: "primary" },
      { href: "/about", label: "ABOUT", type: "primary" },
      {
        href: "/properties-in-dubai/",
        label: "PROPERTIES",
        type: "primary",
        hasMegaMenu: true,
      },
      {
        href: "/our-communities",
        label: "COMMUNITIES",
        type: "primary",
      },
      {
        href: "/developers",
        label: "DEVELOPERS",
        type: "primary",
      },
      {
        href: "/articles",
        label: "MEDIA CENTER",
        type: "primary",
      },
      {
        href: "/contact-us/",
        label: "CONTACT US",
        type: "primary",
      },
    ],
    []
  );

  // ================= INITIALIZE SELECTED ABOUT ITEM ==================
  useEffect(() => {
    if (!selectedAboutItem && aboutMenuItems.length > 0) {
      setSelectedAboutItem(aboutMenuItems[0]);
    }
  }, [selectedAboutItem]);

  // ================= SAFE SCROLL + BODY LOCK ==================
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);

    // Safe body class manipulation
    try {
      if (isMobileMenuOpen) {
        document.body.classList.add(styles.mobileMenuOpen);
      } else {
        document.body.classList.remove(styles.mobileMenuOpen);
      }
    } catch (error) {
      console.warn("Body class manipulation error:", error);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      try {
        document.body.classList.remove(styles.mobileMenuOpen);
      } catch (error) {
        console.warn("Body class cleanup error:", error);
      }
    };
  }, [isMobileMenuOpen, isMounted]);

  // ================= META PIXEL =================
  const track = (event, params = {}, standard = false) => {
    if (typeof window === "undefined" || typeof window.fbq !== "function")
      return;
    if (standard) window.fbq("track", event, params);
    else window.fbq("trackCustom", event, params);
  };

  const handleNavClick = (item, location) => {
    track("NavClick", {
      label: item.label,
      href: item.href,
      location,
      locale,
    });
  };

  const handleProjectNavClick = (category, developer, project, location) => {
    if (!category || !developer || !project) return;
    track("NavProjectClick", {
      category: category.slug,
      developer: developer.slug,
      project: project.slug,
      project_title: project.title,
      location,
      locale,
    });
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

  const filteredCommunities = useMemo(() => {
    if (!communitySearch.trim()) return communitiesData;
    return communitiesData.filter((c) =>
      c.name.toLowerCase().includes(communitySearch.toLowerCase())
    );
  }, [communitiesData, communitySearch]);

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
    setSelectedCommunity(null);
    setSelectedDeveloper(null);
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
      const projects = getCategoryProjects(firstCategory);
      setSelectedCategory(firstCategory);
      setSelectedProject(projects[0] || null);
    }
    if (item.label === "COMMUNITIES") {
      setSelectedCommunity(communitiesData[0] || null);
    }
    if (item.label === "DEVELOPERS") {
      setSelectedDeveloper(developersData[0] || null);
    }
  };

  const handleMegaMenuLeave = () => {
    if (!isMounted) return;

    setTimeout(() => {
      setActiveMegaMenu(null);
      setSelectedCategory(null);
      setSelectedProject(null);
      setSelectedCommunity(null);
      setSelectedDeveloper(null);
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

  const handleCommunityHover = (community) => {
    setSelectedCommunity(community);
  };

  const handleDeveloperHover = (developer) => {
    setSelectedDeveloper(developer);
  };

  const handleAboutHover = (aboutItem) => {
    setSelectedAboutItem(aboutItem);
  };

  // ================= MOBILE MENU HANDLERS ==================
  const toggleMobileCategory = (categoryId) => {
    setMobileExpandedItems((prev) => ({
      categories:
        categoryId === "luxury-properties"
          ? prev.categories === "luxury-properties"
            ? null
            : "luxury-properties"
          : "luxury-properties",
      categoryId:
        typeof categoryId === "number"
          ? prev.categoryId === categoryId
            ? null
            : categoryId
          : prev.categoryId,
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
    if (!isMounted) return;

    setMobileExpandedItems({
      categories: null,
      categoryId: null,
      developerId: null,
    });
    setIsMobileMenuOpen(false);
  };

  // ================= LANGUAGE TOGGLE ==================
  const toggleLanguage = () => {
    if (!isMounted) return;

    const newLang = locale === "en" ? "ar" : "en";

    track("LanguageChange", {
      from: locale,
      to: newLang,
    });

    switchLanguage(newLang);
  };

  // ================= SEARCH HANDLERS ==================
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const term = searchTerm.trim();
    if (!term) return;

    track("HeaderSearch", { query: term, locale }, true);

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
    return null; // nothing is rendered until mounted
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
        <div className={styles.backgroundOverlay} />

        <div className={styles.container}>
          {/* LEFT MENU */}
          <div
            className={`${styles.menuLeft} ${styles.menuLinks} ${styles.col12} ${styles.colLg5}`}
          >
            <ul className={styles.navLinks}>
              <li>
                <Link
                  href="/"
                  className={styles.level1Menu}
                  onClick={() => {
                    handleMegaMenuLeave();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  HOME
                </Link>
              </li>
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

              {/* COMMUNITIES MEGA MENU */}
              <li
                className={styles.menuItemHasChildren}
                onMouseEnter={() =>
                  handleMegaMenuEnter({
                    label: "COMMUNITIES",
                    hasMegaMenu: true,
                  })
                }
              >
                <button
                  type="button"
                  className={`${styles.level1Menu} ${styles.megaMenuTrigger} ${
                    activeMegaMenu === "COMMUNITIES" ? styles.active : ""
                  }`}
                  onClick={() => {
                    if (activeMegaMenu === "COMMUNITIES") {
                      handleMegaMenuLeave();
                    } else {
                      handleMegaMenuEnter({
                        label: "COMMUNITIES",
                        hasMegaMenu: true,
                      });
                    }
                  }}
                >
                  COMMUNITIES
                </button>
              </li>

              {/* DEVELOPERS MEGA MENU */}
              <li
                className={styles.menuItemHasChildren}
                onMouseEnter={() =>
                  handleMegaMenuEnter({
                    label: "DEVELOPERS",
                    hasMegaMenu: true,
                  })
                }
              >
                <button
                  type="button"
                  className={`${styles.level1Menu} ${styles.megaMenuTrigger} ${
                    activeMegaMenu === "DEVELOPERS" ? styles.active : ""
                  }`}
                  onClick={() => {
                    if (activeMegaMenu === "DEVELOPERS") {
                      handleMegaMenuLeave();
                    } else {
                      handleMegaMenuEnter({
                        label: "DEVELOPERS",
                        hasMegaMenu: true,
                      });
                    }
                  }}
                >
                  DEVELOPERS
                </button>
              </li>
            </ul>
          </div>

          {/* CENTER LOGO */}
          <div
            className={`${styles.logoSec} ${styles.col12} ${styles.colLg2} ${styles.onlyDesk}`}
          >
            <Link href="/" className={styles.logoLink}>
              <img
                src="/logo-transparent.png"
                alt="Sobha Realty"
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
                        onClick={() =>
                          handleProjectNavClick(
                            currentCategory,
                            project.developer,
                            project,
                            "mega_desktop"
                          )
                        }
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

        {/* ========== DESKTOP MEGA MENU – COMMUNITIES ========== */}
        {activeMegaMenu === "COMMUNITIES" && (
          <div
            className={styles.megaMenu}
            onMouseEnter={() => setActiveMegaMenu("COMMUNITIES")}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className={styles.megaMenuInnerCommunities}>
              {/* LEFT – list + search */}
              <div className={styles.megaCommunitiesLeft}>
                <div className={styles.megaColumnHeader}>
                  <span className={styles.megaColumnLabel}>
                    DUBAI COMMUNITIES
                  </span>
                </div>

                <form
                  className={styles.communitySearchForm}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder="Search community (e.g. JVC, Marina)..."
                    className={styles.communitySearchInput}
                    value={communitySearch}
                    onChange={(e) => setCommunitySearch(e.target.value)}
                  />
                </form>

                <ul className={styles.communityList}>
                  {filteredCommunities.map((community) => (
                    <li key={community.id}>
                      <Link
                        href={`/communities/${community.slug}`}
                        className={`${styles.communityLink} ${
                          selectedCommunity?.id === community.id
                            ? styles.activeCommunity
                            : ""
                        }`}
                        onMouseEnter={() => handleCommunityHover(community)}
                      >
                        <span className={styles.communityName}>
                          {community.name}
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
                        selectedCommunity?.image ||
                        filteredCommunities[0]?.image
                      })`,
                    }}
                  />
                  <div className={styles.communityPreviewInfo}>
                    <h3 className={styles.communityPreviewTitle}>
                      {selectedCommunity?.name ||
                        filteredCommunities[0]?.name ||
                        "Dubai Community"}
                    </h3>
                    <p className={styles.communityPreviewLocation}>
                      {selectedCommunity?.location ||
                        filteredCommunities[0]?.location}
                    </p>
                    <div className={styles.communityPreviewStats}>
                      <div className={styles.communityStat}>
                        <span className={styles.communityStatLabel}>
                          Avg. Purchase
                        </span>
                        <span className={styles.communityStatValue}>
                          {selectedCommunity?.avgBuy ||
                            filteredCommunities[0]?.avgBuy}
                        </span>
                      </div>
                      <div className={styles.communityStat}>
                        <span className={styles.communityStatLabel}>
                          Avg. Rent
                        </span>
                        <span className={styles.communityStatValue}>
                          {selectedCommunity?.avgRent ||
                            filteredCommunities[0]?.avgRent}
                        </span>
                      </div>
                      <div className={styles.communityStat}>
                        <span className={styles.communityStatLabel}>ROI</span>
                        <span className={styles.communityStatValue}>
                          {selectedCommunity?.roi ||
                            filteredCommunities[0]?.roi}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/communities/${
                        selectedCommunity?.slug ||
                        filteredCommunities[0]?.slug ||
                        ""
                      }`}
                      className={styles.communityPreviewButton}
                    >
                      VIEW COMMUNITY DETAILS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========== DESKTOP MEGA MENU – DEVELOPERS ========== */}
        {activeMegaMenu === "DEVELOPERS" && (
          <div
            className={styles.megaMenu}
            onMouseEnter={() => setActiveMegaMenu("DEVELOPERS")}
            onMouseLeave={handleMegaMenuLeave}
          >
            <div className={styles.megaMenuInnerDevelopers}>
              {/* LEFT – developers list */}
              <div className={styles.megaDevelopersLeft}>
                <div className={styles.megaColumnHeader}>
                  <span className={styles.megaColumnLabel}>DEVELOPERS</span>
                </div>
                <ul className={styles.developersListDesktop}>
                  {developersData.map((developer) => (
                    <li key={developer.id}>
                      <Link
                        href={`/developers/${developer.slug}`}
                        className={`${styles.developerItemDesktop} ${
                          selectedDeveloper?.id === developer.id
                            ? styles.activeDeveloper
                            : ""
                        }`}
                        onMouseEnter={() => handleDeveloperHover(developer)}
                      >
                        {developer.logo && (
                          <div className={styles.developerLogoDesktop}>
                            <img
                              src={developer.logo}
                              alt={`${developer.name} logo`}
                            />
                          </div>
                        )}
                        <div className={styles.developerInfoDesktop}>
                          <span className={styles.developerNameDesktop}>
                            {developer.name}
                          </span>
                          <span className={styles.developerTaglineDesktop}>
                            {developer.tagline}
                          </span>
                        </div>
                        <span className={styles.developerArrowDesktop}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT – large image preview */}
              <div className={styles.megaDevelopersRight}>
                <div className={styles.developerPreviewWrapper}>
                  <div
                    className={styles.developerPreviewImage}
                    style={{
                      backgroundImage: `url(${
                        selectedDeveloper?.image || developersData[0].image
                      })`,
                    }}
                  />
                  <div className={styles.developerPreviewInfo}>
                    <h3 className={styles.developerPreviewTitle}>
                      {selectedDeveloper?.name || developersData[0].name}
                    </h3>
                    <p className={styles.developerPreviewTagline}>
                      {selectedDeveloper?.tagline || developersData[0].tagline}
                    </p>
                    <Link
                      href={`/developers/${
                        selectedDeveloper?.slug || developersData[0].slug
                      }`}
                      className={styles.developerPreviewButton}
                    >
                      VIEW DEVELOPER PROFILE
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
                  placeholder="Search projects, communities, developers, articles..."
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
              <div className={styles.mobileLogo}>
                <Link href="/" className={styles.logoLink}>
                  <img
                    src="/logo-transparent.png"
                    alt="Sobha Realty"
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

              {/* Simple items + single mega for properties on mobile */}
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.hasMegaMenu ? (
                    <div className={styles.mobileMegaMenuItem}>
                      <button
                        type="button"
                        className={`${styles.mobileNavLink} ${styles.mobileMegaMenuTrigger}`}
                        onClick={() =>
                          toggleMobileCategory("luxury-properties")
                        }
                      >
                        <span className={styles.mobileNavText}>
                          {item.label}
                        </span>
                        <span
                          className={`${styles.mobileDropdownArrow} ${
                            mobileExpandedItems.categories ===
                            "luxury-properties"
                              ? styles.expanded
                              : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>

                      {mobileExpandedItems.categories ===
                        "luxury-properties" && (
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
                                    mobileExpandedItems.categoryId ===
                                    category.id
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
                                    <h5
                                      className={styles.mobileDevelopersTitle}
                                    >
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
                                            className={
                                              styles.mobileDeveloperName
                                            }
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
                                            className={
                                              styles.mobileProjectsList
                                            }
                                          >
                                            {developer.projects.map(
                                              (project) => (
                                                <a
                                                  key={project.id}
                                                  href={`/projects/${category.slug}/${developer.slug}/${project.slug}`}
                                                  className={
                                                    styles.mobileProjectLink
                                                  }
                                                  onClick={() => {
                                                    handleProjectNavClick(
                                                      category,
                                                      developer,
                                                      project,
                                                      "mega_mobile"
                                                    );
                                                    closeAllMobileMenus();
                                                  }}
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
                                              )
                                            )}
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
                      onClick={() => {
                        handleNavClick(item, "mobile");
                        closeAllMobileMenus();
                      }}
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
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
