import Header from './components/Header/Header.jsx'
import Section from './components/Section/Section.jsx';
import Home from './section/Home/Home.jsx';
import About from './section/About/About.jsx';
import Skills from './section/Skills/Skills.jsx';
import Projects from './section/Projects/Projects.jsx';
import Contact from './section/Contact/Contact.jsx';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Section id="home">
        <Home />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </>
  )
}

export default App