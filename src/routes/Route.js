import React from 'react'
import {
    Route,createBrowserRouter,createRoutesFromElements,} from "react-router-dom";
import Home from '../screens/Home';
import About from '../components/about/About';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home />}>
        <Route path="/About" element={<About/>}>
        </Route>
        </Route>
    )
);


export default router;
