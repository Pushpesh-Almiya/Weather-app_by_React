import React from "react";
import '../style.css';
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand mx-5" to="/">
          <i className="fa-sharp fa-solid fa-snowflake mx-2"></i>Weather Report
          <i className="fa-sharp fa-solid fa-snowflake mx-2"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa-solid fa-bars"></i>
          </span>
        </button>
      {/* </div> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mx-5">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/weather">
                Weather
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
