import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo192.png";
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
        <Link className="app__navbar-item" to="/"><p>Home</p></Link>
        <Link className="app__navbar-item" to="/current-courses"><p>New Courses</p></Link>
       <Link className="app__navbar-item" to="/apply"><p>Apply</p></Link>
      </div>

      <div className="app__navbar-Button">
        <div className="app__navbar-logginButton"> LOGIN </div>
        <div className="app__navbar-signUpButton"> SIGNUP </div>
      </div>
        <div className="app__navbar-Current-Course-Button"> Current Courses </div>
    </div>
  );
};

export default Navbar;
