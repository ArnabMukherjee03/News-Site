import { useContext } from "react";
import { PaginationContext } from "../../Context/PaginationContext";
import { SearchContext } from "../../Context/SearchContext";

const Pagination = ()=>{
    const {currentPage,handlePageChange,} = useContext(PaginationContext);
    const {news} = useContext(SearchContext);
    let lastIndex = Math.ceil(news.length/20);
    
    return(
    <div className="flex justify-center items-center my-6">
    {currentPage > 1 ?<button className="bg-orange-700 text-white text-base px-[18px] py-[13px] w-[110px] text-center" onClick={() => handlePageChange(currentPage - 1)}>Previous</button> : ""}
    <p className="px-6 text-lg">{currentPage} of {lastIndex} </p>
    {currentPage < lastIndex ?<button className="bg-orange-700 text-white text-base px-[18px] py-[13px] w-[110px]" onClick={() => handlePageChange(currentPage + 1)}>Next</button> : ""}
  </div>
    )
}

export default Pagination;