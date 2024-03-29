import { NavDropdown, Navbar, Container, Nav } from 'react-bootstrap'
import Logo from '../../Images/Logo.svg'

const navbar = () => {
    
    return(
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant='dark'>

            <Container>
            
                <Navbar.Brand href="/" style={{ display: 'flex', alignItems: 'center'}}>
                    <img
                        alt=""
                        src={Logo}
                        width="50"
                        height="50"
                        style={{ marginRignt: '1rem'}}
                        className="d-inline-block align-top me-3"
                    />{' '}
                    Aerolatina
                </Navbar.Brand>
                
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
                    
                    <Nav className="me-auto"></Nav>
                    
                    <Nav>

                        <Nav.Link href="#carrers" style={{fontSize: '1rem', color: 'white'}}>Carrers</Nav.Link>
                       
                        <Nav.Link href="#thepilotpass" style={{fontSize: '1rem', color: 'white'}}>Exams</Nav.Link>
                       
                        <Nav.Link href="#rents" style={{fontSize: '1rem', color: 'white'}}>Rents</Nav.Link>

                        <Nav.Link href="#pilots" style={{fontSize: '1rem', color: 'white'}}>Pilots</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
                
            </Container>

        </Navbar>

    )

}

export default navbar