"use client";
import React, { useState } from "react";
import styles from "@/styles/HeroVideo.module.css";

export default function HeroVideo() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        {/* VIDEO COMPONENT - 100% FULL WIDTH */}
        <div className={styles.videoContainer}>
          <div
            className={styles.videoCard}
            onClick={() => setShowVideoModal(true)}
          >
            <div className={styles.videoThumbnail}>
              {/* Fallback if image doesn't load */}
              {!imageError ? (
                <img
                  src="/video-thumbnail.png"
                  alt="Mohamad Kodmane - Investment Strategy Video"
                  className={styles.thumbnailImage}
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className={styles.fallbackBackground}>
                  <div className={styles.fallbackText}>
                    <h3>Mohamad Kodmane</h3>
                    <p>Investment Strategy Video</p>
                  </div>
                </div>
              )}

              <div className={styles.videoOverlay}></div>

              {/* Play Button */}
              {/* <div className={styles.playButton}>
                <div className={styles.playIcon}>
                  <svg width="35" height="35" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7-11-7z" fill="currentColor" />
                  </svg>
                </div>
              </div> */}

              {/* Video Info - LARGER TEXT */}
              <div className={styles.videoInfo}>
                <div className={styles.videoBadge}>
                  <span className={styles.badgeIcon}>▶️</span>
                  Play Video
                </div>
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
        {/* <div className={styles.videoCaption}>
          <p className={styles.captionSub}>
            Exclusive insights on off-plan investments and portfolio management
          </p>
        </div> */}
      </div>

      {/* VIDEO MODAL - 100% FULL WIDTH */}
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
                src="https://drive.google.com/file/d/1RdxoerPUOKV5mkI-cC7AVQmY19jt-0jw/preview?autoplay=1"
                width="100%"
                height="100%"
                allow="autoplay; fullscreen"
                allowFullScreen
                title="Mohamad Kodmane - Investment Strategy"
                loading="eager"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
