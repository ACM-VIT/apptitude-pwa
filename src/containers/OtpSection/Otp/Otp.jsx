/* eslint-disable no-restricted-globals */
/* eslint-disable prefer-template */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown";

// assets
import BackArrow from "../../../assets/images/backArrow.svg";

// Styles
import "./Otp.css";

const otp = () => {
  const [minutesDisplay, setMinutesDisplay] = useState("");
  const [secondsDisplay, setSecondsDisplay] = useState("");

  const resendHandler = () => {
    window.location.href = "/otp";
  };

  const verifyHandler = () => {
    console.log("OPT button clicked");
  };

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      setMinutesDisplay("0");
      setSecondsDisplay("0");
      return <span className="text-secondary font-400">0:00</span>;
    }
    if (seconds < 10) {
      return `0:0${seconds}`;
    }
    return (
      <div>
        {minutes}:{seconds}
      </div>
    );
  };

  const getLocalStorageValue = (s) => localStorage.getItem(s);

  const [data, setData] = useState({ date: Date.now(), delay: 45000 });
  const wantedDelay = 45000;

  useEffect(() => {
    const savedDate = getLocalStorageValue("end_date");
    if (savedDate != null && !isNaN(savedDate)) {
      const currentTime = Date.now();
      const delta = parseInt(savedDate, 10) - currentTime;

      if (delta > wantedDelay) {
        if (localStorage.getItem("end_date").length > 0)
          localStorage.removeItem("end_date");
      } else {
        setData({ date: currentTime, delay: delta });
      }
    }
  }, []);

  return (
    <div className="relative h-screen pt-12 mx-5">
      <Link to="/phone">
        <img className="mb-8" src={BackArrow} alt="arrow" />
      </Link>
      <div className="sm:flex sm:flex-col sm:items-center">
        <div className="text-white font-700 text-3xl">Enter OTP</div>
        <div className="text-white font-400 text-sm mt-3 mb-1">
          OTP has been sent to your mobile no.
        </div>

        <div>
          <input
            type="text"
            className="text-white outline-none bg-main w-96 xs:w-full xxs:w-full h-14 px-2 rounded-md border border-yellow-400"
          />
        </div>
        <div className="flex text-white justify-end font-400">
          <div>
            <Countdown
              date={data.date + data.delay}
              renderer={renderer}
              onStart={(delta) => {
                if (localStorage.getItem("end_date") == null)
                  localStorage.setItem(
                    "end_date",
                    JSON.stringify(data.date + data.delay)
                  );
              }}
              onComplete={() => {
                if (localStorage.getItem("end_date") != null)
                  localStorage.removeItem("end_date");
              }}
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="absolute bottom-10 flex flex-col items-center justify-center left-0 right-0">
          <div
            onClick={resendHandler}
            className={`${
              minutesDisplay === "0" && secondsDisplay === "0"
                ? "text-white cursor-pointer"
                : "text-secondary btn-disable"
            } flex justify-center items-center mb-4 font-400 text-center`}
          >
            Resend OTP
          </div>
          <div
            onClick={verifyHandler}
            className="flex w-96 h-14 xs:w-full xxs:w-full rounded-md bg-primary cursor-pointer text-white font-400 items-center justify-center xs:mx-auto sm:mx-auto"
          >
            Verify
          </div>
        </div>
      </div>
    </div>
  );
};

export default otp;
