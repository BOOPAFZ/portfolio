import React from 'react';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import Home from './components/HomePage';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import './app.css';


function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <Education />
      <Portfolio />
      <ContactMe />
    </div>
    
  );
}

export default App;
