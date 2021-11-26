/* eslint-disable consistent-return */
import React from "react";
import { signInWithGoogle } from "../../services/firebase";

import Carousel from "../../components/Carousel/Carousel";

// Assets
import googleLogo from "../../assets/images/googleLogo.svg";
import appleLogo from "../../assets/images/appleLogo.svg";

const loginSection = () => {
  const appleHandler = () => {
    console.log("Login button clicked");
  };

  if (sessionStorage.getItem("AM") !== null) {
    if (localStorage.getItem("nixt") === null) {
      window.location.href = "/phone";
      return;
    }
    window.location.href = "/timeline";
    return;
  }

  return (
    <div className="relative h-screen mx-5 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center mb-12 xxs:mb-32">
        <Carousel />
      </div>
      <div className="absolute bottom-10 flex flex-col items-center justify-center left-0 right-0">
        <div
          onClick={signInWithGoogle}
          className="flex w-full relative justify-center items-center xxs:px-6 h-14 rounded-md google mb-6 cursor-pointer"
        >
          <img
            className="absolute left-8 top-4"
            src={googleLogo}
            alt="Google"
          />
          <button
            className="font-400 text-base text-white"
            type="submit"
            id="sign-in"
          >
            Sign in with Google
          </button>
        </div>
        {/* <div
          onClick={appleHandler}
          className="flex w-96 xxs:px-6 xs:w-80 xxs:w-full h-14 rounded-md bg-white mb-6 cursor-pointer"
        >
          <img
            className="pl-5 pr-20 xs:pr-12 xxs:pl-0 xxs:pr-0"
            src={appleLogo}
            alt="Apple"
          />
          <button
            className="font-400 text-base pl-8 xxs:pl-10 xs:pl-0 xxs:pr-0"
            type="submit"
          >
            Sign in with Apple
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default loginSection;
