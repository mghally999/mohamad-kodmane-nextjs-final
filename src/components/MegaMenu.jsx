"use client";
import Link from "next/link";
import styles from "@/styles/MegaMenu.module.css";
import menuData from "@/data/menuData";

export default function MegaMenu({ onClose }) {
  return (
    <div className={styles.megaMenu}>
      <div className={styles.menuContainer}>
        {menuData.categories.map((category) => (
          <div key={category.id} className={styles.column}>
            <h4 className={styles.categoryTitle}>{category.name}</h4>
            {category.developers.map((dev) => (
              <div key={dev.id} className={styles.developerBlock}>
                <h5 className={styles.developerName}>{dev.name}</h5>
                <ul className={styles.projectList}>
                  {dev.projects.map((proj) => (
                    <li key={proj.id}>
                      <Link
                        href={`/projects/${category.slug}/${dev.slug}/${proj.slug}`}
                        className={styles.projectLink}
                        onClick={onClose}
                      >
                        {proj.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
