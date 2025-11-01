"use client";
import React from "react";
import styles from "@/styles/HeroVideo.module.css";

export default function VideoSection() {
  return (
    <section className={styles.videoSection}>
      {/* Background Elements */}
      <div className={styles.particles}></div>
      <div className={styles.overlay}></div>

      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Vision & Leadership</h2>
        <div className={styles.goldDivider}></div>
        <p className={styles.sectionDescription}>
          Discover the visionary behind Dubai's most prestigious developments.
          Mohamad Kodmane shares his philosophy on luxury, innovation, and
          creating timeless legacies in real estate.
        </p>
      </div>

      {/* Luxury Video Container */}
      <div className={styles.videoContainer}>
        <div className={styles.videoPlaceholder}>
          {/* Play Button */}
          <div className={styles.playButton}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              className={styles.playIcon}
            >
              <path
                d="M8 5V19L19 12L8 5Z"
                fill="#0b0b0b"
                stroke="#0b0b0b"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Video Thumbnail Overlay */}
          <div className={styles.videoOverlay}>
            <div className={styles.thumbnailContent}>
              <h3 className={styles.thumbnailTitle}>Mohamad Kodmane</h3>
              <p className={styles.thumbnailSubtitle}>
                Visionary Real Estate Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Caption */}
      <div className={styles.videoCaption}>
        <p className={styles.captionMain}>
          "Building Tomorrow's Landmarks Today"
        </p>
        <p className={styles.captionSub}>
          Exclusive interview and insights from the visionary himself
        </p>
      </div>

      {/* Divider Line */}
      <div className={styles.sectionDivider}></div>

      {/* CALLBACK FORM */}
      <div className={styles.callbackForm}>
        <h2 className={styles.formTitle}>Book A Consultation</h2>

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

          {/* Message */}
          <div className={`${styles.formGroup} ${styles.fullWidth}`}>
            <label className={styles.formLabel}>Message</label>
            <textarea
              placeholder="Share your vision or inquiry..."
              className={styles.formTextarea}
              rows="4"
            />
          </div>

          {/* Submit */}
          <div className={styles.formSubmit}>
            <button type="submit" className={styles.submitBtn}>
              Request Personal Consultation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
