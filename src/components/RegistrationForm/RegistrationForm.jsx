import React, { useRef, useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ThemeContext } from "../ThemeContext/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock, faRegistered, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import InputField from "../shared/shared"; // Import the new InputField component
import "./RegistrationForm.css";

function RegistrationForm() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [userdata, setEntries] = useState([]);
  const [message, setMessage] = useState("");
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!name || !email || !password) {
      setMessage("All fields are required!");
      return;
    }

    const newEntry = { name, email, password };
    const updatedEntries = [...userdata, newEntry];
    setEntries(updatedEntries);

    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setMessage("Registration Successful!");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  useEffect(() => {
    const storedEntries = JSON.parse(localStorage.getItem("userdata"));
    if (storedEntries) setEntries(storedEntries);
  }, []);

  useEffect(() => {
    localStorage.setItem("userdata", JSON.stringify(userdata));
  }, [userdata]);

  return (
    <div className={`form-container ${theme}`}>
      <FontAwesomeIcon icon={faToggleOn} size="2x" onClick={toggleTheme} />
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faRegistered} size="2x" />
        </div>
        <h1 style={{ textAlign: "center" }}>Register</h1>
        <InputField
          icon={faUser}
          type="text"
          id="name"
          placeholder="Name"
          ref={nameRef}
        />
        <InputField
          icon={faEnvelope}
          type="email"
          id="email"
          placeholder="Email"
          ref={emailRef}
        />
        <InputField
          icon={faLock}
          type="password"
          id="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <button type="submit" className="form-button">
          Register
        </button>
        {message && <p className="form-message">{message}</p>}
        <Link className="link" to="/login">
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
}

export default RegistrationForm;
