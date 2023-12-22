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
          <div className="flex gap-[30px]">
            <div className="w-[39%]">
              <div>
                <div className="flex flex-row place-items-center modify-responsive001">
                  <h5 className="font-medium text-[#0B7132] green-hr-line">
                    ABOUT ECHARGE
                  </h5>
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

            <div className="w-[61%] grid grid-cols-1 md:grid-cols-2 gap-x-[26px]">
              <div className="relative Charging_Div md:mr-0  Charging_Div2">
                <div className="bg-cover px-[15px] pt-[35px] pb-[95px] bg-center bg-no-repeat" style={style}>
                  <div className="">
                    <h4 className="text-[#0B7132] mb-[5px]">
                      HOME CHARGING
                    </h4>
                    <h2 className="text-black mb-[15px] text-[50px]">
                      <span className="font-sans font-normal">₹</span> 1,18,000/-
                    </h2>
                    <p className="text-[#676767] text-[20px]">
                      Amet minim mollit no duis deser ulamco sit enim aliqua.
                    </p>
                  </div>
                  <div className="p-[20px] my-[30px] border border-solid border-[#E5E5E5] rounded-3xl Class_Modify">
                    {features.map((item) => (
                      <FeatureList key={item.id} item={item} />
                    ))}
                  </div>
                  <button className="px-3 min-w-[175px] font-semibold	text-[18px] md:px-8 py-1 md:py-4 bg-[#0B7132] text-white rounded-lg">
                    Sign Up
                  </button>
                </div>
              </div>

              <div className="Charging_Div">
                <div className="bg-cover px-[15px] pt-[35px] pb-[95px" style={style1}>
                  <div className="">
                    <h4 className="text-white mb-[5px]">PUBLIC CHARGING</h4>
                    <h2 className="text-white mb-[15px] text-[50px]">
                      <span className="font-sans font-normal">₹</span> 2,10,000/-
                    </h2>
                    <p className="text-white text-[20px]">
                      Amet minim mollit no duis deser ulamco sit enim aliqua.
                    </p>
                  </div>
                  <div className="p-[20px] my-[30px] border border-solid border-[#E5E5E5] rounded-3xl Class_Modify">
                    {features1.map((item) => (
                      <FeatureList1 key={item.id} item={item} />
                    ))}
                  </div>
                  <div className="mt-6 p-0">
                    <div className="flex justify-center gap-3 lg:justify-start">
                      <button className="px-3 min-w-[175px] font-semibold	text-[18px] md:px-8 py-1 md:py-4 bg-[#0B7132] text-white rounded-lg">
                        Sign Up
                      </button>
                    </div>
                  </div>
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
