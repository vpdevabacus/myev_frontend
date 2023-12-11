import ImageIcons from "../../common/ImageIcons";

const backgroundImagePath = ImageIcons.bannerimage;

const style = {
    backgroundImage: `url('${backgroundImagePath}')`,
    height: '950px',
};

const Banner = () => {
    return (
        <>

            <div>
                <section>
                    <section className="relative">
                        <div className="bg-cover " style={style}>
                            <div
                                className="max-w-lg pt-64 md:max-w-none text-center  "
                            >
                                <h4
                                    className="font-bold leading-10 tracking-tight text-left text-[#ffffff] text-center sm:leading-none text-4xl sm:text-9xl">
                                    <span className="inline md:block">Best<span className="text-[#0B7132] "> Ev Vehicle</span> and</span>
                                    <span
                                        className="relative mt-2 bg-clip-text text-[#ffffff] text-7xl md:inline-block mb-10"
                                    >Charging Station</span>

                                </h4>
                                <span className="text-xl font-medium text-[#ffffff] ">It’s your chance to own an EV Charging Station (Without having to manage it)</span>
                            </div>
                            <div
                                className="max-w-lg px-4 py-20 mx-auto text-left md:max-w-none md:text-center"
                            >
                                <div className='text-center space-x-4'>

                                    <button className="backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-4 px-9 rounded-lg inline-flex items-center">
                                        <span className="text-[#0B7132] font-bold "> Explore Charging Solutions</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=" mx-auto w-8/12 py-14   ">
                            <img className="w-3/4 absolute top-[770px]  " src={ImageIcons.car} >
                            </img>
                        </div>



                    </section>
                </section>


            </div>
            <div class=" container mx-auto pt-80 pb-10 ">
                <div class="w-9/12 mx-auto bg-[#E7F0F7] mb-8 rounded-2xl ">
                    <div class="flex w-11/12 mx-auto pb-20 ">
                        <div class="w-6/12 pt-10">
                            <p class="text-[#0B7132] text-2xl font-medium mt-5">CONVENIENT & FAST</p>
                            <p class="text-black text-5xl font-semibold mt-3">Discover Places Nearby</p>
                            <p class=" w-8/12 text-black text-lg font-medium mt-3">Lorem Ipsum is simply dummy It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <div class="w-6/12 ">
                            <img src={ImageIcons.map} />


                        </div>

                    </div>

                </div>
            </div>

        </>
    )

}

export default Banner;