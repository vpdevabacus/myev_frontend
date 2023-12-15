import React from 'react'
import ImageIcons from '../../common/ImageIcons'

const backgroundImagePath = ImageIcons.bannerimage;

const style = {
    backgroundImage: `url('${backgroundImagePath}')`,
    backgroundPosition: 'center',
    height: '550px ',
    display: 'flex',
    alignItems: 'center',
};

const Banner = () => {
    return (
        <>
            <div>
                <section>
                    <section className="relative">
                        <div className="bg-cover " style={style}>
                            <div
                                className="max-w-lg px-4 sm:pt-24 pt-12 sm:pb-8 mx-auto text-left md:max-w-none md:text-center "
                            >
                                <h4
                                    className="font-bold leading-10  text-left text-[#ffffff] text-center sm:leading-none text-5xl sm:text-9xl ">
                                    <span className="inline md:block text-7xl text-center ">Our Services</span>
                                </h4>
                            </div>
                        </div>

                    </section>
                </section>
            </div>
        </>
    )
}

export default Banner
