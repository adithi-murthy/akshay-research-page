import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  return (
    <>
      <Navbar sticky="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Homepage Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
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
              <HashLink smooth to="/#publications" className="hashlink">
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
              <Nav.Link
                href="/publications"
                className="hashlink"
                // style={{ whiteSpace: "nowrap" }}
              >
                Publication List
              </Nav.Link>
              <HashLink
                smooth
                to="/#contact-me"
                // className="hashlink"
                className="contact-me"
              >
                Contact Me
              </HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: 400,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Heading</h1>
              <h4 className="mb-3">Subheading</h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                Call to action
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
