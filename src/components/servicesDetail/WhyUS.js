import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import ImageIcons from '../../common/ImageIcons';
import phonenearby from '../../assets/Images/phonenearby.png';
import mapdottedinfo from '../../assets/Images/mapdottedinfo.png';
import { Link } from 'react-router-dom';


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
            ans: "Use our mobile app and check your vehicle's built-in navigation for real-time information on charging station locations."
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
            ans: "Costs vary based on electricity rates and charging speed. Generally cheaper than traditional fuel. Public charging may have fees."
        },
    ];

    return (
        <>
            <section className="why-choice-us-section w-full md:pb-20 max-md:pb-10 ">
                <div className='container mx-auto px-2'>
                    <div className='text-center mb-10'>
                        <h2 className='mb-3'>Why you sould choose us ?</h2>
                        <p className='max-w-[1080px] m-auto'>myEV Point is more than just a charging network; it's a community. Connect with fellow EV enthusiasts, share experiences, and stay informed about the latest developments in the world of electric vehicles. Choose myEV Point — Where Innovation Meets Reliability. Join us on the road to a sustainable and electrifying future.</p>
                    </div>
                    <div className='flex gap-4 max-md:flex-col max-w-[1024px] m-auto'>
                        <div className='md:w-2/5 mb-5 max-md:order-2'>
                            <img className="w-full mx-auto" alt="hero" src={ImageIcons.AC_Power} />
                        </div>
                        <div className='md:w-3/5 relative mb-5 max-md:order-1'>
                            <div className="grid gap-4 px-2 text-lg leading-6 text-gray-800">
                                {items.map((item) => (
                                    <div key={item.id}>
                                        <div className="relative" onClick={() => handleClick(item.id)}>
                                            <div style={handleHeading(item.id)} className="w-full px-4 py-4 text-left cursor-pointer rounded-md shadow-[0_3px_10px_5px_rgba(0,0,0,0.1)] transition-all duration-200">
                                                <div className="flex items-center justify-between">
                                                    <span className="tracking-wide text-lg font-medium">{` ${item.ques}`}</span>
                                                    <span className={`transition-transform duration-200 transform ${handleRotate(item.id)}`}>
                                                        <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <div style={handleToggle(item.id)} className="relative overflow-hidden transition-all duration-200 max-h-0">
                                                <div className="px-6 py-4 text-black">
                                                    {`${item.ans}`}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Why you sould choice us ? Section*/}

            {/* Discover Places Nearby Section*/}
            <section className="discover-places-nearby-section w-full md:py-20 max-md:py-10 ">
                <div className='container mx-auto px-2'>
                    <div className='dis-nearby-box max-w-[1140px] m-auto bg-[#E7F0F7] rounded-br-[80px] rounded-tl-[80px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.2)]'>
                        <div className='flex gap-4 max-md:flex-col items-center'>
                            <div className='md:w-1/2 mb-5 text-center bg-contain bg-center bg-no-repeat max-md:w-full' style={{ backgroundImage: `url('${mapdottedinfo}')` }}>
                                <img className="m-auto mt-[-60px]" alt="hero" src={phonenearby} />
                            </div>
                            <div className='md:w-1/2 mb-5 py-5 px-3'>
                                <h2 className='mb-3'>Discover Places Nearby</h2>
                                <p className='mb-8'>Stay in the know with real-time updates on station availability, charging speeds, and user reviews. We're committed to providing you with the latest and most accurate information.</p>
                                <Link to='/contact'>
                                    <button className='flex bg-[#0B7132] text-[#fff] hover:bg-[#000] py-4 px-6 rounded-lg font-semibold duration-[400ms,700ms]'>Contact Us</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs;
