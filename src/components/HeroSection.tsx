import React from "react";
import botImg from "../img/botImg.jpg";
import { translations } from "../translations";
import { useLanguage } from "../context/LanguageContext";

const TELEGRAM_BOT_URL = "https://t.me/ChalyshBirthdayBot";

const HeroSection: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="hero">
            <div className="hero-card">
                <div className="hero-content">
                    <h1 className="title">{t.title}</h1>
                    <p className="message">{t.message}</p>
                    <a
                        className="telegram-link"
                        href={TELEGRAM_BOT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={botImg} alt="Telegram bot avatar" className="telegram-bot-avatar" />
                        <span className="telegram-link-text">{t.sendGreeting}</span>
                    </a>
                </div>
                <div className="hero-art">
                    <div className="orb" />
                    <div className="ribbon" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
