/* eslint-disable react/jsx-boolean-value */
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Assets
import apptitude from "../../assets/images/apptitude.svg";
import trophy from "../../assets/images/trophy.svg";
import target from "../../assets/images/target.svg";

// styles
import "./Carousel.css";

class carousel extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
      >
        <div>
          <img className="xxs:h-80" src={apptitude} alt="apptitude" />
        </div>
        <div>
          <img className="xxs:h-80" src={target} alt="target" />
        </div>
        <div>
          <img className="xxs:h-80" src={trophy} alt="trophy" />
        </div>
      </Carousel>
    );
  }
}
export default carousel;
