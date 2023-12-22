import React from 'react';

const InnerPageBanner = ({ title = "", description = "", maxWidth = "", innerPageBanner ="" }) => {
    return (
        <section className='py-[160px] bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${innerPageBanner})` }}>
            <div className='heading_tittle'>
                {title && (
                    <h1 className="capitalize text-white text-center">{title}</h1>
                )}
                {/* {description && (
                    <p className={`text-center text-[14px] md:text-[16px] leading-[168.75%] w-full ${maxWidth ? `max-w-[${maxWidth}]` : "max-w-[639px]"} mx-auto`}>{description}</p>
                )} */}
            </div>
        </section>
    )
}

export default InnerPageBanner;