import React, { useState, useEffect } from "react";
import Card from "./Card";
import ContactCard from "./ContactCard";
import useMenu from "../contexts/menu";

export default function Home(props) {
  const [data, setData] = useState({
    name: "Regula Sharath",
    about: "hi",
    desc: "this is desc",
    experience: "2years",
    ToolBox: {
      Languages: ["JavaScript & Jquery", "HTML & CSS"],
      FrameworksLibraries: ["React", "Redux Tool Kit", "Tailwind", "NextJS"],
      DataBase: ["SQL Server", "MongoDB"],
    },
  });
  const [contactinfo, setContactinfo] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("./../../Data/Home.json");
  //       const rawdata = await response.json();

  //       setData(rawdata);
  //     } catch (error) {}
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="bg-white dark:bg-slate-800 justify-between items-center p-4 w-full h-full">
        <Card
          title="Regula Sharath"
          descline1="Hello, world! 👋"
          descline2="Welcome to my digital playground, where creativity meets functionality and pixels come to life."
          descline3="Iam a passionate and dedicated software developer on a mission to turn innovative ideas into reality through code."
          img="https://images.pexels.com/photos/19256248/pexels-photo-19256248/free-photo-of-dp.jpeg"
        />

        <header className="text-center m-3">
          <p className="text-slate-900 dark:text-white text-xl text-gray-600 font-bold italic ">
            Let's know about each Other...!
          </p>
        </header>

        <section className="mt-8 mx-12">
          <h2 className=" text-slate-900 dark:text-white text-2xl font-bold">
            Who am I ?
          </h2>
          <p className=" text-slate-900 dark:text-white">
            I am a Web developer with a relentless curiosity for technology and
            a love for crafting seamless user experiences.
            <br />
            My journey in the world of coding began 6 years ago, and since then,
            I've been on a continuous quest to refine my skills and stay at the
            forefront of cutting-edge technologies.
          </p>
        </section>
        <section className="mt-8 mx-12">
          <h2 className=" text-slate-900 dark:text-white text-2xl font-bold">
            What Sets Me Apart
          </h2>
          <p className=" text-slate-900 dark:text-white">
            <b> User-Centric Approach:</b> I believe in creating software that
            not only works flawlessly but also provides an exceptional user
            experience.
            <br />
            User satisfaction is at the heart of my development philosophy.
          </p>
        </section>
        <section className="mt-6 mx-12">
          <p className=" text-slate-900 dark:text-white">
            <b>Collaborative Spirit:</b> I thrive in collaborative environments,
            valuing open communication and teamwork.
            <br />
            Building great software is not just about lines of code; it's about
            the people behind them.
          </p>
        </section>
        <section className="mt-6 mx-12">
          <p className=" text-slate-900 dark:text-white">
            <b>Tech Enthusiast:</b> From the latest frameworks to emerging
            technologies, I stay informed and embrace the tools that empower me
            to build better, faster, and smarter.
          </p>
        </section>
        <section className="mt-6 mx-12">
          <p className=" text-slate-900 dark:text-white">
            <b>Continuous Learner:</b> In the ever-evolving tech landscape, I
            see every project as an opportunity to learn something new. I stay
            ahead by embracing a mindset of continuous improvement.
          </p>
        </section>
        <section className="mt-6 mx-12">
          <p className=" text-slate-900 dark:text-white">
            <b>Tech Enthusiast:</b> From the latest frameworks to emerging
            technologies, I stay informed and embrace the tools that empower me
            to build better, faster, and smarter.
          </p>
        </section>
        {data && (
          <section className="mt-6 mx-12">
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold">
              <u>My Toolbox</u>
            </h2>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold mt-2">
              Languages
            </h3>
            <ul className="text-slate-900 dark:text-white list-disc list-inside">
              {data.ToolBox.Languages.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold mt-2">
              Libraries & Frameworks
            </h3>
            <ul className="text-slate-900 dark:text-white list-disc list-inside">
              {data.ToolBox.FrameworksLibraries.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3 className="text-slate-900 dark:text-white text-lg font-bold mt-2">
              DataBases
            </h3>
            <ul className="text-slate-900 dark:text-white list-disc list-inside">
              {data.ToolBox.DataBase.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}
        <section className="text-center m-3">
          <h2 className="text-slate-900 dark:text-white text-2xl text-gray-600 font-bold italic ">
            Lets Connect
          </h2>
          <p className="text-slate-900 dark:text-white text-gray-700">
            If you're looking for a developer who is not just about code but
            also about crafting digital experiences that leave a lasting
            impression, then you're in the right place. <br />
            Explore my portfolio to see some of my projects, and feel free to
            reach out for collaboration, questions, or just to geek out about
            the latest in tech.
            <br />
            Let's build something extraordinary together! 💻✨
          </p>
          {!contactinfo && (
            <button
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500    dark:text-white text-slate-900  mt-2 p-2 rounded-xl"
              onClick={() => {
                setContactinfo(true);
              }}
            >
              {" "}
              Click for Contact Info
            </button>
          )}
        </section>
        {contactinfo && (
          <ContactCard
            contactinfo={contactinfo}
            setContactinfo={setContactinfo}
          ></ContactCard>
        )}
      </div>
    </>
  );
}
