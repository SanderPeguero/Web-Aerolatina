import React from "react";
import './styleHeader.css'
import Logo from '../../images/Logo.svg'
// import Logo from '../../Images/Imagotipo.png'
import { Navbar, Container, NavDropdown, Offcanvas, Nav } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { Button } from "@mui/material";
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
const styleNavIntem = {
   
        textDecoration: 'none',
        color: 'black',
        fontFamily: 'arial',
        background: 'none',
        border: '0'
    
}
const Header = ({ setOpenSigIn , setOpenLogin}) => {

    const handleOpenSigIn = () => setOpenSigIn(true)
    const handleOpenLogin = () => setOpenLogin(true)
    return (
        <div className="header">
            <div className="header_logo">
                <a href="/">
                    <img src={Logo} alt='Logo da Marca'></img>
                </a>
            </div>
            <div className="header_center">
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                    <p className="ghostItem">Inicio</p>
                </Link>
                <Link to='/carreras' style={{ textDecoration: 'none', color: 'white' }}>
                    <p className="ghostItem">Carreras</p>
                </Link>
                <Link to='/pilotpass' style={{ textDecoration: 'none', color: 'white' }}>
                    <p className="ghostItem">Pilot Pass</p>
                </Link>
                <Link to='/rentas' style={{ textDecoration: 'none', color: 'white' }}>
                    <p className="ghostItem">Rentas</p>
                </Link>
                <Link to='/pilotos' style={{ textDecoration: 'none', color: 'white' }}>
                    <p className="ghostItem">Pilotos</p>
                </Link>
            </div>

            <div className="header_right">
                <ButtonUnstyled onClick={handleOpenSigIn} style={{
                    textDecoration: 'none',
                    color: 'white',
                    fontFamily: 'arial',
                    background: 'none',
                    border: '0'


                }}>
                    <p className="ghostItem">Sign In</p>
                    {/* Account */}
                </ButtonUnstyled>

                <ButtonUnstyled
                    onClick={handleOpenLogin} style={{
                        textDecoration: 'none',
                        color: 'white',
                        fontFamily: 'arial',
                        background: 'none',
                        border: '0'
                    }}>

                    <p className="ghostItem">Log In</p>

                </ButtonUnstyled> 
                {/* <p className="ghostItem">Menu</p>*/}
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
                                    <Nav.Item className="listItem" href="/carrers" style={styleNavIntem}>
                                        Carrers
                                    </Nav.Item>
                                    <Nav.Item className="listItem" href="/pilotpass" style={styleNavIntem}>
                                        Pilot Pass
                                    </Nav.Item>
                                    <Nav.Item className="listItem" href="/rents" style={styleNavIntem}>
                                        Rents
                                    </Nav.Item>
                                    <Nav.Item className="listItem" href="/pilots" style={styleNavIntem}>
                                        Pilots
                                    </Nav.Item>
                                    <Nav.Item className="listItem" >
                                        <ButtonUnstyled  onClick={handleOpenSigIn}
                                        style={styleNavIntem}
                                        >
                                            Sign In
                                        </ButtonUnstyled>
                                    </Nav.Item>
                                    <Nav.Item>
                                    <ButtonUnstyled className="listItem"  onClick={handleOpenLogin}
                                       style={styleNavIntem}
                                       >
                                            Log In
                                        </ButtonUnstyled>
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