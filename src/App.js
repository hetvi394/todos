import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Form from "./components/Form/Form";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import Login from "./components/Login/Login";
import Table from "./components/Table/Table";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { ThemeProvider } from "./components/ThemeContext/ThemeContext";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    window.location.href = "/";
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/register"
              element={
                !isLoggedIn ? <RegistrationForm /> : <Navigate to="/form" />
              }
            />
            <Route
              path="/login"
              element={
                !isLoggedIn ? (
                  <Login onLogin={handleLogin} />
                ) : (
                  <Navigate to="/form" />
                )
              }
            />
            <Route
              path="/Form"
              element={isLoggedIn ? <Form /> : <Navigate to="/login" />}
            />
            <Route
              path="/Table"
              element={isLoggedIn ? <Table /> : <Navigate to="/login" />}
            />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};
export default App;
