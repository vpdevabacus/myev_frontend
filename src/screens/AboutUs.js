import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import About from '../components/about/About'
import Banner from '../components/about/Banner'
import OurTeam from '../components/about/OurTeam'
import Testimonials from '../components/about/Testimonials'

const AboutUs = () => {
    return (
        <>
            <Header />
            <Banner />
            {/* <About /> */}
            <Testimonials />
            <OurTeam />
            <Footer />
        </>
    )
}

export default AboutUs
