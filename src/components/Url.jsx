import React, { useState } from 'react'
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Url(props){
  const {url}=useParams()
return(
<>
  <div className="text-3xl">
 <b>You have requested {url} Page<br/>Requested Page Not Found..!<br/>
</b>
</div>
  <Link to='/home' className="flex flex wrap m-2 w-full max-w-xl justify-center items-center bg-gradient-to-r from-yellow-500 to-orange-500 border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-200 dark:border-gray-700 dark:bg-white to-indigo-500 dark:hover:bg-gray-700"><div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white underline">Click Here  for Home</div></Link>
</>  
)
}