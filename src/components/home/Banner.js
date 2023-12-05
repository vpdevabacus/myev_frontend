import ImageIcons from "../../common/ImageIcons";

const backgroundImagePath = ImageIcons.bannerimage;
const imagePath = ImageIcons.car;

const style = {
    backgroundImage: `url('${backgroundImagePath}')`,
    height: '950px',
};
const style1 = {
    backgroundImage: `url('${imagePath}')`,
    height: '900px',
};

const Banner = () => {
    return (
        <>

            <div>
                <section>
                    <section className="relative">
                        <div className="bg-cover " style={style}>
                            <div
                                className="max-w-lg px-4 sm:pt-24 pt-12 sm:pb-8 mx-auto text-left md:max-w-none md:text-center "
                            >
                                <h4
                                    className="font-bold leading-10 tracking-tight text-left text-[#ffffff] text-center sm:leading-none text-5xl sm:text-9xl ">
                                    <span className="inline md:block text-7xl ">Best<span className="text-[#0B7132]"> Ev Vehicle</span> and</span>
                                    <span
                                        className="relative mt-2 bg-clip-text text-[#ffffff] text-7xl md:inline-block mb-10"
                                    >Charging Station</span>

                                </h4>
                                <span className="text-xl font-medium text-[#ffffff]  ">It’s your chance to own an EV Charging Station (Without having to manage it)</span>
                            </div>
                            <div
                                className="max-w-lg px-4 pb-24 mx-auto text-left md:max-w-none md:text-center"
                            >
                                <div className='text-center py-4 space-x-4'>

                                    <button className="backdrop-blur-sm transition duration-500 ease-in-out bg-white border border-[#E2E8F0] translate-y-1 text-[#16161d] hover:bg-neutral-200 text-lg font-semibold py-4 px-9 rounded-lg inline-flex items-center">
                                        <span className="text-[#0B7132] font-bold "> Explore Charging Solutions</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className=" justify-center items-center ">
                            <img className="w-3/4 absolute top-[770px]" src={ImageIcons.car} >
                            </img>
                        </div>

                    </section>
                </section>
            </div>
          
        </>
    )

}

export default Banner;