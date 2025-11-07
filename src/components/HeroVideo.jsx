"use client";
import React, { useState } from "react";
import styles from "@/styles/HeroVideo.module.css";
import Image from "next/image";

export default function HeroVideo() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        {/* SECTION HEADER */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Investment Philosophy & Vision
          </h2>
          <div className={styles.goldDivider}></div>
          <p className={styles.sectionDescription}>
            Discover the strategic approach behind successful real estate
            investments in Dubai. Mohamad Kodmane shares his proven methodology
            for building wealth through off-plan properties and diversified real
            estate portfolios.
          </p>
        </div>

        {/* VIDEO COMPONENT */}
        <div className={styles.videoContainer}>
          <div
            className={styles.videoCard}
            onClick={() => setShowVideoModal(true)}
          >
            <div className={styles.videoThumbnail}>
              <Image
                src="/video-thumbnail.png"
                alt="Mohamad Kodmane - Investment Strategy Video"
                fill
                className={styles.thumbnailImage}
                priority
                sizes="100vw"
              />
              <div className={styles.videoOverlay}></div>

              {/* Play Button */}
              <div className={styles.playButton}>
                <div className={styles.playIcon}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
                  </svg>
                </div>
              </div>

              {/* Video Info */}
              <div className={styles.videoInfo}>
                <div className={styles.videoBadge}>
                  <span className={styles.badgeIcon}>▶️</span>
                  Play Video
                </div>
                {/* <h3 className={styles.videoTitle}>
                  Dubai Investment Masterclass
                </h3> */}
                <div className={styles.videoStats}>
                  <div className={styles.videoStat}>
                    <span className={styles.statNumber}>15:42</span>
                    <span className={styles.statLabel}>Duration</span>
                  </div>
                  <div className={styles.videoStat}>
                    <span className={styles.statNumber}>500+</span>
                    <span className={styles.statLabel}>Views</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* VIDEO CAPTION */}
        <div className={styles.videoCaption}>
          <p className={styles.captionMain}>
            "Building Wealth Through Strategic Real Estate Investments"
          </p>
          <p className={styles.captionSub}>
            Exclusive insights on off-plan investments and portfolio management
          </p>
        </div>
      </div>

      {/* VIDEO MODAL */}
      {showVideoModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setShowVideoModal(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </button>

            <div className={styles.videoWrapper}>
              <iframe
                src="https://drive.google.com/file/d/1RdxoerPUOKV5mkI-cC7AVQmY19jt-0jw/preview"
                width="100%"
                height="100%"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Mohamad Kodmane - Investment Strategy"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
