import React from "react";
import './styleHeader.css'
import Logo from '../../images/Logo.svg'
// import Logo from '../../Images/Imagotipo.png'
import { Navbar, Container, NavDropdown, Offcanvas, Nav } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

const Header = ({setOpenSigIn}) => {

  const handleOpenSigIn = () => setOpenSigIn(true)

    return (
        <div className="header">
            <div className="header_logo">
                <a href="/">
                    <img src={Logo} alt='Logo da Marca'></img>
                </a>
            </div>
            <div className="header_center">
                <Link to='/carrers' style={{ textDecoration: 'none', color: 'white' }}>
                    <p className="ghostItem">Carrers</p>
                </Link>
                <Link to='/pilotpass' style={{ textDecoration: 'none', color: 'white' }}>
                    <p className="ghostItem">Pilot Pass</p>
                </Link>
                <Link to='/rents' style={{ textDecoration: 'none', color: 'white' }}>
                    <p className="ghostItem">Rents</p>
                </Link>
                <Link to='/pilots' style={{ textDecoration: 'none', color: 'white' }}>
                    <p className="ghostItem">Pilots</p>
                </Link>
            </div>

            <div className="header_right">
                <Link to='/login'  onClick={{handleOpenSigIn}} style={{ textDecoration: 'none', color: 'white' }}>
                    <p className="ghostItem">Account</p>
                </Link>
                {/* <p className="ghostItem">Menu</p> */}
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
                                    <Nav.Item className="listItem" href="/carrers">
                                        Carrers
                                    </Nav.Item>
                                    <Nav.Item className="listItem" href="/pilotpass">
                                        Pilot Pass
                                    </Nav.Item>
                                    <Nav.Item className="listItem" href="/rents" >
                                        Rents
                                    </Nav.Item>
                                    <Nav.Item className="listItem" href="/pilots">
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