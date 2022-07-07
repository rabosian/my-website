import { useRef } from "react"
import './App.css'
import Home from "./components/Home"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import ScrollTop from "./components/ScrollTop"

function App() {
  const skills = useRef(null)
  const projects = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 68,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <ScrollTop />
      <div className="nav">
        <ul>
          <li
            className="logo"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }}
          >#LOGO#</li>
          <li
            onClick={() => scrollToSection(skills)}
          >SKILLS</li>
          <li
            onClick={() => scrollToSection(projects)}
          >PROJECTS</li>
          <li
            onClick={() => scrollToSection(contact)}
          >CONTACT ME</li>
        </ul>
      </div>
      <div className="home">
        <Home />
      </div>
      <div ref={skills} className="skills">
        <Skills />
      </div>
      <div ref={projects} className="projects">
        <Projects />
      </div>
      <div ref={contact} className="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
