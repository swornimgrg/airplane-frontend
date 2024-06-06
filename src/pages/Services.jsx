import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const Services = () => {
  return (
    <Container className="mt-5 our-services-section">
      <Row className="mb-5">
        <Col>
          <h2>Our Services</h2>
          <Card className="our-services-card">
            <Card.Body>
              <ListGroup variant="flush" className="our-services-list">
                <ListGroup.Item>
                  <strong>Global Connectivity:</strong> With a network spanning
                  over 100 destinations worldwide, Ealing Airlines connects you
                  to key cities across North America, Europe, Asia, and beyond.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>In-Flight Comfort:</strong> Enjoy complimentary meals,
                  in-flight entertainment, and Wi-Fi on select flights. Our
                  attentive cabin crew is always ready to assist you.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Loyalty Program:</strong> Join our Ealing Elite
                  frequent flyer program to earn miles, enjoy exclusive
                  benefits, and access priority services.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Sustainability:</strong> We are committed to reducing
                  our environmental impact through innovative practices and
                  sustainable initiatives.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Personalized Travel Assistance:</strong> Our dedicated
                  travel assistants are available to help you plan every detail
                  of your journey, ensuring a seamless experience from start to
                  finish.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Exclusive Lounges:</strong> Relax and unwind in our
                  exclusive lounges available at select airports, offering
                  premium amenities and services.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5 explore-destinations-section">
        <Col>
          <h2>Explore Destinations</h2>
          <Row>
            <Col md={4}>
              <Card className="destination-card">
                <Card.Img
                  variant="top"
                  src="./images/paris.jpg"
                  alt="Destination 1"
                  style={{ width: "400px", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Paris, France</Card.Title>
                  <Card.Text>
                    Experience the romance and beauty of Paris, with its iconic
                    landmarks and exquisite cuisine.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="destination-card">
                <Card.Img
                  variant="top"
                  src="./images/jp.jpg"
                  alt="Destination 2"
                  style={{ width: "400px", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>Tokyo, Japan</Card.Title>
                  <Card.Text>
                    Discover the vibrant culture and cutting-edge technology in
                    the bustling city of Tokyo.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="destination-card">
                <Card.Img
                  variant="top"
                  src="./images/ny.jpg"
                  alt="Destination 3"
                  style={{ width: "400px", height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>New York, USA</Card.Title>
                  <Card.Text>
                    Explore the iconic skyline and diverse neighborhoods of New
                    York City with good music.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
