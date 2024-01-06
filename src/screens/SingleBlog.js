import React, { useEffect, useState, useCallback } from 'react'
import { useParams } from "react-router-dom"
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import InnerPageBanner from '../components/shared/InnerPageBanner';
import aboutBanner from "../assets/Images/bannerimage.png";
import ContactInfo from '../components/contact_info/ContactInfo';
import SingleBlogPage from '../components/blog/SingleBlog';
import axios from 'axios';

const SingleBlogDetail = () => {

    const { type } = useParams();
    console.log(">>>", type)

    const [allBlogs, setAllBlogs] = useState([])
    const [blogDetails, setBlogDetails] = useState(null);


    const fetchBlogs = useCallback(async () => {
        const response = await axios.get(`${process.env.REACT_APP_URL}/user/getBlogs`);
        console.log("res", response.data);
        const blogsData = response.data.data;
        setAllBlogs(blogsData);


        const selectedBlog = blogsData.find(blog => blog.handle === type);
        setBlogDetails(selectedBlog);
    }, [type]);



    useEffect(() => {
        fetchBlogs()
    }, [fetchBlogs])


    console.log(">>>blogDetils", blogDetails)
    return (
        <>
            <Header />
            <InnerPageBanner title={blogDetails?.title} maxWidth='472px' innerPageBanner={aboutBanner} />
            <SingleBlogPage blogDetails={blogDetails} />
            <ContactInfo />
            <Footer />
        </>
    )
}

export default SingleBlogDetail;
