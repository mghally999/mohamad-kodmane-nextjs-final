"use client";

import Link from "next/link";
import styles from "@/styles/FooterFinal.module.css";
import { useLanguage } from "@/components/LanguageProvider";

const SOCIAL_ICONS = {
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        ry="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M13.5 21v-7h2.4l.4-3h-2.8V8.3C13.5 7.4 13.8 7 15 7h1.4V4.3C16 4.1 15 4 14.1 4 11.8 4 10.2 5.4 10.2 8v3H7.8v3h2.4v7h3.3z"
        fill="currentColor"
      />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M21 8.2c-.1-.8-.6-1.5-1.4-1.7C18.1 6 15 6 12 6s-6.1 0-7.6.5C3.6 6.7 3.1 7.4 3 8.2 2.8 9.7 2.8 11.3 2.8 12.8s0 3.1.2 4.6c.1.8.6 1.5 1.4 1.7C5.9 19.6 9 19.6 12 19.6s6.1 0 7.6-.5c.8-.2 1.3-.9 1.4-1.7.2-1.5.2-3.1.2-4.6s0-3.1-.2-4.6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M10.2 15.5V9.9l4.3 2.8-4.3 2.8z" fill="currentColor" />
    </svg>
  ),
};

export default function FooterFinal() {
  const { locale, t } = useLanguage();
  const isRTL = locale === "ar";

  // ---- DATA ----

  const apartments = [
    {
      key: "sobhaSkyParks",
      defaultLabel: "Sobha SkyParks",
      href: "/projects/apartments/sobha/skyparks",
    },
    {
      key: "sobhaAquaCrest",
      defaultLabel: "Sobha AquaCrest",
      href: "/projects/apartments/sobha/aqua-crest",
    },
    {
      key: "sobhaCentral",
      defaultLabel: "Sobha Central",
      href: "/projects/apartments/sobha/central",
    },
    {
      key: "sobhaAquamont",
      defaultLabel: "Sobha Aquamont",
      href: "/projects/apartments/sobha/aquamont",
    },
  ];

  const villas = [
    {
      key: "sobhaHartlandVillas",
      defaultLabel: "Sobha Hartland Villas",
      href: "/projects/villas/sobha/hartland",
    },
    {
      key: "sobhaAlSinniyyahIsland",
      defaultLabel: "Sobha Al Sinniyyah Island",
      href: "/projects/villas/sobha/al-sinniyyah-island",
    },
    {
      key: "masaarByArada",
      defaultLabel: "Masaar by Arada",
      href: "/projects/villas/arada/massar",
    },
    {
      key: "damacIslands2",
      defaultLabel: "Damac Islands 2",
      href: "/projects/villas/damac/damac-islands-2",
    },
  ];

  const penthouses = [
    {
      key: "sobhaSeaHavenPenthouse",
      defaultLabel: "Sobha SeaHaven Penthouse",
      href: "/projects/penthouses/sobha/seahaven-penthouse",
    },
  ];

  const communities = [
    {
      key: "sobhaSkyParks",
      defaultLabel: "Sobha SkyParks",
      href: "/projects/apartments/sobha/skyparks",
    },
    {
      key: "sobhaCentral",
      defaultLabel: "Sobha Central",
      href: "/projects/apartments/sobha/central",
    },
    {
      key: "sobhaHartland",
      defaultLabel: "Sobha Hartland",
      href: "/projects/villas/sobha/hartland",
    },
    {
      key: "alSinniyyahIsland",
      defaultLabel: "Al Sinniyyah Island",
      href: "/projects/villas/sobha/al-sinniyyah-island",
    },
    {
      key: "masaarByArada",
      defaultLabel: "Masaar by Arada",
      href: "/projects/villas/arada/massar",
    },
    {
      key: "damacIslands2",
      defaultLabel: "Damac Islands 2",
      href: "/projects/villas/damac/damac-islands-2",
    },
  ];

  const mediaCenter = [
    {
      key: "mediaCenter",
      defaultLabel: "Media Center",
      href: "/media-center",
    },
  ];

  const aboutUs = [
    {
      key: "aboutMohamadKodmane",
      defaultLabel: "About Mohamad Kodmane",
      href: "/about",
    },
  ];

  const contactUs = [
    {
      key: "contactUs",
      defaultLabel: "Contact Us",
      href: "/contact",
    },
  ];

  const socials = [
    {
      id: "instagram",
      href: "https://www.instagram.com/mohamadkodmane/",
      label: "Instagram",
    },
    {
      id: "youtube",
      href: "https://www.youtube.com/@Mohamad.Kodmane",
      label: "YouTube",
    },
    {
      id: "facebook",
      href: "https://www.facebook.com/mo.kodmane/",
      label: "Facebook",
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer
      className={`${styles.footer} ${isRTL ? styles.rtl : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* TOP LOGO BAR WITH LONG LINE – Sobha style */}
      <div className={styles.logoBar}>
        <div className={styles.logoBarInner}>
          <div className={styles.logoWrap}>
            {t?.("footer.brand.logoBar") ||
              "Mohamad Kodmane Real Estate Brokers"}
          </div>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className={styles.footerMain}>
        {/* FIRST ROW – PROJECT TYPES */}
        <div className={styles.footerMainInner}>
          <div className={styles.propertiesRow}>
            <div className={styles.colBlock}>
              <h4 className={styles.colTitle}>
                {t?.("footer.headers.apartments") || "APARTMENTS"}
              </h4>
              <ul className={styles.linkList}>
                {apartments.map((item) => (
                  <li key={item.key} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {t?.(`footer.projects.apartments.${item.key}`) ||
                        item.defaultLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.colBlock}>
              <h4 className={styles.colTitle}>
                {t?.("footer.headers.villas") || "VILLAS"}
              </h4>
              <ul className={styles.linkList}>
                {villas.map((item) => (
                  <li key={item.key} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {t?.(`footer.projects.villas.${item.key}`) ||
                        item.defaultLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.colBlock}>
              <h4 className={styles.colTitle}>
                {t?.("footer.headers.penthouses") || "PENTHOUSES"}
              </h4>
              <ul className={styles.linkList}>
                {penthouses.map((item) => (
                  <li key={item.key} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {t?.(`footer.projects.penthouses.${item.key}`) ||
                        item.defaultLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SECOND ROW – COMMUNITIES / MEDIA / ABOUT / CONTACT */}
        <div className={styles.footerMiddle}>
          <div className={styles.footerMiddleInner}>
            <div className={styles.middleCol}>
              <div className={styles.middleTitle}>
                {t?.("footer.headers.communities") || "COMMUNITIES"}
              </div>
              <ul className={styles.linkList}>
                {communities.map((item) => (
                  <li key={item.key} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {t?.(`footer.communities.${item.key}`) ||
                        item.defaultLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.middleCol}>
              <div className={styles.middleTitle}>
                {t?.("footer.headers.mediaCenter") || "MEDIA CENTER"}
              </div>
              <ul className={styles.linkList}>
                {mediaCenter.map((item) => (
                  <li key={item.key} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {t?.(`footer.mediaCenter.${item.key}`) ||
                        item.defaultLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.middleCol}>
              <div className={styles.middleTitle}>
                {t?.("footer.headers.aboutUs") || "ABOUT"}
              </div>
              <ul className={styles.linkList}>
                {aboutUs.map((item) => (
                  <li key={item.key} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {t?.(`footer.aboutUs.${item.key}`) || item.defaultLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.middleCol}>
              <div className={styles.middleTitle}>
                {t?.("footer.headers.contact") || "CONTACT"}
              </div>
              <ul className={styles.linkList}>
                {contactUs.map((item) => (
                  <li key={item.key} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {t?.(`footer.contact.${item.key}`) || item.defaultLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW – CORPORATE / ADDRESS / CONTACT */}
        <div className={styles.footerBottom}>
          {/* LEFT - CORPORATE IDENTITY */}
          <div className={styles.bottomLeft}>
            <div className={styles.corporateBlock}>
              <div className={styles.corporateName}>
                {t?.("footer.brand.corporateName") || "MOHAMAD KODMANE"}
              </div>
              <div className={styles.corporateTitle}>
                {t?.("footer.brand.corporateTitle") || "REAL ESTATE BROKER"}
              </div>
              <div className={styles.corporateDivider} />
              <div className={styles.legalInfo}>
                <div>
                  {t?.("footer.brand.legal.tradeLicense") ||
                    "TRADE LICENSE: 1192580"}
                </div>
                <div>
                  {t?.("footer.brand.legal.advertisingPermit") ||
                    "ADVERTISING PERMIT: 139532"}
                </div>
                <div>
                  {t?.("footer.brand.legal.reraCertified") || "RERA CERTIFIED"}
                </div>
              </div>
            </div>
          </div>

          {/* CENTER - PRESTIGE ADDRESS */}
          <div className={styles.bottomCenter}>
            <div className={styles.prestigeAddress}>
              <div className={styles.addressTitle}>
                {t?.("footer.address.title") || "HEADQUARTERS"}
              </div>
              <div className={styles.addressLines}>
                <div>
                  {t?.("footer.address.line1") ||
                    "22ND FLOOR, 22ND COURT TOWER"}
                </div>
                <div>
                  {t?.("footer.address.line2") || "OFFICE B08, BUSINESS BAY"}
                </div>
                <div>
                  {t?.("footer.address.line3") || "DUBAI, UNITED ARAB EMIRATES"}
                </div>
                <div className={styles.poBox}>
                  {t?.("footer.address.poBox") || "P.O. BOX 446097"}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT - EXCLUSIVE CONTACTS */}
          <div className={styles.bottomRight}>
            <div className={styles.contactBlock}>
              <div className={styles.contactTitle}>
                {t?.("footer.contactBlock.title") || "PRIVATE CONSULTATION"}
              </div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLine}>
                  <span className={styles.contactType}>
                    {t?.("footer.contactBlock.directLabel") || "DIRECT:"}
                  </span>
                  <Link
                    href="tel:+971566665560"
                    className={styles.contactNumber}
                  >
                    +971 56 666 5560
                  </Link>
                </div>
                <div className={styles.contactLine}>
                  <span className={styles.contactType}>
                    {t?.("footer.contactBlock.officeLabel") || "OFFICE:"}
                  </span>
                  <Link
                    href="tel:+97145859279"
                    className={styles.contactNumber}
                  >
                    +971 4 585 9279
                  </Link>
                </div>
                <div className={styles.contactLine}>
                  <span className={styles.contactType}>
                    {t?.("footer.contactBlock.emailLabel") || "EMAIL:"}
                  </span>
                  <Link
                    href="mailto:info@mohamadkodmani.ae"
                    className={styles.contactEmail}
                  >
                    INFO@MOHAMADKODMANI.AE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT LINE + SOCIAL ICONS (like Sobha screenshot) */}
        <div className={styles.footerMeta}>
          <div className={styles.footerMetaInner}>
            <div className={styles.metaCopy}>
              © {year}.{" "}
              {t?.("footer.brand.logoBar") ||
                "Mohamad Kodmane Real Estate Brokers"}
              . {t?.("footer.meta.allRightsReserved") || "All rights reserved."}
            </div>

            <div className={styles.metaSocials} aria-label="Social media links">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.metaSocialLink}
                  aria-label={social.label}
                >
                  <span className={styles.metaSocialIcon}>
                    {SOCIAL_ICONS[social.id]}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
