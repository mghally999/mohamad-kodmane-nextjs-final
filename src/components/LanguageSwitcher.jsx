// src/components/LanguageSwitcher.jsx
"use client";

import React from "react";
import { useLanguage } from "./LanguageProvider";

export default function LanguageSwitcher() {
  const { locale, switchLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        onClick={() => switchLanguage("en")}
        className={locale === "en" ? "active" : ""}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("ar")}
        className={locale === "ar" ? "active" : ""}
      >
        AR
      </button>
    </div>
  );
}
