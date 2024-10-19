
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-auto">
            <Container>
                <Row className="align-items-center">
                    <Col md={4} className="mb-3">
                        <h5>About Us</h5>
                        <p>We provide the best box cricket turfs. Enjoy your matches with us!</p>
                    </Col>
                    <Col md={4} className="mb-3">
                        <h5>Contact</h5>
                        <ul className="list-unstyled">
                            <li>Email: info@boxcricket.com</li>
                            <li>Phone: +91 12345 67890</li>
                        </ul>
                    </Col>
                    <Col md={4} className="mb-3 ">
                        <h5>social media</h5>
                        <ul className="list-unstyled"><li>instagram</li>
                        <li>facebook</li>
                        <li>twitter</li></ul>
                        
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">&copy; 2024 Box Cricket. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
