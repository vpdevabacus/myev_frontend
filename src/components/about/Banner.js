import ImageIcons from "../../common/ImageIcons";

const backgroundImagePath = ImageIcons.bannerimage;

const style = {
    backgroundImage: `url('${backgroundImagePath}')`,
};


const Banner = () => {
    return (
        <>
            <div>
                <section>
                    <section className="relative h-full w-full">
                        <div className="bg-cover bg-center h-3/6 md:h-4/6 lg:h-5/6 py-24 md:py-28 lg:py-28 xl:py-32 xl:full flex items-center justify-center  " style={style}>


                            <div
                                className=" px-4  mx-auto text-center md:max-w-none md:text-center "
                            >
                                <h4
                                    className="font-bold text-[#ffffff] text-center mt-28 sm:mt-32 md:mt-28 lg:mt-40 xl:mt-60  sm:leading-none ">
                                    <span className="text-4xl lg:text-6xl xl:text-7xl  ">About Us</span>
                                </h4>
                            </div>
                        </div>

                    </section>
                </section>

                <img src={ImageIcons.mapsection} />


            </div>

            {/* <div className="flex-box bg-[#cccccc] p-5 h-25 d-flex flex-wrap items-start">
                <div className="">1</div>
                <div className=" flex-box-2">2</div>
                <div className="">3</div>
                <div className="">4</div>
                <div className="">5</div>
                <div className="">6</div>
                <div className="">7</div>
                <div className="">8</div>
                <div className="">9</div>
            </div> */}

        </>
    )

}
export default Banner;