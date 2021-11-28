import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const closing = () => (
  <>
    <div className="relative h-screen mx-5">
      <div className="text-2xl text-white font-400 pt-28 text-center">
        Thank you for participating in Apptitude 2021. The pitches will start at
        5PM.
      </div>
      <div className="absolute bottom-28 bg-yellow-400 font-700 text-lg w-full h-14 flex justify-center items-center rounded-md">
        <a
          href="https://with.acmvit.in/apptitudevaledictory"
          target="_blank"
          rel="noreferrer"
        >
          Head to the Valedictory
        </a>
      </div>
    </div>
    <Navbar />
  </>
);

export default closing;
