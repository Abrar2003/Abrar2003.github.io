import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import TechSkills from './components/TechSkills';
import Contact from './components/Contact';
import SoftSkills from './components/softSkills';
import Projects from './components/Projects';
import { useRef } from 'react';
import Github from './components/Github';

function App() {

  return (
    <div className="App">
      <Nav/>
      <Home />
      <About />
      <TechSkills />
      <SoftSkills />
      <Github />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
