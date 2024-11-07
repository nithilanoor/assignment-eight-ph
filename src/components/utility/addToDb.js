const getStoredCartItems = () => {
    const storedCartStr = localStorage.getItem('cart items');
    if (storedCartStr) {
        const storedCart = JSON.parse(storedCartStr);
        return storedCart;
    }
    else {
        return [];
    }
}

const addToStoredCartItems = (id) => {
    const storedCart = getStoredCartItems();
    if (storedCart.includes(id)) {
        console.log(id, 'exists')
    }
    else {
        storedCart.push(id);
        const storedCartStr = JSON.stringify(storedCart);
        localStorage.setItem('cart-items', storedCartStr);
    }
}

export { addToStoredCartItems, getStoredCartItems };