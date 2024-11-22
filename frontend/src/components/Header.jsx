import React, { useEffect } from 'react';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Header.css';

function Header() {
  useEffect(() => {
    // jQuery shorthand for $(document).ready
    $(() => {
      // Toggle menu on click
      $('#menu').on('click', function() {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
        console.log('Menu clicked');
      });

      // Remove 'fa-times' and 'toggle' class on scroll or load
      $(window).on('scroll load', function() {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
      });

      // Smooth scrolling to anchor links
      $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      $('#menu').off('click');
      $(window).off('scroll load');
    };
  }, []);

  return (
    <header className="header">
      <div className="user">
        <h3 className="name">Ahmed Bakhsouss</h3>
        <p className="post">Software Engineer</p>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <i id="menu" className="fas fa-bars"></i> {/* Hamburger Icon */}
    </header>
  );
}

export default Header;