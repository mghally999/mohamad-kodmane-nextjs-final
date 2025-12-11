export const propertiesData = (CDN, t, locale) => ({
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
              title: t?.("projectNames.sobhaAquaCrest") || "Sobha Aqua Crest",
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
            {
              id: 105,
              title: t?.("projectNames.sobhaOrbis") || "Sobha Orbis",
              slug: "orbis",
              image: `${CDN}/sobha-orbis/A%20%285%29-.jpg`,
              description:
                t?.("descriptions.apartments") || "Luxury apartments",
            },
            {
              id: 106,
              title: t?.("projectNames.sobhaVerde") || "Sobha Verde",
              slug: "verde",
              image: `${CDN}/sobha-orbis/A%20(5)-.jpg`,
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
            {
              id: 203,
              title: t?.("projectNames.sobhaReserve") || "Sobha Reserve",
              slug: "sobha-reserve",
              image: `${CDN}/al-sinniyyah-island/hero-bg.jpg`,
              description: t?.("descriptions.villas") || "Premium villas",
            },
            {
              id: 204,
              title: t?.("projectNames.sobhaElwood") || "Sobha Elwood",
              slug: "sobha-elwood",
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
              id: 205,
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
              id: 205,
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
              title: t?.("projectNames.luminaAlta") || "Lumena Alta",
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
});
