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
      <div className="container my-5 px-4 sm:px-5">
      <h1>
        Color Palette Generator
      </h1>
      <p>Click the button to generate a new color palette</p>
      <small className="text-body-secondary">Using: colormind.io API</small>
      <div className="colorWrapper container-fluid g-0">
        <div className="card-group">
          {colors.map((color, index) => (
            <ColorBox key={index} color={color} />
          ))}
        </div>
        <button type="button" className="btn btn-primary my-3" onClick={handleButtonClick}>
          Get new color
        </button>
      </div>
      <Slider />
      </div>
    </>
  );
}