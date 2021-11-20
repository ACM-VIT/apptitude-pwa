import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";
// import CountDown from "../../components/countDown/countDown";

const phoneNo = () => {
  const [value, setValue] = useState();
  console.log(value);

  const otpHandler = () => {
    window.location.href = "/otp";
    // CountDown.onStartTimer();
  };

  return (
    <div className="mt-28 mx-5">
      <div className="flex justify-center items-center">
        <div className="mt-28 absolute sm:flex sm:flex-col">
          <div className="text-white font-700 text-3xl">Phone number</div>
          <div className="text-white font-400 text-sm mt-3 mb-1">
            Enter Mobile number
          </div>
          <div>
            <PhoneInput
              value={value}
              className="text-white w-96 xxs:w-72 h-14 px-2 rounded-md border border-yellow-400 "
              onChange={setValue}
              defaultCountry="IN"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          onClick={otpHandler}
          className="absolute bottom-20 flex w-96 h-14 xxs:w-72 rounded-md bg-primary cursor-pointer text-white font-400 items-center justify-center"
        >
          Get OTP
        </div>
      </div>
    </div>
  );
};

export default phoneNo;
