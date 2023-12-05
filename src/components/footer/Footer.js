import ImageIcons from '../../common/ImageIcons'
import { MdPhone } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter,FaInstagram,FaYoutube ,FaRegEnvelope} from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";


const Footer = () => {
    return (
        <>


            <footer class="w-full text-gray-700 bg-[#212226] body-font">
                <div
                    class="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
                    <div class="flex-shrink-0 w-100 mx-auto text-center md:mx-0 md:text-left">
                        <a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                            <img src={ImageIcons.footer_myEV_logo} className='h-20 w-44' />
                        </a>
                        <p class="mt-2 text-base text-white ">It’s your chance to own an EV </p>
                        <p class="mt-1 text-base text-white ">Charging Station (Without having to manage it)</p>
                        <div class="mt-4 inline-flex justify-center mt-2 sm:ml-auto sm:mt-3 sm:justify-start">
                            <div class="w-12 h-12 mr-2 rounded-full bg-[#4D4E51] px-3 py-3.5 ">
                            <BiLogoFacebook className='h-5 w-6 text-white' />
                            </div>
                            <div class="w-12 h-12 mr-2 rounded-full bg-[#4D4E51] px-3 py-3.5 ">
                            <FaTwitter className='h-5 w-6 text-white' />

                            </div>
                            <div class="w-12 h-12 mr-2 rounded-full bg-[#4D4E51] px-3 py-3.5 ">
                            <FaInstagram className='h-5 w-6 text-white ' />

                            </div>
                            <div class="w-12 h-12 mr-2 rounded-full bg-[#4D4E51] px-3 py-3.5 ">
                            <FaYoutube className='h-5 w-6 text-white' />

                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
                    <div class="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 class="mb-3  text-lg font-medium text-white tracking-widest title-font">Our Services</h2>
                            <div class="h-0.5 w-12 bg-[#0B7132]"></div>
                            <nav class="mb-10 list-none">
                                <li class="mt-3 flex ">
                                   <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a class="text-white cursor-pointer hover:text-gray-500 text-sm">AC Charger Services</a>
                                </li>
                                <li class="mt-3 flex ">
                                   <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a class="text-white cursor-pointer hover:text-gray-500 text-sm">DC Charger Services</a>
                                </li>
                                <li class="mt-3 flex ">
                                   <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a class="text-white cursor-pointer hover:text-gray-500 text-sm">EV Drivers Services</a>
                                </li>
                                <li class="mt-3 flex ">
                                   <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a class="text-white cursor-pointer hover:text-gray-500 text-sm">Home Charging</a>
                                </li>
                                <li class="mt-3 flex ">
                                   <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a class="text-white cursor-pointer hover:text-gray-500 text-sm">Building Services</a>
                                </li>
                            </nav>
                        </div>
                        <div class="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 class="mb-3  text-lg font-medium text-white tracking-widest title-font">Useful Links</h2>
                            <div class="h-0.5 w-12 bg-[#0B7132]"></div>
                            <nav class="mb-10 list-none">
                                <li class="mt-3 flex ">
                                   <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a class="text-white cursor-pointer hover:text-gray-500 text-sm">AC Charger Services</a>
                                </li>
                                <li class="mt-3 flex ">
                                   <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a class="text-white cursor-pointer hover:text-gray-500 text-sm">DC Charger Services</a>
                                </li>
                                <li class="mt-3 flex ">
                                   <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a class="text-white cursor-pointer hover:text-gray-500 text-sm">EV Drivers Services</a>
                                </li>
                                <li class="mt-3 flex ">
                                   <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a class="text-white cursor-pointer hover:text-gray-500 text-sm">Home Charging</a>
                                </li>
                                <li class="mt-3 flex ">
                                   <img src={ImageIcons.Polygon} className='h-3.5 w-3.5 mr-2' />
                                    <a class="text-white cursor-pointer hover:text-gray-500 text-sm">Building Services</a>
                                </li>
                            </nav>
                        </div>
                        
                     <div class="w-full px-4 lg:w-1/3 md:w-1/2">
                            <h2 class="mb-3  text-lg font-medium text-white tracking-widest   title-font">Contact Info</h2>
                            <div class="h-0.5 w-12 bg-[#0B7132]"></div>
                            <nav class="mb-10 list-none">
                                <li class="mt-3 flex ">
                                <MdLocationPin className='h-10 w-10 mr-2 text-white'/>
                                    <a class="text-white cursor-pointer hover:text-gray-500 text-sm">MAGNET Co-Work Plot No. 130, Industrial Area, Phase 1, Chandigarh</a>
                                </li>
                                <li class="mt-3 flex ">
                                <FaRegEnvelope className='h-6 w-6 mr-3 text-white' />
                                    <a class="text-white cursor-pointer hover:text-gray-500 text-sm">info@vpventuresindia.com</a>
                                </li>
                                <li class="mt-3 flex ">
                                
                                <FaRegEnvelope className='h-6 w-6 mr-3 text-white' />
                                    <a class="text-white cursor-pointer hover:text-gray-500 text-sm">+91 75081 00021</a>
                                </li>
                               
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-300">
                    <div class="container px-5 py-4 mx-auto">
                        <p class="text-sm text-gray-700 capitalize xl:text-center">© 2020 All rights reserved</p>
                    </div>
                </div>
            </footer>


        </>
    )

}

export default Footer;