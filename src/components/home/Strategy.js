import ImageIcons from "../../common/ImageIcons";
import "./Home.css";

const Strategy = () => {
  return (
    <>
      <div className="strategy_bg py-20">
        <div className="container mx-auto">
          <div className="xl:mb-2 text-center">
            <h2 className="text-center text-gray-900 font-bold md:text-4xl mb-10 pb-12 Ho0w-We-Work">
              How we work
            </h2>
          </div>
          <div class="BOX-SECTION mx-auto po">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              <div class="flex justify-center text-6xl">
                <div className="space-y-4 text-center box-1">
                  <img className="afterDIV" src={ImageIcons.beforeimg} />
                  <img
                    className="mx-auto md:w-50 md:14rem lg:w-14rem lg:h-60"
                    src={ImageIcons.work}
                    alt="woman"
                    loading="lazy"
                  ></img>
                  <div className="responsive-CSS">
                    <h4 className="text-2xl font-medium">Fast Charging</h4>
                    <span className="Font-Set block text-sm text-black mt-3">
                      Experience swift device charging with our efficient
                      solutions. Enjoy quick power boosts that keep you
                      connected and on the move, eliminating unnecessary delays.
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex justify-center text-6xl">
                <div className="space-y-4 text-center box-2">
                  <img
                    className="mx-auto md:w-50 md:14rem lg:w-14rem lg:h-60"
                    src={ImageIcons.work1}
                    alt="woman"
                    loading="lazy"
                  ></img>
                  <div className="responsive-CSS">
                    <h4 className="text-2xl font-medium">Good Management</h4>
                    <span className="Font-Set block text-sm text-black mt-3">
                      Good management is vital for organizational success,
                      involving coordination, strategic decisions, and effective
                      communication to steer teams towards their goals.
                    </span>
                  </div>
                  <img className="beforeDIV" src={ImageIcons.afterimg} />
                </div>
              </div>
              <div class="flex justify-center text-6xl relative">
                <div className="space-y-4 text-center box-1">
                  <img
                    className="afterDIV afterDIV-modift"
                    src={ImageIcons.beforeimg}
                  />
                  <img
                    className="mx-auto md:w-50 md:14rem lg:w-14rem lg:h-60"
                    src={ImageIcons.work2}
                    alt="woman"
                    loading="lazy"
                  ></img>
                  <div className="responsive-CSS">
                    <h4 className="text-2xl font-medium">Renewable Energy</h4>
                    <span className="Font-Set block text-sm text-black mt-3">
                      Renewable energy is the key to a sustainable future,
                      harnessed from naturally replenishing sources like
                      sunlight, wind, and water.
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex justify-center text-6xl">
                <div className="space-y-4 text-center box-2">
                  <img
                    className="mx-auto md:w-50 md:14rem lg:w-14rem lg:h-60"
                    src={ImageIcons.work3}
                    alt="woman"
                    loading="lazy"
                  ></img>
                  <div className="responsive-CSS">
                    <h4 className="text-2xl font-medium">Quality Charger</h4>
                    <span className="Font-Set block text-sm text-black mt-3">
                      Efficient, reliable charging for modern devices. Our
                      high-quality charger delivers fast and safe power, meeting
                      the demands of today's electronics.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>

          {/* tanu */}

          {/* <div className="grid gap-12 items-center md:grid-cols-2 xl:gap-2 xl:grid-cols-4 md:-mt-20 xl:mt-0">
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
                    </div> */}

                    {/* tanu end  */}
       

      {/* <div className="container mx-auto py-12 bg-black rounded-tl-full rounded-br-full  ">
                <div className="w-10/12 mx-auto flex">
                    <div className="w-3/12 flex space-between">
                        <div >
                            <img src={ImageIcons.chargingsession} className="w-20 h-20"></img>
                        </div>
                        <div className="ml-3">
                            <h5 className="text-white text-3xl font-semibold">1582+</h5>
                            <p className="text-white font-weight: 500 text-lg">Charging sessions</p>
                        </div>


                    </div>
                    <div className="w-3/12 flex space-between">
                        <div >
                            <img src={ImageIcons.chargingsession} className="w-20 h-20"></img>
                        </div>
                        <div className="ml-3">
                            <h5 className="text-white text-3xl font-semibold">1582+</h5>
                            <p className="text-white font-weight: 500 text-lg">Charging sessions</p>
                        </div>


                    </div>
                    <div className="w-3/12 flex space-between">
                        <div >
                            <img src={ImageIcons.chargingsession} className="w-20 h-20"></img>
                        </div>
                        <div className="ml-3">
                            <h5 className="text-white text-3xl font-semibold">1582+</h5>
                            <p className="text-white font-weight: 500 text-lg">Charging sessions</p>
                        </div>


                    </div>
                    <div className="w-3/12 flex space-between">
                        <div >
                            <img src={ImageIcons.chargingsession} className="w-20 h-20"></img>
                        </div>
                        <div className="ml-3">
                            <h5 className="text-white text-3xl font-semibold">1582+</h5>
                            <p className="text-white font-weight: 500 text-lg">Charging sessions</p>
                        </div>


                    </div>

                </div>
            </div> */}
    </>
  );
};
export default Strategy;
