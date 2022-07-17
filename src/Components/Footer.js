import React from "react"
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
            <p>placeholder for image</p>
            <p style={styles.footerText}>
                {FooterText}
            </p>
            <p>
                Placeholder for another image
            </p>
        </Container>
      </Navbar>
      </div>
    )
}

export default Footer;
