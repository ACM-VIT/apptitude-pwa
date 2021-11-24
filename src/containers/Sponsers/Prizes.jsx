import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow.svg";
import firstprize from "../../assets/images/firstprize.svg";
import secondprize from "../../assets/images/secondprize.svg";
import thirdprize from "../../assets/images/thirdprize.svg";
import celotrack from "../../assets/images/celotrack.svg";
import bestfresher from "../../assets/images/bestfresher.svg";
import inhack from "../../assets/images/inhack.svg";
import Navbar from "../../components/Navbar/Navbar";
// import "./Prizes.css";

const Sponsers = function () {
  return (
    <>
      <Link to="/problems">
        <img
          src={arrow}
          alt="arrow"
          className="absolute w-6 h-8 top-10 left-4"
        />
      </Link>
      <div>
        <div className="mt-24 mx-3 mb-32">
          <div className="flex flex-row justify-between px-10 mb-12">
            <div className="text-secondary text-white font-400 text-1xl pt-1.5 ">
              <Link to="/sponsers">Sponsers</Link>
            </div>
            <div className=" text-white font-700 text-1xl pt-1.5 border-b border-yellow-400">
              <Link to="/prizes">Prizes</Link>
            </div>
            <div className="text-secondary text-white font-400 text-1xl pt-1.5 ">
              <Link to="/aboutus">About Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={firstprize}
              alt="First Prize"
              className="w-36 h-36 mb-8"
            />
            <img
              src={secondprize}
              alt="Second Prize"
              className="w-36 h-36 mb-8"
            />
            <img
              src={thirdprize}
              alt="Third Prize"
              className="w-36 h-36 mb-8"
            />
            <img
              src={celotrack}
              alt="Celo Sponser Track"
              className="w-36 h-36 mb-8"
            />
            <img
              src={bestfresher}
              alt="Best Fresher's Team"
              className="w-36 h-36 mb-10"
            />
            <img src={inhack} alt="In-hack Event" className="w-36 h-36" />
          </div>
        </div>
        <Navbar />
      </div>
    </>
  );
};

export default Sponsers;
