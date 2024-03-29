import React, { useState } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import backgroundImage from "../assets/background.png";
import Pdf from "../assets/Murthy_CV.pdf";
import "./NavBar.css";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <>
        <Navbar
          sticky="top"
          expand="xl"
          bg="dark"
          variant="dark"
          expanded={expanded}
        >
          <Container>
            <Navbar.Brand href="/">Akshay Murthy</Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              className="fas fa-bars"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            />
            <Navbar.Collapse
              id="responsive-navbar-nav"
              style={{ position: "static" }}
            >
              <Nav className="me-auto">
                <HashLink
                  smooth
                  to="/#about-me"
                  className="hashlink"
                  onClick={() =>
                    setTimeout(() => {
                      setExpanded(false);
                    }, 150)
                  }
                >
                  About Me
                </HashLink>
                <HashLink
                  smooth
                  to="/#education"
                  className="hashlink"
                  onClick={() =>
                    setTimeout(() => {
                      setExpanded(false);
                    }, 150)
                  }
                >
                  Education
                </HashLink>
                <HashLink
                  smooth
                  to="/#research"
                  className="hashlink"
                  onClick={() =>
                    setTimeout(() => {
                      setExpanded(false);
                    }, 150)
                  }
                >
                  Research
                </HashLink>
                <HashLink
                  smooth
                  to="/#publications"
                  className="hashlink"
                  onClick={() =>
                    setTimeout(() => {
                      setExpanded(false);
                    }, 150)
                  }
                >
                  Publications
                </HashLink>
                <HashLink
                  smooth
                  to="/#contact-me"
                  className="hashlink"
                  onClick={() =>
                    setTimeout(() => {
                      setExpanded(false);
                    }, 150)
                  }
                >
                  Contact Me
                </HashLink>
              </Nav>
              <Nav>
                <NavDropdown
                  title="Research Topics"
                  id="collasible-nav-dropdown"
                  className="hashlink"
                >
                  <NavDropdown.Item
                    href="/investigating-structural-dynamics"
                    id="dropdownItems"
                  >
                    Investigating Structural Dynamics
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="identifying-chemical-impurities"
                    id="dropdownItems"
                  >
                    Identifying Chemical Impurities
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/probing-quantum-phenomena"
                    id="dropdownItems"
                  >
                    Probing Quantum Phenomena
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/research-group" className="hashlink">
                  Meet The Group
                </Nav.Link>
                <Nav.Link href="/publications" className="hashlink">
                  Publication List
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
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
                Developing Structure-Processing-Property Relationships in
                Quantum Materials
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
