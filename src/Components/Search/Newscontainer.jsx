import {NavLink} from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
import { useContext } from "react";
import { PaginationContext } from "../../Context/PaginationContext";

const Newscontainer = ()=>{

    const {news,searchQuery} = useContext(SearchContext);
    console.log(news);
    const{indexOfLastItem,indexOfFirstItem} = useContext(PaginationContext);
    return(
        <>
            <div className="mx-10">
                <div className="ps-[30px]">
                    
                    {searchQuery !== "" ? <h3 className="text-2xl">Showing Results Based on " {searchQuery} "</h3> : ''}
                </div>
                <div className="flex w-full mt-[10px] justify-evenly flex-col lg:flex-row flex-wrap">
                {
                    news.slice(indexOfFirstItem,indexOfLastItem).map((news)=>{
                        return (
                <div className="w-full  lg:w-[23%] mt-[20px]">
                <div className="lg:w-[100%] w-full flex flex-col">
                <img className="w-full h-[200px] " src={news && news.urlToImage ? news.urlToImage : "https://www.mykite.in/kb/NoImageFound.jpg.png"}  alt="" />
                <div className="">
                <p className="text-base channel mt-5 text-orange-700">{news && news.source.name}</p>
                <NavLink to={news && news.url}><h2 className="text-1xl lg:text-[20px] w-full  mt-2 hover:text-orange-700" >{news && news.title}</h2></NavLink>
                <p className="author mt-2"> by {news && news.author ? news.author.slice(0,20) : "Anonymous"}</p>
                </div>
                </div>
                </div>
                        )
                    })
                }
                </div>
                </div>
        </>
    )
}

export default Newscontainer;