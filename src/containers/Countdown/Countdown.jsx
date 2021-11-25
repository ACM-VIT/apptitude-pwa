import React from "react";
import Count from "react-countdown";
import "./Countdown.css";
import Navbar from "../../components/Navbar/Navbar";

const Countdown = function () {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <h1>OK</h1>;
    }
    const addZero = (num) => {
      let time = num.toString();
      if (time.length === 1) {
        time = `0${time}`;
      }
      return time;
    };
    return (
      <span>
        {addZero(days)}
        <span className=" mx-2">:</span>
        {addZero(hours)}
        <span className=" mx-2">:</span>
        {addZero(minutes)}
        <span className=" mx-2">:</span>
        {addZero(seconds)}
      </span>
    );
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center mt-52 px-12 xs:px-20 sm:px-40 text-4xl sm:text-5xl font-700">
        <div className="text-white">Hackathon will start in</div>
        <div className="grad font-500 pt-8 text-4xl sm:text-6xl px-8">
          <Count
            date="2021-11-26T21:00:00"
            renderer={renderer}
            intervalDelay={0}
          />
        </div>
        <div className="flex flex-row text-white text-lg sm:text-xl pt-4 px-8 space-x-11 sm:space-x-14">
          <div>Days</div>
          <div>hrs</div>
          <div>mins</div>
          <div>secs</div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Countdown;
