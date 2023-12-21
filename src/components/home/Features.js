import React from "react";
import ImageIcons from "../../common/ImageIcons";

const backgroundImagePath = ImageIcons.blueBg ;

const style = {
    backgroundImage: `url('${backgroundImagePath}')`,
};


const Features = () => {

    const leftItems = [
        {
            id: '01',
            text: "Maximize Your Earnings",
            description: "Earn up to ₹4 Per Unit with Our Exclusive Rewards Program!",
        },
        {
            id: '02',
            text: "Top Income Opportunities",
            description: "The Ultimate Passive Income Opportunity Awaits You!",

        },
        {
            id: '03',
            text: "Effortless Earnings",
            description: "Automated Monthly Payouts and Monitoring",

        },

    ]
    const rightItems = [
        {
            id: '04',
            text: "Cost Reduction Strategies",
            description: "Lower Maintenance cost",
        },
        {
            id: '05',
            text: "Eco-Friendly Finances",
            description: "Going Green and Growing Wealth.",

        },
        {
            id: '06',
            text: "Smooth Sailing",
            description: "No operational headaches, just smooth sailing.",

        },

    ]

    const ListItem = ({ item }) => (
        <div className='my-5 md:my-12 flex flex-col sm:d-block '>
            <div className=" flex flex-row items-center justify-start ">
                <div className="rounded-full w-12 h-12 md:h-16 md:w-16 bg-[#fff] py-3 md:py-4" >
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
        <div className='my-5 md:my-12 flex flex-col '>
            <div className=" flex flex-row items-center justify-start ">
                <div className="rounded-full w-12 h-12 md:h-16 md:w-16 bg-[#fff] py-3 md:py-4" >
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

            <div className="strategy_bg py-20 Features-Section relative" style={style}>
                    <div className="container mx-auto">
                    <div className="xl:mb-2 text-center">
                        <h2 className="text-center text-2xl font-bold md:text-4xl mb-10 pb-12">
                        Excellent And Best Services
                        </h2>
                    </div>
                    <div class="BOX-SECTION mx-auto po">
                    <div class="px-2">
                        <div class="md:flex -mx-2 items-center">
                            <div class="w-1/3 px-2 Responsive-Query">
                                <div class="">
                                    <ul className="ul-Listing-div"><span className="H2-Header"><strong class="Ul-Number">01</strong>AC Charger Services</span>
                                    <li>Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</li>
                                    </ul>
                                    <ul className="ul-Listing-div"><span className="H2-Header"><strong class="Ul-Number">02</strong>AC Charger Services</span>
                                    <li>Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</li>
                                    </ul>
                                    <ul className="ul-Listing-div"><span className="H2-Header"><strong class="Ul-Number">03</strong>AC Charger Services</span>
                                    <li>Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="w-1/3 px-2 features-phone-img relative">
                                <div class="">
                                    <img src={ImageIcons.EVCharging}/>
                                </div>
                            </div>
                            <div class="w-1/3 px-2 Responsive-Query">
                                <div class="">
                                    <ul className="ul-Listing-div"><span className="H2-Header"><strong class="Ul-Number">04</strong>AC Charger Services</span>
                                    <li>Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</li>
                                    </ul>
                                    <ul className="ul-Listing-div"><span className="H2-Header"><strong class="Ul-Number">05</strong>AC Charger Services</span>
                                    <li>Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</li>
                                    </ul>
                                    <ul className="ul-Listing-div"><span className="H2-Header"><strong class="Ul-Number">05</strong>AC Charger Services</span>
                                    <li>Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

            {/* <div className="mt-20">
                <section>
                    <section className="relative ">
                        <div className="bg-cover " style={style}>
                            <div className="absolute inset-0 bg-[#016C80] bg-opacity-90"></div>
                            <div className="  container mx-auto h-full  flex items-center justify-center  z-40">
                                <div className="absolute text-center  top-5 md:top-8 left-1/2 transform -translate-x-1/2 my-6 font-semibold text-3xl text-white sm:text-center lg:text-4xl xl:text-5xl">
                                    <p>Excellent And Best Services</p>
                                </div>
                                <div className="w-12/12 relative md:flex md:flex-row 2xl:top-24 top-16  sm:top-0 px-4 xl:px-o  ">
                                    <div className="md:w-4/12 text-white ">
                                        <ul className="">
                                            {leftItems.map((item) => (
                                                <ListItem key={item.id} item={item} />
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="w-4/12 ">
                                        <img src={ImageIcons.feature_machine} alt="Center Image" className="w-10/12  h-auto hidden lg:inline-block " />
                                    </div>
                                    <div className=" text-white flex flex-end md:w-4/12 justify-items-end ">

                                        <ul className=" ">
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
            </div> */}

        </>
    )

}

export default Features;