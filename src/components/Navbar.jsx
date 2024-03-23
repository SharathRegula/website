import React, { useState,useEffect } from 'react'
import {Link, NavLink} from 'react-router-dom'
import ModeBtn from './ModeBtn'
import useMenu from '../contexts/menu'


export default function Navbar(props){ 
const {menuClass,menuIcon,toggleMenu}=useMenu()
return(
<>
<header className="bg-white">
  <nav className="flex justify-between items-center bg-white ">
    <div>
    <Link to='/'><img className="w-20 mx-1" src="./Sign.jpg" alt="logo"/></Link>
    </div>
    <div className={`md:static md:min-h-fit absolute  min-h-fit left-0 md:w-auto w-full  ${menuClass} flex  md:items-center md:bg-white bg-slate-900 md:text-slate-900 text-white  py-2`}>
      <ul className="md:m-0 mx-auto flex md:flex-row flex-col  md:items-center md:gap-[4vw] gap-[3vw] mt-3">
      <li className="hover:text-gray-500 underline underline-offset-2">
        <NavLink to="/home" onClick={()=>{toggleMenu()}}><b>Home</b></NavLink>
      </li>
      <li className="hover:text-gray-500 underline underline-offset-2" onClick={()=>{toggleMenu()}}>
        <NavLink to="/projects" ><b>Projects</b></NavLink>
      </li>
      <li className="hover:text-gray-500 underline underline-offset-2" onClick={()=>{toggleMenu()}}>
        <NavLink to="/workexperienceandeducation"><b>Work Experience/Education</b></NavLink>
      </li>
      </ul>
    </div>
    <div className="flex flexw-wrap items-center">
     <ModeBtn /> 
      <span className="cursor-pointer mx-1 md:hidden">
      <ion-icon name={`${menuIcon}`} size="large" onClick={()=>{toggleMenu()}} ></ion-icon>
        </span>
    </div>
  </nav>

{/* <div className="hidden  lg:block mr-4 flex flex-wrap justify-between items-center my-auto">
  <ModeBtn />
</div> */}
  </header>
</>
)
}
