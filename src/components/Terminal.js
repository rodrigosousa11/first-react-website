import React, { useState, useEffect } from "react";
import "../styles/Terminal.css";

const Terminal = () => {
    const lines = [
        "Hi there! My name is Rodrigo Sousa and I'm from Porto, Portugal.",
        "I'm a Computer Engeneering student at Universidade Lusófona.",
        "I love learning new things, especially about new ways of coding.",
        "In my free time, you can find me working on some project I'm focused on or watching something about cars.",
        "\u00A0",
        "Feel free to contact me and thanks for stopping by :)",
        "\u00A0",
        "$ ",
    ];

    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [currentLine, setCurrentLine] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentLine(
                (prev) => prev + lines[currentLineIndex][prev.length]
            );
        }, 15);

        if (currentLine.length === lines[currentLineIndex].length) {
            clearInterval(interval);

            if (currentLineIndex < lines.length - 1) {
                setCurrentLineIndex((prev) => prev + 1);
                setCurrentLine("");
            }
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
            <span
              id="cursor"
              className={currentLineIndex === lines.length - 1 ? "" : "not-blinking"}
            ></span>
          </p>
        </div>
    ); 
};

export default Terminal;
