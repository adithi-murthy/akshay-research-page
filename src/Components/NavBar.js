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
              {/* <Nav.Link href="/about-me">About Me og</Nav.Link> */}
              {/* <HashLink smooth to='/#about-me' style = {styles.hashlink}> About Me hashlink</HashLink> */}
              {/* <Nav.Link><HashLink smooth to='/#about-me'> About Me no style</HashLink></Nav.Link> */}
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
              {/* <Nav.Link href="/education">Education</Nav.Link> */}
              {/* <Nav.Link href="#pricing">Research</Nav.Link>
  <Nav.Link href="#pricing">Publications</Nav.Link> */}
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {/* <Nav.Link href="#deets">abcd</Nav.Link> */}
              <HashLink smooth to="/#contact-me" className="hashlink">
                Contact Me
              </HashLink>
              {/* <Nav.Link eventKey={2} href="#memes"> */}
              {/* abcd */}
              {/* </Nav.Link> */}
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
