import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/home/Banner";
import AboutUs from "../components/home/AboutUs";
import Features from "../components/home/Features";

import Footer from "../components/footer/Footer";
import Charges from "../components/home/Charges";

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <AboutUs />
            <Features />
            <Charges />
            <Footer />
        </>
    )
};

export default Home;