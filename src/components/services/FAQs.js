import React, { useState } from 'react';

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
            ques: 'How Long Does It Take To Charge My Vehicle?',
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        },
        {
            id: 2,
            ques: 'Can I Charge My Car On Any Charger?',
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        },
        {
            id: 3,
            ques: 'Where Can I Find The Nearest Charging Station?',
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        },
        {
            id: 4,
            ques: 'How Much Does It Cost To Charge My Vehicle?',
            ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        },
    ];

    return (
        <div className=" w-full py-3 mx-auto my-32 tracking-wide md:px-2 md:mt-20">
            <div className="flex justify-center text-3xl font-semibold text-[#000] text-4xl lg:text-5xl mb-10">Frequently Asked Questions</div>

            <div className="container mx-auto grid gap-1 py-8 px-20 text-lg leading-6 text-gray-800 md:gap-8 md:grid-cols-2">
                {items.map((item) => (
                    <div key={item.id} className="space-y-3">
                        <div
                            className="relative transition-all duration-700 border rounded-md hover:shadow-2xl"
                            onClick={() => handleClick(item.id)}
                        >
                            <div style={handleHeading(item.id)}
                                className="w-full p-2 text-left cursor-pointer">
                                <div className="flex items-center justify-between px-2">
                                    <span className="tracking-wide text-2xl font-medium">{`Question ${item.ques}`}</span>
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
                                <div className="px-6 py-4 text-black text-xl font-normal">{`${item.ans}`}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
