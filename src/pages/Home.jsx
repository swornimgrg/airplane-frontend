import React from "react";
import { Carousel, Container, Image } from "react-bootstrap";
import Flight from "../components/Flight";
import "./Home.css";

function Home() {
  return (
    <div className="wrapper">
      <img src="./images/airplane.jpg" className="banner" />
      <Flight />
    </div>
  );
}

export default Home;
