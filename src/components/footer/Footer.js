import React, { useState } from 'react';
import ImageIcons from '../../common/ImageIcons'
import { BiLogoFacebook } from "react-icons/bi";
import { FaRegEnvelope, FaTwitter, FaYoutube, FaPinterest, FaLinkedinIn } from "react-icons/fa";
import { MdLocationPin, MdPhone } from "react-icons/md";
import { Link } from 'react-router-dom';
import brocher from "../../assets/utils/myEV_borcher.pdf"

import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
).toString();

const backgroundImagePath = ImageIcons.footer_left_bg;

const style = {
    backgroundImage: `url('${backgroundImagePath}')`,
};





const Footer = () => {

    const currentYear = new Date().getFullYear();

    // const handlePdfShow = () => {

    //     window.open(`http://localhost:3000/myEV_Point_brocher`, '_blank', 'noreferrer');


    // };

    return (
        <>


            {/* <div className=" bg-[#0B7132] px-6 py-12  ">
                <div className="container mx-auto  ">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-6 sm:gap-y-10 md:grid-cols-6 flex items-center  ">
                        <div className="sm:col-span-2 flex text-center">
                            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl dark:text-white ">Find Our near Branches</h1>
                            <img src={ImageIcons.earth} className='h-10 w-10 ml-2 hidden sm:block' />
                        </div>
                        <div className="sm:col-span-2 text-left sm:text-center ">
                            <h1 className="max-w-lg text-xl  font-semibold tracking-tight text-white xl:text-2xl dark:text-white ">Call Us On</h1>
                            <h1 className="max-w-lg text-xl  font-semibold tracking-tight text-white xl:text-2xl dark:text-white">+91 75081 00021</h1>
                        </div>
                        <div className="sm:col-span-2 flex flex-col text-left sm:flex-row sm:text-end justify-end ">
                            <img src={ImageIcons.clock} className='h-10 w-10 mr-2 hidden sm:block' />
                            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl dark:text-white ">24/7 Emergency Services</h1>
                        </div>
                    </div>
                </div>
            </div> */}


            <footer className="w-full text-gray-700 bg-[#212226] body-font">
                <div
                    className="container flex flex-col flex-wrap px-5 pb-20 pt-12 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
                    <div className="flex-shrink-0 w-80 mx-auto text-center  md:text-left md:mb-10 " >
                        <div className="flex items-center font-medium  title-font">
                            <img src={ImageIcons.footer_myEV_logo} className='h-12 w-24 lg:h-20 lg:w-44 ' />
                        </div>
                        <p className="mt-6 text-lg text-white font-medium  ">It’s your chance to own an EV </p>
                        <p className="mt-1 text-lg text-white font-medium">Charging Station (Without having to manage it)</p>
                        <div className="mt-4 inline-flex justify-center mt-2 sm:ml-auto sm:mt-3 sm:justify-start">
                            <div className="w-12 h-12 mr-2 rounded-full bg-[#4D4E51] px-3 py-3.5 hover:scale-[1.1] hover:bg-[#0B7132]">
                                <Link to='https://www.facebook.com/myevpoint'><BiLogoFacebook className='h-5 w-6 text-white' /></Link>
                            </div>
                            <div className="w-12 h-12 mr-2 rounded-full bg-[#4D4E51] px-3 py-3.5 hover:scale-[1.1] hover:bg-[#0B7132]">
                                <Link to='https://twitter.com/myevpoint'><FaTwitter className='h-5 w-6 text-white' /></Link>

                            </div>
                            <div className="w-12 h-12 mr-2 rounded-full bg-[#4D4E51] px-3 py-3.5 hover:scale-[1.1] hover:bg-[#0B7132]">
                                <Link to='https://in.pinterest.com/myevpoint/'>
                                    <FaPinterest className='h-5 w-6 text-white ' />
                                </Link>

                            </div>
                            <div className="w-12 h-12 mr-2 rounded-full bg-[#4D4E51] px-3 py-3.5 hover:scale-[1.1] hover:bg-[#0B7132]">
                                <Link to='https://www.youtube.com/channel/UCI3qj7D2eG-hqQ-HP948QWw'><FaYoutube className='h-5 w-6 text-white' /></Link>

                            </div>
                            <div className="w-12 h-12 mr-2 rounded-full bg-[#4D4E51] px-3 py-3.5 hover:scale-[1.1] hover:bg-[#0B7132]">
                                <Link to='https://www.linkedin.com/company/my-ev-point/'><FaLinkedinIn className='h-5 w-6 text-white' /></Link>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-grow mt-10 -mb-10  md:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-3  text-2xl font-medium text-white tracking-widest title-font">Our Services</h2>
                            <div className="h-0.5 w-16 bg-[#0B7132]"></div>
                            <nav className="mb-10 list-none mt-12">
                                <Link to='/services/ac_charger_services' className="mt-3 flex ">
                                    <img src={ImageIcons.Polygon} className='h-4 w-4 mr-2 mt-1' />
                                    <p className="text-white cursor-pointer hover:text-gray-500 text-base font-medium tracking-wider">AC Charger Services</p>
                                </Link>
                                <Link to='/services/dc_charger_services' className="mt-3 flex ">
                                    <img src={ImageIcons.Polygon} className='h-4 w-4 mr-2 mt-1' />
                                    <p className="text-white cursor-pointer hover:text-gray-500 text-base font-medium tracking-wider">DC Charger Services</p>
                                </Link>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-3  text-2xl font-medium text-white tracking-widest title-font">Useful Links</h2>
                            <div className="h-0.5 w-16 bg-[#0B7132]"></div>
                            <nav className="mb-10 list-none mt-12">
                                <li className=" flex ">

                                    <Link
                                        className=" flex "
                                        to={brocher}
                                        download="myEV_Point"
                                        target="_blank"
                                        rel="noopener noreferrer"


                                    >
                                        <img src={ImageIcons.Polygon} className='h-4 w-4 mr-2 mt-1' />
                                        <p className="text-white cursor-pointer hover:text-gray-500 text-base font-medium tracking-wider">Download our Brochures</p>
                                    </Link>

                                </li>
                                <Link to='/terms&conditions' className="mt-3 flex ">
                                    <img src={ImageIcons.Polygon} className='h-4 w-4 mr-2 mt-1' />
                                    <p className="text-white cursor-pointer hover:text-gray-500 text-base font-medium tracking-wider">Terms & Conditions</p>
                                </Link>
                                <Link to='/privacy_policy' className="mt-3 flex ">
                                    <img src={ImageIcons.Polygon} className='h-4 w-4 mr-2 mt-1' />
                                    <p className="text-white cursor-pointer hover:text-gray-500 text-base font-medium tracking-wider">Privacy Policy</p>
                                </Link>


                                {/* {showPdf === true &&
                                    <PdfComp pdfFile={showPdf} />
                                } */}
                            </nav>


                        </div>


                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-3  text-2xl font-medium text-white tracking-widest title-font">Contact Info</h2>
                            <div className="h-0.5 w-16 bg-[#0B7132]"></div>
                            <nav className="mb-10 mt-12 list-none">
                                <li className="mt-3 flex ">
                                    <MdLocationPin className='h-10 w-10 mr-3 text-[#0B7132]' />
                                    <p className="text-white  text-base font-medium tracking-wider">Plot No. B-70, Phase 7,

                                        SAS Nagar, Punjab 160055</p>
                                </li>
                                <li className="mt-4 flex ">
                                    <FaRegEnvelope className='h-5 w-5 mr-3 ml-1 text-[#0B7132]' />
                                    <p className="text-white  text-base font-medium tracking-wider">info@vpventuresindia.com</p>
                                </li>
                                <li className="mt-4 flex ">
                                    <MdPhone className='h-6 w-6 mr-3 ml-1 text-[#0B7132]' />
                                    <p className="text-white text-base font-medium tracking-wider">+91 95925-95975</p>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-[#212226] border-t border-[#ffffff] text-center">
                    <div className="container px-5 py-4 mx-auto">
                        <p className="text-sm text-white capitalize xl:text-center">Copyright {currentYear}  by VP Clean Energy Pvt. Ltd. All Right Reserved.</p>
                    </div>
                </div>
            </footer>


        </>
    )

}

export default Footer;