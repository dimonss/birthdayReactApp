import React from "react";
import "./App.css"

function App() {
    return (
        <div className="app">
            <div className="card">
                <h1 className="title">Happy Birthday!</h1>
                <p className="message">
                    Wishing you endless joy and happiness on your special day! 🎉
                </p>
                <a
                    className="telegram-link"
                    href="https://t.me/ChalyshBirthdayBot"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Send a Birthday Greeting
                </a>
            </div>
        </div>
    );
}

export default App;