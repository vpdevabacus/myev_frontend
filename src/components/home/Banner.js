import React, { useRef, useState } from "react";
import GoogleMap from 'google-maps-react-markers';
import Markers from '../Markers/Markers';
import ImageIcons from "../../common/ImageIcons";
import "./HomePage.css";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import evcaranimationpic from "../../assets/Images/ev-caranimation-pic.png";
import discovernearbymap from "../../assets/Images/discover-nearby-map.png";
const backgroundImagePath = ImageIcons.bannerimage;

const style = {
    backgroundImage: `url('${backgroundImagePath}')`,

};

const Banner = () => {

    const mapRef = useRef(null)
    const [mapReady, setMapReady] = useState(false)


    const onGoogleApiLoaded = ({ map, maps }) => {
        mapRef.current = map
        setMapReady(true)
    }

    const coordinates = [
        { lat: 26.9124, lng: 75.7873, name: 'Jaipur', },
        { lat: 21.1458, lng: 79.0882, name: 'Nagpur', },
        { lat: 23.0225, lng: 72.5714, name: 'Ahmedabad', },
    ];

    return (
        <>
            <section className="home-banner-section w-full pb-20">
                {/* Home Banner Section */}
                <div className="bg-cover w-full bg-center bg-no-repeat relative" style={style}>
                    <div className="container mx-auto">
                        <div className="hero-content-info md:pt-40 max-md:pt-20 max-md:px-3 text-center">
                            <h1 className="text-[#fff] m-auto md:mb-8 max-md:mb-4">Best <span className="text-[#0B7132] bg-[#fff] px-3 font-bold">EV Vehicle</span> And Charging Station</h1>
                            <p className="text-[#fff] m-auto md:mb-10 max-md:mb-6 md:pb-5 max-md:pb-3">It’s your chance to own an EV Charging Station (Without having to manage it)</p>
                            <div className="button-hero-info flex gap-4 justify-center max-md:flex-col">
                                <button className="cursor-pointer bg-white text-[#0B7132] hover:text-[#fff] hover:bg-[#0B7132] font-semibold md:py-3 max-md:py-3 md:px-5 max-md:px-4 rounded-lg inline-flex items-center justify-center duration-[400ms,700ms]">
                                    <span>
                                        <FaApple className='md:h-7 max-md:h-6 md:w-7 max-md:w-6 me-1' />
                                    </span>
                                    <span>APP STORE</span>
                                </button>
                                <button className="cursor-pointer bg-white text-[#0B7132] hover:text-[#fff] hover:bg-[#0B7132] font-semibold md:py-3 max-md:py-3 md:px-5 max-md:px-4 rounded-lg inline-flex items-center justify-center duration-[400ms,700ms]">
                                    <span>
                                        <FaGooglePlay className='md:h-6 max-md:h-5 md:w-6 max-md:w-5 me-1' />
                                    </span>
                                    <span>GOOGLE PLAY</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Home Banner Section */}

                {/* Start Ev Car bg Green Section */}
                <div className="car-bg-green-section bg-[#0B7132] pb-40 px-3">
                    <div className="bg-green-sec-info pb-7">
                        <div className="evcar-info text-center relative">
                            <img className="evcar-img-info m-auto" src={evcaranimationpic} />
                        </div>
                    </div>
                </div>
                {/* End Ev Car bg Green Section */}

                {/* Discover Places Nearby Section */}
                <div className="discover-nearby-section px-3">
                    <div className="discover-nearby-info">
                        <div className="container m-auto">
                            <div className="grid max-md:grid-cols-1 md:grid-cols-2 md:gap-4 discover-nearby-box m-auto items-center bg-[#E7F0F7]">
                                <div className="discover-content-col max-md:mb-6">
                                    <h4 className="relative text-[#0B7132] font-medium mb-1 green-line-heading">CONVENIENT & FAST</h4>
                                    <h2 className="mb-3">Discover Places Nearby</h2>
                                    <p>Charge up your electric vehicle effortlessly with our strategically located charging stations. We've mapped out convenient spots near you, ensuring that wherever your journey takes you, a reliable charging solution is just around the corner.</p>
                                </div>
                                <div className="discover-nearby-col">
                                    <div className="discover-nearby-map-info">
                                        <GoogleMap className="mappin-img-info m-auto"
                                            apiKey="AIzaSyCkfOfMsbxXQJDddclN4qd_u6_l19bvpAc"
                                            defaultCenter={{ lat: 20.5937, lng: 78.9629 }}
                                            defaultZoom={4}
                                            mapMinHeight="400px"
                                            onGoogleApiLoaded={onGoogleApiLoaded}
                                            onChange={(map) => console.log('Map moved', map)}
                                        >
                                            {coordinates.map(({ lat, lng, name }, index) => (
                                                <Markers
                                                    key={index}
                                                    lat={lat}
                                                    lng={lng}
                                                    markerId={name}
                                                />
                                            ))}
                                        </GoogleMap>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Discover Places Nearby Section */}
            </section>
        </>
    )
}

export default Banner;