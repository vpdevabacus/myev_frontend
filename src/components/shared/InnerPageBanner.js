import React from 'react';

const InnerPageBanner = ({ title = "", innerPageBanner ="" }) => {
    return (
        <section className='lg:py-[160px] sm:py-[120px] py-[100px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${innerPageBanner})` }}>
            <div className='heading_tittle'>
                {title && (
                    <h1 className="capitalize text-white text-center">{title}</h1>
                )}
            </div>
        </section>
    )
}

export default InnerPageBanner;