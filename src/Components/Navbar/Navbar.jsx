import React from "react";
import './styleHeader.css'
import Logo from '../../Images/Logo.svg'
import { Navbar, Container, NavDropdown, Offcanvas, Nav } from "react-bootstrap";

const Header = () => {
    return (
        <div className="header">
            <div className="header_logo">
                <img src={Logo} alt='Logo da Marca'></img>
            </div>
            <div className="header_center">
                <p className="ghostItem">Carrers</p>
                <p className="ghostItem">Exams</p>
                <p className="ghostItem">Rents</p>
                <p className="ghostItem">Pilots</p>
            </div>

            <div className="header_right">
                <p className="ghostItem">Account</p>
                <p className="ghostItem">Menu</p>
            </div>

            <div className="revealGhostItems">
                <Navbar className="cont" expand={false}>
                    <Container fluid >
                        <Navbar.Toggle href="#" className="menu"><p>Menu</p></Navbar.Toggle>
                        <Navbar.Offcanvas
                            id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel"
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Item className="listItem" href="/">
                                        Carrers
                                    </Nav.Item>
                                    <Nav.Item className="listItem" href="/">
                                        Exams
                                    </Nav.Item>
                                    <Nav.Item className="listItem" href="/" >
                                        Rents
                                    </Nav.Item>
                                    <Nav.Item className="listItem" href="/">
                                        Pilots
                                    </Nav.Item>
                                    <Nav.Item className="listItem" href="/">
                                        Account
                                    </Nav.Item>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </div>
        </div>

    )
}

export default Header;