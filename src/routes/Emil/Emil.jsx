//* Importing Hooks.
import { useState, useEffect } from "react";
//* Importing Components and functions.
import ColorBox from "./components/ColorBox";
import { getColorPalette } from "./components/getColorPalette";
//* Importing Styles.
import "./Emil.scss";

export default function Emil() {
  const [title] = useState("Emil");
  const [colors, setColors] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const palette = await getColorPalette();
      setColors(palette);
    }
    fetchData();
  }, []);

  const handleButtonClick = async () => {
    const palette = await getColorPalette();
    setColors(palette);
  };

  return (
    <>
      <h1>{title}</h1>
      <div className="colorWrapper">
        <div className="color-palette">
          {colors.map((color, index) => (
            <ColorBox key={index} color={color} />
          ))}
        </div>
        <button id="palette-button" onClick={handleButtonClick}>
          Get new color
        </button>
      </div>
    </>
  );
}
