import React, { useRef, useState, useEffect } from "react";
import ImageIcons from "../../common/ImageIcons";
import { FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaLinkedinIn } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { MdPhone, MdLocationPin } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import GoogleMap from 'google-maps-react-markers';
import Markers from '../Markers/Markers';
import { CheckCircle } from '@mui/icons-material';
import axios from 'axios';
import "./ContactUs.css";
import Loader from "../shared/loader";

const backgroundImagePath = ImageIcons.Rectangle1;
const style = {
    backgroundImage: `url('${backgroundImagePath}')`,

};




const Contact = () => {

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


    const [fullName, setfullName] = useState("")
    const [emailId, setEmailId] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")
 
    const [data, setData] = useState([]);
    const [error, setError] = useState([]);
    const mapRef = useRef(null)
    const [successMsg, setSuccessMsg] = useState(false)
    const [disabled, setDisabled] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make a GET request

                const response = await axios.get(`${process.env.REACT_APP_URL}/user/getlocation`);

                // Set the data in the state
                setData(response.data.data);
            } catch (error) {
                // Set the error in the state
                setError(error);
                console.log("no new data", error)
            }
        };

        fetchData();
    }, []);


       




     
    const baseURL = "http://localhost:8400/user/sendemail";


    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(true);
        try {
            const response = await axios.post(`${process.env.REACT_APP_URL}/user/sendemail`, {
                fullName: fullName,
                email: emailId,
                number: number,
                message: message,
            });

            console.log("response", response);
            console.log("finalResponse", response.data);

            setfullName('')
            setEmailId('')
            setNumber('')
            setMessage('')
            setSuccessMsg(true)
            setTimeout(() => {
                setSuccessMsg(false)
                setDisabled(false);

            }, 3000);

        } catch (error) {
            console.error('Error submitting form:', error);

        }
    };


    return (
        <>
            {/* Contact Detail Section */}
            <div className="contact-detail-section w-full bg-[#F1F8E8] py-20">
                <div className="container mx-auto px-2">
                    <div className="flex lg:gap-14 max-lg:gap-5 max-md:flex-col">
                        <div className="md:w-1/3 relative max-md:mb-5">
                            <div className="detail-content-box py-[60px] flex justify-center">
                                <div className="text-center">
                                    <div className="detial-icon-info mb-[20px]">
                                        <div className="w-20 h-20 rounded-full bg-[#F1F8E8] mx-auto text-center p-5 cursor-pointer" onClick={callPhoneNumber}>
                                            <MdPhone className='h-10 w-10 flex items-center justify-center text-[#0B7132]' />
                                        </div>
                                    </div>
                                    <h4 className="text-center mb-2">Phone</h4>
                                    <p className="text-center cursor-pointer" onClick={callPhoneNumber}>{phoneNumber}</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 relative max-md:mb-5">
                            <div className="detail-content-box py-[60px] flex justify-center">
                                <div className="text-center">
                                    <div className="detial-icon-info mb-[20px]">
                                        <div className="w-20 h-20 rounded-full bg-[#F1F8E8] mx-auto text-center p-5 cursor-pointer" onClick={openMail}>
                                            <FaRegEnvelope className='h-10 w-10 flex items-center justify-center text-[#0B7132]' />
                                        </div>
                                    </div>
                                    <h4 className="text-center mb-2">Email</h4>
                                    <p className="text-center cursor-pointer" onClick={openMail}>{email}</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/3 relative">
                            <div className="detail-content-box py-[60px] flex justify-center">
                                <div className="text-center">
                                    <div className="detial-icon-info mb-[20px]">
                                        <div className="w-20 h-20 rounded-full bg-[#F1F8E8] mx-auto text-center p-5">
                                            <MdLocationPin className='h-10 w-10 flex items-center justify-center text-[#0B7132]' />
                                        </div>
                                    </div>
                                    <h4 className="text-center mb-2">Location</h4>
                                    <p className="text-center px-2">Plot No. B-70, Phase 7, SAS Nagar, Punjab 160055</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Contact Detail Section */}

            {/* Contact Form Section */}
            <div className="contact-form-section w-full py-20">
                <div className="container mx-auto px-2">
                    <div className="flex lg:gap-10 max-lg:gap-5 max-md:flex-col items-center">
                        <div className="md:w-1/2 max-md:mb-8">
                            <div className="content-form-txt">
                                <h4 className="text-[#0B7132] font-medium">Send a message</h4>
                                <h2 className="mb-3">Get in touch</h2>
                                <p className="mb-7 max-w-[500px]">Stay ahead of the curve with our state-of-the-art charging infrastructure. We're committed to embracing the latest in EV charging technology to keep you plugged in efficiently.</p>
                                <div className="social-media-links flex">
                                    <Link to='https://www.facebook.com/myevpoint' target="_blank">
                                        <div className="w-12 h-12 me-3 rounded-full bg-[#F1F8E8] p-3 hover:scale-[1.1]">
                                            <BiLogoFacebook className='h-6 w-6 text-[#0B7132]' />
                                        </div>
                                    </Link>
                                    <Link to='https://twitter.com/myevpoint' target="_blank">
                                        <div className="w-12 h-12 me-3 rounded-full bg-[#F1F8E8] p-[13px] hover:scale-[1.1]">
                                            <FaTwitter className='h-5 w-6 text-[#0B7132]' />
                                        </div>
                                    </Link>
                                    <Link to='https://in.pinterest.com/myevpoint/' target="_blank">
                                        <div className="w-12 h-12 me-3 rounded-full bg-[#F1F8E8] p-[13px] hover:scale-[1.1]">
                                            <FaPinterest className='h-5 w-6 text-[#0B7132]' />
                                        </div>
                                    </Link>
                                    <Link to='https://www.youtube.com/channel/UCI3qj7D2eG-hqQ-HP948QWw' target="_blank">
                                        <div className="w-12 h-12 me-3 rounded-full bg-[#F1F8E8] p-[13px] hover:scale-[1.1]">
                                            <FaYoutube className='h-5 w-6 text-[#0B7132]' />
                                        </div>
                                    </Link>
                                    <Link to='https://www.linkedin.com/company/my-ev-point/' target="_blank">
                                        <div className="w-12 h-12 me-3 rounded-full bg-[#F1F8E8] p-[13px] hover:scale-[1.1] h">
                                            <FaLinkedinIn className='h-5 w-6 text-[#0B7132]' />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 max-md:w-full  max-md:px-4 relative">
                            <div class="contact-us-form-info bg-white md:py-14 max-md:py-8 md:px-10 max-md:px-5">
                                {successMsg ?
                                    <div className="py-24 text-center ">
                                        <div className="text-center py-20">
                                            <h2>Thank You</h2>
                                            <p className='text-[20px] text-[#008000] font-bold'>We have received your message.</p>
                                            <CheckCircle sx={{ fontSize: "100px", color: "#008000" }} className='mx-auto' />
                                        </div>
                                        <p className='text-[16px] font-bold'>You will be contacted soon by one of our team member.</p>
                                    </div>
                                    :
                                    <>
                                        {disabled && (<Loader />)}

                                        <form onSubmit={handleSubmit}>
                                            <p class=" font-medium text-black
                                          ">Full name*</p>
                                            <div class="relative mb-6">

                                                <input type="text"
                                                    id="first_name"
                                                    className="bg-[#F1F8E8] rounded-lg block text-gray-900 w-full p-4 focus:outline-none"
                                                    value={fullName}
                                                    onChange={(e) => setfullName(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <p class=" font-medium text-black
                                          ">Email address*</p>
                                            <div class="relative mb-6">

                                                <input type="email"
                                                    id="email"
                                                    className="bg-[#F1F8E8] rounded-lg block text-gray-900 w-full p-4 focus:outline-none"
                                                    value={emailId}
                                                    onChange={(e) => setEmailId(e.target.value)}
                                                    required
                                                />
                                            </div>


                                            <p class=" font-medium text-black
                                          ">Phone number*</p>
                                            <div class="relative mb-6">

                                                <input type="number"
                                                    id="phone"
                                                    className="bg-[#F1F8E8] rounded-lg block text-gray-900 w-full p-4 focus:outline-none"
                                                    value={number}
                                                    onChange={(e) => setNumber(e.target.value)}
                                                    required
                                                    
                                                />
                                            </div>

                                            <p class=" font-medium text-black
                                          ">Enter message*</p>
                                            <div class="relative mb-6">

                                                <textarea id="message"
                                                    name="message"
                                                    rows="4"
                                                    className="bg-[#F1F8E8] rounded-lg block text-gray-900 w-full p-4 focus:outline-none"
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    required
                                                />
                                            </div>

                                            <button type="submit" className="bg-[#0B7132] text-white hover:bg-[#000] rounded-lg block py-4 px-7 duration-[400ms,700ms]">Submit Message</button>
                                        </form>
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Contact Form Section */}

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4079.200739425459!2d76.69185718317433!3d30.71319131412005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef99cc17fe25%3A0x6a593a19f7208f9b!2sAbacus%20Cloud!5e0!3m2!1sen!2sin!4v1700492253995!5m2!1sen!2sin"
                width="100%"
                height="500"
                //   style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

        </>
    )
}
export default Contact;