import React, { useState, useEffect } from "react";
import "./App.css";
import { translations, getDefaultLanguage } from "./translations";
import botImg from './img/botImg.jpg'

function App() {
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage || getDefaultLanguage();
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const t = translations[language];

    return (
        <div className="app">
            <div className="language-switcher">
                <button 
                    className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                    onClick={() => setLanguage('en')}
                >
                    EN
                </button>
                <button 
                    className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
                    onClick={() => setLanguage('ru')}
                >
                    RU
                </button>
            </div>
            <div className="card">
                <h1 className="title">{t.title}</h1>
                <p className="message">{t.message}</p>
                <div className="telegram-bot-block">
                    <a
                        className="telegram-link"
                        href="https://t.me/ChalyshBirthdayBot"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={botImg} alt="Telegram bot avatar" className="telegram-bot-avatar" />
                        <span className="telegram-link-text">{t.sendGreeting}</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;