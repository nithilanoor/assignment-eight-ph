import React from 'react';

const CartItem = ({gadget}) => {
    const {product_name} = gadget;
    return (
        <div>
            <h3>Cart Items : {product_name}</h3>
        </div>
    );
};

export default CartItem;