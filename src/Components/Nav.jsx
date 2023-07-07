import { NavLink } from "react-router-dom";
import {BsFacebook,BsInstagram,BsTwitter,BsYoutube,BsLinkedin} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import { useState } from "react";
const Nav = ()=>{
    const [open,setOpen] = useState(false);
    return(
        <>
        <div className="mx-14 mt-4">
           <nav className="flex justify-between h-12 items-center z-1">
              <div className="">
                <h3 className="text-2xl text-orange-700">News.com</h3>
              </div>
              <div className="text-2xl duration-500 block lg:hidden hover:re" onClick={()=>setOpen(!open)}>
               { open ?
                <AiOutlineClose/>
                :
                <GiHamburgerMenu/>
               }
              </div>
              <div className={`lg:w-6/12 flex lg:justify-end lg:gap-5  absolute lg:static  bg-white  top-14 w-full flex-col lg:flex-row gap-5 pt-7 lg:pt-0 pb-6 lg:pb-0
              transition-all duration-500 ease-in ${open ? 'left-0 opacity-100':'left-[-490px] opacity-0 md:opacity-100'}`}>
                    <NavLink to="/"><h5 className="text-1xl pl-10 lg:pl-0 hover:text-orange-700 cursor-pointer">Home</h5></NavLink>
                    <NavLink to="/news"><h5 className="text-1xl pl-10 lg:pl-0 hover:text-orange-700 cursor-pointer">News</h5></NavLink>
                    <NavLink to="#"><h5 className="text-1xl pl-10 lg:pl-0 hover:text-orange-700 cursor-pointer">Sign In</h5></NavLink>
                    <div className="flex pl-10 lg:pl-0 gap-4">
                    <BsFacebook className="text-1xl hover:text-orange-700 cursor-pointer"/>
                    <BsInstagram className="text-1xl hover:text-orange-700 cursor-pointer"/>
                    <BsTwitter className="text-1xl hover:text-orange-700 cursor-pointer"/>
                    <BsYoutube className="text-1xl hover:text-orange-700 cursor-pointer"/>
                    <BsLinkedin className="text-1xl hover:text-orange-700 cursor-pointer" />
                    </div>
              </div>
           </nav>
           </div>
           <div className="flex justify-center">
           <hr className="w-[94%] border-1 border-gray"/>
           </div>
        </>
    )
}

export default Nav;