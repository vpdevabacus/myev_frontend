import React from 'react';
import ImageIcons from '../../common/ImageIcons';

const Charges = () => {
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
                                <p className="text-3xl font-semibold  text-[#000] sm:text-5xl mt-7">
                                    Price of Our Services on The Road
                                </p>
                                <p className="max-w-xl mt-7 text-xl font-normal text-[#000">
                                    An EV charging station is a device that provides electric energy for recharging electric vehicles, enabling the transfer of electrical energy from the grid to the vehicle's battery pack.                                </p>
                                <img src={ImageIcons.filling_machine} />
                            </div>
                            <div className="flex justify-center gap-3 mt-10 lg:justify-start">
                                <button className="px-3 md:px-8 py-1 md:py-4 bg-[#0B7132] text-white rounded-lg text-xl"><i className="fa-solid fa-arrow-right-to-bracket"></i> Read More</button>

                            </div>


                        </div>



                    </div>


                    <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Img by Meriç Dağlı https://unsplash.com/@meric" class="w-full h-auto object-cover rounded-lg" />
                        <div class="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                            <h1 class="text-2xl font-semibold">Nature Image</h1>
                            <p class="mt-2">This is a beautiful nature image placeholder. You can replace it with your own image.</p>
                        </div>
                    </div>


                    <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer cursor-pointer">
                        <img src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Img by Meriç Dağlı https://unsplash.com/@meric" class="w-full h-auto object-cover rounded-lg" />
                        <div class="absolute bottom-0 left-0 right-0 h-40 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                            <h1 class="text-2xl font-semibold">Nature Image</h1>
                            <p class="mt-2">This is a beautiful nature image placeholder. You can replace it with your own image.</p>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Charges;
