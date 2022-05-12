import React from "react";
import { Container, Navbar } from "react-bootstrap";
import '../component.css';

function Footer() {

    let name = localStorage.getItem('username');

    return (
        <div className="footer-div">
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Navbar.Brand >Licenced by: News.com</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">{name}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Footer;