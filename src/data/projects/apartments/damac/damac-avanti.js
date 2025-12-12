// src/data/projects/apartments/damac/damac-avanti.js

export const damacAvantiData = {
  en: {
    seo: {
      title:
        "DAMAC Avanti | Furnished Deluxe Rooms & 1–3 Bedroom Suites in Business Bay, Dubai",
      description:
        "DAMAC Avanti is a serviced hotel apartment tower in Business Bay, Dubai, offering furnished deluxe rooms and one-, two- and three-bedroom suites with signature interiors, premium fittings and fully fitted kitchens. Enjoy a grand lobby with café, temperature-controlled swimming pool, gym, steam room, sauna, children’s play area and ample parking.",
      keywords:
        "DAMAC Avanti, Avanti Business Bay, DAMAC hotel apartments, serviced apartments Dubai, furnished apartments Business Bay, deluxe rooms, 1 bedroom suite, 2 bedroom suite, 3 bedroom suite, DAMAC Properties",
      canonical: "/projects/apartments/damac/damac-avanti",
    },

    project: {
      name: "Avanti",
      developer: "DAMAC Properties",
      location: "Business Bay, Dubai, UAE",
      status: "Serviced / Hotel Apartments",
      // Pricing & availability change frequently and were not stated in the brochure.
      startingPrice: "Contact us for latest availability & pricing",
      // Handover/completion not stated in the brochure you provided.
      completionDate: "Not stated in the brochure",
      type: "Serviced / Hotel Apartments",
      units: "Furnished deluxe rooms & 1–3 bedroom suites",
    },

    hero: {
      // Use a strong exterior as hero background (from your Bunny folder naming).
      backgroundUrl:
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Ext1.jpg",
      squareImageUrl: "/damac-logo.png",
      companyName: "DAMAC Properties",
      // Not provided in DAMAC brochure; set to 0 to avoid fake values.
      rating: 0,
    },

    intro: {
      title: "Serviced Living in the Heart of Business Bay",
      paragraphs: [
        "Avanti raises the standards of elite serviced living with thoughtful design and high-quality finishes. The suites feature signature interiors, premium fittings and splendid furnishings inspired by leading designers and brands.",
        "Located in Business Bay with easy access to Sheikh Zayed Road and Al Khail Road, Avanti places Dubai’s major landmarks and attractions within convenient reach—shopping, dining, and the city’s most iconic districts—all close by.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20brochure%20Jul%202018%20RM.pdf",
          type: "main",
          icon: "📘",
          color: "#1A5F7A",
          size: "—",
          category: "Serviced / Hotel Apartments",
          fileName: "Avanti brochure Jul 2018 RM.pdf",
          description:
            "Official Avanti brochure (project overview, location, lifestyle, and key features).",
        },
      ],
      imgUrl:
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Ext2.jpg",
      imgAlt: "DAMAC Avanti exterior view in Business Bay, Dubai.",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "Business Bay",
          label: "Prime Central District",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🛋️",
          value: "Furnished",
          label: "Deluxe Rooms & Suites",
        },
        {
          bottom: "10%",
          right: "-20px",
          icon: "🍽️",
          value: "Fully Fitted",
          label: "Kitchen in Suites",
        },
      ],
    },

    gallery: {
      title: "Exteriors, Interiors & Lifestyle",
      slides: [
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/02_Avanti%20MasterPic.png",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Ext1.jpg",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Ext2.jpg",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-EXT.png",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Int1.jpg",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Int2.jpeg",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-01.png",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-02.png",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-03.png",
      ],
      projectTag: "Avanti – Business Bay, Dubai",
    },

    floorPlans: {
      type: "serviced / hotel apartments",
      plans: [
        {
          id: "deluxe-rooms",
          title: "Furnished Deluxe Rooms",
          bedrooms: "Studio / Room",
          specs: {
            Type: "FURNISHED DELUXE ROOMS",
            Layout:
              "Hotel-style living with furnished interiors and premium finishes.",
            Notes:
              "Configuration details are provided in the official brochure / floor plan pack.",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-01.png",
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Int1.jpg",
          ],
          features: [
            "Furnished interiors with premium fittings and finishes.",
            "Designed for serviced living in Business Bay.",
            "Access to tower amenities (pool, gym, steam/sauna, lobby café).",
          ],
        },
        {
          id: "1br-suite",
          title: "1 Bedroom Suites",
          bedrooms: 1,
          specs: {
            Type: "ONE-BEDROOM SUITES",
            Layout:
              "Separate living room and dining area (suite layouts), plus fully fitted kitchen.",
            Kitchen:
              "Washer, dryer, oven, refrigerator and microwave (as per brochure).",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-02.png",
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Int2.jpeg",
          ],
          features: [
            "Separate living room and dining area (suite format).",
            "Fully fitted kitchen with appliances (washer, dryer, oven, refrigerator, microwave).",
            "Furnished, premium finishes and signature interiors.",
          ],
        },
        {
          id: "2br-suite",
          title: "2 Bedroom Suites",
          bedrooms: 2,
          specs: {
            Type: "TWO-BEDROOM SUITES",
            Layout:
              "Suite-style layout with living & dining areas and fully fitted kitchen.",
            Kitchen:
              "Washer, dryer, oven, refrigerator and microwave (as per brochure).",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Int1.jpg",
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-03.png",
          ],
          features: [
            "Suite lifestyle designed for comfort and flexibility.",
            "Furnished interiors with premium fittings.",
            "Ideal for end-users seeking serviced living in Business Bay.",
          ],
        },
        {
          id: "3br-suite",
          title: "3 Bedroom Suites",
          bedrooms: 3,
          specs: {
            Type: "THREE-BEDROOM SUITES",
            Layout:
              "Larger suite format with living & dining areas and fully fitted kitchen.",
            Kitchen:
              "Washer, dryer, oven, refrigerator and microwave (as per brochure).",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-EXT.png",
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Ext2.jpg",
          ],
          features: [
            "Generous suite living with furnished interiors.",
            "Premium finishes with a focus on meticulous craftsmanship.",
            "Serviced lifestyle with full access to amenities and parking.",
          ],
        },
      ],
      brochureHref:
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20brochure%20Jul%202018%20RM.pdf",
    },

    amenities: {
      title: "Amenities & Services",
      amenities: [
        { label: "GRAND LOBBY WITH CAFÉ", icon: "☕", color: "#d7b46a" },
        {
          label: "TEMPERATURE-CONTROLLED SWIMMING POOL",
          icon: "🏊",
          color: "#d7b46a",
        },
        { label: "STATE-OF-THE-ART GYMNASIUM", icon: "💪", color: "#d7b46a" },
        { label: "STEAM ROOM", icon: "🧖", color: "#d7b46a" },
        { label: "SAUNA", icon: "🔥", color: "#d7b46a" },
        { label: "CHILDREN’S PLAY AREA", icon: "🧸", color: "#d7b46a" },
        { label: "AMPLE PARKING", icon: "🅿️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Business Bay Address, Easy City Access",
      projectName: "Avanti – Business Bay, Dubai",
      address: "Business Bay, Dubai, UAE",
      // Map centering only (Business Bay). Replace with exact tower pin if you store it internally.
      lat: 25.186,
      lng: 55.276,
      zoom: 14,
      proximityFeatures: [
        {
          icon: "🛣️",
          text: "Easy access to Sheikh Zayed Road and Al Khail Road.",
        },
        {
          icon: "🛍️",
          text: "Close to Dubai’s key attractions, shopping and lifestyle destinations.",
        },
        {
          icon: "🏙️",
          text: "Located in Business Bay near Dubai’s central districts.",
        },
      ],
    },

    nearbyAttractions: {
      title: "Nearby Landmarks (as highlighted in the brochure)",
      attractions: [
        { name: "The Dubai Mall", time: "Nearby", icon: "🛍️" },
        { name: "Downtown Dubai", time: "Nearby", icon: "🏙️" },
        { name: "Dubai Creek", time: "Nearby", icon: "🌊" },
        { name: "Business Bay Metro Station", time: "Nearby", icon: "🚇" },
        { name: "Bay Square", time: "Nearby", icon: "🏢" },
        { name: "JW Marriott Marquis", time: "Nearby", icon: "🏨" },
        { name: "Habtoor Complex", time: "Nearby", icon: "🏙️" },
        {
          name: "Paramount Tower Hotel & Residences",
          time: "Nearby",
          icon: "🎬",
        },
      ],
    },

    cta: {
      title: "Interested in DAMAC Avanti?",
      description:
        "Share your details to receive current availability, updated pricing, and the official brochure / floor plans for Avanti in Business Bay.",
      buttons: [
        { label: "Enquire Now", action: "enquire" },
        { label: "Download Brochure", action: "download-brochure" },
      ],
    },
  },

  // ------------------ ARABIC ------------------ //

  ar: {
    seo: {
      title:
        "داماك أفانتي | غرف ديلوكس مفروشة وأجنحة 1–3 غرف نوم في الخليج التجاري دبي",
      description:
        "داماك أفانتي برج شقق فندقية (Serviced / Hotel Apartments) في الخليج التجاري بدبي، يقدّم غرف ديلوكس مفروشة وأجنحة بغرفة وغرفتين وثلاث غرف نوم بتصاميم داخلية مميزة وتجهيزات عالية الجودة ومطابخ مجهزة بالكامل. استمتع ببهو فاخر مع مقهى، مسبح بدرجة حرارة متحكم بها، صالة رياضية، غرفة بخار وساونا، منطقة لعب للأطفال ومواقف واسعة.",
      keywords:
        "داماك أفانتي, أفانتي الخليج التجاري, شقق فندقية دبي, شقق مخدومة, شقق مفروشة الخليج التجاري, جناح غرفة نوم, جناح غرفتين, جناح ثلاث غرف, DAMAC",
      canonical: "/projects/apartments/damac/damac-avanti",
    },

    project: {
      name: "أفانتي",
      developer: "داماك العقارية",
      location: "الخليج التجاري، دبي، الإمارات العربية المتحدة",
      status: "شقق فندقية / شقق مخدومة",
      startingPrice: "تواصل معنا لمعرفة التوفر والأسعار الحالية",
      completionDate: "غير مذكور في الكتيّب",
      type: "شقق فندقية / شقق مخدومة",
      units: "غرف ديلوكس مفروشة وأجنحة 1–3 غرف نوم",
    },

    hero: {
      backgroundUrl:
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/02_Avanti%20MasterPic.png",
      squareImageUrl: "/damac-logo.png",
      companyName: "داماك العقارية",
      rating: 0,
    },

    intro: {
      title: "أسلوب حياة مخدوم في قلب الخليج التجاري",
      paragraphs: [
        "يرفع أفانتي معايير السكن المخدوم بتصميم مدروس وتشطيبات عالية الجودة. تتميز الأجنحة بتصاميم داخلية مميزة وتجهيزات ممتازة وأثاث مستوحى من علامات عالمية.",
        "يقع المشروع في الخليج التجاري مع سهولة الوصول إلى شارع الشيخ زايد وشارع الخيل، كما أن أبرز وجهات دبي ومعالمها الحيوية قريبة من موقعه.",
      ],
      brochures: [
        {
          title: "تحميل كتيّب أفانتي",
          url: "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20brochure%20Jul%202018%20RM.pdf",
          type: "main",
          icon: "📘",
          color: "#1A5F7A",
          size: "—",
          category: "شقق فندقية / شقق مخدومة",
          fileName: "Avanti brochure Jul 2018 RM.pdf",
          description: "الكتيّب الرسمي لمشروع أفانتي.",
        },
      ],
      imgUrl:
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Ext1.jpg",
      imgAlt: "واجهة برج داماك أفانتي في الخليج التجاري بدبي.",
      floatingCards: [
        {
          top: "18%",
          right: "-30px",
          icon: "🏙️",
          value: "الخليج التجاري",
          label: "موقع مركزي",
        },
        {
          bottom: "28%",
          left: "-40px",
          icon: "🛋️",
          value: "مفروش",
          label: "غرف ديلوكس وأجنحة",
        },
        {
          bottom: "10%",
          right: "-20px",
          icon: "🍽️",
          value: "مطبخ مجهز",
          label: "في الأجنحة",
        },
      ],
    },

    gallery: {
      title: "صور المشروع: الخارجي والداخلي",
      slides: [
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/02_Avanti%20MasterPic.png",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Ext1.jpg",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Ext2.jpg",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-EXT.png",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Int1.jpg",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Int2.jpeg",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-01.png",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-02.png",
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-03.png",
      ],
      projectTag: "أفانتي – الخليج التجاري، دبي",
    },

    floorPlans: {
      type: "شقق فندقية / شقق مخدومة",
      plans: [
        {
          id: "deluxe-rooms",
          title: "غرف ديلوكس مفروشة",
          bedrooms: "استوديو / غرفة",
          specs: {
            "نوع الوحدة": "غرف ديلوكس مفروشة",
            "وصف عام":
              "أسلوب شقق فندقية مع تشطيبات مميزة وتصاميم داخلية راقية.",
            ملاحظات:
              "التفاصيل الدقيقة للمساحات والتوزيع موجودة ضمن المخططات الرسمية.",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-01.png",
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Int1.jpg",
          ],
          features: [
            "تشطيبات ممتازة وتجهيزات عالية الجودة.",
            "مناسبة للسكن المخدوم في الخليج التجاري.",
            "إمكانية الاستفادة من مرافق البرج كاملة.",
          ],
        },
        {
          id: "1br-suite",
          title: "أجنحة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "جناح غرفة نوم واحدة",
            التوزيع:
              "صالة معيشة مستقلة ومنطقة طعام (ضمن الأجنحة) مع مطبخ مجهز بالكامل.",
            المطبخ: "غسالة، نشّافة، فرن، ثلاجة وميكروويف (حسب الكتيّب).",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-02.png",
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Int2.jpeg",
          ],
          features: [
            "صالة معيشة ومنطقة طعام (ضمن تصميم الأجنحة).",
            "مطبخ مجهز بالكامل مع الأجهزة المذكورة.",
            "أثاث وتشطيبات فاخرة.",
          ],
        },
        {
          id: "2br-suite",
          title: "أجنحة غرفتي نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة": "جناح غرفتي نوم",
            التوزيع: "توزيع أجنحة مع صالة ومعيشة وطعام ومطبخ مجهز بالكامل.",
            المطبخ: "غسالة، نشّافة، فرن، ثلاجة وميكروويف (حسب الكتيّب).",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Int1.jpg",
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-03.png",
          ],
          features: [
            "تصميم مريح للسكن المخدوم.",
            "تشطيبات وأثاث راقي.",
            "مناسب للعائلات الصغيرة أو الاستخدام طويل الأمد.",
          ],
        },
        {
          id: "3br-suite",
          title: "أجنحة ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "نوع الوحدة": "جناح ثلاث غرف نوم",
            التوزيع:
              "حجم أكبر ضمن تصميم الأجنحة مع صالة وطعام ومطبخ مجهز بالكامل.",
            المطبخ: "غسالة، نشّافة، فرن، ثلاجة وميكروويف (حسب الكتيّب).",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/AVANTI-IMG-EXT.png",
            "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20Ext2.jpg",
          ],
          features: [
            "مساحات أكبر ضمن نمط السكن المخدوم.",
            "جودة عالية في التشطيبات والتجهيزات.",
            "الاستفادة من مرافق البرج ومواقف السيارات.",
          ],
        },
      ],
      brochureHref:
        "https://luxury-real-estate-media.b-cdn.net/damac/damac-avanti/Avanti%20brochure%20Jul%202018%20RM.pdf",
    },

    amenities: {
      title: "المرافق والخدمات",
      amenities: [
        { label: "بهو فاخر مع مقهى", icon: "☕", color: "#d7b46a" },
        {
          label: "مسبح بدرجة حرارة متحكم بها",
          icon: "🏊",
          color: "#d7b46a",
        },
        { label: "صالة رياضية حديثة", icon: "💪", color: "#d7b46a" },
        { label: "غرفة بخار", icon: "🧖", color: "#d7b46a" },
        { label: "ساونا", icon: "🔥", color: "#d7b46a" },
        { label: "منطقة لعب للأطفال", icon: "🧸", color: "#d7b46a" },
        { label: "مواقف سيارات واسعة", icon: "🅿️", color: "#d7b46a" },
      ],
    },

    location: {
      title: "عنوان الخليج التجاري مع وصول سهل للمدينة",
      projectName: "أفانتي – الخليج التجاري، دبي",
      address: "الخليج التجاري، دبي، الإمارات العربية المتحدة",
      lat: 25.186,
      lng: 55.276,
      zoom: 14,
      proximityFeatures: [
        {
          icon: "🛣️",
          text: "وصول سهل إلى شارع الشيخ زايد وشارع الخيل.",
        },
        {
          icon: "🛍️",
          text: "قريب من أبرز معالم دبي ووجهات التسوق ونمط الحياة.",
        },
        {
          icon: "🏙️",
          text: "ضمن منطقة الخليج التجاري القريبة من قلب دبي.",
        },
      ],
    },

    nearbyAttractions: {
      title: "معالم قريبة (كما وردت في الكتيّب)",
      attractions: [
        { name: "دبي مول", time: "قريب", icon: "🛍️" },
        { name: "داون تاون دبي", time: "قريب", icon: "🏙️" },
        { name: "خور دبي", time: "قريب", icon: "🌊" },
        { name: "محطة مترو الخليج التجاري", time: "قريب", icon: "🚇" },
        { name: "باي سكوير", time: "قريب", icon: "🏢" },
        { name: "JW ماريوت ماركيز", time: "قريب", icon: "🏨" },
        { name: "مجمع الحبتور", time: "قريب", icon: "🏙️" },
        { name: "برج باراماونت فندق وشقق", time: "قريب", icon: "🎬" },
      ],
    },

    cta: {
      title: "مهتم بمشروع داماك أفانتي؟",
      description:
        "أرسل بياناتك للحصول على أحدث التوفر والأسعار الحالية مع الكتيّب الرسمي والمخططات.",
      buttons: [
        { label: "اطلب استشارة الآن", action: "enquire" },
        { label: "تحميل الكتيّب", action: "download-brochure" },
      ],
    },
  },
};
