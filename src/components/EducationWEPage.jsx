import React, { useState,useEffect } from 'react'
import EducationCard from './EducationCard'
import WorkExperienceCard from './WorkExperienceCard'
import useMenu from '../contexts/menu'

export default function EducationWEPage(props){
  const [education,setEducation] = useState()
   const [workexperience,setWorkexperience] = useState()
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('./../../Data/Education.json');
        const rawdata = await response.json();
      setEducation(rawdata);
      } catch (error) {
    console.error("Failed to fetch Education"+error)
      }
  };
    const fetchWEdata = async () => {
      try {
        const response = await fetch('./../../Data/WorkExperience.json');
        const rawdata = await response.json();
      setWorkexperience(rawdata);
      } catch (error) {
    console.error("Failed to fetch Work Experience"+error)
      }
    }
    fetchData(); 
    fetchWEdata();

    },[])

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