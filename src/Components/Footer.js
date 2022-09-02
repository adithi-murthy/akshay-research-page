import React from "react";
import sqms from "../assets/SQMS_logo copy.png";
import fermi from "../assets/FNAL_logo.png";

import { Navbar, Container } from "react-bootstrap";
import FooterText from "../Text/Footer";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="contact-me">
      <Navbar sticky="bottom" expand="lg" bg="dark" variant="dark">
        <Container id="footerContainer">
          <img src={sqms} alt="Me" id="SQMSImg" />
          <p
          id="footerText"
          >
            {FooterText}
          </p>
          <img src={fermi} alt="Me" id="fermiImg" />
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
