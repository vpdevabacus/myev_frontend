import React from 'react'
import { NavLink } from 'react-router-dom';

import ImageIcons from '../../common/ImageIcons'

const AboutUs = () => {
    return (
        <>

            <div className="text-left mt-5">

                <div className='sm:px-28 w-full '>
                    <section className="relative flex items-center w-full">
                        <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-2 ">
                            <div className="relative flex-col items-start m-auto align-middle">
                                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24  ">
                                    <div className="relative items-center gap-12 m-auto lg:inline-flex md:order-first ">
                                        <div className="max-w-xl text-center lg:text-left">
                                            <div>
                                                <div className=''>
                                                    <p className="text-xl font-medium tracking-tight text-[#0B7132] sm:text-3xl leading-9">
                                                        ABOUT US
                                                    </p>
                                                </div>
                                                <p className="text-3xl font-semibold text-[#000] text-4xl lg:text-5xl mt-7">
                                                    What is an EV Charging Station?
                                                </p>
                                                <p className="max-w-xl mt-7 text-xl font-normal text-[#000]">
                                                    An EV charging station is a device that provides electric energy for recharging electric vehicles, enabling the transfer of electrical energy from the grid to the vehicle's battery pack.
                                                </p>
                                                <p className="max-w-xl mt-5 text-xl font-normal text-[#000">
                                                    EV charging stations come in different sizes and charging speeds, ranging from slow chargers that can take several hours to fast chargers that can charge a vehicle in just 30 minutes or less. They can be located in public places such as parking lots, shopping centers, and rest areas, as well as in private residences, workplaces, and commercial buildings.
                                                </p>
                                            </div>



                                            <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                                                <NavLink to="/About" >
                                                    <button className="px-3 md:px-8 py-1 md:py-4 bg-[#0B7132] text-white rounded-lg text-xl"><i className="fa-solid fa-arrow-right-to-bracket"></i> Read More</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <img className="object-cover rounded-3xl object-center w-full mx-auto  lg:ml-auto " alt="hero" src={ImageIcons.aboutUs_car} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>



            </div>
        </>
    )
}

export default AboutUs
