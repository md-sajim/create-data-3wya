import React from 'react';
import resume from "../../../../asset/MD ABU TALEB.pdf"
import './Banar.css'
import WaterWave from 'react-water-wave';
import animationData from './animation.json'
import Lottie from 'react-lottie';



const Banar = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <WaterWave
            // imageUrl={image}
            dropRadius={10}
            perturbance={0.12}
            resolution={560}
            interactive={true}
            crossOrigin={'  '}
        >
            {methods => (
                /* children components */
                <div className="" >
                    <section className=" text-gray-100">
                        <div className="container flex flex-col justify-center  mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
                            <div className="flex flex-col justify-center  p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                <h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
                                    <span className="text-purple-400"> senectus</span>erat pharetra
                                </h1>
                                <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                                    <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                                </p>
                                <div className="flex flex-col space-y-4  mb-3 items-center justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                    <a className='resume' href={resume}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        RESUME
                                    </a>
                                    <a className='resume' target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/developer-md-abu-taleb/">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        LINKDIN
                                    </a>
                                </div>
                                <div className="flex flex-col space-y-4 mb-3 items-center justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                                    <a className='resume' target='_blank' rel='noreferrer' href="https://github.com/md-sajim/">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        GITHUB
                                    </a>
                                    <a className='resume' target='_blank' rel='noreferrer' href="https://www.facebook.com/sajim.mazy/">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        FACEBOOK
                                    </a>
                                </div>
                            </div>
                        
                            <div className="lg:flex items-center hidden justify-center   lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                                <Lottie
                                    options={defaultOptions}
                                    height={500}
                                    width={400}
                                    loop={true}

                                />
                            </div>
                        </div>
                    </section>
                </div>
            )}
        </WaterWave>
    );
};

export default Banar;