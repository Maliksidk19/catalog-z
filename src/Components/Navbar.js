import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid px-5">
          <Link to="/" className="navbar-brand">
            <strong className="fs-4 text-info">Catalog-Z</strong>
          </Link>

          <div className="dropdown">
            <button
              className="btn btn-light text-dark dropdown-toggle"
              type="button"
              id="dropdownmenu"
              data-bs-toggle="dropdown"
            >
              Categories
            </button>

            <ul className="dropdown-menu">
              <li>
                <Link to="/science" className="dropdown-item">
                  Science
                </Link>
              </li>
              <li>
                <Link to="/technology" className="dropdown-item">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/business" className="dropdown-item">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/sports" className="dropdown-item">
                  Sports
                </Link>
              </li>
              <li>
                <Link to="/nature" className="dropdown-item">
                  Nature
                </Link>
              </li>
              <li>
                <Link to="/men" className="dropdown-item">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/women" className="dropdown-item">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/cars" className="dropdown-item">
                  Cars
                </Link>
              </li>
            </ul>
          </div>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse me-5 pe-5" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/videos" className="nav-link">
                  Videos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
