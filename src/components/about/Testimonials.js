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
          text: "The electric vehicle charging point was conveniently located, making it easy for me to charge my EV while running errands.",
          author: "Tania Andrew",
          position: "Frontend Lead @ Google",
          image: ImageIcons.team_member_1,
        },
        {
            text: "I liked the simplicity of the payment system and the ease of connecting my EV to the charging point.",
            author: "Tania Andrew",
            position: "Frontend Lead @ Google",
            image: ImageIcons.team_member_2,
          },
          {
            text: "The fast-charging capabilities allowed me to top up my battery quickly, minimizing downtime.",
            author: "Tania Andrew",
            position: "Frontend Lead @ Google",
            image: ImageIcons.team_member_3,
          },
          {
            text: "The availability of free or discounted charging at certain locations is a great incentive for EV owners.",
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
         <div className="bg-cover w-full" style={style}>


            <div className="py-20 ">
                <div className="container mx-auto px-6 md:px-12 xl:px-32">
                
                    <div className="mb-16 text-center">
                        <p className="text-[#0B7132] text-lg font-semibold lg:w-8/12 lg:mx-auto">TESTIMONIALS</p>
                        <h2 className="mb-4 text-center mt-4 text-2xl text-gray-900 font-bold md:text-4xl">What Client's Say about</h2>
                    </div>
                   
                </div>

                <div className="relative flex w-full max-w-[40rem] flex-col mx-auto rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
              
                    <div className="mb-6 p-0 flex ">
                    <div>
                    <img src ={ImageIcons.leftarrow} onClick={handlePrevious} className="text-yellow-700 mr-32 w-10 h-22" >
            
            </img>
            </div>
                        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                           {currentTestimonial.text}
                        </p>
                        <div >
                    <img src ={ImageIcons.rightarrow} onClick={handleNext} className="text-yellow-700 ml-32 w-10 h-22  " >
            
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