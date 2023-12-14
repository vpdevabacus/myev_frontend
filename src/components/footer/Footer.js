import ImageIcons from '../../common/ImageIcons'
import { BiLogoFacebook } from "react-icons/bi";
import { FaRegEnvelope, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdLocationPin, MdPhone } from "react-icons/md";



const Footer = () => {
    return (
        <>


            <div className=" bg-[#0B7132] px-6 py-12  ">
                <div className="container mx-auto  ">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-6 flex items-center ">
                        <div className="sm:col-span-2 flex text-center">
                            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl dark:text-white ">Find Our near Branches</h1>
                            <img src={ImageIcons.earth} className='h-10 w-10 ml-2' />
                        </div>
                        <div className="sm:col-span-2 text-center ">
                            <h1 className="max-w-lg text-xl  font-semibold tracking-tight text-white xl:text-2xl dark:text-white ">Call US On</h1>
                            <h1 className="max-w-lg text-xl  font-semibold tracking-tight text-white xl:text-2xl dark:text-white">+91 75081 00021</h1>
                        </div>
                        <div className="sm:col-span-2 flex items-center text-center place-items-center">
                            <img src={ImageIcons.clock} className='h-10 w-10 mr-2' />
                            <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl dark:text-white  ">24/7 Emergency Services</h1>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="w-full text-gray-700 bg-[#212226] body-font">
                <div
                    className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    <div className="flex-shrink-0 w-100 mx-auto text-center  md:text-left md:mb-10">
                        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                            <img src={ImageIcons.footer_myEV_logo} className='h-14 w-6/12' />
                        </a>
                        <p className="mt-2 text-base text-white ">It’s your chance to own an EV </p>
                        <p className="mt-1 text-base text-white ">Charging Station (Without having to manage it)</p>
                        <div className="mt-4 inline-flex justify-center mt-2 sm:ml-auto sm:mt-3 sm:justify-start">
                            <div className="w-12 h-12 mr-2 rounded-full bg-[#4D4E51] px-3 py-3.5 ">
                                <BiLogoFacebook className='h-5 w-6 text-white' />
                            </div>
                            <div className="w-12 h-12 mr-2 rounded-full bg-[#4D4E51] px-3 py-3.5 ">
                                <FaTwitter className='h-5 w-6 text-white' />

                            </div>
                            <div className="w-12 h-12 mr-2 rounded-full bg-[#4D4E51] px-3 py-3.5 ">
                                <FaInstagram className='h-5 w-6 text-white ' />

                            </div>
                            <div className="w-12 h-12 mr-2 rounded-full bg-[#4D4E51] px-3 py-3.5 ">
                                <FaYoutube className='h-5 w-6 text-white' />

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-3  text-lg font-medium text-white tracking-widest title-font">Our Services</h2>
                            <div className="h-0.5 w-12 bg-[#0B7132]"></div>
                            <nav className="mb-10 list-none">
                                <li className="mt-3 flex ">
                                    <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a className="text-white cursor-pointer hover:text-gray-500 text-sm">AC Charger Services</a>
                                </li>
                                <li className="mt-3 flex ">
                                    <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a className="text-white cursor-pointer hover:text-gray-500 text-sm">DC Charger Services</a>
                                </li>
                                <li className="mt-3 flex ">
                                    <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a className="text-white cursor-pointer hover:text-gray-500 text-sm">EV Drivers Services</a>
                                </li>
                                <li className="mt-3 flex ">
                                    <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a className="text-white cursor-pointer hover:text-gray-500 text-sm">Home Charging</a>
                                </li>
                                <li className="mt-3 flex ">
                                    <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a className="text-white cursor-pointer hover:text-gray-500 text-sm">Building Services</a>
                                </li>
                            </nav>
                        </div>
                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-3  text-lg font-medium text-white tracking-widest title-font">Useful Links</h2>
                            <div className="h-0.5 w-12 bg-[#0B7132]"></div>
                            <nav className="mb-10 list-none">
                                <li className="mt-3 flex ">
                                    <img src={ImageIcons.pdf} className='h-6 w-6 mr-2' />
                                    <a className="text-white cursor-pointer hover:text-gray-500 text-sm">AC Charger Services</a>
                                </li>
                                <li className="mt-3 flex ">
                                    <img src={ImageIcons.document} className='h-6 w-6 mr-2' />
                                    <a className="text-white cursor-pointer hover:text-gray-500 text-sm">DC Charger Services</a>
                                </li>
                                <li className="mt-3 flex ">
                                    <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a className="text-white cursor-pointer hover:text-gray-500 text-sm">EV Drivers Services</a>
                                </li>
                                <li className="mt-3 flex ">
                                    <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a className="text-white cursor-pointer hover:text-gray-500 text-sm">Home Charging</a>
                                </li>
                                <li className="mt-3 flex ">
                                    <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a className="text-white cursor-pointer hover:text-gray-500 text-sm">Building Services</a>
                                </li>
                            </nav>
                        </div>

                        <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 className="mb-3  text-lg font-medium text-white tracking-widest   title-font">Contact Info</h2>
                            <div className="h-0.5 w-12 bg-[#0B7132]"></div>
                            <nav className="mb-10 list-none">
                                <li className="mt-3 flex ">
                                    <MdLocationPin className='h-9 w-9 mr-2 text-white' />
                                    <a className="text-white cursor-pointer hover:text-gray-500 text-sm">MAGNET Co-Work Plot No. 130, Industrial Area, Phase 1, Chandigarh</a>
                                </li>
                                <li className="mt-3 flex ">
                                    <FaRegEnvelope className='h-5 w-5 mr-3 text-white' />
                                    <a className="text-white cursor-pointer hover:text-gray-500 text-sm">info@vpventuresindia.com</a>
                                </li>
                                <li className="mt-3 flex ">
                                    <MdPhone className='h-6 w-6 mr-3 text-white' />
                                    <a className="text-white cursor-pointer hover:text-gray-500 text-sm">+91 75081 00021</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-[#212226] border-t border-[#ffffff]">
                    <div className="container px-5 py-4 mx-auto">
                        <p className="text-sm text-white capitalize xl:text-center">© 2020 All rights reserved</p>
                    </div>
                </div>
            </footer>


        </>
    )

}

export default Footer;