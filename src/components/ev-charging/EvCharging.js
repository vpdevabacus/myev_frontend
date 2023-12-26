import React from "react";
import evCharging from "../../assets/Images/ev_charging_img.jpg";
import vision from "../../assets/Images/vision.png";
import mission from "../../assets/Images/mission.png";
import "./ev-charging.css";
import { Link } from 'react-router-dom'


const EvCharging = () => {
    return (
        <>
            <section className="py-[80px] px-[20px] relative">
                <div className="container relative flex">
                    <div className="ev-charging_img absolute top-[0] h-[100%] w-[100%] lg:w-auto">
                        <img className="h-[100%]  w-[100%] lg:w-auto" src={evCharging} />
                    </div>
                    <div className="ev-charging_contant w-full relative z-99 xl:ml-[362px] lg:ml-[230px] rounded-[10px] bg-[#fff] p-[20px] pt-[40px] lg-pt-[30px] md:p-[30px] !pr-[20px] lg:!pr-0 flex justify-between mb-0 lg:mb-[55px] mt-[350px] lg:mt-[55px] lg:flex-row flex-col mx-[15px] lg:mx-0	">
                        <div className="w-[100%] lg:w-[46%] mb-[30px] lg:mb-0">
                            <h4 className="text-[#0B7132] font-medium uppercase	mb-[15px] green-line-heading">ABOUT US</h4>
                            <h2 className="mb-[20px]">What is an EV Charging Station?</h2>
                            <p>An EV charging station is a device that provides electric energy for recharging electric vehicles, enabling the transfer of electrical energy from the grid to the vehicle's battery pack.</p>
                            <div className="mt-[30px]">
                                <div className="mb-[15px]">
                                    <label className="text-[16px] text-[#016C80] font-medium mb-[5px] flex">Eco-friendly Charging</label>
                                    <div class="w-full bg-[#E7F0F7] rounded-full ">
                                        <div class="bg-[#016C80] text-xs font-medium text-white h-[15px] text-[12px] text-center p-0.5 leading-none rounded-[5px] w-[95%]">95%</div>
                                    </div>
                                </div>
                                <div className="mb-[15px]">
                                    <label className="text-[16px] text-[#016C80] font-medium mb-[5px] flex">Cost Effective</label>
                                    <div class="w-full bg-[#E7F0F7] rounded-full ">
                                        <div class="bg-[#016C80] text-xs font-medium text-white h-[15px] text-[12px] text-center p-0.5 leading-none rounded-[5px] w-[80%]">80%</div>                                   </div>
                                </div>
                                <div className="mb-[15px]">
                                    <label className="text-[16px] text-[#016C80] font-medium mb-[5px] flex">EV Drivers Services</label>
                                    <div class="w-full bg-[#E7F0F7] rounded-full ">
                                        <div class="bg-[#016C80] text-xs font-medium text-white h-[15px] text-[12px] text-center p-0.5 leading-none rounded-[5px] w-[90%]">90%</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[100%] lg:w-[54%] pl-0 lg:pl-[50px]">
                            <p className="mb-[40px]">EV charging stations come in different sizes and charging speeds, ranging from slow chargers that can take several hours to fast chargers that can charge a vehicle in just 30 minutes or less. They can be located in public places such as parking lots, shopping centers, and rest areas, as well as in private residences, workplaces, and commercial buildings.</p>
                            <div class="flex items-center mb-[30px]">
                                <img class="w-[75px]" src={vision} alt="" />
                                <div className='pl-[20px] text-left'>
                                    <h4 className='mb-[10px] text-[#016C80] font-semibold'>Our Vision</h4>
                                    <p>Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</p>
                                </div>
                            </div>
                            <div class="flex items-center mb-[40px]">
                                <img class="w-[75px]" src={mission} alt="" />
                                <div className='pl-[20px] text-left'>
                                    <h4 className='mb-[10px] text-[#016C80] font-semibold'>Our Mission</h4>
                                    <p>Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</p>
                                </div>
                            </div>
                            <div className='button-getstarted flex'>
                                <Link to='#' className="font-size-18 h-[60px] font-semibold  text-white bg-[#0B7132] hover:bg-black rounded-lg px-[45px] py-3 inline-flex items-center duration-[400ms,700ms]">
                                    More About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EvCharging