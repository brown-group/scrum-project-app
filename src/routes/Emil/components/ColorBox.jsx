const ColorBox = ({ color }) => {
    return (

        <div class="card">
            <div
                className="color-box"
                style={{ backgroundColor: `rgb(${color.join(",")})` }}
            ></div>
            <div class="card-body">
                <p class="card-text color-info"> rgb( {color.join(", ")})</p>
            </div>
        </div>
    );
};

export default ColorBox;
