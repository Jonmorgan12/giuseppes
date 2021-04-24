import React from "react";
import "./Navbar.styles.css";

import scooter from "../../assets/scooter.png";
// import Searchbar from "../Searchbar/Searchbar.component";

const NavBar = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="brand-title">Giuseppe's</div>
          <img className="scooter-img" src={scooter} />
          <div className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className="navbar-links">
            <ul>
              <li className="links">HOME</li>
              <li className="links">ABOUT</li>
              <li className="links">MENU</li>
              <li className="links">LOCATIONS</li>
              <li className="links">BANQUETS</li>
              <li className="links">CONTACT</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
