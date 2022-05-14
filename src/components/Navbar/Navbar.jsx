import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import saylani from "../../assets/Saylani-logo.png";

const Navbar = () => {
  return (
    //   {/* //! Navbar Items */}

    <div className="app__navbar">
      <div className="app__navbar-logo-container">
        <img src={saylani} className="app__navbar-logo" alt="saylani-logo" />
      </div>

      {/* //! Navbar Items */}

      <div className="app__navbar-items">
        <Link className="app__navbar-item" to="/">
          <p>Home</p>
        </Link>
        <Link className="app__navbar-item" to="/apply">
          <p>Apply</p>
        </Link>
      </div>

      <div className="app__navbar-Button">
        <Link className="app__navbar-logginButton" to="/signin"> LOGIN </Link>
        <Link className="app__navbar-signUpButton" to="/signup"> SIGNUP </Link>
      </div>
      <Link className="app__navbar-Current-Course-Button" to="current-courses">
       
        Current Courses
      </Link>
    </div>
  );
};

export default Navbar;
