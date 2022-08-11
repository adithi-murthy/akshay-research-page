import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import backgroundImage from "../assets/background.png";
import Pdf from '../assets/Murthy_CV.pdf';
const styles = {
  sameline: {
    display: "flex",
    justifyContent: "spaceBetween",
  },
  drophash: {
    marginTop: "7.5%",
  },
};

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
              <div style={styles.sameline}>
                <HashLink
                  smooth
                  to="/#research"
                  className="hashlink drophash"
                >
                  Research
                </HashLink>
                <NavDropdown
                  title=""
                  id="collasible-nav-dropdown"
                  className="dropdown"
                >
                  <NavDropdown.Item href="/research-1">
                    Research1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/research-2">
                    Research2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/research-3">
                    Research3
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <div style={styles.sameline}>
                <HashLink
                  smooth
                  to="/#publications"
                  className="hashlink"
                  style={styles.drophash}
                >
                  Publications
                </HashLink>
                <NavDropdown
                  title=""
                  id="collasible-nav-dropdown"
                  className="dropdown"
                >
                  <NavDropdown.Item href="/publications">
                    List of All Publications
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Nav>
            <Nav>
              <NavDropdown
                title="All Research"
                id="collasible-nav-dropdown"
                className="hashlink"
              >
                <NavDropdown.Item href="/research-1">
                  Research1
                </NavDropdown.Item>
                <NavDropdown.Item href="/research-2">
                  Research2
                </NavDropdown.Item>
                <NavDropdown.Item href="/research-3">
                  Research3
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/publications" className="hashlink">
                Publication List
              </Nav.Link>
              <HashLink smooth to="/#contact-me" className="contact-me">
                Contact Me
              </HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:`url(${backgroundImage})`,
          height: 400,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Quantum Microscopy and Spectroscopy</h1>
              <h4 className="mb-3">Developing Structure-Processing-Properties in Quantum Materials</h4>
              <a
                className="btn btn-outline-light btn-lg"
                href = {Pdf}
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
