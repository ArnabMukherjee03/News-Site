import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CatagoryContext } from "../Context/CatagoryContext";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


const Catagory = ({news})=>{
    const {sports,science,setType} = useContext(CatagoryContext);
    // console.log(sports);
    setType(news);
    if(news === "sports"){
    return(
  <>
  <div className="mt-8 mx-5 lg:mx-10">
    <h3 className="text-[20px] lg:text-[35px]">{news} Update</h3>
  </div>
  <div className="mx-5 mt-8 lg:mx-10">
  <Carousel  responsive={responsive}>
    {
        sports.map(news => {
            return(
                <>
                <div className="w-full h-[400px]">
                <div className="lg:w-[90%] w-full flex flex-col ">
                <img className="w-full h-[200px] " src={news && news.urlToImage ? news.urlToImage : "https://www.mykite.in/kb/NoImageFound.jpg.png"}  alt="" />
                <div className="">
                <p className="text-base channel mt-5 text-orange-700">{news && news.source.name}</p>
                <NavLink to={news && news.url}><h2 className="text-1xl lg:text-[20px] w-full  mt-2 hover:text-orange-700" >{news && news.title}</h2></NavLink>
                <p className="author mt-2"> by {news && news.author ? news.author.slice(0,20) : "Anonymous"}</p>
                </div>
                </div>
                </div>
                </>
            )
        })
       
      }
</Carousel>
</div>
</>
)}else{
  return(
    <>
    <div className="mt-8 mx-5 lg:mx-10">
      <h3 className="text-[20px] lg:text-[35px]">{news} Update</h3>
    </div>
    <div className="mx-5 mt-8 lg:mx-10">
    <Carousel  responsive={responsive}>
      {
          science.map(news => {
              return(
                  <>
                  <div className="w-full h-[400px]">
                  <div className="lg:w-[90%] w-full flex flex-col ">
                  <img className="w-full h-[200px] " src={news && news.urlToImage ? news.urlToImage : "https://www.mykite.in/kb/NoImageFound.jpg.png"}  alt="" />
                  <div className="">
                  <p className="text-base channel mt-5 text-orange-700">{news && news.source.name}</p>
                  <NavLink to={news && news.url}><h2 className="text-1xl lg:text-[20px] w-full  mt-2 hover:text-orange-700" >{news && news.title}</h2></NavLink>
                  <p className="author mt-2"> by {news && news.author ? news.author.slice(0,20) : "Anonymous"}</p>
                  </div>
                  </div>
                  </div>
                  </>
              )
          })
         
        }
  </Carousel>
  </div>
  </>
  )
}
    
}

export default Catagory;