import React, { createContext, useState, useEffect } from "react";

const FlightContext = createContext();

function FlightProvider({ children }) {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/flights/")
      .then((response) => response.json())
      .then((data) => {
        setFlights(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load data");
        setLoading(false);
      });
  }, []);
// console.log(flights);
  const filterFlights = (origin, destination) => {
    const filtered = flights.filter((item) => {
      return (
        item.destination.toLowerCase().includes(destination.toLowerCase()) &&
        item.departure_from.toLowerCase().includes(origin.toLowerCase())
      );
    });

    setFilteredFlights(filtered);
  };

  return (
    <FlightContext.Provider
      value={{ flights, filteredFlights, filterFlights, loading, error }}
    >
      {children}
    </FlightContext.Provider>
  );
}

export { FlightContext, FlightProvider };
