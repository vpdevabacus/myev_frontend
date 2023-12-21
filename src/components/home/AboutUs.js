import React from 'react'
import { NavLink } from 'react-router-dom';

import ImageIcons from '../../common/ImageIcons'

const AboutUs = () => {
    return (
        <>
                {/* About Us Section */}
                <div className="about-us-section pb-20 px-3">
                    <div className="about-us-info">
                        <div className="container m-auto">
                        <div className="grid max-md:grid-cols-1 md:grid-cols-2 md:gap-5 lg:gap-40 items-center">
                            <div className="aboutus-col-info max-md:mb-6">
                                <h4 className="relative text-[#0B7132] font-medium mb-1 green-line-heading">ABOUT US</h4>
                                <h2 className="mb-3">What is an EV Charging Station?</h2>
                                <p className='mb-3'>An EV charging station is a device that provides electric energy for recharging electric vehicles, enabling the transfer of electrical energy from the grid to the vehicle's battery pack.</p>
                                <p>EV charging stations come in different sizes and charging speeds, ranging from slow chargers that can take several hours to fast chargers that can charge a vehicle in just 30 minutes or less. They can be located in public places such as parking lots, shopping centers, and rest areas, as well as in private residences, workplaces, and commercial buildings.</p>
                                <div className='mt-8'>
                                    <NavLink to="/About" >
                                        <button className="cursor-pointer bg-[#0B7132] text-[#fff] hover:text-[#fff] hover:bg-[#000] font-medium md:py-3 max-md:py-3 md:px-7 max-md:px-6 rounded-lg inline-flex items-center justify-center duration-[400ms,700ms]">
                                            Read More
                                        </button>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="aboutus-col-info">
                                <div className="aboutus-img-info">
                                    <img className="m-auto" src={ImageIcons.aboutUs_car} alt="About us pic" />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* End About Us Section */}
        </>
    )
}

export default AboutUs
