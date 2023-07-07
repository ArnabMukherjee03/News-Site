import { useContext } from "react";
import {NewsContext} from "../Context/NewsContext";
import { NavLink } from "react-router-dom";
const Banner = ()=>{
    const {news} = useContext(NewsContext);
    
    return(
        <>
        <div className="container mt-3">
         <div className="flex flex-col lg:flex-row mx-5 lg:mx-10  gap-5 lg:gap-10">
            <div className="w-full lg:w-6/12 h-full flex flex-col ">
                <img className="w-full h-1/2 " src={news[6] && news[6].urlToImage ? news[6].urlToImage : "https://www.mykite.in/kb/NoImageFound.jpg.png"} alt="" />
                <div className="">
                <p className="text-base channel mt-5 text-orange-700">{news[6] && news[6].source.name}</p>
                <NavLink to={news[6] && news[6].url}><h2 className="text-2xl lg:text-3xl w-full lg:w-5/6 mt-2 hover:text-orange-700">{news[6] && news[6].title}</h2></NavLink>
                <p className="author mt-2"> by {news[6] && news[6].author ? news[6].author : "Anonymous"}</p>
                </div>
            </div>
            <div className="flex gap-5  flex-col w-full lg:w-6/12">
                {news.slice(7,10).map((news)=>{
                    return(
                        <div className="flex flex-col lg:flex-row gap-6">
                        <img className="w-full lg:w-6/12" src={news && news.urlToImage ? news.urlToImage : "https://www.mykite.in/kb/NoImageFound.jpg.png"}  alt="" />
                        <div className="flex flex-col ">
                        <p className="text-base channel text-orange-700 mt-2">{news && news.source.name}</p>
                        <NavLink to={news && news.url}><h2 className="text-2xl lg:text-1.5xl w-full cursor-pointer mt-2 hover:text-orange-700">{news && news.title}</h2></NavLink>
                        <p className="author mt-2"> {`by ${news && news.author ? news.author : "Anonymous"}`}</p>
                        </div>
                    </div>
                    )
                }
                )}
            </div>
         </div>
         </div>
        </>
    )
}

export default Banner;