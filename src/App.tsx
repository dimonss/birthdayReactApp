import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { translations, getDefaultLanguage } from "./translations";
import { Language, PageItem } from "./types";
import { useGetPagesQuery } from "./services/pagesApi";
import botImg from "./img/botImg.jpg";

const getFolderName = (item: Record<string, unknown>): string | null => {
    if (typeof item.folderName === "string" && item.folderName.trim()) {
        return item.folderName.trim();
    }
    if (typeof item.folder === "string" && item.folder.trim()) {
        return item.folder.trim();
    }
    if (typeof item.slug === "string" && item.slug.trim()) {
        return item.slug.trim();
    }
    if (typeof item.name === "string" && item.name.trim()) {
        return item.name.trim();
    }
    return null;
};

const normalizePages = (input: unknown): PageItem[] => {
    if (Array.isArray(input)) {
        if (input.every((entry) => typeof entry === "string")) {
            return (input as string[]).map((folderName) => ({ folderName }));
        }
        return input
            .map((entry) => {
                if (!entry || typeof entry !== "object") return null;
                const item = entry as Record<string, unknown>;
                const folderName = getFolderName(item);
                if (!folderName) return null;
                return { folderName, ...item } as PageItem;
            })
            .filter((entry): entry is PageItem => Boolean(entry));
    }

    if (input && typeof input === "object" && "pages" in input) {
        const nested = (input as { pages: unknown }).pages;
        return normalizePages(nested);
    }

    if (input && typeof input === "object" && "folders" in input) {
        const nested = (input as { folders: unknown }).folders;
        return normalizePages(nested);
    }

    return [];
};

const getTitle = (item: PageItem): string => {
    if (typeof item.title === "string" && item.title.trim()) return item.title;
    if (typeof item.name === "string" && item.name.trim()) return item.name as string;
    if (item.folderName.trim()) return item.folderName;
    return "Birthday Page";
};

const getDescription = (item: PageItem): string | null => {
    if (typeof item.description === "string" && item.description.trim()) {
        return item.description;
    }
    if (typeof item.subtitle === "string" && item.subtitle.trim()) {
        return item.subtitle as string;
    }
    return null;
};

const App: React.FC = () => {
    const [language, setLanguage] = useState<Language>(() => {
        const savedLanguage = localStorage.getItem("language") as Language | null;
        return savedLanguage || getDefaultLanguage();
    });

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const t = translations[language];
    const { data, isLoading, isError, isFetching } = useGetPagesQuery();

    const pages = useMemo(() => normalizePages(data), [data]);

    return (
        <div className="app">
            <header className="top-bar">
                <div className="brand">
                    <span className="brand-mark">BD</span>
                    <span className="brand-text">Birthday Hub</span>
                </div>
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
            </header>

            <section className="hero">
                <div className="hero-card">
                    <div className="hero-content">
                        <h1 className="title">{t.title}</h1>
                        <p className="message">{t.message}</p>
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
                    <div className="hero-art">
                        <div className="orb" />
                        <div className="ribbon" />
                    </div>
                </div>
            </section>

            <section className="pages">
                <div className="section-head">
                    <div>
                        <h2>{t.pagesTitle}</h2>
                        <p>{t.pagesSubtitle}</p>
                    </div>
                    <div className="status-pill">
                        {isLoading ? t.pagesLoading : `${pages.length} pages`}
                        {isFetching && !isLoading && <span className="pulse" />}
                    </div>
                </div>

                {isError && (
                    <div className="state state-error">{t.pagesError}</div>
                )}

                {!isLoading && !isError && pages.length === 0 && (
                    <div className="state state-empty">{t.pagesEmpty}</div>
                )}

                <div className="pages-grid">
                    {pages.map((page) => {
                        const folderName = page.folderName;
                        const link = `/pages/${folderName}`;
                        const description = getDescription(page);

                        return (
                            <a key={folderName} href={link} target={"_blank"} className="page-card">
                                <div className="page-card-top">
                                    <span className="page-folder">/{folderName}</span>
                                    <span className="page-arrow">→</span>
                                </div>
                                <h3>{getTitle(page)}</h3>
                                {description && <p>{description}</p>}
                            </a>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default App;
