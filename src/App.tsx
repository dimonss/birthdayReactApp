import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader";
import HeroSection from "./components/HeroSection";
import PagesSection from "./components/PagesSection";

const App: React.FC = () => {
    return (
        <div className="app">
            <AppHeader />
            <HeroSection />
            <PagesSection />
        </div>
    );
};

export default App;
