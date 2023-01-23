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
import img10 from '../../../../asset/LOGO/MySQL-Logo-removebg-preview.png'
import img11 from '../../../../asset/LOGO/Redux.png'
import animationData from './YI0GkFfFkd.json'
import Lottie from 'react-lottie';


const Myskils = () => {
    const skilsData = [
        { id: 1, skilsLogo: img, exprance: "1 year", skilsName: "REACT", dealy: "50", dataaos: "fade-right", duration: "2000" },
        { id: 2, skilsLogo: img1, exprance: "1 year", skilsName: "BOOTSTRAP", dealy: "60", dataaos: "fade-right", duration: "4000" },
        { id: 3, skilsLogo: img2, exprance: "3 year", skilsName: "CSS", dealy: "70", dataaos: "fade-left", duration: "6000" },
        { id: 4, skilsLogo: img3, exprance: "1 year", skilsName: "TAILWIND CSS", dealy: "80", dataaos: "fade-left", duration: "8000" },
        { id: 5, skilsLogo: img4, exprance: "1 year", skilsName: "FIGMA", dealy: "90", dataaos: "fade-right", duration: "10000" },
        { id: 6, skilsLogo: img5, exprance: "3 year", skilsName: "HTML", dealy: "100", dataaos: "fade-right", duration: "12000" },
        { id: 7, skilsLogo: img6, exprance: "1 year", skilsName: "NODE.JS", dealy: "110", dataaos: "fade-left", duration: "14000" },
        { id: 8, skilsLogo: img7, exprance: "6 month", skilsName: "MONGODB", dealy: "120", dataaos: "fade-left", duration: "16000" },
        { id: 9, skilsLogo: img8, exprance: "1 year", skilsName: "JAVASCRIPT", dealy: "130", dataaos: "fade-right", duration: "18000" },
        { id: 10, skilsLogo: img9, exprance: "1 year", skilsName: "DAISY UI", dealy: "140", dataaos: "fade-right", duration: "20000" },
        { id: 11, skilsLogo: img10, exprance: "on stardy", skilsName: "MY SQL", dealy: "150", dataaos: "fade-left", duration: "22000" },
        { id: 12, skilsLogo: img11, exprance: "on stardy", skilsName: "REDUX", dealy: "160", dataaos: "fade-left", duration: "24000" },
    ]
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className='mt-20'>
            <h3 className='text-4xl  text-white py-10 pl-10 spacal_tital' style={{ color: "#D57D1F" }}>SKILLS</h3>

            <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 sm:px-1 md:px-1 lg:mx-3'>
                {
                    skilsData.map(skils => <div
                        key={skils.id}
                        data-aos={skils.dataaos}
                        data-aos-duration="2000"
                        data-aos-delay="50"
                        className="flex rounded-lg items-center justify-between p-5 content-center gap-2 drop-shadow-2xl bc-color"


                    >
                        <div>
                            <img className='App-logo' src={skils.skilsLogo} alt="" />
                        </div>
                        <h6 className="text-lg font-semibold spacal_tital">{skils.skilsName}</h6>
                        <div className="badge badge-secondary">{skils.exprance}</div>
                    </div>)
                }

            </div>
            <div className="lg:flex items-center hidden justify-center   lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                <Lottie
                    options={defaultOptions}
                    height={500}
                    width={600}
                    loop={true}

                />
            </div>
            <h3 className='text-4xl  text-white py-10 pl-10 spacal_tital' style={{ color: "#D57D1F" }}>MISSON 2023</h3>
            <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 sm:px-1 md:px-1 lg:mx-3'>
                {
                    skilsData.map(skils => <div
                        key={skils.id}
                        className="flex rounded-lg items-center justify-between p-5 content-center gap-2 drop-shadow-2xl bc-color"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-delay="500"
                    >
                        <div>
                            <img className='App-logo' src="" alt="" />
                        </div>
                        <h6 className="text-lg font-semibold spacal_tital"></h6>
                        <div className="badge badge-secondary"></div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default Myskils;