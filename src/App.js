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

function App() {
  const home = useRef();
  const about = useRef();
  const tech = useRef();
  const soft = useRef();
  const projects = useRef();
  const contact = useRef();

  // const handelClick = (x) => {
    
  // }

  return (
    <div className="App">
      <Nav/>
      <Home ref={home} />
      <About ref={about} />
      <TechSkills ref={tech} />
      <SoftSkills ref={soft} />
      <Projects ref={projects} />
      <Contact ref={contact} />
    </div>
  );
}

export default App;
