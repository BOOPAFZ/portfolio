import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import ContactMe from "./pages/ContactMe";
import Education from "./pages/Education";
import Home from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import AboutMe from "./pages/AboutMe";
// import NotFound from "./pages/NotFound";

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
};

export default App;
