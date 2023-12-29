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

const SingleBlogPage = () => {
  return (
    <>
            <div className='single-blog-page w-full md:py-20 max-md:py-10'>
                <div className='container mx-auto px-2'>
                    <div className='single-blog-info flex gap-10 max-md:flex-col'>
                        {/* Left Side Bar Info */}
                        <div className='md:w-3/4 relative mb-5 max-md:order-1'>
                            {/* Single Blog Content */}
                            <div className='single-service-right-sidebar'>
                                <h2 className='mb-4'>Charging Stations Will Provide Power</h2>
                                <p className='mb-4'>Duis viverra quis diam quis porta. Cras eget ullamcorper augue. Nulla suscipit eleifend diam nec faucibus. Cras aliquet accumsan mi non condimentum. Sed eu tristique tortor. Vestibulum congue sodales sem a aliquam. Mauris tristique sollicitudin dolor. Aliquam nec mauris quis nibh commodo condimentum. Curabitur malesuada erat ut elementum iaculis.</p>
                                <p className='mb-4'>Voluptatem earum? Lorem facilisis et sociis justo exercitationem consequuntur? Sit. Deserunt feugiat potenti ad vehicula odit, dictumst? Inceptos, torquent consequatur autem potenti quisque animi? Eget consequatur, saepe euismod adipiscing debitis! Nascetur adipiscing porro fugit distinctio optio. Dictum lacinia iure maecenas. Iaculis illum pariatur a possimus excepteur ad labore, accumsan ad aperiam dolores, excepteur do! Pariatur integer, impedit mus vulputate nec? At nonummy, sagittis donec saepe delectus aliqua asperiores ratione tenetur! Primis, neque sapiente vehicula, voluptatibus? Adipisicing ultricies commodi fugiat earum? Ridiculus praesentium est maiores? Curabitur expedita dicta primis voluptas consectetuer quo eligendi accusantium metus consequatur, integer, doloribus, velit dignissim rhoncus.</p>
                                <div className="text-center py-4">
                                    <img src={singleservicefullimg} className='w-full' />
                                </div>
                            </div>
                        </div>

                        {/* Right Side Bar Info */}
                        <div className='md:w-1/4 relative mb-5  max-md:order-2'>
                            <div className='single-blog-left-sidebar'>
                                {/* Our Recent Post Sidebar Links */}
                                <div className='box-shodow-info xl:px-10 xl:py-10 max-xl:px-5 max-xl:py-5 rounded-md shadow-[0_3px_10px_5px_rgba(0,0,0,0.1)] xl:mb-10 max-xl:mb-5'>
                                    <div className='title-sidebar mb-5'>
                                        <h4>Recent Post</h4>
                                        <hr class="green-hr-line" />
                                    </div>
                                    <div className='blog-links-info'>
                                        <ul>
                                            <li>
                                                <Link to='/services/AC' className='flex px-4 py-2 hover:bg-[#0B7132] hover:text-[#fff] rounded-md border-b border-solid border-[#ddd]'>Eget eu hymenaeos blandit blandit ipsum ab.</Link>
                                            </li>
                                            <li>
                                                <Link to='/services/DC' className='flex px-4 py-2 hover:bg-[#0B7132] hover:text-[#fff] rounded-md border-b border-solid border-[#ddd]'>Charging Stations Will Provide Power</Link>
                                            </li>
                                            <li>
                                            <a href="#" className='flex px-4 py-2 hover:bg-[#0B7132] hover:text-[#fff] rounded-md border-b border-solid border-[#ddd]'>Eget eu hymenaeos blandit blandit ipsum ab.</a>
                                            </li>
                                            <li>
                                                <a href="#" className='flex px-4 py-2 hover:bg-[#0B7132] hover:text-[#fff] rounded-md border-b border-solid border-[#ddd]'>Charging Stations Will Provide Power</a>
                                            </li>
                                            <li>
                                                <a href="#" className='flex px-4 py-2 hover:bg-[#0B7132] hover:text-[#fff] rounded-md border-b border-solid border-[#ddd]'>Eget eu hymenaeos blandit blandit ipsum ab.</a>
                                            </li>
                                            <li>
                                                <a href="#" className='flex px-4 py-2 hover:bg-[#0B7132] hover:text-[#fff] rounded-md border-b border-solid border-[#fff]'>Charging Stations Will Provide Power</a>
                                            </li>
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
                                                <img src={chaticon} className='w-15 h-15 m-auto' />
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
  );
};
export default SingleBlogPage;