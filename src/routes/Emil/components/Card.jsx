//* functional component named Card, which takes two props: color and text
const Card = ({ color, text }) => {
    return (
        <div className="card card-slider">
            <div className="color-box-slider" style={{ backgroundColor: color }}></div>
            <div className="card-body card-body-slider">
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default Card;