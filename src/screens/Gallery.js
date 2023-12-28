import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

import InnerPageBanner from '../components/shared/InnerPageBanner';
import aboutBanner from "../assets/Images/bannerimage.png";
import ContactInfo from '../components/contact_info/ContactInfo';
import GalleryPage from '../components/gallery/GalleryPage';

const OurGallery = () => {
    return (
        <>
            <Header />
            <InnerPageBanner title='Our Gallery' maxWidth='472px' innerPageBanner={aboutBanner} />
            <GalleryPage />
            <ContactInfo />
            <Footer />
        </>
    )
}

export default OurGallery;
