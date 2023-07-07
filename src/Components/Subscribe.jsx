import { NavLink } from "react-router-dom";
const Subscribe = ()=>{
    return(
        <>
        <div className="bg-[#f8f9fa] flex flex-col  items-center justify-center pt-[80px] pb-[70px] px-4 ">
            <div className="mb-[40px]">
            <h2 className="text-[33px]  lg:text-[44px] mb-2.5 text-center">Subscribe to the newsletter</h2>
            <p className="text-xl mb-1 lg:mb-2.5 text-center">Get a weekly digest of our most important stories direct to your inbox.</p>
            </div>
            <div className="w-[100%] lg:w-[63%] relative">
                <input type="text" className=" height-[60px] w-full text-lg font-normal pt-[9px] pe-[33px] pb-[9px] ps-0 border-b-2 border-black bg-transparent  right-0 top-0" placeholder="Enter Your Email" />
                <div className="lg:absolute lg:top-0 lg:right-0 lg:pt-0 pt-8 text-center ">
                    <NavLink className=" bg-orange-700 text-white px-[35px] py-[13px] text-xl ">Send Now</NavLink>
                </div>
            </div>
            <p className="text-base pt-5 lg:pt-2.5 text-center">Place some disclaimer text here about how subscriber’s email, Privacy Policy and all that.</p>
        </div>
        </>
    )
}

export default Subscribe;