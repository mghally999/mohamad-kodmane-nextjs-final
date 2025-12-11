// ===== YOUR EXISTING CARD DATA (UNCHANGED, STILL USING t + JSON) =====
export const whereToLiveData = (CDN, t, locale) => [
  {
    id: "business-bay",
    slug: "business-bay",
    name: t?.("whereToLive.businessBay.name") || "Business Bay",
    image: "/areas/business-bay.jpeg",
    location:
      t?.("whereToLive.businessBay.location") ||
      "Along Dubai Water Canal, next to Downtown Dubai",
    avgBuy: t?.("whereToLive.businessBay.avgBuy") || "1BR from AED 1.1M",
    avgRent:
      t?.("whereToLive.businessBay.avgRent") || "1BR from AED 95K / year",
    roi: t?.("whereToLive.businessBay.roi") || "7–8% estimated ROI",
  },
  {
    id: "sheikh-zayed-road",
    slug: "sheikh-zayed-road",
    name: t?.("whereToLive.sheikhZayedRoad.name") || "Sheikh Zayed Road",
    image: "/areas/sheikh-zayed-road.png",
    location:
      t?.("whereToLive.sheikhZayedRoad.location") ||
      "Prime high-rise corridor linking Downtown, Business Bay & Marina",
    avgBuy: t?.("whereToLive.sheikhZayedRoad.avgBuy") || "1BR from AED 1.2M",
    avgRent:
      t?.("whereToLive.sheikhZayedRoad.avgRent") || "1BR from AED 100K / year",
    roi: t?.("whereToLive.sheikhZayedRoad.roi") || "6–7% estimated ROI",
  },
  {
    id: "mbr-city",
    slug: "mohammed-bin-rashid-city",
    name:
      t?.("whereToLive.mbrCity.name") || "Mohammed Bin Rashid City (MBR City)",
    image: "/areas/mbr-city.png",
    location:
      t?.("whereToLive.mbrCity.location") ||
      "Master community near Downtown & Meydan with villas & apartments",
    avgBuy: t?.("whereToLive.mbrCity.avgBuy") || "Villas from AED 6M",
    avgRent:
      t?.("whereToLive.mbrCity.avgRent") || "Villas from AED 350K / year",
    roi: t?.("whereToLive.mbrCity.roi") || "5–6% estimated ROI",
  },
  {
    id: "dubailand",
    slug: "dubailand",
    name: t?.("whereToLive.dubailand.name") || "Dubailand",
    image:
      "https://images.unsplash.com/photo-1587261751115-9902c57e3c1b?ixlib=rb-4.0.3&w=1200&h=800&fit=crop&auto=format",
    location:
      t?.("whereToLive.dubailand.location") ||
      "Large residential and entertainment corridor off E611 & Al Ain Rd",
    avgBuy: t?.("whereToLive.dubailand.avgBuy") || "1BR from AED 750K",
    avgRent: t?.("whereToLive.dubailand.avgRent") || "1BR from AED 60K / year",
    roi: t?.("whereToLive.dubailand.roi") || "6–8% estimated ROI",
  },
  {
    id: "umm-al-quwain",
    slug: "umm-al-quwain",
    name: t?.("whereToLive.ummAlQuwain.name") || "Umm Al Quwain Waterfront",
    image: "/areas/umm-al-quwain-waterfront.jpeg",
    location:
      t?.("whereToLive.ummAlQuwain.location") ||
      "Beachfront and island communities along UAQ coastline",
    avgBuy: t?.("whereToLive.ummAlQuwain.avgBuy") || "Villas from AED 2.2M",
    avgRent:
      t?.("whereToLive.ummAlQuwain.avgRent") || "Villas from AED 120K / year",
    roi: t?.("whereToLive.ummAlQuwain.roi") || "5–6% estimated ROI",
  },
  {
    id: "sharjah",
    slug: "sharjah",
    name: t?.("whereToLive.sharjah.name") || "Sharjah",
    image: "/areas/sharjah.jpeg",
    location:
      t?.("whereToLive.sharjah.location") ||
      "Green, family-focused communities on Sharjah's outskirts",
    avgBuy: t?.("whereToLive.sharjah.avgBuy") || "Townhouses from AED 1.6M",
    avgRent:
      t?.("whereToLive.sharjah.avgRent") || "Townhouses from AED 110K / year",
    roi: t?.("whereToLive.sharjah.roi") || "5–7% estimated ROI",
  },
];
