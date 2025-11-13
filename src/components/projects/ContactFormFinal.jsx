"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/projects/ContactFormFinal.module.css";

// Import all your project data
import { palmCentralData } from "@/data/projects/apartments/nakheel/palm-central/palm-central";
import { aquaCrestData } from "@/data/projects/apartments/sobha/aqua-crest/aqua-crest";
import { centralData } from "@/data/projects/apartments/sobha/central/central";
import { skyParksData } from "@/data/projects/apartments/sobha/skyparks/skyparks";
import { rivieraRetailsData } from "@/data/projects/commercial-retail/azizi/riviera-retails/riviera-retails";
import { lumenaAltaData } from "@/data/projects/commercial-retail/omniyat/lumenaalta/lumenaalta";
import { seahavenPenthouseData } from "@/data/projects/penthouses/sobha/seahaven-penthouse/seahaven-penthouse";
import { massar3Data } from "@/data/projects/villas/arada/massar/massar";
import { alSinniyyahIslandData } from "@/data/projects/villas/sobha/al-sinniyyah-island/al-sinniyyah-island";
import { hartland2VillasData } from "@/data/projects/villas/sobha/hartland/hartland";

// Combine all projects for dropdown
const ALL_PROJECTS = [
  palmCentralData,
  aquaCrestData,
  centralData,
  skyParksData,
  rivieraRetailsData,
  lumenaAltaData,
  seahavenPenthouseData,
  massar3Data,
  alSinniyyahIslandData,
  hartland2VillasData,
];

const UNIT_TYPES = {
  residential: [
    "Studio",
    "1 Bedroom",
    "2 Bedroom",
    "3 Bedroom",
    "4 Bedroom",
    "Penthouse",
    "Villa",
  ],
  commercial: ["Office", "Retail Space", "Showroom", "Warehouse"],
  offplan: ["3 Bed Villa", "4 Bed Villa", "5 Bed Villa", "Mansion"],
  mixed: ["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom", "Villa"],
};

export default function ContactFormFinal({ currentProjectName = null }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    project: currentProjectName || ALL_PROJECTS[0]?.project?.name || "",
    unitType: "",
    contactMethod: "phone",
    agreePrivacy: false,
    agreeNews: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);

  // Auto-select current project when component mounts
  useEffect(() => {
    if (currentProjectName) {
      const project = ALL_PROJECTS.find(
        (p) => p.project.name.toLowerCase() === currentProjectName.toLowerCase()
      );
      if (project) {
        setSelectedProjectData(project);
        setFormData((prev) => ({
          ...prev,
          project: project.project.name,
        }));
      }
    } else if (ALL_PROJECTS.length > 0) {
      setSelectedProjectData(ALL_PROJECTS[0]);
      setFormData((prev) => ({
        ...prev,
        project: ALL_PROJECTS[0].project.name,
      }));
    }
  }, [currentProjectName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        alert(result.message);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          project: currentProjectName || ALL_PROJECTS[0]?.project?.name || "",
          unitType: "",
          contactMethod: "phone",
          agreePrivacy: false,
          agreeNews: false,
        });
      } else {
        alert(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Update selected project data when project changes
    if (name === "project") {
      const project = ALL_PROJECTS.find((p) => p.project.name === value);
      setSelectedProjectData(project);
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  // Get project type for unit type filtering
  const getProjectType = (project) => {
    if (!project) return "residential";

    const type = project.project.type?.toLowerCase() || "";
    if (type.includes("villa") || type.includes("residence"))
      return "residential";
    if (type.includes("retail") || type.includes("commercial"))
      return "commercial";
    if (type.includes("office")) return "commercial";
    if (type.includes("penthouse")) return "residential";
    if (type.includes("mixed")) return "mixed";
    return "residential";
  };

  const projectType = getProjectType(selectedProjectData);

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        {/* Elegant Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>EXPRESS YOUR INTEREST</h2>
            <h3 className={styles.subtitle}>Begin Your Luxury Journey</h3>
            <p className={styles.headerDescription}>
              Our dedicated team is ready to provide personalized assistance and
              guide you through every step of your investment journey.
            </p>
          </div>
        </div>

        {/* Premium Content Grid */}
        <div className={styles.contentGrid}>
          {/* Right Panel - Luxury Contact Form */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <h4 className={styles.formTitle}>Personalized Consultation</h4>
              <p className={styles.formSubtitle}>
                Complete the form below and our luxury property specialist will
                contact you within 24 hours.
              </p>
            </div>

            <div className={styles.formGrid}>
              {/* First Name */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>First Name</span>
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Enter your first name"
                  required
                />
              </div>

              {/* Last Name */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>Last Name</span>
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Enter your last name"
                  required
                />
              </div>

              {/* Phone */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>Phone Number</span>
                  <span className={styles.required}>*</span>
                </label>
                <div className={styles.phoneInput}>
                  <span className={styles.phonePrefix}>+971</span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    className={styles.phoneField}
                    placeholder="XX XXX XXXX"
                    maxLength={9}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>Email Address</span>
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Project Selection */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>Project of Interest</span>
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className={styles.select}
                >
                  {ALL_PROJECTS.map((project) => (
                    <option
                      key={project.project.name}
                      value={project.project.name}
                    >
                      {project.project.name} • {project.project.developer}
                    </option>
                  ))}
                </select>
              </div>

              {/* Unit Type */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>Preferred Unit Type</span>
                </label>
                <select
                  name="unitType"
                  value={formData.unitType}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">Select your preferred unit type</option>
                  {UNIT_TYPES[projectType]?.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Preferred Mode of Contact */}
            <div className={styles.contactMethod}>
              <label className={styles.contactLabel}>
                Preferred Mode of Contact{" "}
                <span className={styles.required}>*</span>
              </label>
              <div className={styles.contactOptions}>
                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="phone"
                    checked={formData.contactMethod === "phone"}
                    onChange={handleChange}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioCustom}></span>
                  <span className={styles.radioText}>
                    <span className={styles.radioIcon}>📞</span>
                    Phone Call
                  </span>
                </label>

                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="email"
                    checked={formData.contactMethod === "email"}
                    onChange={handleChange}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioCustom}></span>
                  <span className={styles.radioText}>
                    <span className={styles.radioIcon}>✉️</span>
                    Email
                  </span>
                </label>

                <label className={styles.radioOption}>
                  <input
                    type="radio"
                    name="contactMethod"
                    value="whatsapp"
                    checked={formData.contactMethod === "whatsapp"}
                    onChange={handleChange}
                    className={styles.radioInput}
                  />
                  <span className={styles.radioCustom}></span>
                  <span className={styles.radioText}>
                    <span className={styles.radioIcon}>💬</span>
                    WhatsApp
                  </span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`${styles.submitButton} ${
                isSubmitting ? styles.submitting : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className={styles.spinner}></div>
                  PROCESSING YOUR REQUEST...
                </>
              ) : (
                <>
                  <span className={styles.submitIcon}>✨</span>
                  REQUEST PERSONALIZED CONSULTATION
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
