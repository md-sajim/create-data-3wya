import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const LodeData = () => {
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(data1 => setData(data1))
    },[])
    return (
        <div>
            <h1>Json File Data</h1>
            {
                data.map(product => console.log(product))
            }

        </div>
    );
};

export default LodeData;