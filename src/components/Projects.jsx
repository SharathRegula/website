import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import useMenu from "../contexts/menu";

export default function Projects(props) {
  const [projects, setProjects] = useState([
    {
      Title: "Project-1 Title Here",
      TagLine: "Project-1 Tag Line Here",
      Description:
        "Project-1 A project description provides a comprehensive project overview, including its phases, processes, goals, and objectives. It addresses the problem that initiated the project and outlines the planned activities, timeline, and project location",
      Link: "Link to Project",
      Image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      Technologies: ["Technology-1", "Technology-2", "Technology-3"],
      Tools: ["Tool-1", "Tool-2", "Tool-3"],
    },
    {
      Title: "Project-2 Title Here",
      TagLine: "Project-2 Tag Line Here",
      Description:
        "Project-2 A project description provides a comprehensive project overview, including its phases, processes, goals, and objectives. It addresses the problem that initiated the project and outlines the planned activities, timeline, and project location",
      Link: "Link to the project",
      Image:
        "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      Technologies: ["Technology-1", "Technology-2", "Technology-3"],
      Tools: ["Tool-1", "Tool-2", "Tool-3"],
    },
    {
      Title: "Project-3 Title Here",
      TagLine: "Project-3 Tag Line Here",
      Description:
        "Project-3 A project description provides a comprehensive project overview, including its phases, processes, goals, and objectives. It addresses the problem that initiated the project and outlines the planned activities, timeline, and project location",
      Link: "Link to the project",
      Image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      Technologies: ["Technology-1", "Technology-2", "Technology-3"],
      Tools: ["Tool-1", "Tool-2", "Tool-3"],
    },
  ]);
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('./../../Data/Projects.json');
  //       const rawdata = await response.json();
  //   setProjects(rawdata);
  //     } catch (error) {
  //   console.error("Failed to fetch"+error)
  //     }
  //   };
  //   fetchData();
  //   },[])

  return (
    <>
      {projects && (
        <div className="bg-white dark:bg-slate-800 justify-between items-center p-4 w-full h-full">
          {projects.map((item, index) => (
            <div className="my-2" key={index}>
              <ProjectCard
                title={item.Title}
                tagline={item.TagLine}
                desc={item.Description}
                link={item.Link}
                img={item.Image}
                tech={item.Technologies}
                tools={item.Tools}
              />
            </div>
          ))}
        </div>
      )}
      {!projects && (
        <div className="bg-white dark:bg-slate-800 justify-between items-center p-4 w-full h-full">
          <p className="mb-3 font-normal text-gray-700 dark:text-white text-5xl text-center">
            Loading...!
          </p>
        </div>
      )}
    </>
  );
}
