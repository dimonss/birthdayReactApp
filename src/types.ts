export interface Translation {
    title: string;
    message: string;
    occasionsTitle: string;
    occasionsText: string;
    sendGreeting: string;
    pagesTitle: string;
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
