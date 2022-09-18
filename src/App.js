import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import TechSkills from './components/TechSkills';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <About/>
      <TechSkills/>
    </div>
  );
}

export default App;
