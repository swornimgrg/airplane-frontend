import React from "react";
import Seat from "../components/ui/Seat";
import "./SeatsLayout.css";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function SeatsLayout({ section, selectedSeats, handleSeatClick, lockedSeats }) {
  const rows = section.row_count;
  const columns = section.column_count;
  const startRow = section.row_starts_from;
  const aisleColumns = new Set(section.aisle_columns);
  const disabledSeats = section.disabled_seats.map((seat) =>
    JSON.stringify(seat)
  );
  const fireExitSeats = section.fire_exit_seats.map((seat) =>
    JSON.stringify(seat)
  );
  const usableSeats = section.usable_seats.map((seat) => JSON.stringify(seat));

  const numberToAlphabet = (number) => {
    return String.fromCharCode(64 + number); // 64 is the ASCII value of 'A' - 1
  };

  const renderSeats = () => {
    const seatRows = [];
    for (let row = startRow; row <= startRow + rows - 1; row++) {
      const seatColumns = [];
      for (let col = 1; col <= columns; col++) {
        const seatArray = [row, col];
        const seatId = `${row}-${col}`;
        // console.log(seatId);
        // console.log(seatArray);
        // console.log(usableSeats.includes(JSON.stringify(seatArray)));
        const seatName = `${row}${numberToAlphabet(col)}`;

        let seatType = "unusable"; // Default type if not usable

        if (disabledSeats.includes(JSON.stringify(seatArray))) {
          seatType = "disabled"; // Set to disabled if in disabled_seats
        }

        if (usableSeats.includes(JSON.stringify(seatArray))) {
          seatType = "available"; // Set to available if in usable_seats
          if (lockedSeats.has(seatId)) {
            seatType = "locked";
          } else if (selectedSeats.has(seatId)) {
            seatType = "selected";
          } else if (fireExitSeats.includes(JSON.stringify(seatArray))) {
            seatType = "fireExit";
          } else if (aisleColumns.has(col)) {
            seatType = "aisle";
          }
        }

        // console.log(`Rendering seat: ${seatId} as ${seatType}`);

        seatColumns.push(
          <Seat
            key={seatId}
            seatName={seatName}
            seatType={seatType}
            onClick={() => handleSeatClick(seatId, section)}
          />
        );
      }
      seatRows.push(
        <div key={row} className="seat-row">
          {seatColumns}
        </div>
      );
    }
    return seatRows;
  };

  return <div className="seats-layout">{renderSeats()}</div>;
}

SeatsLayout.propTypes = {
  section: PropTypes.object.isRequired,
  selectedSeats: PropTypes.instanceOf(Set).isRequired,
  handleSeatClick: PropTypes.func.isRequired,
  lockedSeats: PropTypes.instanceOf(Set).isRequired,
};

export default SeatsLayout;
