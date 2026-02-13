import React from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const AppHeader: React.FC = () => {
    return (
        <header className="top-bar">
            <div className="brand">
                <span className="brand-mark">BD</span>
                <span className="brand-text">Birthday Hub</span>
            </div>
            <LanguageSwitcher />
        </header>
    );
};

export default AppHeader;
