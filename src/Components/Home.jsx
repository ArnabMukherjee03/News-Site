import Banner from "./Banner";
import Catagory from "./Catagory";
import Subscribe from "./Subscribe";
const Home = ()=>{
    return(
        <>
        <Banner/>
        <div className="flex justify-center">
        <hr className=" w-11/12 mt-6 border-2 border-black" align="center" />
        </div>
        <Catagory news="sports"/>
        <div className="flex justify-center">
        <hr className=" w-11/12 border-2 border-black" align="center" />
        </div>
        <Catagory news="science"/>
        <Subscribe/>
        </>
    )
}

export default Home;