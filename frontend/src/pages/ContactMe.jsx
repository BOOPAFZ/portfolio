import React, { useState, useEffect } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { CountryDropdown } from 'react-country-region-selector';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Contact.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    message: '',
  });

  const [formError, setFormError] = useState({});

  const onChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFlagChange = (value, country) => {
    setFormData({ ...formData, phone: value, country: country.name });
  };

  const validateForm = () => {
    let err = {};
    if (formData.name.trim() === '') {
      err.name = 'Please enter your name.';
    }
    if (formData.email.trim() === '') {
      err.email = 'Please enter your email.';
    } else {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(formData.email)) {
        err.email = 'Please provide a valid email.';
      }
    }
    if (formData.country.trim() === '') {
      err.country = 'Select your country.';
    }
    if (formData.phone.trim() === '') {
      err.phone = 'Enter your phone number.';
    }
    if (formData.message.trim() === '') {
      err.message = 'Please leave a message.';
    }

    setFormError({ ...err });
    return Object.keys(err).length === 0;
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors and try again.');
      return;
    }

    try {
      const response = await fetch('http://209.38.4.201/:8000/api/contacts/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', country: '', phone: '', message: '' });
      } else {
        toast.error('Failed to send your message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again later.');
    }
  };

  useEffect(() => {
    const flagElement = document.querySelector('.selected-flag');
    if (flagElement) {
      flagElement.style.backgroundColor = '#3d3d3d33';
    }
  }, [formData.country]);

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        Contact <span>Me</span>
      </h1>
      <div className="row">
        <div className="content">
          <h3 className="title">Contact Info</h3>
          <div className="info">
            <h3>
              <i className="fas fa-envelope"></i> afz@bakhsouss.com
            </h3>
            <h3>
              <i className="fas fa-phone"></i> (929)-521-2930
            </h3>
            <h3>
              <i className="fas fa-phone"></i> BOOPAFZ
            </h3>
            <h3>
              <i className="fas fa-map-marker-alt"></i> Queens, New York 11373
            </h3>
          </div>
        </div>
        <form onSubmit={onSubmitHandler} className="contact-form">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            className={`box ${formError.name ? 'error-border' : ''}`}
            onChange={onChangeHandler}
          />
          <span className="error-message">{formError.name}</span>

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            className={`box ${formError.email ? 'error-border' : ''}`}
            onChange={onChangeHandler}
          />
          <span className="error-message">{formError.email}</span>

          <CountryDropdown
            value={formData.country}
            onChange={(val) => setFormData({ ...formData, country: val })}
            className={`box ${formError.country ? 'error-border' : ''}`}
          />
          <span className="error-message">{formError.country}</span>

          <div className="phone-input">
            <PhoneInput
              country={formData.country.toLowerCase() || 'us'}
              value={formData.phone}
              onChange={handleFlagChange}
              inputClass={`box ${formError.phone ? 'error-border' : ''}`}
            />
            <span className="error-message">{formError.phone}</span>
          </div>

          <textarea
            name="message"
            value={formData.message}
            cols="30"
            rows="10"
            placeholder="Message"
            className={`box message ${formError.message ? 'error-border' : ''}`}
            onChange={onChangeHandler}
          ></textarea>
          <span className="error-message">{formError.message}</span>

          <button type="submit" className="btn">
            Send <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactMe;
