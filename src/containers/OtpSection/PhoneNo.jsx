import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const phoneNo = () => {
  const [value, setValue] = useState();
  console.log(value);

  const otpHandler = () => {
    console.log("OPT button clicked");
  };

  return (
    <div className="mt-32 mx-5 sm:mx-0">
      <div className="sm:flex sm:flex-col sm:items-center">
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
      <div className="flex items-center">
        <div
          onClick={otpHandler}
          className="absolute bottom-20 flex w-96 h-14 xxs:w-72 rounded-md bg-primary cursor-pointer text-white font-400 items-center justify-center sm:mx-auto left-0 right-0 mx-5"
        >
          Get OTP
        </div>
      </div>
    </div>
  );
};

export default phoneNo;
