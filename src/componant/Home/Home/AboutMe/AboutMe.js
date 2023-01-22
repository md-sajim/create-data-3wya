import React from 'react';
import img from '../../../../asset/JOT-IMG__1_-removebg-preview.png'
import './About.css'

const AboutMe = () => {
    return (
        <>
            <h3 className='text-4xl  text-white py-10 pl-10 spacal_tital' style={{ color: "#D57D1F" }}>ABOUT ME</h3>
            <div className="hero mt-20">
                <div className='hero-overlay  flex justify-center' style={{ backgroundColor: "#0000", color: "#D57D1F" }}>
                    <div className="hero-content flex-col lg:flex-row " >
                        <img src={img} alt='pecture md abu taleb' className="lg:max-w-sm rounded-lg shadow-2xl" />
                        <div className='position-st'>
                            
                            <h1 data-text='"MD...ABU...TALEB"' className="text-5xl font-bold spacal_tital">"MD...ABU...TALEB"</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                          
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AboutMe;