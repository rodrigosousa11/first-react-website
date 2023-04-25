import React, { useState, useEffect } from "react";
import Terminal from "./components/Terminal.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

function App() {
    const [showTerminal, setShowTerminal] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowTerminal(true);
        }, 300);

        return () => clearTimeout(timeout);
    }, []);

    const lines = React.useMemo(
        () => [
            "Hi there! My name is Rodrigo Sousa and I'm from Porto, Portugal.",
            "I'm currently on my second year of a Software Engeneering degree at Universidade Lusófona.",
            "I love learning new things, especially about coding.",
            "\u00A0",
            "Feel free to contact me and thanks for stopping by :)",
            "\u00A0",
            "$ ",
        ],
        []
    );

    return (
        <div className="App">
            <Header />
            {showTerminal && <Terminal lines={lines} />}
            <Footer />
        </div>
    );
}

export default App;
