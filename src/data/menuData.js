// ✅ src/data/menuData.js
// Single source of truth — EXACTLY matches src/app/projects/*
// SOBHA FIRST in each category

export const menuData = {
  categories: [
    // =====================================================
    // 🏙️ APARTMENTS — SOBHA FIRST
    // =====================================================
    {
      id: 1,
      name: "Apartments",
      slug: "apartments",
      description: "Luxury apartments in Dubai's most sought-after areas",
      developers: [
        // SOBHA FIRST
        {
          id: 1,
          name: "Sobha Realty",
          slug: "sobha",
          projects: [
            {
              id: 101,
              title: "Sobha Central",
              slug: "central",
              image:
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
            },
            {
              id: 102,
              title: "Sobha Sky Park",
              slug: "sky-park",
              image:
                "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=800&q=80",
            },
            {
              id: 103,
              title: "Sobha The Element",
              slug: "the-element",
              image:
                "https://images.unsplash.com/photo-1540259579797-88e28e233a82?auto=format&fit=crop&w=800&q=80",
            },
            {
              id: 104,
              title: "Sobha UAQ Downtown",
              slug: "uaq-downtown",
              image:
                "https://images.unsplash.com/photo-1600585154340-ffffd8e0d6aa?auto=format&fit=crop&w=800&q=80",
            },
          ],
        },
        // THEN OTHERS
        {
          id: 3,
          name: "Nakheel",
          slug: "nakheel",
          projects: [
            {
              id: 106,
              title: "Palm Central – Nakheel",
              slug: "palm-central",
              image:
                "https://images.unsplash.com/photo-1520509414578-d9cbf09933a1?auto=format&fit=crop&w=800&q=80",
            },
          ],
        },
      ],
    },

    // =====================================================
    // 🏡 VILLAS — SOBHA FIRST
    // =====================================================
    {
      id: 2,
      name: "Villas",
      slug: "villas",
      description: "Exclusive villa developments and waterfront communities",
      developers: [
        // SOBHA FIRST
        {
          id: 1,
          name: "Sobha Realty",
          slug: "sobha",
          projects: [
            {
              id: 201,
              title: "Sobha Hartland 2 Villas",
              slug: "hartland",
              image:
                "https://images.unsplash.com/photo-1600585154314-8c5b4cdbb81a?auto=format&fit=crop&w=800&q=80",
            },
            {
              id: 202,
              title: "Sobha Al Sinniyyah Island",
              slug: "al-sinniyyah-island",
              image:
                "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=800&q=80",
            },
          ],
        },
        // THEN OTHERS
        {
          id: 2,
          name: "Arada",
          slug: "arada",
          projects: [
            {
              id: 203,
              title: "Arada – Massar 3",
              slug: "massar-3",
              image:
                "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
            },
          ],
        },
      ],
    },

    // =====================================================
    // 🏢 COMMERCIAL / RETAIL — NOW WITH OMNIYAT
    // =====================================================
    {
      id: 3,
      name: "Commercial / Retail",
      slug: "commercial-retail",
      description: "High-ROI commercial and mixed-use developments",
      developers: [
        // OMNIYAT FIRST (Commercial focus)
        {
          id: 2,
          name: "Omniyat",
          slug: "omniyat",
          projects: [
            {
              id: 105,
              title: "Lumina Alta – Omniyat",
              slug: "lumina-alta",
              image:
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=80",
            },
          ],
        },
        // THEN AZIZI
        {
          id: 1,
          name: "Azizi Developments",
          slug: "azizi",
          projects: [
            {
              id: 301,
              title: "Azizi Riviera – Retails",
              slug: "riviera-retails",
              image:
                "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
            },
          ],
        },
      ],
    },

    // =====================================================
    // 🏔️ PENTHOUSES — SOBHA FIRST
    // =====================================================
    {
      id: 4,
      name: "Penthouses",
      slug: "penthouses",
      description:
        "Ultra-luxury penthouses with panoramic views and signature design.",
      developers: [
        {
          id: 1,
          name: "Sobha Realty",
          slug: "sobha",
          projects: [
            {
              id: 401,
              title: "Sobha SeaHaven Penthouse",
              slug: "seahaven-penthouse",
              image:
                "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=800&q=80",
            },
          ],
        },
      ],
    },
  ],
};

export default menuData;
