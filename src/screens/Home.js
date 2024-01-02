import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/home/Banner";
import AboutUs from "../components/home/AboutUs";
import Features from "../components/home/Features";
import Strategy from "../components/home/Strategy";
import Charges from "../components/home/Charges";
import Footer from "../components/footer/Footer";
import Testimonials from "../components/testimonials/Testimonials";
import ContactInfo from "../components/contact_info/ContactInfo";
import Ourgallery from "../components/home/OurGallery";
import Ournewsletter from "../common/OurNewsletter";
import Blogsection from "../common/BlogSection";

 const Home = () => {
    return (
        <>
            <Header/>
            <Banner />
            <AboutUs />
            <Features/>
            <Strategy/>
            <Ourgallery/>
            <Ournewsletter/>
            <Charges />
            <Testimonials />
            <Blogsection />
            <ContactInfo />
            <Footer />
        </>
    )
};

export default Home;