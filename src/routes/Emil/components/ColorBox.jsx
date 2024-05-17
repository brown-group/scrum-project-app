const ColorBox = ({ color }) => {
    return (
        <div className="card">
            <div
                className="container-fluid"
                style={{ backgroundColor: color, height: "10rem" }} // Set the background color directly
            ></div>
            <div className="card-body d-flex align-items-center justify-content-center fs-6">
                <p className="card-text color-info">{color}</p> {/* Display the color code */}
            </div>
        </div>
    );
};

export default ColorBox;
