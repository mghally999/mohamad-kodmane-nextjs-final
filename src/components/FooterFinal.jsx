"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/FooterFinal.module.css";

export default function FooterFinal() {
  // ---- DATA (edit titles/links as you like) ----

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
    { label: "Careers", href: "/careers" },
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
    // If later you have more:
    // { id: "tiktok", href: "#", icon: "https://api.iconify.design/mdi:tiktok.svg", alt: "TikTok" },
    // { id: "linkedin", href: "#", icon: "https://api.iconify.design/mdi:linkedin.svg", alt: "LinkedIn" },
    // { id: "x", href: "#", icon: "https://api.iconify.design/mdi:twitter.svg", alt: "X (Twitter)" },
  ];

  const year = new Date().getFullYear();

  // ---- RENDER ----

  return (
    <footer className={styles.footer}>
      {/* TOP LOGO BAR WITH LEFT/RIGHT LINES – Sobha style */}
      <div className={styles.logoBar}>
        <div className={styles.logoBarInner}>
          <div className={styles.logoWrap}>
            <Link href="/" aria-label="Mohamad Kodmane Real Estate">
              <Image
                src="/logo-transparent.png" // put your MK logo here
                alt="Mohamad Kodmane Real Estate"
                width={180}
                height={60}
                className={styles.logoImage}
                priority
              />
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className={styles.footerMain}>
        {/* FIRST ROW – PROPERTIES (like APARTMENTS / VILLAS / VILLAMENTS / PENTHOUSES) */}
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

            {/* <div className={styles.colBlock}>
              <h4 className={styles.colTitle}>VILLAMENTS</h4>
              <ul className={styles.linkList}>
                {villaments.map((item) => (
                  <li key={item.label} className={styles.linkItem}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}

                {villaments.length === 0 && (
                  <li className={styles.linkItemMuted}>Coming Soon</li>
                )}
              </ul>
            </div> */}

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

        {/* SECOND ROW – COMMUNITIES / MEDIA CENTER / ABOUT US / CONTACT US */}
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

        {/* BOTTOM ROW – COPYRIGHT + SOCIALS + QUICK CONTACT */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomLeft}>
            © {year} Mohamad Kodmane Real Estate Broker. All rights reserved.
          </div>

          <div className={styles.bottomCenter}>
            <div className={styles.socialIcons}>
              {socials.map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={s.alt}
                >
                  <Image
                    src={s.icon}
                    alt={s.alt}
                    width={18}
                    height={18}
                    className={styles.socialIconImage}
                  />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.bottomRight}>
            <Link href="tel:+971566665560" className={styles.bottomContact}>
              +971 56 666 5560
            </Link>
            <span className={styles.bottomDivider}>|</span>
            <Link
              href="mailto:info@mohamadkodmane.ae"
              className={styles.bottomContact}
            >
              info@mohamadkodmane.ae
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
