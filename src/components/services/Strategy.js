import ImageIcons from "../../common/ImageIcons";

const Strategy = () => {
    return (
        <>
            <div className="py-20 bg-[#F1F8E8] ">
                <div className="container mx-auto px-6 md:px-12 xl:px-32">
                    <div className="xl:mb-2 text-center">
                        <h2 className="text-center text-2xl text-black font-semibold md:text-4xl lg:text-5xl mb-10 md:mb-0">How We Work</h2>

                    </div>
                    <div className="grid gap-12 items-center md:grid-cols-2 xl:gap-2 xl:grid-cols-4 md:-mt-20 xl:mt-0 mb-20">
                        <div className="space-y-4 text-center">
                            <img className="w-60 h-60 mx-auto object-cover rounded-full md:w-60 md:h-60 lg:w-64 lg:h-64"
                                src={ImageIcons.bannerimage} alt="woman" loading="lazy" ></img>
                            <div>
                                <h4 className="text-3xl font-medium">Fast Charging</h4>
                                <span className="block text-lg text-black">Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</span>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <img className="w-60 h-60 mx-auto object-cover rounded-full md:mt-80 xl:mt-32 md:w-60 md:h-60 lg:w-64 lg:h-64"
                                src={ImageIcons.bannerimage} alt="woman" loading="lazy" ></img>
                            <div>
                                <h4 className="text-3xl font-medium">Good Management</h4>
                                <span className="block text-lg text-black">Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</span>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <img className="w-60 h-60 mx-auto object-cover rounded-full md:-mt-60 xl:mt-0 md:w-60 md:h-60 lg:w-64 lg:h-64"
                                src={ImageIcons.bannerimage} alt="woman" loading="lazy" ></img>
                            <div>
                                <h4 className="text-3xl font-medium">Renewable Energy</h4>
                                <span className="block text-lg text-black">Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</span>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <img className="w-60 h-60 mx-auto object-cover rounded-full md:mt-40 xl:mt-32 md:w-60 md:h-60 lg:w-64 lg:h-64"
                                src={ImageIcons.bannerimage} alt="woman" loading="lazy" ></img>
                            <div>
                                <h4 className="text-3xl font-medium">Quality Charger</h4>
                                <span className="block text-lg text-black">Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container  mx-auto py-20 bg-black rounded-tl-full rounded-br-full -mt-24  ">
                <div class="w-10/12 mx-auto flex">
                    <div class="w-3/12 flex space-between">
                        <div >
                            <img src={ImageIcons.chargingsession} class="w-20 h-20"></img>
                        </div>
                        <div class="ml-3">
                            <h5 class="text-white text-3xl font-semibold">1582+</h5>
                            <p class="text-white font-weight: 500 text-lg">Charging sessions</p>
                        </div>


                    </div>
                    <div class="w-3/12 flex space-between">
                        <div >
                            <img src={ImageIcons.chargingsession} class="w-20 h-20"></img>
                        </div>
                        <div class="ml-3">
                            <h5 class="text-white text-3xl font-semibold">1582+</h5>
                            <p class="text-white font-weight: 500 text-lg">Charging sessions</p>
                        </div>


                    </div>
                    <div class="w-3/12 flex space-between">
                        <div >
                            <img src={ImageIcons.chargingsession} class="w-20 h-20"></img>
                        </div>
                        <div class="ml-3">
                            <h5 class="text-white text-3xl font-semibold">1582+</h5>
                            <p class="text-white font-weight: 500 text-lg">Charging sessions</p>
                        </div>


                    </div>
                    <div class="w-3/12 flex space-between">
                        <div >
                            <img src={ImageIcons.chargingsession} class="w-20 h-20"></img>
                        </div>
                        <div class="ml-3">
                            <h5 class="text-white text-3xl font-semibold">1582+</h5>
                            <p class="text-white font-weight: 500 text-lg">Charging sessions</p>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )

}
export default Strategy;