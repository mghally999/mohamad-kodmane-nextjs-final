// src/data/projects/apartments/sobha/solis/solis.js

export const sobhaSolisData = {
  // ================= ENGLISH =================
  en: {
    seo: {
      title:
        "Sobha Solis | 1–3 Bedroom Apartments in Motor City Dubai | Sobha Realty",
      description:
        "Sobha Solis in Motor City Dubai offers 1 to 3-bedroom apartments with resort-style outdoor amenities, Arsenal-branded fitness zones and views over the Dubai skyline and Dubai Autodrome.",
      keywords:
        "Sobha Solis, Sobha Solis Motor City, Sobha Solis apartments, Sobha Realty, Motor City Dubai property, 1 bedroom apartment Motor City, 2 bedroom, 3 bedroom, Dubai Autodrome view, Arsenal Fitness Zone",
      canonical: "/projects/apartments/sobha/sobha-solis",
    },

    project: {
      name: "Sobha Solis",
      developer: "Sobha Realty",
      location: "Motor City, Dubai, UAE",
      status: "Off-Plan",
      startingPrice: "From ~AED 1.07M",
      completionDate: "Expected completion Q4 2027",
      type: "Apartments",
      units: "1, 1.5, 2 & 3 Bedroom Apartments",
    },

    hero: {
      // 👇 this is what ProjectHero.jsx expects
      backgroundUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Sobha%20Solis.jpg",
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/sobha-solis.svg",
      companyName: "Sobha Realty",
      rating: 4.7,
    },

    intro: {
      title: "Sobha Solis: Adventure Awaits At Your Doorstep",
      paragraphs: [
        "Welcome to an urban oasis where luxury meets adventure. Located in Motor City, this stunning sanctuary presents an exclusive collection of 1 to 3-bedroom residences, elegantly arranged across four distinct towers, all connected by a shared podium reserved for residents",
        "Each apartment is thoughtfully designed with expansive layouts, large windows, and private balconies, flooding your home with natural light and offering breathtaking views. Enjoy the visual feast of vibrant gardens and the exhilarating backdrop of the racetrack, all from the comfort of your serene home.",
      ],
      brochures: [
        {
          title: "Download Brochure",
          url: "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/Sobha%20Orbis%20%26%20Sobha%20Solis%20Motor%20City_Brochure%20-%20English.pdf",
          type: "main",
          icon: "🏙️",
          color: "#1A5F7A",
          size: "≈ 15–20 MB",
          category: "Apartments",
          fileName:
            "Sobha Orbis & Sobha Solis Motor City_Brochure - English.pdf",
          description:
            "Official project brochure with unit mix, floor plans, amenities, payment plan and location details.",
        },
      ],
      imgUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Sobha%20Solis%20-%20Arial.jpg",
      imgAlt:
        "Aerial view of Sobha Solis tower, podium and pools in Motor City Dubai.",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏁",
          value: "5 mins",
          label: "Dubai Autodrome",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌸",
          value: "10 mins",
          label: "Miracle Garden",
        },
        {
          bottom: "18%",
          right: "-25px",
          icon: "🎡",
          value: "12 mins",
          label: "Global Village",
        },
      ],
    },

    gallery: {
      title: "A Lifestyle Tower Overlooking Motor City",
      // 👇 array of strings, like Verde / Reserve
      slides: [
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Sobha%20Solis%20-%20Night%20shot.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Sobha%20Solis%20-%20Arial.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Living%20room.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Bedroom.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Bathroom.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E207.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E208.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E209.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E314.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E315.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Tower%20A%20-%20Entrance.jpg",
      ],
      projectTag: "Sobha Solis – Motor City",
    },

    floorPlans: {
      type: "apartments",
      plans: [
        {
          id: "1br",
          title: "1 Bedroom Apartments",
          bedrooms: 1,
          specs: {
            Unit: "1 BEDROOM + 1 BATHROOM + OPEN-PLAN LIVING & DINING + KITCHEN + BALCONY",
            "Size Range": "Approx. 535 – 717 sq.ft.",
            Handover: "Q4 2027 (expected)",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Living%20room.jpg",
          ],
          features: [
            "Perfect entry-level home in Motor City",
            "Smart layouts with open-plan living",
            "Balconies overlooking the community or Autodrome",
          ],
        },
        {
          id: "1-5br",
          title: "1.5 Bedroom Apartments",
          bedrooms: 1.5,
          specs: {
            Unit: "1 BEDROOM + MULTI-PURPOSE ROOM + 1 BATHROOM + LIVING & DINING + KITCHEN + BALCONY",
            "Size Range": "Approx. 630 – 782 sq.ft.",
            Handover: "Q4 2027 (expected)",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E207.jpg",
          ],
          features: [
            "Flexible extra room ideal for study, nursery or guest",
            "Optimised for young couples and professionals",
          ],
        },
        {
          id: "2br",
          title: "2 Bedroom Apartments",
          bedrooms: 2,
          specs: {
            Unit: "2 BEDROOMS + 2–3 BATHROOMS + SPACIOUS LIVING & DINING + CLOSED/OPEN KITCHEN + BALCONY",
            "Size Range": "Approx. 1,124 – 1,130 sq.ft.",
            Handover: "Q4 2027 (expected)",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E208.jpg",
          ],
          features: [
            "Family-friendly layouts",
            "Corner units with dual-aspect views in selected layouts",
          ],
        },
        {
          id: "3br",
          title: "3 Bedroom Apartments",
          bedrooms: 3,
          specs: {
            Unit: "3 BEDROOMS + MULTIPLE BATHROOMS + GENEROUS LIVING & DINING + MAID’S ROOM (SELECTED) + LARGE BALCONY",
            "Size Range": "Approx. 1,895 sq.ft.",
            Handover: "Q4 2027 (expected)",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E314.jpg",
          ],
          features: [
            "Premium family residences at the top of the tower",
            "Largest layouts with expansive balconies and views",
          ],
        },
      ],
      brochureHref:
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/Sobha%20Orbis%20%26%20Sobha%20Solis%20Motor%20City_Brochure%20-%20English.pdf",
    },

    amenities: {
      title: "Amenities That Push Everyday Life Beyond Ordinary",
      amenities: [
        { label: "Lap Pool", icon: "🏊", color: "#d7b46a" },
        { label: "Leisure Pool", icon: "💦", color: "#d7b46a" },
        { label: "Kids’ Pool", icon: "👧", color: "#d7b46a" },
        { label: "Entry Water Feature", icon: "💧", color: "#d7b46a" },
        { label: "Common Parks & Lawns", icon: "🌳", color: "#d7b46a" },
        { label: "Seating Courts", icon: "🪑", color: "#d7b46a" },
        { label: "Zen Garden", icon: "🧘", color: "#d7b46a" },
        { label: "Parkour Leisure Trail", icon: "🤸", color: "#d7b46a" },
        { label: "Dog Park", icon: "🐕", color: "#d7b46a" },
        { label: "BBQ & Picnic Area", icon: "🍖", color: "#d7b46a" },
        { label: "Jogging & Walking Track", icon: "🏃", color: "#d7b46a" },
        { label: "Outdoor Rock-Climbing Wall", icon: "🧗", color: "#d7b46a" },
        { label: "Outdoor Cinema", icon: "🎬", color: "#d7b46a" },
        { label: "Tennis Court", icon: "🎾", color: "#d7b46a" },
        { label: "Cricket Nets", icon: "🏏", color: "#d7b46a" },

        { label: "Arsenal-Branded Fitness Zone", icon: "💪", color: "#d7b46a" },
        { label: "Calisthenics Zone", icon: "🏋️", color: "#d7b46a" },
        { label: "Indoor Kids’ Play Area", icon: "🧸", color: "#d7b46a" },
        { label: "Indoor Rock-Climbing (Kids)", icon: "🧗‍♀️", color: "#d7b46a" },
        { label: "Yoga & Meditation Studio", icon: "🧘", color: "#d7b46a" },
        { label: "Pilates Studio", icon: "🧎", color: "#d7b46a" },
        { label: "Boxing Corner", icon: "🥊", color: "#d7b46a" },
        { label: "Steam & Sauna Rooms", icon: "🧖", color: "#d7b46a" },
        { label: "Library & Reading Lounge", icon: "📚", color: "#d7b46a" },
        { label: "Indoor Games Room", icon: "🎯", color: "#d7b46a" },
        { label: "Residents’ Lounge", icon: "🛋️", color: "#d7b46a" },
        { label: "Music Studio", icon: "🎵", color: "#d7b46a" },
        { label: "Co-working / Study Space", icon: "💻", color: "#d7b46a" },
      ],
    },

    location: {
      title: "Project Location",
      projectName: "Sobha Solis – Motor City, Dubai",
      address: "Motor City, Dubai, United Arab Emirates",
      lat: 25.0445,
      lng: 55.2305,
      zoom: 14,
      proximityFeatures: [
        { icon: "🏁", text: "Next to Dubai Autodrome" },
        {
          icon: "🌸",
          text: "Close to Dubai Miracle Garden & Butterfly Garden",
        },
        { icon: "🎡", text: "Easy drive to Global Village & IMG Worlds" },
        {
          icon: "🛣️",
          text: "Access to Sheikh Mohammed Bin Zayed Rd & Al Khail Rd",
        },
      ],
    },

    nearbyAttractions: {
      title: "Connected To Dubai’s Lifestyle Hubs",
      attractions: [
        {
          name: "Dubai Autodrome",
          distance: "≈ 1–2 km",
          time: "≈ 5 min",
          icon: "🏁",
        },
        {
          name: "Dubai Miracle Garden",
          distance: "≈ 5–6 km",
          time: "≈ 10 min",
          icon: "🌸",
        },
        {
          name: "Global Village",
          distance: "≈ 8–10 km",
          time: "≈ 12 min",
          icon: "🎡",
        },
        {
          name: "Mall of the Emirates",
          distance: "≈ 15 km",
          time: "≈ 15 min",
          icon: "🛍️",
        },
        {
          name: "Dubai Marina & JBR",
          distance: "≈ 20 km",
          time: "≈ 20 min",
          icon: "🌊",
        },
        {
          name: "Downtown Dubai & Burj Khalifa",
          distance: "≈ 25 km",
          time: "≈ 20–25 min",
          icon: "🏙️",
        },
      ],
    },

    cta: {
      title: "Interested in Sobha Solis?",
      description:
        "Share your details to receive full floor plans, latest prices and availability for Sobha Solis in Motor City, Dubai.",
      buttons: [
        {
          text: "Enquire About Sobha Solis",
          type: "primary",
          url: "/contact",
        },
        {
          text: "Download Brochure",
          type: "secondary",
          url: "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/Sobha%20Orbis%20%26%20Sobha%20Solis%20Motor%20City_Brochure%20-%20English.pdf",
        },
      ],
    },
  },

  // ================= ARABIC =================
  ar: {
    seo: {
      title: "شوبا سوليس | شقق 1–3 غرف نوم في موتور سيتي دبي",
      description:
        "شوبا سوليس في موتور سيتي دبي يقدم شققاً مكونة من 1 إلى 3 غرف نوم مع مرافق خارجية منتجعية، مناطق لياقة تحمل علامة أرسنال وإطلالات على أفق دبي وحلبة دبي أوتودروم.",
      keywords:
        "شوبا سوليس, شقق شوبا سوليس, موتور سيتي دبي, شوبا العقارية, شقق غرفة وصالة في موتور سيتي, شقق غرفتين, ثلاث غرف, منطقة لياقة أرسنال",
      canonical: "/projects/apartments/sobha/sobha-solis",
    },

    project: {
      name: "شوبا سوليس",
      developer: "شوبا العقارية",
      location: "موتور سيتي، دبي، الإمارات العربية المتحدة",
      status: "قيد الإنشاء",
      startingPrice: "الأسعار تبدأ من نحو 1.07 مليون درهم",
      completionDate: "التسليم المتوقع في الربع الرابع 2027",
      type: "شقق سكنية",
      units: "شقق 1، 1.5، 2 و3 غرف نوم",
    },

    hero: {
      backgroundUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Sobha%20Solis.jpg",
      squareImageUrl:
        "https://luxury-real-estate-media.b-cdn.net/projects-profile-pictures/sobha-solis.svg",
      companyName: "شوبا العقارية",
      rating: 4.7,
    },

    intro: {
      title: "عِش بجرأة… عِش بكامل طاقتك في شوبا سوليس",
      paragraphs: [
        "شوبا سوليس هو برج سكني معاصر في موتور سيتي بدبي، يضم شققاً من غرفة إلى ثلاث غرف نوم بإطلالات واسعة على حلبة دبي أوتودروم، أفق دبي والمساحات الخضراء المحيطة.",
        "تم تصميم المشروع لنمط حياة حضري نشِط، حيث يجمع بين المساحات الخارجية المفتوحة والمناطق الاجتماعية والصحية الحيوية. يتمتع السكان بمجموعة منتقاة من المسابح والحدائق ومناطق اللعب، إضافة إلى منطقة لياقة تحمل علامة أرسنال، لتكوين مجتمع نابض بالحياة يشعر فيه كل يوم بأنه تجربة جديدة.",
      ],
      brochures: [
        {
          title: "تحميل البروشور (إنجليزي)",
          url: "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/Sobha%20Orbis%20%26%20Sobha%20Solis%20Motor%20City_Brochure%20-%20English.pdf",
          type: "main",
          icon: "🏙️",
          color: "#1A5F7A",
          size: "≈ 15–20 MB",
          category: "شقق سكنية",
          fileName:
            "Sobha Orbis & Sobha Solis Motor City_Brochure - English.pdf",
          description:
            "ملف تعريفي رسمي للمشروع يتضمّن المخططات، وأنواع الوحدات، والمرافق، وخطة الدفع.",
        },
      ],
      imgUrl:
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Sobha%20Solis%20-%20Arial.jpg",
      imgAlt: "منظر جوي لمشروع شوبا سوليس والمجتمع المحيط في موتور سيتي",
      floatingCards: [
        {
          top: "20%",
          right: "-30px",
          icon: "🏁",
          value: "5 دقائق",
          label: "دبي أوتودروم",
        },
        {
          bottom: "30%",
          left: "-40px",
          icon: "🌸",
          value: "10 دقائق",
          label: "حديقة دبي المعجزة",
        },
        {
          bottom: "18%",
          right: "-25px",
          icon: "🎡",
          value: "12 دقيقة",
          label: "جلوبال فيليج",
        },
      ],
    },

    gallery: {
      title: "سيمفونية بصرية في شوبا سوليس",
      slides: [
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Sobha%20Solis%20-%20Night%20shot.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Sobha%20Solis%20-%20Arial.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Living%20room.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Bedroom.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Bathroom.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E207.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E208.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E209.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E314.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E315.jpg",
        "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Tower%20A%20-%20Entrance.jpg",
      ],
      projectTag: "شوبا سوليس – موتور سيتي",
    },

    floorPlans: {
      type: "شقق سكنية",
      plans: [
        {
          id: "1br",
          title: "شقق غرفة نوم واحدة",
          bedrooms: 1,
          specs: {
            "نوع الوحدة":
              "غرفة نوم + حمام + غرفة معيشة وطعام مفتوحة + مطبخ + شرفة",
            "نطاق المساحة": "حوالي 535 – 717 قدم مربع",
            "موعد التسليم": "الربع الرابع 2027 (متوقّع)",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-solis/Living%20room.jpg",
          ],
          features: [
            "خيار مثالي للسكن الأول في موتور سيتي",
            "تصاميم عملية بمساحات معيشة مفتوحة",
            "شرفات بإطلالات على المجتمع أو حلبة الأوتودروم",
          ],
        },
        {
          id: "1-5br",
          title: "شقق غرفة و1.5 غرفة نوم",
          bedrooms: 1.5,
          specs: {
            "نوع الوحدة":
              "غرفة نوم + غرفة متعددة الاستخدامات + حمام + معيشة وطعام + مطبخ + شرفة",
            "نطاق المساحة": "حوالي 630 – 782 قدم مربع",
            "موعد التسليم": "الربع الرابع 2027 (متوقّع)",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E207.jpg",
          ],
          features: [
            "غرفة إضافية مرنة مناسبة كمكتب أو غرفة أطفال أو غرفة ضيوف",
            "مناسبة للأزواج والمهنيين الشباب",
          ],
        },
        {
          id: "2br",
          title: "شقق غرفتي نوم",
          bedrooms: 2,
          specs: {
            "نوع الوحدة":
              "غرفتا نوم + 2–3 حمامات + معيشة وطعام واسعة + مطبخ مغلق أو مفتوح + شرفة",
            "نطاق المساحة": "حوالي 1,124 – 1,130 قدم مربع",
            "موعد التسليم": "الربع الرابع 2027 (متوقّع)",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E208.jpg",
          ],
          features: [
            "مخططات عائلية مريحة",
            "وحدات ركنية بإطلالات مزدوجة في بعض النماذج",
          ],
        },
        {
          id: "3br",
          title: "شقق ثلاث غرف نوم",
          bedrooms: 3,
          specs: {
            "نوع الوحدة":
              "3 غرف نوم + عدة حمامات + معيشة وطعام فسيحة + غرفة خادمة في بعض الوحدات + شرفة كبيرة",
            "نطاق المساحة": "حوالي 1,895 قدم مربع",
            "موعد التسليم": "الربع الرابع 2027 (متوقّع)",
          },
          images: [
            "https://luxury-real-estate-media.b-cdn.net/sobha-solis/SS-E314.jpg",
          ],
          features: [
            "أكبر الوحدات للعائلات في الأدوار العليا",
            "شرفات واسعة مع إطلالات مميزة",
          ],
        },
      ],
      brochureHref:
        "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/Sobha%20Orbis%20%26%20Sobha%20Solis%20Motor%20City_Brochure%20-%20English.pdf",
    },

    amenities: {
      title: "مرافق ترفع مستوى حياتك اليومية",
      amenities: [
        { label: "مسبح سباحة", icon: "🏊", color: "#d7b46a" },
        { label: "مسبح ترفيهي", icon: "💦", color: "#d7b46a" },
        { label: "مسبح للأطفال", icon: "👧", color: "#d7b46a" },
        { label: "نافورة ومدخل مائي مميز", icon: "💧", color: "#d7b46a" },
        { label: "حدائق ومساحات خضراء مشتركة", icon: "🌳", color: "#d7b46a" },
        { label: "جلسات خارجية ومناطق جلوس", icon: "🪑", color: "#d7b46a" },
        { label: "حديقة زِن", icon: "🧘", color: "#d7b46a" },
        { label: "مسار باركور ترفيهي", icon: "🤸", color: "#d7b46a" },
        { label: "منطقة مخصصة للكلاب", icon: "🐕", color: "#d7b46a" },
        { label: "منطقة شواء ونزهات", icon: "🍖", color: "#d7b46a" },
        { label: "مسار للجري والمشي", icon: "🏃", color: "#d7b46a" },
        { label: "جدار تسلق خارجي", icon: "🧗", color: "#d7b46a" },
        { label: "سينما خارجية", icon: "🎬", color: "#d7b46a" },
        { label: "ملعب تنس", icon: "🎾", color: "#d7b46a" },
        { label: "شبكات كريكيت", icon: "🏏", color: "#d7b46a" },

        {
          label: "منطقة لياقة تحمل علامة أرسنال + نادي رياضي",
          icon: "💪",
          color: "#d7b46a",
        },
        { label: "منطقة تمارين وزن الجسم", icon: "🏋️", color: "#d7b46a" },
        { label: "منطقة لعب داخلية للأطفال", icon: "🧸", color: "#d7b46a" },
        { label: "حائط تسلق داخلي للأطفال", icon: "🧗‍♀️", color: "#d7b46a" },
        { label: "استوديو يوجا وتأمل", icon: "🧘", color: "#d7b46a" },
        { label: "استوديو بيلاتس", icon: "🧎", color: "#d7b46a" },
        { label: "ركن الملاكمة", icon: "🥊", color: "#d7b46a" },
        { label: "غرف بخار وساونا", icon: "🧖", color: "#d7b46a" },
        { label: "مكتبة وركن قراءة", icon: "📚", color: "#d7b46a" },
        { label: "غرفة ألعاب داخلية", icon: "🎯", color: "#d7b46a" },
        { label: "لاونج للسكان", icon: "🛋️", color: "#d7b46a" },
        { label: "استوديو موسيقى", icon: "🎵", color: "#d7b46a" },
        { label: "مساحة عمل / دراسة مشتركة", icon: "💻", color: "#d7b46a" },
      ],
    },

    location: {
      title: "موقع المشروع",
      projectName: "شوبا سوليس – موتور سيتي، دبي",
      address: "موتور سيتي، دبي، الإمارات العربية المتحدة",
      lat: 25.0445,
      lng: 55.2305,
      zoom: 14,
      proximityFeatures: [
        { icon: "🏁", text: "بجوار حلبة دبي أوتودروم" },
        { icon: "🌸", text: "قريب من حديقة دبي المعجزة وحديقة الفراشات" },
        { icon: "🎡", text: "وصول سريع إلى جلوبال فيليج وIMG وورلدز" },
        {
          icon: "🛣️",
          text: "سهولة الوصول إلى شارعي الشيخ محمد بن زايد والخيل",
        },
      ],
    },

    nearbyAttractions: {
      title: "الأماكن القريبة",
      attractions: [
        {
          name: "دبي أوتودروم",
          distance: "حوالي 1–2 كم",
          time: "حوالي 5 دقائق",
          icon: "🏁",
        },
        {
          name: "حديقة دبي المعجزة",
          distance: "حوالي 5–6 كم",
          time: "حوالي 10 دقائق",
          icon: "🌸",
        },
        {
          name: "جلوبال فيلج",
          distance: "حوالي 8–10 كم",
          time: "حوالي 12 دقيقة",
          icon: "🎡",
        },
        {
          name: "مول الإمارات",
          distance: "حوالي 15 كم",
          time: "حوالي 15 دقيقة",
          icon: "🛍️",
        },
        {
          name: "دبي مارينا وJBR",
          distance: "حوالي 20 كم",
          time: "حوالي 20 دقيقة",
          icon: "🌊",
        },
        {
          name: "داون تاون دبي وبرج خليفة",
          distance: "حوالي 25 كم",
          time: "حوالي 20–25 دقيقة",
          icon: "🏙️",
        },
      ],
    },

    cta: {
      title: "مهتم بمشروع شوبا سوليس؟",
      description:
        "أرسل بياناتك للحصول على المخططات الكاملة، وآخر الأسعار والتوافر لشقق شوبا سوليس في موتور سيتي دبي.",
      buttons: [
        {
          text: "استفسر عن شوبا سوليس",
          type: "primary",
          url: "/contact",
        },
        {
          text: "تحميل البروشور",
          type: "secondary",
          url: "https://luxury-real-estate-media.b-cdn.net/sobha-orbis/Sobha%20Orbis%20%26%20Sobha%20Solis%20Motor%20City_Brochure%20-%20English.pdf",
        },
      ],
    },
  },
};
