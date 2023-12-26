import ImageIcons from "../../common/ImageIcons";
import Strategy1 from '../../components/home/Strategy';
import Counting from "../../components/counting/Counting";

const Strategy = () => {
    return (
        <>
        <div className="services-strategy-section">
            <div className="bg-[#F1F8E8] pb-20">
                <div className="sm:container lg:container m-auto pb-10">
                    <Strategy1 />
                </div>
            </div>
            <div className="mt-[-155px]">
                <div className="sm:container lg:container m-auto">
                    <Counting />
                </div>
            </div>
        </div>
        </>
    )

}
export default Strategy;