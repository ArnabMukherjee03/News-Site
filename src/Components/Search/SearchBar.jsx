import { useContext, useState } from "react";
import { SearchContext } from "../../Context/SearchContext";

const SearchBar = ()=>{
    const [message, setMessage] = useState('');
    const {updateSearchQuery} = useContext(SearchContext);
    const handleChange = (e)=>{
        setMessage(e.target.value);
    }
    const onSubmit = ()=>{
        updateSearchQuery(message);
        setMessage('');
    }

    const handleKeySubmit = (e)=>{
        // console.log(e);
        if(e.key === 'Enter'){
            updateSearchQuery(message);
            e.target.value = "";
        }
    }
   
    return(
        <>
         <div className="bg-[#f8f9fa]">
            <div className="py-[100px] ps-[20px] mx-5 lg:mx-10">
                <h2 className="text-3xl">Your Ultimate Destination for Comprehensive Search Results</h2>
                <div className="mt-6 relative w-[100%] lg:w-[70%]">
                <input type="text" className=" bg-transparent  border-b border-b-orange-700 p-[10px] h-[60px] w-full  " onChange={handleChange} onKeyDown={handleKeySubmit} placeholder="Search For Latest News" />
                <div className="lg:absolute lg:right-0 mt-5 lg:mt-0  lg:top-0 cursor-pointer" onClick={onSubmit}>
                <div className="bg-orange-700 text-center text-white px-[35px] py-[13px] text-xl ">Submit</div>
                </div>
                </div>
            </div>
         </div>
        </>
    )
}


export default SearchBar;