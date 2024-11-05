import React from 'react';

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading"><span>about</span> me </h1>
      <div className="row">
        <div className="info">
          <h3><span>name :</span> Ahmed Bakhsouss</h3>
          <h3><span>age :</span> 24</h3>
          <h3><span>qualification :</span> na</h3>
          <h3><span>post :</span> software engineer</h3>
          <h3><span>language :</span> arabic</h3>
          <a href="#">
            <button className="btn">download Resume <i className="fas fa-download"></i></button>
          </a>
        </div>
        <div className="counter">
          <div className="box">
            <span>2+</span>
            <h3>years of experience</h3>
          </div>
          <div className="box">
            <span>3+</span>
            <h3>project completed</h3>
          </div>
          <div className="box">
            <span>3+</span>
            <h3>project completed</h3>
          </div>
          <div className="box">
            <span>3+</span>
            <h3>project completed</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
