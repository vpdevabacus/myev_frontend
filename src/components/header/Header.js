import React, { useState } from 'react'
import ImageIcons from '../../common/ImageIcons'
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaRegUserCircle, FaYoutube } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { NavLink } from 'react-router-dom';


const Header = () => {

    const [show, setshow] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMenu = () => {
        setshow(s => !s)
    }

    const toggleDropdown = () => {
        setDropdownOpen(s => !s);
    };



    return (
        <>
            <header className="header w-full text-[#fff] bg-white body-font fixed z-50">

                <header className="header w-full text-[#fff] bg-white body-font border-b border-b-[#828282] ">
                    <div className="w-full flex flex-row items-start mx-auto sm:flex-row bg-black px-8 py-1 justify-between">
                        <div className="flex items-center font-medium md:mb-0">
                            <FaRegEnvelope className='h-5 w-6' />
                            <span className="ml-2 font-normal text-[#fff] text-lg hidden sm:hidden md:block " >mailto:info@vpventuresindia.com</span>
                            <span className='mx-4 hidden md:block'>|</span>
                            <MdPhone className='h-5 w-6 ml-3 md:ml-0' />
                            <span className="ml-2 font-normal text-[#fff] text-lg hidden sm:hidden md:block " >+91 75081 00021</span>
                        </div>

                        <div className="items-center flex md:mb-0 mt-1">
                            <FaFacebookF className='h-5 w-6 mr-2' />
                            <FaTwitter className='h-5 w-6 mr-2' />
                            <FaInstagram className='h-5 w-6 mr-2' />
                            <FaYoutube className='h-5 w-6' />
                        </div>
                    </div>

                </header>
                <div className="w-full flex items-start p-6 mx-auto flex-row sm:flex-row justify-between ">
                    <div>
                        <a className="flex items-center font-medium text-gray-900 title-font ">
                            <img src={ImageIcons.myEV_logo} className='h-12 w-24 lg:h-20 lg:w-44' />
                        </a>
                    </div>
                    <div className='flex flex-row mt-2'>
                        <div className="md:block sm:hidden hidden flex items-center justify-center text-base md:ml-auto md:my-auto">
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#0B7132] mr-10 font-normal text-lg lg:text-xl" : "mr-10 font-normal text-lg lg:text-xl text-[#000]"}>Home</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#0B7132] mr-10 font-normal text-lg lg:text-xl" : "mr-10 font-normal text-lg lg:text-xl text-[#000]"}>About Us</NavLink>
                            <NavLink to="/services" className={({ isActive }) => isActive ? "relative text-[#0B7132]  font-normal text-lg lg:text-xl" : "relative font-normal text-lg lg:text-xl text-[#000]"}>Our Services
                            </NavLink>
                            {dropdownOpen === false ?
                                <svg onClick={toggleDropdown} fill="currentColor" viewBox="0 0 20 20" class="inline w-7 h-7 mt-2 ml-1  transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" color='#000'></path></svg>
                                :
                                <svg onClick={toggleDropdown} fill="currentColor" viewBox="0 0 20 20" class="inline w-7 h-7 mt-2 ml-1  transition-transform duration-200 transform rotate-180 md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" color='#0B7132'></path></svg>
                            }
                            {dropdownOpen && (
                                <div className="absolute top-40 py-2 px-4  bg-rose-400 rounded-md shadow-xl z-20 right-80 border border-2 border-t-black">
                                    <a href="#" className="block px-2 py-2 text-xl font-normal text-black hover:bg-blue-500 hover:text-white">
                                        AC Charger Service                                    </a>
                                    <a href="#" className="block px-2 py-2 text-xl font-normal text-black hover:bg-blue-500 hover:text-white">
                                        DC Charger Service                                    </a>
                                    <a href="#" className="block px-2 py-2 text-xl font-normal text-black hover:bg-blue-500 hover:text-white">
                                        Home Charger                                    </a>
                                    <a href="#" className="block px-2 py-2 text-xl font-normal text-black hover:bg-blue-500 hover:text-white">
                                        Support EV Brand
                                    </a>
                                    <a href="#" className="block px-2 py-2 text-xl font-normal text-black hover:bg-blue-500 hover:text-white">
                                        Commercial Systems                                    </a>
                                    <a href="#" className="block px-2 py-2 text-xl font-normal text-black hover:bg-blue-500 hover:text-white">
                                        Public Stations                                   </a>
                                </div>
                            )}
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#0B7132] mr-10 font-normal text-lg lg:text-xl ml-10" : "mr-10 font-normal text-lg lg:text-xl text-[#000] ml-10"}>Contact Us</NavLink>

                        </div>
                        <div class="md:hidden ml-10 mt-1 " onClick={handleMenu}>
                            <button type="button" class="block text-gray-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none">
                                <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                    <path class="hidden" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
                                    <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                                </svg>
                            </button>
                        </div>

                        {show == true &&
                            <div
                                className="absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-20 origin-top-right text-black md:hidden transition-all duration-300 ease-out"
                                style={{
                                    transformOrigin: 'top right',
                                    transform: show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-28 scale-90 pointer-events-none',
                                }}
                            >
                                <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <a className="flex flex-row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">

                                            <div className="ml-3">
                                                <NavLink to="/" className={({ isActive }) => isActive ? "text-[#0B7132] mr-10 font-normal text-lg lg:text-xl" : "mr-10 font-normal text-lg lg:text-xl text-[#000]"}>Home</NavLink>
                                            </div>
                                        </a>

                                        <a className="flex flex-row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">

                                            <div className="ml-3">
                                                <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#0B7132] mr-10 font-normal text-lg lg:text-xl" : "mr-10 font-normal text-lg lg:text-xl text-[#000]"}>About Us</NavLink>
                                            </div>
                                        </a>

                                        <a className="flex flex-row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">

                                            <div className="ml-3">
                                                <NavLink to="/services" className={({ isActive }) => isActive ? "text-[#0B7132] mr-10 font-normal text-lg lg:text-xl" : "mr-10 font-normal text-lg lg:text-xl text-[#000]"}>Our Services</NavLink>
                                            </div>
                                        </a>
                                        <a className="flex flex-row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">

                                            <div className="ml-3">
                                                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#0B7132] mr-10 font-normal text-lg lg:text-xl" : "mr-10 font-normal text-lg lg:text-xl text-[#000]"}>Contact Us</NavLink>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        }

                        <button className=" md:my-auto text-white bg-[#0B7132] rounded-lg ml-10 px-2 py-1 lg:px-6 lg:py-3 inline-flex space-x-1 items-center">
                            <span>
                                <FaRegUserCircle className='h-4 w-4 lg:h-6 lg:w-6 ' />
                            </span>
                            <span className="font-medium text-base lg:text-lg">Login</span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header




















































































































































































































































































































































































































































































































































































































































































































































































































































































































