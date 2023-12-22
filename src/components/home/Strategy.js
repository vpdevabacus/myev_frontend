import ImageIcons from "../../common/ImageIcons";
import "./HomePage.css";

const Strategy = () => {
  return (
    <>
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
                      <p className="text-sm max-w-[210px] m-auto">Possimus laoreet lec exercit, ipsum adipisicing hic ipsum rec sith.</p>
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
                      <p className="text-sm max-w-[210px] m-auto">Possimus laoreet lec exercit, ipsum adipisicing hic ipsum rec sith.</p>
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
                      <p className="text-sm max-w-[210px] m-auto">Possimus laoreet lec exercit, ipsum adipisicing hic ipsum rec sith.</p>
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
                      <p className="text-sm max-w-[210px] m-auto">Possimus laoreet lec exercit, ipsum adipisicing hic ipsum rec sith.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>  
    </>
  );
};
export default Strategy;
