import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import ContactInfo from "../components/contact_info/ContactInfo";
import Contact from '../components/contact/Contact';
import Banner from '../components/contact/Banner';
import InnerPageBanner from '../components/shared/InnerPageBanner';
import aboutBanner from "../assets/Images/bannerimage.png";

const ContactUs = () => {
    return (
        <>
            <Header />
            <InnerPageBanner
                title='Contact Us'
                innerPageBanner={aboutBanner}
            />
            {/* <Banner/> */}

            <Contact />
            {/* <ContactInfo /> */}
            <Footer />
        </>
    )
}

export default ContactUs;