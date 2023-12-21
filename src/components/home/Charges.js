import React from "react";
import ImageIcons from "../../common/ImageIcons";

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
    <div className="my-1 flex flex-col ">
      <div className=" flex flex-row items-center justify-start">
        <img src={ImageIcons.Polygon} />
        <p className="ml-4 text-lg text-[#6E6E6E]">{item.text}</p>
      </div>
    </div>
  );
  const FeatureList1 = ({ item }) => (
    <div className="my-1 flex flex-col ">
      <div className=" flex flex-row items-center justify-start">
        <img src={ImageIcons.Polygon} />
        <p className="ml-4 text-lg text-[#fff]">{item.text}</p>
      </div>
    </div>
  );

  return (
    <>
      <div className="flex items-center justify-center  w-full" style={style2}>
        <div className="my-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:w-full xl:container xl:px-6 lg:px-20 W-Div-Add">
          <div className="max-w-lg text-center lg:text-left W-Div-Add2">
            <div>
              <div className="flex flex-row place-items-center  modify-responsive001">
                <p className="text-xl font-medium tracking-tight text-[#0B7132] sm:text-3xl leading-9">
                  ABOUT ECHARGE
                </p>
                <img
                  src={ImageIcons.Rectangle}
                  className="After_img_dnome h-0.5 w-20 ml-8"
                />
              </div>
              <p className="text-3xl font-semibold  text-[#000] sm:text-5xl mt-3 SUB-Header">
                Price of Our Services on The Road
              </p>
              <p className="max-w-xl text-xl font-normal text-[#000] mt-6">
                An EV charging station is a device that provides electric energy
                for recharging electric vehicles, enabling the transfer of
                electrical energy from the grid to the vehicle's battery pack.{" "}
              </p>
              <img
                src={ImageIcons.filling_machine}
                className="h-auto w-22 ECHARGE-Img"
              />
            </div>
          </div>

          <div className="max-w-sm mx-auto relative Charging_Div md:mr-0  Charging_Div2">
            <div className="bg-cover px-4 py-8 " style={style}>
              <div className="relative m-0 mb-0 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-2 text-left text-gray-700 shadow-none">
                <p className="text-xl font-semibold tracking-tight text-[#0B7132] leading-9">
                  HOME CHARGING
                </p>
                <p className="text-4xl font-semibold  text-[#000] sm:text-6xl mt-3 Price_section-div">
                  <span className="PriceRS">₹</span> 1,18,000/-
                </p>
                <p className="text-xl font-normal  text-[#676767] sm:text-xl mt-7">
                  Amet minim mollit no duis deser ulamco sit enim aliqua.
                </p>
              </div>
              <div className="p-6 mt-6 border border-solid border-[#E5E5E5] rounded-3xl Class_Modify">
                {features.map((item) => (
                  <FeatureList key={item.id} item={item} />
                ))}
              </div>
              <div className="mt-6 p-0">
                <div className="flex justify-center gap-3 lg:justify-start">
                  <button className="px-3 md:px-8 py-1 md:py-4 bg-[#0B7132] text-white rounded-lg text-xl">
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>Sign
                    Up
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-sm mx-auto md:ml-4 Charging_Div">
            <div className="bg-cover px-4 py-8 " style={style1}>
              <div className="relative m-0 mb-0 overflow-hidden rounded-none  bg-transparent bg-clip-border pb-2 text-left text-gray-700 shadow-none">
                <p className="text-xl font-semibold tracking-tight text-[#fff] leading-9">
                  PUBLIC CHARGING
                </p>
                <p className="text-4xl font-semibold  text-[#fff] sm:text-6xl mt-3 Price_section-div">
                <span className="PriceRS">₹</span> 2,10,000/-
                </p>
                <p className="text-xl font-normal  text-[#fff] sm:text-xl mt-7">
                  Amet minim mollit no duis deser ulamco sit enim aliqua.
                </p>
              </div>
              <div className="p-6 mt-6 border border-solid border-[#E5E5E5] rounded-3xl Class_Modify">
                {features1.map((item) => (
                  <FeatureList1 key={item.id} item={item} />
                ))}
              </div>
              <div className="mt-6 p-0">
                <div className="flex justify-center gap-3 lg:justify-start">
                  <button className="px-3 md:px-8 py-1 md:py-4 bg-[#0B7132] text-white rounded-lg text-xl">
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>Sign
                    Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Charges;
