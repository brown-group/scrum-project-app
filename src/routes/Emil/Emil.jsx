//* Importing Hooks.
import { useState, useEffect } from "react";
//* Importing Components and functions.
import ColorBox from "./components/ColorBox";
import Slider from "./components/Slider";
import { getColorPalette } from "./components/getColorPalette";
//* Importing Styles.
import "./Emil.scss";

export default function Emil() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetchColorPalette();
  }, []);

  const fetchColorPalette = async () => {
    const palette = await getColorPalette();
    setColors(palette);
  };

  const handleButtonClick = () => {
    fetchColorPalette();
  };

  return (
    <>
      <h1>Color Palette Generator</h1>
      <div className="colorWrapper">
        <div className="card-group">
          {colors.map((color, index) => (
            <ColorBox key={index} color={color} />
          ))}
        </div>
        <button type="button" className="btn btn-primary" onClick={handleButtonClick}>
          Get new color
        </button>
      </div>
      <Slider />
    </>
  );
}