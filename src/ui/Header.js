import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light" style={{ background: "#e1bee7" }} >
          <img src="trickmix.png" alt="logo" height="50em" width="250em"/>
          <form className="form-inline">
            <Link to="/">
              <button
                className="btn my-2 my-sm-0"
                type="button"
                style={{ color: "purple", border: "1px solid purple", marginRight: "0.5em", marginLeft: "0.5em"  }}
              >
                Home
              </button>
            </Link>
            <Link to="/games">
              <button
                className="btn my-2 my-sm-0"
                type="button"
                style={{ color: "purple", border: "1px solid purple", marginRight: "0.5em", marginLeft: "0.5em"  }}
              >
                Games
              </button>
            </Link>
            <Link to="/about">
              <button
                className="btn my-2 my-sm-0"
                type="button"
                style={{ color: "purple", border: "1px solid purple",  marginRight: "0.5em", marginLeft: "0.5em"  }}
              >
                About
              </button>
            </Link>
          </form>
        </nav>
      </div>
    );
  }
}



// #7986cb