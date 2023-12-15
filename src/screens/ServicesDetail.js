import React from 'react'
import Header from '../components/header/Header'
import ServicesDetails from "../components/servicesDetail/ServicesDetail"
import OurTeam from "../components/about/OurTeam"
import Footer from '../components/footer/Footer'
import Banner from '../components/servicesDetail/Banner'
import WhyUs from '../components/servicesDetail/WhyUS'

const ServicesDetail = () => {
    return (
        <>
            <Header />
            <Banner />
            <ServicesDetails />
            <WhyUs />
            <Footer />
        </>
    )
}

export default ServicesDetail;
