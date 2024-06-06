import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function Help() {
  return (
    <div className="wrapper">
      <h2>Help and FAQ</h2>
      <Accordion defaultActiveKey={["0"]} alwaysOpen bsPrefix="accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header> How do I book a flight?</Accordion.Header>
          <Accordion.Body>
            You can book a flight by visiting our Booking page and filling out
            the required details. Once your booking is confirmed, you will
            receive a confirmation email with your flight details.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {" "}
            How can I change or cancel my booking?
          </Accordion.Header>
          <Accordion.Body>
            To change or cancel your booking, please visit our Manage Booking
            page and enter your booking reference and last name. Follow the
            instructions to modify or cancel your reservation.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How can I contact customer support?
          </Accordion.Header>
          <Accordion.Body>
            You can contact our customer support team by calling +1-800-EALING
            or emailing support@ealingairlines.com. We are available 24/7 to
            assist you with your queries.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is your baggage policy?</Accordion.Header>
          <Accordion.Body>
            Our baggage policy allows you to carry one checked bag and one
            carry-on bag. The checked bag should not exceed 23kg, and the
            carry-on should fit in the overhead compartment.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            What Wi-Fi is available on Ealing Airways flights?
          </Accordion.Header>
          <Accordion.Body>
            Onboard Wi-Fi is available for one flight segment within your booked
            itinerary. When you purchase onboard Wi-Fi through our website, you
            will be able to view all flights that offer Wi-Fi services on the
            purchase pages according to your travel itinerary and select options
            based on service availability.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Help;
