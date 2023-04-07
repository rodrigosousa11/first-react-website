import React from "react";
import "../styles/Cv.css";

const DownloadButton = ({ cvUrl }) => {
    const handleDownload = () => {
        window.open(cvUrl);
    };

    return <button onClick={handleDownload}>Curriculum</button>;
};

export default DownloadButton;
