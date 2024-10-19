import React, { useState } from 'react';
import { Button, Modal, Nav } from 'react-bootstrap';

const SignupModal = () => {
    const [show, setShow] = useState(false);
    const [isLoginMode, setIsLoginMode] = useState(false);  // State to toggle between Signup and Login

    const handleClose = () => {
        setShow(false);
        setIsLoginMode(false);  // Reset to signup mode when modal closes
    };
    
    const handleShow = () => setShow(true);

    // Switch to login mode inside the modal
    const switchToLogin = () => setIsLoginMode(true);

    // Switch to signup mode inside the modal
    const switchToSignup = () => setIsLoginMode(false);

    return (
        <>
            <Nav.Link as="span" className="me-4">
            <button
                type="button"
                className="btn btn-danger"
                style={{ borderRadius: '20px', paddingRight:'10px'}}
                onClick={handleShow}  // Open modal on click
            >
                Sign Up
            </button>
            </Nav.Link>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{isLoginMode ? 'Login' : 'Sign Up'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isLoginMode ? (
                        // Login form
                        <form>
                            <div className="mb-3">
                                <label htmlFor="login-email" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="login-email"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="login-password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="login-password"
                                    placeholder="Password"
                                />
                            </div>
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </form>
                    ) : (
                        // Signup form
                        <form>
                            <div className="mb-3">
                                <label htmlFor="signup-email" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="signup-email"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="signup-password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="signup-password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="confirm-password" className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirm-password"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <Button variant="primary" type="submit">
                                Sign Up
                            </Button>
                        </form>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    {isLoginMode ? (
                        <>
                            <p>Don't have an account?</p>
                            <Button variant="link" onClick={switchToSignup}>
                                Sign up here
                            </Button>
                        </>
                    ) : (
                        <>
                            <p>Already have an account?</p>
                            <Button variant="link" onClick={switchToLogin}>
                                Login here
                            </Button>
                        </>
                    )}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default SignupModal;
