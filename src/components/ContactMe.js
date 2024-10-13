import React, { useState } from 'react';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const [formError, setFormError] = useState({});

  const onChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const validateForm = () => {
    let err = {};
    if (formData.name === '') {
      err.name = '* Name required!';
    }
    if (formData.email === '') {
      err.email = '* Email required!';
    } else {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(formData.email)) {
        err.email = 'Email not valid!';
      }
    }

    if (formData.project === '') {
      err.project = '* Project name required!';
    }
    if (formData.message === '') {
      err.message = '* Message required!';
    }

    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.table(formData);

    let isValid = validateForm();
    if (isValid) {
      alert('Message Sent');
      // You can add further logic to handle form submission, like sending the data to an API
    }
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">Contact <span>Me</span></h1>
      <div className="row">
        <div className="content">
          <h3 className="title">Contact Info</h3>
          <div className="info">
            <h3><i className="fas fa-envelope"></i> afz@bakhsouss.com</h3>
            <h3><i className="fas fa-phone"></i> (929)-521-2930</h3>
            <h3><i className="fas fa-phone"></i> BOOPAFZ</h3>
            <h3><i className="fas fa-map-marker-alt"></i> Queens, New York 11373</h3>
          </div>
        </div>
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="box"
            onChange={onChangeHandler}
          />
          <span className="error-message">{formError.name}</span>

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="box"
            onChange={onChangeHandler}
          />
          <span className="error-message">{formError.email}</span>

          <input
            type="text"
            name="project"
            placeholder="Project"
            className="box"
            onChange={onChangeHandler}
          />
          <span className="error-message">{formError.project}</span>

          <textarea
            name="message"
            cols="30"
            rows="10"
            className="box message"
            placeholder="Message"
            onChange={onChangeHandler}
          ></textarea>
          <span className="error-message">{formError.message}</span>

          <button type="submit" className="btn">
            Send <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
