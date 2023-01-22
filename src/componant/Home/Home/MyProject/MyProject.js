import React from 'react';
import "./MyProject.css"

const MyProject = () => {
    const formJurnalest = [
        { id: 1,sitlink:"https://quizcen-tum.netlify.app/"},
        { id: 2,sitlink:"https://assignment-11-clint-side.web.app/"},
        { id: 3,sitlink:"https://assingment-resell-furniture.web.app/"},
        { id: 4,sitlink:"https://fitness-heroes-celadon.netlify.app/"},
        { id: 5,sitlink:"https://tourmaline-semifreddo-3e9f73.netlify.app/"},
    ]
    return (
        <div className='mt-20'>
            <h3 className='text-4xl  text-white py-20 pl-10 spacal_tital' style={{color:"#D57D1F"}}>PROJECTS</h3>
            <div className='body1' >
                <div className='container1' >
                    {
                        formJurnalest.map(jurnal => <div
                            key={jurnal.id}
                            className="card1">
                            <div className="imgBx1">
                            <embed src={jurnal.sitlink} />
                                {/* <img src={jurnal.img} alt="" /> */}
                            </div>
                            <div className="content1">
                                <button className='bg-blue-500 px-10 py-1 rounded-sm'>Details</button>
                                <div>
                                    
                                    
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>

        </div >
    );
};

export default MyProject;