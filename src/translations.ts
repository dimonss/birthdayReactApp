import { Translations, Language } from './types';

export const translations: Translations = {
    en: {
        title: "Send Birthday Wishes!",
        message: "Use the Telegram bot to congratulate your family and friends!",
        sendGreeting: "Generate congratulations",
        pagesTitle: "Birthday Pages",
        pagesSubtitle: "Pick a page and share a direct link to their celebration.",
        pagesEmpty: "No pages yet. Check back soon.",
        pagesError: "Couldn't load pages. Please try again later.",
        pagesLoading: "Loading pages…"
    },
    ru: {
        title: "Поздравь с Днем Рождения!",
        message: "Используйте Телеграм бота для поздравления родных и близких!",
        sendGreeting: "Сгенерировать поздравление",
        pagesTitle: "Страницы поздравлений",
        pagesSubtitle: "Выберите страницу и отправьте персональную ссылку имениннику.",
        pagesEmpty: "Пока нет страниц. Загляните позже.",
        pagesError: "Не удалось загрузить страницы. Попробуйте позже.",
        pagesLoading: "Загружаем страницы…"
    }
};

export const getDefaultLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang as Language : 'ru';
};
