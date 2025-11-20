// FloatingWhatsApp.jsx
"use client";
import { useState, useEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import styles from "@/styles/FloatingWhatsApp.module.css";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { locale, t } = useLanguage();

  const numberE164 = "971566665560";

  // Meta Pixel helper
  const track = (event, params = {}, standard = false) => {
    if (typeof window === "undefined" || typeof window.fbq !== "function")
      return;
    if (standard) window.fbq("track", event, params);
    else window.fbq("trackCustom", event, params);
  };

  // Dynamic pre-filled message based on language
  const prefilled = encodeURIComponent(
    locale === "ar"
      ? "مرحباً! أنا مهتم بالاستثمار العقاري في دبي. هل يمكنكم مساعدتي بخيارات الاستثمار؟"
      : "Hi! I'm interested in Dubai real estate. Could you help me with investment options?"
  );

  const waLink = `https://wa.me/${numberE164}?text=${prefilled}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const isRTL = locale === "ar";

  const handleWhatsAppClick = () => {
    // Custom event for funnel analysis
    track("WhatsAppClick", {
      placement: "floating_button",
      phone: "+971566665560",
      locale,
    });

    // Standard Lead event for Meta optimization
    track(
      "Lead",
      {
        content_name: "WhatsApp Chat",
        content_category: "contact",
        value: 0,
        currency: "AED",
        source: "whatsapp_floating",
        locale,
      },
      true
    );
  };

  return (
    <div
      className={`${styles.whatsappContainer} ${
        isVisible ? styles.visible : ""
      } ${isRTL ? styles.rtl : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Luxury Badge */}
      <div
        className={`${styles.luxuryBadge} ${isHovered ? styles.hovered : ""}`}
      >
        <div className={styles.badgeContent}>
          <span className={styles.badgeText}>
            {locale === "ar" ? "مستشار متميز" : "Premium Advisor"}
          </span>
          <div className={styles.badgeDivider}></div>
        </div>
      </div>

      {/* Main WhatsApp Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={
          locale === "ar"
            ? "محادثة مع مستشار عقاري فاخر على واتساب"
            : "Chat with Luxury Real Estate Advisor on WhatsApp"
        }
        className={`${styles.whatsappFab} ${isHovered ? styles.hovered : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleWhatsAppClick}
      >
        <div className={styles.iconContainer}>
          <div className={styles.iconBackground}></div>
          <svg
            viewBox="0 0 32 32"
            width="20"
            height="20"
            className={styles.waIcon}
            fill="currentColor"
          >
            <path d="M19.11 17.24c-.28-.14-1.64-.81-1.89-.9-.25-.09-.43-.14-.6.14-.17.28-.69.9-.84 1.08-.15.18-.31.2-.59.07a6.7 6.7 0 0 1-1.97-1.21 7.35 7.35 0 0 1-1.37-1.69c-.15-.26-.01-.4.11-.54.11-.11.25-.29.38-.43.12-.14.17-.25.26-.42.09-.18.05-.33-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46l-.51-.01c-.17 0-.45.06-.69.33-.24.28-.91.89-.91 2.17 0 1.28.93 2.52 1.06 2.69.13.18 1.82 2.89 4.42 4.06.62.27 1.11.43 1.49.55.63.20 1.20.17 1.65.10.50-.08 1.64-.67 1.87-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.19-.53-.33zM16.03 3C9.94 3 5 7.88 5 13.86c0 2.16.63 4.17 1.72 5.87L6 28l8.45-2.22c1.70.93 3.65 1.46 5.73 1.46 6.09 0 11.03-4.87 11.03-10.85C31.21 7.88 26.12 3 20.03 3h-3.99zM20.18 25.10c-1.87 0-3.60-.51-5.08-1.39l-.36-.21-4.99 1.31 1.33-4.74-.24-.39a9.43 9.43 0 0 1-1.46-5.02c0-5.25 4.37-9.52 9.75-9.52s9.75 4.27 9.75 9.52-4.37 9.44-9.70 9.44z" />
          </svg>
        </div>

        <div className={styles.textContent}>
          <span className={styles.waTitle}>
            {locale === "ar" ? "استشارة متميزة" : "Premium Consultation"}
          </span>
          <span className={styles.waNumber}>+971 56 666 5560</span>
        </div>

        <div className={styles.statusIndicator}>
          <div className={styles.statusDot}></div>
          <span className={styles.statusText}>
            {locale === "ar" ? "متاح" : "Available"}
          </span>
        </div>

        <div className={styles.hoverGlow}></div>
      </a>

      <div className={styles.floatingParticles}>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
        <div className={styles.particle}></div>
      </div>
    </div>
  );
}
