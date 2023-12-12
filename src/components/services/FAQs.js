import React, { useState } from 'react';

const FAQs = () => {
    const [activeTab, setActiveTab] = useState(null);

    const handleClick = (id) => {
        setActiveTab((prev) => (prev === id ? null : id));
    };

    const handleRotate = (id) => (activeTab === id ? '-rotate-180' : '');

    const handleToggle = (id) =>
        activeTab === id ? { maxHeight: '100%' } : { maxHeight: '0' };

    const handleHeading = (id) =>
        activeTab === id ? { backgroundColor: '#0B7132', borderRadius: '20px' } : {};


    const items = [
        {
            id: 1,
            ques: 'dfdsfg',
            ans: "gggggg"
        },
        {
            id: 2,
            ques: 'hhhhhh',
            ans: "gggggg"
        },
    ];

    return (
        <div className="h-screen max-w-5xl px-2 py-3 mx-auto mt-32 tracking-wide md:px-4 md:mt-20">
            <div className="flex justify-center text-3xl">Frequently Asked Questions</div>

            <div className="grid gap-3 py-8 text-lg leading-6 text-gray-800 md:gap-8 md:grid-cols-2">
                {items.map((item) => (
                    <div key={item.id} className="space-y-3">
                        <div
                            className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl"
                            onClick={() => handleClick(item.id)}
                        >
                            <div style={handleHeading(item.id)}
                                className="w-full p-4 text-left cursor-pointer">
                                <div className="flex items-center justify-between">
                                    <span className="tracking-wide">{`Question ${item.ques}`}</span>
                                    <span
                                        className={`transition-transform duration-500 transform fill-current ${handleRotate(
                                            item.id
                                        )}`}
                                    >
                                        <svg
                                            className="w-8 h-8 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            color='#0B7132'
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>

                            <div
                                style={handleToggle(item.id)}
                                className="relative overflow-hidden transition-all duration-700 max-h-0"
                            >
                                <div className="px-6 pb-4 text-gray-600">{`Answer ${item.ans}`}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
