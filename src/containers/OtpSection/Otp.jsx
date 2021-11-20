import React from "react";

const otp = () => {
  const resendHandler = () => {
    console.log("Resend button clicked");
  };
  const verifyHandler = () => {
    console.log("OPT button clicked");
  };

  return (
    <div className="mt-32 mx-5 sm:mx-0">
      <div className="sm:flex sm:flex-col sm:items-center">
        <div className="text-white font-700 text-3xl">Enter OTP</div>
        <div className="text-white font-400 text-sm mt-3 mb-1">
          OTP has been sent to your mobile no.
        </div>

        <div>
          <input
            type="text"
            className="text-white outline-none bg-main w-96 xxs:w-72 h-14 px-2 rounded-md border border-yellow-400 "
          />
        </div>
      </div>
      <div className="absolute bottom-20 sm:relative sm:mt-416">
        <div className="flex flex-col">
          <div
            onClick={resendHandler}
            className="flex justify-center items-center underline mb-4 text-secondary cursor-pointer font-400 text-center"
          >
            Resend OTP
          </div>
          <div
            onClick={verifyHandler}
            className=" flex w-96 h-14 xxs:w-72 rounded-md bg-primary cursor-pointer text-white font-400 items-center justify-center sm:mx-auto left-0 right-0"
          >
            Verify
          </div>
        </div>
      </div>
    </div>
  );
};

export default otp;
