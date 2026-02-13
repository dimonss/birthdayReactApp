import { Translations, Language } from './types';

export const translations: Translations = {
    en: {
        title: "Celebration Greetings App",
        message: "Create heartfelt messages for birthdays and other big moments with the Telegram bot.",
        occasionsTitle: "Occasions supported",
        occasionsText: "Birthday, Anniversary, Wedding, New Baby, Valentine's Day",
        sendGreeting: "Generate congratulations",
        pagesTitle: "Birthday Pages",
        pagesEmpty: "No pages yet. Check back soon.",
        pagesError: "Couldn't load pages. Please try again later.",
        pagesLoading: "Loading pages…"
    },
    ru: {
        title: "Приложение для поздравлений",
        message: "Создавайте тёплые поздравления к любому важному событию через Телеграм бота.",
        occasionsTitle: "Поводы для поздравлений",
        occasionsText: "День рождения, Юбилей, Свадьба, Рождение ребёнка, День влюблённых",
        sendGreeting: "Сгенерировать поздравление",
        pagesTitle: "Страницы поздравлений",
        pagesEmpty: "Пока нет страниц. Загляните позже.",
        pagesError: "Не удалось загрузить страницы. Попробуйте позже.",
        pagesLoading: "Загружаем страницы…"
    }
};

export const getDefaultLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang as Language : 'ru';
};
