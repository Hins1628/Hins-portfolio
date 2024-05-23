import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap"
import logo from '../assets/img/icon2.png';
import navIcon1 from '../assets/img/linkedin.svg';

export const NavBar = () => {
const [activeLink, setActiveLink] = useState('home');
const [scrolled, seScrolled] = useState(false);
const [isCollapsed, setIsCollapsed] = useState(false);

useEffect(() => {
    const onScroll = () => {
        if (window.scrollY > 50) {
            seScrolled(true);
        } else {
            seScrolled(false);
        }
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    
    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Portfolio" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsCollapsed(!isCollapsed)}>
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link': 'navbar-link'} onClick={() =>onUpdateActiveLink('home')}>About</Nav.Link>
            <Nav.Link href="#work" className={activeLink === 'work' ? 'active navbar-link': 'navbar-link'} onClick={() =>onUpdateActiveLink('skills')}>Work</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() =>onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className={isCollapsed ? "d-flex flex-column" : ""}>
              <div className="social-icon">
                <div>
                  <a href="https://www.linkedin.com/in/yu-hin-lam-b88a02233/"><img src={navIcon1} alt="" /></a>
                </div>
              </div>
              <button className="button" onClick={() => window.location.href="https://wa.me/qr/R24SAHJBBMY6O1"}><span>Contact Me</span></button>
            </div>
          </span>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}