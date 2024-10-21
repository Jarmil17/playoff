import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import '../Navbar/App.css'; // Import CSS for additional styling

const TournamentPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTournament, setSelectedTournament] = useState(null);
    const [showModal, setShowModal] = useState(false);

    // Sample tournament data
    const tournaments = [
        {
            id: 1,
            title: 'Turf Bash',
            turf: 'Turf A',
            date: '25th October, 2024',
            time: '10:00 AM',
            location: 'City Stadium',
            prize: '1000',
            slots: '10/20',
            image: 'https://marketplace.canva.com/EAFJp9GmOyw/1/0/1600w/canva-black-and-red-bold-cricket-match-instagram-post-rmL8XLTxRuM.jpg' // Placeholder image
        },
        {
            id: 2,
            title: 'Karnavati Box Cricket',
            turf: 'Turf B',
            date: '28th October, 2024',
            time: '11:00 AM',
            location: 'West Ground',
            prize: '500',
            slots: '8/16',
            image: 'https://marketplace.canva.com/EAFJp9GmOyw/1/0/1600w/canva-black-and-red-bold-cricket-match-instagram-post-rmL8XLTxRuM.jpg' // Placeholder image
        },
        {
            id: 3,
            title: 'YMCA Box Cricket',
            turf: 'Turf C',
            date: '30th October, 2024',
            time: '2:00 PM',
            location: 'Central Park',
            prize: '750',
            slots: '5/10',
            image: 'https://marketplace.canva.com/EAFJp9GmOyw/1/0/1600w/canva-black-and-red-bold-cricket-match-instagram-post-rmL8XLTxRuM.jpg' // Placeholder image
        },
    ];

    // Filter tournaments based on search term
    const filteredTournaments = tournaments.filter((tournament) =>
        tournament.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleShowModal = (tournament) => {
        setSelectedTournament(tournament);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <Container className="my-5">
            {/* Search Bar */}
            <Form className="mb-4">
                <Form.Control
                    type="text"
                    placeholder="Search for tournaments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="rounded-pill"
                />
            </Form>

            {/* Tournament List */}
            <Row>
                {filteredTournaments.length > 0 ? (
                    filteredTournaments.map((tournament) => (
                        <Col md={6} lg={4} className="mb-4" key={tournament.id}>
                            <Card className="h-100 shadow tournament-card">
                                <Card.Img variant="top" src={tournament.image} className="tournament-image" />
                                <Card.Body>
                                    <Card.Title className="tournament-title">{tournament.title}</Card.Title>
                                    <Card.Text>
                                        <strong>Turf:</strong> {tournament.turf} <br />
                                        <strong>Date:</strong> {tournament.date} <br />
                                        <strong>Time:</strong> {tournament.time} <br />
                                        <strong>Location:</strong> {tournament.location} <br />
                                        <strong>Prize:</strong> ₹{tournament.prize} <br />
                                        <strong>Available Slots:</strong> {tournament.slots}
                                    </Card.Text>
                                    <Button
                                        variant="outline-primary"
                                        className="mt-2"
                                        onClick={() => handleShowModal(tournament)}
                                    >
                                        Enroll Now
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <Col>
                        <p>No tournaments found.</p>
                    </Col>
                )}
            </Row>

            {/* Modal for Tournament Details */}
            {selectedTournament && (
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedTournament.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong>Date:</strong> {selectedTournament.date}</p>
                        <p><strong>Time:</strong> {selectedTournament.time}</p>
                        <p><strong>Location:</strong> {selectedTournament.location}</p>
                        <p><strong>Prize:</strong> ₹{selectedTournament.prize}</p>
                        <p><strong>Available Slots:</strong> {selectedTournament.slots}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseModal}>
                            Enroll Now
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </Container>
    );
};

export default TournamentPage;
