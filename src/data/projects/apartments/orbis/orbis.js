// src/data/projects/apartments/sobha/orbis.js

// IMPORTANT:
// The fields marked "CHECK IN BROCHURE" are where you MUST confirm
// numbers (prices, areas, completion date) directly from the official
// Sobha Orbis client deck before going live.

export const orbisData = {
  en: {
    seo: {
      title:
        "Sobha Orbis | 1–2 Bedroom Apartments in Motor City Dubai | Sobha Realty",
      description:
        // Three connected towers on podium – consistent with external sources.
        "Sobha Orbis is a collection of contemporary residential towers in Motor City, Dubai, offering 1, 1.5 and 2 bedroom apartments with resort-style amenities, thoughtful layouts and easy access to Mohammed Bin Zayed Road and Al Qudra Road.",
      keywords:
        "sobha orbis, sobha orbis dubai, motor city apartments, sobha realty, 1 bedroom, 1.5 bedroom, 2 bedroom, off plan dubai",
      canonical: "/projects/apartments/sobha/orbis",
    },

    project: {
      name: "Sobha Orbis",
      developer: "Sobha Realty",
      location: "Motor City, Dubai",
      status: "Off-Plan",
      // CHECK IN BROCHURE: make sure this matches the latest “Starting from” in the PDF.
      startingPrice: "AED 985,000",
      // CHECK IN BROCHURE: confirm Q4 2027 vs Q4 2028.
      completionDate: "Q4 2027",
      type: "Apartments",
      units: "1, 1.5 & 2 Bedroom Residences",
    },

    hero: {
      backgroundUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(3)-.jpg",
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/sobha-orbis.svg",
      companyName: "Sobha Realty",
      rating: 4.7,
    },

    intro: {
      title: "CONNECTED LIVING IN MOTOR CITY",
      paragraphs: [
        "Nestled within the dynamic Motor City community, Sobha Orbis emerges as an emblem of refined living for those who seek elevated urban life in Dubai.",
        // Fixed: removed WRONG “7 towers” claim – now generic but accurate.
        "Comprising contemporary residential towers on a landscaped podium, the project offers meticulously crafted 1, 1.5 and 2 bedroom apartments that combine smart layouts, quality finishes and a lifestyle that goes beyond the ordinary.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/Sobha%20Orbis%20-%20Client%20Deck%20Final.pdf",
          type: "main",
          icon: "🏙️",
          color: "#1A5F7A",
          size: "16.9 MB",
          category: "Apartments",
          fileName: "Sobha Orbis - Client Deck Final.pdf",
          description:
            "Full project overview including location, unit mix, layouts and payment plan.",
        },
      ],
      imgUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(3)-.jpg",
      imgAlt:
        "Sobha Orbis podium pool and landscaped leisure deck in Motor City, Dubai.",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏙️",
          value: "Motor City",
          label: "Established Community",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🛣️",
          value: "MBZ & Al Qudra",
          label: "Dual Road Access",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🏡",
          value: "1–2 BR",
          label: "Smart Layouts",
        },
      ],
    },

    gallery: {
      title: "A Visual Symphony",
      slides: [
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/A%20(5)-.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/A%20(2)-.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/A%20(3)-.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(1)-.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(2)-.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(3)-.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/1.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/2.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/3.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/4.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/5.jpg",
      ],
      projectTag: "Sobha Orbis",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1-bedroom",
          title: "1 Bedroom Apartment",
          bedrooms: 1,
          specs: {
            Unit: "1 BEDROOM + 1 BATHROOM + LIVING & DINING + BALCONY",
            // CHECK IN BROCHURE: confirm this exact typical area.
            "Total Area": "547 SQ.FT. (approx.)",
            "Starting Price": "AED 985,000",
            Handover: "Q4 2027",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/1.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/I%20(4)-.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(1)-.jpg",
          ],
          features: [
            "Efficient open-plan layout",
            "Balcony with community views",
            "Premium finishes and joinery",
            "Built-in wardrobes",
          ],
        },
        {
          id: "1-5-bedroom",
          title: "1.5 Bedroom Apartment",
          bedrooms: 1.5,
          specs: {
            Unit: "1 BEDROOM + MULTI-PURPOSE ROOM + 1 BATH + POWDER + BALCONY",
            // CHECK IN BROCHURE: confirm area.
            "Total Area": "697 SQ.FT. (approx.)",
            "Starting Price": "On Request",
            Handover: "Q4 2027",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/2.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/3.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(2)-.jpg",
          ],
          features: [
            "Flexible extra room (office / guest)",
            "Generous storage space",
            "Well-separated living and sleeping zones",
            "Ideal for young couples or investors",
          ],
        },
        {
          id: "2-bedroom",
          title: "2 Bedroom Apartment",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOMS + 2 BATHROOMS + POWDER + LIVING & DINING + BALCONY",
            // CHECK IN BROCHURE: confirm area.
            "Total Area": "988 SQ.FT. (approx.)",
            "Starting Price": "On Request",
            Handover: "Q4 2027",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/4.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/5.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(3)-.jpg",
          ],
          features: [
            "Corner layouts with wider views",
            "Spacious living & dining area",
            "En-suite master bedroom",
            "Ideal for end-users and families",
          ],
        },
      ],
      brochureHref:
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/Sobha%20Orbis%20-%20Client%20Deck%20Final.pdf",
    },

    amenities: {
      title: "Amenities For Everyday Resort Living",
      // Trimmed to things that appear in typical descriptions:
      amenities: [
        { label: "Infinity-Edge Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Kids’ Pool", icon: "👧", color: "#d7b46a" },
        { label: "Fully Equipped Gym", icon: "💪", color: "#d7b46a" },
        { label: "Yoga / Flex Studio", icon: "🧘", color: "#d7b46a" },
        { label: "Landscaped Podium Deck", icon: "🌿", color: "#d7b46a" },
        { label: "Outdoor Seating Lounges", icon: "🪑", color: "#d7b46a" },
        { label: "Children’s Play Area", icon: "👶", color: "#d7b46a" },
        { label: "Barbecue Zones", icon: "🍖", color: "#d7b46a" },
        { label: "Jogging & Walking Tracks", icon: "🏃", color: "#d7b46a" },
        { label: "Multipurpose Hall", icon: "🏛️", color: "#d7b46a" },
        { label: "Lobby Lounge", icon: "🛋️", color: "#d7b46a" },
        { label: "Retail & Cafés at Podium", icon: "☕", color: "#d7b46a" },
        { label: "24/7 Security", icon: "🔒", color: "#d7b46a" },
        { label: "Covered Parking", icon: "🅿️", color: "#d7b46a" },
        { label: "Smart Access & Lifts", icon: "⬆️", color: "#d7b46a" },
        { label: "Landscaped Gardens", icon: "🎋", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Sobha Orbis",
      address: "Motor City, Dubai, United Arab Emirates",
      lat: 25.046,
      lng: 55.239,
      zoom: 14,
      // CHECK IN BROCHURE or via Google Maps if your boss wants exact times.
      proximityFeatures: [
        { icon: "🏎️", text: "Approx. 5 min to Dubai Autodrome" },
        { icon: "🌺", text: "Approx. 10–12 min to Dubai Miracle Garden" },
        { icon: "🛣️", text: "Quick access to MBZ & Al Qudra Road" },
        { icon: "🛍️", text: "Around 20–22 min to Downtown & Dubai Mall" },
        { icon: "🌊", text: "Around 18–20 min to Dubai Marina" },
      ],
    },

    nearbyAttractions: {
      title: "Connected To The City",
      // These are high-level and not dangerous, but you can tweak times/distances.
      attractions: [
        {
          name: "Dubai Autodrome",
          distance: "≈ 2 km",
          time: "≈ 5 min",
          icon: "🏎️",
        },
        {
          name: "Dubai Miracle Garden",
          distance: "≈ 8 km",
          time: "≈ 10–12 min",
          icon: "🌺",
        },
        {
          name: "Global Village",
          distance: "≈ 9 km",
          time: "≈ 12–15 min",
          icon: "🎡",
        },
        {
          name: "Dubai Marina",
          distance: "≈ 18 km",
          time: "≈ 18–20 min",
          icon: "🌊",
        },
        {
          name: "Downtown Dubai",
          distance: "≈ 22 km",
          time: "≈ 20–22 min",
          icon: "🏙️",
        },
      ],
    },

    cta: {
      title: "Ready To Explore Sobha Orbis?",
      description:
        "Get in touch with our sales team to schedule a private presentation, discuss available units, or receive the full brochure and payment plan.",
      buttons: [
        {
          text: "Schedule Viewing",
          type: "primary",
          url: "/contact",
        },
        {
          text: "Download Brochure",
          type: "secondary",
          url: "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/Sobha%20Orbis%20-%20Client%20Deck%20Final.pdf",
        },
      ],
    },
  },

  // ========================
  // ARABIC VERSION
  // ========================
  ar: {
    seo: {
      title:
        "Sobha Orbis | شقق 1 إلى 2 غرفة نوم في موتور سيتي دبي | شوبا العقارية",
      description:
        "يقدّم مشروع Sobha Orbis مجموعة من الأبراج السكنية الحديثة في موتور سيتي بدبي، مع شقق 1، 1.5 و2 غرفة نوم، ومرافق ترفيهية بمستوى المنتجعات، وتصاميم عملية وإطلالات مميّزة ضمن مجتمع متكامل.",
      keywords:
        "Sobha Orbis، شوبا أوربس، موتور سيتي، شقق في دبي، شوبا العقارية، شقق غرفة وصالة، شقق غرفتين وصالة، عقارات قيد الإنشاء دبي",
      canonical: "/projects/apartments/sobha/orbis",
    },

    project: {
      name: "Sobha Orbis",
      developer: "شوبا العقارية",
      location: "موتور سيتي، دبي",
      status: "قيد التطوير",
      // CHECK IN BROCHURE
      startingPrice: "985,000 درهم إماراتي",
      // CHECK IN BROCHURE
      completionDate: "الربع الرابع 2027",
      type: "شقق سكنية",
      units: "شقق 1، 1.5 و2 غرفة نوم",
    },

    hero: {
      backgroundUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/A%20(3)-.jpg",
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/sobha-orbis.svg",
      companyName: "شوبا العقارية",
      rating: 4.7,
    },

    intro: {
      title: "حياة متكاملة في قلب موتور سيتي",
      paragraphs: [
        "يقع مشروع «Sobha Orbis» ضمن مجتمع موتور سيتي الحيوي، ويضم أبراجاً سكنية أنيقة بتصميم عصري على بوديوم ترفيهي منسّق بالمساحات الخضراء ومسارات المشي.",
        "يوفّر المشروع شققاً من غرفة، وغرفة ونصف، وغرفتي نوم، بتخطيطات مدروسة ونوافذ ممتدة من الأرض إلى السقف وتشطيبات راقية، مع وصول مباشر إلى شارع محمد بن زايد وشارع القدرة، ما يوازن بين الراحة والخصوصية والقرب من أهم وجهات الترفيه والعمل في دبي.",
      ],
      brochures: [
        {
          title: "عرض Sobha Orbis الرئيسي",
          url: "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/Sobha%20Orbis%20-%20Client%20Deck%20Final.pdf",
          type: "main",
          icon: "🏙️",
          color: "#1A5F7A",
          size: "16.9 MB",
          category: "شقق سكنية",
          fileName: "Sobha Orbis - الكتيّب التعريفي.pdf",
          description:
            "ملف تعريفي كامل للمشروع يتضمّن المخططات، وأنواع الوحدات، وخطط الدفع.",
        },
      ],
      imgUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(3)-.jpg",
      imgAlt:
        "إطلالة على مسابح ومسطحات خضراء في مشروع Sobha Orbis في موتور سيتي.",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏙️",
          value: "موتور سيتي",
          label: "مجتمع متكامل",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🛣️",
          value: "محمد بن زايد & القدرة",
          label: "سهولة الوصول للطرق",
        },
        {
          bottom: "15%",
          right: "-20px",
          icon: "🏡",
          value: "1 – 2 غرف",
          label: "مساحات عملية",
        },
      ],
    },

    gallery: {
      title: "لمحات من أسلوب الحياة في Orbis",
      slides: [
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/A%20(5)-.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/A%20(2)-.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/A%20(3)-.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(1)-.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(2)-.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(3)-.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/1.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/2.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/3.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/4.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/5.jpg",
      ],
      projectTag: "Sobha Orbis",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1-bedroom",
          title: "شقة غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة": "غرفة نوم + حمام + غرفة معيشة وطعام + شرفة",
            // CHECK IN BROCHURE
            "المساحة الإجمالية": "حوالي 547 قدم مربع",
            "السعر الابتدائي": "985,000 درهم إماراتي",
            "موعد التسليم": "الربع الرابع 2027",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/1.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/I%20(4)-.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(1)-.jpg",
          ],
          features: [
            "تخطيط عملي بفراغات مدروسة",
            "شرفة بإطلالات على المجتمع",
            "تشطيبات عالية الجودة",
            "خزائن مدمجة",
          ],
        },
        {
          id: "1-5-bedroom",
          title: "شقة غرفة ونصف",
          bedrooms: 1.5,
          specs: {
            "نوع الوحدة":
              "غرفة نوم + غرفة متعددة الاستخدامات + حمام + دورة مياه للضيوف + شرفة",
            // CHECK IN BROCHURE
            "المساحة الإجمالية": "حوالي 697 قدم مربع",
            "السعر الابتدائي": "حسب التوفر",
            "موعد التسليم": "الربع الرابع 2027",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/2.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/3.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(2)-.jpg",
          ],
          features: [
            "غرفة إضافية مثالية كمكتب أو غرفة ضيوف",
            "مساحات تخزين جيدة",
            "فصل واضح بين منطقة المعيشة ومنطقة النوم",
            "خيار ممتاز للاستثمار أو السكن لشخصين",
          ],
        },
        {
          id: "2-bedroom",
          title: "شقة غرفتي نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة":
              "غرفتا نوم + حمامان + دورة مياه للضيوف + غرفة معيشة وطعام + شرفة",
            // CHECK IN BROCHURE
            "المساحة الإجمالية": "حوالي 988 قدم مربع",
            "السعر الابتدائي": "حسب التوفر",
            "موعد التسليم": "الربع الرابع 2027",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/4.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/5.jpg",
            "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/L%20(3)-.jpg",
          ],
          features: [
            "مساحات معيشة أوسع للعائلات",
            "غرفة نوم ماستر بحمام داخلي",
            "إطلالات أوسع من الزوايا",
            "مناسبة للسكن العائلي طويل الأمد",
          ],
        },
      ],
      brochureHref:
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/Sobha%20Orbis%20-%20Client%20Deck%20Final.pdf",
    },

    amenities: {
      title: "مرافق تضيف قيمة لكل يوم",
      amenities: [
        { label: "مسبح إنفينيتي", icon: "🏊", color: "#d7b46a" },
        { label: "مسبح للأطفال", icon: "👧", color: "#d7b46a" },
        { label: "نادي رياضي متكامل", icon: "💪", color: "#d7b46a" },
        { label: "استوديو يوغا / مرونة", icon: "🧘", color: "#d7b46a" },
        { label: "سطح ترفيهي منسّق", icon: "🌿", color: "#d7b46a" },
        { label: "جلسات خارجية مريحة", icon: "🪑", color: "#d7b46a" },
        { label: "منطقة ألعاب للأطفال", icon: "👶", color: "#d7b46a" },
        { label: "مناطق شواء", icon: "🍖", color: "#d7b46a" },
        { label: "مسارات للجري والمشي", icon: "🏃", color: "#d7b46a" },
        { label: "قاعة متعددة الاستخدامات", icon: "🏛️", color: "#d7b46a" },
        { label: "ردهة استقبال راقية", icon: "🛋️", color: "#d7b46a" },
        { label: "محلات ومقاهي على البوديوم", icon: "☕", color: "#d7b46a" },
        { label: "أمن وحراسة 24/7", icon: "🔒", color: "#d7b46a" },
        { label: "مواقف سيارات مغطاة", icon: "🅿️", color: "#d7b46a" },
        { label: "مصاعد وأنظمة دخول ذكية", icon: "⬆️", color: "#d7b46a" },
        { label: "مساحات خضراء منسّقة", icon: "🎋", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "Sobha Orbis",
      address: "موتور سيتي، دبي، الإمارات العربية المتحدة",
      lat: 25.046,
      lng: 55.239,
      zoom: 14,
      proximityFeatures: [
        { icon: "🏎️", text: "حوالي 5 دقائق إلى حلبة دبي أوتودروم" },
        {
          icon: "🌺",
          text: "حوالي 10–12 دقيقة إلى حديقة دبي المعجزة",
        },
        {
          icon: "🛣️",
          text: "وصول سريع إلى شارع محمد بن زايد وشارع القدرة",
        },
        {
          icon: "🛍️",
          text: "حوالي 20–22 دقيقة إلى وسط دبي ودبي مول",
        },
        {
          icon: "🌊",
          text: "حوالي 18–20 دقيقة إلى مرسى دبي",
        },
      ],
    },

    nearbyAttractions: {
      title: "قربك من أهم الوجهات",
      attractions: [
        {
          name: "حلبة دبي أوتودروم",
          distance: "≈ 2 كم",
          time: "≈ 5 دقائق",
          icon: "🏎️",
        },
        {
          name: "حديقة دبي المعجزة",
          distance: "≈ 8 كم",
          time: "≈ 10–12 دقيقة",
          icon: "🌺",
        },
        {
          name: "جلوبال فيلج",
          distance: "≈ 9 كم",
          time: "≈ 12–15 دقيقة",
          icon: "🎡",
        },
        {
          name: "مرسى دبي",
          distance: "≈ 18 كم",
          time: "≈ 18–20 دقيقة",
          icon: "🌊",
        },
        {
          name: "وسط مدينة دبي",
          distance: "≈ 22 كم",
          time: "≈ 20–22 دقيقة",
          icon: "🏙️",
        },
      ],
    },

    cta: {
      title: "جاهز للتعرّف أكثر على Sobha Orbis؟",
      description:
        "تواصل مع فريق المبيعات لحجز عرض تقديمي خاص للمشروع، أو للحصول على تفاصيل الوحدات المتاحة وخطط الدفع والمواد التعريفية الكاملة.",
      buttons: [
        {
          text: "حجز موعد زيارة",
          type: "primary",
          url: "/contact",
        },
        {
          text: "تحميل الكتيّب",
          type: "secondary",
          url: "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/Sobha%20Orbis%20-%20Client%20Deck%20Final.pdf",
        },
      ],
    },
  },
};
