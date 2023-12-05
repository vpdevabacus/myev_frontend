import React from 'react'
import ImageIcons from '../../common/ImageIcons'

const Features = () => {

    const leftItems = ["Left Item 1", "Left Item 2", "Left Item 3"];

    const ListItem = ({ text }) => (
        <li className="text-white">{text}</li>
    );

    return (
        <>
            <div className="relative my-5">
                <img src={ImageIcons.feature_bg} alt="Features" className="w-full h-auto" />


                <div className="absolute inset-0 bg-[#016C80] bg-opacity-90"></div>
                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 my-6 text-white text-6xl">
                    <p>Excellent And Best Services</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <img src={ImageIcons.feature_machine} alt="Center Image" className="w-3/12 h-auto" />
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-4 text-white">
                    <ul className="">
                        {leftItems.map((item, index) => (
                            <ListItem key={index} text={item} />
                        ))}
                    </ul>
                </div>


                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-white">
                    <p>Your Right Text</p>
                </div>

            </div>
        </>
    )
}

export default Features
