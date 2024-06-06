import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import authService from "../components/auth/authService";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authService.register(email, password, age);
      console.log("Registration successful", response);

      // If you need to check specific properties in the response, you can do so here
      if (response && response.access) {
        navigate("/login"); // Navigate to the profile page after successful login
      } else {
        setMessage("Registration failed: No token received");
      }
    } catch (error) {
      console.error("Registration error", error);
      const resMessage = error.response?.data?.message || error.toString();
      setMessage(resMessage);
    }
  };
  // console.log("Email:", email);
  // console.log("Password:", password);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h2 className="text-center mt-5">Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3 w-100">
              Register
            </Button>
          </Form>
          <Link to="/login">Already have an account?</Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
