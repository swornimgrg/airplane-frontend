import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>
              Founded with a passion for aviation and a commitment to safety,
              Ealing Airlines offers a fleet of modern, well-maintained aircraft
              operated by highly skilled and experienced pilots. Whether you’re
              traveling for business or leisure, our team is dedicated to
              providing you with the highest level of comfort, convenience, and
              reliability.
            </p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <address>
              1234 West Way
              <br />
              London, Ealing, 12345
              <br />
              <a
                href="mailto:ealingairlines@example.com"
                className="text-white"
              >
                ealingairlines@example.com
              </a>
            </address>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            &copy; {new Date().getFullYear()} Ealing Airlines. All rights
            reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
