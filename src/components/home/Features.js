import React from "react";
import ImageIcons from "../../common/ImageIcons";
import bgimgservices from "../../assets/Images/bg-img-services.png";
import bgimgmachine from "../../assets/Images/bg-img-machine.png";

const backgroundImagePath = ImageIcons.blueBg;

const style = {
  backgroundImage: `url('${backgroundImagePath}')`,
};

const Features = () => {
  const leftItems = [
    {
      id: "01",
      text: "Maximize Your Earnings",
      description: "Earn up to ₹4 Per Unit with Our Exclusive Rewards Program!",
    },
    {
      id: "02",
      text: "Top Income Opportunities",
      description: "The Ultimate Passive Income Opportunity Awaits You!",
    },
    {
      id: "03",
      text: "Effortless Earnings",
      description: "Automated Monthly Payouts and Monitoring",
    },
  ];
  const rightItems = [
    {
      id: "04",
      text: "Cost Reduction Strategies",
      description: "Lower Maintenance cost",
    },
    {
      id: "05",
      text: "Eco-Friendly Finances",
      description: "Going Green and Growing Wealth.",
    },
    {
      id: "06",
      text: "Smooth Sailing",
      description: "No operational headaches, just smooth sailing.",
    },
  ];

  const ListItem = ({ item }) => (
    <div className="my-5 md:my-12 flex flex-col sm:d-block ">
      <div className=" flex flex-row items-center justify-start ">
        <div className="rounded-full w-12 h-12 md:h-16 md:w-16 bg-[#fff] py-3 md:py-4">
          <p className=" text-black text-center font-bold text-base sm:text-lg md:text-xl 2xl:text-2xl ">
            {item.id}
          </p>
        </div>
        <p className="ml-4 text-base sm:text-lg md:text-xl 2xl:text-3xl">
          {item.text}
        </p>
      </div>
      <div className=" mt-2">
        <p className=" text-white  font-normal text-sm sm:text-base md:text-lg 2xl:text-2xl text-left whitespace-wrap">
          {item.description}
        </p>
      </div>
    </div>
  );
  const ListItem1 = ({ item }) => (
    <div className="my-5 md:my-12 flex flex-col ">
      <div className=" flex flex-row items-center justify-start ">
        <div className="rounded-full w-12 h-12 md:h-16 md:w-16 bg-[#fff] py-3 md:py-4">
          <p className=" text-black text-center font-bold text-base sm:text-lg  md:text-xl 2xl:text-2xl ">
            {item.id}
          </p>
        </div>
        <p className="ml-4 text-base sm:text-lg md:text-xl 2xl:text-3xl">
          {item.text}
        </p>
      </div>

      <div className=" mt-2  ">
        <p className=" text-white  font-normal text-sm sm:text-base md:text-lg 2xl:text-2xl text-start whitespace-wrap">
          {item.description}
        </p>
      </div>
    </div>
  );

  return (
    <>
      {/* Service Section Start */}
      <div className="features-section md:py-20 max-md:py-[50px] relative bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgimgservices})`}} >
        <div className="container mx-auto px-2">
          <h2 className="text-center md:pb-12 max-md:pb-8 text-[#fff]">Excellent And Best Services</h2>
          <div className="features-listing-info">
            <div className="flex items-center gap-5 max-md:flex-col">
              <div className="md:w-1/3 max-md:order-1">
                  <div className="left-icon-box-info mb-8">
                      <div className="left-icon-h4-info flex items-center gap-2 mb-3">
                        <div className="text-xl font-medium flex items-center rounded-full justify-center text-[#000] bg-[#fff] w-11 h-11">01</div>
                        <h4 className="text-[#fff]">AC Charger Services</h4>
                      </div>
                      <p className="text-[#fff]">Possimus laoreet lec exercit , ipsum adipisicing hicipsum rec sith.</p>
                  </div>
                  <div className="left-icon-box-info mb-8">
                      <div className="left-icon-h4-info flex items-center gap-2 mb-3">
                        <div className="text-xl font-medium flex items-center rounded-full justify-center text-[#000] bg-[#fff] w-11 h-11">02</div>
                        <h4 className="text-[#fff]">EV Drivers Services</h4>
                      </div>
                      <p className="text-[#fff]">Possimus laoreet lec exercit , ipsum adipisicing hicipsum rec sith.</p>
                  </div>
                  <div className="left-icon-box-info md:mb-8 max-md:mb-[10px]">
                      <div className="left-icon-h4-info flex items-center gap-2 mb-3">
                        <div className="text-xl font-medium flex items-center rounded-full justify-center text-[#000] bg-[#fff] w-11 h-11">03</div>
                        <h4 className="text-[#fff]">EV Drivers Services</h4>
                      </div>
                      <p className="text-[#fff]">Possimus laoreet lec exercit , ipsum adipisicing hicipsum rec sith.</p>
                  </div>
              </div>
              <div className="md:w-1/3 max-md:order-3">
                <div className="mid-img-info text-center bg-no-repeat bg-contain bg-center" style={{ backgroundImage: `url(${bgimgmachine})`}}> 
                  <img src={ImageIcons.EVCharging} />
                </div>
              </div>
              <div className="md:w-1/3 max-md:order-2">
                <div className="left-icon-box-info mb-8">
                      <div className="left-icon-h4-info flex items-center gap-2 mb-3">
                        <div className="text-xl font-medium flex items-center rounded-full justify-center text-[#000] bg-[#fff] w-11 h-11">04</div>
                        <h4 className="text-[#fff]">DC Charger Services</h4>
                      </div>
                      <p className="text-[#fff]">Possimus laoreet lec exercit , ipsum adipisicing hicipsum rec sith.</p>
                  </div>
                  <div className="left-icon-box-info mb-8">
                      <div className="left-icon-h4-info flex items-center gap-2 mb-3">
                        <div className="text-xl font-medium flex items-center rounded-full justify-center text-[#000] bg-[#fff] w-11 h-11">05</div>
                        <h4 className="text-[#fff]">Home Charging</h4>
                      </div>
                      <p className="text-[#fff]">Possimus laoreet lec exercit , ipsum adipisicing hicipsum rec sith.</p>
                  </div>
                  <div className="left-icon-box-info mb-8">
                      <div className="left-icon-h4-info flex items-center gap-2 mb-3">
                        <div className="text-xl font-medium flex items-center rounded-full justify-center text-[#000] bg-[#fff] w-11 h-11">06</div>
                        <h4 className="text-[#fff]">Building Services</h4>
                      </div>
                      <p className="text-[#fff]">Possimus laoreet lec exercit , ipsum adipisicing hicipsum rec sith.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Section End */}

      {/* <div className="mt-20">
    return (
        <>
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
  );
};

export default Features;
