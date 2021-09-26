import React, { useEffect, useState } from 'react';

const Birds = () => {
    const [birds, setBirds] = useState([]);
    useEffect(() => {
        fetch('./birds.json')
            .then(res => res.json())
            .then(data => setBirds(data))
    }, [])
    return (
        <div>
            <h1>Birds will be here</h1>
            {
                birds.map(bird => console.log(bird))
            }
        </div>
    );
};

export default Birds;