"use client";
import React, { useState, useEffect } from "react";
import styles from "@/styles/projects/ContactFormFinal.module.css";
import { useLanguage } from "@/components/LanguageProvider";

// Import all your project data
import { aquaCrestData } from "@/data/projects/apartments/sobha/aqua-crest/aqua-crest";
import { centralData } from "@/data/projects/apartments/sobha/central/central";
import { skyParksData } from "@/data/projects/apartments/sobha/skyparks/skyparks";
import { rivieraRetailsData } from "@/data/projects/commercial-retail/azizi/riviera-retails/riviera-retails";
import { lumenaAltaData } from "@/data/projects/commercial-retail/omniyat/lumenaalta/lumenaalta";
import { seahavenPenthouseData } from "@/data/projects/penthouses/sobha/seahaven-penthouse/seahaven-penthouse";
import { massar3Data } from "@/data/projects/villas/arada/massar/massar";
import { alSinniyyahIslandData } from "@/data/projects/villas/sobha/al-sinniyyah-island/al-sinniyyah-island";
import { hartland2VillasData } from "@/data/projects/villas/sobha/hartland/hartland";

// Helper function to get project info from the new data structure
const getProjectInfo = (projectData) => {
  if (projectData.en && projectData.en.project) {
    return projectData.en.project;
  } else if (projectData.project) {
    return projectData.project;
  }
  return { name: "Unknown Project", developer: "Unknown Developer" };
};

// Combine all projects for dropdown
const ALL_PROJECTS = [
  aquaCrestData,
  centralData,
  skyParksData,
  rivieraRetailsData,
  lumenaAltaData,
  seahavenPenthouseData,
  massar3Data,
  alSinniyyahIslandData,
  hartland2VillasData,
].map((projectData) => ({
  data: projectData,
  info: getProjectInfo(projectData),
}));

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

