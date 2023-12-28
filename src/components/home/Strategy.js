import ImageIcons from "../../common/ImageIcons";
import "./HomePage.css";
import gallery1 from '../../assets/Images/services1.png';
import gallery2 from '../../assets/Images/services2.png';
import gallery3 from '../../assets/Images/servies-pic1.png';
import gallery4 from '../../assets/Images/whyUS.png';
import gallery5 from '../../assets/Images/ac-services-pic1.png';
import gallery6 from '../../assets/Images/banner-bg-img.png';
import evchargingnews from '../../assets/Images/ev_charging23.png'

const Strategy = () => {
  return (
    <>
      {/* How We Work Section */}
      <div className="how-we-work-section md:py-20 max-md:py-[50px] relative">
        <div className="container mx-auto px-2">
          <h2 className="text-center md:pb-12 max-md:pb-8 text-[#000]">How We Work</h2>
          <div className="flex md:gap-4 max-md:gap-10 max-md:flex-col md:mb-10">
            <div className="md:w-1/4 relative">
                <div className="top-img-box-info relative">
                    <div className="top-circle-img mb-3">
                        <img className="mx-auto xl:max-w-[210px] max-xl:max-w-[150px] md:40" src={ImageIcons.work} alt="Fast Charging" loading="lazy" />
                    </div>
                    <div className="text-center">
                      <h4 className="mb-1">Fast Charging</h4>
                      <p className="text-sm max-w-[210px] m-auto">Experience swift device charging with our efficient solutions. Enjoy quick power boosts that keep you connected and on the move, eliminating unnecessary delays.</p>
                    </div>
                </div>
                <div className="arrow-img-top-info max-md:hidden">
                  <img className="arrow-img-info xl:max-w-[175px] max-xl:max-w-[115px]" src={ImageIcons.beforeimg} />
                </div>
            </div>
            <div className="md:w-1/4 relative">
                <div className="top-img-box-info md:pt-[50px]">
                    <div className="top-circle-img mb-3">
                        <img className="mx-auto xl:max-w-[210px] max-xl:max-w-[150px] md:40" src={ImageIcons.work1} alt="Fast Charging" loading="lazy" />
                    </div>
                    <div className="text-center">
                      <h4 className="mb-1">Good Management</h4>
                      <p className="text-sm max-w-[210px] m-auto">Good management is vital for organizational success, involving coordination, strategic decisions, and effective communication to steer teams towards their goals.</p>
                    </div>
                </div>
                <div className="arrow-img-bottom-info max-md:hidden">
                  <img className="arrow-img-info xl:max-w-[175px] max-xl:max-w-[115px]" src={ImageIcons.afterimg} />
                </div>
            </div>
            <div className="md:w-1/4 relative">
                <div className="top-img-box-info relative">
                    <div className="top-circle-img mb-3">
                        <img className="mx-auto xl:max-w-[210px] max-xl:max-w-[150px] md:40" src={ImageIcons.work2} alt="Fast Charging" loading="lazy" />
                    </div>
                    <div className="text-center">
                      <h4 className="mb-1">Renewable Energy</h4>
                      <p className="text-sm max-w-[210px] m-auto">Renewable energy is the key to a sustainable future, harnessed from naturally replenishing sources like sunlight, wind, and water.</p>
                    </div>
                </div>
                <div className="arrow-img-top-info max-md:hidden">
                  <img className="arrow-img-info xl:max-w-[175px] max-xl:max-w-[115px]" src={ImageIcons.beforeimg} />
                </div>
            </div>
            <div className="md:w-1/4 relative">
                <div className="top-img-box-info relative md:pt-[50px]">
                    <div className="top-circle-img mb-3">
                        <img className="mx-auto xl:max-w-[210px] max-xl:max-w-[150px] md:40" src={ImageIcons.work3} alt="Fast Charging" loading="lazy" />
                    </div>
                    <div className="text-center">
                      <h4 className="mb-1">Quality Charger</h4>
                      <p className="text-sm max-w-[210px] m-auto">Efficient, reliable charging for modern devices. Our high-quality charger delivers fast and safe power, meeting the demands of today's electronics.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>  
      {/* End How We Work Section */}

    </>
  );
};
export default Strategy;
