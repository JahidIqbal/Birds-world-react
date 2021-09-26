import React, { useEffect, useState } from 'react';
import Bird from '../Bird/Bird';
import Cart from '../Cart/Cart';

const Birds = () => {
    const [birds, setBirds] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./birds.json')
            .then(res => res.json())
            .then(data => setBirds(data))
    }, [])

    const showBird = (bird) => {
        const cartName = [bird]
        setCart(cartName);
    }

    return (
        <div className="full-container row">
            <div className="Birds container col-md-9">
                <div className="row ">
                    {
                        birds.map(bird => <Bird
                            key={bird.id}
                            bird={bird}
                            showBird={showBird}></Bird>)
                    }
                </div>

            </div>
            <div className="cart col-md-3 ">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};





export default Birds;