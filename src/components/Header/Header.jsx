import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ThemeToggle from '../Theme/ThemeToggle'; // Importe o ThemeToggle
import './Header.css';

function Header() {
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky-top">
      <Navbar expand="lg" className="border-bottom">
        <Container className="justify-content-between">
          <Navbar.Brand href="#home" className="fw-bold">
            Hector Salgueiros
          </Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" activeKey={activeSection}>
                <Nav.Link href="#home" className="nav-link fw-bold">Home</Nav.Link>
                <Nav.Link href="#about" className="nav-link fw-bold">Sobre</Nav.Link>
                <Nav.Link href="#skills" className="nav-link fw-bold">Competências</Nav.Link>
                <Nav.Link href="#projects" className="nav-link fw-bold">Projetos</Nav.Link>
                <Nav.Link href="#contact" className="nav-link fw-bold">Contato</Nav.Link>
              </Nav>
              <ThemeToggle />
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;