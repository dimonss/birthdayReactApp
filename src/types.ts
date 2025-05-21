export interface Translation {
    title: string;
    message: string;
    sendGreeting: string;
}

export interface Translations {
    [key: string]: Translation;
}

export type Language = 'en' | 'ru'; 