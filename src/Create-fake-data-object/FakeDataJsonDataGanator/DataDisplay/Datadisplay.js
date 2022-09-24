import React from 'react';

const Datadisplay = (props) => {
    const {_id, price, name} = props.data
    return (
        <div>
            <h3>Name:{name}</h3>
            <h4>Price:{price}</h4>
            <h5>ID:{_id}</h5>
            
        </div>
    );
};

export default Datadisplay;