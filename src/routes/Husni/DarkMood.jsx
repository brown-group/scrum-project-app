import React, { useState } from "react";
import "./Husni.css";

function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
    const body = document.getElementsByClassName("husni");
    if (!isDarkMode) {
      body.classList.add("husni-active");
    } else {
      body.classList.remove("husni-active");
    }
  };

  return (
    <div>
      <button className="darkmode" id="darkmode" onClick={handleDarkModeToggle}>
        {isDarkMode ? (
          <i className="bx bx-sun"></i>
        ) : (
          <i className="bx bx-moon"></i>
        )}
      </button>
    </div>
  );
}

export default DarkModeToggle;
