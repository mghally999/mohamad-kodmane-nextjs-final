"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/FooterFinal.module.css";

export default function FooterFinal() {
  // ---- DATA ----

  const apartments = [
    {
      label: "Sobha SkyParks",
      href: "/projects/apartments/sobha/skyparks",
    },
    {
      label: "Sobha AquaCrest",
      href: "/projects/apartments/sobha/aqua-crest",
    },
    {
      label: "Sobha Central",
      href: "/projects/apartments/sobha/central",
    },
    {
      label: "Sobha Aquamont",
      href: "/projects/apartments/sobha/aquamont",
    },
  ];

  const villas = [
    {
      label: "Sobha Hartland Villas",
      href: "/projects/villas/sobha/hartland",
    },
    {
      label: "Sobha Al Sinniyyah Island",
      href: "/projects/villas/sobha/al-sinniyyah-island",
    },
    {
      label: "Masaar by Arada",
      href: "/projects/villas/arada/massar",
    },
    {
      label: "Damac Islands 2",
      href: "/projects/villas/damac/damac-islands-2",
    },
  ];

  const penthouses = [
    {
      label: "Sobha SeaHaven Penthouse",
      href: "/projects/penthouses/sobha/seahaven-penthouse",
    },
  ];

  const communities = [
    { label: "Sobha SkyParks", href: "/projects/apartments/sobha/skyparks" },
    { label: "Sobha Central", href: "/projects/apartments/sobha/central" },
    { label: "Sobha Hartland", href: "/projects/villas/sobha/hartland" },
    {
      label: "Al Sinniyyah Island",
      href: "/projects/villas/sobha/al-sinniyyah-island",
    },
    { label: "Masaar by Arada", href: "/projects/villas/arada/massar" },
    {
      label: "Damac Islands 2",
      href: "/projects/villas/damac/damac-islands-2",
    },
  ];

  const mediaCenter = [
    { label: "Media Center", href: "/media-center" },
    { label: "Blogs", href: "/media-center/blogs" },
    { label: "Reports", href: "/media-center/reports" },
  ];

  const aboutUs = [
    { label: "About Mohamad Kodmane", href: "/about" },
    { label: "Legacy & Experience", href: "/about/legacy" },
    { label: "Thoughtful Advice", href: "/about/thoughtful-advice" },
  ];

  const contactUs = [
    { label: "Contact Us", href: "/contact" },
    { label: "Channel Partner", href: "/channel-partner" },
    { label: "Our Presence", href: "/our-presence" },
    { label: "FAQ", href: "/faq" },
  ];

  const socials = [
    {
      id: "instagram",
      href: "https://www.instagram.com/mohamadkodmane/",
      icon: "https://api.iconify.design/mdi:instagram.svg",
      alt: "Instagram",
    },
    {
      id: "facebook",
      href: "https://www.facebook.com/mo.kodmane/",
      icon: "https://api.iconify.design/mdi:facebook.svg",
      alt: "Facebook",
    },
    {
      id: "youtube",
      href: "https://www.youtube.com/@Mohamad.Kodmane",
      icon: "https://api.iconify.design/mdi:youtube.svg",
      alt: "YouTube",
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* TOP LOGO BAR WITH LONG LINE – Sobha style */}
      <div className={styles.logoBar}>
        <div className={styles.logoBarInner}>
          <div className={styles.logoWrap}>
            Mohamad Kodmane Real Estate Brokers
          </div>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className={styles.footerMain}>
        {/* FIRST ROW – PROJECT TYPES */}
        <div className={styles.footerMainInner}>
          <div className={styles.propertiesRow}>
            <div className={styles.colBlock}>
              <h4 className={styles.colTitle}>APARTMENTS</h4>
              <ul className={styles.linkList}>
                {apartments.map((item) => (
                  <li key={item.label} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.colBlock}>
              <h4 className={styles.colTitle}>VILLAS</h4>
              <ul className={styles.linkList}>
                {villas.map((item) => (
                  <li key={item.label} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.colBlock}>
              <h4 className={styles.colTitle}>PENTHOUSES</h4>
              <ul className={styles.linkList}>
                {penthouses.map((item) => (
                  <li key={item.label} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
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
              <div className={styles.middleTitle}>COMMUNITIES</div>
              <ul className={styles.linkList}>
                {communities.map((item) => (
                  <li key={item.label} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.middleCol}>
              <div className={styles.middleTitle}>MEDIA CENTER</div>
              <ul className={styles.linkList}>
                {mediaCenter.map((item) => (
                  <li key={item.label} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.middleCol}>
              <div className={styles.middleTitle}>ABOUT US</div>
              <ul className={styles.linkList}>
                {aboutUs.map((item) => (
                  <li key={item.label} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.middleCol}>
              <div className={styles.middleTitle}>CONTACT</div>
              <ul className={styles.linkList}>
                {contactUs.map((item) => (
                  <li key={item.label} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW – ADDRESS + SOCIALS + CONTACT DETAILS */}
        <div className={styles.footerBottom}>
          {/* LEFT - CORPORATE IDENTITY */}
          <div className={styles.bottomLeft}>
            <div className={styles.corporateBlock}>
              <div className={styles.corporateName}>MOHAMAD KODMANE</div>
              <div className={styles.corporateTitle}>REAL ESTATE BROKER</div>
              <div className={styles.corporateDivider} />
              <div className={styles.legalInfo}>
                <div>TRADE LICENSE: 1192580</div>
                <div>ADVERTISING PERMIT: 139532</div>
                <div>RERA CERTIFIED</div>
              </div>
            </div>
          </div>

          {/* CENTER - PRESTIGE ADDRESS */}
          <div className={styles.bottomCenter}>
            <div className={styles.prestigeAddress}>
              <div className={styles.addressTitle}>HEADQUARTERS</div>
              {/* <div className={styles.addressDivider} /> */}
              <div className={styles.addressLines}>
                <div>22ND FLOOR, 22ND COURT TOWER</div>
                <div>OFFICE B08, BUSINESS BAY</div>
                <div>DUBAI, UNITED ARAB EMIRATES</div>
                <div className={styles.poBox}>P.O. BOX 446097</div>
              </div>
            </div>
          </div>

          {/* RIGHT - EXCLUSIVE CONTACTS */}
          <div className={styles.bottomRight}>
            <div className={styles.contactBlock}>
              <div className={styles.contactTitle}>PRIVATE CONSULTATION</div>
              {/* <div className={styles.contactDivider} /> */}
              <div className={styles.contactDetails}>
                <div className={styles.contactLine}>
                  <span className={styles.contactType}>DIRECT:</span>
                  <Link
                    href="tel:+971566665560"
                    className={styles.contactNumber}
                  >
                    +971 56 666 5560
                  </Link>
                </div>
                <div className={styles.contactLine}>
                  <span className={styles.contactType}>OFFICE:</span>
                  <Link
                    href="tel:+97145859279"
                    className={styles.contactNumber}
                  >
                    +971 4 585 9279
                  </Link>
                </div>
                <div className={styles.contactLine}>
                  <span className={styles.contactType}>EMAIL:</span>
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
      </div>
    </footer>
  );
}
