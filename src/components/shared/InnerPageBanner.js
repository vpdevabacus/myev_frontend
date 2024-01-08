import React from 'react';

const InnerPageBanner = ({ title = "", innerPageBanner = "" }) => {
    return (
        <section className="relative">
            <div className="md:py-[110px] max-md:py-[50px] bg-center bg-cover bg-no-repeat after:content-[''] after:absolute after:left-0 after:right-0 after:top-0 after:w-full after:h-full after:bg-[#000] after:opacity-50" style={{ backgroundImage: `url(${innerPageBanner})` }}>
                <div className='heading_tittle relative z-10'>
                    {title && (
                        <h1 className="capitalize text-white text-center">{title}</h1>
                    )}
                </div>
            </div>
        </section>
    )
}

export default InnerPageBanner;