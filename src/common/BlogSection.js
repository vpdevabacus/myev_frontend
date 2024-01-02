import React from 'react';
import { Link } from 'react-router-dom';
import gallery1 from '../assets/Images/services1.png';
import gallery2 from '../assets/Images/services2.png';
import gallery4 from '../assets/Images/whyUS.png';
import { windowScroll } from '../helpers/ScrollToTop';

const Blogsection = () => {
  return (
    <>
      {/* Our Blog Section */}
      <div className="blogs-section pb-20 pt-10 relative">
        <div className="container mx-auto px-2">
          <h4 class="text-[#0B7132] font-medium uppercase	mb-[15px] text-center">Our Blogs</h4>
          <h2 className="text-center md:pb-12 max-md:pb-8 text-[#000]">Recent Articles and News</h2>
          <div className="flex max-md:flex-col lg:gap-10 max-lg:gap-5">
            <div className="md:w-1/3 relative max-md:mb-5">
              <div className="blog-list-info bg-[#fff] rounded p-4 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.15)]">
                <div className="blog-img-info mb-3">
                  <img className="w-full rounded-lg cursor-pointer object-center object-cover h-[300px]" src={gallery1} alt="blog img" />
                </div>
                <div className="blog-content-info lg:p-4">
                  <Link to='/blog-detail' onClick={windowScroll}> <h4 className="mb-3 cursor-pointer hover:text-[#0B7132]">Eget eu hymenaeos blandit blandit ipsum ab.</h4></Link>
                  <div className="blog-autor-info mb-3">
                    <p className="text-[#a7a7a7]">Demoteam | Aug 17, 2023</p>
                  </div>
                  <p>Voluptatem earum? Lorem facilisis et sociis justo exercitationem consequuntur? Sit. Deserunt feugiat</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 relative max-md:mb-5">
              <div className="blog-list-info bg-[#fff] rounded p-4 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.15)]">
                <div className="blog-img-info mb-3">
                  <img className="w-full rounded-lg cursor-pointer object-center object-cover h-[300px]" src={gallery4} alt="blog img" />
                </div>
                <div className="blog-content-info lg:p-4">
                  <h4 className="mb-3 cursor-pointer hover:text-[#0B7132]">Eget eu hymenaeos blandit blandit ipsum ab.</h4>
                  <div className="blog-autor-info mb-3">
                    <p className="text-[#a7a7a7]">Demoteam | Aug 17, 2023</p>
                  </div>
                  <p>Voluptatem earum? Lorem facilisis et sociis justo exercitationem consequuntur? Sit. Deserunt feugiat</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 relative">
              <div className="blog-list-info bg-[#fff] rounded p-4 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.15)]">
                <div className="blog-img-info mb-3">
                  <img className="w-full rounded-lg cursor-pointer object-center object-cover h-[300px]" src={gallery2} alt="blog img" />
                </div>
                <div className="blog-content-info lg:p-4">
                  <h4 className="mb-3 cursor-pointer hover:text-[#0B7132]">Eget eu hymenaeos blandit blandit ipsum ab.</h4>
                  <div className="blog-autor-info mb-3">
                    <p className="text-[#a7a7a7]">Demoteam | Aug 17, 2023</p>
                  </div>
                  <p>Voluptatem earum? Lorem facilisis et sociis justo exercitationem consequuntur? Sit. Deserunt feugiat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
export default Blogsection;
