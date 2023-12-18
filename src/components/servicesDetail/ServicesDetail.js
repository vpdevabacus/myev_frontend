import React, { useEffect, useState } from 'react'
import ImageIcons from '../../common/ImageIcons'
import { useParams } from "react-router-dom"

const ServicesDetail = () => {

    const { type } = useParams();
    console.log(">>>", type)

    const [serviceDetails, setServiceDetails] = useState(null);

    useEffect(() => {
        const selectedService = servicesList.find(service => service.type === type);
        setServiceDetails(selectedService);
    }, [type])
    console.log(">>>ffdfffff", serviceDetails)


    return (
        <>
            <div className='container mx-auto my-12 sm:my-20 px-4'>
                <div className="xl:mb-2">
                    <h2 className="text-center text-2xl text-black font-semibold md:text-3xl lg:text-5xl mb-10 md:mb-0">Charging Stations Will Provide {(serviceDetails?.type)?.slice(0, 2)?.toUpperCase()} Power</h2>
                    <div className='flex lg:flex-row w-11/12 justify-between mx-auto flex-col'>
                        <div className="py-0 md:py-8 lg:py-12 w-11/12 mx-auto  lg:mx-0 lg:w-5/12 xl:w-6/12">

                            <p className="mt-0 lg:mt-7 text-xl font-normal text-[#000] text-left">
                                {serviceDetails?.desc1}
                            </p>
                            <p className="mt-7 text-xl font-normal text-[#000] text-left">
                                {serviceDetails?.desc2}
                            </p>
                        </div>
                        <div className="py-12 w-11/12 mx-auto lg:w-6/12 xl:w-5/12  lg:mx-0 items-center my-auto">
                            <img src={serviceDetails?.image} className='rounded-2xl lg:w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const servicesList = [
    {
        type: "ac_charger_services",
        title: 'AC Charger Service',
        desc1: 'At My EV Point, we proudly introduce our cutting-edge AC Charging Stations, representing the epitome of efficient and sustainable electric vehicle charging. Our commitment to revolutionizing the charging experience is evident in the strategic placement and advanced features of our AC stations, tailored to meet the diverse needs of electric vehicle enthusiasts.',
        desc2: "Our commitment to your convenience is reflected in the strategic placement of our AC Charging Stations. Whether you find yourself in urban centers, suburban areas, or along highways, our stations are strategically positioned to enhance accessibility, providing you with the confidence to explore your electric journey without limitations.",

        image: ImageIcons.services1,
    },
    {
        type: "dc_charger_services",
        title: 'DC Charger Service',
        desc1: 'At My EV Point, we stand at the forefront of the electric mobility revolution, committed to providing unparalleled charging solutions. Our DC Power Charging Stations represent the pinnacle of innovation, addressing the evolving needs of electric vehicle users with a focus on delivering fast and efficient charging experiences.',
        desc2: "By choosing My EV Point's DC Power Charging Stations, you contribute to a sustainable and eco-friendly future. Join us in the movement towards reducing carbon footprints and embracing electric mobility as a powerful force for positive environmental impact.",
        image: ImageIcons.services2,
    },

];

export default ServicesDetail
