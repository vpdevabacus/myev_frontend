import ImageIcons from "../../common/ImageIcons";

const backgroundImagePath = ImageIcons.bannerimage;

const style = {
    backgroundImage: `url('${backgroundImagePath}')`,
    backgroundPosition: 'center',
    height: '550px ',
    display: 'flex',
    alignItems: 'center',
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
                                    className="font-bold leading-10  text-left text-[#ffffff] text-center sm:leading-none text-5xl sm:text-9xl ">
                                    <span className="inline md:block text-7xl text-center ">About Us</span>
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