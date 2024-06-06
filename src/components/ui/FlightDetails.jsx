import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function FlightDetails({ flight }) {
  const sectionStyle = {
    border: "1px solid #ccc",
    padding: "10px",
    borderRadius: "10px",
  };

  const sectionDetails = flight.plane_details.section_details.map(
    (section) => ({
      id: section.id,
      name: section.name,
    })
  );

  const matchedSections = sectionDetails.map((section) => ({
    ...section,
    price: flight.pricing[section.id],
  }));

  function formatDateTimeString(dateString) {
    // Parse the date string
    const date = new Date(dateString);

    // Extract year, month, day, and time components
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, "0"); // getUTCMonth() is zero-based
    const day = String(date.getUTCDate()).padStart(2, "0");
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");

    // Combine them into the desired format
    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return { formattedDate, formattedTime };
  }

  const { formattedDate, formattedTime } = formatDateTimeString(
    flight.departure_time
  );
  return (
    <Card >
      <Card.Header>Results</Card.Header>
      <Card.Body>
        <Card.Title>
          Select your departure from {flight.departure_from} to{" "}
          {flight.destination}
        </Card.Title>
        <Card.Text>
          <Row>
            <Col>
              <strong>Departure Date:</strong> {formattedDate}
            </Col>
            <Col>
              <strong>Departure Time:</strong> {formattedTime}
            </Col>
            {matchedSections.map((section, index) => (
              <>
                <Col key={index}>
                  <div style={sectionStyle}>
                    {section.name} £{section.price}
                  </div>
                </Col>
              </>
            ))}
          </Row>
        </Card.Text>
        <Button variant="primary" as={Link} to="/booking">
          Book Flight
        </Button>
      </Card.Body>
    </Card>
  );
}

export default FlightDetails;
