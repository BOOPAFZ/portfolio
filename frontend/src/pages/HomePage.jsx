import React from 'react';
import '../styles/Homepage.css';
import Ahmed from '../assets/images/profile.jpg';

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3 className="greeting">Hi There,</h3>
          <h1>
            I'm <span className="highlight">Ahmed Bakhsouss</span>
          </h1>
          <p className="description">
          I am Ahmed Bakhsouss, a passionate Software Engineer with a strong focus on both back-end and front-end development. I have a solid foundation in building scalable and efficient web applications, gained through hands-on experience and specialized training, including the Meta Back-End Developer and Full-Stack JavaScript certifications. With a background in both Python-based frameworks like Django and modern JavaScript technologies, I am committed to writing clean, maintainable code while continuously learning new technologies and best practices.

          Fluent in both Arabic and English, I am adept at collaborating in diverse environments. My experience spans building APIs, creating user-friendly interfaces, and deploying cloud-based applications. I am a problem-solver at heart and thrive on challenges that allow me to push the limits of my technical skills.

          As I continue to grow in the tech industry, I am always seeking opportunities to work on exciting projects and contribute to innovative solutions.
          </p>
          <a href="#about" className="btn-link">
            <button className="btn">
              About Me <i className="fas fa-user"></i>
            </button>
          </a>
        </div>
        <div className="image-container">
          <img src={Ahmed} alt="Ahmed Bakhsouss" className="profile-img" />
        </div>
      </section>
    </>
  );
}

export default Home;
