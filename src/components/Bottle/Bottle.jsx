import './bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    const { category, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity } = bottle
    return (
        <div className="bottle">
            <h2>Category: {category}</h2>
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <img src={img} alt="" />
            <p style={{ fontWeight: 'bold' }}>Click here to purchase</p>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;