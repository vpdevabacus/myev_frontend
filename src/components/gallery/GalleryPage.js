import gallery1 from '../../assets/Images/services1.png';
import gallery2 from '../../assets/Images/services2.png';
import gallery3 from '../../assets/Images/servies-pic1.png';
import gallery4 from '../../assets/Images/whyUS.png';
import gallery5 from '../../assets/Images/ac-services-pic1.png';
import gallery6 from '../../assets/Images/banner-bg-img.png';

const GalleryPage = () => {
  return (
    <>
      {/* Gallery Page */}
      <div className="gallery-section md:py-20 max-md:py-[50px] relative">
        <div className="container mx-auto px-2">
          <div className="flex gap-2">
              <ul className="gallery-info1 flex gap-3 justify-center flex-wrap pb-2">
                <li><img className="w-full cursor-pointer object-center object-cover h-[250px]" src={gallery1} alt="gallery1" /></li>
                <li><img className="w-full cursor-pointer object-center object-cover h-[250px]" src={gallery2} alt="gallery2" /></li>
                <li><img className="w-full cursor-pointer object-center object-cover h-[250px]" src={gallery3} alt="gallery3" /></li>
                <li><img className="w-full cursor-pointer object-center object-cover h-[250px]" src={gallery4} alt="gallery4" /></li>
                <li><img className="w-full cursor-pointer object-center object-cover h-[250px]" src={gallery5} alt="gallery5" /></li>
                <li><img className="w-full cursor-pointer object-center object-cover h-[250px]" src={gallery6} alt="gallery6" /></li>
                <li><img className="w-full cursor-pointer object-center object-cover h-[250px]" src={gallery2} alt="gallery7" /></li>
                <li><img className="w-full cursor-pointer object-center object-cover h-[250px]" src={gallery3} alt="gallery8" /></li>
              </ul>
          </div>
        </div>
      </div>
      {/* End Gallery Page */}
    </>
  );
};
export default GalleryPage;
