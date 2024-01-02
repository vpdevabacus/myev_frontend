import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

import InnerPageBanner from '../components/shared/InnerPageBanner';
import aboutBanner from "../assets/Images/bannerimage.png";
import ContactInfo from '../components/contact_info/ContactInfo';
import BlogPage from '../components/blog/Blogs';

const OurBlogs = () => {
    return (
        <>
            <Header />
            <InnerPageBanner title='Our Blogs' maxWidth='472px' innerPageBanner={aboutBanner} />
            <BlogPage />
            <ContactInfo />
            <Footer />
        </>
    )
}

export default OurBlogs;
