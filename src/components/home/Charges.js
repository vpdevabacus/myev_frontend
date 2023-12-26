import React from "react";
import ImageIcons from "../../common/ImageIcons";
import aboutChargingBg from "../../assets/Images/about_charging_bg.svg";
import { Link } from 'react-router-dom'


const backgroundImagePath = ImageIcons.shape1;
const backgroundImagePath1 = ImageIcons.shape2;
const backgroundImagePath2 = ImageIcons.EVCharging1;

const style = {
  backgroundImage: `url('${backgroundImagePath}')`,
  height: "100%",
};

const style1 = {
  backgroundImage: `url('${backgroundImagePath1}')`,
  height: "100%",
};
const style2 = {
  backgroundImage: `url('${backgroundImagePath2}')`,
  height: "100%",
  background: "cover",
};

const Charges = () => {
  const features = [
    {
      id: "01",
      text: "Charging station for home",
    },
    {
      id: "02",
      text: "Charge point setting",
    },
    {
      id: "03",
      text: "Free Support",
    },
    {
      id: "04",
      text: "1 year hardware warranty",
    },
  ];

  const features1 = [
    {
      id: "01",
      text: "Public charging station",
    },
    {
      id: "02",
      text: "Charge point setting",
    },
    {
      id: "03",
      text: "Free Support",
    },
    {
      id: "04",
      text: "1 year hardware warranty",
    },
  ];

  const FeatureList = ({ item }) => (
    <div className="my-[5px] flex flex-col ">
      <div className=" flex flex-row items-center justify-start">
        <img src={ImageIcons.Polygon} />
        <p className="ml-[10px] text-[#6E6E6E]">{item.text}</p>
      </div>
    </div>
  );
  const FeatureList1 = ({ item }) => (
    <div className="my-[5px] flex flex-col ">
      <div className=" flex flex-row items-center justify-start">
        <img src={ImageIcons.Polygon} />
        <p className="ml-[10px] text-[#fff]">{item.text}</p>
      </div>
    </div>
  );

  return (
    <>
      <section className="md:py-[90px] py-[50px] bg-[#F1F8E8]">
        <div className="container">
          <div className="flex lg:flex-row flex-col xl:gap-[30px] lg:gap-[20px]">
            <div className="lg:w-[39%] md:w-[100%] lg:mb-[0] mb-[360px]">
              <div className="flex flex-row place-items-center">
                <h4 className="font-medium relative text-[#0B7132] font-medium mb-[10px] green-line-heading">ABOUT ECHARGE </h4>
              </div>
              <h2 className="font-semibold text-[#000] mb-[22px]">Price of Our Services on The Road</h2>
              <p className="max-w-xl text-xl font-normal text-[#000] mt-6"> An EV charging station is a device that provides electric energy for recharging electric vehicles, enabling the transfer of electrical energy from the grid to the vehicle's battery pack.</p>
              <img src={ImageIcons.filling_machine} className="absolute left-0 z-10 w-[340px] xl:w-[500px] lg:w-[380px] md:w-[500px] sm:w-[400px] mt-[15px]" />
              <img className="absolute lg:left-[34%] lg:right-unset right-[30px] mt-[50px] xl:w-[280px] md:w-[250px] sm:w-[200px] w-[200px] mg:mt-[15px] md:mt-[70px] mt-[150px] " src={aboutChargingBg} />
            </div>
            <div className="lg:mt-0 mt-[40px] lg:w-[61%] md:w-[100%] grid grid-cols-1 sm:grid-cols-2 gap-y-[40px] gap-x-[20px] xl:gap-x-[26px] lg:gap-x-[15px]">
              <div className="relative px-[15px] pt-[35px] pb-[95px] home_charging-bg after:bg-[#fff]">
                <div className="relative z-20">
                  <h4 className="text-[#0B7132] mb-[5px]">HOME CHARGING </h4>
                  <h2 className="text-black mb-[15px] xl:text-[44px] lg:text-[42px]">
                    <span className="font-sans font-normal">₹</span> 1,18,000/-
                  </h2>
                  <p className="text-[#676767] text-[20px]">
                    Amet minim mollit no duis deser ulamco sit enim aliqua.
                  </p>
                  <div className="p-[20px] my-[30px] border border-solid border-[#E5E5E5] rounded-3xl">
                    {features.map((item) => (
                      <FeatureList key={item.id} item={item} />
                    ))}
                  </div>
                  <Link to ="/contact">
                  <button className="duration-[400ms,700ms] px-3 min-w-[175px] font-semibold text-[18px] md:px-8 h-[60px] py-1 md:py-4 bg-[#0B7132] hover:bg-[#000] text-white rounded-lg">
                    Sign Up
                  </button>
                  </Link>
                </div>
              </div>
              <div className="relative px-[15px] pt-[35px] pb-[95px] home_charging-bg after:bg-[#000]" >
                <div className="relative z-20">
                  <h4 className="text-white mb-[5px]">PUBLIC CHARGING</h4>
                  <h2 className="text-white mb-[15px] xl:text-[44px] lg:text-[42px]">
                    <span className="font-sans font-normal">₹</span> 2,10,000/-
                  </h2>
                  <p className="text-white text-[20px]">
                    Amet minim mollit no duis deser ulamco sit enim aliqua.
                  </p>
                  <div className="p-[20px] my-[30px] border border-solid border-[#E5E5E5] rounded-3xl">
                    {features1.map((item) => (
                      <FeatureList1 key={item.id} item={item} />
                    ))}
                  </div>
                  <Link to ="/contact">
                  <button className="duration-[400ms,700ms] px-3 min-w-[175px] font-semibold text-[18px] md:px-8 h-[60px] py-1 md:py-4 bg-[#0B7132] hover:bg-[#fff] hover:text-[#0B7132] text-white rounded-lg">
                    Sign Up
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Charges;
