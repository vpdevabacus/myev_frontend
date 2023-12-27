import React, { useEffect, useState } from 'react'
import ImageIcons from '../../common/ImageIcons'
import { useParams } from "react-router-dom"
import Chargers from '../servicesDetail/Chargers'
import singleservicefullimg from "../../assets/Images/single-service-fullimg.png";
import bgcoverimh1 from "../../assets/Images/bg-cover-imh1.png";
import chaticon from "../../assets/Images/chat-icon.png";
import pdficon1 from "../../assets/Images/pdf-icon-1.png";
import pdficon2 from "../../assets/Images/pdficon2.png";
import { Link } from 'react-router-dom';
import brocher from "../../assets/utils/myEV_borcher.pdf"


const ServicesDetail = () => {

    const { type } = useParams();
    console.log(">>>", type)

    const [serviceDetails, setServiceDetails] = useState(null);

    useEffect(() => {
        const selectedService = servicesList.find(service => service.type === type);
        setServiceDetails(selectedService);
    }, [type])
    console.log(">>>ffdfffff", serviceDetails)


    return (
        <>
        <div className='single-service-page w-full md:py-20 max-md:py-10'>
            <div className='container mx-auto px-2'>
                <div className='single-services-info flex gap-10 max-md:flex-col'>
                    {/* Left Side Bar Info */}
                    <div className='md:w-1/4 relative mb-5  max-md:order-2'>
                        <div className='single-service-left-sidebar'>
                            {/* Our Services Sidebar Links */}
                            <div className='box-shodow-info xl:px-10 xl:py-10 max-xl:px-5 max-xl:py-5 rounded-md shadow-[0_3px_10px_5px_rgba(0,0,0,0.1)] xl:mb-10 max-xl:mb-5'>
                                <div className='title-sidebar mb-5'>
                                    <h4>Our Services</h4>
                                    <hr class="green-hr-line" />
                                </div>
                                <div className='services-links-info'>
                                    <ul>
                                        <li>
                                        <Link to='/services/ac_charger_services' className='flex px-4 py-2 hover:bg-[#0B7132] hover:text-[#fff] rounded-md border-b border-solid border-[#ddd]'>AC Charger Service</Link>
                                        </li>
                                        <li>
                                        <Link to='/services/dc_charger_services' className='flex px-4 py-2 hover:bg-[#0B7132] hover:text-[#fff] rounded-md border-b border-solid border-[#ddd]'>DC Charger Service</Link>
                                        </li>
                                        {/* <li>
                                            <a href="#" className='flex px-4 py-2 hover:bg-[#0B7132] hover:text-[#fff] rounded-md border-b border-solid border-[#ddd]'>Home Charger</a>
                                        </li>
                                        <li>
                                            <a href="#" className='flex px-4 py-2 hover:bg-[#0B7132] hover:text-[#fff] rounded-md border-b border-solid border-[#ddd]'>Support EV Brand</a>
                                        </li>
                                        <li>
                                            <a href="#" className='flex px-4 py-2 hover:bg-[#0B7132] hover:text-[#fff] rounded-md border-b border-solid border-[#ddd]'>Commercial Systems</a>
                                        </li>
                                        <li>
                                            <a href="#" className='flex px-4 py-2 hover:bg-[#0B7132] hover:text-[#fff] rounded-md border-b border-solid border-[#fff]'>Public Stations</a>
                                        </li> */}
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Info Sidebar */}
                            <div className='box-shodow-info rounded-md shadow-[0_3px_10px_5px_rgba(0,0,0,0.1)] xl:mb-10 max-xl:mb-5'>
                                <div className='contact-sidebar-info'>
                                    <div className='contact-img-gril'>
                                        <img src={bgcoverimh1} className='w-full' />
                                    </div>
                                    <div className='contact-txt-info relative text-center xl:px-10 xl:pb-10 max-xl:px-5 max-xl:pb-5 mt-[-80px]'>
                                        <div className='icon-contact-info'>
                                            <img src={chaticon} className='w-15 h-15 m-auto'/>
                                        </div>
                                        <h4 className='mb-3 mt-4 text-white font-medium'>Do you need any help?</h4>
                                        <p className='font-medium text-white'>+91 75081 00021</p>
                                        <p className='font-medium text-white'>info@vpventuresindia.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* Download Info Sidebar */}
                            <div className='box-shodow-info xl:px-9 xl:py-10 max-xl:px-5 max-xl:py-5 rounded-md shadow-[0_3px_10px_5px_rgba(0,0,0,0.1)] xl:mb-10 max-xl:mb-5'>
                                <div className='title-sidebar mb-5 pb-5'>
                                    <h4>Download</h4>
                                    <hr class="green-hr-line" />
                                </div>
                                <div className='download-info flex gap-4 mb-4'>
                                    <div className='download-pdf-icon'>
                                        <img src={pdficon1} className='w-full' />    
                                    </div>
                                    <div className='download-txt-info'>
                                        <h5 className='text-lg font-medium'>Download our Brochures</h5>
                                        <p><Link
                                        className="flex items-center gap-2 cursor-pointer text-[#0B7132] font-medium"
                                        to={brocher}
                                        download="myEV_Point"
                                        target="_blank"
                                        rel="noopener noreferrer"


                                      >Download</Link></p>
                                    </div>
                                </div>
                                {/* <div className='download-info flex gap-4'>
                                    <div className='download-pdf-icon'>
                                        <img src={pdficon2} className='w-full' />    
                                    </div>
                                    <div className='download-txt-info'>
                                        <h5 className='text-lg font-medium'>Our company details</h5>
                                        <p><a href="#" className='text-[#0B7132] font-medium'>Download</a></p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    {/* Right Side Bar Info */}
                    <div className='md:w-3/4 relative mb-5 max-md:order-1'>
                        {/* Single Services Content */}
                        <div className='single-service-right-sidebar'>
                            <h2 className='mb-4'>Charging Stations Will Provide AC Power</h2>
                            <p className='mb-4'>Elevate your electric vehicle fleet's charging experience with our premium AC Charger Service. Offering customized solutions tailored to your specific needs, our advanced technology ensures optimal charging efficiency, contributing to extended battery life. Our seamless integration process, coupled with 24/7 technical support, guarantees minimal disruptions and continuous operation. With remote monitoring capabilities and scalability to accommodate your growing fleet, our AC Charger Service is the strategic choice for a sustainable and efficient EV charging infrastructure. Contact us today to revolutionize your electric fleet's performance.</p>
                            {/* <p className='mb-4'>Duis viverra quis diam quis porta. Cras eget ullamcorper augue. Nulla suscipit eleifend diam nec faucibus. Cras aliquet accumsan mi non condimentum. Sed eu tristique tortor. Vestibulum congue sodales sem a aliquam. Mauris tristique sollicitudin dolor. Aliquam nec mauris quis nibh commodo condimentum. Curabitur malesuada erat ut elementum iaculis.</p> */}
                            <div className="text-center py-4">
                                <img src={singleservicefullimg} className='w-full' />
                            </div>
                        </div>
                        
                        {/* Chargers Services Content */}
                        <div className='chargers-content-info'>
                            <Chargers />
                        </div>
                    </div>
                </div>
            </div>
        </div>   

            {/* <div className='container mx-auto my-12 sm:my-20 px-4'>
                <div className="xl:mb-2">
                    <h2 className="text-center text-2xl text-black font-semibold md:text-3xl lg:text-5xl mb-10 md:mb-0">Charging Stations Will Provide {(serviceDetails?.type)?.slice(0, 2)?.toUpperCase()} Power</h2>
                    <div className='flex lg:flex-row w-11/12 justify-between mx-auto flex-col'>
                        <div className="py-0 md:py-8 lg:py-12 w-11/12 mx-auto  lg:mx-0 lg:w-5/12 xl:w-6/12">
                            <p className="mt-0 lg:mt-7 text-xl font-normal text-[#000] text-left">
                                {serviceDetails?.desc1}
                            </p>
                            <p className="mt-7 text-xl font-normal text-[#000] text-left">
                                {serviceDetails?.desc2}
                            </p>
                        </div>
                        <div className="py-12 w-11/12 mx-auto lg:w-6/12 xl:w-5/12  lg:mx-0 items-center my-auto">
                            <img src={serviceDetails?.image} className='rounded-2xl lg:w-full' />
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

const servicesList = [
    {
        type: "ac_charger_services",
        title: 'AC Charger Service',
        desc1: 'At My EV Point, we proudly introduce our cutting-edge AC Charging Stations, representing the epitome of efficient and sustainable electric vehicle charging. Our commitment to revolutionizing the charging experience is evident in the strategic placement and advanced features of our AC stations, tailored to meet the diverse needs of electric vehicle enthusiasts.',
        desc2: "Our commitment to your convenience is reflected in the strategic placement of our AC Charging Stations. Whether you find yourself in urban centers, suburban areas, or along highways, our stations are strategically positioned to enhance accessibility, providing you with the confidence to explore your electric journey without limitations.",

        image: ImageIcons.services1,
    },
    {
        type: "dc_charger_services",
        title: 'DC Charger Service',
        desc1: 'At My EV Point, we stand at the forefront of the electric mobility revolution, committed to providing unparalleled charging solutions. Our DC Power Charging Stations represent the pinnacle of innovation, addressing the evolving needs of electric vehicle users with a focus on delivering fast and efficient charging experiences.',
        desc2: "By choosing My EV Point's DC Power Charging Stations, you contribute to a sustainable and eco-friendly future. Join us in the movement towards reducing carbon footprints and embracing electric mobility as a powerful force for positive environmental impact.",
        image: ImageIcons.services2,
    },

];

export default ServicesDetail
