import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="language-switcher">
            <button
                className={`lang-btn ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
            >
                EN
            </button>
            <button
                className={`lang-btn ${language === "ru" ? "active" : ""}`}
                onClick={() => setLanguage("ru")}
            >
                RU
            </button>
        </div>
    );
};

export default LanguageSwitcher;
