import React from 'react';
import { FaRegEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ImageIcons from '../../common/ImageIcons';

const OurTeam = () => {
    return (
        <section className="our_teem w-full  px-8 bg-[#F1F8E8] py-20">
            <div className=" container mx-auto ">
                <div
                    title='Our Team'
                    description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum'

                />
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 col:grid-cols-1 gap-[30px] btn-holder md:max-w-[unset] max-w-[350px] m-auto">
                    {teamData.map((item, i) => (
                        <div key={i} className={`team_box relative duration-500   rounded-[5px] group flex flex-col  btn btn-2 hover-slide-down`}>
                            <figure className=' relative h-[400px] duration-500 overflow-hidden before:content before:absolute before:top-[0] before:left-[0] before:h-[100%] before:w-[100%] group-hover:before:bg-black/[.6] before:z-10 rounded-tl-3xl rounded-br-3xl'>
                                <img
                                    src={item.teamImage}
                                    className='w-[100%] h-[100%] object-cover   duration-500 group-hover:scale-[1.1]'
                                    alt='team'
                                    width=""
                                    height=""
                                />
                                <figcaption className='duration-500 flex justify-center absolute left-[0] translate-y-[-50%] top-[50%] tr right-[0] text-center gap-[10px] z-20 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                    <Link to={item.facebookLink} className='w-[35px] h-[35px] rounded-[50%] bg-[#fff] duration-300 text-[#000244]  flex justify-center items-center hover:scale-[1.1]' ><FaFacebookF /></Link>
                                    <Link to={item.linkedinLink} className='w-[35px] h-[35px] rounded-[50%] bg-[#fff] duration-300 text-[#000244]  flex justify-center items-center hover:scale-[1.1]' ><FaTwitter /></Link>
                                    <Link to={item.tweeterLink} className='w-[35px] h-[35px] rounded-[50%] bg-[#fff] duration-300 text-[#000244]  flex justify-center items-center hover:scale-[1.1]'><FaTwitter /></Link>
                                    <Link to={item.Instagram} className='w-[35px] h-[35px] rounded-[50%] bg-[#fff] duration-300 text-[#000244]  flex justify-center items-center hover:scale-[1.1]'><FaYoutube /></Link>
                                </figcaption>
                                <div className='boxAnimation '></div>
                            </figure>
                            <div className='team_title p-[30px] text-center'>
                                <h4 className='mb-[8px] group-hover:text-[#000244]'>{item.title}</h4>
                                <p className='text-[#3C62E9] text-[14px] mb-[0]'>{item.subTitle}</p>
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
        title: "Justin Roberto",
        subTitle: "Founder & CEO",
        facebookLink: "https://www.facebook.com/",
        instagramLink: "https://www.instagram.com/",
        linkedinLink: "https://in.linkedin.com/",
        tweeterLink: "https://twitter.com/?lang=en",
    },
    {
        teamImage: ImageIcons.team_member_2,
        title: "Louis Agassiz",
        subTitle: "Manager",
        facebookLink: "https://www.facebook.com/",
        instagramLink: "https://www.instagram.com/",
        linkedinLink: "https://in.linkedin.com/",
        tweeterLink: "https://twitter.com/?lang=en",
    },
    {
        teamImage: ImageIcons.team_member_3,
        title: "Carl Anderson",
        subTitle: "Developer",
        facebookLink: "https://www.facebook.com/",
        instagramLink: "https://www.instagram.com/",
        linkedinLink: "https://in.linkedin.com/",
        tweeterLink: "https://twitter.com/?lang=en",
    },
    {
        teamImage: ImageIcons.team_member_1,
        title: "Steven Smith",
        subTitle: "Designer",
        facebookLink: "https://www.facebook.com/",
        instagramLink: "https://www.instagram.com/",
        linkedinLink: "https://in.linkedin.com/",
        tweeterLink: "https://twitter.com/?lang=en",
    }
]

export default OurTeam;