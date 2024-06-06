import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import authService from "../components/auth/authService";
import { useAuth } from "../components/context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const success = await login(email, password);
      console.log("Login successful");

      if (success) {
        navigate("/booking");
      } else {
        setMessage("Login failed: Invalid email or password");
      }
    } catch (error) {
      console.error("Login error", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h2 className="text-center mt-5">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Link to="/forgot-password">Forgot password?</Link>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3 w-100">
              Login
            </Button>
            <Link to="/register">Don't have account?</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
