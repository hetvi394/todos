import React, { useRef, useState, useContext } from "react";
import Form from "../Form/Form";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faSignInAlt,
  faToggleOn,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [message, setMessage] = useState("");
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      setMessage("All fields are required!");
      return;
    }

    const storedEntries = JSON.parse(localStorage.getItem("userdata")) || [];
    const user = storedEntries.find(
      (entry) => entry.email === email && entry.password === password
    );

    if (user) {
      setMessage("Login Successful!");
      setLoggedIn(true);
      onLogin();
      navigate("/Form");
    } else {
      setMessage("Invalid email or password.");
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div className={`form-container ${theme}`}>
      <FontAwesomeIcon icon={faToggleOn} size="2x" onClick={toggleTheme} />
      {!loggedIn ? (
        <form onSubmit={handleSubmit} className="login-form">
          <h1>
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </h1>
          <div className="form-group">
            <label htmlFor="email">
              <FontAwesomeIcon icon={faEnvelope} />
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <FontAwesomeIcon icon={faLock} />
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              className="form-input"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="form-button">
            Login
          </button>
          {message && <p className="form-message">{message}</p>}
        </form>
      ) : (
        <Form />
      )}
    </div>
  );
}

export default Login;