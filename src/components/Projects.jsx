import React, { useState,useEffect } from 'react'
import ProjectCard from './ProjectCard'
import useMenu from '../contexts/menu'

export default function Projects(props){
  const [projects,setProjects] = useState()
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await fetch('./../../Data/Projects.json');
        const rawdata = await response.json();
    setProjects(rawdata);
      } catch (error) {
    console.error("Failed to fetch"+error)
      }
    };
    fetchData(); 
    },[])

return(
<>
  
  {projects&& <div className="bg-white dark:bg-slate-800 justify-between items-center p-4 w-full h-full">
    
  
    {projects.map((item,index)=>(
  <div className="my-2" key={index}>
  <ProjectCard
    title={item.Title}
    tagline={item.TagLine}
    desc={item.Description}
    link={item.Link}
    img={item.Image}
    tech={item.Technologies}
    tools={item.Tools}/>
  </div>
    ))}
</div>}
  {!projects && <div className="bg-white dark:bg-slate-800 justify-between items-center p-4 w-full h-full"><p className="mb-3 font-normal text-gray-700 dark:text-white text-5xl text-center">Loading...!</p></div>}
</>  
)
}