import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ isLoggedIn, onLogout }) => {
  const handleLogoutClick = (e) => {
    e.preventDefault();
    onLogout();
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} size="lg" />
          </Link>
        </li>
        {!isLoggedIn && (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {isLoggedIn && (
          <>
            <li>
              <Link to="/Form">Form</Link>
            </li>
            <li>
              <Link to="/Table">Table</Link>
            </li>
            <li>
              <a href="/" onClick={handleLogoutClick}>
                Logout
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};
export default Navbar;
