import React from 'react'
import ImageIcons from '../../common/ImageIcons'
import { useLocation } from 'react-router-dom';

const ServicesDetail = () => {

    const location = useLocation();
    const data = location?.state;
    console.log("sdfdsfsdf", data);



    return (
        <>
            <div className='container mx-auto my-20 px-4'>
                <div className="xl:mb-2">
                    <h2 className="text-center text-2xl text-black font-semibold md:text-4xl lg:text-5xl mb-10 md:mb-0">Charging Stations Will Provide AC Power</h2>
                    <div className='flex lg:flex-row w-11/12 justify-between mx-auto md:flex-col'>
                        <div className="py-12 md:w-11/12 md:mx-auto lg:mx-0 lg:w-6/12">

                            <p className="mt-7 text-xl font-normal text-[#000] text-left">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will.                    </p>
                            <p className="mt-7 text-xl font-normal text-[#000] text-left">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will.                    </p>
                        </div>
                        <div className="py-12 md:-10/12 lg:w-5/12 md:mx-auto lg:mx-0 items-center my-auto">
                            <img src={data?.image} className='rounded-2xl lg:w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesDetail
