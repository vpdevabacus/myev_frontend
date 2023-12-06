import React from "react";
import Header from "../components/header/Header";
import Banner from "../components/home/Banner";
import AboutUs from "../components/home/AboutUs";
import Features from "../components/home/Features";
import Strategy from "../components/strategy/Strategy"
import Charges from "../components/home/Charges";

import Footer from "../components/footer/Footer";


const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <AboutUs />
            <Features />
             <Charges />
              <Strategy/>
           <Footer/>

        </>
    )
};

export default Home;