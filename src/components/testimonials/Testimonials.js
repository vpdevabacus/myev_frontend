import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialsBg from "../../assets/Images/testimonials_bg.png";
import clientImage1 from "../../assets/Images/clients_images/client1.png";
import quotesIcon from "../../assets/Images/quotes_icon.svg";
import Slider from "react-slick";
import "./testimonials.css";

const Testimonials = () => {

    let settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
    };

    return (
        <>
            <section className="testimonials pt-[60px] md:pt-[90px] px-[20px] pb-[80px] md:pb-[138px] bg-center bg-contain bg-no-repeat" style={{ backgroundImage: `url(${testimonialsBg})` }}>
                <div className="container m-auto">
                    <div className="testimonials_titel text-center">
                        <h4 className="text-[#0B7132] font-medium uppercase	mb-[15px]">Testimonials</h4>

                        <h2>What Client's Say about</h2>
                    </div>
                    <div className="max-w-[1100px] m-auto">
                        <Slider className='mt-[40px] md:mt-[50px] px-[0] md:px-[80px] bg-top bg-auto pt-[33px] bg-no-repeat' {...settings} style={{ backgroundImage: `url(${quotesIcon})` }}>
                            {testimonialData.map((item, i) => (
                                <div key={i} className='relative css'>
                                    <div>
                                        <div className="text-center max-w-[800px] m-auto">
                                            <p className="mb-[22px] md:mb-[30px] text-[18px] md:text-[20px] lg:text-[22px]">{item.text}</p>

                                            <div className="rating flex justify-center mb-[45px]">
                                                <span className="mx-[2.5px]">{item.rating}</span>
                                                <span className="mx-[2.5px]">{item.rating}</span>
                                                <span className="mx-[2.5px]">{item.rating}</span>
                                                <span className="mx-[2.5px]">{item.rating}</span>
                                                <span className="mx-[2.5px]">{item.rating}</span>
                                            </div>
                                            <div class="flex items-center justify-center">
                                                <img class="h-[100px] w-[100px] duration-500 rounded-full group-hover:shadow-[0_0_12px_#bfbfbf]" src={item.profileImage} alt="" />

                                                <div className='pl-[20px] text-left'>
                                                    <h4 className='mb-[5px] !text-[19px] lg:!text-[20px] font-medium'>{item.name}</h4>
                                                    <p className='mb-[0] text-[#0B7132] text-[24px]'>{item.designation}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}

const testimonialData = [
    {
        name: "Alex Margaret",
        designation: "Managing Director",
        profileImage: clientImage1,
        text: "I recently used the EV charging station near my office, and I'm impressed! The charging process was super reliable, and I got a significant boost in battery capacity in no time. It's great to have a station I can count on for my daily commutes.",
        rating: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-[26px] w-[26px] text-[#FFC821]"
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
            ></path>
        </svg>,
    },
    {
        name: "Margaret",
        designation: "Managing Director",
        profileImage: clientImage1,
        text: "I've tried a few charging stations in the area, and this one stands out for its transparent pricing. No hidden fees, and the rates were reasonable. It's refreshing to find an affordable option without sacrificing quality.",
        rating: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-[26px] w-[26px] text-[#FFC821]"
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
            ></path>
        </svg>,
    },
    {
        name: "Alex ",
        designation: "Managing Director",
        profileImage: clientImage1,
        text: "Charging my EV here was a pleasant surprise. The station was clean, well-lit, and felt safe. They've clearly put effort into maintaining the facility. It's the little things that make the charging experience enjoyable.",
        rating: <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="h-[26px] w-[26px] text-[#FFC821]"
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
            ></path>
        </svg>,
    },

]

export default Testimonials