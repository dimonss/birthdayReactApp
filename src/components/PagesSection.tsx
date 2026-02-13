import React, { useMemo } from "react";
import { useGetPagesQuery } from "../services/pagesApi";
import { PageItem } from "../types";
import { translations } from "../translations";
import { useLanguage } from "../context/LanguageContext";
import { getDescription, getTitle, normalizePages } from "../utils/pages";

const PagesSection: React.FC = () => {
    const { data, isLoading, isError, isFetching } = useGetPagesQuery();
    const pages = useMemo(() => normalizePages(data), [data]);
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="pages">
            <div className="section-head">
                <div>
                    <h2>{t.pagesTitle}</h2>
                    <p>{t.pagesSubtitle}</p>
                </div>
                <div className="status-pill">
                    {isLoading ? t.pagesLoading : `${pages.length} pages`}
                    {isFetching && !isLoading && <span className="pulse" />}
                </div>
            </div>

            {isError && <div className="state state-error">{t.pagesError}</div>}

            {!isLoading && !isError && pages.length === 0 && (
                <div className="state state-empty">{t.pagesEmpty}</div>
            )}

            <div className="pages-grid">
                {pages.map((page) => (
                    <PageCard key={page.folderName} page={page} />
                ))}
            </div>
        </section>
    );
};

type PageCardProps = {
    page: PageItem;
};

const PageCard: React.FC<PageCardProps> = ({ page }) => {
    const folderName = page.folderName;
    const link = `/pages/${folderName}`;
    const description = getDescription(page);

    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="page-card">
            <div className="page-card-top">
                <span className="page-folder">/{folderName}</span>
                <span className="page-arrow">→</span>
            </div>
            <h3>{getTitle(page)}</h3>
            {description && <p>{description}</p>}
        </a>
    );
};

export default PagesSection;
