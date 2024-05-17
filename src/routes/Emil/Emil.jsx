import { useState, useEffect } from "react";
import ColorBox from "./components/ColorBox";
import Slider from "./components/Slider";
import { getColorPalette } from "./components/getColorPalette";

export default function Emil() {

  //? State to hold the generated color palette
  const [colors, setColors] = useState([]);

  //? Effect hook to fetch color palette when component mounts (initial render)
  useEffect(() => {
    fetchColorPalette();
  }, []);

  //? Function to fetch color palette asynchronously
  const fetchColorPalette = async () => {
    try {
      const palette = await getColorPalette();
      setColors(palette); //* Update state with new palette
    } catch (error) {
      console.error("Failed to fetch color palette:", error);
    }
  };

  //? Event handler for button click to fetch new color palette
  const handleButtonClick = () => {
    fetchColorPalette();
  };

  return (
    <>
      <div className="container my-5">
        <h1 className="fs-1">
          Color Palette Generator
        </h1>
        <p className="fs-5">Click the button to generate a new color palette</p>
        <small className="text-body-secondary">Using: random-flat-colors API</small>
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
        <h2>Example: Utilizing Palette Generator</h2>
        <Slider />
      </div>
    </>
  );
}
