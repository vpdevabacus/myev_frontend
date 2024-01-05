import React, { useEffect, useState } from 'react';
import { windowScroll } from '../../helpers/ScrollToTop';
import { Link } from 'react-router-dom';
import axios from 'axios';

const imageBaseUrl = "http://localhost:8400/uploads";


const BlogPage = () => {

  const [allBlogs, setAllBlogs] = useState([])

  const fetchBlogs = async () => {
    const response = await axios.get(`${process.env.REACT_APP_URL}/user/getblogs`);
    console.log("res", response.data)
    setAllBlogs(response.data.data)
  }


  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <>
      {/* Our Blog Section */}
      <div className="blogs-section pb-20 pt-10 relative">
        <div className="container mx-auto px-2">
          <div className="flex max-md:flex-col lg:gap-10 max-lg:gap-5">
            {allBlogs.map((item) => {
              const dateObject = new Date(item?.createdAt);
              const formattedDate = dateObject.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });

              return (
                <div className="md:w-1/3 relative max-md:mb-5" key={item.id}>
                  <div className="blog-list-info bg-[#fff] rounded p-4 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.15)]">
                    <div className="blog-img-info mb-3">
                      <img className="w-full rounded-lg cursor-pointer object-center object-cover h-[300px]" src={item?.image} alt="blog img" />
                    </div>

                    <div className="blog-content-info lg:p-4">
                      <Link to={`/blog-detail/${item?.handle}`} onClick={windowScroll}>
                        <h4 className="mb-3 cursor-pointer hover:text-[#0B7132]">{item?.title}</h4>
                      </Link>
                      <div className="blog-autor-info mb-3">
                        <p className="text-[#a7a7a7]">{item?.author} | {formattedDate}</p>
                      </div>
                      <p style={{
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        WebkitLineClamp: 2
                      }}>{item?.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </div>

    </>
  );
};
export default BlogPage;
