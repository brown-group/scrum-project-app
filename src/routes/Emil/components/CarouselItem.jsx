import Card from './Card';

//* functional component named CarouselItem, which takes three props: image, colorData, and isActive
//* Maps through the colorData array and render a Card component for each color.
const CarouselItem = ({ image, colorData, isActive }) => {
  return (
    <div className={`carousel-item ${isActive ? 'active' : ''}`}>
      <img src={image} className="d-block w-100" alt={`palette`} />
      <div className="carousel-caption d-none d-md-block">
        <div className="card-group">
          {colorData.map((card, index) => (
            <Card key={index} color={card.color} text={card.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;