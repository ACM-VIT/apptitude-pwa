/* eslint-disable prefer-template */
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// assets
import BackArrow from "../../assets/images/backArrow.svg";

// Styles
import "./Otp.css";

const otp = () => {
  // OTP CountDown
  const Ref = useRef(null);

  const [timer, setTimer] = useState("0:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    const { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(minutes + ":" + (seconds > 9 ? seconds : "0" + seconds));
    }
  };

  const clearTimer = (e) => {
    setTimer("0:45");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    const deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 45);
    return deadline;
  };

  const onStartTimer = () => {
    clearTimer(getDeadTime());
  };

  const onClickReset = () => {};

  const resendHandler = () => {
    clearTimer(getDeadTime());
  };

  const verifyHandler = () => {
    console.log("OPT button clicked");
  };

  useEffect(() => {
    clearTimer(getDeadTime());

    // window.onbeforeunload = function () {
    // return false;
    // };
  }, []);

  return (
    <div className="mt-12 mx-5">
      <Link to="/phone">
        <img className="mb-8" src={BackArrow} alt="arrow" />
      </Link>
      <div className="xs:flex xs:flex-col xs:items-center sm:flex sm:flex-col sm:items-center">
        <div className="text-white font-700 text-3xl">Enter OTP</div>
        <div className="text-white font-400 text-sm mt-3 mb-1">
          OTP has been sent to your mobile no.
        </div>

        <div>
          <input
            type="text"
            className="text-white outline-none bg-main w-96 xxs:w-full h-14 px-2 rounded-md border border-yellow-400 "
          />
        </div>
        <div
          className={`${
            timer === "0:00" ? "text-secondary" : "text-white"
          } flex justify-end mt-2 font-400`}
        >
          {timer}
        </div>
      </div>
      <div className="xxs:w-full relative mt-416 bottom-20">
        <div className="flex flex-col">
          <div
            onClick={resendHandler}
            className={`${
              timer === "0:00"
                ? "text-white cursor-pointer"
                : "btn-disable text-secondary "
            }flex justify-center items-center mb-4 font-400 text-center`}
          >
            Resend OTP
          </div>
          <div
            onClick={verifyHandler}
            className="flex w-96 h-14 xxs:w-full rounded-md bg-primary cursor-pointer text-white font-400 items-center justify-center xs:mx-auto sm:mx-auto"
          >
            Verify
          </div>
        </div>
      </div>
    </div>
  );
};

export default otp;
