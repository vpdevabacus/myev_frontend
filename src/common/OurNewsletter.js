import { useState } from 'react';
import evchargingnews from '../assets/Images/ev_charging23.png'
import axios from 'axios';

const Ournewsletter = () => {

  const [email, setEmail] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}/user/subscribeNewsLetter`, {
        email: email,

      });

      console.log(response.data.message);

      setEmail('')

    } catch (error) {
      console.error('Error submitting form:', error);

    }
  };

  return (
    <>
      {/* Our Newsletter Section */}
      <div className="newsletter-section md:mt-14 relative bg-[#0B7132]">
        <div className="container mx-auto px-2">
          <div className="flex max-md:flex-col">
            <div className="md:w-1/2 relative md:py-[40px] max-md:pt-[40px] max-md:pb-[20px]">
              <h2 className="text-[#FFF]">Our Newsletter</h2>
              <p className="text-[#FFF]">Sign Up To Get Exclusive Offers And News From Our Favorite Brands !</p>
              <div className="newsletter-form-info mt-8">
                <form onSubmit={handleSubmit} className="flex pb-5 md:max-w-[550px]">
                  <div class="w-full relative max-lg:flex max-lg:flex-col">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      class="focus:outline-none bg-[#fff] text-gray-900 rounded-full block w-full p-4 lg:pe-[180px] max-lg:mb-4"
                      placeholder="Email Address*"
                      required />
                    <button className="lg:absolute lg:right-0 lg:top-0 lg:ml-2 rounded-full bg-[#000] text-[#fff] hover:bg-[#F1F8E8] hover:text-[#000] block py-4 px-7 duration-[400ms,700ms]">Subscribe Now</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div>
                <img className="md:absolute md:left-0 md:right-0 md:bottom-0 w-full max-w-[304px] m-auto md:mt-[-74px]" src={evchargingnews} alt="evchargingnews" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Our Newsletter Section */}
    </>
  );
};
export default Ournewsletter;
