import React, { Component } from "react";
import "../App.css";
import Photos from "./Photos";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }
  handleClick = () => {
    let val = document.getElementById("search").value;
    this.setState({
      value: val,
    });

    console.log(this.state.value);
    if (!this.state.value === null) {
      return <Photos cat={this.state.value} />;
    }
  };
  render() {
    return (
      <>
        <header
          id="header"
          className="d-flex align-items-center justify-content-center"
        >
          <img src="./img/hero.jpg" alt="Hero" />

          <div className="col input-group position-absolute" id="inputForm">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              id="search"
            />
            <button
              className="btn btn-info btn-outline-0"
              onClick={this.handleClick}
            >
              <i className="bx bx-search px-2"></i>
            </button>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
