import React from 'react'
import Header from '../components/header/Header'
import ServicesDetails from "../components/servicesDetail/ServicesDetail"
import OurTeam from "../components/about/OurTeam"
import Footer from '../components/footer/Footer'
import Banner from '../components/servicesDetail/Banner'
import WhyUs from '../components/servicesDetail/WhyUS'
import Chargers from '../components/servicesDetail/Chargers'

const ServicesDetail = () => {
    return (
        <>
            <Header />
            <Banner />
            <ServicesDetails />
            <Chargers />
            <WhyUs />
            <Footer />
        </>
    )
}

export default ServicesDetail;
