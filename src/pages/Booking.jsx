import React, { useContext, useEffect, useState } from "react";
import SeatsLayout from "./SeatsLayout";
import { FlightContext } from "../components/context/FlightContext";
import Legend from "../components/ui/Legend";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./SeatsLayout.css";
import { useAuth } from "../components/context/AuthContext";
import { useNavigate } from "react-router-dom";

const convertSeatIdentifier = (seatId) => {
  const [row, column] = seatId.split("-").map(Number);
  const columnLetter = String.fromCharCode(64 + column); // Convert number to letter (1 -> A, 2 -> B, etc.)
  return `${row}${columnLetter}`;
};

function Booking() {
  const { isAuthenticated } = useAuth();
  const { filteredFlights } = useContext(FlightContext);
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [lockedSeats, setLockedSeats] = useState(new Set());
  const [timers, setTimers] = useState({});
  const navigate = useNavigate(); // Corrected initialization
  const [totalPrice, setTotalPrice] = useState(0);

  const numberToAlphabet = (number) => {
    return String.fromCharCode(64 + number); // 64 is the ASCII value of 'A' - 1
  };

  const handleSeatClick = (seatId) => {
    setSelectedSeats((prevSelectedSeats) => {
      const newSelectedSeats = new Set(prevSelectedSeats);

      if (newSelectedSeats.has(seatId)) {
        newSelectedSeats.delete(seatId);
        clearTimeout(timers[seatId]);
      } else {
        newSelectedSeats.add(seatId);
      }

      return newSelectedSeats;
    });
  };

  const handleReserveSeats = (sections) => {
    if (!isAuthenticated) {
      alert("You must be logged in to reserve seats.");
      return;
    }

    sections = Array.from(sections);
    console.log(sections);

    let isValidReservation = true;
    let newTotalPrice = 0;

    sections.forEach((section) => {
      const sortedSelectedSeats = Array.from(selectedSeats).sort();
      let inSerialOrder = true;
      for (let i = 1; i < sortedSelectedSeats.length; i++) {
        const [prevRow, prevCol] = sortedSelectedSeats[i - 1]
          .split("-")
          .map(Number);
        const [currRow, currCol] = sortedSelectedSeats[i]
          .split("-")
          .map(Number);

        if (prevRow === currRow) {
          if (currCol !== prevCol + 1) {
            inSerialOrder = false;
            break;
          }
        } else if (
          currRow !== prevRow + 1 ||
          currCol !== 1 ||
          prevCol !== section.column_count
        ) {
          inSerialOrder = false;
          break;
        }
      }

      // Check if 60% or more of the seats are not booked
      const totalSeats = section.row_count * section.column_count;
      const bookedSeats = selectedSeats.size;
      const percentageBooked = (bookedSeats / totalSeats) * 100;

      // Check if trying to book a single middle seat when less than 60% are booked
      const isSingleMiddleSeat =
        selectedSeats.size === 1 &&
        parseInt(Array.from(selectedSeats)[0].split("-")[1]) > 1 &&
        parseInt(Array.from(selectedSeats)[0].split("-")[1]) <
          section.column_count;

      if (isSingleMiddleSeat && percentageBooked < 60) {
        alert("Cannot book a single middle seat. Please select a window seat.");
        isValidReservation = false;
        return;
      }

      if (!inSerialOrder && percentageBooked < 60) {
        alert("Seats are not in serial order.");
        isValidReservation = false;
        return;
      }

      // Calculate the price based on the section type
      let seatPrice = 0;
      if (section.name.toLowerCase().includes("first class")) {
        seatPrice = 5000;
      } else if (section.name.toLowerCase().includes("business")) {
        seatPrice = 3000;
      } else if (section.name.toLowerCase().includes("economy")) {
        seatPrice = 1500;
      }

      newTotalPrice += seatPrice * selectedSeats.size;
    });

    if (!isValidReservation) {
      return;
    }

    setLockedSeats(new Set(selectedSeats));
    setTotalPrice(newTotalPrice);

    // Start timers for each selected seat
    selectedSeats.forEach((seatId) => {
      const timer = setTimeout(() => {
        setSelectedSeats((prevSelectedSeats) => {
          const newSelectedSeats = new Set(prevSelectedSeats);
          newSelectedSeats.delete(seatId);
          return newSelectedSeats;
        });
        setLockedSeats((prevLockedSeats) => {
          const newLockedSeats = new Set(prevLockedSeats);
          newLockedSeats.delete(seatId);
          return newLockedSeats;
        });
      }, 10 * 60 * 1000); // 10 minutes

      setTimers((prevTimers) => ({ ...prevTimers, [seatId]: timer }));
    });

    console.log(totalPrice, selectedSeats);
  };

  const handlePayment = () => {
    navigate("/payment", {
      state: {
        totalPrice: totalPrice,
        selectedSeats: Array.from(selectedSeats).map(convertSeatIdentifier),
      },
    });
  };
  useEffect(() => {
    console.log("Filtered Flights in Booking:", filteredFlights);
  }, [filteredFlights, totalPrice]);

  return (
    <Container>
      <Row>
        <Col>
          <h4>Booking Details</h4>
        </Col>
        <Col>
          <Legend />
        </Col>
      </Row>

      {filteredFlights.length > 0 ? (
        filteredFlights.map((flight, index) => (
          <div key={index}>
            <div className="flight-layout">
              <div>
                <p>
                  <strong>Flight Number:</strong> {flight.flight_number}
                </p>
                <p>
                  <strong>Origin:</strong> {flight.departure_from}
                </p>
                <p>
                  <strong>Destination:</strong> {flight.destination}
                </p>
                <p>
                  <strong>Departure Time:</strong> {flight.departure_time}
                </p>
              </div>
              <div className="btn-group">
                <button
                  className="reserve-btn"
                  onClick={() =>
                    handleReserveSeats(flight.plane_details.section_details)
                  }
                >
                  Reserve Seats
                </button>
                <button className="pay-btn" onClick={handlePayment}>
                  Pay
                </button>
              </div>
            </div>
            <hr className="divider" />
            {flight.plane_details.section_details.map((section, secIndex) => {
              return (
                <div key={secIndex}>
                  <h5 style={{ textAlign: "center" }}>{section.name}</h5>
                  <SeatsLayout
                    section={section}
                    selectedSeats={selectedSeats}
                    handleSeatClick={(seatId) => handleSeatClick(seatId)}
                    lockedSeats={lockedSeats}
                  />
                </div>
              );
            })}
          </div>
        ))
      ) : (
        <p>No flights found.</p>
      )}
    </Container>
  );
}

export default Booking;
