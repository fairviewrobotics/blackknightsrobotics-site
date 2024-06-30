import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./styles/Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [fullTitle, setFullTitle] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const showFullTitle = () => {
    if (window.innerWidth <= 960) {
      setFullTitle(false);
    } else {
      setFullTitle(true);
    }
  };

  const sizeHandler = () => {
    showButton();
    showFullTitle();
  };

  useEffect(() => {
    showButton();
    showFullTitle();
  });

  window.addEventListener("resize", sizeHandler);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            {fullTitle ? "Black Knights Robotics" : "Black Knights"}
            <img src="/images/blackknightslogo.png" alt="Logo"></img>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/robots"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Robots
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sponsors"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sponsors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/calendar"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Calendar
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="https://www.paypal.com/paypalme/blackKnights2036"
                target="_blank"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Donate
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              buttonStyle="btn--outline"
              linkTo={"https://forms.gle/4sZn77WfD19b8MAg6"}
            >
              Join Us
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
