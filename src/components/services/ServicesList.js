import React from 'react'
import ImageIcons from '../../common/ImageIcons'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import serviceonepic from "../../assets/Images/services1.png"
import services2 from "../../assets/Images/services2.png"



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
            {/* Services List Section */}
            <div className="services-list-section w-full md:py-20 max-md:py-10">
                <div className="container mx-auto px-2">
                    <div className="flex lg:gap-8 max-lg:gap-5 max-md:flex-col mb-5">
                        <div className="md:w-1/3 relative mb-5">
                            <div className="services-list-info">
                                <div className="service-img-info text-center rounded-t-[35px]">
                                    <img src={serviceonepic} alt="image" className="w-full rounded-t-[35px]" />
                                </div>
                                <div className='services-list-content bg-[#F8F8F8] xl:px-10 max-xl:px-3 pb-5 rounded-b-[35px]'>
                                    <div className='mb-2 rounded-xl p-2 bg-[#fff] relative mb-[20px] md:mt-[-25px] max-md:mt-[-20px] shadow-lg'>
                                        <h4 className="text-center text-[#0B7132]">AC Charger Service</h4>
                                    </div>
                                    <p className="text-center mb-[20px]">Elevate your electric vehicle fleet's charging experience with our premium AC Charger Service. </p>
                                    <div className='btn-readmore-info pb-3'>
                                        <Link to={`/services/AC`} className='flex flex-row justify-center items-center font-medium hover:text-[#0B7132]'>
                                            Read More
                                            <FaArrowRightLong className='w-6 h-5 ml-1' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 relative mb-5">
                            <div className="services-list-info">
                                <div className="service-img-info text-center rounded-t-[35px]">
                                    <img src={services2} alt="image" className="w-full rounded-t-[35px]" />
                                </div>
                                <div className='services-list-content bg-[#F8F8F8] xl:px-10 max-xl:px-3 pb-5 rounded-b-[35px]'>
                                    <div className='mb-2 rounded-xl p-2 bg-[#fff] relative mb-[20px] md:mt-[-25px] max-md:mt-[-20px] shadow-lg'>
                                        <h4 className="text-center text-[#0B7132]">DC Charger Service</h4>
                                    </div>
                                    <p className="text-center mb-[20px]">Revolutionize your electric vehicle charging experience with our cutting-edge DC Charger Service.</p>
                                    <div className='btn-readmore-info pb-3'>
                                        <Link to={`/services/DC`} className='flex flex-row justify-center items-center font-medium hover:text-[#0B7132]'>
                                            Read More
                                            <FaArrowRightLong className='w-6 h-5 ml-1' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="md:w-1/3 relative mb-5">
                            <div className="services-list-info">
                                <div className="service-img-info text-center rounded-t-[35px]">
                                    <img src={serviceonepic} alt="image" className="w-full rounded-t-[35px]" />
                                </div>
                                <div className='services-list-content bg-[#F8F8F8] xl:px-10 max-xl:px-3 pb-5 rounded-b-[35px]'>
                                    <div className='mb-2 rounded-xl p-2 bg-[#fff] relative mb-[20px] md:mt-[-25px] max-md:mt-[-20px] shadow-lg'>
                                        <h4 className="text-center text-[#0B7132]">Home Charger</h4>
                                    </div>
                                    <p className="text-center mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                    <div className='btn-readmore-info pb-3'>
                                        <a href="#" className='flex flex-row justify-center items-center font-medium hover:text-[#0B7132]'>
                                            Read More
                                            <FaArrowRightLong className='w-6 h-5 ml-1' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="flex lg:gap-8 max-lg:gap-5 max-md:flex-col">
                        <div className="md:w-1/3 relative mb-5">
                            <div className="services-list-info">
                                <div className="service-img-info text-center rounded-t-[35px]">
                                    <img src={serviceonepic} alt="image" className="w-full rounded-t-[35px]" />
                                </div>
                                <div className='services-list-content bg-[#F8F8F8] xl:px-10 max-xl:px-3 pb-5 rounded-b-[35px]'>
                                    <div className='mb-2 rounded-xl p-2 bg-[#fff] relative mb-[20px] md:mt-[-25px] max-md:mt-[-20px] shadow-lg'>
                                        <h4 className="text-center text-[#0B7132]">AC Charger Service</h4>
                                    </div>
                                    <p className="text-center mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                    <div className='btn-readmore-info pb-3'>
                                        <a href="#" className='flex flex-row justify-center items-center font-medium hover:text-[#0B7132]'>
                                            Read More
                                            <FaArrowRightLong className='w-6 h-5 ml-1' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 relative mb-5">
                            <div className="services-list-info">
                                <div className="service-img-info text-center rounded-t-[35px]">
                                    <img src={serviceonepic} alt="image" className="w-full rounded-t-[35px]" />
                                </div>
                                <div className='services-list-content bg-[#F8F8F8] xl:px-10 max-xl:px-3 pb-5 rounded-b-[35px]'>
                                    <div className='mb-2 rounded-xl p-2 bg-[#fff] relative mb-[20px] md:mt-[-25px] max-md:mt-[-20px] shadow-lg'>
                                        <h4 className="text-center text-[#0B7132]">DC Charger Service</h4>
                                    </div>
                                    <p className="text-center mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                    <div className='btn-readmore-info pb-3'>
                                        <a href="#" className='flex flex-row justify-center items-center font-medium hover:text-[#0B7132]'>
                                            Read More
                                            <FaArrowRightLong className='w-6 h-5 ml-1' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 relative mb-5">
                            <div className="services-list-info">
                                <div className="service-img-info text-center rounded-t-[35px]">
                                    <img src={serviceonepic} alt="image" className="w-full rounded-t-[35px]" />
                                </div>
                                <div className='services-list-content bg-[#F8F8F8] xl:px-10 max-xl:px-3 pb-5 rounded-b-[35px]'>
                                    <div className='mb-2 rounded-xl p-2 bg-[#fff] relative mb-[20px] md:mt-[-25px] max-md:mt-[-20px] shadow-lg'>
                                        <h4 className="text-center text-[#0B7132]">Home Charger</h4>
                                    </div>
                                    <p className="text-center mb-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                                    <div className='btn-readmore-info pb-3'>
                                        <a href="#" className='flex flex-row justify-center items-center font-medium hover:text-[#0B7132]'>
                                            Read More
                                            <FaArrowRightLong className='w-6 h-5 ml-1' />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* End Services List Section */}


            {/* <div className='container mx-auto py-8'>
                <div className="flex flex-col sm:flex-row mt-12 w-11/12 lg:w-9/12 mx-auto">
                    {ServicesListing.map((item) => (
                        <List key={item.id} item={item} />
                    ))}
                </div>
            </div> */}
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
