import React from 'react';

const Cart = (props) => {
    const { cart } = props;

    return (
        <div className="border border-5 text-center text-white bg-info border  rounded-1">
            <h5>Your selected Bird below</h5>
            {cart.map((cartItem) => (
                <p>Name:{cartItem.name}</p>

            ))}
            {cart.map((cartItem) => (
                <p>Price:{cartItem.price}</p>

            ))}
        </div>
    );
};

export default Cart;