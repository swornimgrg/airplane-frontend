import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import authService from "../components/auth/authService";
import "./Payment.css";

const Payment = () => {
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [ccv, setccv] = useState("");
  const location = useLocation();
  const { totalPrice, selectedSeats } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2 className="text-center mt-5">Payment</h2>
          
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                placeholder="Enter card"
                value={card}
                onChange={(e) => setCard(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Control
                placeholder="Expiry"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </Form.Group>
            <br />

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="CCV"
                value={ccv}
                onChange={(e) => setccv(e.target.value)}
              />
            </Form.Group>
            <div className="payment-wrapper">
          <p className="payment-details">Total Price: £{totalPrice}</p>
          <p className="payment-details">Selected Seats: {selectedSeats.join(", ")}</p></div>
            <Button variant="primary" type="submit" className="mt-3 w-100">
              Pay
            </Button>
          </Form>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
