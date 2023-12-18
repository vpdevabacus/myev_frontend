import React from 'react'
import ImageIcons from '../../common/ImageIcons'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';

const ServicesList = () => {

    const List = ({ item }) => {
        console.log("DFSDFv", item)


        return (
            <div className="w-full w-full lg:w-10/12 px-8 mx-auto">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <img
                        src={item.image}
                        alt="image"
                        className="w-full"
                    />
                    <div className="flex justify-center px-8 bg-[#F8F8F8]">
                        <div className=" -mt-8  mx-auto w-full px-2 py-2 md:px-4 md:py-3 mx-auto bg-white text-center justify-center drop-shadow-md rounded-lg"><p className='text-xl md:text-3xl text-[#0B7132] font-medium'>{item.title}</p></div>
                    </div>
                    <div className="p-2 sm:p-9 md:p-4 xl:p-5 text-center bg-[#F8F8F8] rounded-b-3xl ">

                        <p className="font-normal text-black text-base md:text-lg text-center mb-4 ">
                            <span className="line-clamp-2">{item.desc1}</span>
                        </p>
                        <div className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize bg-transparent rounded-md ">
                            <div className='cursor-pointer bg-transparent flex flex-row text-black hover:text-[#0B7132]'>
                                <Link to={`/services/${item.type}`} className='flex flex-row' >
                                    <span className="mx-1 text-lg md:text-xl font-medium">Read More</span>
                                    <FaArrowRightLong className='w-7 h-8 ml-2' />
                                </Link>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            <div className='container mx-auto py-8'>
                <div className="flex flex-col sm:flex-row mt-12 w-11/12 lg:w-9/12 mx-auto">
                    {ServicesListing.map((item) => (
                        <List key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}


const ServicesListing = [
    {
        title: "AC Charger Service",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        image: ImageIcons.services1,
        type: "ac_charger_services",
        desc1: '    At My EV Point, we proudly introduce our cutting-edge AC Charging Stations, representing the epitome of efficient and sustainable electric vehicle charging. Our commitment to revolutionizing the charging experience is evident in the strategic placement and advanced features of our AC stations, tailored to meet the diverse needs of electric vehicle enthusiasts.',

    },
    {
        title: "DC Charger Service",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        image: ImageIcons.services2,
        type: "dc_charger_services",
        desc1: 'At My EV Point, we stand at the forefront of the electric mobility revolution, committed to providing unparalleled charging solutions. Our DC Power Charging Stations represent the pinnacle of innovation, addressing the evolving needs of electric vehicle users with a focus on delivering fast and efficient charging experiences.',


    }
]

export default ServicesList;
