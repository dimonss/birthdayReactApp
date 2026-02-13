import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getDefaultLanguage } from "../translations";
import { Language } from "../types";

type LanguageContextValue = {
    language: Language;
    setLanguage: (value: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

type LanguageProviderProps = {
    children: React.ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<Language>(() => {
        const savedLanguage = localStorage.getItem("language") as Language | null;
        return savedLanguage || getDefaultLanguage();
    });

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const value = useMemo(() => ({ language, setLanguage }), [language]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextValue => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
};
