import React, { useState } from "react";
import "../index.css";
import "../styles/Header.css";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";

const Header = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
    document.documentElement.classList.toggle("light");
    document.querySelector(".toggle-icon").classList.toggle("rotate");
  };

  return (
    <header>
      <img
        src={isLightTheme ? sun : moon}
        alt="Toggle Theme"
        className="toggle-icon"
        onClick={toggleTheme}
      />
    </header>
  );
};

export default Header;
