import React, { useState, useRef, useEffect } from 'react'
import ImageIcons from '../../common/ImageIcons'
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaLinkedinIn } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { NavLink, Link } from 'react-router-dom';


const Header = () => {

    const [show, setshow] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMenu = () => {
        setshow(s => !s)
    }

    const toggleDropdown = () => {
        setDropdownOpen(s => !s);
    };

    const closeDropdown = () => {
        setDropdownOpen(false)
    }

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

    const dropdownRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <>
            <header>
                <div className="w-full text-[#fff] bg-white body-font fixed z-50"> 
                <div className="w-full bg-black">
                    <div className="container top-bar-header flex flex-row items-start mx-auto sm:flex-row justify-between">
                        <div className="flex">
                            <div className='flex items-center'>
                                <FaRegEnvelope onClick={openMail} className='h-5 w-6 cursor-pointer' />
                                <span onClick={openMail} className="hidden md:block ml-2 font-size-16 text-[#fff] cursor-pointer" >{email}</span>
                            </div>
                            <div className='flex items-center'>
                                <span className='hidden md:block clr-ddd mx-4'>|</span>
                            </div>
                            <div className='flex items-center'>
                                <MdPhone onClick={openMail} className='h-5 w-6 cursor-pointer' />
                                <span onClick={callPhoneNumber} className="hidden md:block ml-2 font-size-16 text-[#fff] cursor-pointer" >{phoneNumber}</span>
                            </div>
                        </div>
                        <div className="items-center flex md:mb-0 mt-1 ">
                            <Link to='https://www.facebook.com/myevpoint'><FaFacebookF className='h-5 w-6 mr-2 cursor-pointer hover:text-[#0B7132]' /></Link>
                            <Link to='https://twitter.com/myevpoint'><FaTwitter className='h-5 w-6 mr-2 cursor-pointer hover:text-[#0B7132]' /></Link>
                            <Link to='https://in.pinterest.com/myevpoint/'><FaPinterest className='h-5 w-6 mr-2 cursor-pointer hover:text-[#0B7132]' /></Link>
                            <Link to='https://www.youtube.com/channel/UCI3qj7D2eG-hqQ-HP948QWw'><FaYoutube className='h-5 w-6 mr-2 cursor-pointer hover:text-[#0B7132]' /></Link>
                            <Link to='https://www.linkedin.com/company/my-ev-point/'><FaLinkedinIn className='h-5 w-6  cursor-pointer hover:text-[#0B7132]' /></Link>
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-start p-6 mx-auto flex-row sm:flex-row justify-between ">
                    <div>
                        <NavLink to="/" className="flex items-center font-medium text-gray-900 title-font">
                            <img src={ImageIcons.myEV_logo} className='h-12 w-24 lg:h-20 lg:w-44 cursor-pointer' />
                        </NavLink>

                    </div>
                    <div className='flex flex-row my-auto'>
                        <div className="md:block sm:hidden hidden flex items-center justify-center text-base md:ml-auto md:my-auto">
                            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#0B7132] mr-10 font-normal text-lg lg:text-xl" : "mr-10 font-normal text-lg lg:text-xl text-[#000] hover:text-[#0B7132]"}>Home</NavLink>
                            <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#0B7132] mr-10 font-normal text-lg lg:text-xl" : "mr-10 font-normal text-lg lg:text-xl text-[#000] hover:text-[#0B7132]"}>About Us</NavLink>
                            <NavLink to="/services" className={({ isActive }) => isActive ? "relative text-[#0B7132]  font-normal text-lg lg:text-xl" : "relative font-normal text-lg lg:text-xl text-[#000] hover:text-[#0B7132]"}>Our Services
                            </NavLink>
                            {dropdownOpen === false ?
                                <svg onClick={toggleDropdown} fill="currentColor" viewBox="0 0 20 20" class="inline w-7 h-7 mt-2 ml-1  transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" color='#000'></path></svg>
                                :
                                <svg onClick={toggleDropdown} fill="currentColor" viewBox="0 0 20 20" class="inline w-7 h-7 mt-2 ml-1  transition-transform duration-200 transform rotate-180 md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" color='#0B7132'></path></svg>
                            }
                            {dropdownOpen && (
                                <div
                                    ref={dropdownRef}
                                    className="absolute md:top-36 lg:top-40 bg-white rounded-md shadow-xl z-20 right-40 border border-2 border-t-[#0B7132]">
                                    <Link to='/services/ac_charger_services' className="block px-2 py-2 text-xl font-normal text-black hover:bg-[#0B7132] hover:text-white" onClick={closeDropdown} >AC Charger Service </Link>
                                    <div className='w-full bg-[#DDDDDD] h-px'>
                                    </div>
                                    <Link to='/services/dc_charger_services' className="block px-2 py-2 text-xl font-normal text-black hover:bg-[#0B7132] hover:text-white" onClick={closeDropdown} >DC Charger Service</Link>
                                    <div className='w-full bg-[#DDDDDD] h-px'>
                                    </div>

                                    {/* <Link href="#" className="block px-2 py-2 text-xl font-normal text-black hover:bg-[#0B7132] hover:text-white">Home Charger</Link>
                                    <div className='w-full bg-[#DDDDDD] h-px'>
                                    </div>
                                    <Link href="#" className="block px-2 py-2 text-xl font-normal text-black hover:bg-[#0B7132] hover:text-white">Support EV Brand
                                    </Link>
                                    <div className='w-full bg-[#DDDDDD] h-px'>
                                    </div>
                                    <Link href="#" className="block px-2 py-2 text-xl font-normal text-black hover:bg-[#0B7132] hover:text-white">Commercial Systems</Link>
                                    <div className='w-full bg-[#DDDDDD] h-px'>
                                    </div>
                                    <Link href="#" className="block px-2 py-2 text-xl font-normal text-black hover:bg-[#0B7132] hover:text-white">Public Stations</Link> */}

                                </div>
                            )}
                            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#0B7132] mr-10 font-normal text-lg lg:text-xl ml-10" : "mr-10 font-normal text-lg lg:text-xl text-[#000] hover:text-[#0B7132] ml-10"}>Contact Us</NavLink>

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
                                className="absolute right-0 w-full  md:max-w-screen-sm md:w-screen mt-16 origin-top-right text-black md:hidden transition-all duration-300 ease-out"
                                style={{
                                    transformOrigin: 'top right',
                                    transform: show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-28 scale-90 pointer-events-none',
                                }}
                            >
                                <div className=" bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                                        <div className="flex flex-row items-start rounded-lg  w-full" >

                                            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#fff]  font-normal text-lg lg:text-xl w-full bg-[#0B7132]" : " font-normal text-lg lg:text-xl text-[#000] w-full bg-white"}><div className=" w-full py-3 pl-6">Home</div></NavLink>

                                        </div>

                                        <div className="flex flex-row items-start rounded-lg  w-full" >

                                            <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#fff]  font-normal text-lg lg:text-xl w-full bg-[#0B7132]" : " font-normal text-lg lg:text-xl text-[#000] w-full bg-white"}><div className=" w-full py-3 pl-6">About Us</div></NavLink>

                                        </div>

                                        <div className="flex flex-row items-start rounded-lg  w-full" >

                                            <NavLink to="/services" className={({ isActive }) => isActive ? "text-[#fff]  font-normal text-lg lg:text-xl w-full bg-[#0B7132]" : " font-normal text-lg lg:text-xl text-[#000] w-full bg-white"}><div className=" w-full py-3 pl-6">Our Services</div></NavLink>

                                        </div>
                                        <div className="flex flex-row items-start rounded-lg  w-full" >

                                            <NavLink to="/contact" className={({ isActive }) => isActive ? "text-[#fff]  font-normal text-lg lg:text-xl w-full bg-[#0B7132]" : " font-normal text-lg lg:text-xl text-[#000] w-full bg-white"}><div className=" w-full py-3 pl-6">Contact Us</div></NavLink>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        }

                        {/* <button className=" md:my-auto text-white bg-[#0B7132] hover:bg-white rounded-lg ml-10 px-2 py-1 lg:px-6 lg:py-3 inline-flex space-x-1 items-center">
                            <span>
                                <FaRegUserCircle className='h-4 w-4 lg:h-6 lg:w-6 ' />
                            </span>
                            <span className="font-medium text-base lg:text-lg">Login</span>
                        </button> */}
                    </div>
                </div>

                </div>
            </header>
        </>
    )
}

export default Header;




















































































































































































































































































































































































































































































































































































































































































































































































































































































































