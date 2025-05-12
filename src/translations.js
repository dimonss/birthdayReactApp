export const translations = {
    en: {
        title: "Send Birthday Wishes!",
        message: "Use our Telegram bot to send greetings to your family and friends! 🎉",
        sendGreeting: "Generate a greeting"
    },
    ru: {
        title: "Поздравь с Днем Рождения!",
        message: "Использую Телеграм бота для поздравления родных и близких! 🎉",
        sendGreeting: "Сгенерироваь поздравление"
    }
};

export const getDefaultLanguage = () => {
    const browserLang = navigator.language.split('-')[0];
    return translations[browserLang] ? browserLang : 'ru';
}; 