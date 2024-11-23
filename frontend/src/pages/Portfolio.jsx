import React from 'react';
import '../styles/Portfolio.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPython } from 'react-icons/fa'; // Font Awesome icons
import { DiReact, DiMysql, DiDjango, DiMongodb } from 'react-icons/di';  // Other tech icons
import { SiFirebase, SiDocker, SiJest, SiRedux } from 'react-icons/si';  // Additional tech icons
import littleLemonImage from '../assets/images/littlelemon.png';

const Portfolio = () => {
  const projectData = [
    {
      id: 1,
      imgSrc: littleLemonImage,
      title: "Little Lemon Restaurant",
      description: "The Little Lemon Restaurant website is a vibrant and interactive platform designed to showcase the restaurant's menu, reservation system, and location information. This project highlights my skills in front-end and back-end development, utilizing technologies like HTML, CSS, JavaScript, React, Django, and MySQL.",
      demoLink: "https://littlelemon.online/",
      codeLink: "https://github.com/BOOPAFZ/little-lemon--website-v1.git",
      technologies: [
        { name: 'HTML', icon: <FaHtml5 size={30} color="#E34F26" /> },
        { name: 'CSS', icon: <FaCss3Alt size={30} color="#1572B6" /> },
        { name: 'JavaScript', icon: <FaJsSquare size={30} color="#F7DF1E" /> },
        { name: 'React', icon: <DiReact size={30} color="#61DAFB" /> },
        { name: 'Redux', icon: <SiRedux size={30} color="#764ABC" /> },
        { name: 'Node.js', icon: <FaNodeJs size={30} color="#339933" /> },
        { name: 'Python', icon: <FaPython size={30} color="#3776AB" /> },
        { name: 'Django', icon: <DiDjango size={30} color="#092E20" /> },
        { name: 'MySQL', icon: <DiMysql size={30} color="#4479A1" /> },
        { name: 'MongoDB', icon: <DiMongodb size={30} color="#47A248" /> },
        { name: 'Firebase', icon: <SiFirebase size={30} color="#FFCA28" /> },
        { name: 'Docker', icon: <SiDocker size={30} color="#2496ED" /> },
        { name: 'Jest', icon: <SiJest size={30} color="#C21325" /> },
      ],
    },
    // Add more projects as needed
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading">
        My <span>Portfolio</span>
      </h1>
      <div className="row">
        {projectData.map((project) => (
          <div className="project" key={project.id}>
            <div className="project-image-wrapper">
              <img src={project.imgSrc} alt={project.title} className="project-image" />
              <div className="button-container">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="button demo-btn">
                  Demo
                </a>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="button code-btn">
                  Code
                </a>
              </div>
            </div>
            <div className="project-description-wrapper">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="technologies">
                <h4>Technologies</h4>
                <div className="tech-icons">
                  {project.technologies.map((tech, index) => (
                    <div className="tech-icon" key={index}>
                      <span>{tech.icon}</span>
                      <p>{tech.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
