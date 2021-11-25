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
      >
        <div className="">
          <img src={apptitude} alt="img1" />
          <p className="text-white font-700 mt-0 text-xl">
            Welcome to Apptitude!
          </p>
          <p className="font-400 graycolor mt-2 text-base">
            Test yourself against the best app devs out there!
          </p>
        </div>
        <div>
          <img src={target} alt="img1" />
          <p className="text-white font-700 mt-0 text-xl">
            Give yourself a challenge
          </p>
          <p className="font-400 graycolor mt-2 text-base">
            With our unique problem statements!
          </p>
        </div>
        <div>
          <img src={trophy} alt="img1" />
          <p className="text-white font-700 mt-0 text-xl">
            Exciting prizes and schwags
          </p>
          <p className="font-400 graycolor mt-2 text-base">
            Keep an eye on the exciting prizes and schwags that we have lined up
            for you!
          </p>
        </div>
      </Carousel>
    );
  }
}
export default carousel;
