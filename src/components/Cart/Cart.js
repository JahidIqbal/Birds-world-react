import React from 'react';

const Cart = (props) => {
    const { cart } = props;
    let totalQuantity = 0;
    let total = 0;
    for (const bird of cart) {

        if (!bird.quantity) {
            bird.quantity = 1;
        }
        total = total + bird.price * bird.quantity;
        totalQuantity = totalQuantity + bird.quantity;
    }
    return (
        <div className=" border border-5 text-center text-white bg-info border  rounded-1">
            <h2>Purchase Information</h2>
            <p className="h4">Birds Added:{totalQuantity}</p>
            <p className="h4">Total Cost: ${total}</p>
            {cart.map((cartItem) => (
                <ul >
                    <li className="h5" > <p>Name:{cartItem.name}</p></li>
                </ul>


            ))}
        </div>
    );
};

export default Cart;