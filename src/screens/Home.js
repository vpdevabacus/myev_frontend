import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/home/Banner";
import AboutUs from "../components/home/AboutUs";
import Features from "../components/home/Features";

import Footer from "../components/footer/Footer";
import Strategy from "../components/strategy/Strategy";

const Home = () => {
    return (
        <>
            <Header />
            <Banner/>
            <AboutUs />
            <Features />
            <Strategy/>
            <Footer/>
        </>
    )
};

export default Home;