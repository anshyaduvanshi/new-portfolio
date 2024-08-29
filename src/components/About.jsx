import React from "react";
import reactjs from "../../public/reactjs.png";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import c1 from "../../public/c1.jpg";
import tailwind from "../../public/tailwind.jpg";
import Experience from "./Experiance";

function About() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: reactjs,
      name: "ReactJS",
    },
    {
      id: 5,
      logo: c1,
      name: "C++",
    },
    {
      id: 6,
      logo: tailwind,
      name: "Tailwind",
    },
    
  ];
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p className="a">
          Hello, I'm Ansh, a passionate Web developer, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education 
        </h1>
       <p className="a">I am currently pursuing a Bachelor's degree in Computer Science and Engineering (artificial intelligence)at Poornima College of Engineering , jaipur. I have completed 6 semesters and have a CGPA of 7.8.</p>
       <p className="a">XII(RBSE)-S.S Jain Subodh school, Jaipur <span class="details"> 87.6% | 2021</span></p>
<p class="a">X(RBSE)-Jaicon Public  school, Jaipur <span class="details"> 72.33% | 2019</span></p>


        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[200px] md:h-[200px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[150px] h-[150px] p-1 rounded-full border-[2px]"
                alt=""
              />
              
            <div className="px-2 font-bold text-xl mb-2">{name}</div>
             </div>
             
            ))}
          
             </div>
                    
              
        
        <br />
        <br />
       
        <span>
        <h1 className="text-green-600 font-semibold text-xl"> Projeccts </h1>
       <h1> <p className="font-semibold text-xl">1.Portfolio</p>  </h1>    
         <p className="font-semibold text-xl"> Designed and developed a personal portfolio website using React Js and Tailwind CSS</p>
         <br/>
         <h1 className="font-semibold text-xl">2. Sorting Visualizer</h1>
  
        <p className="font-semibold text-xl">Technologies used : HTML, CSS, JavaScript, ReactJS</p>
        <p className="font-semibold text-xl">Developed a dynamic sorting visualizer to demonstrate various sorting algorithms including Bubble Sort, Selection Sort, Insertion Sort,  and Merge Sort.Implemented features like speed control and algorithm selection to allow users to customize and interact with the visualization.</p>
        </span>
        <p className="font-semibold text-xl">Project Link :  <a href="https://ansh1.netlify.app/" target="_blank"> <u>https://ansh1.netlify.app/ </u></a> </p>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Certificate
        </h1>
        <span className="a">
        Publish review paper on chatbot(2022) <br></br>
        Winner in NSP(Non-Syllabus project) <br></br>
        Coursera: Machine Learning on Google Cloud 
        </span>
      </div>
      <br/>
      <Experience></Experience>
    </div>
  );
}

export default About;
