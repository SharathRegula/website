import React from "react";

export default function ProjectCard(props) {
  return (
    <>
      <a href={props.link} target="_blank">
        <div className="hidden lg:flex justify-center items-center w-screen">
          <div className=" flex flex wrap justify-center items-center w-full max-w-5xl items-center bg-gradient-to-r from-yellow-600 to-pink-500 border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-200 dark:border-gray-700 dark:bg-white to-indigo-500 dark:hover:bg-gray-700">
            <div className="flex flex-wrap  p-4 leading-normal">
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {props.title}
                </h5>
                {/*  <p className="mb-3 font-normal text-gray-700 dark:text-white">{props.descline1}
  <br/>{props.descline2}
  <br/>{props.descline3}
  </p>*/}
                <div>
                  {" "}
                  {props.tagline && (
                    <p className="mb-3 font-normal text-gray-700 dark:text-white">
                      {props.tagline}
                    </p>
                  )}
                </div>
                <div>
                  {" "}
                  {props.desc && (
                    <p className="mb-3 font-normal text-gray-700 dark:text-white">
                      {props.desc}
                    </p>
                  )}
                </div>
                <div>
                  {" "}
                  {props.link && (
                    <p className="mb-3 font-normal text-gray-700 dark:text-white">
                      {props.link}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="m-2">
              <img
                className="object-cover w-full rounded-t-lg h-full md:h-40 md:w-60 md:rounded-none md:rounded-r-lg"
                src={props.img}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="max-w-sm bg-gradient-to-r from-green-400 to-blue-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:hidden">
          <div>
            <img className="rounded-t-lg" src={props.img} alt={props.title} />
          </div>
          <div className="p-5">
            <div>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900">
                {props.title}
              </h5>
            </div>
            {/*   <p className="mb-3 font-normal text-slate-700"><b>{props.descline1}
       <br/>{props.descline2}
       <br/>{props.descline3}</b></p>*/}
            {props.tagline && (
              <div>
                <p className="mb-3 font-normal text-gray-700 dark:text-white">
                  {props.tagline}
                </p>
              </div>
            )}
            {props.desc && (
              <div>
                <p className="mb-3 font-normal text-gray-700 dark:text-white">
                  {props.desc}
                </p>
              </div>
            )}
            {props.link && (
              <div>
                <p className="mb-3 font-normal text-gray-700 dark:text-white">
                  {props.link}
                </p>
              </div>
            )}

            {/* <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
               <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </div> */}
          </div>
        </div>
      </a>
    </>
  );
}
