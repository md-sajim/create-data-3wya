import React from 'react';
import "./frut.css"

const Frunt = props => {
    const {id, name, price, Location} = props.frute;
    return (
        <div className='container'>
            <h3>ID:{id}</h3>
            <h4>Name:{name}</h4>
            <h4>Price:{price}</h4>
            <p>Location:{Location}</p>
            
        </div>
    );
};

export default Frunt;