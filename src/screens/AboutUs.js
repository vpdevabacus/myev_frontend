import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import About from '../components/about/About'
import Banner from '../components/about/Banner'
import OurTeam from '../components/about/OurTeam'
import EvCharging from "../components/ev-charging/EvCharging";
import Counting from "../components/counting/Counting";
import Testimonials from "../components/testimonials/Testimonials";


const AboutUs = () => {
    return (
        <>
            <Header />
            <Banner />
           <EvCharging/>
                        <Counting/>
                        <Testimonials />
            <OurTeam />
            <Footer />
        </>
    )
}

export default AboutUs
