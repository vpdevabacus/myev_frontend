import React from 'react'
import ImageIcons from '../../common/ImageIcons'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';


const ServicesList = () => {


    const ServicesList = [
        {
            title: "AC Charger Service",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
            image: ImageIcons.services1
        },
        {
            title: "DC Charger Service",
            detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
            image: ImageIcons.services2

        },
        // {
        //     title: "Home Charger",
        //     detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        //     image: ImageIcons.services3

        // },
        // {
        //     title: "Support EV Brand",
        //     detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        //     image: ImageIcons.services4

        // },
        // {
        //     title: "Public Stations",
        //     detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
        //     image: ImageIcons.services5

        // },
        // {
        //     title: "Commercial Systems",
        //     detail: "Lorem idfdddddddddddddpsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, dfrrdgtrdghrgtrgluctus nec ullamcorper mattis.",
        //     image: ImageIcons.services6

        // }
    ]

    const navigate = useNavigate();



    const List = ({ item }) => {
        console.log("DFSDFv", item)

        const handleClick = () => {
            navigate("/services/details", { state: item });
        };

        return (
            <div className="w-full w-full lg:w-10/12 px-8 mx-auto">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <img
                        src={item.image}
                        alt="image"
                        className="w-full"
                    />
                    <div className="flex justify-center px-8 bg-[#F8F8F8]">
                        <div className=" -mt-8  mx-auto w-full px-2 py-2 md:px-4 md:py-3 mx-auto bg-white text-center justify-center drop-shadow-md rounded-lg"><p className='text-xl md:text-3xl text-[#0B7132] font-medium'>{item.title}</p></div>
                    </div>
                    <div className="p-2 sm:p-9 md:p-4 xl:p-5 text-center bg-[#F8F8F8] rounded-b-3xl ">

                        <p className="font-normal text-black text-base md:text-lg text-center mb-4">
                            {item.detail}
                        </p>
                        <div className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize bg-transparent rounded-md ">
                            <div className='cursor-pointer bg-transparent flex flex-row text-black hover:text-[#0B7132]'>
                                <div onClick={handleClick} className='flex flex-row' >
                                    <span className="mx-1 text-lg md:text-xl font-medium">Read More</span>
                                    <FaArrowRightLong className='w-7 h-8 ml-2' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            <div className='container mx-auto py-8'>
                <div className="flex flex-col sm:flex-row mt-12 w-11/12 lg:w-9/12 mx-auto">
                    {ServicesList.map((item) => (
                        <List key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ServicesList;
