import React from 'react';
import ImageIcons from '../../common/ImageIcons';

const backgroundImagePath = ImageIcons.shape1;
const backgroundImagePath1 = ImageIcons.shape2;

const style = {
    backgroundImage: `url('${backgroundImagePath}')`,
    height: '646px',

};

const style1 = {
    backgroundImage: `url('${backgroundImagePath1}')`,
    height: '646px',

};

const Charges = () => {

    const features = [
        {
            id: '01',
            text: "Access advanced charging infrastructure during your work hours.",
        },
        {
            id: '02',
            text: "Blends seamlessly with office environments.",

        },
        {
            id: '03',
            text: "Fast and efficient charging to keep you on the move.",

        },
        {
            id: '04',
            text: "Schedule charging sessions to align with your workday activities.",

        },



    ]

    const features1 = [
        {
            id: '01',
            text: "Conveniently located in popular malls and hotels.",
        },
        {
            id: '02',
            text: "Fast and efficient charging for reduced wait times.",

        },
        {
            id: '03',
            text: "Special packages combining accommodation and charging.",

        },
        {
            id: '04',
            text: "Hotels dedicated to eco-friendly guest options.",

        },



    ]

    const FeatureList = ({ item }) => (
        <div className='my-1 flex flex-col '>
            <div className=" flex flex-row items-center justify-start">
                <img src={ImageIcons.Polygon} />
                <p className='ml-4 text-lg text-[#6E6E6E]'>{item.text}</p>

            </div>

        </div>
    );
    const FeatureList1 = ({ item }) => (
        <div className='my-1 flex flex-col '>
            <div className=" flex flex-row items-center justify-start">
                <img src={ImageIcons.Polygon} />
                <p className='ml-4 text-lg text-[#fff]'>{item.text}</p>

            </div>

        </div>
    );

    return (
        <>

            <div className="  flex items-center justify-center  w-full bg-[#F1F8E8]">
                <div className="my-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:w-full xl:container xl:px-6 lg:px-20">




                    <div className="max-w-sm text-center lg:text-left">
                        <div>
                            <div className='flex flex-row place-items-center'>
                                <p className="text-xl font-medium tracking-tight text-[#0B7132] sm:text-3xl leading-9">
                                    EV CHARGING SOLUTIONS                                </p>
                                <img src={ImageIcons.Rectangle} className='h-0.5 w-20 ml-8' />
                            </div>
                            <p className="text-3xl font-semibold  text-[#000] sm:text-5xl mt-3">
                                Empowering Sustainability Anywhere You Go                            </p>
                            <p className="max-w-xl text-xl font-normal text-[#000] mt-6">
                                Greening workplaces with seamless integration and convenient charging during office hours, while offering eco-friendly options at popular leisure destinations. Join us in powering sustainability wherever you go!                                </p>
                            <img src={ImageIcons.filling_machine} className='h-auto w-22' />
                        </div>



                    </div>






                    <div className="max-w-sm mx-auto relative rounded-lg ">
                        <div className="bg-cover px-4 py-8 " style={style}>
                            <div className="relative m-0 mb-0 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-2 text-left text-gray-700 shadow-none">
                                <p className="text-xl font-semibold tracking-tight text-[#0B7132] sm:text-3xl leading-9">
                                    OFFICE AND WORKPLACE
                                </p>
                                {/* <p className="text-4xl font-semibold  text-[#000] sm:text-6xl mt-3">
                                    ₹ 1,18,000/-
                                </p> */}
                                <p className="text-xl font-normal  text-[#676767] sm:text-xl mt-7">
                                    Charge your EV conveniently at work! Our workplace stations support eco-friendly commuting, making sustainability effortless.
                                </p>
                            </div>
                            <div className="p-6 mt-6 border border-solid border-[#E5E5E5] rounded-3xl">
                                {features.map((item) => (
                                    <FeatureList key={item.id} item={item} />
                                ))}
                            </div>
                            {/* <div className="mt-6 p-0">
                                <div className="flex justify-center gap-3 lg:justify-start">
                                    <button className="px-3 md:px-8 py-1 md:py-4 bg-[#0B7132] text-white rounded-lg text-xl"><i className="fa-solid fa-arrow-right-to-bracket"></i>Sign Up</button>

                                </div>
                            </div> */}
                        </div>
                    </div>


                    <div className="max-w-sm mx-auto relative rounded-lg  ">
                        <div className="bg-cover px-4 py-8 " style={style1}>
                            <div className="relative m-0 mb-0 overflow-hidden rounded-none  bg-transparent bg-clip-border pb-2 text-left text-gray-700 shadow-none">
                                <p className="text-xl font-semibold tracking-tight text-[#fff] sm:text-3xl leading-9">
                                    MALLS AND HOTELS
                                </p>
                                {/* <p className="text-4xl font-semibold  text-[#fff] sm:text-6xl mt-3">
                                    ₹ 1,18,000/-
                                </p> */}
                                <p className="text-xl font-normal  text-[#fff] sm:text-xl mt-7">
                                    Explore our EV Charging Stations at top malls and hotels! As the world embraces sustainability, our cutting-edge solutions offer convenient electric vehicle charging. Join us in the green revolution!                                </p>
                            </div>
                            <div className="p-6 mt-6 border border-solid border-[#E5E5E5] rounded-3xl">
                                {features1.map((item) => (
                                    <FeatureList1 key={item.id} item={item} />
                                ))}
                            </div>
                            {/* <div className="mt-6 p-0">
                                <div className="flex justify-center gap-3 lg:justify-start">
                                    <button className="px-3 md:px-8 py-1 md:py-4 bg-[#0B7132] text-white rounded-lg text-xl"><i className="fa-solid fa-arrow-right-to-bracket"></i>Sign Up</button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Charges;
