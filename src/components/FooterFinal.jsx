"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/FooterFinal.module.css";
import { useLanguage } from "./LanguageProvider";

export default function FooterFinal({
  menuData,
  baseHref = "/projects",
  brand,
}) {
  const { locale, t } = useLanguage();
  const isRTL = locale === "ar";

  if (!menuData?.categories?.length) return null;

  const brandLogo = "/logo.jpg";
  const brandHref = brand?.href || "/";

  // Category labels (taken from i18n JSON)
  const categoryTranslations = {
    apartments: t("categories.apartments"),
    villas: t("categories.villas"),
    "commercial-retail": t("categories.commercial"),
    penthouses: t("categories.penthouses"),
  };

  // Developer names (slugs from menuData → i18n JSON)
  const developerTranslations = {
    sobha: t("developers.sobhaRealty"),
    nakheel: t("developers.nakheel"),
    arada: t("developers.arada"),
    omniyat: t("developers.omniyat"),
    azizi: t("developers.aziziDevelopments"),
  };

  // Project titles (slugs from menuData → i18n JSON) - cleaned up
  const projectTranslations = {
    skyparks: t("projectNames.sobhaSkyParks"),
    "aqua-crest": t("projectNames.sobhaAquaCrest"),
    central: t("projectNames.sobhaCentral"),
    aquamont: t("projectNames.sobhaAquamont"),
    "al-sinniyyah-island": t("projectNames.sobhaAlSinniyyahIsland"),
    hartland: t("projectNames.sobhaHartland2Villas"),
    "seahaven-penthouse": t("projectNames.sobhaSeaHavenPenthouse"),
    "palm-central": t("projectNames.palmCentralNakheel"),
    massar: t("projectNames.aradaMassar3"),
    lumenaalta: t("projectNames.luminaAlta"),
    "riviera-retails": t("projectNames.aziziRivieraRetails"),
  };

  // Manual structure based on your exact requirements
  const getManualStructure = () => {
    const apartments = [
      {
        title: projectTranslations.skyparks,
        developer: developerTranslations.sobha,
        href: `${baseHref}/apartments/sobha/skyparks`,
      },
      {
        title: projectTranslations["aqua-crest"],
        developer: developerTranslations.sobha,
        href: `${baseHref}/apartments/sobha/aqua-crest`,
      },
      {
        title: projectTranslations.central,
        developer: developerTranslations.sobha,
        href: `${baseHref}/apartments/sobha/central`,
      },
      {
        title: projectTranslations.aquamont,
        developer: developerTranslations.sobha,
        href: `${baseHref}/apartments/sobha/aquamont`,
      },
      // {
      //   title: "Palm Central", // Clean name without Nakheel
      //   developer: developerTranslations.nakheel,
      //   href: `${baseHref}/apartments/nakheel/palm-central`,
      // },
    ];

    const villas = [
      {
        title: projectTranslations.hartland,
        developer: developerTranslations.sobha,
        href: `${baseHref}/villas/sobha/hartland`,
      },
      {
        title: projectTranslations["al-sinniyyah-island"],
        developer: developerTranslations.sobha,
        href: `${baseHref}/villas/sobha/al-sinniyyah-island`,
      },
      {
        title: projectTranslations.massar,
        developer: developerTranslations.arada,
        href: `${baseHref}/villas/arada/massar`,
      },
    ];

    const commercial = [
      {
        title: projectTranslations["riviera-retails"],
        developer: developerTranslations.azizi,
        href: `${baseHref}/commercial-retail/azizi/riviera-retails`,
      },
      {
        title: projectTranslations.lumenaalta,
        developer: developerTranslations.omniyat,
        href: `${baseHref}/commercial-retail/omniyat/lumenaalta`,
      },
    ];

    const penthouses = [
      {
        title: projectTranslations["seahaven-penthouse"],
        developer: developerTranslations.sobha,
        href: `${baseHref}/penthouses/sobha/seahaven-penthouse`,
      },
    ];

    return { apartments, villas, commercial, penthouses };
  };

  const { apartments, villas, commercial, penthouses } = getManualStructure();

  const Column = ({ title, items }) =>
    !items?.length ? null : (
      <div className={styles.col}>
        <div className={styles.colTitle}>{title}</div>
        <ul className={styles.linkList}>
          {items.map((item, i) => (
            <li key={`${title}-${i}`} className={styles.linkItem}>
              {item.developer && (
                <div className={styles.developerName}>{item.developer}</div>
              )}
              <Link href={item.href} className={styles.link}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );

  const phoneLabel = t("projects.contact.phone");
  const emailLabel = t("projects.contact.email");
  const locationLabel = isRTL ? "الموقع" : "Location";

  return (
    <footer
      className={`${styles.footer} ${isRTL ? styles.rtl : ""}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className={styles.inner}>
        {/* Brand - Only Logo */}
        <div className={styles.brandWrap}>
          <Link
            href={brandHref}
            className={styles.brandLink}
            aria-label="Company Logo"
          >
            <Image
              src={brandLogo}
              alt="Company Logo"
              width={200}
              height={45}
              className={styles.brandLogo}
              priority
            />
          </Link>
        </div>

        {/* Project columns */}
        <div className={styles.columns}>
          <Column title={categoryTranslations.apartments} items={apartments} />
          <Column title={categoryTranslations.villas} items={villas} />
          <Column
            title={categoryTranslations["commercial-retail"]}
            items={commercial}
          />
          <Column title={categoryTranslations.penthouses} items={penthouses} />
        </div>

        {/* Contact info */}
        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📞</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>{phoneLabel}</div>
                <div className={styles.contactValue}>+971 56 666 5560</div>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>✉️</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>{emailLabel}</div>
                <div className={styles.contactValue}>
                  info@mohamadkodmani.ae
                </div>
              </div>
            </div>

            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📍</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>{locationLabel}</div>
                <div className={styles.contactValue}>
                  {isRTL ? "دبي، الإمارات العربية المتحدة" : "Dubai, UAE"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
