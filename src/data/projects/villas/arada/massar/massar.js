// src/data/projects/villas/arada/massar-3.js

export const massar3Data = {
  seo: {
    title: "Masaar 3 | Luxury 3 & 5 Bedroom Villas in Sharjah | Arada",
    description:
      "Premium 3 and 5 bedroom luxury villas in Masaar 3, Sharjah. Exclusive gated community with premium amenities, lush landscapes, and family-friendly living by Arada.",
    keywords:
      "masaar 3, arada, luxury villas sharjah, 3 bedroom villas, 5 bedroom villas, masaar phase 3, arada sharjah",
    canonical: "/projects/villas/arada/massar-3",
  },

  project: {
    name: "Masaar 3",
    developer: "Arada",
    location: "Sharjah, UAE",
    status: "Off-Plan",
    startingPrice: 4395000,
    completionDate: "Q4 2028",
    type: "Luxury Villas",
    units: "3 & 5 Bedroom Villas", // CHANGED: 4 → 3
  },

  hero: {
    backgroundUrl:
      "https://luxury-real-estate-media.b-cdn.net/massar-3/hero-bg.jpg",
    squareImageUrl:
      "https://luxury-real-estate-media.b-cdn.net/massar-3/hero-inset.jpg",
    companyName: "Arada",
    rating: 4.6,
  },

  intro: {
    title: "ELEGANT FAMILY LIVING IN SHARJAH",
    paragraphs: [
      "Masaar 3 presents an exclusive collection of 3 and 5 bedroom luxury villas within the master-planned Masaar community in Sharjah. Designed for modern families seeking space, privacy, and premium amenities, these villas offer the perfect blend of contemporary design and comfortable living.", // CHANGED: 4 → 3
      "Nestled within a gated community surrounded by lush green landscapes, Masaar 3 provides residents with access to world-class facilities, parks, and recreational areas while maintaining the tranquility and security that families desire.",
    ],
    brochures: [
      {
        title: "Phase 1 Brochure",
        url: "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%20Ph1%20%20Brochure.pdf",
        type: "phase1",
        icon: "📘",
        color: "#3A7BD5",
        size: "12.5 MB",
        category: "Phase 1",
        fileName: "Masaar 3 Phase 1 Brochure.pdf",
        description: "Complete details for Phase 1 villas and community",
      },
      {
        title: "Phase 2 Brochure",
        url: "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%20Ph2%20%20Brochure.pdf",
        type: "phase2",
        icon: "📗",
        color: "#2E8B57",
        size: "11.8 MB",
        category: "Phase 2",
        fileName: "Masaar 3 Phase 2 Brochure.pdf",
        description: "Complete details for Phase 2 villas and amenities",
      },
    ],
    imgUrl:
      "https://luxury-real-estate-media.b-cdn.net/massar-3/intro-main.jpg",
    imgAlt: "Masaar 3 luxury villas exterior and community views",
    floatingCards: [
      {
        top: "20%",
        right: "-30px",
        icon: "🏡",
        value: "3 & 5 BR", // CHANGED: 4 → 3
        label: "Villa Types",
      },
      {
        bottom: "30%",
        left: "-40px",
        icon: "🌿",
        value: "Gated Community",
        label: "Secure Living",
      },
      {
        bottom: "15%",
        right: "-20px",
        icon: "🏙️",
        value: "Sharjah",
        label: "Prime Location",
      },
    ],
  },

  gallery: {
    title: "A Visual Symphony",
    slides: [
      "https://luxury-real-estate-media.b-cdn.net/massar-3/hero-inset.jpg",
      "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-03.jpg",
      "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-04.jpg",
      "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-05.jpg",
      "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-06.jpg",
      "https://luxury-real-estate-media.b-cdn.net/massar-3/visual-07.jpg",
    ],
    projectTag: "Masaar 3",
  },

  floorPlans: {
    type: "villas",
    plans: [
      {
        id: "3-bedroom",
        title: "3 Bedroom Villa",
        bedrooms: 3,
        specs: {
          "Unit Type": "3 Bedroom Villa",
          "Total Area": "3,563 SQ.FT.", // Using the 4BR data since you don't have 3BR in Excel
          "Plot Area": "3,765 SQ.FT.", // Using the 4BR data since you don't have 3BR in Excel
          "Starting Price": "AED 4,395,000", // Using the 4BR data since you don't have 3BR in Excel
          Handover: "Q4 2028",
        },
        images: [
          "https://luxury-real-estate-media.b-cdn.net/massar-3/floor-3br.jpg", // ACTUAL FILE FROM YOUR SERVER
        ],
        features: [
          "Spacious Living Areas",
          "Private Garden",
          "Modern Kitchen",
          "Maid's Room",
          "Family Lounge",
          "Premium Finishes",
          "3 Ensuite Bedrooms",
          "Powder Room",
          "Storage Areas",
        ],
      },
      {
        id: "5-bedroom",
        title: "5 Bedroom Villa",
        bedrooms: 5,
        specs: {
          "Unit Type": "5 Bedroom Villa",
          "Total Area": "7,048 SQ.FT.",
          "Plot Area": "5,142 SQ.FT.",
          "Starting Price": "AED 5,895,000",
          Handover: "Q4 2028",
        },
        images: [
          "https://luxury-real-estate-media.b-cdn.net/massar-3/floor-5br.jpg", // ACTUAL FILE FROM YOUR SERVER
        ],
        features: [
          "Expansive Layout",
          "Large Garden",
          "Premium Kitchen",
          "Multiple Living Areas",
          "Maid's Room",
          "Driver's Room",
          "Luxury Finishes",
          "5 Ensuite Bedrooms",
          "Family Entertainment Area",
          "Extended Outdoor Space",
        ],
      },
    ],
    brochureHref:
      "https://luxury-real-estate-media.b-cdn.net/massar-3/Masaar%203%20Ph1%20%20Brochure.pdf",
  },

  pricing: {
    title: "Pricing & Availability",
    units: [
      {
        type: "3 Bedroom Villa",
        totalArea: 3563, // Using 4BR data since 3BR not in Excel
        plotArea: 3765, // Using 4BR data since 3BR not in Excel
        startingPrice: 4395000, // Using 4BR data since 3BR not in Excel
        handover: "Q4 2028",
        availability: "Limited Units",
      },
      {
        type: "5 Bedroom Villa",
        totalArea: 7048,
        plotArea: 5142,
        startingPrice: 5895000,
        handover: "Q4 2028",
        availability: "Limited Units",
      },
    ],
    paymentPlan: {
      title: "Payment Plan",
      phases: [
        { phase: "Down Payment", percentage: "10%", timing: "On Booking" },
        {
          phase: "During Construction",
          percentage: "60%",
          timing: "Over 4 Years",
        },
        { phase: "On Handover", percentage: "30%", timing: "Upon Completion" },
      ],
    },
  },

  amenities: {
    title: "Community Amenities & Facilities",
    amenities: [
      { label: "SWIMMING POOLS", icon: "🏊", color: "#d7b46a" },
      { label: "FITNESS CENTER", icon: "💪", color: "#d7b46a" },
      { label: "CHILDREN'S PLAY AREAS", icon: "👶", color: "#d7b46a" },
      { label: "LANDSCAPED PARKS", icon: "🌿", color: "#d7b46a" },
      { label: "JOGGING TRACKS", icon: "🏃", color: "#d7b46a" },
      { label: "CYCLING PATHS", icon: "🚴", color: "#d7b46a" },
      { label: "SPORTS FACILITIES", icon: "🎾", color: "#d7b46a" },
      { label: "PADEL COURTS", icon: "🎾", color: "#d7b46a" },
      { label: "TENNIS COURTS", icon: "🎾", color: "#d7b46a" },
      { label: "BASKETBALL COURT", icon: "🏀", color: "#d7b46a" },
      { label: "FOOTBALL PITCH", icon: "⚽", color: "#d7b46a" },
      { label: "BARBEQUE AREAS", icon: "🍖", color: "#d7b46a" },
      { label: "PICNIC SPOTS", icon: "🧺", color: "#d7b46a" },
      { label: "COMMUNITY CENTER", icon: "🏛️", color: "#d7b46a" },
      { label: "CLUBHOUSE", icon: "🏠", color: "#d7b46a" },
      { label: "RETAIL OUTLETS", icon: "🛍️", color: "#d7b46a" },
      { label: "CAFÉS & RESTAURANTS", icon: "☕", color: "#d7b46a" },
      { label: "KIDS SPLASH PARK", icon: "💦", color: "#d7b46a" },
      { label: "INDOOR PLAYROOM", icon: "🎮", color: "#d7b46a" },
      { label: "ADULT POOL", icon: "💦", color: "#d7b46a" },
      { label: "KIDS POOL", icon: "👧", color: "#d7b46a" },
      { label: "SPA FACILITIES", icon: "💆", color: "#d7b46a" },
      { label: "SAUNA & STEAM ROOM", icon: "🧖", color: "#d7b46a" },
      { label: "YOGA LAWN", icon: "🧘", color: "#d7b46a" },
      { label: "MEDITATION GARDEN", icon: "🎋", color: "#d7b46a" },
      { label: "EVENT LAWN", icon: "🎪", color: "#d7b46a" },
      { label: "WEDDING VENUE", icon: "💒", color: "#d7b46a" },
      { label: "BUSINESS CENTER", icon: "💼", color: "#d7b46a" },
      { label: "CO-WORKING SPACES", icon: "👨‍💻", color: "#d7b46a" },
      { label: "LIBRARY", icon: "📚", color: "#d7b46a" },
      { label: "CONCIERGE SERVICES", icon: "🎩", color: "#d7b46a" },
      { label: "24/7 SECURITY", icon: "🔒", color: "#d7b46a" },
      { label: "GATED COMMUNITY", icon: "🏘️", color: "#d7b46a" },
      { label: "VALET PARKING", icon: "🅿️", color: "#d7b46a" },
      { label: "ELECTRIC CAR CHARGING", icon: "⚡", color: "#d7b46a" },
    ],
  },

  location: {
    title: "Project Location",
    projectName: "Masaar 3",
    address: "Masaar, Sharjah, UAE",
    lat: 25.305,
    lng: 55.455,
    zoom: 13,
    proximityFeatures: [
      { icon: "⏱️", text: "20 min from Sharjah City" },
      { icon: "🏙️", text: "15 min to Dubai Border" },
      { icon: "🛣️", text: "Easy Highway Access" },
      { icon: "🌿", text: "Lush Green Community" },
    ],
  },

  nearbyAttractions: {
    title: "Strategic Location",
    attractions: [
      {
        name: "Sharjah City Center",
        distance: "15 km",
        time: "20 min",
        icon: "🏙️",
      },
      { name: "Dubai Border", distance: "12 km", time: "15 min", icon: "🛣️" },
      { name: "University City", distance: "8 km", time: "12 min", icon: "🎓" },
      {
        name: "Sharjah Airport",
        distance: "18 km",
        time: "22 min",
        icon: "✈️",
      },
      { name: "Al Qasba", distance: "16 km", time: "20 min", icon: "🎡" },
      { name: "Khalid Lagoon", distance: "14 km", time: "18 min", icon: "🌊" },
    ],
  },

  developer: {
    title: "About Arada",
    name: "Arada",
    description:
      "Arada is a master developer based in Sharjah, committed to creating integrated communities that offer high-quality living experiences with a focus on sustainability, innovation, and community well-being.",
    projects: ["Masaar", "Nasma Residences", "Aljada", "Naseej District"],
    logo: "https://luxury-real-estate-media.b-cdn.net/developers/arada-logo.png",
    established: 2017,
  },
};
