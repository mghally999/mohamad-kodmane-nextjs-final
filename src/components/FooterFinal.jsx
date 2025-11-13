"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/FooterFinal.module.css";

export default function FooterFinal({
  menuData,
  baseHref = "/projects",
  brand,
}) {
  if (!menuData?.categories?.length) return null;

  // Brand settings for Mohamad Kodmane
  const brandName = brand?.name || "MOHAMAD KODMANE";
  const brandLogo = brand?.logo || null;
  const brandHref = brand?.href || "/";

  // CORRECTED: Helper to get projects by category with proper path structure
  const getCategoryItems = (slugMatch) => {
    const cat = menuData.categories.find((c) => c.slug === slugMatch);
    if (!cat) return [];

    const items = (cat.developers || []).flatMap((dev) =>
      (dev.projects || []).map((p) => ({
        title: p.title,
        developer: dev.name,
        href: `${baseHref}/${cat.slug}/${dev.slug}/${p.slug}`,
      }))
    );

    return items.sort((a, b) => a.title.localeCompare(b.title));
  };

  const apartments = getCategoryItems("apartments");
  const villas = getCategoryItems("villas");
  const commercial = getCategoryItems("commercial-retail");
  const penthouses = getCategoryItems("penthouses");

  // Enhanced Column component with developer names
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

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand - Mohamad Kodmane */}
        {/* <div className={styles.brandWrap}>
          <Link
            href={brandHref}
            className={styles.brandLink}
            aria-label={brandName}
          >
            {brandLogo ? (
              <Image
                src={brandLogo}
                alt={brandName}
                width={200}
                height={45}
                className={styles.brandLogo}
                priority
              />
            ) : (
              <div className={styles.brandText}>
                <span className={styles.brandMain}>MOHAMAD</span>
                <span className={styles.brandSub}>KODMANE</span>
              </div>
            )}
          </Link>
        </div> */}

        {/* Columns with Projects */}
        <div className={styles.columns}>
          <Column title="APARTMENTS" items={apartments} />
          <Column title="VILLAS" items={villas} />
          <Column title="COMMERCIAL & RETAIL" items={commercial} />
          <Column title="PENTHOUSES" items={penthouses} />
        </div>

        {/* Contact Information */}
        {/* <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📞</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>PHONE</div>
                <div className={styles.contactValue}>+971 56 666 5560</div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>✉️</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>EMAIL</div>
                <div className={styles.contactValue}>contact@kodmane.com</div>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIcon}>📍</div>
              <div className={styles.contactDetails}>
                <div className={styles.contactLabel}>LOCATION</div>
                <div className={styles.contactValue}>Dubai, UAE</div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Legal */}
        {/* <div className={styles.legal}>
          <span>
            © {new Date().getFullYear()} MOHAMAD KODMANE REAL ESTATE. All rights
            reserved.
          </span>
        </div> */}
      </div>
    </footer>
  );
}
