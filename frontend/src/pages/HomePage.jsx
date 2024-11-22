import React from 'react';
import '../styles/Homepage.css'


function Home() {
  return (
  <>
    
    <section className="home" id="home">
      <h3>HI THERE</h3>
      <h1>I'M <span>Ahmed Bakhsouss</span></h1>
      <p>
        I'm a software engineering student excited about diving into the world of technology.
        I'm passionate about coding and eager to learn new skills to solve real-world problems.
        I enjoy working on hands-on projects, collaborating with others, and growing my understanding of full-stack development.
        I'm looking forward to applying what I've learned to create impactful solutions and continue my journey in tech.
      </p>
      <a href="#about"><button className="btn">About Me <i className="fas fa-user"></i></button></a>
    </section>
    </>
  );
}

export default Home;
