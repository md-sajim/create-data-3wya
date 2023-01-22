import React from 'react';
import './Myskils.css'
import img from '../../../../asset/LOGO/React-icon.svg.png'
import img1 from '../../../../asset/LOGO/Bootstrap_logo.svg.png'
import img2 from '../../../../asset/LOGO/css.png'
import img3 from '../../../../asset/LOGO/download.png'
import img4 from '../../../../asset/LOGO/figma.png'
import img5 from '../../../../asset/LOGO/html.png'
import img6 from '../../../../asset/LOGO/node_js.png'
import img7 from '../../../../asset/LOGO/mongodb.png'
import img8 from '../../../../asset/LOGO/javascript.png'
import img9 from '../../../../asset/LOGO/daisyUi.png'


const Myskils = () => {
    return (
        <div className='mt-20'>
            <h3 className='text-4xl  text-white py-10 pl-10 spacal_tital' style={{ color: "#D57D1F" }}>SKILLS</h3>

            <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 sm:px-1 md:px-1 lg:mx-3'>
                <div style={{ backgroundColor: "#ffcb69" }} className="flex rounded-lg items-center justify-between p-5 content-center gap-2">
                    <div>
                        <img className='App-logo' src={img} alt="" />
                    </div>
                    <h6 className="text-lg font-semibold spacal_tital">REACT</h6>
                    <div className="badge badge-secondary">6 month</div>
                </div>
                <div style={{ backgroundColor: "#ffcb69" }} className="flex justify-between p-5 rounded-lg items-center content-center gap-2">
                    <div>
                        <img className='App-logo' src={img8} alt="" />
                    </div>
                    <h6 className="text-lg font-semibold spacal_tital">JAVASCRIPT</h6>
                    <div className="badge badge-secondary">1 YEAR</div>
                </div>
                <div style={{ backgroundColor: "#ffcb69" }} className="flex  rounded-lg items-center justify-between p-5 content-center gap-2">
                    <div>
                        <img className='App-logo' src={img6} alt="" />
                    </div>
                    <h6 className="text-lg font-semibold spacal_tital">NODE JS</h6>
                    <div className="badge badge-secondary">6 month</div>
                </div>
                <div style={{ backgroundColor: "#ffcb69" }} className="flex p-5 rounded-lg items-center justify-between content-center gap-2">
                    <div>
                        <img className='App-logo' src={img7} alt="" />
                    </div>
                    <h6 className="text-lg font-semibold spacal_tital">MONGODB</h6>
                    <div className="badge badge-secondary">6 month</div>
                </div>
                <div style={{ backgroundColor: "#ffcb69" }} className="flex  rounded-lg items-center justify-between p-5 content-center gap-2">
                    <div>
                        <img className='App-logo' src={img5} alt="" />
                    </div>
                    <h6 className="text-lg font-semibold spacal_tital">HTML</h6>
                    <div className="badge badge-secondary">3 YEAR</div>
                </div>
                <div style={{ backgroundColor: "#ffcb69" }} className="flex rounded-lg items-center justify-between p-5 content-center gap-2">
                    <div>
                        <img className='App-logo' src={img2} alt="" />
                    </div>
                    <h6 className="text-lg font-semibold spacal_tital">CSS</h6>
                    <div className="badge badge-secondary">3 YEAR</div>
                </div>
                <div style={{ backgroundColor: "#ffcb69" }} className="flex  rounded-lg items-center justify-between p-5 content-center gap-2">
                    <div>
                        <img className='App-logo' src={img1} alt="" />
                    </div>
                    <h6 className="text-lg font-semibold spacal_tital">BOOTSTRAP 5</h6>
                    <div className="badge badge-secondary">1 YEAR</div>
                </div>
                <div style={{ backgroundColor: "#ffcb69" }} className="flex  rounded-lg items-center justify-between p-5 content-center gap-2">
                    <div>
                        <img className='App-logo' src={img3} alt="" />
                    </div>
                    <h6 className="text-lg font-semibold spacal_tital">TAILWIND</h6>
                    <div className="badge badge-secondary">1 YEAR</div>
                </div>
                <div style={{ backgroundColor: "#ffcb69" }} className="flex  rounded-lg items-center justify-between p-5 content-center gap-2">
                    <div>
                        <img className='App-logo' src={img4} alt="" />
                    </div>
                    <h6 className="text-lg font-semibold spacal_tital">FIGMA</h6>
                    <div className="badge badge-secondary">1 YEAT</div>
                </div>
                <div style={{ backgroundColor: "#ffcb69" }} className="flex  rounded-lg items-center justify-between p-5 content-center gap-2">
                    <div>
                        <img className='App-logo' src={img9} alt="" />
                    </div>
                    <h6 className="text-lg font-semibold spacal_tital">DAISY UI</h6>
                    <div className="badge badge-secondary">6 month</div>
                </div>
                <div style={{ backgroundColor: "#ffcb69" }} className="flex  rounded-lg items-center justify-between p-5 content-center gap-2">
                    <div>
                        <img className='App-logo' src={img} alt="" />
                    </div>
                    <h6 className="text-lg font-semibold spacal_tital">REACT</h6>
                    <div className="badge badge-secondary">6 month</div>
                </div>
                <div style={{ backgroundColor: "#ffcb69" }} className="flex  rounded-lg items-center justify-between p-5 content-center gap-2">
                    <div>
                        <img className='App-logo' src={img} alt="" />
                    </div>
                    <h6 className="text-lg font-semibold spacal_tital">REACT</h6>
                    <div className="badge badge-secondary">6 month</div>
                </div>

            </div>
        </div>
    );
};

export default Myskils;