import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Header from '../components/header/Header'
import ServicesDetails from "../components/servicesDetail/ServicesDetail"
import OurTeam from "../components/about/OurTeam"
import Footer from '../components/footer/Footer'
import WhyUs from '../components/servicesDetail/WhyUS'
import InnerPageBanner from '../components/shared/InnerPageBanner';
import aboutBanner from "../assets/Images/bannerimage.png";
import ContactInfo from '../components/contact_info/ContactInfo';

const ServicesDetail = () => {

    const { type } = useParams();
    console.log(">>>", type)

    const [serviceDetails, setServiceDetails] = useState(null);

    useEffect(() => {
        const selectedService = servicesList.find(service => service.type === type);
        setServiceDetails(selectedService);
    }, [type])
    console.log(">>>ffdfffff", serviceDetails)


    return (
        <>
            <Header />
            <InnerPageBanner title={serviceDetails?.title} maxWidth='472px' innerPageBanner={aboutBanner} />
            <ServicesDetails />
            <WhyUs />
            <ContactInfo />
            <Footer />
        </>
    )
}

const servicesList = [
    {
        type: "AC",
        title: 'AC Charger Service',
    },
    {
        type: "DC",
        title: 'DC Charger Service',
    },

];

export default ServicesDetail;
