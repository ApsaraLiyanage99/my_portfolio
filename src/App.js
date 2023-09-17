import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certification from "./components/Certification";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Certification />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
