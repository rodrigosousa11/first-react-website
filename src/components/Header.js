import React, { useState, useEffect } from "react";
import "../styles/index.css";
import "../styles/header.css";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
import logo from "../assets/logopreto.svg";
import whitelogo from "../assets/logobranco.svg";

const Header = () => {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const preloadImages = async () => {
            const images = [moon, sun, logo, whitelogo];
            await Promise.all(images.map((image) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = image;
                    img.onload = resolve;
                });
            }));
            setImagesLoaded(true);
        };
        preloadImages();
    }, []);

    const toggleTheme = () => {
        setIsLightTheme((prev) => !prev);
        document.documentElement.classList.toggle("light");
        document.querySelector(".toggle-icon").classList.toggle("rotate");
    };

    return (
        <header>
            {imagesLoaded && (
                <img src={isLightTheme ? whitelogo : logo} alt="Logo" className="logo" />
            )}
            {imagesLoaded && (
                <img src={isLightTheme ? sun : moon} alt="Toggle Theme" className="toggle-icon" onClick={toggleTheme} />
            )}
        </header>
    );
    
};

export default Header;