import React, { useState, useRef } from 'react';






const FAQs = () => {

    const markers = [
        { latitude: 37.7749, longitude: -122.4194 }, // San Francisco
        { latitude: 34.0522, longitude: -118.2437 }, // Los Angeles
        
        { latitude: 40.7128, longitude: -74.0060 }, // New York
    ];

    const markersHtml = markers
        .map((marker) => `<marker location="${marker.latitude},${marker.longitude}"></marker>`)
        .join('');

        const iframeHtml = `
        <iframe
          title="Google Map"
          width="600"
          height="450"
          frameBorder="0"
          style="border:0"
          src="https://www.google.com/maps/embed/v1/view?key=&center=0,0&zoom=1&${markersHtml}"
          allowfullscreen>
        </iframe>
      `;



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
        <>
        <div className='faq-section w-full md:pt-10 md:pb-20 max-md:py-10'>
            <div className='container mx-auto px-2'>
                <div className='faq-heading mb-10'>
                    <h4 className='text-center text-[#0B7132] font-medium'>FAQ</h4>
                    <h2 className='text-center'>General Question About Pertaev</h2>
                </div>
                <div className="grid gap-6 px-2 text-lg leading-6 text-gray-800 md:gap-8 md:grid-cols-2">
                    {items.map((item) => (
                        <div key={item.id}>
                            <div className="relative" onClick={() => handleClick(item.id)}>
                                <div style={handleHeading(item.id)} className="w-full px-4 py-4 text-left cursor-pointer rounded-md shadow-[0_3px_10px_5px_rgba(0,0,0,0.1)] transition-all duration-200">
                                    <div className="flex items-center justify-between">
                                        <span className="tracking-wide text-lg font-medium">{` ${item.ques}`}</span>
                                        <span className={`transition-transform duration-200 transform ${handleRotate(item.id)}`}>
                                            <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div style={handleToggle(item.id)} className="relative overflow-hidden transition-all duration-200 max-h-0">
                                    <div className="px-6 py-4 text-black">
                                        <p>{`${item.ans}`}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>    
        </>
    );
};

export default FAQs;
