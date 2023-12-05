import React from 'react'
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Home from '../screens/Home';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home />}>
        </Route>
    )
);


export default router;
