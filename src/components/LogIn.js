import { Card, Form, Button, Alert } from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [userPreferences, setUserPreferences] = useState([]);

  useEffect(() => {
    fetch("https://61f3a5d810f0f7001768c544.mockapi.io/Preferences")
      .then((responses) => {
        return responses.json();
      })
      .then((users) => {
        setUserPreferences(users);
      });
  }, []);

  async function onSubmitHandler(e) {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      const response = await login(
        emailRef.current.value,
        passwordRef.current.value
      );
      const login_id = response.user.email;
      const realPreference = userPreferences.filter((preferences) => {
        return preferences.email.includes(login_id);
      });
      if (realPreference.length) {
        history.push({
          pathname: "/shopping",
          categories: realPreference[0].preference,
          id: realPreference[0].id,
          email: realPreference[0].email,
        });
      } else {
        history.push({
          pathname: "/preference",
          email: response.user.email,
        });
      }
    } catch {
      setError("Failed to Login");
    }
    setLoading(false);
  }
  return (
    <div>
      <h1
        className="d-flex justify-content-center mt5"
        style={{ fontFamily: "monospace" }}
      >
        <em>Ratan's E-Market Place</em>
      </h1>
      <div className="w-100" style={{ maxWidth: "400px", margin: "auto" }}>
        <div>
          <div>
            <Card>
              <Card.Body>
                {error && <Alert varient="danger">{error}</Alert>}
                <h2 className="text-center mb-4">Log In</h2>
                <Form onSubmit={onSubmitHandler}>
                  <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Button
                    disabled={loading}
                    className="w-100 mt-3"
                    type="submit"
                  >
                    LogIn
                  </Button>
                </Form>
                <div className="w-100 text-center mt-3">
                  <Link to="/forgot-password">Forgot Password?</Link>
                </div>
              </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Need an account? <Link to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
