"use client";
import React, { useState } from "react";
import styles from "@/styles/HeroVideo.module.css";
import Image from "next/image";

export default function VideoSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleVideoPlay = () => {
    setShowVideoModal(true);
  };

  const handleCloseModal = () => {
    setShowVideoModal(false);
  };

  return (
    <section className={styles.videoSection}>
      {/* Background Elements */}
      <div className={styles.particles}></div>
      <div className={styles.overlay}></div>

      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Investment Philosophy & Vision</h2>
        <div className={styles.goldDivider}></div>
        <p className={styles.sectionDescription}>
          Discover the strategic approach behind successful real estate
          investments in Dubai. Mohamad Kodmane shares his proven methodology
          for building wealth through off-plan properties and diversified real
          estate portfolios.
        </p>
      </div>

      {/* Luxury Video Container */}
      <div className={styles.videoContainer}>
        <div
          className={styles.videoPlaceholder}
          onClick={handleVideoPlay}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Video Thumbnail */}
          <div className={styles.videoThumbnail}>
            <Image
              src="/video-thumbnail.png"
              alt="Mohamad Kodmane - Investment Strategy Video"
              fill
              className={styles.thumbnailImage}
              priority
            />
            <div
              className={`${styles.thumbnailOverlay} ${
                isHovered ? styles.overlayActive : ""
              }`}
            ></div>
          </div>

          {/* Video Indicators - No face coverage */}
          <div className={styles.videoIndicators}>
            {/* Corner Play Icon */}
            <div className={styles.cornerPlayIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 5V19L19 12L8 5Z"
                  fill="#d7b46a"
                  stroke="#d7b46a"
                  strokeWidth="2"
                />
              </svg>
            </div>

            {/* Bottom Bar Indicator */}
            <div className={styles.videoBottomBar}>
              <div className={styles.playText}>
                <span>Click to watch investment strategy</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5V19L19 12L8 5Z" fill="#ffffff" />
                </svg>
              </div>
              <div className={styles.videoDuration}>15:42</div>
            </div>

            {/* Floating Play Hint */}
            <div
              className={`${styles.playHint} ${
                isHovered ? styles.hintVisible : ""
              }`}
            >
              <div className={styles.hintPulse}></div>
              <span>Watch Video</span>
            </div>
          </div>

          {/* Hover Effect Border */}
          <div
            className={`${styles.videoBorder} ${
              isHovered ? styles.borderActive : ""
            }`}
          ></div>
        </div>
      </div>

      {/* Video Info */}
      <div className={styles.videoInfo}>
        <h3 className={styles.videoTitle}>Mohamad Kodmane</h3>
        <p className={styles.videoSubtitle}>
          Real Estate Investment Strategist
        </p>
      </div>

      {/* Video Caption */}
      <div className={styles.videoCaption}>
        <p className={styles.captionMain}>
          "Building Wealth Through Strategic Real Estate Investments"
        </p>
        <p className={styles.captionSub}>
          Exclusive insights on off-plan investments and portfolio management
        </p>
      </div>

      {/* Divider Line */}
      <div className={styles.sectionDivider}></div>

      {/* Video Modal Overlay */}
      {showVideoModal && (
        <div className={styles.videoModalOverlay} onClick={handleCloseModal}>
          <div
            className={styles.videoModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={handleCloseModal}>
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
              />
            </div>
          </div>
        </div>
      )}

      {/* CALLBACK FORM */}
      <div className={styles.callbackForm}>
        <h2 className={styles.formTitle}>Start Your Investment Journey</h2>
        <form className={styles.form}>
          {/* Full Name */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className={styles.formInput}
            />
          </div>

          {/* Phone Number */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Phone Number</label>
            <input
              type="tel"
              placeholder="+971 50 123 4567"
              className={styles.formInput}
            />
          </div>

          {/* Investment Interest */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Investment Focus</label>
            <select className={styles.formInput}>
              <option value="">Select your interest</option>
              <option value="off-plan">Off-Plan Properties</option>
              <option value="portfolio">Portfolio Building</option>
              <option value="ready">Ready Properties</option>
              <option value="consultation">Investment Consultation</option>
            </select>
          </div>

          {/* Message */}
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label className={styles.formLabel}>Investment Goals</label>
            <textarea
              placeholder="Describe your investment objectives and budget..."
              className={styles.formTextarea}
              rows="4"
            />
          </div>

          {/* Submit */}
          <div className={styles.formSubmit}>
            <button type="submit" className={styles.submitBtn}>
              Get Free Investment Strategy Session
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
