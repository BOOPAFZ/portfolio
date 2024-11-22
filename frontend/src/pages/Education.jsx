import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      date: "Oct 2024",
      title: "Meta Front-End Developer Specialization",
      description: "Learned the core skills required to build modern, responsive web applications. The program covered key front-end technologies such as HTML, CSS, and JavaScript, with a focus on building user-friendly, interactive web interfaces. I gained hands-on experience with React, learning to create dynamic and scalable user interfaces with reusable components. Additionally, the specialization taught version control with Git, how to work with APIs for data exchange, and how to optimize web performance. By completing real-world projects, I developed a strong foundation in front-end development and the skills necessary to create visually appealing and functional web applications."
    },
    {
      date: "Nov 2024",
      title: "Meta Back-End Developer Specialization",
      description: "Gained expertise in building server-side applications using Django, a Python-based framework. Learned to develop robust web applications by creating models, views, and templates, and interacted with databases using Django's ORM. Covered API development with Django Rest Framework, user authentication, and authorization, as well as deploying applications to cloud platforms like AWS. Gained hands-on experience in testing, debugging, and optimizing back-end systems."
    },
    {
      date: "Jan 2025",
      title: "IBM Full-Stack JavaScript Developer Professional Certificate",
      description: "In the IBM Full-Stack JavaScript Developer Professional Certificate, I gained comprehensive skills in both front-end and back-end development using JavaScript. The program covered essential technologies such as HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB to build full-stack web applications. I learned how to create dynamic, responsive user interfaces, handle server-side functionality, and integrate databases. Additionally, the certificate provided hands-on experience with building RESTful APIs and deploying applications to cloud platforms. By completing the program, I developed the skills necessary to create scalable, maintainable, and efficient full-stack applications, preparing me for real-world development challenges."
    }
  ];

  return (
    <section className="education" id="education">
      <h1 className="heading">
        My <span>Education</span>
      </h1>
      <div className="box-container">
        {educationData.map((item, index) => (
          <div className="box" key={index}>
            <i className="fas fa-graduation-cap"></i>
            <span className="date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
