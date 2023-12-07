import React from 'react';
import ImageIcons from '../../common/ImageIcons';

const backgroundImagePath = ImageIcons.shape1;
const backgroundImagePath1 = ImageIcons.shape2;



const style = {
    backgroundImage: `url('${backgroundImagePath}')`,
    height: '646px',
    width: '410px'
};

const style1 = {
    backgroundImage: `url('${backgroundImagePath1}')`,
    height: '646px',
    width: '410px'
};

const Charges = () => {

    const features = [
        {
            id: '01',
            text: "Charging station for home",
        },
        {
            id: '02',
            text: "Charge point setting",

        },
        {
            id: '03',
            text: "Free Support",

        },
        {
            id: '04',
            text: "1 year hardware warranty",

        },

        {
            id: '05',
            text: "Remote access to the device",

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

            <div class=" mx-auto lg:h-screen flex items-center justify-center  w-full bg-[#F1F8E8]">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full container">

                    <div className="text-left">


                        <div className="max-w-xl text-center lg:text-left">
                            <div>
                                <div className='flex flex-row place-items-center'>
                                    <p className="text-xl font-medium tracking-tight text-[#0B7132] sm:text-3xl leading-9">
                                        ABOUT ECHARGE
                                    </p>
                                    <img src={ImageIcons.Rectangle} className='h-0.5 w-20 ml-8' />
                                </div>
                                <p className="text-3xl font-semibold  text-[#000] sm:text-5xl mt-3">
                                    Price of Our Services on The Road
                                </p>
                                <p className="max-w-xl text-xl font-normal text-[#000] mt-6">
                                    An EV charging station is a device that provides electric energy for recharging electric vehicles, enabling the transfer of electrical energy from the grid to the vehicle's battery pack.</p>
                                <img src={ImageIcons.filling_machine} className='h-auto w-22' />
                            </div>



                        </div>



                    </div>


                    <div class="max-w-sm mx-auto relative rounded-lg cursor-pointer cursor-pointer">
                        <div className="bg-cover px-4 py-8 " style={style}>
                            <div class="relative m-0 mb-0 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-2 text-left text-gray-700 shadow-none">
                                <p className="text-xl font-semibold tracking-tight text-[#0B7132] sm:text-3xl leading-9">
                                    HOME CHARGING
                                </p>
                                <p className="text-4xl font-semibold  text-[#000] sm:text-6xl mt-3">
                                    ₹ 1,18,000/-
                                </p>
                                <p className="text-xl font-normal  text-[#676767] sm:text-xl mt-7">
                                    Amet minim mollit no duis deser ulamco sit enim aliqua.
                                </p>
                            </div>
                            <div class="p-6 mt-6 border border-solid border-[#E5E5E5] rounded-3xl">
                                {features.map((item) => (
                                    <FeatureList key={item.id} item={item} />
                                ))}
                            </div>
                            <div class="mt-6 p-0">
                                <div className="flex justify-center gap-3 lg:justify-start">
                                    <button className="px-3 md:px-8 py-1 md:py-4 bg-[#0B7132] text-white rounded-lg text-xl"><i className="fa-solid fa-arrow-right-to-bracket"></i>Sign Up</button>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="max-w-sm mx-auto relative rounded-lg cursor-pointer cursor-pointer">
                        <div className="bg-cover px-4 py-8 " style={style1}>
                            <div class="relative m-0 mb-0 overflow-hidden rounded-none  bg-transparent bg-clip-border pb-2 text-left text-gray-700 shadow-none">
                                <p className="text-xl font-semibold tracking-tight text-[#fff] sm:text-3xl leading-9">
                                    HOME CHARGING
                                </p>
                                <p className="text-4xl font-semibold  text-[#fff] sm:text-6xl mt-3">
                                    ₹ 1,18,000/-
                                </p>
                                <p className="text-xl font-normal  text-[#fff] sm:text-xl mt-7">
                                    Amet minim mollit no duis deser ulamco sit enim aliqua.
                                </p>
                            </div>
                            <div class="p-6 mt-6 border border-solid border-[#E5E5E5] rounded-3xl">
                                {features.map((item) => (
                                    <FeatureList1 key={item.id} item={item} />
                                ))}
                            </div>
                            <div class="mt-6 p-0">
                                <div className="flex justify-center gap-3 lg:justify-start">
                                    <button className="px-3 md:px-8 py-1 md:py-4 bg-[#0B7132] text-white rounded-lg text-xl"><i className="fa-solid fa-arrow-right-to-bracket"></i>Sign Up</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Charges;
