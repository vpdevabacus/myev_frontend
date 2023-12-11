import ImageIcons from "../common/ImageIcons";

const New =() =>{
    return(
        <>
        <div class=" container mx-auto ">
            <div class="w-9/12 mx-auto bg-[#E7F0F7] mb-8 rounded-2xl ">
                <div class="flex w-11/12 mx-auto pb-20 ">
                <div class="w-6/12 pt-10">
                <p class="text-[#0B7132] text-2xl font-medium mt-5">CONVENIENT & FAST</p>
                <p class="text-black text-5xl font-semibold mt-3">Discover Places Nearby</p>
                <p class=" w-8/12 text-black text-lg font-medium mt-3">Lorem Ipsum is simply dummy It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div class="w-6/12 ">
                    <img src={ImageIcons.map}/>


                </div>
                
                </div>

            </div>
        </div>
        
        </>

    )
}
export default New;