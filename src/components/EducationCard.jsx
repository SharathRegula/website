import React from 'react'

export default function EducationCard(props) {
  return (<>
    <div className="hidden lg:flex justify-center items-center w-screen">
      <div className=" flex flex wrap  w-full max-w-5xl items-center bg-gradient-to-r from-purple-500 to-pink-500 border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-200 dark:border-gray-700 dark:bg-white to-indigo-500 dark:hover:bg-gray-700">
        <div className="flex flex-wrap  p-4 leading-normal">
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            <div> {props.board && <p className="mb-1 font-normal text-gray-700 dark:text-white">{props.board}</p>}</div>
            
            <div> {props.school && <p className="mb-1 font-normal text-gray-700 dark:text-white">{props.school}</p>}</div>
            <div> {props.university && <p className="mb-1 font-normal text-gray-700 dark:text-white">{props.university}</p>}</div>
            <div> {props.college && <p className="mb-1 font-normal text-gray-700 dark:text-white">{props.college}</p>}</div>
            <div> {props.percentage && <p className="mb-1 font-normal text-gray-700 dark:text-white">{props.percentage}</p>}</div>
            <div> {props.passout && <p className="mb-1 font-normal text-gray-700 dark:text-white">{props.passout}</p>}</div>
            <div> {props.place && <p className="mb-1 font-normal text-gray-700 dark:text-white">{props.place}</p>}</div>
        </div>
        </div>
      </div>
    </div>



    <div className="max-w-sm bg-gradient-to-r from-green-400 to-blue-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:hidden">
      <div className="p-5">
        <div>
          <h5 className="mb-2 m-2 text-2xl font-bold tracking-tight text-slate-900">{props.title}</h5>
          {props.board && <p className="font-normal text-gray-700 dark:text-white">{props.board}</p>}</div>
          <div> {props.school && <p className="mb-1  font-normal text-gray-700 dark:text-white">{props.school}</p>}</div>
        <div> {props.university && <p className="mb-1 font-normal text-gray-700 dark:text-white">{props.university}</p>}</div>
          <div> {props.college && <p className="mb-1  font-normal text-gray-700 dark:text-white">{props.college}</p>}</div>
          <div> {props.percentage && <p className="mb-1 font-normal text-gray-700 dark:text-white">{props.percentage}</p>}</div>
          <div> {props.passout && <p className="mb-1  font-normal text-gray-700 dark:text-white">{props.passout}</p>}</div>
          <div> {props.place && <p className="mb-1  font-normal text-gray-700 dark:text-white">{props.place}</p>}
        
        </div>
      </div>
    </div>


  </>)
}