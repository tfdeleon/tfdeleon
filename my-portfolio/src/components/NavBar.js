import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import github from "../assets/img/icons8-github.svg";
import linkedIn from "../assets/img/icons8-linkedin.svg";
import gitlab from "../assets/img/icons8-github.svg";
import "../styles/NavBar.css"

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">Tim</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="mailto:tfdeleon@buffalo.edu"
              className={
                activeLink === "connect" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("active")}
              m
            >
              Contact Me
            </Nav.Link>
          </Nav>
          <span className="navbar-text">

            <div className="social-icon">
            <a
                href="https://gitlab.com/tfdeleon"
                target="_blank"
                rel="noreferrer"
              >
                <img src={gitlab} alt="Git lab" />
              </a>
              <a
                href="https://www.linkedin.com/in/timothy-de-leon197/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIn} alt="Linked In" />
              </a>
              <a
                href="https://github.com/tfdeleon"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Github" />
              </a>
            </div>
            <a href="https://docs.google.com/document/d/1ym_wFIN54__HvZurZtYFghMyk0PSTqZb49haB-eY0M0/">
              <button>
                <span>Resume</span>
              </button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
