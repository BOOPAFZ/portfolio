import React from 'react';
import '../styles/Portfolio.css';
import { FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa'; // Font Awesome icons
import { DiReact, DiMysql, DiDjango } from 'react-icons/di';  // Other tech icons
import littleLemonImage from '../assets/images/littlelemon.png';

const Portfolio = () => {
  const projectData = [
    {
      id: 1,
      imgSrc: littleLemonImage,
      title: "Little Lemon Restaurant",
      description: "A modern restaurant website showcasing menu items, reservation system, and location information.",
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/project-repo",
      technologies: [
        { name: 'HTML', icon: <FaHtml5 size={30} color="#E34F26" /> },
        { name: 'CSS', icon: <FaCss3Alt size={30} color="#1572B6" /> },
        { name: 'JavaScript', icon: <FaJsSquare size={30} color="#F7DF1E" /> },
        { name: 'React', icon: <DiReact size={30} color="#61DAFB" /> },
        { name: 'Django', icon: <DiDjango size={30} color="#092E20" /> },
        { name: 'MySQL', icon: <DiMysql size={30} color="#4479A1" /> },
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
                <h4>Technologies Used:</h4>
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


