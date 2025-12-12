// src/data/projects/apartments/sobha/sobha-one.js

export const sobhaOneData = {
  en: {
    seo: {
      title:
        "Sobha One | 1–4 Bedroom Apartments & 2–5 Bedroom Duplexes in Ras Al Khor, Dubai",
      description:
        "Sobha One is a masterfully planned residential community in Ras Al Khor, Dubai, offering 1–4 bedroom apartments and 2–5 bedroom duplexes with panoramic views over Dubai Creek, the Ras Al Khor Wildlife Sanctuary and Downtown Dubai, plus an 18-hole pitch & putt golf course and resort-style amenities.",
      keywords:
        "Sobha One, Sobha One Dubai, Sobha One apartments, Sobha One duplex, Ras Al Khor, Dubai Creek, wildlife sanctuary, golf course community, 1 bedroom, 2 bedroom, 3 bedroom, 4 bedroom, duplex, Sobha Realty",
      canonical: "/projects/apartments/sobha/sobha-one",
    },

    project: {
      name: "Sobha One",
      developer: "Sobha Realty",
      location: "Ras Al Khor Road, Dubai, UAE",
      status: "Off-Plan",
      // Cross-check against latest price sheet before going live.
      startingPrice: "From ~AED 1.1M",
      // Public sources currently indicate a 2026 completion target.
      completionDate: "Expected completion Q4 2026",
      type: "Apartments & Duplexes",
      units: "1–4 bedroom apartments & 2–5 bedroom duplexes",
    },

    hero: {
      backgroundUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/sobha-one.mp4",
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/sobha-one.svg",
      companyName: "Sobha Realty",
      rating: 4.8,
    },

    intro: {
      title: "A Sophisticated Tapestry Across the Skyline",
      paragraphs: [
        "Nestled near Ras Al Khor Road, Sobha One is a serene retreat offering breathtaking views. Gaze north to see the tranquil Creek waters and the iconic Burj Khalifa, with Downtown to the west. Spanning over 1.5 million square feet, this development showcases lush golf courses and vibrant cityscapes, inviting you to experience its beauty from every angle.",
        "With five interconnected towers rising from 30 to 65 stories, Sobha One offers a range of luxurious living options, including 1 to 4-bedroom apartments and 3 to 4-bedroom duplexes, creating a harmonious blend of elegance and tranquillity.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: "https://luxury-real-estate-media.b-cdn.net/sobha-one/Sobha%20One%20Factbook%20(1).pdf",
          type: "main",
          icon: "📘",
          color: "#1A5F7A",
          size: "≈ 10–20 MB",
          category: "Apartments & Duplexes",
          fileName: "Sobha One Factbook.pdf",
          description:
            "Official Sobha One factbook with configuration, tower details, amenity plan and finishes.",
        },
      ],
      imgUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/Side%20Shot%20-%20Dusk.jpg",
      imgAlt:
        "Sobha One towers at dusk overlooking the golf course and Dubai Creek skyline.",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🌿",
          value: "Creek Views",
          label: "Ras Al Khor Sanctuary",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "⛳",
          value: "18-Hole",
          label: "Pitch & Putt Golf",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🏙️",
          value: "10 mins",
          label: "Downtown Dubai",
        },
      ],
    },

    gallery: {
      title: "Life Overlooking Creek, Golf & Skyline",
      slides: [
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/overview01.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-01-PP-PPTP.jpeg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-02-PP-PPTP.jpeg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-03-PP-PPTP.jpeg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-05-PP-01-PPTP.jpeg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-4-PP-PPTP.jpeg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/Side%20Shot%20-%20Dusk.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/Balcony.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/Dining%20room.jpg",
      ],
      projectTag: "Sobha One – Ras Al Khor",
    },

    floorPlans: {
      type: "apartments & duplexes",
      // NOTE: Exact areas differ by stack/layout. Keep copy generic unless you add
      // precise numbers from the latest architectural floor plans.
      plans: [
        {
          id: "1br-apartment",
          title: "1 Bedroom Apartments",
          bedrooms: 1,
          specs: {
            Unit: "1 BEDROOM + 1–2 BATHROOMS + LIVING & DINING + KITCHEN + BALCONY",
            "Typical Use":
              "Ideal starter home or pied-à-terre with direct access to creekside living.",
            Areas:
              "Sizes vary by layout – refer to latest floor plans for exact figures.",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/Dining%20room.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/Balcony.jpg",
          ],
          features: [
            "Efficient open-plan layouts that maximise usable space.",
            "Floor-to-ceiling glazing to frame creek and golf views.",
            "Balcony in every unit as standard, with utility space.",
          ],
        },
        {
          id: "2br-apartment",
          title: "2 Bedroom Apartments",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOMS + 2–3 BATHROOMS + LIVING & DINING + KITCHEN + BALCONY",
            "Typical Use":
              "Comfortable layouts for couples and young families seeking more living space.",
            Areas:
              "Sizes vary by tower and orientation; see official floor plans.",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/living%20room.tif",
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-02-PP-PPTP.jpeg",
          ],
          features: [
            "Generous living and dining zones with direct balcony access.",
            "Master bedroom with ensuite bathroom and built-in wardrobes.",
            "Secondary bedroom ideal for kids, guests or a dedicated home office.",
          ],
        },
        {
          id: "3br-apartment",
          title: "3 Bedroom Apartments",
          bedrooms: 3,
          specs: {
            Unit: "3 BEDROOMS + 3–4 BATHROOMS + LIVING & DINING + KITCHEN + BALCONY",
            "Typical Use":
              "Family-sized homes with separation between living and sleeping zones.",
            Areas:
              "Multiple configurations across the five towers; confirm exact sizes per stack.",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/Courtyard%20shot.tif",
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-03-PP-PPTP.jpeg",
          ],
          features: [
            "Corner layouts in select stacks for dual-aspect light and views.",
            "Spacious master suite with walk-in closet in many configurations.",
            "Ample storage, utility space and balcony depth for outdoor seating.",
          ],
        },
        {
          id: "4br-apartment",
          title: "4 Bedroom Apartments",
          bedrooms: 4,
          specs: {
            Unit: "4 BEDROOMS + MULTIPLE BATHROOMS + FAMILY LIVING + KITCHEN + BALCONY",
            "Typical Use":
              "Large family residences on higher floors with the best panoramic views.",
            Areas:
              "Premium layouts; consult detailed plans for exact built-up area.",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/overview01.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/Side%20Shot%20-%20Dusk.jpg",
          ],
          features: [
            "Higher-floor positions with dramatic skyline and creek vistas.",
            "Family lounge in many layouts for flexible day-to-day living.",
            "Ideal for end-users wanting a long-term primary residence.",
          ],
        },
        {
          id: "duplex-2to5br",
          title: "2–5 Bedroom Duplexes",
          bedrooms: "2–5",
          specs: {
            Unit: "2 TO 5 BEDROOM DUPLEX HOMES ON TWO LEVELS WITH DOUBLE-HEIGHT LIVING SPACES (SELECT UNITS)",
            "Typical Use":
              "Signature homes for buyers seeking standout architecture, volume and views.",
            Areas:
              "Sizes and configurations vary significantly; refer to duplex schedule and floor plans.",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-01-PP-PPTP.jpeg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/Golf.tif",
          ],
          features: [
            "Dramatic double-height living rooms in select duplex types.",
            "Bedrooms positioned for privacy with separation from entertaining areas.",
            "Large terraces/balconies to enjoy the golf course and creek views.",
          ],
        },
      ],
      brochureHref:
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/Sobha%20One%20Factbook%20(1).pdf",
    },

    amenities: {
      title: "Resort-Like Amenities Across Courtyards & Sky Terrace",
      amenities: [
        {
          label: "18-HOLE PITCH & PUTT GOLF COURSE",
          icon: "⛳",
          color: "#d7b46a",
        },
        {
          label: "PANORAMIC CLUBHOUSE SKY TERRACE",
          icon: "🌇",
          color: "#d7b46a",
        },
        { label: "BBQ AREA & FAMILY PARK", icon: "🍖", color: "#d7b46a" },
        { label: "SKY GARDEN & OPEN LAWNS", icon: "🌿", color: "#d7b46a" },
        { label: "GIANT CHESS & PLAY EQUIPMENT", icon: "♟️", color: "#d7b46a" },
        { label: "TODDLER PLAY & KIDS’ SLIDES", icon: "👧", color: "#d7b46a" },
        { label: "AMPHITHEATRE & CINEMA SCREEN", icon: "🎬", color: "#d7b46a" },
        { label: "SENSORY & TRANQUIL GARDENS", icon: "🌺", color: "#d7b46a" },
        {
          label: "GROUP YOGA DECKS & NATURAL TRAILS",
          icon: "🧘",
          color: "#d7b46a",
        },
        { label: "FITNESS PODIUM & GYM", icon: "💪", color: "#d7b46a" },
        {
          label: "WELLNESS PARK & RUNNING CIRCUIT",
          icon: "🏃",
          color: "#d7b46a",
        },
        {
          label: "PING PONG, HANDBALL & TRAMPOLINE",
          icon: "🏓",
          color: "#d7b46a",
        },
        { label: "ADULT POOL & 25M LAP POOL", icon: "🏊", color: "#d7b46a" },
        {
          label: "POOL WITH BEACH EDGE & JACUZZI",
          icon: "🌊",
          color: "#d7b46a",
        },
        {
          label: "TODDLER POOL & WET BED LOUNGES",
          icon: "🛟",
          color: "#d7b46a",
        },
      ],
    },

    location: {
      title: "CREATED WHERE CITY MEETS CREEK",
      projectName: "Sobha One – Ras Al Khor, Dubai",
      address: "Ras Al Khor Road, overlooking Dubai Creek, Dubai, UAE",
      lat: 25.194, // approximate for map centering
      lng: 55.321,
      zoom: 14,
      proximityFeatures: [
        {
          icon: "🦩",
          text: "Overlooking Ras Al Khor Wildlife Sanctuary & Dubai Creek.",
        },
        {
          icon: "🏙️",
          text: "Panoramic views towards Downtown Dubai & Burj Khalifa.",
        },
        {
          icon: "🚇",
          text: "Easy access to Dubai Metro and major arterial roads.",
        },
        {
          icon: "✈️",
          text: "Short drive to Dubai International Airport and Business Bay.",
        },
      ],
    },

    nearbyAttractions: {
      title: "Connected to Dubai’s Key Destinations",
      attractions: [
        {
          name: "Ras Al Khor Wildlife Sanctuary",
          time: "5 minutes",
          icon: "🦩",
        },
        {
          name: "Downtown Dubai & Burj Khalifa",
          time: "10 minutes",
          icon: "🏙️",
        },
        {
          name: "The Dubai Mall",
          time: "15 minutes",
          icon: "🛍️",
        },
        {
          name: "Dubai Frame",
          time: "10 minutes",
          icon: "🖼️",
        },
        {
          name: "Dubai Opera",
          time: "12 minutes",
          icon: "🎭",
        },
        {
          name: "Business Bay",
          time: "15 minutes",
          icon: "🏢",
        },
        {
          name: "Dubai International Airport (DXB)",
          time: "15 minutes",
          icon: "✈️",
        },
        {
          name: "Palm Jumeirah",
          time: "25 minutes",
          icon: "🌴",
        },
      ],
    },

    cta: {
      title: "Interested in Sobha One?",
      description:
        "Share your details to receive updated availability, pricing and detailed floor plans for Sobha One’s apartments and duplexes in Ras Al Khor, Dubai.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Factbook", action: "download-brochure" },
      ],
    },
  },

  // ------------------ ARABIC ------------------ //

  ar: {
    seo: {
      title: "شوبا ون | شقق 1–4 غرف نوم ودوبلكس 2–5 غرف نوم في راس الخور، دبي",
      description:
        "شوبا ون هو مجتمع سكني متكامل في منطقة راس الخور بدبي، يضم شققاً من 1 إلى 4 غرف نوم ودوبلكس من 2 إلى 5 غرف نوم بإطلالات بانورامية على خور دبي، محمية راس الخور للأحياء البرية وداون تاون دبي، بالإضافة إلى ملعب غولف مكوّن من 18 حفرة ومرافق ترفيهية منتجعية.",
      keywords:
        "شوبا ون, شوبا ون دبي, شقق شوبا ون, دوبلكس شوبا ون, راس الخور, خور دبي, محمية راس الخور, ملعب غولف, شقة غرفة وصالة, شقة غرفتين, شقة ثلاث غرف, شقة أربع غرف, دوبلكس, شوبا العقارية",
      canonical: "/projects/apartments/sobha/sobha-one",
    },

    project: {
      name: "شوبا ون",
      developer: "شوبا العقارية",
      location: "شارع راس الخور، دبي، الإمارات العربية المتحدة",
      status: "قيد الإنشاء",
      startingPrice: "الأسعار تبدأ من نحو 1.1 مليون درهم",
      completionDate: "التسليم المتوقع في الربع الرابع 2026",
      type: "شقق ودوبلكس",
      units: "شقق 1–4 غرف نوم ودوبلكس 2–5 غرف نوم",
    },

    hero: {
      backgroundUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/overview01.jpg",
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/Dining%20room.jpg",
      companyName: "شوبا العقارية",
      rating: 4.8,
    },

    intro: {
      title: "حيث يلتقي أفق المدينة بهدوء الخور والغولف",
      paragraphs: [
        "شوبا ون هو مجتمع سكني بارز على الواجهة المائية في راس الخور، حيث تندمج المدينة مع الطبيعة في عنوان واحد. ترتفع خمس أبراج متدرجة الارتفاع بإطلالات مباشرة على خور دبي ومحمية راس الخور للأحياء البرية من جهة، وداون تاون دبي وبرج خليفة من الجهة الأخرى.",
        "يقدم المشروع شققاً من 1 إلى 4 غرف نوم ودوبلكس من 2 إلى 5 غرف نوم حول ملعب غولف عالمي مكوّن من 18 حفرة، مع تراس نادٍ بانورامي ومجموعة من الساحات والمرافق الترفيهية ذات الطابع الخاص. تم تصميم المخططات الداخلية بمساحات رحبة ونوافذ كبيرة وشرفات لربط حياتك اليومية بالمناظر الخضراء والمائية المحيطة.",
      ],
      brochures: [
        {
          title: "تحميل دليل شوبا ون",
          url: "https://luxury-real-estate-media.b-cdn.net/sobha-one/Sobha%20One%20Factbook%20(1).pdf",
          type: "main",
          icon: "📘",
          color: "#1A5F7A",
          size: "≈ 10–20 ميغابايت",
          category: "شقق ودوبلكس",
          fileName: "Sobha One Factbook.pdf",
          description:
            "الدليل الرسمي لمشروع شوبا ون يتضمن التكوين، تفاصيل الأبراج، المخططات والمرافق.",
        },
      ],
      imgUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/Side%20Shot%20-%20Dusk.jpg",
      imgAlt:
        "أبراج شوبا ون عند الغروب بإطلالات على ملعب الغولف وخور دبي وأفق المدينة.",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🌿",
          value: "إطلالات خضراء",
          label: "محمية راس الخور",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "⛳",
          value: "ملعب غولف",
          label: "18 حفرة أمام المشروع",
        },
        {
          bottom: "12%",
          right: "-20px",
          icon: "🏙️",
          value: "10 دقائق",
          label: "إلى داون تاون دبي",
        },
      ],
    },

    gallery: {
      title: "أسلوب حياة يطل على الخور والغولف وأفق دبي",
      slides: [
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/overview01.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-01-PP-PPTP.jpeg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-02-PP-PPTP.jpeg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-03-PP-PPTP.jpeg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-05-PP-01-PPTP.jpeg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-4-PP-PPTP.jpeg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/Side%20Shot%20-%20Dusk.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/Balcony.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/Dining%20room.jpg",
      ],
      projectTag: "شوبا ون – راس الخور",
    },

    floorPlans: {
      type: "شقق ودوبلكس",
      plans: [
        {
          id: "1br-apartment",
          title: "شقق غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة":
              "غرفة نوم واحدة + 1–2 حمام + غرفة معيشة وطعام + مطبخ + شرفة",
            "الاستخدام النموذجي":
              "خيار مثالي للسكن الأول أو للاستثمار مع استفادة كاملة من أسلوب حياة الخور.",
            المساحات:
              "المساحة تختلف حسب المخطط – يُرجى الرجوع إلى المخططات التفصيلية.",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/Dining%20room.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/Balcony.jpg",
          ],
          features: [
            "تصاميم عملية بمساحات معيشة مفتوحة.",
            "نوافذ ممتدة من الأرض حتى السقف للاستفادة من الإطلالات.",
            "شرفة ومرافق خدمات في كل وحدة كمعيار أساسي.",
          ],
        },
        {
          id: "2br-apartment",
          title: "شقق غرفتي نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة":
              "غرفتا نوم + 2–3 حمامات + غرفة معيشة وطعام + مطبخ + شرفة",
            "الاستخدام النموذجي":
              "مناسبة للأزواج والعائلات الصغيرة الباحثة عن مساحة أكبر.",
            المساحات:
              "تختلف المساحات بين الأبراج والتوجيه؛ راجع المخططات الرسمية للتفاصيل.",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/living%20room.tif",
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-02-PP-PPTP.jpeg",
          ],
          features: [
            "مساحات معيشة وطعام رحبة مع وصول مباشر للشرفة.",
            "غرفة نوم رئيسية بحمام داخلي وخزائن مدمجة.",
            "غرفة ثانية مثالية للأطفال أو الضيوف أو كمكتب منزلي.",
          ],
        },
        {
          id: "3br-apartment",
          title: "شقق ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "نوع الوحدة":
              "3 غرف نوم + 3–4 حمامات + غرفة معيشة وطعام + مطبخ + شرفة",
            "الاستخدام النموذجي":
              "منازل عائلية مع توزيع واضح بين غرف النوم ومناطق المعيشة.",
            المساحات:
              "عدة تكوينات ضمن الأبراج الخمسة؛ تأكد من المساحات حسب كل نموذج.",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/Courtyard%20shot.tif",
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-03-PP-PPTP.jpeg",
          ],
          features: [
            "مخططات ركنية في بعض النماذج لإطلالات مزدوجة.",
            "جناح رئيسي واسع مع غرفة ملابس في العديد من الوحدات.",
            "مساحات تخزين وخدمات كافية مع عمق شرفات مريح للجلوس الخارجي.",
          ],
        },
        {
          id: "4br-apartment",
          title: "شقق أربع غرف نوم",
          bedrooms: 4,
          specs: {
            "نوع الوحدة": "4 غرف نوم + عدة حمامات + صالة عائلية + مطبخ + شرفة",
            "الاستخدام النموذجي":
              "إقامة عائلية فاخرة في الأدوار الأعلى مع أفضل الإطلالات.",
            المساحات:
              "وحدات مميّزة؛ يُفضّل مراجعة المخططات لمعرفة المساحة المبنية الدقيقة.",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/overview01.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/Side%20Shot%20-%20Dusk.jpg",
          ],
          features: [
            "إطلالات بانورامية على أفق دبي وخور دبي.",
            "صالة عائلية في العديد من النماذج لمرونة أكبر في الاستخدام اليومي.",
            "مناسبة للعائلات التي تبحث عن منزل رئيسي طويل الأمد.",
          ],
        },
        {
          id: "duplex-2to5br",
          title: "دوبلكس 2–5 غرف نوم",
          bedrooms: "2–5",
          specs: {
            "نوع الوحدة":
              "دوبلكس على مستويين مع مساحات معيشة بارتفاع مزدوج في بعض النماذج",
            "الاستخدام النموذجي":
              "بيوت مميّزة للعملاء الذين يبحثون عن فراغات واسعة وتصميم معماري مميز وإطلالات استثنائية.",
            المساحات:
              "تختلف المساحات والتقسيمات بشكل كبير؛ يرجى الرجوع إلى جداول الدوبلكس والمخططات.",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/SHOT-01-PP-PPTP.jpeg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-one/Golf.tif",
          ],
          features: [
            "مساحات معيشة بارتفاع مزدوج في بعض أنواع الدوبلكس.",
            "فصل واضح بين غرف النوم ومناطق الضيافة.",
            "شرفات وتراسات كبيرة للاستمتاع بإطلالات ملعب الغولف والخور.",
          ],
        },
      ],
      brochureHref:
        "https://luxury-real-estate-media.b-cdn.net/sobha-one/Sobha%20One%20Factbook%20(1).pdf",
    },

    amenities: {
      title: "مرافق منتجعية عبر الساحات والتراس السماوي",
      amenities: [
        {
          label: "ملعب غولف 18 حفرة (Pitch & Putt)",
          icon: "⛳",
          color: "#d7b46a",
        },
        {
          label: "تراس نادٍ بانورامي عبر الأبراج",
          icon: "🌇",
          color: "#d7b46a",
        },
        { label: "منطقة شواء وحديقة عائلية", icon: "🍖", color: "#d7b46a" },
        {
          label: "حدائق سماوية ومساحات عشبية مفتوحة",
          icon: "🌿",
          color: "#d7b46a",
        },
        { label: "شطرنج عملاق وألعاب خارجية", icon: "♟️", color: "#d7b46a" },
        {
          label: "منطقة لعب للأطفال ومزالق مائية",
          icon: "👧",
          color: "#d7b46a",
        },
        {
          label: "مسرح مفتوح وشاشة سينما خارجية",
          icon: "🎬",
          color: "#d7b46a",
        },
        {
          label: "حدائق حسّية ومسطحات مائية هادئة",
          icon: "🌺",
          color: "#d7b46a",
        },
        { label: "منصات لليوغا ومسارات طبيعية", icon: "🧘", color: "#d7b46a" },
        { label: "منصة لياقة ونادي رياضي", icon: "💪", color: "#d7b46a" },
        { label: "حديقة عافية ومسار جري", icon: "🏃", color: "#d7b46a" },
        {
          label: "طاولات تنس طاولة، كرة يد، ترامبولين",
          icon: "🏓",
          color: "#d7b46a",
        },
        {
          label: "مسبح للكبار ومسبح سباحة بطول 25 م",
          icon: "🏊",
          color: "#d7b46a",
        },
        { label: "مسبح بشاطئ رملي وجاكوزي", icon: "🌊", color: "#d7b46a" },
        {
          label: "مسبح للأطفال وكراسي استرخاء مغمورة بالماء",
          icon: "🛟",
          color: "#d7b46a",
        },
      ],
    },

    location: {
      title: "موقع يجمع بين قلب المدينة وهدوء الخور",
      projectName: "شوبا ون – راس الخور، دبي",
      address: "شارع راس الخور، مطل على خور دبي، دبي، الإمارات العربية المتحدة",
      lat: 25.194,
      lng: 55.321,
      zoom: 14,
      proximityFeatures: [
        {
          icon: "🦩",
          text: "إطلالات مباشرة على محمية راس الخور للأحياء البرية وخور دبي.",
        },
        {
          icon: "🏙️",
          text: "مناظر بانورامية نحو داون تاون دبي وبرج خليفة.",
        },
        {
          icon: "🚇",
          text: "وصول سهل إلى المترو والطرق الرئيسية في دبي.",
        },
        {
          icon: "✈️",
          text: "مسافة قصيرة بالسيارة إلى مطار دبي الدولي ومنطقة بزنس باي.",
        },
      ],
    },

    nearbyAttractions: {
      title: "مواقع رئيسية قريبة",
      attractions: [
        {
          name: "محمية راس الخور للأحياء البرية",
          time: "5 دقائق",
          icon: "🦩",
        },
        {
          name: "داون تاون دبي وبرج خليفة",
          time: "10 دقائق",
          icon: "🏙️",
        },
        {
          name: "دبي مول",
          time: "15 دقيقة",
          icon: "🛍️",
        },
        {
          name: "برواز دبي",
          time: "10 دقائق",
          icon: "🖼️",
        },
        {
          name: "أوبرا دبي",
          time: "12 دقيقة",
          icon: "🎭",
        },
        {
          name: "بزنس باي",
          time: "15 دقيقة",
          icon: "🏢",
        },
        {
          name: "مطار دبي الدولي",
          time: "15 دقيقة",
          icon: "✈️",
        },
        {
          name: "نخلة جميرا",
          time: "25 دقيقة",
          icon: "🌴",
        },
      ],
    },

    cta: {
      title: "مهتم بمشروع شوبا ون؟",
      description:
        "أرسل بياناتك للحصول على أحدث الأسعار والتوافر والمخططات التفصيلية لشقق ودوبلكس شوبا ون في راس الخور، دبي.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل دليل المشروع", action: "download-brochure" },
      ],
    },
  },
};
