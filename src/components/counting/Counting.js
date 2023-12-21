import React from "react";
import countingIcon1 from "../../assets/icons/counting/1.svg";
import countingIcon2 from "../../assets/icons/counting/2.svg";
import countingIcon3 from "../../assets/icons/counting/3.svg";
import countingIcon4 from "../../assets/icons/counting/4.svg";
import CountUp from 'react-countup';

const Counting = () => {    
    return (
        <>
            <section className="testimonials py-[50px] md:py-[40px] px-[20px]">
                <div className="container m-auto">
                    <div className="bg-[#000] px-[40px] xl:px-[40px] lg:px-[40px] py-[68px] rounded-tl-[75px] rounded-br-[75px] xl:rounded-tl-[100px] xl:rounded-br-[100px]">
                        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-16 lg:gap-2 sm:gap-10 justify-between items-center">
                            <div class="relative flex items-center justify-center sm:after:hidden after:content-[''] after:w-[100%] after:h-[1px] after:bg-[#0b713252] after:bottom-[-32px] after:absolute">
                                <img class="w-[60px] xl:w-[75px] lg:w-[60px]" src={countingIcon1} alt="" />
                                <div className='pl-[15px] text-left'>
                                    <CountUp start={0} end={1582} duration={100}>
                                        {({ countUpRef, start }) => (
                                            <span className="text-white text-[28px] xl:text-[34px] lg:text-[30px] font-semibold after:content-['+'] after:text-[32px] after:font-medium after:top-[-3px] after:relative" ref={countUpRef}></span>
                                        )}
                                    </CountUp>
                                    <p className="text-[#FFFFFFCC]">Charging sessions</p>
                                </div>
                            </div>

                            <div class="relative flex items-center justify-center sm:after:hidden after:content-[''] after:w-[100%] after:h-[1px] after:bg-[#0b713252] after:bottom-[-32px] after:absolute">
                                <img class="w-[60px] xl:w-[75px] lg:w-[60px]" src={countingIcon2} alt="" />
                                <div className='pl-[15px] text-left'>
                                    <CountUp start={0} end={65} duration={100}>
                                        {({ countUpRef, start }) => (
                                            <span className="text-white text-[34px] font-semibold after:content-['m'] after:text-[20px] after:font-medium after:top-[-14px] after:left-[2px] after:relative " ref={countUpRef}></span>
                                        )}
                                    </CountUp>
                                    <p className="text-[#FFFFFFCC]">Green kms driven</p>
                                </div>
                            </div>

                            <div class="relative flex items-center justify-center sm:after:hidden after:content-[''] after:w-[100%] after:h-[1px] after:bg-[#0b713252] after:bottom-[-32px] after:absolute">
                                <img class="w-[60px] xl:w-[75px] lg:w-[60px]]" src={countingIcon3} alt="" />
                                <div className='pl-[15px] text-left'>
                                    <CountUp start={0} end={582} duration={100}>
                                        {({ countUpRef, start }) => (
                                            <span className="text-white text-[28px] xl:text-[34px] lg:text-[30px] font-semibold after:content-['+'] after:text-[32px] after:font-medium after:top-[-3px] after:relative" ref={countUpRef}></span>
                                        )}
                                    </CountUp>
                                    <p className="text-[#FFFFFFCC]">Green kms driven</p>
                                </div>
                            </div>

                            <div class="flex items-center justify-center">
                                <img class="w-[60px] xl:w-[75px] lg:w-[60px]" src={countingIcon4} alt="" />
                                <div className='pl-[15px] text-left'>
                                    <CountUp start={0} end={682} duration={100}>
                                        {({ countUpRef, start }) => (
                                            <span className="text-white text-[28px] xl:text-[34px] lg:text-[30px] font-semibold after:content-['+'] after:text-[32px] after:font-medium after:top-[-3px] after:relative" ref={countUpRef}></span>
                                        )}
                                    </CountUp>
                                    <p className="text-[#FFFFFFCC]">Electric Vehicles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Counting