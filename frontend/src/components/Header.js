import React, { useEffect } from 'react';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/Header.css';
import mypic from './assets/mypic.jpg';

function Header() {
  useEffect(() => {
    $(document).ready(function(){
      $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
        console.log('Menu clicked'); // Debugging line
      });
      $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
      });
      
      $('a[href*="#"]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear');
      });
    });
  }, []);

  return (
    <header className="header">
      <div className="user">
        <img src={mypic} alt="mypic" />
        <h3 className="name">Ahmed Bakhsouss</h3>
        <p className="post">software engineer</p>
      </div>
      <nav className="navbar">
        <ul>
          <li><a href="#home">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#education">education</a></li>
          <li><a href="#portfolio">portfolio</a></li>
          <li><a href="#contact">contact</a></li>
        </ul>
      </nav>
      <i id="menu" className="fas fa-bars"></i>
    </header>
  );
}

export default Header;
