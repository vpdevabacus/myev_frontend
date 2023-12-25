import React from 'react'
import Header from '../components/header/Header'
import ServicesDetails from "../components/servicesDetail/ServicesDetail"
import OurTeam from "../components/about/OurTeam"
import Footer from '../components/footer/Footer'
import WhyUs from '../components/servicesDetail/WhyUS'
import InnerPageBanner from '../components/shared/InnerPageBanner';
import aboutBanner from "../assets/Images/bannerimage.png";
import ContactInfo from '../components/contact_info/ContactInfo';

const ServicesDetail = () => {
    return (
        <>
            <Header />
            <InnerPageBanner title='AC Charger Service' maxWidth='472px' innerPageBanner={aboutBanner} />
            <ServicesDetails />
            <WhyUs />
            <ContactInfo />
            <Footer />
        </>
    )
}

export default ServicesDetail;
