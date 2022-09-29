import React from "react";
import logo from "../images/logo.svg";
import hero from "../images/desktop/image-header.jpg";
import iconArrow from "../images/icon-arrow-down.svg";

const Header = () => {
  return (
    <header>
      <div className="logo-nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <nav className="navigation">
          <ul>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <button className="btn btn-contact">
              <a href="">Contact</a>
            </button>
          </ul>
        </nav>
      </div>
      <div className="hero">
        <div className="lead">
          <h1>We are creatives</h1>
        </div>
        <div className="hero-img">
          <div className="orange">
            <img className="hero-orange" src={hero} alt="orange" />
          </div>
          <div className="arrow">
            <img classname="hero-arrow" src={iconArrow} alt="arrow" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
