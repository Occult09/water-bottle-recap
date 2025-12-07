import './bottle.css'

const Bottle = ({bottle}) => {
    const {category, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity} = bottle
    return (
        <div className="bottle">
            <h2>Category: {category}</h2>
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <img src={img} alt="" />
        </div>
    );
};

export default Bottle;