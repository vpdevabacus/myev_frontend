import React from 'react';
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ImageIcons from '../../common/ImageIcons';

const OurTeam = () => {
    return (
        <section className="our_teem w-full  px-8 bg-[#F1F8E8] py-16">
            <div className=" container mx-auto ">

                <div className="mb-10 text-center">
                    <h4 className="text-center text-lg text-[#0B7132] font-medium md:text-xl lg:text-2xl mb-6">OUR TEAM MEMBER</h4>

                    <h2 className="text-center text-3xl text-black font-semibold md:text-4xl lg:text-5xl mb-10 md:mb-0">Group of Certified & Experienced</h2>

                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 col:grid-cols-1 gap-[30px] btn-holder md:max-w-[unset] max-w-[350px] m-auto">
                    {teamData.map((item, i) => (
                        <div key={i} className={`team_box relative duration-500   rounded-[5px] group flex flex-col  btn btn-2 hover-slide-down`}>
                            <figure className=' relative h-[400px] duration-500 overflow-hidden before:content before:absolute before:top-[0] before:left-[0] before:h-[100%] before:w-[100%] group-hover:before:bg-[#F1F8E8]/[.6] before:z-10 rounded-tl-3xl rounded-br-3xl'>
                                <img
                                    src={item.teamImage}
                                    className='w-[100%] h-[100%] object-cover   duration-500 group-hover:scale-[1.1]'
                                    alt='team'
                                    width=""
                                    height=""
                                />
                                <figcaption className='duration-500 flex justify-center absolute left-[0] translate-y-[-50%] top-[50%] tr right-[0] text-center gap-[10px] z-20 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                    <Link to={item.facebookLink} className='w-[35px] h-[35px] rounded-[50%] bg-[#0B7132] duration-300 text-[#fff]  flex justify-center items-center hover:scale-[1.2]' ><FaFacebookF /></Link>
                                    <Link to={item.linkedinLink} className='w-[35px] h-[35px] rounded-[50%] bg-[#0B7132] duration-300 text-[#fff]  flex justify-center items-center hover:scale-[1.2]' ><FaTwitter /></Link>
                                    <Link to={item.tweeterLink} className='w-[35px] h-[35px] rounded-[50%] bg-[#0B7132] duration-300 text-[#fff]  flex justify-center items-center hover:scale-[1.2]'><FaTwitter /></Link>
                                    {/* <Link to={item.Instagram} className='w-[35px] h-[35px] rounded-[50%] bg-[#0B7132] duration-300 text-[#fff]  flex justify-center items-center hover:scale-[1.2]'><FaYoutube /></Link> */}
                                </figcaption>
                                <div className='boxAnimation '></div>
                            </figure>
                            <div className='team_title py-[20px] pr-[30px] text-left'>
                                <div className='flex flex-row items-center'>
                                    <p className='text-[#0B7132]  mb-[0] text-xl font-medium'>{item.subTitle}</p>
                                    <img src={ImageIcons.Rectangle} className='h-0.5 w-10 ml-5' />
                                </div>
                                <h4 className='mb-[8px] text-[#000] text-2xl font-medium'>{item.title}</h4>
                            </div>

                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}

const teamData = [
    {
        teamImage: ImageIcons.team_member_1,
        title: "Justin Beckham",
        subTitle: "MANAGER",
        facebookLink: "https://www.facebook.com/",
        instagramLink: "https://www.instagram.com/",
        linkedinLink: "https://in.linkedin.com/",
        tweeterLink: "https://twitter.com/?lang=en",
    },
    {
        teamImage: ImageIcons.team_member_2,
        title: "Smith Johnson",
        subTitle: "ENGINEER",
        facebookLink: "https://www.facebook.com/",
        instagramLink: "https://www.instagram.com/",
        linkedinLink: "https://in.linkedin.com/",
        tweeterLink: "https://twitter.com/?lang=en",
    },
    {
        teamImage: ImageIcons.team_member_3,
        title: "Jennifer Winds",
        subTitle: "ENGINEER",
        facebookLink: "https://www.facebook.com/",
        instagramLink: "https://www.instagram.com/",
        linkedinLink: "https://in.linkedin.com/",
        tweeterLink: "https://twitter.com/?lang=en",
    },
    {
        teamImage: ImageIcons.team_member_1,
        title: "Edward Willey",
        subTitle: "ENGINEER",
        facebookLink: "https://www.facebook.com/",
        instagramLink: "https://www.instagram.com/",
        linkedinLink: "https://in.linkedin.com/",
        tweeterLink: "https://twitter.com/?lang=en",
    }
]

export default OurTeam;