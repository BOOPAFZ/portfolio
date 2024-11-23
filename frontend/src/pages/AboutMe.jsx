import React from 'react';
import '../styles/Aboutme.css';

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>About</span> Me
      </h1>
      <div className="row">
        {/* Info Section */}
        <div className="info">
          <h3>
            <span>Name:</span> Ahmed Bakhsouss
          </h3>
          <h3>
            <span>Age:</span> 24
          </h3>
          <h3>
            <span>Qualification:</span> Meta Back-End Developer Specialization, Full-Stack JavaScript
          </h3>
          <h3>
            <span>Role:</span> Software Engineer
          </h3>
          <h3>
            <span>Languages:</span> Arabic, English
          </h3>
          <a href="/resume.pdf" download="Ahmed_Bakhsouss_Resume">
            <button className="btn">
              Download Resume <i className="fas fa-download"></i>
            </button>
          </a>
        </div>
        {/* Counter Section */}
        <div className="counter">
          {[
            { count: "2+", label: "Years of Experience" },
            { count: "5+", label: "Completed Projects" },
            { count: "3+", label: "Happy Clients" },
            { count: "4+", label: "Certifications Earned" },
          ].map((item, index) => (
            <div className="box" key={index}>
              <span>{item.count}</span>
              <h3>{item.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
