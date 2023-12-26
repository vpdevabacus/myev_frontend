import React, { useState, useRef } from 'react';

const FAQs = () => {

    const [activeTab, setActiveTab] = useState(null);
    const [iconColor, setIconColor] = useState('#0B7132'); // Initial color


    const handleClick = (id) => {
        setActiveTab((prev) => (prev === id ? null : id));
        setIconColor((prevColor) => (prevColor === '#0B7132' ? '#000000' : '#0B7132'));

    };

    const handleRotate = (id) => (activeTab === id ? '-rotate-180' : '');

    const handleToggle = (id) =>
        activeTab === id ? { maxHeight: '100%' } : { maxHeight: '0' };

    const handleHeading = (id) =>
        activeTab === id ? { backgroundColor: '#0B7132', borderRadius: '6px', color: '#fff' } : {};



    const items = [
        {
            id: 1,
            ques: 'Is myEV Point offering charge points at business/work premises?',
            ans: "myEV Point offers end-to-end customized solutions for EV Charging needs at business/work premises."
        },
        {
            id: 2,
            ques: 'What about safety and maintenance?',
            ans: "myEV Point Chargers comes with in-built multiple protection systems which significantly reduces risks related to electric safety at Commercial spaces & Offices. myEV Point also offers Annual Maintenance for almost all of our charger models."
        },
        {
            id: 3,
            ques: 'Whom do I contact in case of any problem while charging my car or with my charger?',
            ans: "Please contact myEV Point customer care team for any problems with your charger which is supplied by myEV Point."
        },
        {
            id: 4,
            ques: 'Do I need my own charging cable?',
            ans: "Almost all of the DC fast chargers have inbuilt connector cables. However, some chargers (typically some AC chargers) requires charging connector cable to be brought by the user."
        },
    ];

    return (
        <div className=" w-full mx-auto my-12 md:my-32 tracking-wide md:px-2 md:mt-20">
            <h2 className="text-center text-3xl text-black font-semibold md:text-4xl lg:text-5xl mb-10 ">Frequently Asked Questions</h2>

            <div className="container mx-auto grid gap-6 py-8 px-20 text-lg leading-6 text-gray-800 md:gap-8 md:grid-cols-2">
                {items.map((item) => (
                    <div key={item.id} className="space-y-3">
                        <div
                            className="relative transition-all duration-700 border rounded-md hover:shadow-2xl"
                            onClick={() => handleClick(item.id)}
                        >
                            <div style={handleHeading(item.id)}
                                className="w-full p-2 text-left cursor-pointer">
                                <div className="flex items-center justify-between px-2">
                                    <span className="tracking-wide text-lg sm:text-xl lg:text-2xl font-medium">{` ${item.ques}`}</span>
                                    <span
                                        className={`transition-transform duration-200 transform fill-current ${handleRotate(
                                            item.id
                                        )}`}
                                    >
                                        <svg
                                            className="w-8 h-8 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"

                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div
                                style={handleToggle(item.id)}
                                className="relative overflow-hidden transition-all duration-200 max-h-0"
                            >
                                <div className="px-6 py-4 text-black text-base lg:text-lg lg:text-xl font-normal">{`${item.ans}`}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
};

export default FAQs;
