/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import Countdown from "react-countdown";
import "react-phone-number-input/style.css";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../../services/firebase";

// Assets
import BackArrow from "../../../assets/images/backArrow.svg";

import "./Otp.css";

const phoneNo = () => {
  const [checkotp, setCheckOtp] = useState(false);
  const [minutesDisplay, setMinutesDisplay] = useState("");
  const [secondsDisplay, setSecondsDisplay] = useState("");
  const [value, setValue] = useState();
  const [otp, setOtp] = useState();
  const [otpSent, setOtpSent] = useState(false);
  const [data, setData] = useState({ date: Date.now(), delay: 45000 });

  const wantedDelay = 45000;

  if (
    sessionStorage.getItem("AM") === null ||
    sessionStorage.getItem("AM") === ""
  ) {
    window.location.href = "/";
  }

  const phoneNumber = value;
  const appVerifier = window.recaptchaVerifier;

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

  useEffect(() => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "getotp",
      {
        size: "invisible",
        callback: () => {},
      },
      auth
    );

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

  const check = () => {};

  const otpHandler = () => {
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("Verification code sent");
        console.log(phoneNumber);
        setCheckOtp(true);
      })
      .catch((error) => {
        console.log(error);
        window.location.href = "/";
        sessionStorage.removeItem("AM");
      });
  };

  const verifyHandler = () => {
    console.log("OPT button clicked");
    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        setOtpSent(true);
        sessionStorage.setItem("PH", result.user.phoneNumber);
        window.location.href = "/createteam";
      })
      .catch(() => {
        console.log("Verification failed");
      });
  };

  return checkotp === false ? (
    <div className="relative h-screen pt-28 mx-5">
      <div className="xs:flex xs:flex-col xs:items-center sm:flex sm:flex-col sm:items-center">
        <div className="text-white font-700 text-3xl">Phone Number</div>
        <div className="text-white font-400 text-sm mt-3 mb-1">
          Enter Mobile Number (with country code)
        </div>
        <div className="">
          <PhoneInput
            value={value}
            className="text-white w-96 xxs:w-full xs:w-80 h-14 px-2 rounded-md border border-yellow-400 "
            onChange={setValue}
            defaultCountry="IN"
          />
        </div>
      </div>
      <div className="xs:flex xs:justify-center xs:items-center sm:flex sm:justify-center sm:items-center">
        <div className="absolute bottom-10 right-0 left-0">
          <div className="xs:flex xs:justify-center xs:items-center sm:flex sm:justify-center sm:items-center">
            <div
              onClick={otpHandler}
              id="getotp"
              className="flex w-96 h-14 xxs:w-full xs:w-80 rounded-md bg-primary cursor-pointer text-white font-400 items-center justify-center"
            >
              Get OTP
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="relative h-screen pt-12 mx-5">
      <div onClick={setCheckOtp === false}>
        <img className="mb-8" src={BackArrow} alt="arrow" />
      </div>
      <div className="sm:flex sm:flex-col sm:items-center">
        <div className="text-white font-700 text-3xl">Enter OTP</div>
        <div className="text-white font-400 text-sm mt-3 mb-1">
          OTP has been sent to your mobile no.
        </div>

        <div>
          <input
            type="text"
            className="text-white outline-none bg-main w-96 xs:w-full xxs:w-full h-14 px-2 rounded-md border border-yellow-400"
            onChange={(event) => {
              setOtp(event.target.value);
            }}
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
            onClick={otpHandler}
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

export default phoneNo;
