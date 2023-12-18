import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import ImageIcons from '../../common/ImageIcons'

const WhyUs = () => {

    const [activeTab, setActiveTab] = useState(null);
    const [iconColor, setIconColor] = useState('#0B7132'); // Initial color


    const handleClick = (id) => {
        setActiveTab((prev) => (prev === id ? null : id));
        setIconColor((prevColor) => (prevColor === '#0B7132' ? '#000000' : '#0B7132'));

    };

    const handleRotate = (id) => (activeTab === id ? '-rotate-180' : '');

    const handleToggle = (id) =>
        activeTab === id ? { maxHeight: '100%' } : { maxHeight: '0' };

    const handleHeading = (id) =>
        activeTab === id ? { backgroundColor: '#0B7132', borderRadius: '6px', color: '#fff' } : {};


    const items = [
        {
            id: 1,
            ques: 'How can I find electric vehicle charging stations on a road trip?',
            ans: "Costs vary based on electricity rates and charging speed. Generally cheaper than traditional fuel. Public charging may have fees."
        },
        {
            id: 2,
            ques: ' Is it possible to overcharge an electric vehicle?',
            ans: "No, modern EVs and charging stations are designed to prevent overcharging. Once the battery reaches full capacity, charging stops automatically."
        },
        {
            id: 3,
            ques: 'Can I charge my electric vehicle in the rain or snow?',
            ans: " Yes, electric vehicle charging is safe in various weather conditions. Charging ports are designed to be weather-resistant."
        },
        {
            id: 4,
            ques: 'How much does it cost to charge an electric vehicle?',
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        },
    ];

    return (
        <>


            <div className=' container mx-auto '>
                <section className="relative flex items-center w-full">
                    <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-2 ">
                        <h2 className="text-center text-2xl text-black font-semibold md:text-4xl lg:text-5xl mb-10 md:mb-0">Why you should choose us ?</h2>
                        <div className='px-8 sm:px-12'>
                            <p className="mt-10 text-lg lg:text-xl font-normal text-[#000] text-left">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will.</p>
                        </div>

                        <div className="relative flex flex-col lg:flex-row  m-auto  px-12 w-12/12 justify-between my-10 ">
                            <div className="md:w-10/12 md:mx-auto lg:mx-0 lg:w-5/12 my-auto">
                                <img className=" w-full mx-auto rounded-3xl lg:ml-auto  " alt="hero" src={ImageIcons.AC_Power} />
                            </div>
                            <div className="container grid gap-8 md:gap-8  py-8  text-lg leading-6 text-gray-800 md:gap-8 md:grid-cols-1 md:mx-auto lg:mx-0 md:w-11/12 lg:w-6/12 ">
                                {items.map((item) => (
                                    <div key={item.id} className="space-y-3">
                                        <div
                                            className="relative transition-all duration-700 border rounded-md hover:shadow-2xl"
                                            onClick={() => handleClick(item.id)}
                                        >
                                            <div style={handleHeading(item.id)}
                                                className="w-full p-2 text-left cursor-pointer">
                                                <div className="flex items-center justify-between px-2">
                                                    <span className="tracking-wide text-base sm:text-lg lg:text-2xl font-medium">{`Question ${item.ques}`}</span>
                                                    <span
                                                        className={`transition-transform duration-200 transform fill-current ${handleRotate(
                                                            item.id
                                                        )}`}
                                                    >
                                                        <svg
                                                            className="w-8 h-8 fill-current"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"

                                                        >
                                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>

                                            <div
                                                style={handleToggle(item.id)}
                                                className="relative overflow-hidden transition-all duration-200 max-h-0"
                                            >
                                                <div className="px-6 py-4 text-black text-base lg:text-xl font-normal">{`${item.ans}`}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>







                        </div>
                    </div>
                </section>

            </div>




        </>
    )
}

export default WhyUs;
