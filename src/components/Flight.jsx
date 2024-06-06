import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Flight.css";
import { useState, useContext } from "react";
import FlightDetails from "./ui/FlightDetails";
import { FlightContext } from "./context/FlightContext";

function Flight() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const { filteredFlights, filterFlights, loading, error } =
    useContext(FlightContext);
  // console.log(origin, destination, departureDate);

  const handleSearch = async (e) => {
    e.preventDefault();
    filterFlights(origin, destination);
  };

  //  console.log(filteredFlights);
  return (
    <Container className="flight-container">
      <Form onSubmit={handleSearch}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>From</Form.Label>
              <Form.Control
                type="text"
                placeholder="Origin"
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>To</Form.Label>
              <Form.Control
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Departure Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter Date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Button type="submit" className="search-btn">
            Search Flights
          </Button>
        </Row>
      </Form>
      <Row>
        {filteredFlights.map((item, index) => {
          return <FlightDetails key={index} flight={item} />;
        })}
      </Row>
    </Container>
  );
}

export default Flight;
