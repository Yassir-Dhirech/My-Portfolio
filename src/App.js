import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'; 
import Nav from './nav/Nav.js';
import About from './about/About.js';
import Skills from './skills/Skills.js';
import Projects from './projects/Projects.js';
import Contact from './contact/Contact.js';
import './styles/nav.css';
import './styles/app.css';
import Background from './background/Background.js';
import PlayerStats from './playerStats/PlayerStats.js';
import { useState , useEffect } from 'react';
import LoadingScreen from "./compenents/LoadingScreen.js";
import { Suspense } from "react";


const App = () => {
  const [isLoading , setIsLoading] = useState(true);
  useEffect(()=>{
    const timer = setTimeout(()=> setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  },[]);

  // if (isLoading) return <LoadingScreen />

  return (
    <Router>
      {/* <Suspense fallback={<div>Loading...</div>}/> */}
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlayerStats />
    </Router>
  );
}

export default App;
