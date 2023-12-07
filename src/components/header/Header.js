import React from 'react'
import ImageIcons from '../../common/ImageIcons'
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaRegUserCircle, FaYoutube } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <>
            <header className="header w-full text-[#fff] bg-white body-font fixed z-50 border-b border-b-[#828282]">
                <div className="w-full flex flex-col items-start mx-auto md:flex-row bg-black px-8 py-1 justify-between">
                    <div className="flex items-center font-medium md:mb-0">
                        <FaRegEnvelope className='h-5 w-6' />
                        <span className="ml-2 font-normal text-[#fff] text-lg" >mailto:info@vpventuresindia.com</span>
                        <span className='mx-4'>|</span>
                        <MdPhone className='h-5 w-6' />
                        <span className="ml-2 font-normal text-[#fff] text-lg" >+91 75081 00021</span>
                    </div>

                    <div className="items-center flex md:mb-0 mt-1">
                        <FaFacebookF className='h-5 w-6 mr-2' />
                        <FaTwitter className='h-5 w-6 mr-2' />
                        <FaInstagram className='h-5 w-6 mr-2' />
                        <FaYoutube className='h-5 w-6' />
                    </div>
                </div>
                <div className="w-full flex flex-col items-start p-6 mx-auto md:flex-row">
                    <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                        <img src={ImageIcons.myEV_logo} className='h-20 w-44' />
                    </a>
                    <div className="flex items-center justify-center text-base md:ml-auto md:my-auto">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-[#0B7132] mr-10 font-normal text-xl" : "mr-10 font-normal text-xl text-[#000]"}>Home</NavLink>
                        <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#0B7132] mr-10 font-normal text-xl" : "mr-10 font-normal text-xl text-[#000]"}>About Us</NavLink>
                        <NavLink to="/services" className={({ isActive }) => isActive ? "text-[#0B7132] mr-10 font-normal text-xl" : "mr-10 font-normal text-xl text-[#000]"}>Our Services</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#0B7132] mr-10 font-normal text-xl" : "mr-10 font-normal text-xl text-[#000]"}>Contact Us</NavLink>

                    </div>
                    <button className="  md:my-auto text-white  bg-[#0B7132] rounded-lg ml-10 px-6 py-3 inline-flex space-x-1 items-center">
                        <span>
                            <FaRegUserCircle className='h-6 w-6 ' />
                        </span>
                        <span className="font-medium text-lg">Login</span>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
