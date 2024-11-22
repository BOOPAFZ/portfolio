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
            I'm a software engineering student excited about diving into the world of technology. Passionate about coding and eager to learn, I enjoy working on hands-on projects, collaborating with others, and building my understanding of full-stack development. My goal is to create impactful solutions and grow continuously in the tech field.
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
