import { About } from './components/About';
import { Contact } from './components/Contact';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Project } from './components/Project';
import { Skill } from './components/Skill';
//import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Header id="Home" />
      <About id="About" />
      <Skill id="Skill" />
      <Project id="Projects" />
      <Contact id="Contact" />
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </>
  );
}

export default App;
