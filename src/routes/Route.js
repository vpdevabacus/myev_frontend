import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from '../screens/Home';
import Services from '../screens/Services';
import AppLayout from '../layout/AppLayout';
import AboutUs from '../screens/AboutUs';
import ServicesDetail from '../screens/ServicesDetail';
import OurBlogs from '../screens/Blog';
import SingleBlogDetail from '../screens/SingleBlog';
import OurGallery from '../screens/Gallery';
import ContactUs from "../screens/ContactUs"
import Terms from "../screens/Terms"
import Privacy from "../screens/Privacy"

import Refund from "../screens/Refund"
import Cancellation from "../screens/Cancellation"

import PrivacyPolicy from '../components/termsPrivacy/Privacy';

import PdfComp from '../components/footer/PdfComp';


const router = createBrowserRouter(
    createRoutesFromElements(



        <Route path="/" element={<AppLayout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="blog" element={<OurBlogs />} />
            <Route path="blog-detail/:type" element={<SingleBlogDetail />} />
            <Route path="gallery" element={<OurGallery />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="/services/:type" element={<ServicesDetail />} />
            <Route path="terms&conditions" element={<Terms />} />
            <Route path="privacy_policy" element={<Privacy />} />
            <Route path="refund policy" element={<Refund />} />
            <Route path="cancellation" element={<Cancellation />} />
            <Route path="myEV_Point_brocher" element={<PdfComp />} />
        </Route>

    )
);


export default router;
