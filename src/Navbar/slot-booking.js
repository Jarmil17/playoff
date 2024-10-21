// src/SlotBooking.js

import React, { useState } from 'react';
import { Alert, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { FaCreditCard, FaMobileAlt, FaMoneyBillWave } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const SlotBooking = () => {
    const location = useLocation();
    const turf = location.state?.turf;
    const [date, setDate] = useState('');
    const [selectedSlots, setSelectedSlots] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState('');
    const [totalCost, setTotalCost] = useState(0);
    const [message, setMessage] = useState('');

    const timeSlots = [
        '10:00 AM - 11:00 AM',
        '11:00 AM - 12:00 PM',
        '12:00 PM - 1:00 PM',
        '1:00 PM - 2:00 PM',
        '2:00 PM - 3:00 PM',
        '3:00 PM - 4:00 PM',
        '4:00 PM - 5:00 PM',
    ];

    const costPerSlot = 500; // Cost per time slot

    const handleSlotChange = (slot) => {
        setSelectedSlots((prev) => {
            const newSelectedSlots = prev.includes(slot)
                ? prev.filter((s) => s !== slot) // Deselect the slot
                : [...prev, slot]; // Select the slot

            // Update the total cost based on the new selection
            setTotalCost(newSelectedSlots.length * costPerSlot);
            return newSelectedSlots;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!paymentMethod) {
            alert('Please select a payment method');
            return;
        }
        setMessage(`Booking confirmed for ${date} for ${turf.name} at slots: ${selectedSlots.join(', ')}. Total Cost: ₹${totalCost}. Payment Method: ${paymentMethod}`);
    };

    if (!turf) {
        return <h2>Turf not found</h2>;
    }

    return (
        <Container className="p-4" style={{ backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h2 className="mb-4 text-center" style={{ color: '#28a745' }}>{turf.name} Slot Booking</h2>

            <Card className="mb-4 shadow">
                <Card.Body>
                    <Row>
                        <Col md={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="date">
                                    <Form.Label>Select Date:</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group controlId="timeSlot">
                                    <Form.Label>Select Time Slots:</Form.Label>
                                    <div>
                                        {timeSlots.map((slot, index) => (
                                            <Form.Check
                                                key={index}
                                                type="checkbox"
                                                label={slot}
                                                value={slot}
                                                checked={selectedSlots.includes(slot)}
                                                onChange={() => handleSlotChange(slot)}
                                            />
                                        ))}
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="paymentMethod">
                                    <Form.Label>Select Payment Method:</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={paymentMethod}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        required
                                    >
                                        <option value="">-- Select Payment Method --</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Debit Card">Debit Card</option>
                                        <option value="UPI">UPI</option>
                                        <option value="Net Banking">Net Banking</option>
                                    </Form.Control>
                                </Form.Group>

                                <div className="mt-3">
                                    <h5>Total Cost: ₹{totalCost}</h5>
                                </div>

                                <Button variant="success" type="submit" className="mt-3">
                                    Book Now
                                </Button>
                            </Form>
                        </Col>

                        <Col md={6} className="text-center">
                            <h5 style={{ color: '#28a745' }}>Payment Options</h5>
                            <div className="d-flex justify-content-around mt-4">
                                <div>
                                    <FaCreditCard size={50} color="#28a745" />
                                    <p>Credit/Debit Card</p>
                                </div>
                                <div>
                                    <FaMobileAlt size={50} color="#28a745" />
                                    <p>UPI</p>
                                </div>
                                <div>
                                    <FaMoneyBillWave size={50} color="#28a745" />
                                    <p>Payment</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {message && <Alert variant="success" className="mt-3 text-center">{message}</Alert>}
        </Container>
    );
};

export default SlotBooking;
