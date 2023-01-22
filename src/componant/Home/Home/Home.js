import React from 'react';
import AboutMe from './AboutMe/AboutMe';
import Banar from './Banar/Banar';
import Contact from './Contact/Contact';
import MyProject from './MyProject/MyProject';
import Myskils from './MySkils/Myskils';
import WaterWave from 'react-water-wave';

const Home = () => {
    return (
        <>
            <Banar></Banar>
            <Myskils></Myskils>
            <MyProject></MyProject>
            <AboutMe></AboutMe>
            <Contact></Contact>
        </>
    );
};

export default Home;