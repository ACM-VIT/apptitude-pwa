import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../assets/images/arrow.svg";
import celo from "../../assets/images/celo.svg";
import Navbar from "../../components/Navbar/Navbar";

const Sponsers = function () {
  return (
    <>
      <div className="pt-28 mx-3">
        <div className="flex flex-col w-full">
          <div className="flex flex-row justify-between px-10">
            <div className=" text-white font-700 text-1xl pt-1.5 border-b border-yellow-400">
              <Link to="/sponsors">Sponsors</Link>
            </div>
            <div className="text-secondary text-white font-400 text-1xl pt-1.5 ">
              <Link to="/prizes">Prizes</Link>
            </div>
            <div className="text-secondary text-white font-400 text-1xl pt-1.5 ">
              <Link to="/aboutus">About Us</Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={celo} alt="celo" className="mx-auto" />
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Sponsers;
