import ImageIcons from "../../common/ImageIcons";
import React, { useState } from 'react';

const backgroundImagePath = ImageIcons.pattern;

const style = {
    backgroundImage: `url('${backgroundImagePath}')`,

};





const Testimonials = () => {



    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const testimonialsData = [
        {
            text: "I recently used the EV charging station near my office, and I'm impressed! The charging process was super reliable, and I got a significant boost in battery capacity in no time. It's great to have a station I can count on for my daily commutes.",
            author: "Tania Andrew",
            position: "Frontend Lead @ Google",
            image: ImageIcons.team_member_1,
        },
        {
            text: "Found this charging station during a road trip, and it was a lifesaver! The location was convenient, right off the highway. The station was easy to use, and the touchscreen interface was intuitive. Loved the hassle-free experience.",
            author: "Tania Andrew",
            position: "Frontend Lead @ Google",
            image: ImageIcons.team_member_2,
        },
        {
            text: "I've tried a few charging stations in the area, and this one stands out for its transparent pricing. No hidden fees, and the rates were reasonable. It's refreshing to find an affordable option without sacrificing quality.",
            author: "Tania Andrew",
            position: "Frontend Lead @ Google",
            image: ImageIcons.team_member_3,
        },
        {
            text: "Charging my EV here was a pleasant surprise. The station was clean, well-lit, and felt safe. They've clearly put effort into maintaining the facility. It's the little things that make the charging experience enjoyable.",
            author: "Tania Andrew",
            position: "Frontend Lead @ Google",
            image: ImageIcons.team_member_1,
        },
        // Add more testimonials as needed
    ];


    const handlePrevious = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentTestimonialIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
    };
    const currentTestimonial = testimonialsData[currentTestimonialIndex];



    return (
        <>
            <div className="bg-cover " style={style}>


                <div className="py-20 mx-auto w-11/12">
                    <div className="container mx-auto px-6 md:px-12 xl:px-32">

                        <div className="mb-16 text-center">
                            <p className="text-[#0B7132] text-lg font-semibold lg:w-8/12 lg:mx-auto">TESTIMONIALS</p>
                            <h2 className="mb-4 text-center mt-4 text-2xl text-gray-900 font-bold md:text-4xl">What Client's Say about</h2>
                        </div>

                    </div>

                    <div className="relative flex w-full max-w-[40rem] flex-col mx-auto rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">

                        <div className="mb-6 p-0 flex ">
                            <div className="hidden sm:block">
                                <img src={ImageIcons.rightarrow} onClick={handlePrevious} className=" h-14 w-8 sm:w-8 sm:h-16 md:w-10 md:h-20 lg:w-12 lg:h-28" >

                                </img>
                            </div>
                            <p className="block font-sans text-base font-light leading-relaxed px-16 mx-auto">
                                {currentTestimonial.text}
                            </p>
                            <div className="hidden sm:block" >
                                <img src={ImageIcons.rightarrow} onClick={handleNext} className="w-8 h-16 md:w-10 md:h-20 lg:w-12 lg:h-28 " >

                                </img>
                            </div>

                        </div>

                        <div className="5 flex items-center mx-auto gap-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-700"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <div className="relative mx-auto mt-4 flex items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">

                            <img
                                src={currentTestimonial.image}
                                alt="tania andrew"
                                className="relative inline-block h-[58px] w-[58px] rounded-lg object-cover object-center"
                            />
                            <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                        {currentTestimonial.author}
                                    </h5>
                                </div>
                                <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                                    Frontend Lead @ Google
                                </p>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </>
    )

}
export default Testimonials;