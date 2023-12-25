import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Banner from '../components/services/Banner'
import ServicesList from '../components/services/ServicesList'
import FAQs from '../components/services/FAQs'
import Strategy from '../components/services/Strategy'
import InnerPageBanner from '../components/shared/InnerPageBanner';
import aboutBanner from "../assets/Images/bannerimage.png";
import ContactInfo from '../components/contact_info/ContactInfo';

const Services = () => {
    return (
        <>
            <Header />
            <InnerPageBanner title='Our Services' maxWidth='472px' innerPageBanner={aboutBanner} />
            <ServicesList />
            <Strategy />
            <FAQs />
            <ContactInfo />
            <Footer />
        </>
    )
}

export default Services;
