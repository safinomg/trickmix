import React, { Component } from "react";
import trickmix from "../../image/trickmix.png";

export default class Home extends Component {
  render() {
    return (
      <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <h5
          style={{
            fontSize: "5em",
            textAlign: "center",
            color: "#7e57c2",
            fontFamily: "Pacifico",
          }}
        >
          Welcome to
        </h5>
        <div
          id="carouselExampleInterval"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active" data-interval="10000">
              <img src={trickmix} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item" data-interval="2000">
              <img src={trickmix} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={trickmix} class="d-block w-100" alt="..." />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
