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
import EvCharging from "../components/ev-charging/EvCharging";
import Counting from "../components/counting/Counting";
 const Home = () => {
    return (
        <>
            {/* <Header />
            <Banner />
            <AboutUs />
            {/* <Features />
            <Strategy />
            <Charges /> */}

            
           
            <Header/>
            <Banner />
            <AboutUs />
            <Features/>
            <Strategy/>
            <Charges />
            <Testimonials />
            <ContactInfo />
            {/* <EvCharging /> */}
            {/* <Counting /> */}
            <Footer /> 
            

            {/* <EvCharging /> */}

        </>
    )
};

export default Home;