//* functional component named ColorBox, which takes a prop named color. 

const ColorBox = ({ color }) => {
    return (
        
        <div className="card">
            <div
                className="container-fluid"
                style={{ backgroundColor: `rgb(${color.join(",")})`, height: "10rem" }}
            ></div>
            <div className="card-body d-flex align-items-center justify-content-center fs-6">
                <p className="card-text color-info"> rgb( {color.join(", ")})</p>
            </div>
        </div>
    );
};

export default ColorBox;
