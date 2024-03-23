import React from 'react'



export default function ContactCard(props) {

  return (
<>
    <div className="hidden  lg:flex justify-center items-center">
<div className="flex flex wrap justify-center items-center w-full max-w-3xl items-center bg-gradient-to-r from-orange-500 to-green-500 border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-200 dark:border-gray-700 p-5 dark:bg-white to-indigo-500 dark:hover:bg-gray-700"> 
       <b> Write to me at sharathregula28@gmail.com
        <br/>
        Call me at +91-9121560927</b>
</div>
      <b className="text-white text-2xl" onClick={()=>props.setContactinfo(false)}>X</b>
      </div>
  {/*Mobile Layout*/}
  <div className="max-w-sm bg-gradient-to-r from-green-400 to-blue-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:hidden">
    <div className="p-5"><span className="flex flex-row-reverse"> <b className="text-white text-2xl" onClick={()=>props.setContactinfo(false)}>X</b></span>

      <b> Write to me at sharathregula28@gmail.com
        <br/>
        Call me at +91-9121560927</b>
      </div>
      
  </div>
</>
  )
}

