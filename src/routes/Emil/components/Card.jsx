//* functional component named Card, which takes two props: color and text
const Card = ({ color, text }) => {
    return (
        <div className="card" style={{ fontSize: "10px", height: "4rem"}}>
            <div style={{ backgroundColor: color, height:"5rem" }}></div>
            <div className="card-body" style={{ padding: "0.5rem", height:"2rem" }}>
                <p className="card-text">{text}</p>
            </div>
        </div>
    );
};

export default Card;