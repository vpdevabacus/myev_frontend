import ImageIcons from "../../common/ImageIcons";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const backgroundImagePath = ImageIcons.bannerimage;

const style = {
    backgroundImage: `url('${backgroundImagePath}')`,

};

const Banner = () => {
    return (
        <>


            <section className="relative h-full w-full">
                <div className="bg-cover w-full bg-center" style={style}>
                    <div
                        className=" pt-64 md:max-w-none text-center mx-auto px-5 "
                    >
                        <h4
                            className="font-bold  text-left text-[#ffffff] text-center text-5xl md:text-7xl ">
                            <span className="inline sm:block ">Best<span className="px-6 py-0"><span className="text-[#0B7132] bg-white px-2 py-0 ">EV Vehicle</span></span>and</span>
                            <span
                                className="relative mt-2 md:mt-0 font-semibold  text-[#ffffff] mt-20 text:xl sm:text-5xl md:text-7xl  sm:inline-block mb-6 md:mb-0 lg:mb-14"
                            >Charging Station</span>
                        </h4>
                        <span className=" text-base md:text-xl font-medium text-[#ffffff] ">It’s your chance to own an EV Charging Station (Without having to manage it)</span>
                    </div>
                    <div
                        className="max-w-lg sm:px-4 py-8 lg:py-20 mx-auto text-left md:max-w-none md:text-center z-40 md:relative"
                    >
                        <div className='text-center space-x-4'>

                            <button className="cursor-pointer bg-white border border-[#E2E8F0] text-[#0B7132] hover:text-[#fff] text-sm  sm:text-lg font-semibold py-3 px-2 sm:px-4 rounded-lg inline-flex items-center hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#0B7132] duration-[400ms,700ms] transition-[color,box-shadow]">
                                <span>
                                    <FaApple className='h-5 w-5 sm:h-8 sm:w-8 lg:h-10 lg:w-10 mr-2 sm:mr-5   ' />
                                </span>
                                <div className="flex flex-col">
                                    <span className=" font-bold  ">Available on</span>
                                    <span className=" font-bold -mt-1 ">APP STORE</span>
                                </div>
                            </button>
                            <button className="cursor-pointer bg-white border border-[#E2E8F0]  text-[#0B7132] hover:text-[#fff] text-sm sm:text-lg font-semibold py-3 px-2 sm:px-3 rounded-lg inline-flex items-center hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#0B7132] duration-[400ms,700ms] transition-[color,box-shadow]">
                                <span>
                                    <FaGooglePlay className='h-5 w-5 sm:h-8 sm:w-8 lg:h-10 lg:w-10 mr-2 sm:mr-5   ' />
                                </span>
                                <div className="flex flex-col">
                                    <span className=" font-bold  ">Available on</span>
                                    <span className=" font-bold -mt-1 ">GOOGLE PLAY</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" py-20 hidden sm:block sm:pt-48 md:pt-60 lg:py-48 xl:py-40 2xl:py-64 bg-[#0B7132] mb-28 mx-0 -mt-2 ">
                    <div className=" mx-auto w-12/12 py-14 ">
                        <img className=" absolute top-[500px] w-full h-200  pb-10 sm:mt-0 md:mt-16 lg:mt-44 xl:mt-0" src={ImageIcons.movingcar} >
                        </img>
                    </div>
                </div>

            </section>






        </>
    )

}

export default Banner;