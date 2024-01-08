import React, { useState } from 'react';
import "./Footer.css";
import ImageIcons from '../../common/ImageIcons'
import { BiLogoFacebook } from "react-icons/bi";
import { FaRegEnvelope, FaTwitter, FaYoutube, FaPinterest, FaLinkedinIn } from "react-icons/fa";
import { MdLocationPin, MdPhone, MdArrowUpward } from "react-icons/md";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { windowScroll } from '../../helpers/ScrollToTop';
import { windowScrollTop } from '../../helpers/ScrollToTop';
import brocher from "../../assets/utils/myEV_borcher.pdf"
import footerleftbg from "../../assets/Images/footer-left-bg.png";
import footerrightbg from "../../assets/Images/footer-right-bg.png";
import useScrollPosition from '../shared/useScrollPosition';


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

    const scrollPosition = useScrollPosition();

    const location = useLocation();
    const { pathname } = location;

    const currentYear = new Date().getFullYear();

    const phoneNumber = '+919592595975';
    const phoneLink = `tel:${phoneNumber}`;

    const callPhoneNumber = () => {
        window.location.href = phoneLink;
    };


    const email = 'info@vpventuresindia.com';
    const mailtoLink = `mailto:${email}`;

    const openMail = () => {
        window.open(mailtoLink);
    };

    return (
        <>
            {/* Footer Section Start */}
            <footer className="w-full bg-[#212226]">
                <div className="footer-sec-info">
                    <div className="footer-top-info max-sm:pb-6 sm:pb-2 md:pb-2 lg:pb-20" style={{ backgroundImage: `url(${footerleftbg}), url(${footerrightbg})` }}>
                        <div className="sm:container lg:container m-auto">
                            <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-4 px-2 md:1 max-lg:gap-3 lg:gap-2 xl:gap-4">
                                <div className="footer-col-first max-md:mb-6 max-lg:mb-8">
                                    <Link to='/' onClick={windowScrollTop}>
                                        <div className='site-logo-footer max-lg:mb-3 lg:mb-5'>
                                            <img src={ImageIcons.footer_myEV_logo} className='footer-logo-size lg:h-20 lg:w-44' />
                                        </div>
                                    </Link>
                                    <div className='max-lg:mb-5 lg:mb-9'>
                                        <p className='text-white'>It’s your chance to own an EV Charging Station (Without having to manage it)</p>
                                    </div>
                                    <div className="social-links-info flex">
                                        <div className="socila-link-info flex justify-center items-center w-10 h-10 mr-2 rounded-full hover:scale-[1.1] hover:bg-[#0B7132]">
                                            <Link to='https://www.facebook.com/myevpoint' target="_blank"><BiLogoFacebook className='h-10 w-10 p-2 text-white' /></Link>
                                        </div>
                                        <div className="socila-link-info flex justify-center items-center w-10 h-10 mr-2 rounded-full hover:scale-[1.1] hover:bg-[#0B7132]">
                                            <Link to='https://twitter.com/myevpoint' target="_blank"><FaTwitter className='h-10 w-10 p-3 text-white' /></Link>
                                        </div>
                                        <div className="socila-link-info flex justify-center items-center w-10 h-10 mr-2 rounded-full hover:scale-[1.1] hover:bg-[#0B7132]">
                                            <Link to='https://in.pinterest.com/myevpoint/' target="_blank"><FaPinterest className='h-10 w-10 p-3 text-white' /></Link>
                                        </div>
                                        <div className="socila-link-info flex justify-center items-center w-10 h-10 mr-2 rounded-full hover:scale-[1.1] hover:bg-[#0B7132]">
                                            <Link to='https://www.youtube.com/channel/UCI3qj7D2eG-hqQ-HP948QWw ' target="_blank"><FaYoutube className='h-12 w-12 p-3 text-white' /></Link>
                                        </div>
                                        <div className="socila-link-info flex justify-center items-center w-10 h-10 mr-2 rounded-full hover:scale-[1.1] hover:bg-[#0B7132]">
                                            <Link to='https://www.linkedin.com/company/my-ev-point/' target="_blank"><FaLinkedinIn className='h-12 w-12 p-3 text-white' /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-col-second max-md:mb-6 max-lg:mb-8">
                                    <div className='max-lg:mb-3 lg:mb-10 pb-2'>
                                        <h4 className='text-white font-medium mb-2'>Our Services</h4>
                                        <hr className='green-hr-line' />
                                    </div>
                                    <ul className='footer-links-info'>
                                        <li className='mb-2'>
                                            <NavLink to='/services/AC' className="flex items-center gap-2 cursor-pointer" onClick={windowScroll}>
                                                <img src={ImageIcons.Polygon} className='h-4 w-4' />
                                                <p className={`${pathname === '/services/AC' ? "text-[#0B7132] font-semibold" : "text-white hover:text-[#0B7132]"}`}>AC Charger Services</p>
                                            </NavLink>
                                        </li>
                                        <li className='mb-2'>
                                            <Link to='/services/DC' className="flex items-center gap-2 cursor-pointer" onClick={windowScroll}>
                                                <img src={ImageIcons.Polygon} className='h-4 w-4' />
                                                <p className={`${pathname === '/services/DC' ? "text-[#0B7132] font-semibold" : "text-white hover:text-[#0B7132]"}`}>DC Charger Services</p>
                                            </Link>
                                        </li>
                                        {/* <li className='mb-2'>
                                            <Link to='/services/dc_charger_services' className="flex items-center gap-2 cursor-pointer">
                                                <img src={ImageIcons.Polygon} className='h-4 w-4' />
                                                <p className="text-white">EV Drivers Services</p>
                                            </Link>
                                        </li>
                                        <li className='mb-2'>
                                            <Link to='/services/dc_charger_services' className="flex items-center gap-2 cursor-pointer">
                                                <img src={ImageIcons.Polygon} className='h-4 w-4' />
                                                <p className="text-white">Charge Point Services</p>
                                            </Link>
                                        </li>
                                        <li className='mb-2'>
                                            <Link to='/services/dc_charger_services' className="flex items-center gap-2 cursor-pointer">
                                                <img src={ImageIcons.Polygon} className='h-4 w-4' />
                                                <p className="text-white">Home Charging</p>
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="footer-col-three max-md:mb-6 max-lg:mb-8">
                                    <div className='max-lg:mb-3 lg:mb-10 pb-2'>
                                        <h4 className='text-white font-medium mb-2'>Useful Links</h4>
                                        <hr className='green-hr-line' />
                                    </div>
                                    <ul className='footer-links-info list-none'>
                                        <li className='mb-2'>
                                            <Link to='/privacy-policy' className="flex items-center gap-2 cursor-pointer" onClick={windowScroll}>
                                                <img src={ImageIcons.Polygon} className='h-4 w-4' />
                                                <p className={`${pathname === '/privacy-policy' ? "text-[#0B7132] font-semibold" : "text-white hover:text-[#0B7132]"}`}>Privacy Policy</p>
                                            </Link>
                                        </li>
                                        <li className='mb-2'>
                                            <Link to='/terms&conditions' className="flex items-center gap-2 cursor-pointer" onClick={windowScroll}>
                                                <img src={ImageIcons.Polygon} className='h-4 w-4' />
                                                <p className={`${pathname === '/terms&conditions' ? "text-[#0B7132] font-semibold  " : "text-white hover:text-[#0B7132]"}`}>Terms & Conditions</p>
                                            </Link>
                                        </li>
                                        <li className='mb-2'>

                                            <Link to='/refund-policy' className="flex items-center gap-2 cursor-pointer " onClick={windowScroll}>
                                                <img src={ImageIcons.Polygon} className='h-4 w-4' />
                                                <p className={`${pathname === '/refund-policy' ? "text-[#0B7132] font-semibold  " : "text-white hover:text-[#0B7132]"}`}>Refund Policy</p>
                                            </Link>
                                        </li>
                                        <li className='mb-2'>
                                            <Link to='/cancellation-policy' className="flex items-center gap-2 cursor-pointer " onClick={windowScroll}>
                                                <img src={ImageIcons.Polygon} className='h-4 w-4' />
                                                <p className={`${pathname === '/cancellation-policy' ? "text-[#0B7132] font-semibold  " : "text-white hover:text-[#0B7132]"}`}>Cancellation Policy</p>
                                            </Link>
                                        </li>
                                        <li className='mb-2'>
                                            <Link
                                                className="flex items-center gap-2 cursor-pointer "
                                                to={brocher}
                                                download="myEV_Point"
                                                target="_blank"
                                                rel="noopener noreferrer"

                                            >
                                                <img src={ImageIcons.Polygon} className='h-4 w-4' />
                                                <p className="text-white hover:text-[#0B7132]">Download our Brochure</p>
                                            </Link>
                                        </li>
                                        {/* <li className='mb-2'>
                                            <Link to='#' className="flex items-center gap-2 cursor-pointer">
                                                <img src={ImageIcons.Polygon} className='h-4 w-4' />
                                                <p className="text-white">Charge Point Services</p>
                                            </Link>
                                        </li>
                                        <li className='mb-2'>
                                            <Link to='#' className="flex items-center gap-2 cursor-pointer">
                                                <img src={ImageIcons.Polygon} className='h-4 w-4' />
                                                <p className="text-white">24 Hour Support</p>
                                            </Link>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="footer-col-four max-md:mb-6 max-lg:mb-8">
                                    <div className='max-lg:mb-3 lg:mb-10 pb-2'>
                                        <h4 className='text-white font-medium mb-2'>Contact Info</h4>
                                        <hr className='green-hr-line' />
                                    </div>
                                    <ul className="list-none">
                                        <li className="flex mb-4">
                                            <MdLocationPin className='max-md:h-7 max-md:w-7 max-md:me-1 md:h-10 md:w-10 md:me-2 xl:h-10 xl:w-10 xl:me-2 text-[#0B7132]' />
                                            <p className="text-white">Plot No. B-70, Phase 7,
                                                SAS Nagar, Punjab 160055</p>
                                        </li>
                                        <li className="flex mb-4">
                                            <FaRegEnvelope className='max-md:h-5 max-md:w-5 max-md:me-3 md:h-7 md:w-7 md:me-3 xl:h-6 xl:w-6 xl:me-4 text-[#0B7132] ' />
                                            <p onClick={openMail} className="text-white cursor-pointer">{email}</p>
                                        </li>
                                        <li className="flex">
                                            <MdPhone className='max-md:h-6 max-md:w-6 max-md:me-1 md:h-6 md:w-6 md:me-2 xl:h-7 xl:w-7 xl:me-3 text-[#0B7132] ' />
                                            <p className="text-white cursor-pointer" onClick={callPhoneNumber} >{phoneNumber}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Copyright Content */}
                    <div className="footer-copyright-info bg-[#212226]">
                        <div className="container px-2 max-md:py-4 md:py-6 mx-auto">
                            <p className="text-white text-center">Copyright {currentYear}  by VP Ventures. All Right Reserved.</p>
                        </div>
                    </div>
                    {scrollPosition > 600 && (
                        <button
                            className='itms-center fixed group md:right-[50px] md:bottom-[50px] duration-500 right-[15px] bottom-[15px] bg-[#F1F8E8] hover:bg-[#0B7132] w-[50px] h-[50px] shadow-md rounded-[10px] shadow-[#000]'
                            onClick={windowScrollTop}
                        >
                            <MdArrowUpward className="text-[#0B7132] group-hover:text-white mx-auto text-3xl" />
                        </button>
                    )}
                </div>
            </footer>
            {/* Footer Section End */}
        </>
    )
}

export default Footer;