"use client";
import React, { useState } from "react";
import styles from "@/styles/CallbackForm.module.css";

export default function CallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", interest: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className={styles.callbackSection}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.floatingOrb}></div>
        <div className={styles.gridLines}></div>
      </div>

      <div className={styles.container}>
        {/* Creative Header */}
        <div className={styles.creativeHeader}>
          <div className={styles.headerVisual}>
            <div className={styles.visualElement}>
              <div className={styles.pulseRing}></div>
              <div className={styles.pulseRing}></div>
              <div className={styles.centerDot}></div>
            </div>
          </div>

          <div className={styles.headerContent}>
            <h2 className={styles.formTitle}>
              <span className={styles.titleLine}>Begin Your</span>
              <span className={styles.titleAccent}>Dubai Investment</span>
              <span className={styles.titleLine}>Journey</span>
            </h2>
            <div className={styles.creativeDivider}>
              <div className={styles.dividerLine}></div>
              <div className={styles.dividerDot}></div>
              <div className={styles.dividerLine}></div>
            </div>
            <p className={styles.formSubtitle}>
              Connect with <strong>Mohamad Kodmane</strong> for exclusive real
              estate opportunities. We transform your investment vision into
              tangible Dubai property success.
            </p>
          </div>
        </div>

        {/* Main Form Container */}
        <div className={styles.formContainer}>
          {isSubmitted ? (
            <div className={styles.successState}>
              <div className={styles.successAnimation}>
                <div className={styles.successOrb}></div>
                <div className={styles.successBeam}></div>
                <div className={styles.successCheckmark}>
                  <div className={styles.checkmarkStem}></div>
                  <div className={styles.checkmarkKick}></div>
                </div>
              </div>
              <h3 className={styles.successTitle}>Connection Established</h3>
              <p className={styles.successMessage}>
                Mohamad Kodmane's team will contact you within{" "}
                <strong>15 minutes</strong>. Prepare to discuss premium Dubai
                investment opportunities.
              </p>
              <div className={styles.successParticles}>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
                <div className={styles.particle}></div>
              </div>
            </div>
          ) : (
            <form className={styles.creativeForm} onSubmit={handleSubmit}>
              {/* Form Fields with Creative Layout */}
              <div className={styles.formFields}>
                <div className={styles.fieldGroup}>
                  <div
                    className={`${styles.inputContainer} ${
                      activeField === "name" ? styles.active : ""
                    }`}
                    onFocus={() => setActiveField("name")}
                    onBlur={() => setActiveField(null)}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.creativeInput}
                      required
                    />
                    <label className={styles.floatingLabel}>
                      Your Full Name
                    </label>
                    <div className={styles.inputLine}></div>
                    {/* <div className={styles.fieldIcon}>👤</div> */}
                  </div>

                  <div
                    className={`${styles.inputContainer} ${
                      activeField === "phone" ? styles.active : ""
                    }`}
                    onFocus={() => setActiveField("phone")}
                    onBlur={() => setActiveField(null)}
                  >
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={styles.creativeInput}
                      required
                    />
                    <label className={styles.floatingLabel}>
                      Contact Number
                    </label>
                    <div className={styles.inputLine}></div>
                    {/* <div className={styles.fieldIcon}>📱</div> */}
                  </div>
                </div>

                <div
                  className={`${styles.selectContainer} ${
                    activeField === "interest" ? styles.active : ""
                  }`}
                  onFocus={() => setActiveField("interest")}
                  onBlur={() => setActiveField(null)}
                >
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className={styles.creativeSelect}
                    required
                  >
                    <option value="">Select Investment Focus</option>
                    <option value="off-plan">🏗️ Off-Plan Properties</option>
                    <option value="ready">🏢 Ready Properties</option>
                    <option value="portfolio">📊 Portfolio Building</option>
                    <option value="consultation">🎯 Expert Consultation</option>
                  </select>
                  <div className={styles.selectArrow}></div>
                  {/* <div className={styles.fieldIcon}>🎯</div> */}
                </div>
              </div>

              {/* Creative Submit Button */}
              <button
                type="submit"
                className={`${styles.creativeSubmit} ${
                  isSubmitting ? styles.submitting : ""
                }`}
                disabled={isSubmitting}
              >
                <span className={styles.buttonContent}>
                  <span className={styles.buttonText}>
                    {isSubmitting
                      ? "Establishing Connection..."
                      : "Request Priority Access"}
                  </span>
                  <span className={styles.buttonArrow}>
                    <div className={styles.arrowLine}></div>
                    <div className={styles.arrowHead}></div>
                  </span>
                </span>
                <div className={styles.buttonGlow}></div>
                <div className={styles.buttonParticles}>
                  <div className={styles.submitParticle}></div>
                  <div className={styles.submitParticle}></div>
                  <div className={styles.submitParticle}></div>
                </div>
              </button>
            </form>
          )}

          {/* Trust Badges */}
          {/* <div className={styles.trustBadges}>
            <div className={styles.trustBadge}>
              <div className={styles.badgeIcon}>⚡</div>
              <div className={styles.badgeContent}>
                <span className={styles.badgeTitle}>15-Minute Response</span>
                <span className={styles.badgeSubtitle}>Guaranteed</span>
              </div>
            </div>
            <div className={styles.trustBadge}>
              <div className={styles.badgeIcon}>🛡️</div>
              <div className={styles.badgeContent}>
                <span className={styles.badgeTitle}>Confidential</span>
                <span className={styles.badgeSubtitle}>&gt;Conversation</span>
              </div>
            </div>
            <div className={styles.trustBadge}>
              <div className={styles.badgeIcon}>🏆</div>
              <div className={styles.badgeContent}>
                <span className={styles.badgeTitle}>Expert</span>
                <span className={styles.badgeSubtitle}>Guidance</span>
              </div>
            </div>
          </div> */}
        </div>

        {/* Bottom Decoration */}
        <div className={styles.bottomDecoration}>
          <div className={styles.decorationLine}></div>
          <div className={styles.decorationText}>
            MOHAMAD KODMANE REAL ESTATE BROKERAGE
          </div>
          <div className={styles.decorationLine}></div>
        </div>
      </div>
    </section>
  );
}
