import React from "react";
import ImageIcons from "../../common/ImageIcons";

const backgroundImagePath = ImageIcons.feature_bg;

const style = {
    backgroundImage: `url('${backgroundImagePath}')`,
    height: '950px',
};

const Banner = () => {

    const leftItems = [
        {
            id: '01',
            text: "AC Charger Services",
            description: "Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.",
        },
        {
            id: '02',
            text: "EV Drivers Services",
            description: "Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.",

        },
        {
            id: '03',
            text: "EV Drivers Services",
            description: "Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith vbnfgbvnjhfgjhnfghfg            .",

        },

    ]
    const rightItems = [
        {
            id: '04',
            text: "DC Charger Services",
            description: "Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.",
        },
        {
            id: '05',
            text: "Home Charging",
            description: "Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.",

        },
        {
            id: '06',
            text: "Building Services",
            description: "Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith vbnfgbvnjhfgjhnfghfg            .",

        },

    ]

    const ListItem = ({ item }) => (
        <div className='my-12 flex flex-col w-6/12 sm:d-block '>
        <div className='my-12 flex flex-col  w-6/12 sm:d-block '>
            <div className=" flex flex-row items-center justify-start ">
                <div className="rounded-full h-16 w-16 bg-[#fff] py-4" >
                    <p className=" text-black text-center font-bold text-base sm:text-lg md:text-xl 2xl:text-2xl ">
                        {item.id}
                    </p>
                </div>
                <p className='ml-4 text-base sm:text-lg md:text-xl 2xl:text-3xl'>{item.text}</p>

            </div>
            <div className=' mt-2'>
                <p className=" text-white  font-normal text-sm sm:text-base md:text-lg 2xl:text-2xl text-left whitespace-wrap">
                    {item.description}
                </p>
            </div>
        </div>
    );
    const ListItem1 = ({ item }) => (
        <div className='my-12 flex flex-col '>
            <div className=" flex flex-row items-center justify-start ">
                <div className="rounded-full h-16 w-16 bg-[#fff] py-4" >
                    <p className=" text-black text-center font-bold text-base sm:text-lg  md:text-xl 2xl:text-2xl ">
                        {item.id}
                    </p>
                </div>
                <p className='ml-4 text-base sm:text-lg md:text-xl 2xl:text-3xl'>{item.text}</p>

            </div>

            <div className=' mt-2  '>
                <p className=" text-white  font-normal text-sm sm:text-base md:text-lg 2xl:text-2xl text-start whitespace-wrap">
                    {item.description}
                </p>
            </div>

        </div>
    );


    return (
        <>

            <div className="mt-80">
                <section>
                    <section className="relative ">
                        <div className="bg-cover " style={style}>
                            <div class="absolute inset-0 bg-[#016C80] bg-opacity-80"></div>
                            <div className="bg-[#016C80] bg-opacity-50 w-full h-full px-4 flex items-center justify-center absolute z-40">
                                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 my-6 font-semibold text-3xl text-white sm:text-center lg:text-4xl xl:text-5xl">
                                    <p>Excellent And Best Services</p>
                                </div>
                                <div className="container relative inset-0 flex items-center justify-center top-12 ">
                                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white">
                                        <ul className="">
                                            {leftItems.map((item) => (
                                                <ListItem key={item.id} item={item} />
                                            ))}
                                        </ul>
                                    </div>
                                    <img src={ImageIcons.feature_machine} alt="Center Image" className="w-3/12  h-auto hidden lg:inline-block " />
                                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white w-12/12 flex flex-row">
                                        <div className='w-6/12'></div>
                                        <ul className=" w-6/12">
                                            {rightItems.map((item) => (
                                                <ListItem1 key={item.id} item={item} />
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </section>
                </section>
            </div>

        </>
    )

}

export default Banner;