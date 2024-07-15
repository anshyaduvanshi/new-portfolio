import React from "react";
import reactjs from "../../public/reactjs.png";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import c1 from "../../public/c1.jpg";
import tailwind from "../../public/tailwind.jpg";

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
        <p>
          Hello, I'm Ansh, a passionate Web developer, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education 
        </h1>
       <p>I am currently pursuing a Bachelor's degree in Computer Science and Engineering (artificial intelligence)at Poornima College of Engineering , jaipur. I have completed 6 semesters and have a CGPA of 7.8.</p>
       <pre>XII(RBSE)-S.S Jain Subodh school,Jaipur  <span>   87.6|2021</span> </pre>
       <pre>X(RBSE)-Jaicon Subodh school,Jaipur  <span>   72.33|2019</span> </pre>

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
       <p className="font-semibold">1.Portfolio</p>       
         <p>      Designed and developed a personal portfolio website using React Js and Tailwind CSS</p>
         
         <p className="font-semibold">2.Read and Edit a Post</p>   
          <p>         Developed a dynamic web applications using React.js for user authentication,post creation and editing functionalities and also use Redux toolkit and Apprwrit for authentication </p>
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Achievements & Awards
        </h1>
        <span>
        
        Publish review paper on chatbot(2022) <br></br>
        Winner in NSP(Non-Syllabus project) 
        
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative [Your Field] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
