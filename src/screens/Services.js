import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Banner from '../components/services/Banner'
import ServicesList from '../components/services/ServicesList'
import FAQs from '../components/services/FAQs'
import Strategy from '../components/services/Strategy'

const Services = () => {
    return (
        <>
            <Header />
            <Banner />
            <ServicesList />
            <Strategy />
            <FAQs />
            <Footer />
        </>
    )
}

export default Services;
