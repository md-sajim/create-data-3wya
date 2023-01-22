import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css'

const Navber = () => {
    return (
        <div className="navbar  neutratext-neutral-content">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-2xl" style={{ fontFamily: "initial", color: "#d57d1f" }}>MD ABU TALEB</a>
            </div>
            <div className='hidden lg:block mr-20'>
                <Link className='resume' to='/'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    HOME</Link>
                <Link className='resume mx-1' to='/'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    ABOUT</Link>
                <Link className='resume' to='/blog'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    BLOG</Link>
            </div>
        </div>
    );
};

export default Navber;