const ColorBox = ({ color }) => {
    return (

        <div className="card">
            <div
                className="color-box"
                style={{ backgroundColor: `rgb(${color.join(",")})` }}
            ></div>
            <div className="card-body">
                <p className="card-text color-info"> rgb( {color.join(", ")})</p>
            </div>
        </div>
    );
};

export default ColorBox;
