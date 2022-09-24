import React from 'react';
import Datadisplay from './DataDisplay/Datadisplay';

const JsonDataGanarator = () => {
    const jsonDataGanarator = [
        {
          "_id": "632eb7e7bed4a396686ebf49",
          "price": 278,
          "name": "Phoebe Frazier"
        },
        {
          "_id": "632eb7e76990ebdafd6ae6e2",
          "price": 220,
          "name": "Carson Nicholson"
        },
        {
          "_id": "632eb7e7c5c4496766c37318",
          "price": 343,
          "name": "Moody Rodriquez"
        },
        {
          "_id": "632eb7e7119561ce82f90719",
          "price": 208,
          "name": "Alissa Harris"
        },
        {
          "_id": "632eb7e7479c89122f48cdd6",
          "price": 293,
          "name": "Leta Harvey"
        },
        {
          "_id": "632eb7e7cefb8a768a29c2fa",
          "price": 206,
          "name": "Hernandez Fox"
        },
        {
          "_id": "632eb7e75cdaae119b521d8e",
          "price": 364,
          "name": "Benton Bailey"
        },
        {
          "_id": "632eb7e72cdd130c895839e7",
          "price": 364,
          "name": "Nunez Long"
        },
        {
          "_id": "632eb7e776077b02342da626",
          "price": 333,
          "name": "Fannie Moon"
        },
        {
          "_id": "632eb7e7e6a95035e76600c6",
          "price": 392,
          "name": "Shawn Pena"
        },
        {
          "_id": "632eb7e7b82e5a7b067dfd15",
          "price": 382,
          "name": "Eugenia Walsh"
        },
        {
          "_id": "632eb7e7d36e87ec1eaad22e",
          "price": 305,
          "name": "Lelia Kidd"
        },
        {
          "_id": "632eb7e7968bbd12dc809b23",
          "price": 372,
          "name": "Kelsey Mullins"
        },
        {
          "_id": "632eb7e72e91fd9829b89ea1",
          "price": 309,
          "name": "Bobbie Sloan"
        },
        {
          "_id": "632eb7e719b0c9dc99217be0",
          "price": 231,
          "name": "Bird Rowe"
        },
        {
          "_id": "632eb7e7aaf4a06cd63f63bc",
          "price": 298,
          "name": "Alisa Galloway"
        },
        {
          "_id": "632eb7e72e08166d83fd00de",
          "price": 348,
          "name": "Watson Hughes"
        },
        {
          "_id": "632eb7e74888a4cb7d37048b",
          "price": 239,
          "name": "Dona Cash"
        },
        {
          "_id": "632eb7e7253347e5fc6c06a2",
          "price": 295,
          "name": "Cabrera Patton"
        },
        {
          "_id": "632eb7e7f35c4ac99c8e218f",
          "price": 334,
          "name": "Ivy Ratliff"
        }
      ]
    return (
        <div>
            <h1>Json Data Ganarator</h1>
            {
                jsonDataGanarator.map(data => <Datadisplay data = {data} key={data._id}></Datadisplay>)
            }
        </div>
    );
};

export default JsonDataGanarator;