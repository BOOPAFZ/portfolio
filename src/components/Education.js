import React from 'react';

const Education = () => {
  return (
    <section className="education" id="education">
      <h1 className="heading">my <span>education</span></h1>
      <div className="box-container">
        {[...Array(4)].map((_, index) => (
          <div className="box" key={index}>
            <i className="fas fa-graduation-cap"></i>
            <span>2020</span>
            <h3>software engineering</h3>
            <p>
              Studied the principles and practices of software engineering, focusing on designing, developing, and maintaining software applications.
              Gained hands-on experience with programming languages, software development methodologies, and tools to create efficient and reliable software solutions.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
