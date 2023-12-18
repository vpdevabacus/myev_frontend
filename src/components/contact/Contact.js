import ImageIcons from "../../common/ImageIcons";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";
import { MdPhone, MdLocationPin } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";


const backgroundImagePath = ImageIcons.Rectangle1;

const style = {
    backgroundImage: `url('${backgroundImagePath}')`,
    
    // height: '354px',
};


const Contact = () => {
    return (
        <>
            
            <div className="bg-[#F1F8E8] p-10 w-full">
                <section class=" w-10/12 mx-auto mb-10  ">
                    <div class="grid justify-center md:grid-cols-2 lg:grid-cols-3  px-4">
                        <div className="bg-cover px-10 xl:p-28 mb-16 " style={style}>
                            <div className="w-16 h-16  rounded-full bg-[#F1F8E8] px-5 py-5 mx-auto text-center  ">
                                <MdPhone className='h-5 w-6 text-[#0B7132]' />

                            </div>
                            <p className="text-black text-2xl font-medium pt-5 text-center">Phone</p>
                            <p className="text-black pt-3 text-base text-center font-medium">+91 75081 00021</p>
                        </div>

                        <div className="bg-cover p-20 xl:p-28 mb-16 " style={style}>
                                <div className="w-16 h-16  rounded-full bg-[#F1F8E8] px-5 py-5 mx-auto text-center  ">
                                    <FaRegEnvelope className='h-5 w-6 text-[#0B7132]' />

                                </div>
                                <p className="text-black text-2xl pt-5 text-center font-medium	">Email</p>
                                <p className="text-black  pt-3 text-base text-center font-medium">info@vpventuresindia.com</p>
                          
                        </div>

                        <div className="bg-cover p-20 xl:p-28 mb-16 " style={style}>
                            <div className="w-16 h-16  rounded-full bg-[#F1F8E8] px-5 py-5 mx-auto text-center  ">
                                <MdLocationPin className='h-5 w-6 text-[#0B7132]' />
                               
                            </div>
                                <p className="text-black text-2xl pt-5 text-center font-medium	">Location</p>
                                <p className="text-black  pt-3 text-base text-center font-medium "> Industrial Area, Phase 1, Chandigarh</p>
                            </div>
                

                    </div>
                </section>
            </div>-
            <div className="lg:flex flex-row ">

                <div className="lg:flex-shrink-0  lg:w-5/12  lg:pl-16  mt-40  lg:text-left md:mb-10">
                    <p className="mt-2 text-xl text-[#0B7132] text-center lg:text-start font-medium	">Send a message</p>
                    <p className="mt-2 text-5xl text-black text-center lg:text-start font-bold">Get in touch </p>
                    <p className="mt-2 text-lg text-black text-center lg:text-start">It’s your chance to own an EV </p>
                    <p className="mt-1 text-lg text-black text-center lg:text-start">Charging Station (Without having to manage it)</p>
                    <div className="mt-4 flex justify-center  mt-2  lg:mt-3 lg:justify-start">
                        <div className="w-12 h-12 mr-2 rounded-full bg-[#F1F8E8] px-3 py-3.5 ">
                            <BiLogoFacebook className='h-5 w-6 text-[#0B7132] ' />
                        </div>
                        <div className="w-12 h-12 mr-2 rounded-full bg-[#F1F8E8] px-3 py-3.5 ">
                            <FaTwitter className='h-5 w-6 text-[#0B7132]' />

                        </div>
                        <div className="w-12 h-12 mr-2 rounded-full bg-[#F1F8E8] px-3 py-3.5 ">
                            <FaInstagram className='h-5 w-6 text-[#0B7132]' />

                        </div>
                        <div className="w-12 h-12 mr-2 rounded-full bg-[#F1F8E8] px-3 py-3.5 ">
                            <FaYoutube className='h-5 w-6 text-[#0B7132]' />

                        </div>
                    </div>
                </div>
                <div class=" md:w-8/12 lg:w-4/12 mx-10 sm:mx-20 md:mx-40 lg:mx-auto bg-white p-16 shadow-lg mt-8 mb-8">

                    <form>

                        <div class="mb-6">
                            <input type="text" id="first_name" className="bg-[#F1F8E8] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full name*" required></input>
                        </div>
                        <div class="mb-6">

                            <input type="tel" id="phone" className="bg-[#F1F8E8] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone number*" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
                        </div>
                        <div class="mb-6">
                            <input type="email" id="email" class="bg-[#F1F8E8] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email address*" required></input>
                        </div>
                        <div class="mb-6">
                            <input type="text" id="message" className="bg-[#F1F8E8] border border-gray-300 text-gray-900 text-sm rounded-lg py-4 pt-3 pb-20 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message" required></input>
                        </div>

                        <button type="submit" className="text-white bg-[#0B7132] hover:[#0B7132] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Message</button>
                    </form>
                </div>
            </div>
            <img src={ImageIcons.mapsection} />


        </>
    )

}
export default Contact;