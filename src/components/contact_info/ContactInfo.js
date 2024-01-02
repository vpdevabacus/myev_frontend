import React from "react";
import callInfo from "../../assets/icons/call_info.svg";
import clockIcon from "../../assets/icons/clock_icon.svg";
import earthIcon from "../../assets/icons/earth_icon.svg";

const ContactInfo = () => {

    const phoneNumber = '+91 95925 95975';
    const phoneLink = `tel:${phoneNumber}`;

    const callPhoneNumber = () => {
        window.location.href = phoneLink;
    };

    return (
        <>
            <section className="testimonials py-[50px] md:py-[40px] px-[20px] bg-[#0B7132]">
                <div className="container m-auto">
                    <div className="flex md:flex-row flex-col justify-between items-center">
                        <h4 className="text-[22px] md:text-[18px] lg:text-[25px] xl:text-[30px]  text-white font-medium flex items-center">
                            Find Our near Branches
                            <span className="pl-[13px] w-[40px] xl:w-[50px]"> <img src={earthIcon} alt="" /></span>
                        </h4>

                        <div className="my-[40px] md:my-0 flex items-center text-center bg-center bg-contain bg-no-repeat h-[100px] md:h-[80px] lg:h-[100px] xl:h-[128px]" style={{ backgroundImage: `url(${callInfo})` }}>
                            <h3 onClick={callPhoneNumber} className="text-[24px] md:text-[20px] lg:text-[28px] xl:text-[34px] text-white font-medium cursor-pointer">Call US On <br />{phoneNumber}</h3>
                        </div>

                        <h4 className="text-[22px] md:text-[18px] lg:text-[25px] xl:text-[30px]   text-white font-medium flex items-center">
                            <span className="pr-[13px] w-[40px] xl:w-[50px]"> <img src={clockIcon} alt="" /></span>
                            24/7 Emergency Services
                        </h4>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactInfo