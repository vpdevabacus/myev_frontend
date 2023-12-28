import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import InnerPageBanner from '../components/shared/InnerPageBanner';
import aboutBanner from "../assets/Images/bannerimage.png";
import ContactInfo from '../components/contact_info/ContactInfo';
import SingleBlogPage from '../components/blog/SingleBlog';

const SingleBlogDetail = () => {

    return (
        <>
            <Header />
            <InnerPageBanner title='Single Blog' maxWidth='472px' innerPageBanner={aboutBanner} />
            <SingleBlogPage />
            <ContactInfo />
            <Footer />
        </>
    )
}

export default SingleBlogDetail;
