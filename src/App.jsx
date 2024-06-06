import { useState } from "react";
import NavigationBar from "./components/ui/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Footer from "./components/ui/Footer";
import "./App.css";
import About from "./pages/About";
import Services from "./pages/Services";
import Help from "./pages/Help";
import Booking from "./pages/Booking";
import { FlightProvider } from "./components/context/FlightContext";
import Register from "./pages/Register";
import { AuthProvider } from "./components/context/AuthContext";
import Payment from "./pages/Payment";

function App() {
  return (
    <FlightProvider>
      <AuthProvider>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/help" element={<Help />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </div>
      </AuthProvider>
    </FlightProvider>
  );
}

export default App;
