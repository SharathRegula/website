import React from "react";

export default function WorkExperienceCard(props) {
  return (
    <>
      <div className="hidden lg:flex justify-center items-center w-screen">
        <div className=" flex flex wrap  w-full max-w-5xl items-center bg-gradient-to-r from-blue-500 to-green-300 border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-200 dark:border-gray-700 dark:bg-white to-indigo-500 dark:hover:bg-gray-700">
          <div className="flex flex-wrap  p-4 leading-normal">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.company}
              </h5>
              <div>
                {" "}
                {props.position && (
                  <p className="mb-1 font-normal text-gray-700 dark:text-white">
                    {props.position}
                  </p>
                )}
              </div>
              <div>
                {" "}
                {props.duration && (
                  <p className="mb-1 font-normal text-gray-700 dark:text-white">
                    {props.duration}
                  </p>
                )}
              </div>
              <div>
                {" "}
                {props.role && (
                  <p className="mb-1 font-normal text-gray-700 dark:text-white">
                    {props.role}
                  </p>
                )}
              </div>
              <div>
                {props.skills && (
                  <div>
                    <span className="bold underline text-gray-700 dark:text-white">
                      <b>Skills</b>
                    </span>
                    <ul>
                      {props.skills.map((item, index) => (
                        <li
                          key={index}
                          className="font-normal text-gray-700 dark:text-white"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-sm bg-gradient-to-r from-yellow-400 to-green-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 lg:hidden">
        <div className="p-5">
          <div>
            <h5 className="mb-2 m-2 text-2xl font-bold tracking-tight text-slate-900">
              {props.company}
            </h5>
            {props.position && (
              <p className="font-normal text-gray-700 dark:text-white">
                {props.position}
              </p>
            )}
          </div>
          <div>
            {" "}
            {props.duration && (
              <p className="mb-1  font-normal text-gray-700 dark:text-white">
                {props.duration}
              </p>
            )}
          </div>
          <div>
            {" "}
            {props.role && (
              <p className="mb-1 font-normal text-gray-700 dark:text-white">
                {props.role}
              </p>
            )}
          </div>
          <div>
            {props.skills && (
              <div>
                <span className="bold underline text-gray-700 dark:text-white">
                  <b>Skills</b>
                </span>
                <ul>
                  {props.skills.map((item, index) => (
                    <li
                      key={index}
                      className="font-normal text-gray-700 dark:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
