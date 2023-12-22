import ImageIcons from "../../common/ImageIcons";
import { FaTwitter, FaInstagram, FaYoutube, FaPinterest, FaLinkedinIn } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { MdPhone, MdLocationPin } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "./ContactUs.css";


const backgroundImagePath = ImageIcons.Rectangle1;
const style = {
    backgroundImage: `url('${backgroundImagePath}')`,

    // height: '354px',
};

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


const Contact = () => {
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
                                    <p className="text-center cursor-pointer" onClick={callPhoneNumber}>+91 75081 00021</p>
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
                                    <p className="text-center cursor-pointer" onClick={openMail}>info@vpventuresindia.com</p>
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
                                    <p className="text-center px-2">MAGNET Co-Work Plot No. 130, Industrial Area, Phase 1, Chandigarh</p>
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
                                <p className="mb-7 max-w-[500px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                <div className="social-media-links flex">
                                    <Link to='https://www.facebook.com/myevpoint'>
                                        <div className="w-12 h-12 me-3 rounded-full bg-[#F1F8E8] p-3 hover:scale-[1.1]">
                                            <BiLogoFacebook className='h-6 w-6 text-[#0B7132]' />
                                        </div>
                                    </Link>
                                    <Link to='https://twitter.com/myevpoint'>
                                        <div className="w-12 h-12 me-3 rounded-full bg-[#F1F8E8] p-[13px] hover:scale-[1.1]">
                                            <FaTwitter className='h-5 w-6 text-[#0B7132]' />
                                        </div>
                                    </Link>
                                    <Link to='https://in.pinterest.com/myevpoint/'>
                                        <div className="w-12 h-12 me-3 rounded-full bg-[#F1F8E8] p-[13px] hover:scale-[1.1]">
                                            <FaInstagram className='h-5 w-6 text-[#0B7132]' />
                                        </div>
                                    </Link>
                                    <Link to='https://www.youtube.com/channel/UCI3qj7D2eG-hqQ-HP948QWw'>
                                        <div className="w-12 h-12 me-3 rounded-full bg-[#F1F8E8] p-[13px] hover:scale-[1.1]">
                                            <FaYoutube className='h-5 w-6 text-[#0B7132]' />
                                        </div>
                                    </Link>
                                    <Link to='https://www.linkedin.com/company/my-ev-point/'>
                                        <div className="w-12 h-12 me-3 rounded-full bg-[#F1F8E8] p-[13px] hover:scale-[1.1] h">
                                            <FaLinkedinIn className='h-5 w-6 text-[#0B7132]' />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 max-md:w-full  max-md:px-4">
                            <div class="contact-us-form-info bg-white md:py-14 max-md:py-8 md:px-10 max-md:px-5">
                                <form>
                                    <div class="mb-5">
                                        <input type="text" id="first_name" className="bg-[#F1F8E8] text-gray-900 rounded-lg block w-full p-4" placeholder="Full name*" required></input>
                                    </div>
                                    <div class="mb-5">
                                        <input type="email" id="email" class="bg-[#F1F8E8] text-gray-900 rounded-lg block w-full p-4" placeholder="Email address*" required></input>
                                    </div>
                                    <div class="mb-5">
                                        <input type="number" id="phone" className="bg-[#F1F8E8] text-gray-900 rounded-lg block w-full p-4" placeholder="Phone number*" required></input>
                                    </div>
                                    <div class="mb-5">
                                        <textarea id="message" name="message" rows="4" placeholder="Enter message" className="bg-[#F1F8E8] rounded-lg block text-gray-900 w-full p-4"></textarea>
                                    </div>
                                    <button type="submit" className="bg-[#0B7132] text-white hover:bg-[#000] rounded-lg block py-4 px-7 duration-[400ms,700ms]">Submit Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Contact Form Section */}
    
            <img src={ImageIcons.mapsection} className="w-full" />
        </>
    )
}
export default Contact;