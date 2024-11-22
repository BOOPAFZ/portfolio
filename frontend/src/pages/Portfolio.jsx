import React from 'react';
import '../styles/Portfolio.css'

const Portfolio = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h1 className="heading">my <span>portfolio</span></h1>
      <div className="box-container">
        {[...Array(6)].map((_, index) => (
          <div className="box" key={index}>
            <img src="mypor.jpg" alt="Portfolio item" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
