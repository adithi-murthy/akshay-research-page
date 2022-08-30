import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import backgroundImage from "../assets/background.png";
import Pdf from "../assets/Murthy_CV.pdf";

const NavBar = () => {
  return (
    <>
      <Navbar sticky="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Akshay Murthy</Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            style={{
              backgroundImage:
                "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 30 30%27%3e%3cpath stroke=%27rgba%28255, 255, 255, 0.55%29%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 stroke-width=%272%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3e%3c/svg%3e')",
            }}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <HashLink smooth to="/#about-me" className="hashlink">
                About Me
              </HashLink>
              <HashLink smooth to="/#education" className="hashlink">
                Education
              </HashLink>
              <HashLink smooth to="/#research" className="hashlink">
                Research
              </HashLink>
              <HashLink smooth to="/#publications" className="hashlink">
                Publications
              </HashLink>
              <HashLink smooth to="/#contact-me" className="hashlink">
                Contact Me
              </HashLink>
            </Nav>
            <Nav>
              <NavDropdown
                title="Research Topics"
                id="collasible-nav-dropdown"
                className="hashlink"
              >
                <NavDropdown.Item href="/understanding-of-local-structure-on-global-scale">
                  Understanding of Local Structure on Global Scale
                </NavDropdown.Item>
                <NavDropdown.Item href="/in-situ-processing-of-quantum-materials">
                  In situ Processing of Quantum Materials
                </NavDropdown.Item>
                <NavDropdown.Item href="/probing-local-properties">
                  Probing Local Properties
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/publications" 
              className="hashlink"
              >
                Publication List
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: 400,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Quantum Microscopy and Spectroscopy</h1>
              <h4 className="mb-3">
                Developing Structure-Processing-Property Relationships in Quantum Materials
              </h4>
              <a
                className="btn btn-outline-light btn-lg"
                href={Pdf}
                role="button"
              >
                Curriculum vitae
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
