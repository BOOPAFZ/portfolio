import React, { useState, useEffect } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import { CountryDropdown } from 'react-country-region-selector';

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
    if (formData.country === '') {
      err.country = '* Country required!';
    }
    if (formData.phone === '') {
      err.phone = '* Phone number required!';
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
    }
  };

  useEffect(() => {
    // Apply style change initially
    const flagElement = document.querySelector('.selected-flag');
    if (flagElement) {
      flagElement.style.backgroundColor = '#3d3d3d33'; // or any desired color
    }
  }, [formData.country]);

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

          <CountryDropdown
            value={formData.country}
            onChange={(val) => setFormData({ ...formData, country: val })}
            className="box"
          />
          <span className="error-message">{formError.country}</span>

          {/* Always show the phone input */}
          <div className="phone-input">
            <PhoneInput
              country={formData.country.toLowerCase() || 'us'}  // default to 'us' if no country selected
              value={formData.phone}
              onChange={handleFlagChange}
              inputClass="box"
            />
            <span className="error-message">{formError.phone}</span>
          </div>

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
