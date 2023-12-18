import React, { useEffect, useState } from "react";
import ImageIcons from "../../common/ImageIcons";
import { useParams } from 'react-router-dom';

const Chargers = () => {

    const { type } = useParams();
    console.log("fgdg", type)

    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
        setIsChecked(!isChecked);
    };







    const FeatureList = ({ item }) => (
        <div className='my-3 flex flex-col '>
            <div className=" flex flex-row items-center justify-start">
                <img src={ImageIcons.Polygon} />
                <p className='ml-4 md:text-lg lg:text-xl font-medium text-[#000]'>{item.text}</p>

            </div>

        </div>
    );

    return (
        <>
            <div className='container mx-auto my-12 sm:my-20 px-8 sm:px-20  '>
                {type === 'ac_charger_services' ?
                    <div className="bg-[#F1F8E8] py-8 ">
                        <div className="xl:mb-2 px-2">
                            <div className="flex flex-row justify-center px-6 mx-auto items-center">
                                <p className="mt-7 text-base md:text-lg lg:text-2xl font-medium text-[#000] text-left">Fast Charging Setup</p>
                                <div className="mt-6 sm:mt-8 px-6">
                                    <label className="relative inline-flex cursor-pointer items-center ">
                                        <input id="switch"
                                            type="checkbox"
                                            className="peer sr-only "
                                            checked={isChecked}
                                            onChange={handleToggle}
                                        />
                                        <label for="switch" className="hidden"></label>
                                        <div className="peer h-7 w-14 rounded-full border bg-[#CCCCCC] after:absolute after:left-[8px] after:top-1 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#0B7132] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                                    </label>
                                </div>
                                <p className="mt-7 text-base md:text-lg lg:text-2xl font-medium text-[#000] text-left">Slow Charging Setup</p>


                            </div>

                            {isChecked ?
                                <div className='flex flex-col w-11/12 justify-between mx-auto md:flex-row mb-0'>
                                    <div className="py-12 md:w-5/12 md:mt-8 lg:mx-0 lg:w-8/12">
                                        <h2 className="text-left text-2xl text-black font-semibold md:text-3xl lg:text-5xl mb-10 md:mb-10">Slow Charging Setup</h2>

                                        {slowFeatures.map((item) => (
                                            <FeatureList key={item.id} item={item} />
                                        ))}
                                    </div>
                                    <div className=" md:w-7/12 lg:w-4/12 md:mx-auto lg:mx-0 items-center my-auto">
                                        <img src={ImageIcons.slowMachine} className='rounded-2xl w-12/12' />
                                    </div>
                                </div>
                                :

                                <div className='flex flex-col w-11/12 justify-between mx-auto md:flex-row mb-0'>
                                    <div className="py-12 md:w-5/12 md:mt-8 lg:mx-0 lg:w-8/12">
                                        <h2 className="text-left text-2xl text-black font-semibold md:text-3xl lg:text-5xl mb-10 md:mb-10">Fast Charging Setup</h2>

                                        {fastFeatures.map((item) => (
                                            <FeatureList key={item.id} item={item} />
                                        ))}
                                    </div>
                                    <div className=" md:w-7/12 lg:w-4/12 md:mx-auto lg:mx-0 items-center my-auto">
                                        <img src={ImageIcons.fastMachine} className='rounded-2xl w-12/12' />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    :

                    <div className="bg-[#F1F8E8] py-8 ">
                        <div className="xl:mb-2 px-2">
                            <div className="flex flex-row justify-center px-6 mx-auto items-center">
                                <p className="mt-7 text-base md:text-lg lg:text-2xl font-medium text-[#000] text-left">Single Charging Setup</p>
                                <div className="mt-6 sm:mt-8 px-6">
                                    <label className="relative inline-flex cursor-pointer items-center ">
                                        <input id="switch"
                                            type="checkbox"
                                            className="peer sr-only "
                                            checked={isChecked}
                                            onChange={handleToggle}
                                        />
                                        <label for="switch" className="hidden"></label>
                                        <div className="peer h-7 w-14 rounded-full border bg-[#CCCCCC] after:absolute after:left-[8px] after:top-1 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#0B7132] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
                                    </label>
                                </div>
                                <p className="mt-7 text-base md:text-lg lg:text-2xl font-medium text-[#000] text-left">Dual Charging Setup</p>


                            </div>

                            {isChecked ?
                                <div className='flex flex-col w-11/12 justify-between mx-auto md:flex-row mb-0'>
                                    <div className="py-12 md:w-5/12 md:mt-8 lg:mx-0 lg:w-8/12">
                                        <h2 className="text-left text-2xl text-black font-semibold md:text-3xl lg:text-5xl mb-10 md:mb-10">Dual Charging Setup</h2>

                                        {dualFeatures.map((item) => (
                                            <FeatureList key={item.id} item={item} />
                                        ))}
                                    </div>
                                    <div className=" md:w-7/12 lg:w-4/12 md:mx-auto lg:mx-0 items-center my-auto">
                                        <img src={ImageIcons.slowMachine} className='rounded-2xl w-12/12' />
                                    </div>
                                </div>
                                :

                                <div className='flex flex-col w-11/12 justify-between mx-auto md:flex-row mb-0'>
                                    <div className="py-12 md:w-5/12 md:mt-8 lg:mx-0 lg:w-8/12">
                                        <h2 className="text-left text-2xl text-black font-semibold md:text-3xl lg:text-5xl mb-10 md:mb-10">Single Charging Setup</h2>

                                        {singleFeatures.map((item) => (
                                            <FeatureList key={item.id} item={item} />
                                        ))}
                                    </div>
                                    <div className=" md:w-7/12 lg:w-4/12 md:mx-auto lg:mx-0 items-center my-auto">
                                        <img src={ImageIcons.fastMachine} className='rounded-2xl w-12/12' />
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </>
    )
};




const slowFeatures = [
    {
        id: '01',
        text: "Full Car Charge in approx 7 hours",
    },
    {
        id: '02',
        text: "Capacity - 7.4 kW AC",

    },
    {
        id: '03',
        text: "Locations - Hotels, Residential complex, Society , Flats, Parking Lots, etc"

    },
    {
        id: '04',
        text: "Investment - Rs. 99,000/- per setup ",

    },

    {
        id: '05',
        text: "Cloud based Asset Performance Monitoring",

    },
    {
        id: '06',
        text: "Over 200+ Pre Signed Locations",

    },
    {
        id: '07',
        text: "Earn upto Rs. 2/unit",

    },
]

const fastFeatures = [
    {
        id: '01',
        text: "Full Car Charge in approx 2 hours",
    },
    {
        id: '02',
        text: "Capacity - 22 kW AC",

    },
    {
        id: '03',
        text: "Locations - Hotels, Residential complex, Society , Flats, Parking Lots, etc"

    },
    {
        id: '04',
        text: "Investment - Rs. 99,000/- per setup ",

    },

    {
        id: '05',
        text: "Cloud based Asset Performance Monitoring",

    },
    {
        id: '06',
        text: "Over 200+ Pre Signed Locations",

    },
    {
        id: '07',
        text: "Earn upto Rs. 2/unit",

    },


]

const singleFeatures = [
    {
        id: '01',
        text: "Full Car Charge in approx 1 hr 30 mins",
    },
    {
        id: '02',
        text: "Capacity - 30 kW DC Fast Charging",

    },
    {
        id: '03',
        text: "Locations - Highway Restaurants, Dhaba, Mall, Office Spaces, Hospitals, QSR, etc"

    },
    {
        id: '04',
        text: "Investment - Rs. 11,75,000/- per setup",

    },

    {
        id: '05',
        text: "Cloud based Asset Performance Monitoring",

    },
    {
        id: '06',
        text: "Over 50+ Pre Signed Locations",

    },
    {
        id: '07',
        text: "Earn upto Rs. 4/unit",

    },
]

const dualFeatures = [
    {
        id: '01',
        text: "Full Car Charge in approx 1 hr 30 mins",
    },
    {
        id: '02',
        text: "Capacity - 60 kW DC Fast Charging",

    },
    {
        id: '03',
        text: "Locations - Highway Restaurants, Dhaba, Mall, Office Spaces, Hospitals, QSR, etc"

    },
    {
        id: '04',
        text: "Investment - Rs. 11,75,000/- per setup",

    },

    {
        id: '05',
        text: "Cloud based Asset Performance Monitoring",

    },
    {
        id: '06',
        text: "Over 50+ Pre Signed Locations",

    },
    {
        id: '07',
        text: "Earn upto Rs. 4/unit",

    },


]

export default Chargers;