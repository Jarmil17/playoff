// src/TurfInfo.js

import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import turfsData from '../DATA/turf'; // Ensure the import path is correct

const TurfInfo = () => {
    const { turfId } = useParams();
    const navigate = useNavigate();

    const allTurfs = [
        ...(turfsData.Ahmedabad || []),
        ...(turfsData.Delhi || []),
        ...(turfsData.Mumbai || [])
    ];

    const selectedTurf = allTurfs.find((turf) => turf.id === parseInt(turfId));

    if (!selectedTurf) {
        return <h2>Turf not found</h2>;
    }

    const handleBookNow = () => {
        navigate('/slot-booking', { state: { turf: selectedTurf } }); // Pass turf data
    };

    return (
        <Container fluid className="p-4" style={{ backgroundColor: '#f9f9f9' }}>
            <Row className="justify-content-center mb-4">
                <Col md={6} className="text-center">
                    <h1 className="display-4" style={{ color: '#28a745', fontWeight: 'bold' }}>
                        {selectedTurf.name}
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#6c757d' }}>
                        Enjoy the best sporting experience at our turf.
                    </p>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col md={7} className="mb-4">
                    <img
                        src={selectedTurf.img}
                        alt="Turf"
                        className="img-fluid rounded shadow-lg"
                        style={{ width: '100%', maxHeight: '500px', objectFit: 'cover' }}
                    />
                </Col>

                <Col md={5} className="mb-4">
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Button
                                variant="success"
                                size="lg"
                                className="w-100 mb-3"
                                onClick={handleBookNow} // Trigger navigation
                            >
                                Book Now
                            </Button>

                            <div className="d-flex justify-content-between mb-2">
                                <span className="fw-bold">Timing</span>
                                <span>24 Hours</span>
                            </div>

                            <div className="d-flex justify-content-between mb-2">
                                <span className="fw-bold">Location</span>
                                <span>{selectedTurf.address}</span>
                            </div>

                            <div className="mb-3">
                                <iframe
                                    title="Turf Location"
                                    src={`https://www.google.com/maps/place/Eiffel+Tower/48.8588443,2.2943506
`}
                                    width="100%"
                                    height="200"
                                    frameBorder="0"
                                    allowFullScreen
                                    aria-hidden="false"
                                    tabIndex="0"
                                    style={{ border: '0' }}
                                ></iframe>
                            </div>

                            <Button
                                variant="outline-primary"
                                size="lg"
                                className="w-100"
                                onClick={() => window.alert('Bulk/Corporate Booking')}
                            >
                                Bulk / Corporate
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default TurfInfo;
