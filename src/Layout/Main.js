import React from 'react';
import icon from '../asset/LOGO/React-icon.svg.png'
import icon1 from '../asset/LOGO/Bootstrap_logo.svg.png'
import icon2 from '../asset/LOGO/css.png'
import icon3 from '../asset/LOGO/html.png'
import icon4 from '../asset/LOGO/node_js.png'
import icon5 from '../asset/LOGO/node_js.png'
import icon6 from '../asset/LOGO/mongodb.png'
import './Main.css'
import { Outlet } from 'react-router-dom';
import Footer from '../componant/Shard/Footer/Footer';
import Navber from '../componant/Shard/Navber/Navber';

const Main = () => {
    return (
        <div >
            <Navber></Navber>
            <div className='body_1'>
                <Outlet></Outlet>
            </div>
                <div className='babul'>
                    <div className="carcal"><span className='dot'></span></div>
                    <div className="carcal"><span><img src={icon6} alt="" /></span></div>
                    <div className="carcal"><span className='dot'></span></div>
                    <div className="carcal"><span><img src={icon} alt="" /></span></div>
                    <div className="carcal"><span className='dot'></span></div>
                    <div className="carcal"><span><img src={icon1} alt="" /></span></div>
                    <div className="carcal"><span><img src={icon2} alt="" /></span></div>
                    <div className="carcal"><span><img src={icon3} alt="" /></span></div>
                    <div className="carcal"><span className='dot'></span></div>
                    <div className="carcal"><span><img src={icon4} alt="" /></span></div>
                    <div className="carcal"><span className='dot'></span></div>
                    <div className="carcal"><span><img src={icon5} alt="" /></span></div>
                    <div className="carcal"><span className='dot'></span></div>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;