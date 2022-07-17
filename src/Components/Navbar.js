import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid px-5">
          <a href="/" className="navbar-brand">
            <strong className="fs-4 text-info">Catalog-Z</strong>
          </a>

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
                <a href="/" className="dropdown-item">
                  Science
                </a>
              </li>
              <li>
                <a href="/" className="dropdown-item">
                  Technology
                </a>
              </li>
              <li>
                <a href="/" className="dropdown-item">
                  Business
                </a>
              </li>
              <li>
                <a href="/" className="dropdown-item">
                  Sports
                </a>
              </li>
              <li>
                <a href="/" className="dropdown-item">
                  Nature
                </a>
              </li>
              <li>
                <a href="/" className="dropdown-item">
                  Men
                </a>
              </li>
              <li>
                <a href="/" className="dropdown-item">
                  Women
                </a>
              </li>
              <li>
                <a href="/" className="dropdown-item">
                  Clothing
                </a>
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
                <a href="/" className="nav-link active">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Videos
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
