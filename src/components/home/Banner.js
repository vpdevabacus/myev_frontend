import ImageIcons from "../../common/ImageIcons";
import { FaApple, FaGooglePlay } from "react-icons/fa";

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
                                className=" pt-64 md:max-w-none text-center mx-auto px-5 "
                            >
                                <h4
                                    className="font-semibold leading-10 tracking-tight text-left text-[#ffffff] text-center text-5xl md:text-7xl lg:text-8xl">
                                    <span className="inline sm:block ">Best<span className="text-[#0B7132]"> Ev Vehicle</span> and</span>
                                    <span
                                        className="relative mt-2 font-semibold  text-[#ffffff] leading-relaxed md:leading-loose text:xl sm:text-5xl md:text-7xl lg:text-8xl sm:inline-block mb-14"
                                    >Charging Station</span>
                                </h4>
                                <span className=" text-base md:text-xl font-medium text-[#ffffff] ">It’s your chance to own an EV Charging Station (Without having to manage it)</span>
                            </div>
                            <div
                                className="max-w-lg px-4 py-20 mx-auto text-left md:max-w-none md:text-center cursor-pointer z-50 relative"
                            >
                                <div className='text-center space-x-4'>

                                    <button className=" bg-white border border-[#E2E8F0] text-[#0B7132] hover:text-[#fff]  text-lg font-semibold py-3 px-4 rounded-lg inline-flex items-center hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#0B7132] duration-[400ms,700ms] transition-[color,box-shadow]">
                                        <span>
                                            <FaApple className='h-4 w-4 lg:h-10 lg:w-10 mr-5   ' />
                                        </span>
                                        <div className="flex flex-col">
                                            <span className=" font-bold  ">Available on</span>
                                            <span className=" font-bold -mt-1 ">APP STORE</span>
                                        </div>
                                    </button>
                                    <button className=" bg-white border border-[#E2E8F0]  text-[#0B7132] hover:text-[#fff] text-lg font-semibold py-3 px-3 rounded-lg inline-flex items-center hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#0B7132] duration-[400ms,700ms] transition-[color,box-shadow]">
                                        <span>
                                            <FaGooglePlay className='h-4 w-4 lg:h-10 lg:w-10 mr-5   ' />
                                        </span>
                                        <div className="flex flex-col">
                                            <span className=" font-bold  ">Available on</span>
                                            <span className=" font-bold -mt-1 ">GOOGLE PLAY</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=" py-8 sm:py-12 md:py-12 lg:py-32 xl:py-20 2xl:py-40 bg-[#0B7132] mb-28 mx-0 -mt-2">
                            {/* <div class=" container mx-auto absolute mt-40 ml-40">
                                <div class="w-9/12 mx-auto bg-[#E7F0F7] mb-8 rounded-2xl ">
                                    <div class="xl:flex xl:w-11/12 mx-auto pb-20 ">
                                        <div class="xl:w-6/12 pt-10 text-center xl:text-start">
                                            <p class="text-[#0B7132] text-xl xl:text-2xl font-medium mt-5">CONVENIENT & FAST</p>
                                            <p class="text-black font-bold  md:text-4xl xl:text-5xl md:font-semibold mt-3">Discover Places Nearby</p>
                                            <p class=" xl:w-8/12 text-black text-base xl:text-lg font-medium mt-3 px-12 xl:-ml-10 ">Lorem Ipsum is simply dummy It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        </div>
                                        <div class="xl:w-6/12 mx-auto w-8/12 mt-10">
                                            <img src={ImageIcons.map} />


                                        </div>

                                    </div>

                                </div>
                            </div> */}
                            <div className=" mx-auto w-12/12 py-14 ">
                                <img className=" absolute top-[500px] w-full h-200  pb-10 mt-80 sm:mt-60 md:mt-44 xl:mt-0" src={ImageIcons.movingcar} >
                                </img>
                            </div>
                        </div>







                    </section>
                </section>

            </div>





        </>
    )

}

export default Banner;