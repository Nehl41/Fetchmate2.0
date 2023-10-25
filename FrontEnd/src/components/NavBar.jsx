import React from 'react'
import OrangeLogo from "../assets/FETCHMATE LOGO/OrangeLogo.png";
import {AiOutlineSearch} from 'react-icons/ai'
import {Link,NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className=" hidden p-4 px-16 sm:flex items-center">
    <div className="nav-left sm:flex items-center w-6/12 justify-between">
      <img src={OrangeLogo} alt="FetchMate Logo" className="h-16 w-16" />
      <ul className="flex pt-2 basis-4/5 justify-evenly content-center text-xl">
        <li><NavLink to={"/"} className={({isActive})=>`${isActive?"text-yellow-400":"text-black"}`}>Home</NavLink></li>
        <li><NavLink to={"/pet-sitter"} className={({isActive})=>`${isActive?"text-yellow-400":"text-black"}`}>Pet Sitter</NavLink></li>
        <li><NavLink to={"/services"} className={({isActive})=>`${isActive?"text-yellow-400":"text-black"}`}>Services</NavLink></li>
        {/* <li><NavLink className={({isActive})=>`${isActive?"text-yellow-400":""}`}>Product</NavLink></li>
        <li><NavLink className={({isActive})=>`${isActive?"text-yellow-400":""}`}>Community</NavLink></li> */}
      </ul>
    </div>
    <div className="nav-right  w-6/12 flex justify-end">
      <div className="nav-right-inner w-4/5 pt-2 h-full flex justify-around items-center">
      <div className="search-input">
        <AiOutlineSearch className="inline text-2xl relative right-2 bottom-1"/>
        <input
        className="bg-white h-full p-2 rounded-lg text-lg inline"
        type="search"
        name="search"
        placeholder="Search"
      />
       </div>
      <button
        type="button"
        className="focus:outline-none bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-xl px-4 py-2 dark:focus:ring-yellow-900"
      >
        Login
      </button>
      <button type="button" className="border-2 text-cyan-400 border-cyan-400 font-medium rounded-lg text-base px-5 py-2.5 text-center border-b-4 active:border-b-2">Get Started</button>
      </div>
    </div>
  </nav>
  )
}

export default NavBar
