import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Navbar/App.css';
import SignupModal from '../Navbar/signup'; // Import your modal component


const CustomNavbar = () => {
    return (
        <Navbar expand="lg"   className="mb" style={{ backgroundColor: 'rgba(217, 217, 220,1)', height: '79px', }}>
            <Container fluid>
                {/* Logo with 300px width */}
                <Navbar.Brand>
                    <Link to="/">
                        <img
                            src="playoff.png"
                            alt="Playoff Logo"
                            style={{ width: '300px', height: 'auto' }}
                        />
                    </Link>
                </Navbar.Brand>

                {/* Navigation links */}
                <Navbar.Collapse id="navbar-nav" className="justify-content-end"style={{  fontFamily: 'Roboto, sans-serif' ,color:'#ffffff',backgroundColor:'transparent'}}>
                <Nav>
                        <Nav.Link as={Link} to="/" className="me-4">
                            <button type="button" className="btn btn-transparent fw-bold">Home</button>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/community" className="me-4">
                            <button type="button" className="btn btn-transparent fw-bold">Community</button>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/tournament" className="me-4">
                            <button type="button" className="btn btn-transparent fw-bold">Tournament</button>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/profile" className="me-4">
                            <button type="button" className="btn btn-transparent fw-bold">Profile</button>
                        </Nav.Link>
                        <SignupModal />
                    </Nav>
                </Navbar.Collapse>

                {/* Menu button on the right */}
                
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
