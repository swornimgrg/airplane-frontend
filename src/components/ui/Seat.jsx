import React from "react";
import "./Seat.css";

const Seat = ({ seatType, seatName, onClick }) => {
  let className = "seat";

  if (seatType === "disabled") className += " disabled-seat";
  if (seatType === "locked") className += " locked-seat";
  if (seatType === "selected") className += " selected-seat";
  if (seatType === "fireExit") className += " fire-exit-seat";
  if (seatType === "aisle") className += " aisle-seat";
  if (seatType === "available") className += " available-seat";

  // console.log(`Seat ${seatName} has className: ${className}`);
  return (
    <div>
      <div className={className} onClick={onClick}>
        {seatName}
      </div>
    </div>
  );
};

export default Seat;
