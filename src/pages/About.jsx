import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5">
      <Row className="mb-5">
        <h1>About Us</h1>
        <p>
          Welcome to Ealing Airlines, where our mission is to connect you to the
          world with unparalleled service, comfort, and reliability. As a
          leading provider in the aviation industry, Ealing Airlines is
          dedicated to offering exceptional travel experiences that cater to
          both business and leisure travelers.
        </p>
      </Row>

      <Row className="mb-5">
        <h2>Our Story</h2>
        <p>
          Founded in 1998, Ealing Airlines has grown from a small regional
          carrier into a globally recognized airline. With a strong foundation
          rooted in customer service and safety, we have expanded our routes and
          services to meet the diverse needs of our passengers. Our journey is
          marked by continuous innovation and a commitment to excellence.
        </p>
      </Row>

      <Row className="mb-5">
        <h2>Our Fleet</h2>
        <p>
          Ealing Airlines boasts a modern fleet of aircraft equipped with the
          latest technology to ensure your safety and comfort. Our planes are
          maintained to the highest standards, offering a range of seating
          options to suit every traveler. From our spacious Economy Class to the
          luxurious Business and First Classes, we provide an exceptional
          in-flight experience.
          <br />
          <br />
          Thank you for choosing Ealing Airlines. Whether you're flying for
          business or pleasure, we are here to make your journey enjoyable and
          memorable. We look forward to welcoming you on board and connecting
          you to your next destination.
        </p>
      </Row>
    </Container>
  );
}

export default About;
