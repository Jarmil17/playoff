import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


const Profile = () => {
    const user = {
        name: "Jarmil Patel",
        email: "jarmil.patel@example.com",
        phone: "+91 9876543210",
        location: "Ahmedabad, India",
        bio: "Passionate about cricket and real estate. Working on amazing web apps!"
    };

    return (
        <Container className="profile-page my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg">
                        <Card.Body className="text-center">
                            {/* Profile Picture */}
                            <div className="profile-img mb-4">
                                <img
                                    src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?size=338&ext=jpg" // Replace with actual user image path
                                    alt="Profile"
                                    className="rounded-circle"
                                    width="150"
                                    height="150"
                                />
                            </div>

                            {/* User Info */}
                            <h3 className="mb-3">{user.name}</h3>
                            <p className="text-muted mb-3">{user.email}</p>
                            <p><i className="bi bi-telephone-fill"></i> {user.phone}</p>
                            <p><i className="bi bi-geo-alt-fill"></i> {user.location}</p>

                            {/* Bio */}
                            <p className="bio mt-4">{user.bio}</p>

                            {/* Action Buttons */}
                            <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
                                <Button variant="primary" className="me-md-2">Edit Profile</Button>
                                <Button variant="danger">Logout</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;
