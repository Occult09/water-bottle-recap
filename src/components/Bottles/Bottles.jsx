import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToCart, getStoredCart } from "../../utilities/localStorage";
import Cart from "../../Cart/Cart";

const Bottles = () => {

    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        if (bottles.length) {
            const storedId = getStoredCart()
            const savedCart = []
            for (const id of storedId) {
                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart)
        }

    }, [bottles])

    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToCart(bottle.id)
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart}></Cart>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle id={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart} ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;