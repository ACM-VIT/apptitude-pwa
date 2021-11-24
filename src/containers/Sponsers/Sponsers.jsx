import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow.svg";
import celo from "../../assets/images/celo.svg";

const Sponsers = function () {
  return (
    <>
      <Link to="/">
        <img
          src={arrow}
          alt="arrow"
          className="absolute w-6 h-8 top-10 left-4"
        />
      </Link>
      <div className="mt-28 mx-3">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between px-10">
            <div className=" text-white font-700 text-1xl pt-1.5 border-b border-yellow-400">
              <Link to="/sponsers">Sponsers</Link>
            </div>
            <div className="text-secondary text-white font-400 text-1xl pt-1.5 ">
              <Link to="/prizes">Prizes</Link>
            </div>
            <div className="text-secondary text-white font-400 text-1xl pt-1.5 ">
              <Link to="/aboutUs">About Us</Link>
            </div>
          </div>
          <div>
            <img src={celo} alt="celo" className="w-36 h-36" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsers;
