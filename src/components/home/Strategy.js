import ImageIcons from "../../common/ImageIcons";

const Strategy = () => {
    return (
        <>
            <div className="py-20 bg-gray-50">
                <div className="container mx-auto px-6 md:px-12 xl:px-32">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">How we work</h2>

                    </div>
                    <div className="grid gap-12 items-center md:grid-cols-4">
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-full md:w-40 md:h-40 lg:w-64 lg:h-64"
                                src={ImageIcons.bannerimage} alt="woman" loading="lazy" width="640" height="805"></img>
                            <div>
                                <h4 className="text-2xl">Hentoni Doe</h4>
                                <span className="block text-sm text-gray-500">Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</span>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-full mt-32 md:w-40 md:h-40 lg:w-64 lg:h-64"
                                src={ImageIcons.bannerimage} alt="woman" loading="lazy" width="1000" height="667"></img>
                            <div>
                                <h4 className="text-2xl">Anabelle Doe</h4>
                                <span className="block text-sm text-gray-500">Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</span>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-full md:w-40 md:h-40 lg:w-64 lg:h-64"
                                src={ImageIcons.bannerimage} alt="woman" loading="lazy" width="1000" height="667"></img>
                            <div>
                                <h4 className="text-2xl">Anabelle Doe</h4>
                                <span className="block text-sm text-gray-500">Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</span>
                            </div>
                        </div>
                        <div className="space-y-4 text-center">
                            <img className="w-64 h-64 mx-auto object-cover rounded-full mt-32 md:w-40 md:h-40 lg:w-64 lg:h-64"
                                src={ImageIcons.bannerimage} alt="woman" loading="lazy" width="1000" height="667"></img>
                            <div>
                                <h4 className="text-2xl">Anabelle Doe</h4>
                                <span className="block text-sm text-gray-500">Possimus laoreet lec exercit , ipsum adipisicing hic ipsum rec sith.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto py-12 bg-black rounded-tl-full rounded-br-full  ">
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