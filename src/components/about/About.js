import React from 'react'
import { NavLink } from 'react-router-dom';

import ImageIcons from '../../common/ImageIcons'

const backgroundImagePath = ImageIcons.Aboutimage;

const style = {
    backgroundImage: `url('${backgroundImagePath}')`,


};
const About = () => {
    return (
        <>
            <div className='py-16  container mx-auto'>

                <div className='  2xl:ml-80 my-16 w-10/12 md:w-11/12 xl:w-12/12 2xl:w-11/12 bg-white mx-auto 2xl:absolute pt-8 shadow-2xl rounded-xl '>
                    <div className=' lg:w-3.5/12 lg:flex shadow-lg  px-8 l pb-8'>
                        <div className=' '>
                            <div className='w-6/12  '>
                                <p className=" font-medium tracking-tight text-[#0B7132] mt-16 sm:mt-0 text-3xl lg:text-4xl xl:text-5xl leading-9">
                                    ABOUT US
                                </p>
                            </div>
                            <div className='bg-[#33333] w-11/12'>
                                <p className="text-3xl font-semibold text-[#000] text-4xl lg:text-5xl mt-7">
                                    What is an EV Charging Station?
                                </p>
                            </div>
                            <p className="max-w-xl lg: max-w-sm mt-7  text-xl font-normal text-[#000]">
                                An EV charging station is a device that provides electric energy for recharging electric vehicles, enabling the transfer of electrical energy from the grid to the vehicle's battery pack.
                            </p>
                            <p className="max-w-sm mt-7 text-xl font-normal text-[#016C80]">
                                Eco-friendly Charging
                            </p>
                            <img src={ImageIcons.percentage} className='w-12/12 h-5 mt-2 ' />
                            <p className="max-w-sm mt-7 text-xl font-normal text-[#016C80]">
                                Cost Effective
                            </p>
                            <img src={ImageIcons.percentage} className='w-12/12 h-5 mt-2' />
                            <p className="max-w-sm mt-7 text-xl font-normal text-[#016C80]">
                                EV Drivers Services
                            </p>
                            <img src={ImageIcons.percentage} className='w-12/12 h-5 mt-2' />
                        </div>
                        <div className=' lg:w-6/12'>
                            <p className="max-w-3xl lg:max-w-xl mt-7 text-xl font-normal text-[#000]">
                                An EV charging station is a device that provides electric energy for recharging electric vehicles, enabling the transfer of electrical energy from the grid to the vehicle's battery pack.
                            </p>
                            <div className='flex mt-10'>
                                <div >
                                    <img src={ImageIcons.vision} class="sm:w-50 sm:h-50"></img>
                                </div>
                                <div class="ml-3">
                                    <h5 class="text-[#016C80] text-3xl font-semibold ml-3">Our Vision</h5>
                                    <p class="text-black font-weight: 500 text-lg mt-3 ml-3"> Revolutionizing electric mobility, our vision is to establish a
                                        seamless and accessible network of charging points, driving a
                                        sustainable future for all. We're committed to making clean
                                        energy an effortless choice, transforming the way the world
                                        travels.</p>
                                </div>
                            </div>
                            <div className='flex mt-10'>
                                <div >
                                    <img src={ImageIcons.mission} class=" sm:w-50 sm:h-50"></img>
                                </div>
                                <div class="ml-3">
                                    <h5 class="text-[#016C80] text-3xl font-semibold ml-3">Our Mission</h5>
                                    <p class="text-black font-weight: 500 text-lg mt-3 ml-3">To propel the electric vehicle revolution, myEV Point is on a mission to establish a widespread network of cutting-edge charging stations. We are dedicated to advancing clean transportation, reducing carbon footprints, and contributing to a sustainable future by providing accessible and efficient charging solutions for electric vehicles worldwide.</p>
                                </div>
                            </div>




                        </div>


                    </div>

                </div>
                <div className="bg-cover w-3/12 2xl:w-3/12 py-96 hidden 2xl:inline-block  " style={style}>



                </div>

            </div>

        </>
    )

}
export default About;