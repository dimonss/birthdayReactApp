import { Translations, Language } from './types';

export const translations: Translations = {
    en: {
        title: "Send Birthday Wishes!",
        message: "Use the Telegram bot to congratulate your family and friends! 🎉",
        sendGreeting: "Generate congratulations"
    },
    ru: {
        title: "Поздравь с Днем Рождения!",
        message: "Используйте Телеграм бота для поздравления родных и близких! 🎉",
        sendGreeting: "Сгенерировать поздравление"
    }
};

export const getDefaultLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang as Language : 'ru';
}; 