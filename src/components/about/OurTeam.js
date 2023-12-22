import React from 'react';
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ImageIcons from '../../common/ImageIcons';


const OurTeam = () => {
    return (
        <section className="our_teem bg-[#F1F8E8] py-[75px]">
            <div className="container mx-auto">
                <div className="md:mb-[50px] mb-[35px]  text-center">
                    <h4 className="text-center text-[#0B7132] font-medium mb-[15px]">OUR TEAM MEMBER</h4>
                    <h2>Group of Certified & Experienced</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 xl:gap-x-[30px] lg:gap-x-[20px] sm:gap-x-[30px] md:gap-y-[50px] gap-y-[40px] btn-holder sm:max-w-[unset] max-w-[360px] m-auto">
                    {teamData.map((item, i) => (
                        <div key={i} className={`team_box relative duration-500 rounded-[5px] group flex flex-col  btn btn-2 hover-slide-down`}>
                            <figure className='relative h-[450px] 2xl:h-[450px] xl:h-[400px] lg:h-[340px] md:h-[440px] sm:h-[380px] duration-500 overflow-hidden before:content before:absolute before:top-[0] before:left-[0] before:h-[100%] before:w-[100%] group-hover:before:bg-[#F1F8E88C] before:z-10 rounded-tl-[30px] rounded-br-[30px]'>
                                <img
                                    src={item.teamImage}
                                    className='w-[100%] h-[100%] object-cover   duration-500 group-hover:scale-[1.1]'
                                    alt='team'
                                    width=""
                                    height=""
                                />
                                <figcaption className='duration-500 flex justify-center absolute left-[0] translate-y-[-50%] top-[50%] tr right-[0] text-center gap-[10px] z-20 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                    <Link to={item.facebookLink} className='w-[50px] h-[50px] text-[28px] rounded-[50%] bg-[#0B7132] duration-500 text-[#fff] flex justify-center items-center hover:bg-[#000]' ><FaFacebookF /></Link>
                                    <Link to={item.linkedinLink} className='w-[50px] h-[50px] text-[28px] rounded-[50%] bg-[#0B7132] duration-500 text-[#fff] flex justify-center items-center hover:bg-[#000]' ><FaTwitter /></Link>
                                    <Link to={item.tweeterLink} className='w-[50px] h-[50px] text-[28px] rounded-[50%] bg-[#0B7132] duration-500 text-[#fff] flex justify-center items-center hover:bg-[#000]'><FaInstagram /></Link>
                                </figcaption>
                                <div className='boxAnimation '></div>
                            </figure>
                            <div className='team_title pt-[20px]'>
                                <div className='flex flex-row items-center'>
                                    <h5  className='relative text-[#0B7132] text-[18px] font-medium mb-[5px] green-line-heading after:!w-[50px] after:!ml-[15px]'>{item.subTitle}</h5  >
                                </div>
                                <h4 className='mb-0 font-medium'>{item.title}</h4>
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