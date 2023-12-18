import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from '../screens/Home';
import Services from '../screens/Services';
import AppLayout from '../layout/AppLayout';
import AboutUs from '../screens/AboutUs';
import ServicesDetail from '../screens/ServicesDetail';
import ContactUs from "../screens/ContactUs"

const router = createBrowserRouter(
    createRoutesFromElements(



        <Route path="/" element={<AppLayout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="/services/:type" element={<ServicesDetail />} />

            {/* <Route path="services/details" element={<ServicesDetail />} /> */}
        </Route>

    )
);


export default router;
