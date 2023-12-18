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
           
            <div className='  2xl:ml-80 my-16 w-10/12 lg:w-11/12 xl:w-10/12  bg-white mx-auto 2xl:absolute pt-8 shadow-2xl rounded-xl'>
                <div className=' lg:w-3.5/12 lg:flex shadow-lg  px-8 l pb-8'>
                    <div className=' '>
                        <div className='w-6/12 '>
                            <p className=" font-medium tracking-tight text-[#0B7132] mt-16 sm:mt-0 text-3xl lg:text-4xl xl:text-5xl leading-9">
                                ABOUT US
                            </p>
                        </div>
                        <div className='bg-[#33333] w-11/12'>
                            <p className="text-3xl font-semibold text-[#000] text-4xl lg:text-5xl mt-7">
                                What is an EV Charging Station?
                            </p>
                        </div>
                        <p className="max-w-sm mt-7 text-xl font-normal text-[#000]">
                            An EV charging station is a device that provides electric energy for recharging electric vehicles, enabling the transfer of electrical energy from the grid to the vehicle's battery pack.
                        </p>
                        <p className="max-w-sm mt-7 text-xl font-normal text-[#016C80]">
                            Eco-friendly Charging
                        </p>
                        <img src={ImageIcons.percentage} className='w-12/12 h-5 ' />
                        <p className="max-w-sm mt-7 text-xl font-normal text-[#016C80]">
                            Eco-friendly Charging
                        </p>
                        <img src={ImageIcons.percentage} className='w-12/12 h-5' />
                        <p className="max-w-sm mt-7 text-xl font-normal text-[#016C80]">
                            Eco-friendly Charging
                        </p>
                        <img src={ImageIcons.percentage} className='w-12/12 h-5' />
                    </div>
                    <div className=' w-6/12'>
                        <p className="max-w-xl mt-7 text-xl font-normal text-[#000]">
                            An EV charging station is a device that provides electric energy for recharging electric vehicles, enabling the transfer of electrical energy from the grid to the vehicle's battery pack.
                        </p>
                        <div className='flex mt-10'>
                        <div >
                            <img src={ImageIcons.vision} class=" w-15 h-15 sm:w-20 sm:h-20"></img>
                        </div>
                        <div class="ml-3">
                            <h5 class="text-[#016C80] text-3xl font-semibold">Our Vision</h5>
                            <p class="text-black font-weight: 500 text-lg mt-3">Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</p>
                        </div>
                        </div>
                        <div className='flex mt-10'>
                        <div >
                            <img src={ImageIcons.mission} class=" w-15 h-15 sm:w-20 sm:h-20"></img>
                        </div>
                        <div class="ml-3">
                            <h5 class="text-[#016C80] text-3xl font-semibold">Our Mission</h5>
                            <p class="text-black font-weight: 500 text-lg mt-3">Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</p>
                        </div>
                        </div>


                        <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                            <NavLink to="/About" >
                                <button className="px-3 px-4 md:px-8 py-1 py-2 md:py-4 bg-[#0B7132] hover:bg-white text-white rounded-lg text-xl hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#0B7132] duration-[400ms,700ms] transition-[color,box-shadow]"><i className="fa-solid fa-arrow-right-to-bracket"></i> Read More</button>
                            </NavLink>
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