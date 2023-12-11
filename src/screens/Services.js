import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Banner from '../components/services/Banner'
import ServicesList from '../components/services/ServicesList'

const Services = () => {
    return (
        <>
            <Header />
            <Banner />
            <ServicesList />
            <Footer />
        </>
    )
}

export default Services;
