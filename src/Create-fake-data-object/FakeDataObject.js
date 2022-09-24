import React from 'react';
import Frunt from '../componant/frut-componant/Frut';
import "./Fake-data-object.css"

const FakeDataObject = () => {
    const fakedata = [
        {id:1, name:"mango", price:100, Location:"bangladesh"},
        {id:2, name:"appol", price:200, Location:"kasmer"},
        {id:3, name:"orang", price:300, Location:"kasmer"},
        {id:4, name:"banana", price:400, Location:"bangladesh"},
        {id:5, name:"watermelon", price:500, Location:"bangladesh"},
        {id:6, name:"strowbare", price:600, Location:"london"},
        {id:7, name:"pineapple", price:700, Location:"bangladesh"},
        {id:8, name:"pear", price:800, Location:"bangladesh"},
        {id:9, name:"lemon", price:900, Location:"bangladesh"},
        {id:10, name:"cherry", price:1000, Location:"india"},
    ]
    return (
        <div>
            <h1>Fruist Name</h1>
            {
                fakedata.map(frute => <Frunt frute = {frute} key={frute.id}></Frunt>)
            }
        </div>
    );
};

export default FakeDataObject;