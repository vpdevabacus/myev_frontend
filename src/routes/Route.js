import React from 'react'
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Home from '../screens/Home';
import Services from '../screens/Services';
import AppLayout from '../layout/AppLayout';
import AboutUs from '../screens/AboutUs';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<AppLayout />}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="services" element={<Services />} />

        </Route>
    )
);


export default router;
