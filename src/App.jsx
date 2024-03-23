import './App.css'
import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import{Outlet} from "react-router-dom"
import {ThemeProvider} from './contexts/theme'
import {MenuProvider} from './contexts/menu'


export default function App() {
const [themeMode,setThememode]=useState('dark')
const [menuIcon,setMenuicon]=useState("menu")
const [menuClass,setMenuclass]=useState("top-[-100%]")
  const lightTheme=()=>{
  setThememode('light')
}
const darkTheme=()=>{
  setThememode('dark')
}
  const toggleMenu=()=>{
      setMenuclass((prevmenuclass)=>(prevmenuclass==="top-[-100%]")? "top-[6%]": "top-[-100%]")
    setMenuicon((prevmenuIcon)=>(prevmenuIcon==="menu")? "close": "menu")
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])
  
  return (
      <>
        <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
          <MenuProvider value={{menuIcon,menuClass,toggleMenu}}>
        <Navbar/>
        <Outlet/>
            </MenuProvider>
          </ThemeProvider>
      </>
  )
}
