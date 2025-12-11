const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart')
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return []
}

const saveCartToLS = cart => {
    const cartStringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringified)
}

const addToCart = id => {
    const cart = getStoredCart()
    cart.push(id)
    // save the cart to the LS
    saveCartToLS(cart)
}

export { addToCart, getStoredCart }