export const translations = {
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

export const getDefaultLanguage = () => {
    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang : 'ru';
}; 