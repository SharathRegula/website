import React, { useState } from 'react'
import useTheme, {ThemeProvider } from '../contexts/theme'

const ModeBtn = () => {
const {themeMode,lightTheme,darkTheme}=useTheme()

  const handleCheckboxChange = () => {
if (themeMode === 'light') {
  darkTheme()
}else{
  lightTheme()
}  
  }

  return (
    <>
      
      <div className="flex flex-wrap justify-between items-center sm:mr-1">
      <label className="relative inline-flex items-center me-5 cursor-pointer">
<input type="checkbox" value="" checked={themeMode==='dark'}
    onChange={handleCheckboxChange} className="sr-only peer" />
<div className="shadow-xl w-11 h-6 bg-gray-400 rounded-full peer peer-focus:ring-2 peer-focus:ring-black dark:peer-focus:ring-black-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>

        {themeMode==="dark" && <span className="hidden lg:block ms-3 text-xs font-medium text-gray-900 ">Dark Mode Enabled</span>}
        {themeMode==="light" && <span className="hidden lg:block ms-3 text-xs font-medium text-gray-900 ">Dark Mode Disabled</span>}
      </label></div>
  
    </>
  )
}

export default ModeBtn
