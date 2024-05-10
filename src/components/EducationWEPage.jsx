import React, { useState,useEffect } from 'react'
import EducationCard from './EducationCard'
import WorkExperienceCard from './WorkExperienceCard'
import useMenu from '../contexts/menu'

export default function EducationWEPage(props){
  const [education,setEducation] = useState([
    {
      Title: "Graduation",
      Board: "Bachelor of Technology (Btech)",
      Percentage: "Percentage- 79%",
      YearofPassout: "Year of Passout- 2021",
       University:"Jawaharlal Nehru Technological University",
      College: "Gokaraju Rangaraju Institute of Engineering and Technology",
      PlaceofEducation: "Hyderabad"
    },
    {
      Title: "XII Class",
      Board: "Board of Intermediate Education Telangana",
      Percentage: "Percentage- 96.4%",
      YearofPassout: "Year of Passout- 2017",
      College: "NRI Junior Kalasala",
      PlaceofEducation: "Hyderabad"
    },
    {
      Title: "X Class",
      Board: "Board of Secondary Education Telangana",
      Percentage: "Percentage- 92%",
     YearofPassout: "Year of Passout- 2015",
      School: "Sri Gurudath Concept School",
      PlaceofEducation: "Warangal"
    }
   
    
  ])
   const [workexperience,setWorkexperience] = useState([
    {
      Company: "ITC Infotech India Ltd",
      Position: "Associate IT Consultant",
      Duration: "January 2022 - Present",
      Role: "Role is to develop React functional Components and SQL Queries according to the requirement",
      Skills: ["Javascript","React", "SQL","HTML","CSS"]
    }
  ])
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('./../../Data/Education.json');
  //       const rawdata = await response.json();
  //     setEducation(rawdata);
  //     } catch (error) {
  //   console.error("Failed to fetch Education"+error)
  //     }
  // };
  //   const fetchWEdata = async () => {
  //     try {
  //       const response = await fetch('./../../Data/WorkExperience.json');
  //       const rawdata = await response.json();
  //     setWorkexperience(rawdata);
  //     } catch (error) {
  //   console.error("Failed to fetch Work Experience"+error)
  //     }
  //   }
  //   fetchData(); 
  //   fetchWEdata();

  //   },[])

return(
<>
 
  
  {workexperience && <div className="bg-white dark:bg-slate-800 justify-between items-center p-4 w-full h-full">
      {workexperience.map((item,index)=>(
    <div className="my-2" key={index}>
    <WorkExperienceCard
      company={item.Company}
      position={item.Position}
      duration={item.Duration}
      role={item.Role}
      skills={item.Skills}
      />
    </div>
      ))}
  </div>}


  
  {education && <div className="bg-white dark:bg-slate-800 justify-between items-center p-4 w-full h-full">
    {education.map((item,index)=>(
  <div className="my-2" key={index}>
  <EducationCard
    title={item.Title}
    board={item.Board}
    school={item.School}
    college={item.College}
    percentage={item.Percentage}
    passout={item.YearofPassout}
    place={item.PlaceofEducation}
    university={item.University}
    />
  </div>
    ))}
</div>}
  {!(education || workexperience) && <div className="bg-white dark:bg-slate-800 justify-between items-center p-4 w-full h-full"><p className="mb-3 font-normal text-gray-700 dark:text-white text-5xl text-center">Loading...!</p></div>}
</>  
)
}