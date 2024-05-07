const ColorBox = ({ color }) => {
    return (
        <div className="color-box-container">
            <div
                className="color-box"
                style={{ backgroundColor: `rgb(${color.join(",")})` }}
            ></div>
            <div className="color-info">
                RGB: {color.join(", ")}
            </div>
        </div>
    );
};

export default ColorBox;
