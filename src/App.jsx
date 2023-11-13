import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Project } from './components/Project';
import { Skill } from './components/Skill';
//import './App.css';

function App() {
  return (
    <div className="bg-[#23263A]">
      <Navbar />
      <Header id="Home" />
      <About id="About" />
      <Skill id="Skill" />
      <Project id="Projects" />
      <Contact id="Contact" />
    </div>
  );
}

export default App;
