import { PageItem } from "../types";

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

export const normalizePages = (input: unknown): PageItem[] => {
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
        return normalizePages((input as { pages: unknown }).pages);
    }

    if (input && typeof input === "object" && "folders" in input) {
        return normalizePages((input as { folders: unknown }).folders);
    }

    return [];
};

export const getTitle = (item: PageItem): string => {
    if (typeof item.title === "string" && item.title.trim()) return item.title;
    if (typeof item.name === "string" && item.name.trim()) return item.name as string;
    if (item.folderName.trim()) return item.folderName;
    return "Birthday Page";
};

export const getDescription = (item: PageItem): string | null => {
    if (typeof item.description === "string" && item.description.trim()) {
        return item.description;
    }
    if (typeof item.subtitle === "string" && item.subtitle.trim()) {
        return item.subtitle as string;
    }
    return null;
};
