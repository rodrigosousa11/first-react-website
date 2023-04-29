import React, { useState, useEffect } from "react";
import "../styles/terminal.css";

const Terminal = ({ lines }) => {
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentLine, setCurrentLine] = useState("");
    const [writing, setWriting] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLine((prev) => prev + lines[currentLineIndex][prev.length]);
            setWriting(true);
        }, 13);

        if (currentLine.length === lines[currentLineIndex].length) {
            clearInterval(interval);

            if (currentLineIndex < lines.length - 1) {
                setCurrentLineIndex((prev) => prev + 1);
                setCurrentLine("");
            }
            setWriting(false);
        }

        return () => clearInterval(interval);
    }, [currentLine, currentLineIndex, lines]);

    return (
        <div id="terminal">
            {lines.slice(0, currentLineIndex).map((line, i) => (
                <p key={i}>{line}</p>
            ))}
            <p>
                {currentLine}
                <span id="cursor" className={writing ? "not-blinking" : ""}></span>
            </p>
        </div>
    );
};

export default Terminal;