// Custom Toast Notification Component
const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.toastContent}>
        <span className={styles.toastMessage}>{message}</span>
        <button className={styles.toastClose} onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default function ContactFormFinal({ currentProjectName = null }) {
  const { locale } = useLanguage();
  const isRTL = locale === "ar";

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    project: currentProjectName || ALL_PROJECTS[0]?.info?.name || "",
    unitType: "",
    contactMethod: "phone",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProjectData, setSelectedProjectData] = useState(null);
  const [toast, setToast] = useState(null);

  // Auto-select current project when component mounts
  useEffect(() => {
    if (currentProjectName) {
      const project = ALL_PROJECTS.find(
        (p) => p.info.name.toLowerCase() === currentProjectName.toLowerCase()
      );
      if (project) {
        setSelectedProjectData(project.data);
        setFormData((prev) => ({
          ...prev,
          project: project.info.name,
        }));
      }
    } else if (ALL_PROJECTS.length > 0) {
      setSelectedProjectData(ALL_PROJECTS[0].data);
      setFormData((prev) => ({
        ...prev,
        project: ALL_PROJECTS[0].info.name,
      }));
    }
  }, [currentProjectName]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    // Comment To Push
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email
    ) {
      showToast(
        isRTL
          ? "يرجى ملء جميع الحقول المطلوبة"
          : "Please fill in all required fields",
        "error"
      );
      return;
    }

    // Validate phone number
    if (formData.phone.length < 9) {
      showToast(
        isRTL
          ? "يرجى إدخال رقم هاتف صحيح"
          : "Please enter a valid phone number",
        "error"
      );
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast(
        isRTL
          ? "يرجى إدخال بريد إلكتروني صحيح"
          : "Please enter a valid email address",
        "error"
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType: "PROJECT_FORM",
          locale: locale, // ADD THIS LINE
        }),
      });

      const result = await response.json();

      if (result.success) {
        showToast(
          isRTL
            ? "شكراً لك! سيتواصل معك مستشار العقارات الفاخرة خلال 24 ساعة."
            : result.message,
          "success"
        );
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          project: currentProjectName || ALL_PROJECTS[0]?.info?.name || "",
          unitType: "",
          contactMethod: "phone",
        });
      } else {
        showToast(
          result.message ||
            (isRTL
              ? "حدث خطأ. يرجى المحاولة مرة أخرى."
              : "Something went wrong. Please try again."),
          "error"
        );
      }
    } catch (error) {
      console.error("Submission error:", error);
      showToast(
        isRTL
          ? "خطأ في الشبكة. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة."
          : "Network error. Please try again or contact us directly.",
        "error"
      );
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
      const project = ALL_PROJECTS.find((p) => p.info.name === value);
      setSelectedProjectData(project?.data || null);
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
  const getProjectType = (projectData) => {
    if (!projectData) return "residential";

    const projectInfo = getProjectInfo(projectData);
    const type = projectInfo.type?.toLowerCase() || "";
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
    <section className={styles.contactSection} dir={isRTL ? "rtl" : "ltr"}>
      <div className={styles.container}>
        {/* Toast Notifications */}
        {toast && (
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        )}

        {/* Elegant Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              {isRTL ? "سجّل اهتمامك" : "EXPRESS YOUR INTEREST"}
            </h2>
            <h3 className={styles.subtitle}>
              {isRTL ? "ابدأ رحلتك الفاخرة" : "Begin Your Luxury Journey"}
            </h3>
            <p className={styles.headerDescription}>
              {isRTL
                ? "فريقنا المتخصص جاهز لتقديم استشارات شخصية ومرافقتك في كل خطوة من رحلتك الاستثمارية."
                : "Our dedicated team is ready to provide personalized assistance and guide you through every step of your investment journey."}
            </p>
          </div>
        </div>

        {/* Premium Content Grid */}
        <div className={styles.contentGrid}>
          {/* Luxury Contact Form */}
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formHeader}>
              <h4 className={styles.formTitle}>
                {isRTL ? "استشارة مخصصة" : "Personalized Consultation"}
              </h4>
              <p className={styles.formSubtitle}>
                {isRTL
                  ? "املأ البيانات التالية وسيتواصل معك مستشار العقارات خلال 24 ساعة."
                  : "Complete the form below and our luxury property specialist will contact you within 24 hours."}
              </p>
            </div>

            <div className={styles.formGrid}>
              {/* First Name */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>
                    {isRTL ? "الاسم الأول" : "First Name"}
                  </span>
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder={
                    isRTL ? "اكتب اسمك الأول" : "Enter your first name"
                  }
                  required
                />
              </div>

              {/* Last Name */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>
                    {isRTL ? "اسم العائلة" : "Last Name"}
                  </span>
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder={
                    isRTL ? "اكتب اسم العائلة" : "Enter your last name"
                  }
                  required
                />
              </div>

              {/* Phone */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>
                    {isRTL ? "رقم الهاتف" : "Phone Number"}
                  </span>
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
                    placeholder={isRTL ? "50 123 4567" : "50 123 4567"}
                    maxLength={9}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>
                    {isRTL ? "البريد الإلكتروني" : "Email Address"}
                  </span>
                  <span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder={
                    isRTL ? "your.email@example.com" : "your.email@example.com"
                  }
                  required
                />
              </div>

              {/* Project Selection */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>
                    {isRTL ? "المشروع المفضل" : "Project of Interest"}
                  </span>
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className={styles.select}
                >
                  {ALL_PROJECTS.map((project) => (
                    <option key={project.info.name} value={project.info.name}>
                      {project.info.name} • {project.info.developer}
                    </option>
                  ))}
                </select>
              </div>

              {/* Unit Type */}
              <div className={styles.formGroup}>
                <label className={styles.label}>
                  <span className={styles.labelText}>
                    {isRTL ? "نوع الوحدة المفضلة" : "Preferred Unit Type"}
                  </span>
                </label>
                <select
                  name="unitType"
                  value={formData.unitType}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">
                    {isRTL
                      ? "اختر نوع الوحدة المفضلة"
                      : "Select your preferred unit type"}
                  </option>
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
                {isRTL ? "طريقة التواصل المفضلة" : "Preferred Mode of Contact"}{" "}
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
                    {isRTL ? "مكالمة هاتفية" : "Phone Call"}
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
                    {isRTL ? "بريد إلكتروني" : "Email"}
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
                    {isRTL ? "واتساب" : "WhatsApp"}
                  </span>
                </label>
              </div>
            </div>

            {/* Security Notice */}
            <div className={styles.securityNotice}>
              <span className={styles.securityIcon}>🔒</span>
              <p className={styles.securityText}>
                {isRTL
                  ? "بياناتك محمية وآمنة. نحن نلتزم بحماية خصوصيتك ولا نشارك معلوماتك مع أطراف ثالثة."
                  : "Your data is protected and secure. We are committed to protecting your privacy and do not share your information with third parties."}
              </p>
            </div>

            {/* Submit Button - NOW ALWAYS CLICKABLE */}
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
                  {isRTL ? "جارٍ معالجة طلبك..." : "PROCESSING YOUR REQUEST..."}
                </>
              ) : (
                <>
                  <span className={styles.submitIcon}>✨</span>
                  {isRTL
                    ? "اطلب استشارة شخصية"
                    : "REQUEST PERSONALIZED CONSULTATION"}
                </>
              )}
            </button>

            {/* Trust Indicators */}
            <div className={styles.trustIndicators}>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>⏰</span>
                {isRTL ? "رد خلال 24 ساعة" : "24h Response"}
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>🔒</span>
                {isRTL ? "بيانات آمنة" : "Secure Data"}
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustIcon}>👑</span>
                {isRTL ? "خدمة فاخرة" : "Luxury Service"}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
