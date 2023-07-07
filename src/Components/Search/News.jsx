import Newscontainer from "./Newscontainer";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
const News = ()=>{
    return(
        <>
        <SearchBar/>
        <Newscontainer/>
        <Pagination/>
        </>
    )
}

export default News;