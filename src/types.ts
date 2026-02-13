export interface Translation {
    title: string;
    message: string;
    sendGreeting: string;
    pagesTitle: string;
    pagesSubtitle: string;
    pagesEmpty: string;
    pagesError: string;
    pagesLoading: string;
}

export interface Translations {
    [key: string]: Translation;
}

export type Language = 'en' | 'ru';

export interface PageItem {
    folderName: string;
    title?: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
    image?: string;
    [key: string]: unknown;
}
