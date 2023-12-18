import ImageIcons from "../../common/ImageIcons";

const Strategy = () => {
    return (
        <>
            <div className="py-20 bg-gray-50 ">
                <div className="container mx-auto px-6 md:px-12 xl:px-32">
                    <div className="xl:mb-2 text-center">
                        <h2 className="text-center text-2xl text-gray-900 font-bold md:text-4xl mb-10 md:mb-0">How we work</h2>

                    </div>
                    <div className="grid gap-12 items-center md:grid-cols-2 xl:gap-2 xl:grid-cols-4 md:-mt-20 xl:mt-0">
                        <div className="space-y-4 text-center">
                            <img className="w-60 h-60 mx-auto object-cover md:w-60 md:h-60 lg:w-64 lg:h-64"
                                src={ImageIcons.work} alt="woman" loading="lazy" ></img>
                            <div>
                                <h4 className="text-2xl font-medium">Fast Charging</h4>
                                <span className="block text-sm text-black mt-3">Experience swift device charging with our efficient solutions. Enjoy quick power boosts that keep you connected and on the move, eliminating unnecessary delays.</span>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <img className="w-60 h-60 mx-auto object-cover rounded-full md:mt-80 xl:mt-32 md:w-60 md:h-60 lg:w-64 lg:h-64"
                                src={ImageIcons.work1} alt="woman" loading="lazy" ></img>
                            <div>
                                <h4 className="text-2xl font-medium">Good Management</h4>
                                <span className="block text-sm text-black mt-3">Good management is vital for organizational success, involving coordination, strategic decisions, and effective communication to steer teams towards their goals.</span>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <img className="w-60 h-60 mx-auto object-cover rounded-full md:-mt-60 xl:mt-0 md:w-60 md:h-60 lg:w-64 lg:h-64"
                                src={ImageIcons.work2} alt="woman" loading="lazy" ></img>
                            <div>
                                <h4 className="text-2xl font-medium">Renewable Energy</h4>
                                <span className="block text-sm text-black">Renewable energy is the key to a sustainable future, harnessed from naturally replenishing sources like sunlight, wind, and water.</span>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <img className="w-60 h-60 mx-auto object-cover rounded-full md:mt-40 xl:mt-32 md:w-60 md:h-60 lg:w-64 lg:h-64"
                                src={ImageIcons.work3} alt="woman" loading="lazy" ></img>
                            <div>
                                <h4 className="text-2xl font-medium">Quality Charger</h4>
                                <span className="block text-sm text-black font-normal">Efficient, reliable charging for modern devices. Our high-quality charger delivers fast and safe power, meeting the demands of today's electronics.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <div className="container mx-auto py-12 bg-black rounded-tl-full rounded-br-full  ">
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
            </div> */}
        </>
    )

}
export default Strategy;