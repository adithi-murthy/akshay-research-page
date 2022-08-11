import React from "react"
import sqms from "../assets/SQMS_logo.png";
import fermi from "../assets/FNAL_logo.png";

import {Nav, Navbar, NavDropdown, Container} from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import FooterText from "../Text/Footer";

const styles = {
    overallDiv: {
        display:'flex',
        alignItems: 'flex-start',
        color: 'white',
    },
}

const Footer = () => {
    return (
        <div id='contact-me'>
        <Navbar sticky="bottom" expand="lg" bg="dark" variant="dark">
        <Container style={styles.overallDiv}>
            <img src={sqms} alt="Me" id="aboutMeImg" />            
            <p style={styles.footerText}>
                {FooterText}
            </p>
            <img src={fermi} alt="Me" id="aboutMeImg" />            
        </Container>
      </Navbar>
      </div>
    )
}

export default Footer;
