import React from 'react'
import ImageIcons from '../../common/ImageIcons'
import { FaRegEnvelope, FaFacebookF } from "react-icons/fa";
import { MdPhone } from "react-icons/md";


const Header = () => {
    return (
        <>
            <header className="w-full text-[#fff] bg-white shadow-sm body-font">
                <div className="w-full flex flex-col items-start mx-auto md:flex-row bg-black px-8 py-2">
                    <a className="flex items-center mb-4 font-medium title-font md:mb-0">
                        <FaRegEnvelope className='h-5 w-6' />
                        <span className="ml-2 font-normal text-[#fff] text-lg" >info@vpventuresindia.com</span>
                        <span className='mx-4'>|</span>
                        <MdPhone className='h-5 w-6' />
                        <span className="ml-2 font-normal text-[#fff] text-lg" >+91 75081 00021</span>
                    </a>
                    <nav className="flex items-center justify-center text-base md:ml-auto">
                        <a href="#_" className="mr-10 font-normal text-[#000] text-xl">Home</a>
                        <a href="#_" className="mr-10 font-normal text-[#000] text-xl">About Us</a>
                        <a href="#_" className="mr-10 font-normal text-[#000] text-xl">Our Services</a>
                        <a href="#_" className="font-normal text-[#000] text-xl">Contact Us</a>
                    </nav>
                    <div className="items-center h-full pl-6 ml-6 border-l border-gray-200 flex">
                        <FaFacebookF className='h-5 w-6' />
                        <FaFacebookF className='h-5 w-6' />
                    </div>
                </div>
                <div className="container flex flex-col items-start p-6 mx-auto md:flex-row">
                    <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
                        <img src={ImageIcons.myEV_logo} className='h-20 w-44' />
                    </a>
                    <nav className="flex items-center justify-center text-base md:ml-auto">
                        <a href="#_" className="mr-10 font-normal text-[#000] text-xl">Home</a>
                        <a href="#_" className="mr-10 font-normal text-[#000] text-xl">About Us</a>
                        <a href="#_" className="mr-10 font-normal text-[#000] text-xl">Our Services</a>
                        <a href="#_" className="font-normal text-[#000] text-xl">Contact Us</a>
                    </nav>
                    <div className="items-center h-full pl-6 ml-6 border-l border-gray-200">
                        <a href="#_" className="mr-5 font-medium hover:text-gray-900">Login</a>
                        <a href="#_"
                            className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-teal-500 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease">
                            Sign Up
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
