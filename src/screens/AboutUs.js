import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import About from '../components/about/About'
import Banner from '../components/about/Banner'
import OurTeam from '../components/about/OurTeam'
import EvCharging from "../components/ev-charging/EvCharging";
import Counting from "../components/counting/Counting";
import Testimonials from "../components/testimonials/Testimonials";
import Strategy from '../components/home/Strategy';
import ContactInfo from '../components/contact_info/ContactInfo';
import InnerPageBanner from '../components/shared/InnerPageBanner';
import aboutBanner from "../assets/Images/bannerimage.png";


const AboutUs = () => {
    return (
        <>
            <Header />
            <InnerPageBanner title='About Us' maxWidth='472px' innerPageBanner={aboutBanner} />
            <EvCharging />
            <div className="services-strategy-section">
                <div className="bg-[#F1F8E8] pb-20">
                    <div className="sm:container lg:container m-auto pb-10">
                        <Strategy />
                    </div>
                </div>
                <div className="mt-[-155px]">
                    <div className="sm:container lg:container m-auto">
                        <Counting />
                    </div>
                </div>
            </div>
            <Testimonials />
            <OurTeam />
            <ContactInfo />
            <Footer />
        </>
    )
}

export default AboutUs
