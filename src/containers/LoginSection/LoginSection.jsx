import React from "react";

import googleLogo from "../../assets/images/googleLogo.svg";
import appleLogo from "../../assets/images/appleLogo.svg";

const loginSection = () => {
  const googleHandler = () => {
    console.log("Login button clicked");
  };
  const appleHandler = () => {
    console.log("Login button clicked");
  };

  return (
    <div className="container mx-auto">
      <div className="my-48 text-white text-3xl text-center">
        Gallery Incoming
      </div>
      <div className="flex flex-col justify-center items-center">
        <div
          onClick={googleHandler}
          className="flex w-96 h-14 rounded-md bg-primary mb-6 cursor-pointer"
        >
          <img className="pl-6 pr-20" src={googleLogo} alt="Google" />
          <button className="font-400 text-white pr-28" type="submit">
            Sign in with Google
          </button>
        </div>
        <div
          onClick={appleHandler}
          className="flex w-96 h-14 rounded-md bg-white mb-10 cursor-pointer"
        >
          <img className="pl-6 pr-20" src={appleLogo} alt="Apple" />
          <button className="font-400" type="submit">
            Sign in with Apple
          </button>
        </div>
      </div>
    </div>
  );
};

export default loginSection;
