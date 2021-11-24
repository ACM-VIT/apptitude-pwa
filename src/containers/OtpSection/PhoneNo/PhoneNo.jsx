import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const phoneNo = () => {
  const [value, setValue] = useState();
  console.log(value);

  const otpHandler = () => {
    window.location.href = "/otp";
  };

  return (
    <div className="relative h-screen pt-28 mx-5">
      <div className="xs:flex xs:flex-col xs:items-center sm:flex sm:flex-col sm:items-center">
        <div className="text-white font-700 text-3xl">Phone number</div>
        <div className="text-white font-400 text-sm mt-3 mb-1">
          Enter Mobile number
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
              className="flex w-96 h-14 xxs:w-full xs:w-80 rounded-md bg-primary cursor-pointer text-white font-400 items-center justify-center"
            >
              Get OTP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default phoneNo;